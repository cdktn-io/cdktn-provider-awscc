# `networkfirewallRuleGroup` Submodule <a name="`networkfirewallRuleGroup` Submodule" id="@cdktn/provider-awscc.networkfirewallRuleGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkfirewallRuleGroup <a name="NetworkfirewallRuleGroup" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group awscc_networkfirewall_rule_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallrulegroup"

networkfirewallrulegroup.NewNetworkfirewallRuleGroup(scope Construct, id *string, config NetworkfirewallRuleGroupConfig) NetworkfirewallRuleGroup
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupConfig">NetworkfirewallRuleGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupConfig">NetworkfirewallRuleGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.putRuleGroup">PutRuleGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.putSummaryConfiguration">PutSummaryConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.resetRuleGroup">ResetRuleGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.resetSummaryConfiguration">ResetSummaryConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRuleGroup` <a name="PutRuleGroup" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.putRuleGroup"></a>

```go
func PutRuleGroup(value NetworkfirewallRuleGroupRuleGroup)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.putRuleGroup.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroup">NetworkfirewallRuleGroupRuleGroup</a>

---

##### `PutSummaryConfiguration` <a name="PutSummaryConfiguration" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.putSummaryConfiguration"></a>

```go
func PutSummaryConfiguration(value NetworkfirewallRuleGroupSummaryConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.putSummaryConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupSummaryConfiguration">NetworkfirewallRuleGroupSummaryConfiguration</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetRuleGroup` <a name="ResetRuleGroup" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.resetRuleGroup"></a>

```go
func ResetRuleGroup()
```

##### `ResetSummaryConfiguration` <a name="ResetSummaryConfiguration" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.resetSummaryConfiguration"></a>

```go
func ResetSummaryConfiguration()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a NetworkfirewallRuleGroup resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallrulegroup"

networkfirewallrulegroup.NetworkfirewallRuleGroup_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallrulegroup"

networkfirewallrulegroup.NetworkfirewallRuleGroup_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallrulegroup"

networkfirewallrulegroup.NetworkfirewallRuleGroup_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallrulegroup"

networkfirewallrulegroup.NetworkfirewallRuleGroup_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a NetworkfirewallRuleGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the NetworkfirewallRuleGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing NetworkfirewallRuleGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the NetworkfirewallRuleGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.property.ruleGroup">RuleGroup</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupOutputReference">NetworkfirewallRuleGroupRuleGroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.property.ruleGroupArn">RuleGroupArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.property.ruleGroupId">RuleGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.property.summaryConfiguration">SummaryConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupSummaryConfigurationOutputReference">NetworkfirewallRuleGroupSummaryConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupTagsList">NetworkfirewallRuleGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.property.capacityInput">CapacityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.property.ruleGroupInput">RuleGroupInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.property.ruleGroupNameInput">RuleGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.property.summaryConfigurationInput">SummaryConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.property.capacity">Capacity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.property.ruleGroupName">RuleGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.property.type">Type</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `RuleGroup`<sup>Required</sup> <a name="RuleGroup" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.property.ruleGroup"></a>

```go
func RuleGroup() NetworkfirewallRuleGroupRuleGroupOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupOutputReference">NetworkfirewallRuleGroupRuleGroupOutputReference</a>

---

##### `RuleGroupArn`<sup>Required</sup> <a name="RuleGroupArn" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.property.ruleGroupArn"></a>

```go
func RuleGroupArn() *string
```

- *Type:* *string

---

##### `RuleGroupId`<sup>Required</sup> <a name="RuleGroupId" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.property.ruleGroupId"></a>

```go
func RuleGroupId() *string
```

- *Type:* *string

---

##### `SummaryConfiguration`<sup>Required</sup> <a name="SummaryConfiguration" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.property.summaryConfiguration"></a>

```go
func SummaryConfiguration() NetworkfirewallRuleGroupSummaryConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupSummaryConfigurationOutputReference">NetworkfirewallRuleGroupSummaryConfigurationOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.property.tags"></a>

```go
func Tags() NetworkfirewallRuleGroupTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupTagsList">NetworkfirewallRuleGroupTagsList</a>

---

##### `CapacityInput`<sup>Optional</sup> <a name="CapacityInput" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.property.capacityInput"></a>

```go
func CapacityInput() *f64
```

- *Type:* *f64

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `RuleGroupInput`<sup>Optional</sup> <a name="RuleGroupInput" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.property.ruleGroupInput"></a>

```go
func RuleGroupInput() interface{}
```

- *Type:* interface{}

---

##### `RuleGroupNameInput`<sup>Optional</sup> <a name="RuleGroupNameInput" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.property.ruleGroupNameInput"></a>

```go
func RuleGroupNameInput() *string
```

- *Type:* *string

---

##### `SummaryConfigurationInput`<sup>Optional</sup> <a name="SummaryConfigurationInput" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.property.summaryConfigurationInput"></a>

```go
func SummaryConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Capacity`<sup>Required</sup> <a name="Capacity" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.property.capacity"></a>

```go
func Capacity() *f64
```

- *Type:* *f64

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `RuleGroupName`<sup>Required</sup> <a name="RuleGroupName" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.property.ruleGroupName"></a>

```go
func RuleGroupName() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroup.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkfirewallRuleGroupConfig <a name="NetworkfirewallRuleGroupConfig" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallrulegroup"

&networkfirewallrulegroup.NetworkfirewallRuleGroupConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Capacity: *f64,
	RuleGroupName: *string,
	Type: *string,
	Description: *string,
	RuleGroup: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroup,
	SummaryConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupSummaryConfiguration,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupConfig.property.capacity">Capacity</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#capacity NetworkfirewallRuleGroup#capacity}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupConfig.property.ruleGroupName">RuleGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#rule_group_name NetworkfirewallRuleGroup#rule_group_name}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupConfig.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#type NetworkfirewallRuleGroup#type}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#description NetworkfirewallRuleGroup#description}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupConfig.property.ruleGroup">RuleGroup</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroup">NetworkfirewallRuleGroupRuleGroup</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#rule_group NetworkfirewallRuleGroup#rule_group}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupConfig.property.summaryConfiguration">SummaryConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupSummaryConfiguration">NetworkfirewallRuleGroupSummaryConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#summary_configuration NetworkfirewallRuleGroup#summary_configuration}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupConfig.property.tags">Tags</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#tags NetworkfirewallRuleGroup#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Capacity`<sup>Required</sup> <a name="Capacity" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupConfig.property.capacity"></a>

```go
Capacity *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#capacity NetworkfirewallRuleGroup#capacity}.

---

##### `RuleGroupName`<sup>Required</sup> <a name="RuleGroupName" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupConfig.property.ruleGroupName"></a>

```go
RuleGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#rule_group_name NetworkfirewallRuleGroup#rule_group_name}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#type NetworkfirewallRuleGroup#type}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#description NetworkfirewallRuleGroup#description}.

---

##### `RuleGroup`<sup>Optional</sup> <a name="RuleGroup" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupConfig.property.ruleGroup"></a>

```go
RuleGroup NetworkfirewallRuleGroupRuleGroup
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroup">NetworkfirewallRuleGroupRuleGroup</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#rule_group NetworkfirewallRuleGroup#rule_group}.

---

##### `SummaryConfiguration`<sup>Optional</sup> <a name="SummaryConfiguration" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupConfig.property.summaryConfiguration"></a>

```go
SummaryConfiguration NetworkfirewallRuleGroupSummaryConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupSummaryConfiguration">NetworkfirewallRuleGroupSummaryConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#summary_configuration NetworkfirewallRuleGroup#summary_configuration}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#tags NetworkfirewallRuleGroup#tags}.

---

### NetworkfirewallRuleGroupRuleGroup <a name="NetworkfirewallRuleGroupRuleGroup" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroup"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroup.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallrulegroup"

&networkfirewallrulegroup.NetworkfirewallRuleGroupRuleGroup {
	ReferenceSets: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSets,
	RulesSource: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSource,
	RuleVariables: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariables,
	StatefulRuleOptions: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupStatefulRuleOptions,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroup.property.referenceSets">ReferenceSets</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSets">NetworkfirewallRuleGroupRuleGroupReferenceSets</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#reference_sets NetworkfirewallRuleGroup#reference_sets}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroup.property.rulesSource">RulesSource</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSource">NetworkfirewallRuleGroupRuleGroupRulesSource</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#rules_source NetworkfirewallRuleGroup#rules_source}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroup.property.ruleVariables">RuleVariables</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariables">NetworkfirewallRuleGroupRuleGroupRuleVariables</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#rule_variables NetworkfirewallRuleGroup#rule_variables}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroup.property.statefulRuleOptions">StatefulRuleOptions</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupStatefulRuleOptions">NetworkfirewallRuleGroupRuleGroupStatefulRuleOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#stateful_rule_options NetworkfirewallRuleGroup#stateful_rule_options}. |

---

##### `ReferenceSets`<sup>Optional</sup> <a name="ReferenceSets" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroup.property.referenceSets"></a>

```go
ReferenceSets NetworkfirewallRuleGroupRuleGroupReferenceSets
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSets">NetworkfirewallRuleGroupRuleGroupReferenceSets</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#reference_sets NetworkfirewallRuleGroup#reference_sets}.

---

##### `RulesSource`<sup>Optional</sup> <a name="RulesSource" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroup.property.rulesSource"></a>

```go
RulesSource NetworkfirewallRuleGroupRuleGroupRulesSource
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSource">NetworkfirewallRuleGroupRuleGroupRulesSource</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#rules_source NetworkfirewallRuleGroup#rules_source}.

---

##### `RuleVariables`<sup>Optional</sup> <a name="RuleVariables" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroup.property.ruleVariables"></a>

```go
RuleVariables NetworkfirewallRuleGroupRuleGroupRuleVariables
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariables">NetworkfirewallRuleGroupRuleGroupRuleVariables</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#rule_variables NetworkfirewallRuleGroup#rule_variables}.

---

##### `StatefulRuleOptions`<sup>Optional</sup> <a name="StatefulRuleOptions" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroup.property.statefulRuleOptions"></a>

```go
StatefulRuleOptions NetworkfirewallRuleGroupRuleGroupStatefulRuleOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupStatefulRuleOptions">NetworkfirewallRuleGroupRuleGroupStatefulRuleOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#stateful_rule_options NetworkfirewallRuleGroup#stateful_rule_options}.

---

### NetworkfirewallRuleGroupRuleGroupReferenceSets <a name="NetworkfirewallRuleGroupRuleGroupReferenceSets" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSets.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallrulegroup"

&networkfirewallrulegroup.NetworkfirewallRuleGroupRuleGroupReferenceSets {
	IpSetReferences: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSets.property.ipSetReferences">IpSetReferences</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#ip_set_references NetworkfirewallRuleGroup#ip_set_references}. |

---

##### `IpSetReferences`<sup>Optional</sup> <a name="IpSetReferences" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSets.property.ipSetReferences"></a>

```go
IpSetReferences interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#ip_set_references NetworkfirewallRuleGroup#ip_set_references}.

---

### NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferences <a name="NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferences" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferences"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferences.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallrulegroup"

&networkfirewallrulegroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferences {
	ReferenceArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferences.property.referenceArn">ReferenceArn</a></code> | <code>*string</code> | A resource ARN. |

---

##### `ReferenceArn`<sup>Optional</sup> <a name="ReferenceArn" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferences.property.referenceArn"></a>

```go
ReferenceArn *string
```

- *Type:* *string

A resource ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#reference_arn NetworkfirewallRuleGroup#reference_arn}

---

### NetworkfirewallRuleGroupRuleGroupRulesSource <a name="NetworkfirewallRuleGroupRuleGroupRulesSource" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallrulegroup"

&networkfirewallrulegroup.NetworkfirewallRuleGroupRuleGroupRulesSource {
	RulesSourceList: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStruct,
	RulesString: *string,
	StatefulRules: interface{},
	StatelessRulesAndCustomActions: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActions,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSource.property.rulesSourceList">RulesSourceList</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStruct">NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStruct</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#rules_source_list NetworkfirewallRuleGroup#rules_source_list}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSource.property.rulesString">RulesString</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#rules_string NetworkfirewallRuleGroup#rules_string}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSource.property.statefulRules">StatefulRules</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#stateful_rules NetworkfirewallRuleGroup#stateful_rules}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSource.property.statelessRulesAndCustomActions">StatelessRulesAndCustomActions</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActions">NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#stateless_rules_and_custom_actions NetworkfirewallRuleGroup#stateless_rules_and_custom_actions}. |

---

##### `RulesSourceList`<sup>Optional</sup> <a name="RulesSourceList" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSource.property.rulesSourceList"></a>

```go
RulesSourceList NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStruct
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStruct">NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStruct</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#rules_source_list NetworkfirewallRuleGroup#rules_source_list}.

---

##### `RulesString`<sup>Optional</sup> <a name="RulesString" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSource.property.rulesString"></a>

```go
RulesString *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#rules_string NetworkfirewallRuleGroup#rules_string}.

---

##### `StatefulRules`<sup>Optional</sup> <a name="StatefulRules" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSource.property.statefulRules"></a>

```go
StatefulRules interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#stateful_rules NetworkfirewallRuleGroup#stateful_rules}.

---

##### `StatelessRulesAndCustomActions`<sup>Optional</sup> <a name="StatelessRulesAndCustomActions" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSource.property.statelessRulesAndCustomActions"></a>

```go
StatelessRulesAndCustomActions NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActions
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActions">NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#stateless_rules_and_custom_actions NetworkfirewallRuleGroup#stateless_rules_and_custom_actions}.

---

### NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStruct <a name="NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStruct" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStruct.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallrulegroup"

&networkfirewallrulegroup.NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStruct {
	GeneratedRulesType: *string,
	Targets: *[]*string,
	TargetTypes: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStruct.property.generatedRulesType">GeneratedRulesType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#generated_rules_type NetworkfirewallRuleGroup#generated_rules_type}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStruct.property.targets">Targets</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#targets NetworkfirewallRuleGroup#targets}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStruct.property.targetTypes">TargetTypes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#target_types NetworkfirewallRuleGroup#target_types}. |

---

##### `GeneratedRulesType`<sup>Optional</sup> <a name="GeneratedRulesType" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStruct.property.generatedRulesType"></a>

```go
GeneratedRulesType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#generated_rules_type NetworkfirewallRuleGroup#generated_rules_type}.

---

##### `Targets`<sup>Optional</sup> <a name="Targets" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStruct.property.targets"></a>

```go
Targets *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#targets NetworkfirewallRuleGroup#targets}.

---

##### `TargetTypes`<sup>Optional</sup> <a name="TargetTypes" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStruct.property.targetTypes"></a>

```go
TargetTypes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#target_types NetworkfirewallRuleGroup#target_types}.

---

### NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRules <a name="NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRules" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRules.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallrulegroup"

&networkfirewallrulegroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRules {
	Action: *string,
	Header: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeader,
	RuleOptions: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRules.property.action">Action</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#action NetworkfirewallRuleGroup#action}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRules.property.header">Header</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeader">NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeader</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#header NetworkfirewallRuleGroup#header}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRules.property.ruleOptions">RuleOptions</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#rule_options NetworkfirewallRuleGroup#rule_options}. |

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRules.property.action"></a>

```go
Action *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#action NetworkfirewallRuleGroup#action}.

---

##### `Header`<sup>Optional</sup> <a name="Header" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRules.property.header"></a>

```go
Header NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeader
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeader">NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeader</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#header NetworkfirewallRuleGroup#header}.

---

##### `RuleOptions`<sup>Optional</sup> <a name="RuleOptions" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRules.property.ruleOptions"></a>

```go
RuleOptions interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#rule_options NetworkfirewallRuleGroup#rule_options}.

---

### NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeader <a name="NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeader" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeader"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeader.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallrulegroup"

&networkfirewallrulegroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeader {
	Destination: *string,
	DestinationPort: *string,
	Direction: *string,
	Protocol: *string,
	Source: *string,
	SourcePort: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeader.property.destination">Destination</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#destination NetworkfirewallRuleGroup#destination}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeader.property.destinationPort">DestinationPort</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#destination_port NetworkfirewallRuleGroup#destination_port}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeader.property.direction">Direction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#direction NetworkfirewallRuleGroup#direction}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeader.property.protocol">Protocol</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#protocol NetworkfirewallRuleGroup#protocol}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeader.property.source">Source</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#source NetworkfirewallRuleGroup#source}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeader.property.sourcePort">SourcePort</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#source_port NetworkfirewallRuleGroup#source_port}. |

---

##### `Destination`<sup>Optional</sup> <a name="Destination" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeader.property.destination"></a>

```go
Destination *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#destination NetworkfirewallRuleGroup#destination}.

---

##### `DestinationPort`<sup>Optional</sup> <a name="DestinationPort" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeader.property.destinationPort"></a>

```go
DestinationPort *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#destination_port NetworkfirewallRuleGroup#destination_port}.

---

##### `Direction`<sup>Optional</sup> <a name="Direction" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeader.property.direction"></a>

```go
Direction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#direction NetworkfirewallRuleGroup#direction}.

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeader.property.protocol"></a>

```go
Protocol *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#protocol NetworkfirewallRuleGroup#protocol}.

---

##### `Source`<sup>Optional</sup> <a name="Source" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeader.property.source"></a>

```go
Source *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#source NetworkfirewallRuleGroup#source}.

---

##### `SourcePort`<sup>Optional</sup> <a name="SourcePort" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeader.property.sourcePort"></a>

```go
SourcePort *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#source_port NetworkfirewallRuleGroup#source_port}.

---

### NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptions <a name="NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptions" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallrulegroup"

&networkfirewallrulegroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptions {
	Keyword: *string,
	Settings: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptions.property.keyword">Keyword</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#keyword NetworkfirewallRuleGroup#keyword}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptions.property.settings">Settings</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#settings NetworkfirewallRuleGroup#settings}. |

---

##### `Keyword`<sup>Optional</sup> <a name="Keyword" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptions.property.keyword"></a>

```go
Keyword *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#keyword NetworkfirewallRuleGroup#keyword}.

---

##### `Settings`<sup>Optional</sup> <a name="Settings" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptions.property.settings"></a>

```go
Settings *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#settings NetworkfirewallRuleGroup#settings}.

---

### NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActions <a name="NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActions" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallrulegroup"

&networkfirewallrulegroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActions {
	CustomActions: interface{},
	StatelessRules: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActions.property.customActions">CustomActions</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#custom_actions NetworkfirewallRuleGroup#custom_actions}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActions.property.statelessRules">StatelessRules</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#stateless_rules NetworkfirewallRuleGroup#stateless_rules}. |

---

##### `CustomActions`<sup>Optional</sup> <a name="CustomActions" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActions.property.customActions"></a>

```go
CustomActions interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#custom_actions NetworkfirewallRuleGroup#custom_actions}.

---

##### `StatelessRules`<sup>Optional</sup> <a name="StatelessRules" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActions.property.statelessRules"></a>

```go
StatelessRules interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#stateless_rules NetworkfirewallRuleGroup#stateless_rules}.

---

### NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActions <a name="NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActions" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallrulegroup"

&networkfirewallrulegroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActions {
	ActionDefinition: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinition,
	ActionName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActions.property.actionDefinition">ActionDefinition</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinition">NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinition</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#action_definition NetworkfirewallRuleGroup#action_definition}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActions.property.actionName">ActionName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#action_name NetworkfirewallRuleGroup#action_name}. |

---

##### `ActionDefinition`<sup>Optional</sup> <a name="ActionDefinition" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActions.property.actionDefinition"></a>

```go
ActionDefinition NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinition
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinition">NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinition</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#action_definition NetworkfirewallRuleGroup#action_definition}.

---

##### `ActionName`<sup>Optional</sup> <a name="ActionName" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActions.property.actionName"></a>

```go
ActionName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#action_name NetworkfirewallRuleGroup#action_name}.

---

### NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinition <a name="NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinition" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinition.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallrulegroup"

&networkfirewallrulegroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinition {
	PublishMetricAction: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricAction,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinition.property.publishMetricAction">PublishMetricAction</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricAction">NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricAction</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#publish_metric_action NetworkfirewallRuleGroup#publish_metric_action}. |

---

##### `PublishMetricAction`<sup>Optional</sup> <a name="PublishMetricAction" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinition.property.publishMetricAction"></a>

```go
PublishMetricAction NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricAction
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricAction">NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricAction</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#publish_metric_action NetworkfirewallRuleGroup#publish_metric_action}.

---

### NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricAction <a name="NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricAction" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricAction.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallrulegroup"

&networkfirewallrulegroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricAction {
	Dimensions: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricAction.property.dimensions">Dimensions</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#dimensions NetworkfirewallRuleGroup#dimensions}. |

---

##### `Dimensions`<sup>Optional</sup> <a name="Dimensions" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricAction.property.dimensions"></a>

```go
Dimensions interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#dimensions NetworkfirewallRuleGroup#dimensions}.

---

### NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensions <a name="NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensions" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallrulegroup"

&networkfirewallrulegroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensions {
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensions.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#value NetworkfirewallRuleGroup#value}. |

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensions.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#value NetworkfirewallRuleGroup#value}.

---

### NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRules <a name="NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRules" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRules.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallrulegroup"

&networkfirewallrulegroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRules {
	Priority: *f64,
	RuleDefinition: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinition,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRules.property.priority">Priority</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#priority NetworkfirewallRuleGroup#priority}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRules.property.ruleDefinition">RuleDefinition</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinition">NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinition</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#rule_definition NetworkfirewallRuleGroup#rule_definition}. |

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRules.property.priority"></a>

```go
Priority *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#priority NetworkfirewallRuleGroup#priority}.

---

##### `RuleDefinition`<sup>Optional</sup> <a name="RuleDefinition" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRules.property.ruleDefinition"></a>

```go
RuleDefinition NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinition
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinition">NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinition</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#rule_definition NetworkfirewallRuleGroup#rule_definition}.

---

### NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinition <a name="NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinition" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinition.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallrulegroup"

&networkfirewallrulegroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinition {
	Actions: *[]*string,
	MatchAttributes: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributes,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinition.property.actions">Actions</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#actions NetworkfirewallRuleGroup#actions}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinition.property.matchAttributes">MatchAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributes">NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributes</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#match_attributes NetworkfirewallRuleGroup#match_attributes}. |

---

##### `Actions`<sup>Optional</sup> <a name="Actions" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinition.property.actions"></a>

```go
Actions *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#actions NetworkfirewallRuleGroup#actions}.

---

##### `MatchAttributes`<sup>Optional</sup> <a name="MatchAttributes" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinition.property.matchAttributes"></a>

```go
MatchAttributes NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributes
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributes">NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributes</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#match_attributes NetworkfirewallRuleGroup#match_attributes}.

---

### NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributes <a name="NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributes" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallrulegroup"

&networkfirewallrulegroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributes {
	DestinationPorts: interface{},
	Destinations: interface{},
	Protocols: *[]*f64,
	SourcePorts: interface{},
	Sources: interface{},
	TcpFlags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributes.property.destinationPorts">DestinationPorts</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#destination_ports NetworkfirewallRuleGroup#destination_ports}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributes.property.destinations">Destinations</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#destinations NetworkfirewallRuleGroup#destinations}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributes.property.protocols">Protocols</a></code> | <code>*[]*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#protocols NetworkfirewallRuleGroup#protocols}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributes.property.sourcePorts">SourcePorts</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#source_ports NetworkfirewallRuleGroup#source_ports}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributes.property.sources">Sources</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#sources NetworkfirewallRuleGroup#sources}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributes.property.tcpFlags">TcpFlags</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#tcp_flags NetworkfirewallRuleGroup#tcp_flags}. |

---

##### `DestinationPorts`<sup>Optional</sup> <a name="DestinationPorts" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributes.property.destinationPorts"></a>

```go
DestinationPorts interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#destination_ports NetworkfirewallRuleGroup#destination_ports}.

---

##### `Destinations`<sup>Optional</sup> <a name="Destinations" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributes.property.destinations"></a>

```go
Destinations interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#destinations NetworkfirewallRuleGroup#destinations}.

---

##### `Protocols`<sup>Optional</sup> <a name="Protocols" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributes.property.protocols"></a>

```go
Protocols *[]*f64
```

- *Type:* *[]*f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#protocols NetworkfirewallRuleGroup#protocols}.

---

##### `SourcePorts`<sup>Optional</sup> <a name="SourcePorts" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributes.property.sourcePorts"></a>

```go
SourcePorts interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#source_ports NetworkfirewallRuleGroup#source_ports}.

---

##### `Sources`<sup>Optional</sup> <a name="Sources" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributes.property.sources"></a>

```go
Sources interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#sources NetworkfirewallRuleGroup#sources}.

---

##### `TcpFlags`<sup>Optional</sup> <a name="TcpFlags" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributes.property.tcpFlags"></a>

```go
TcpFlags interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#tcp_flags NetworkfirewallRuleGroup#tcp_flags}.

---

### NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPorts <a name="NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPorts" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPorts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPorts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallrulegroup"

&networkfirewallrulegroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPorts {
	FromPort: *f64,
	ToPort: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPorts.property.fromPort">FromPort</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#from_port NetworkfirewallRuleGroup#from_port}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPorts.property.toPort">ToPort</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#to_port NetworkfirewallRuleGroup#to_port}. |

---

##### `FromPort`<sup>Optional</sup> <a name="FromPort" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPorts.property.fromPort"></a>

```go
FromPort *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#from_port NetworkfirewallRuleGroup#from_port}.

---

##### `ToPort`<sup>Optional</sup> <a name="ToPort" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPorts.property.toPort"></a>

```go
ToPort *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#to_port NetworkfirewallRuleGroup#to_port}.

---

### NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinations <a name="NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinations" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallrulegroup"

&networkfirewallrulegroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinations {
	AddressDefinition: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinations.property.addressDefinition">AddressDefinition</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#address_definition NetworkfirewallRuleGroup#address_definition}. |

---

##### `AddressDefinition`<sup>Optional</sup> <a name="AddressDefinition" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinations.property.addressDefinition"></a>

```go
AddressDefinition *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#address_definition NetworkfirewallRuleGroup#address_definition}.

---

### NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePorts <a name="NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePorts" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePorts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePorts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallrulegroup"

&networkfirewallrulegroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePorts {
	FromPort: *f64,
	ToPort: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePorts.property.fromPort">FromPort</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#from_port NetworkfirewallRuleGroup#from_port}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePorts.property.toPort">ToPort</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#to_port NetworkfirewallRuleGroup#to_port}. |

---

##### `FromPort`<sup>Optional</sup> <a name="FromPort" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePorts.property.fromPort"></a>

```go
FromPort *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#from_port NetworkfirewallRuleGroup#from_port}.

---

##### `ToPort`<sup>Optional</sup> <a name="ToPort" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePorts.property.toPort"></a>

```go
ToPort *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#to_port NetworkfirewallRuleGroup#to_port}.

---

### NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSources <a name="NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSources" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSources.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallrulegroup"

&networkfirewallrulegroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSources {
	AddressDefinition: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSources.property.addressDefinition">AddressDefinition</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#address_definition NetworkfirewallRuleGroup#address_definition}. |

---

##### `AddressDefinition`<sup>Optional</sup> <a name="AddressDefinition" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSources.property.addressDefinition"></a>

```go
AddressDefinition *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#address_definition NetworkfirewallRuleGroup#address_definition}.

---

### NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlags <a name="NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlags" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallrulegroup"

&networkfirewallrulegroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlags {
	Flags: *[]*string,
	Masks: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlags.property.flags">Flags</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#flags NetworkfirewallRuleGroup#flags}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlags.property.masks">Masks</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#masks NetworkfirewallRuleGroup#masks}. |

---

##### `Flags`<sup>Optional</sup> <a name="Flags" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlags.property.flags"></a>

```go
Flags *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#flags NetworkfirewallRuleGroup#flags}.

---

##### `Masks`<sup>Optional</sup> <a name="Masks" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlags.property.masks"></a>

```go
Masks *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#masks NetworkfirewallRuleGroup#masks}.

---

### NetworkfirewallRuleGroupRuleGroupRuleVariables <a name="NetworkfirewallRuleGroupRuleGroupRuleVariables" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariables.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallrulegroup"

&networkfirewallrulegroup.NetworkfirewallRuleGroupRuleGroupRuleVariables {
	IpSets: interface{},
	PortSets: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariables.property.ipSets">IpSets</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#ip_sets NetworkfirewallRuleGroup#ip_sets}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariables.property.portSets">PortSets</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#port_sets NetworkfirewallRuleGroup#port_sets}. |

---

##### `IpSets`<sup>Optional</sup> <a name="IpSets" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariables.property.ipSets"></a>

```go
IpSets interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#ip_sets NetworkfirewallRuleGroup#ip_sets}.

---

##### `PortSets`<sup>Optional</sup> <a name="PortSets" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariables.property.portSets"></a>

```go
PortSets interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#port_sets NetworkfirewallRuleGroup#port_sets}.

---

### NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSets <a name="NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSets" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSets.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallrulegroup"

&networkfirewallrulegroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSets {
	Definition: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSets.property.definition">Definition</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#definition NetworkfirewallRuleGroup#definition}. |

---

##### `Definition`<sup>Optional</sup> <a name="Definition" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSets.property.definition"></a>

```go
Definition *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#definition NetworkfirewallRuleGroup#definition}.

---

### NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSets <a name="NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSets" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSets.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallrulegroup"

&networkfirewallrulegroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSets {
	Definition: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSets.property.definition">Definition</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#definition NetworkfirewallRuleGroup#definition}. |

---

##### `Definition`<sup>Optional</sup> <a name="Definition" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSets.property.definition"></a>

```go
Definition *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#definition NetworkfirewallRuleGroup#definition}.

---

### NetworkfirewallRuleGroupRuleGroupStatefulRuleOptions <a name="NetworkfirewallRuleGroupRuleGroupStatefulRuleOptions" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupStatefulRuleOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupStatefulRuleOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallrulegroup"

&networkfirewallrulegroup.NetworkfirewallRuleGroupRuleGroupStatefulRuleOptions {
	RuleOrder: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupStatefulRuleOptions.property.ruleOrder">RuleOrder</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#rule_order NetworkfirewallRuleGroup#rule_order}. |

---

##### `RuleOrder`<sup>Optional</sup> <a name="RuleOrder" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupStatefulRuleOptions.property.ruleOrder"></a>

```go
RuleOrder *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#rule_order NetworkfirewallRuleGroup#rule_order}.

---

### NetworkfirewallRuleGroupSummaryConfiguration <a name="NetworkfirewallRuleGroupSummaryConfiguration" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupSummaryConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupSummaryConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallrulegroup"

&networkfirewallrulegroup.NetworkfirewallRuleGroupSummaryConfiguration {
	RuleOptions: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupSummaryConfiguration.property.ruleOptions">RuleOptions</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#rule_options NetworkfirewallRuleGroup#rule_options}. |

---

##### `RuleOptions`<sup>Optional</sup> <a name="RuleOptions" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupSummaryConfiguration.property.ruleOptions"></a>

```go
RuleOptions *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#rule_options NetworkfirewallRuleGroup#rule_options}.

---

### NetworkfirewallRuleGroupTags <a name="NetworkfirewallRuleGroupTags" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallrulegroup"

&networkfirewallrulegroup.NetworkfirewallRuleGroupTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#key NetworkfirewallRuleGroup#key}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#value NetworkfirewallRuleGroup#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#key NetworkfirewallRuleGroup#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_rule_group#value NetworkfirewallRuleGroup#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkfirewallRuleGroupRuleGroupOutputReference <a name="NetworkfirewallRuleGroupRuleGroupOutputReference" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallrulegroup"

networkfirewallrulegroup.NewNetworkfirewallRuleGroupRuleGroupOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkfirewallRuleGroupRuleGroupOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupOutputReference.putReferenceSets">PutReferenceSets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupOutputReference.putRulesSource">PutRulesSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupOutputReference.putRuleVariables">PutRuleVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupOutputReference.putStatefulRuleOptions">PutStatefulRuleOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupOutputReference.resetReferenceSets">ResetReferenceSets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupOutputReference.resetRulesSource">ResetRulesSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupOutputReference.resetRuleVariables">ResetRuleVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupOutputReference.resetStatefulRuleOptions">ResetStatefulRuleOptions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutReferenceSets` <a name="PutReferenceSets" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupOutputReference.putReferenceSets"></a>

```go
func PutReferenceSets(value NetworkfirewallRuleGroupRuleGroupReferenceSets)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupOutputReference.putReferenceSets.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSets">NetworkfirewallRuleGroupRuleGroupReferenceSets</a>

---

##### `PutRulesSource` <a name="PutRulesSource" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupOutputReference.putRulesSource"></a>

```go
func PutRulesSource(value NetworkfirewallRuleGroupRuleGroupRulesSource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupOutputReference.putRulesSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSource">NetworkfirewallRuleGroupRuleGroupRulesSource</a>

---

##### `PutRuleVariables` <a name="PutRuleVariables" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupOutputReference.putRuleVariables"></a>

```go
func PutRuleVariables(value NetworkfirewallRuleGroupRuleGroupRuleVariables)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupOutputReference.putRuleVariables.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariables">NetworkfirewallRuleGroupRuleGroupRuleVariables</a>

---

##### `PutStatefulRuleOptions` <a name="PutStatefulRuleOptions" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupOutputReference.putStatefulRuleOptions"></a>

```go
func PutStatefulRuleOptions(value NetworkfirewallRuleGroupRuleGroupStatefulRuleOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupOutputReference.putStatefulRuleOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupStatefulRuleOptions">NetworkfirewallRuleGroupRuleGroupStatefulRuleOptions</a>

---

##### `ResetReferenceSets` <a name="ResetReferenceSets" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupOutputReference.resetReferenceSets"></a>

```go
func ResetReferenceSets()
```

##### `ResetRulesSource` <a name="ResetRulesSource" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupOutputReference.resetRulesSource"></a>

```go
func ResetRulesSource()
```

##### `ResetRuleVariables` <a name="ResetRuleVariables" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupOutputReference.resetRuleVariables"></a>

```go
func ResetRuleVariables()
```

##### `ResetStatefulRuleOptions` <a name="ResetStatefulRuleOptions" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupOutputReference.resetStatefulRuleOptions"></a>

```go
func ResetStatefulRuleOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupOutputReference.property.referenceSets">ReferenceSets</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference">NetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupOutputReference.property.rulesSource">RulesSource</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference">NetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupOutputReference.property.ruleVariables">RuleVariables</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference">NetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupOutputReference.property.statefulRuleOptions">StatefulRuleOptions</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference">NetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupOutputReference.property.referenceSetsInput">ReferenceSetsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupOutputReference.property.rulesSourceInput">RulesSourceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupOutputReference.property.ruleVariablesInput">RuleVariablesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupOutputReference.property.statefulRuleOptionsInput">StatefulRuleOptionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReferenceSets`<sup>Required</sup> <a name="ReferenceSets" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupOutputReference.property.referenceSets"></a>

```go
func ReferenceSets() NetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference">NetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference</a>

---

##### `RulesSource`<sup>Required</sup> <a name="RulesSource" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupOutputReference.property.rulesSource"></a>

```go
func RulesSource() NetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference">NetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference</a>

---

##### `RuleVariables`<sup>Required</sup> <a name="RuleVariables" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupOutputReference.property.ruleVariables"></a>

```go
func RuleVariables() NetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference">NetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference</a>

---

##### `StatefulRuleOptions`<sup>Required</sup> <a name="StatefulRuleOptions" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupOutputReference.property.statefulRuleOptions"></a>

```go
func StatefulRuleOptions() NetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference">NetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference</a>

---

##### `ReferenceSetsInput`<sup>Optional</sup> <a name="ReferenceSetsInput" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupOutputReference.property.referenceSetsInput"></a>

```go
func ReferenceSetsInput() interface{}
```

- *Type:* interface{}

---

##### `RulesSourceInput`<sup>Optional</sup> <a name="RulesSourceInput" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupOutputReference.property.rulesSourceInput"></a>

```go
func RulesSourceInput() interface{}
```

- *Type:* interface{}

---

##### `RuleVariablesInput`<sup>Optional</sup> <a name="RuleVariablesInput" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupOutputReference.property.ruleVariablesInput"></a>

```go
func RuleVariablesInput() interface{}
```

- *Type:* interface{}

---

##### `StatefulRuleOptionsInput`<sup>Optional</sup> <a name="StatefulRuleOptionsInput" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupOutputReference.property.statefulRuleOptionsInput"></a>

```go
func StatefulRuleOptionsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesMap <a name="NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesMap" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesMap.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallrulegroup"

networkfirewallrulegroup.NewNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesMap(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesMap
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesMap.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesMap.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesMap.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesMap.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesMap.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesMap.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesMap.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesMap.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesMap.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesMap.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesMap.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesMap.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesMap.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesMap.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesMap.get"></a>

```go
func Get(key *string) NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesMap.get.parameter.key"></a>

- *Type:* *string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesMap.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesMap.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesMap.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesMap.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesMap.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesMap.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference <a name="NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallrulegroup"

networkfirewallrulegroup.NewNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectKey *string) NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.Initializer.parameter.complexObjectKey">complexObjectKey</a></code> | <code>*string</code> | the key of this item in the map. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectKey`<sup>Required</sup> <a name="complexObjectKey" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* *string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.resetReferenceArn">ResetReferenceArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetReferenceArn` <a name="ResetReferenceArn" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.resetReferenceArn"></a>

```go
func ResetReferenceArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.property.referenceArnInput">ReferenceArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.property.referenceArn">ReferenceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReferenceArnInput`<sup>Optional</sup> <a name="ReferenceArnInput" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.property.referenceArnInput"></a>

```go
func ReferenceArnInput() *string
```

- *Type:* *string

---

##### `ReferenceArn`<sup>Required</sup> <a name="ReferenceArn" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.property.referenceArn"></a>

```go
func ReferenceArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference <a name="NetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallrulegroup"

networkfirewallrulegroup.NewNetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.putIpSetReferences">PutIpSetReferences</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.resetIpSetReferences">ResetIpSetReferences</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIpSetReferences` <a name="PutIpSetReferences" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.putIpSetReferences"></a>

```go
func PutIpSetReferences(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.putIpSetReferences.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetIpSetReferences` <a name="ResetIpSetReferences" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.resetIpSetReferences"></a>

```go
func ResetIpSetReferences()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.property.ipSetReferences">IpSetReferences</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesMap">NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.property.ipSetReferencesInput">IpSetReferencesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IpSetReferences`<sup>Required</sup> <a name="IpSetReferences" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.property.ipSetReferences"></a>

```go
func IpSetReferences() NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesMap
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesMap">NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesMap</a>

---

##### `IpSetReferencesInput`<sup>Optional</sup> <a name="IpSetReferencesInput" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.property.ipSetReferencesInput"></a>

```go
func IpSetReferencesInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference <a name="NetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallrulegroup"

networkfirewallrulegroup.NewNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.putRulesSourceList">PutRulesSourceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.putStatefulRules">PutStatefulRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.putStatelessRulesAndCustomActions">PutStatelessRulesAndCustomActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.resetRulesSourceList">ResetRulesSourceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.resetRulesString">ResetRulesString</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.resetStatefulRules">ResetStatefulRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.resetStatelessRulesAndCustomActions">ResetStatelessRulesAndCustomActions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRulesSourceList` <a name="PutRulesSourceList" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.putRulesSourceList"></a>

```go
func PutRulesSourceList(value NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStruct)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.putRulesSourceList.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStruct">NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStruct</a>

---

##### `PutStatefulRules` <a name="PutStatefulRules" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.putStatefulRules"></a>

```go
func PutStatefulRules(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.putStatefulRules.parameter.value"></a>

- *Type:* interface{}

---

##### `PutStatelessRulesAndCustomActions` <a name="PutStatelessRulesAndCustomActions" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.putStatelessRulesAndCustomActions"></a>

```go
func PutStatelessRulesAndCustomActions(value NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.putStatelessRulesAndCustomActions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActions">NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActions</a>

---

##### `ResetRulesSourceList` <a name="ResetRulesSourceList" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.resetRulesSourceList"></a>

```go
func ResetRulesSourceList()
```

##### `ResetRulesString` <a name="ResetRulesString" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.resetRulesString"></a>

```go
func ResetRulesString()
```

##### `ResetStatefulRules` <a name="ResetStatefulRules" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.resetStatefulRules"></a>

```go
func ResetStatefulRules()
```

##### `ResetStatelessRulesAndCustomActions` <a name="ResetStatelessRulesAndCustomActions" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.resetStatelessRulesAndCustomActions"></a>

```go
func ResetStatelessRulesAndCustomActions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.property.rulesSourceList">RulesSourceList</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference">NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.property.statefulRules">StatefulRules</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesList">NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.property.statelessRulesAndCustomActions">StatelessRulesAndCustomActions</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference">NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.property.rulesSourceListInput">RulesSourceListInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.property.rulesStringInput">RulesStringInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.property.statefulRulesInput">StatefulRulesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.property.statelessRulesAndCustomActionsInput">StatelessRulesAndCustomActionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.property.rulesString">RulesString</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RulesSourceList`<sup>Required</sup> <a name="RulesSourceList" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.property.rulesSourceList"></a>

```go
func RulesSourceList() NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference">NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference</a>

---

##### `StatefulRules`<sup>Required</sup> <a name="StatefulRules" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.property.statefulRules"></a>

```go
func StatefulRules() NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesList
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesList">NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesList</a>

---

##### `StatelessRulesAndCustomActions`<sup>Required</sup> <a name="StatelessRulesAndCustomActions" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.property.statelessRulesAndCustomActions"></a>

```go
func StatelessRulesAndCustomActions() NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference">NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference</a>

---

##### `RulesSourceListInput`<sup>Optional</sup> <a name="RulesSourceListInput" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.property.rulesSourceListInput"></a>

```go
func RulesSourceListInput() interface{}
```

- *Type:* interface{}

---

##### `RulesStringInput`<sup>Optional</sup> <a name="RulesStringInput" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.property.rulesStringInput"></a>

```go
func RulesStringInput() *string
```

- *Type:* *string

---

##### `StatefulRulesInput`<sup>Optional</sup> <a name="StatefulRulesInput" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.property.statefulRulesInput"></a>

```go
func StatefulRulesInput() interface{}
```

- *Type:* interface{}

---

##### `StatelessRulesAndCustomActionsInput`<sup>Optional</sup> <a name="StatelessRulesAndCustomActionsInput" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.property.statelessRulesAndCustomActionsInput"></a>

```go
func StatelessRulesAndCustomActionsInput() interface{}
```

- *Type:* interface{}

---

##### `RulesString`<sup>Required</sup> <a name="RulesString" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.property.rulesString"></a>

```go
func RulesString() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference <a name="NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallrulegroup"

networkfirewallrulegroup.NewNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.resetGeneratedRulesType">ResetGeneratedRulesType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.resetTargets">ResetTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.resetTargetTypes">ResetTargetTypes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGeneratedRulesType` <a name="ResetGeneratedRulesType" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.resetGeneratedRulesType"></a>

```go
func ResetGeneratedRulesType()
```

##### `ResetTargets` <a name="ResetTargets" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.resetTargets"></a>

```go
func ResetTargets()
```

##### `ResetTargetTypes` <a name="ResetTargetTypes" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.resetTargetTypes"></a>

```go
func ResetTargetTypes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.property.generatedRulesTypeInput">GeneratedRulesTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.property.targetsInput">TargetsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.property.targetTypesInput">TargetTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.property.generatedRulesType">GeneratedRulesType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.property.targets">Targets</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.property.targetTypes">TargetTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GeneratedRulesTypeInput`<sup>Optional</sup> <a name="GeneratedRulesTypeInput" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.property.generatedRulesTypeInput"></a>

```go
func GeneratedRulesTypeInput() *string
```

- *Type:* *string

---

##### `TargetsInput`<sup>Optional</sup> <a name="TargetsInput" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.property.targetsInput"></a>

```go
func TargetsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TargetTypesInput`<sup>Optional</sup> <a name="TargetTypesInput" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.property.targetTypesInput"></a>

```go
func TargetTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `GeneratedRulesType`<sup>Required</sup> <a name="GeneratedRulesType" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.property.generatedRulesType"></a>

```go
func GeneratedRulesType() *string
```

- *Type:* *string

---

##### `Targets`<sup>Required</sup> <a name="Targets" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.property.targets"></a>

```go
func Targets() *[]*string
```

- *Type:* *[]*string

---

##### `TargetTypes`<sup>Required</sup> <a name="TargetTypes" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.property.targetTypes"></a>

```go
func TargetTypes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference <a name="NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallrulegroup"

networkfirewallrulegroup.NewNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.resetDestination">ResetDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.resetDestinationPort">ResetDestinationPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.resetDirection">ResetDirection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.resetProtocol">ResetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.resetSource">ResetSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.resetSourcePort">ResetSourcePort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDestination` <a name="ResetDestination" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.resetDestination"></a>

```go
func ResetDestination()
```

##### `ResetDestinationPort` <a name="ResetDestinationPort" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.resetDestinationPort"></a>

```go
func ResetDestinationPort()
```

##### `ResetDirection` <a name="ResetDirection" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.resetDirection"></a>

```go
func ResetDirection()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.resetProtocol"></a>

```go
func ResetProtocol()
```

##### `ResetSource` <a name="ResetSource" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.resetSource"></a>

```go
func ResetSource()
```

##### `ResetSourcePort` <a name="ResetSourcePort" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.resetSourcePort"></a>

```go
func ResetSourcePort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.property.destinationInput">DestinationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.property.destinationPortInput">DestinationPortInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.property.directionInput">DirectionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.property.sourceInput">SourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.property.sourcePortInput">SourcePortInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.property.destination">Destination</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.property.destinationPort">DestinationPort</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.property.direction">Direction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.property.source">Source</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.property.sourcePort">SourcePort</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.property.destinationInput"></a>

```go
func DestinationInput() *string
```

- *Type:* *string

---

##### `DestinationPortInput`<sup>Optional</sup> <a name="DestinationPortInput" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.property.destinationPortInput"></a>

```go
func DestinationPortInput() *string
```

- *Type:* *string

---

##### `DirectionInput`<sup>Optional</sup> <a name="DirectionInput" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.property.directionInput"></a>

```go
func DirectionInput() *string
```

- *Type:* *string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.property.protocolInput"></a>

```go
func ProtocolInput() *string
```

- *Type:* *string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.property.sourceInput"></a>

```go
func SourceInput() *string
```

- *Type:* *string

---

##### `SourcePortInput`<sup>Optional</sup> <a name="SourcePortInput" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.property.sourcePortInput"></a>

```go
func SourcePortInput() *string
```

- *Type:* *string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.property.destination"></a>

```go
func Destination() *string
```

- *Type:* *string

---

##### `DestinationPort`<sup>Required</sup> <a name="DestinationPort" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.property.destinationPort"></a>

```go
func DestinationPort() *string
```

- *Type:* *string

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.property.direction"></a>

```go
func Direction() *string
```

- *Type:* *string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.property.source"></a>

```go
func Source() *string
```

- *Type:* *string

---

##### `SourcePort`<sup>Required</sup> <a name="SourcePort" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.property.sourcePort"></a>

```go
func SourcePort() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesList <a name="NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesList" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallrulegroup"

networkfirewallrulegroup.NewNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesList.get"></a>

```go
func Get(index *f64) NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference <a name="NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallrulegroup"

networkfirewallrulegroup.NewNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.putHeader">PutHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.putRuleOptions">PutRuleOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.resetHeader">ResetHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.resetRuleOptions">ResetRuleOptions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHeader` <a name="PutHeader" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.putHeader"></a>

```go
func PutHeader(value NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeader)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.putHeader.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeader">NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeader</a>

---

##### `PutRuleOptions` <a name="PutRuleOptions" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.putRuleOptions"></a>

```go
func PutRuleOptions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.putRuleOptions.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAction` <a name="ResetAction" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.resetAction"></a>

```go
func ResetAction()
```

##### `ResetHeader` <a name="ResetHeader" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.resetHeader"></a>

```go
func ResetHeader()
```

##### `ResetRuleOptions` <a name="ResetRuleOptions" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.resetRuleOptions"></a>

```go
func ResetRuleOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.property.header">Header</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference">NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.property.ruleOptions">RuleOptions</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsList">NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.property.actionInput">ActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.property.headerInput">HeaderInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.property.ruleOptionsInput">RuleOptionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Header`<sup>Required</sup> <a name="Header" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.property.header"></a>

```go
func Header() NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference">NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference</a>

---

##### `RuleOptions`<sup>Required</sup> <a name="RuleOptions" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.property.ruleOptions"></a>

```go
func RuleOptions() NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsList">NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsList</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.property.actionInput"></a>

```go
func ActionInput() *string
```

- *Type:* *string

---

##### `HeaderInput`<sup>Optional</sup> <a name="HeaderInput" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.property.headerInput"></a>

```go
func HeaderInput() interface{}
```

- *Type:* interface{}

---

##### `RuleOptionsInput`<sup>Optional</sup> <a name="RuleOptionsInput" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.property.ruleOptionsInput"></a>

```go
func RuleOptionsInput() interface{}
```

- *Type:* interface{}

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsList <a name="NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsList" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallrulegroup"

networkfirewallrulegroup.NewNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsList.get"></a>

```go
func Get(index *f64) NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference <a name="NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallrulegroup"

networkfirewallrulegroup.NewNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.resetKeyword">ResetKeyword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.resetSettings">ResetSettings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKeyword` <a name="ResetKeyword" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.resetKeyword"></a>

```go
func ResetKeyword()
```

##### `ResetSettings` <a name="ResetSettings" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.resetSettings"></a>

```go
func ResetSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.property.keywordInput">KeywordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.property.settingsInput">SettingsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.property.keyword">Keyword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.property.settings">Settings</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeywordInput`<sup>Optional</sup> <a name="KeywordInput" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.property.keywordInput"></a>

```go
func KeywordInput() *string
```

- *Type:* *string

---

##### `SettingsInput`<sup>Optional</sup> <a name="SettingsInput" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.property.settingsInput"></a>

```go
func SettingsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Keyword`<sup>Required</sup> <a name="Keyword" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.property.keyword"></a>

```go
func Keyword() *string
```

- *Type:* *string

---

##### `Settings`<sup>Required</sup> <a name="Settings" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.property.settings"></a>

```go
func Settings() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference <a name="NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallrulegroup"

networkfirewallrulegroup.NewNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.putPublishMetricAction">PutPublishMetricAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.resetPublishMetricAction">ResetPublishMetricAction</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPublishMetricAction` <a name="PutPublishMetricAction" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.putPublishMetricAction"></a>

```go
func PutPublishMetricAction(value NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricAction)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.putPublishMetricAction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricAction">NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricAction</a>

---

##### `ResetPublishMetricAction` <a name="ResetPublishMetricAction" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.resetPublishMetricAction"></a>

```go
func ResetPublishMetricAction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.property.publishMetricAction">PublishMetricAction</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference">NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.property.publishMetricActionInput">PublishMetricActionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PublishMetricAction`<sup>Required</sup> <a name="PublishMetricAction" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.property.publishMetricAction"></a>

```go
func PublishMetricAction() NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference">NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference</a>

---

##### `PublishMetricActionInput`<sup>Optional</sup> <a name="PublishMetricActionInput" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.property.publishMetricActionInput"></a>

```go
func PublishMetricActionInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsList <a name="NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsList" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallrulegroup"

networkfirewallrulegroup.NewNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsList.get"></a>

```go
func Get(index *f64) NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference <a name="NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallrulegroup"

networkfirewallrulegroup.NewNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference <a name="NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallrulegroup"

networkfirewallrulegroup.NewNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.putDimensions">PutDimensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.resetDimensions">ResetDimensions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDimensions` <a name="PutDimensions" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.putDimensions"></a>

```go
func PutDimensions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.putDimensions.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDimensions` <a name="ResetDimensions" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.resetDimensions"></a>

```go
func ResetDimensions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.property.dimensions">Dimensions</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsList">NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.property.dimensionsInput">DimensionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Dimensions`<sup>Required</sup> <a name="Dimensions" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.property.dimensions"></a>

```go
func Dimensions() NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsList">NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsList</a>

---

##### `DimensionsInput`<sup>Optional</sup> <a name="DimensionsInput" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.property.dimensionsInput"></a>

```go
func DimensionsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsList <a name="NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsList" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallrulegroup"

networkfirewallrulegroup.NewNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsList.get"></a>

```go
func Get(index *f64) NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference <a name="NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallrulegroup"

networkfirewallrulegroup.NewNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.putActionDefinition">PutActionDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.resetActionDefinition">ResetActionDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.resetActionName">ResetActionName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutActionDefinition` <a name="PutActionDefinition" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.putActionDefinition"></a>

```go
func PutActionDefinition(value NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.putActionDefinition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinition">NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinition</a>

---

##### `ResetActionDefinition` <a name="ResetActionDefinition" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.resetActionDefinition"></a>

```go
func ResetActionDefinition()
```

##### `ResetActionName` <a name="ResetActionName" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.resetActionName"></a>

```go
func ResetActionName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.property.actionDefinition">ActionDefinition</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference">NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.property.actionDefinitionInput">ActionDefinitionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.property.actionNameInput">ActionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.property.actionName">ActionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActionDefinition`<sup>Required</sup> <a name="ActionDefinition" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.property.actionDefinition"></a>

```go
func ActionDefinition() NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference">NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference</a>

---

##### `ActionDefinitionInput`<sup>Optional</sup> <a name="ActionDefinitionInput" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.property.actionDefinitionInput"></a>

```go
func ActionDefinitionInput() interface{}
```

- *Type:* interface{}

---

##### `ActionNameInput`<sup>Optional</sup> <a name="ActionNameInput" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.property.actionNameInput"></a>

```go
func ActionNameInput() *string
```

- *Type:* *string

---

##### `ActionName`<sup>Required</sup> <a name="ActionName" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.property.actionName"></a>

```go
func ActionName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference <a name="NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallrulegroup"

networkfirewallrulegroup.NewNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.putCustomActions">PutCustomActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.putStatelessRules">PutStatelessRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.resetCustomActions">ResetCustomActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.resetStatelessRules">ResetStatelessRules</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomActions` <a name="PutCustomActions" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.putCustomActions"></a>

```go
func PutCustomActions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.putCustomActions.parameter.value"></a>

- *Type:* interface{}

---

##### `PutStatelessRules` <a name="PutStatelessRules" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.putStatelessRules"></a>

```go
func PutStatelessRules(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.putStatelessRules.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCustomActions` <a name="ResetCustomActions" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.resetCustomActions"></a>

```go
func ResetCustomActions()
```

##### `ResetStatelessRules` <a name="ResetStatelessRules" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.resetStatelessRules"></a>

```go
func ResetStatelessRules()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.property.customActions">CustomActions</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsList">NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.property.statelessRules">StatelessRules</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesList">NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.property.customActionsInput">CustomActionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.property.statelessRulesInput">StatelessRulesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomActions`<sup>Required</sup> <a name="CustomActions" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.property.customActions"></a>

```go
func CustomActions() NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsList">NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsList</a>

---

##### `StatelessRules`<sup>Required</sup> <a name="StatelessRules" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.property.statelessRules"></a>

```go
func StatelessRules() NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesList
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesList">NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesList</a>

---

##### `CustomActionsInput`<sup>Optional</sup> <a name="CustomActionsInput" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.property.customActionsInput"></a>

```go
func CustomActionsInput() interface{}
```

- *Type:* interface{}

---

##### `StatelessRulesInput`<sup>Optional</sup> <a name="StatelessRulesInput" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.property.statelessRulesInput"></a>

```go
func StatelessRulesInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesList <a name="NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesList" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallrulegroup"

networkfirewallrulegroup.NewNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesList.get"></a>

```go
func Get(index *f64) NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference <a name="NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallrulegroup"

networkfirewallrulegroup.NewNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.putRuleDefinition">PutRuleDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.resetRuleDefinition">ResetRuleDefinition</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRuleDefinition` <a name="PutRuleDefinition" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.putRuleDefinition"></a>

```go
func PutRuleDefinition(value NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.putRuleDefinition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinition">NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinition</a>

---

##### `ResetPriority` <a name="ResetPriority" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.resetPriority"></a>

```go
func ResetPriority()
```

##### `ResetRuleDefinition` <a name="ResetRuleDefinition" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.resetRuleDefinition"></a>

```go
func ResetRuleDefinition()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.property.ruleDefinition">RuleDefinition</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference">NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.property.priorityInput">PriorityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.property.ruleDefinitionInput">RuleDefinitionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RuleDefinition`<sup>Required</sup> <a name="RuleDefinition" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.property.ruleDefinition"></a>

```go
func RuleDefinition() NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference">NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference</a>

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.property.priorityInput"></a>

```go
func PriorityInput() *f64
```

- *Type:* *f64

---

##### `RuleDefinitionInput`<sup>Optional</sup> <a name="RuleDefinitionInput" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.property.ruleDefinitionInput"></a>

```go
func RuleDefinitionInput() interface{}
```

- *Type:* interface{}

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsList <a name="NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsList" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallrulegroup"

networkfirewallrulegroup.NewNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsList.get"></a>

```go
func Get(index *f64) NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference <a name="NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallrulegroup"

networkfirewallrulegroup.NewNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.resetFromPort">ResetFromPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.resetToPort">ResetToPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFromPort` <a name="ResetFromPort" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.resetFromPort"></a>

```go
func ResetFromPort()
```

##### `ResetToPort` <a name="ResetToPort" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.resetToPort"></a>

```go
func ResetToPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.property.fromPortInput">FromPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.property.toPortInput">ToPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.property.fromPort">FromPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.property.toPort">ToPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FromPortInput`<sup>Optional</sup> <a name="FromPortInput" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.property.fromPortInput"></a>

```go
func FromPortInput() *f64
```

- *Type:* *f64

---

##### `ToPortInput`<sup>Optional</sup> <a name="ToPortInput" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.property.toPortInput"></a>

```go
func ToPortInput() *f64
```

- *Type:* *f64

---

##### `FromPort`<sup>Required</sup> <a name="FromPort" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.property.fromPort"></a>

```go
func FromPort() *f64
```

- *Type:* *f64

---

##### `ToPort`<sup>Required</sup> <a name="ToPort" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.property.toPort"></a>

```go
func ToPort() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsList <a name="NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsList" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallrulegroup"

networkfirewallrulegroup.NewNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsList.get"></a>

```go
func Get(index *f64) NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference <a name="NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallrulegroup"

networkfirewallrulegroup.NewNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.resetAddressDefinition">ResetAddressDefinition</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAddressDefinition` <a name="ResetAddressDefinition" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.resetAddressDefinition"></a>

```go
func ResetAddressDefinition()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.property.addressDefinitionInput">AddressDefinitionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.property.addressDefinition">AddressDefinition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AddressDefinitionInput`<sup>Optional</sup> <a name="AddressDefinitionInput" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.property.addressDefinitionInput"></a>

```go
func AddressDefinitionInput() *string
```

- *Type:* *string

---

##### `AddressDefinition`<sup>Required</sup> <a name="AddressDefinition" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.property.addressDefinition"></a>

```go
func AddressDefinition() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference <a name="NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallrulegroup"

networkfirewallrulegroup.NewNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.putDestinationPorts">PutDestinationPorts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.putDestinations">PutDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.putSourcePorts">PutSourcePorts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.putSources">PutSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.putTcpFlags">PutTcpFlags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.resetDestinationPorts">ResetDestinationPorts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.resetDestinations">ResetDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.resetProtocols">ResetProtocols</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.resetSourcePorts">ResetSourcePorts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.resetSources">ResetSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.resetTcpFlags">ResetTcpFlags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDestinationPorts` <a name="PutDestinationPorts" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.putDestinationPorts"></a>

```go
func PutDestinationPorts(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.putDestinationPorts.parameter.value"></a>

- *Type:* interface{}

---

##### `PutDestinations` <a name="PutDestinations" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.putDestinations"></a>

```go
func PutDestinations(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.putDestinations.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSourcePorts` <a name="PutSourcePorts" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.putSourcePorts"></a>

```go
func PutSourcePorts(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.putSourcePorts.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSources` <a name="PutSources" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.putSources"></a>

```go
func PutSources(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.putSources.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTcpFlags` <a name="PutTcpFlags" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.putTcpFlags"></a>

```go
func PutTcpFlags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.putTcpFlags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDestinationPorts` <a name="ResetDestinationPorts" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.resetDestinationPorts"></a>

```go
func ResetDestinationPorts()
```

##### `ResetDestinations` <a name="ResetDestinations" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.resetDestinations"></a>

```go
func ResetDestinations()
```

##### `ResetProtocols` <a name="ResetProtocols" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.resetProtocols"></a>

```go
func ResetProtocols()
```

##### `ResetSourcePorts` <a name="ResetSourcePorts" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.resetSourcePorts"></a>

```go
func ResetSourcePorts()
```

##### `ResetSources` <a name="ResetSources" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.resetSources"></a>

```go
func ResetSources()
```

##### `ResetTcpFlags` <a name="ResetTcpFlags" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.resetTcpFlags"></a>

```go
func ResetTcpFlags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.property.destinationPorts">DestinationPorts</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsList">NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.property.destinations">Destinations</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsList">NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.property.sourcePorts">SourcePorts</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsList">NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.property.sources">Sources</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesList">NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.property.tcpFlags">TcpFlags</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsList">NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.property.destinationPortsInput">DestinationPortsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.property.destinationsInput">DestinationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.property.protocolsInput">ProtocolsInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.property.sourcePortsInput">SourcePortsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.property.sourcesInput">SourcesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.property.tcpFlagsInput">TcpFlagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.property.protocols">Protocols</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationPorts`<sup>Required</sup> <a name="DestinationPorts" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.property.destinationPorts"></a>

```go
func DestinationPorts() NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsList
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsList">NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsList</a>

---

##### `Destinations`<sup>Required</sup> <a name="Destinations" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.property.destinations"></a>

```go
func Destinations() NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsList">NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsList</a>

---

##### `SourcePorts`<sup>Required</sup> <a name="SourcePorts" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.property.sourcePorts"></a>

```go
func SourcePorts() NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsList
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsList">NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsList</a>

---

##### `Sources`<sup>Required</sup> <a name="Sources" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.property.sources"></a>

```go
func Sources() NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesList
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesList">NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesList</a>

---

##### `TcpFlags`<sup>Required</sup> <a name="TcpFlags" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.property.tcpFlags"></a>

```go
func TcpFlags() NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsList">NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsList</a>

---

##### `DestinationPortsInput`<sup>Optional</sup> <a name="DestinationPortsInput" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.property.destinationPortsInput"></a>

```go
func DestinationPortsInput() interface{}
```

- *Type:* interface{}

---

##### `DestinationsInput`<sup>Optional</sup> <a name="DestinationsInput" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.property.destinationsInput"></a>

```go
func DestinationsInput() interface{}
```

- *Type:* interface{}

---

##### `ProtocolsInput`<sup>Optional</sup> <a name="ProtocolsInput" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.property.protocolsInput"></a>

```go
func ProtocolsInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `SourcePortsInput`<sup>Optional</sup> <a name="SourcePortsInput" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.property.sourcePortsInput"></a>

```go
func SourcePortsInput() interface{}
```

- *Type:* interface{}

---

##### `SourcesInput`<sup>Optional</sup> <a name="SourcesInput" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.property.sourcesInput"></a>

```go
func SourcesInput() interface{}
```

- *Type:* interface{}

---

##### `TcpFlagsInput`<sup>Optional</sup> <a name="TcpFlagsInput" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.property.tcpFlagsInput"></a>

```go
func TcpFlagsInput() interface{}
```

- *Type:* interface{}

---

##### `Protocols`<sup>Required</sup> <a name="Protocols" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.property.protocols"></a>

```go
func Protocols() *[]*f64
```

- *Type:* *[]*f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsList <a name="NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsList" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallrulegroup"

networkfirewallrulegroup.NewNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsList.get"></a>

```go
func Get(index *f64) NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference <a name="NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallrulegroup"

networkfirewallrulegroup.NewNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.resetFromPort">ResetFromPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.resetToPort">ResetToPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFromPort` <a name="ResetFromPort" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.resetFromPort"></a>

```go
func ResetFromPort()
```

##### `ResetToPort` <a name="ResetToPort" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.resetToPort"></a>

```go
func ResetToPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.property.fromPortInput">FromPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.property.toPortInput">ToPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.property.fromPort">FromPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.property.toPort">ToPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FromPortInput`<sup>Optional</sup> <a name="FromPortInput" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.property.fromPortInput"></a>

```go
func FromPortInput() *f64
```

- *Type:* *f64

---

##### `ToPortInput`<sup>Optional</sup> <a name="ToPortInput" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.property.toPortInput"></a>

```go
func ToPortInput() *f64
```

- *Type:* *f64

---

##### `FromPort`<sup>Required</sup> <a name="FromPort" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.property.fromPort"></a>

```go
func FromPort() *f64
```

- *Type:* *f64

---

##### `ToPort`<sup>Required</sup> <a name="ToPort" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.property.toPort"></a>

```go
func ToPort() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesList <a name="NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesList" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallrulegroup"

networkfirewallrulegroup.NewNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesList.get"></a>

```go
func Get(index *f64) NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference <a name="NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallrulegroup"

networkfirewallrulegroup.NewNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.resetAddressDefinition">ResetAddressDefinition</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAddressDefinition` <a name="ResetAddressDefinition" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.resetAddressDefinition"></a>

```go
func ResetAddressDefinition()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.property.addressDefinitionInput">AddressDefinitionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.property.addressDefinition">AddressDefinition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AddressDefinitionInput`<sup>Optional</sup> <a name="AddressDefinitionInput" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.property.addressDefinitionInput"></a>

```go
func AddressDefinitionInput() *string
```

- *Type:* *string

---

##### `AddressDefinition`<sup>Required</sup> <a name="AddressDefinition" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.property.addressDefinition"></a>

```go
func AddressDefinition() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsList <a name="NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsList" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallrulegroup"

networkfirewallrulegroup.NewNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsList.get"></a>

```go
func Get(index *f64) NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference <a name="NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallrulegroup"

networkfirewallrulegroup.NewNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.resetFlags">ResetFlags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.resetMasks">ResetMasks</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFlags` <a name="ResetFlags" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.resetFlags"></a>

```go
func ResetFlags()
```

##### `ResetMasks` <a name="ResetMasks" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.resetMasks"></a>

```go
func ResetMasks()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.property.flagsInput">FlagsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.property.masksInput">MasksInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.property.flags">Flags</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.property.masks">Masks</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FlagsInput`<sup>Optional</sup> <a name="FlagsInput" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.property.flagsInput"></a>

```go
func FlagsInput() *[]*string
```

- *Type:* *[]*string

---

##### `MasksInput`<sup>Optional</sup> <a name="MasksInput" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.property.masksInput"></a>

```go
func MasksInput() *[]*string
```

- *Type:* *[]*string

---

##### `Flags`<sup>Required</sup> <a name="Flags" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.property.flags"></a>

```go
func Flags() *[]*string
```

- *Type:* *[]*string

---

##### `Masks`<sup>Required</sup> <a name="Masks" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.property.masks"></a>

```go
func Masks() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference <a name="NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallrulegroup"

networkfirewallrulegroup.NewNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.putMatchAttributes">PutMatchAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.resetActions">ResetActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.resetMatchAttributes">ResetMatchAttributes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMatchAttributes` <a name="PutMatchAttributes" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.putMatchAttributes"></a>

```go
func PutMatchAttributes(value NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributes)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.putMatchAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributes">NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributes</a>

---

##### `ResetActions` <a name="ResetActions" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.resetActions"></a>

```go
func ResetActions()
```

##### `ResetMatchAttributes` <a name="ResetMatchAttributes" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.resetMatchAttributes"></a>

```go
func ResetMatchAttributes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.property.matchAttributes">MatchAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference">NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.property.actionsInput">ActionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.property.matchAttributesInput">MatchAttributesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.property.actions">Actions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MatchAttributes`<sup>Required</sup> <a name="MatchAttributes" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.property.matchAttributes"></a>

```go
func MatchAttributes() NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference">NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference</a>

---

##### `ActionsInput`<sup>Optional</sup> <a name="ActionsInput" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.property.actionsInput"></a>

```go
func ActionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `MatchAttributesInput`<sup>Optional</sup> <a name="MatchAttributesInput" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.property.matchAttributesInput"></a>

```go
func MatchAttributesInput() interface{}
```

- *Type:* interface{}

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.property.actions"></a>

```go
func Actions() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsMap <a name="NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsMap" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsMap.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallrulegroup"

networkfirewallrulegroup.NewNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsMap(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsMap
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsMap.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsMap.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsMap.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsMap.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsMap.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsMap.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsMap.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsMap.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsMap.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsMap.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsMap.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsMap.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsMap.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsMap.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsMap.get"></a>

```go
func Get(key *string) NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsMap.get.parameter.key"></a>

- *Type:* *string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsMap.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsMap.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsMap.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsMap.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsMap.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsMap.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference <a name="NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallrulegroup"

networkfirewallrulegroup.NewNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectKey *string) NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.Initializer.parameter.complexObjectKey">complexObjectKey</a></code> | <code>*string</code> | the key of this item in the map. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectKey`<sup>Required</sup> <a name="complexObjectKey" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* *string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.resetDefinition">ResetDefinition</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDefinition` <a name="ResetDefinition" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.resetDefinition"></a>

```go
func ResetDefinition()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.property.definitionInput">DefinitionInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.property.definition">Definition</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DefinitionInput`<sup>Optional</sup> <a name="DefinitionInput" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.property.definitionInput"></a>

```go
func DefinitionInput() *[]*string
```

- *Type:* *[]*string

---

##### `Definition`<sup>Required</sup> <a name="Definition" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.property.definition"></a>

```go
func Definition() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference <a name="NetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallrulegroup"

networkfirewallrulegroup.NewNetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.putIpSets">PutIpSets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.putPortSets">PutPortSets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.resetIpSets">ResetIpSets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.resetPortSets">ResetPortSets</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIpSets` <a name="PutIpSets" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.putIpSets"></a>

```go
func PutIpSets(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.putIpSets.parameter.value"></a>

- *Type:* interface{}

---

##### `PutPortSets` <a name="PutPortSets" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.putPortSets"></a>

```go
func PutPortSets(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.putPortSets.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetIpSets` <a name="ResetIpSets" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.resetIpSets"></a>

```go
func ResetIpSets()
```

##### `ResetPortSets` <a name="ResetPortSets" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.resetPortSets"></a>

```go
func ResetPortSets()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.property.ipSets">IpSets</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsMap">NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.property.portSets">PortSets</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsMap">NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.property.ipSetsInput">IpSetsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.property.portSetsInput">PortSetsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IpSets`<sup>Required</sup> <a name="IpSets" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.property.ipSets"></a>

```go
func IpSets() NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsMap
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsMap">NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsMap</a>

---

##### `PortSets`<sup>Required</sup> <a name="PortSets" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.property.portSets"></a>

```go
func PortSets() NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsMap
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsMap">NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsMap</a>

---

##### `IpSetsInput`<sup>Optional</sup> <a name="IpSetsInput" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.property.ipSetsInput"></a>

```go
func IpSetsInput() interface{}
```

- *Type:* interface{}

---

##### `PortSetsInput`<sup>Optional</sup> <a name="PortSetsInput" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.property.portSetsInput"></a>

```go
func PortSetsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsMap <a name="NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsMap" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsMap.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallrulegroup"

networkfirewallrulegroup.NewNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsMap(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsMap
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsMap.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsMap.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsMap.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsMap.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsMap.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsMap.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsMap.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsMap.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsMap.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsMap.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsMap.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsMap.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsMap.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsMap.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsMap.get"></a>

```go
func Get(key *string) NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsMap.get.parameter.key"></a>

- *Type:* *string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsMap.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsMap.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsMap.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsMap.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsMap.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsMap.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference <a name="NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallrulegroup"

networkfirewallrulegroup.NewNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectKey *string) NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.Initializer.parameter.complexObjectKey">complexObjectKey</a></code> | <code>*string</code> | the key of this item in the map. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectKey`<sup>Required</sup> <a name="complexObjectKey" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* *string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.resetDefinition">ResetDefinition</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDefinition` <a name="ResetDefinition" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.resetDefinition"></a>

```go
func ResetDefinition()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.property.definitionInput">DefinitionInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.property.definition">Definition</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DefinitionInput`<sup>Optional</sup> <a name="DefinitionInput" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.property.definitionInput"></a>

```go
func DefinitionInput() *[]*string
```

- *Type:* *[]*string

---

##### `Definition`<sup>Required</sup> <a name="Definition" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.property.definition"></a>

```go
func Definition() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference <a name="NetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallrulegroup"

networkfirewallrulegroup.NewNetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.resetRuleOrder">ResetRuleOrder</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRuleOrder` <a name="ResetRuleOrder" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.resetRuleOrder"></a>

```go
func ResetRuleOrder()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.property.ruleOrderInput">RuleOrderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.property.ruleOrder">RuleOrder</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RuleOrderInput`<sup>Optional</sup> <a name="RuleOrderInput" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.property.ruleOrderInput"></a>

```go
func RuleOrderInput() *string
```

- *Type:* *string

---

##### `RuleOrder`<sup>Required</sup> <a name="RuleOrder" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.property.ruleOrder"></a>

```go
func RuleOrder() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkfirewallRuleGroupSummaryConfigurationOutputReference <a name="NetworkfirewallRuleGroupSummaryConfigurationOutputReference" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupSummaryConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupSummaryConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallrulegroup"

networkfirewallrulegroup.NewNetworkfirewallRuleGroupSummaryConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkfirewallRuleGroupSummaryConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupSummaryConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupSummaryConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupSummaryConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupSummaryConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupSummaryConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupSummaryConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupSummaryConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupSummaryConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupSummaryConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupSummaryConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupSummaryConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupSummaryConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupSummaryConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupSummaryConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupSummaryConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupSummaryConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupSummaryConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupSummaryConfigurationOutputReference.resetRuleOptions">ResetRuleOptions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupSummaryConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupSummaryConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupSummaryConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupSummaryConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupSummaryConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupSummaryConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupSummaryConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupSummaryConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupSummaryConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupSummaryConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupSummaryConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupSummaryConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupSummaryConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupSummaryConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupSummaryConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupSummaryConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupSummaryConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupSummaryConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupSummaryConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupSummaryConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupSummaryConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupSummaryConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupSummaryConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupSummaryConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRuleOptions` <a name="ResetRuleOptions" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupSummaryConfigurationOutputReference.resetRuleOptions"></a>

```go
func ResetRuleOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupSummaryConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupSummaryConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupSummaryConfigurationOutputReference.property.ruleOptionsInput">RuleOptionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupSummaryConfigurationOutputReference.property.ruleOptions">RuleOptions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupSummaryConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupSummaryConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupSummaryConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RuleOptionsInput`<sup>Optional</sup> <a name="RuleOptionsInput" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupSummaryConfigurationOutputReference.property.ruleOptionsInput"></a>

```go
func RuleOptionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `RuleOptions`<sup>Required</sup> <a name="RuleOptions" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupSummaryConfigurationOutputReference.property.ruleOptions"></a>

```go
func RuleOptions() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupSummaryConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkfirewallRuleGroupTagsList <a name="NetworkfirewallRuleGroupTagsList" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallrulegroup"

networkfirewallrulegroup.NewNetworkfirewallRuleGroupTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworkfirewallRuleGroupTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupTagsList.get"></a>

```go
func Get(index *f64) NetworkfirewallRuleGroupTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkfirewallRuleGroupTagsOutputReference <a name="NetworkfirewallRuleGroupTagsOutputReference" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallrulegroup"

networkfirewallrulegroup.NewNetworkfirewallRuleGroupTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworkfirewallRuleGroupTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkfirewallRuleGroup.NetworkfirewallRuleGroupTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



