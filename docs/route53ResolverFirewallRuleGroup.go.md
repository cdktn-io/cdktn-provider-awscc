# `route53ResolverFirewallRuleGroup` Submodule <a name="`route53ResolverFirewallRuleGroup` Submodule" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53ResolverFirewallRuleGroup <a name="Route53ResolverFirewallRuleGroup" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_firewall_rule_group awscc_route53resolver_firewall_rule_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/route53resolverfirewallrulegroup"

route53resolverfirewallrulegroup.NewRoute53ResolverFirewallRuleGroup(scope Construct, id *string, config Route53ResolverFirewallRuleGroupConfig) Route53ResolverFirewallRuleGroup
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupConfig">Route53ResolverFirewallRuleGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupConfig">Route53ResolverFirewallRuleGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.putFirewallRules">PutFirewallRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.resetFirewallRules">ResetFirewallRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutFirewallRules` <a name="PutFirewallRules" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.putFirewallRules"></a>

```go
func PutFirewallRules(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.putFirewallRules.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFirewallRules` <a name="ResetFirewallRules" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.resetFirewallRules"></a>

```go
func ResetFirewallRules()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.resetName"></a>

```go
func ResetName()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Route53ResolverFirewallRuleGroup resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/route53resolverfirewallrulegroup"

route53resolverfirewallrulegroup.Route53ResolverFirewallRuleGroup_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/route53resolverfirewallrulegroup"

route53resolverfirewallrulegroup.Route53ResolverFirewallRuleGroup_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/route53resolverfirewallrulegroup"

route53resolverfirewallrulegroup.Route53ResolverFirewallRuleGroup_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/route53resolverfirewallrulegroup"

route53resolverfirewallrulegroup.Route53ResolverFirewallRuleGroup_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a Route53ResolverFirewallRuleGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Route53ResolverFirewallRuleGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Route53ResolverFirewallRuleGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_firewall_rule_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the Route53ResolverFirewallRuleGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.creationTime">CreationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.creatorRequestId">CreatorRequestId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.firewallRuleGroupId">FirewallRuleGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.firewallRules">FirewallRules</a></code> | <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList">Route53ResolverFirewallRuleGroupFirewallRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.modificationTime">ModificationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.ownerId">OwnerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.ruleCount">RuleCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.shareStatus">ShareStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.statusMessage">StatusMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList">Route53ResolverFirewallRuleGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.firewallRulesInput">FirewallRulesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.creationTime"></a>

```go
func CreationTime() *string
```

- *Type:* *string

---

##### `CreatorRequestId`<sup>Required</sup> <a name="CreatorRequestId" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.creatorRequestId"></a>

```go
func CreatorRequestId() *string
```

- *Type:* *string

---

##### `FirewallRuleGroupId`<sup>Required</sup> <a name="FirewallRuleGroupId" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.firewallRuleGroupId"></a>

```go
func FirewallRuleGroupId() *string
```

- *Type:* *string

---

##### `FirewallRules`<sup>Required</sup> <a name="FirewallRules" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.firewallRules"></a>

```go
func FirewallRules() Route53ResolverFirewallRuleGroupFirewallRulesList
```

- *Type:* <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList">Route53ResolverFirewallRuleGroupFirewallRulesList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ModificationTime`<sup>Required</sup> <a name="ModificationTime" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.modificationTime"></a>

```go
func ModificationTime() *string
```

- *Type:* *string

---

##### `OwnerId`<sup>Required</sup> <a name="OwnerId" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.ownerId"></a>

```go
func OwnerId() *string
```

- *Type:* *string

---

##### `RuleCount`<sup>Required</sup> <a name="RuleCount" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.ruleCount"></a>

```go
func RuleCount() *f64
```

- *Type:* *f64

---

##### `ShareStatus`<sup>Required</sup> <a name="ShareStatus" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.shareStatus"></a>

```go
func ShareStatus() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `StatusMessage`<sup>Required</sup> <a name="StatusMessage" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.statusMessage"></a>

```go
func StatusMessage() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.tags"></a>

```go
func Tags() Route53ResolverFirewallRuleGroupTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList">Route53ResolverFirewallRuleGroupTagsList</a>

---

##### `FirewallRulesInput`<sup>Optional</sup> <a name="FirewallRulesInput" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.firewallRulesInput"></a>

```go
func FirewallRulesInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroup.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### Route53ResolverFirewallRuleGroupConfig <a name="Route53ResolverFirewallRuleGroupConfig" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/route53resolverfirewallrulegroup"

&route53resolverfirewallrulegroup.Route53ResolverFirewallRuleGroupConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	FirewallRules: interface{},
	Name: *string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupConfig.property.firewallRules">FirewallRules</a></code> | <code>interface{}</code> | FirewallRules. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupConfig.property.name">Name</a></code> | <code>*string</code> | FirewallRuleGroupName. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupConfig.property.tags">Tags</a></code> | <code>interface{}</code> | Tags. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `FirewallRules`<sup>Optional</sup> <a name="FirewallRules" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupConfig.property.firewallRules"></a>

```go
FirewallRules interface{}
```

- *Type:* interface{}

FirewallRules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_firewall_rule_group#firewall_rules Route53ResolverFirewallRuleGroup#firewall_rules}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

FirewallRuleGroupName.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_firewall_rule_group#name Route53ResolverFirewallRuleGroup#name}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

Tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_firewall_rule_group#tags Route53ResolverFirewallRuleGroup#tags}

---

### Route53ResolverFirewallRuleGroupFirewallRules <a name="Route53ResolverFirewallRuleGroupFirewallRules" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/route53resolverfirewallrulegroup"

&route53resolverfirewallrulegroup.Route53ResolverFirewallRuleGroupFirewallRules {
	Action: *string,
	BlockOverrideDnsType: *string,
	BlockOverrideDomain: *string,
	BlockOverrideTtl: *f64,
	BlockResponse: *string,
	ConfidenceThreshold: *string,
	DnsThreatProtection: *string,
	FirewallDomainListId: *string,
	FirewallDomainRedirectionAction: *string,
	FirewallRuleType: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType,
	FirewallThreatProtectionId: *string,
	Priority: *f64,
	Qtype: *string,
	Status: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.action">Action</a></code> | <code>*string</code> | Rule Action. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.blockOverrideDnsType">BlockOverrideDnsType</a></code> | <code>*string</code> | BlockOverrideDnsType. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.blockOverrideDomain">BlockOverrideDomain</a></code> | <code>*string</code> | BlockOverrideDomain. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.blockOverrideTtl">BlockOverrideTtl</a></code> | <code>*f64</code> | BlockOverrideTtl. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.blockResponse">BlockResponse</a></code> | <code>*string</code> | BlockResponse. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.confidenceThreshold">ConfidenceThreshold</a></code> | <code>*string</code> | ConfidenceThreshold. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.dnsThreatProtection">DnsThreatProtection</a></code> | <code>*string</code> | DnsThreatProtection. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.firewallDomainListId">FirewallDomainListId</a></code> | <code>*string</code> | ResourceId. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.firewallDomainRedirectionAction">FirewallDomainRedirectionAction</a></code> | <code>*string</code> | FirewallDomainRedirectionAction. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.firewallRuleType">FirewallRuleType</a></code> | <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType</a></code> | Advanced firewall rule type. Mutually exclusive with FirewallDomainListId and DnsThreatProtection/ConfidenceThreshold. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.firewallThreatProtectionId">FirewallThreatProtectionId</a></code> | <code>*string</code> | ResourceId. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.priority">Priority</a></code> | <code>*f64</code> | Rule Priority. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.qtype">Qtype</a></code> | <code>*string</code> | Qtype. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.status">Status</a></code> | <code>*string</code> | The status of the firewall rule. |

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.action"></a>

```go
Action *string
```

- *Type:* *string

Rule Action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_firewall_rule_group#action Route53ResolverFirewallRuleGroup#action}

---

##### `BlockOverrideDnsType`<sup>Optional</sup> <a name="BlockOverrideDnsType" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.blockOverrideDnsType"></a>

```go
BlockOverrideDnsType *string
```

- *Type:* *string

BlockOverrideDnsType.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_firewall_rule_group#block_override_dns_type Route53ResolverFirewallRuleGroup#block_override_dns_type}

---

##### `BlockOverrideDomain`<sup>Optional</sup> <a name="BlockOverrideDomain" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.blockOverrideDomain"></a>

```go
BlockOverrideDomain *string
```

- *Type:* *string

BlockOverrideDomain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_firewall_rule_group#block_override_domain Route53ResolverFirewallRuleGroup#block_override_domain}

---

##### `BlockOverrideTtl`<sup>Optional</sup> <a name="BlockOverrideTtl" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.blockOverrideTtl"></a>

```go
BlockOverrideTtl *f64
```

- *Type:* *f64

BlockOverrideTtl.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_firewall_rule_group#block_override_ttl Route53ResolverFirewallRuleGroup#block_override_ttl}

---

##### `BlockResponse`<sup>Optional</sup> <a name="BlockResponse" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.blockResponse"></a>

```go
BlockResponse *string
```

- *Type:* *string

BlockResponse.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_firewall_rule_group#block_response Route53ResolverFirewallRuleGroup#block_response}

---

##### `ConfidenceThreshold`<sup>Optional</sup> <a name="ConfidenceThreshold" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.confidenceThreshold"></a>

```go
ConfidenceThreshold *string
```

- *Type:* *string

ConfidenceThreshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_firewall_rule_group#confidence_threshold Route53ResolverFirewallRuleGroup#confidence_threshold}

---

##### `DnsThreatProtection`<sup>Optional</sup> <a name="DnsThreatProtection" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.dnsThreatProtection"></a>

```go
DnsThreatProtection *string
```

- *Type:* *string

DnsThreatProtection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_firewall_rule_group#dns_threat_protection Route53ResolverFirewallRuleGroup#dns_threat_protection}

---

##### `FirewallDomainListId`<sup>Optional</sup> <a name="FirewallDomainListId" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.firewallDomainListId"></a>

```go
FirewallDomainListId *string
```

- *Type:* *string

ResourceId.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_firewall_rule_group#firewall_domain_list_id Route53ResolverFirewallRuleGroup#firewall_domain_list_id}

---

##### `FirewallDomainRedirectionAction`<sup>Optional</sup> <a name="FirewallDomainRedirectionAction" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.firewallDomainRedirectionAction"></a>

```go
FirewallDomainRedirectionAction *string
```

- *Type:* *string

FirewallDomainRedirectionAction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_firewall_rule_group#firewall_domain_redirection_action Route53ResolverFirewallRuleGroup#firewall_domain_redirection_action}

---

##### `FirewallRuleType`<sup>Optional</sup> <a name="FirewallRuleType" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.firewallRuleType"></a>

```go
FirewallRuleType Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType
```

- *Type:* <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType</a>

Advanced firewall rule type. Mutually exclusive with FirewallDomainListId and DnsThreatProtection/ConfidenceThreshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_firewall_rule_group#firewall_rule_type Route53ResolverFirewallRuleGroup#firewall_rule_type}

---

##### `FirewallThreatProtectionId`<sup>Optional</sup> <a name="FirewallThreatProtectionId" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.firewallThreatProtectionId"></a>

```go
FirewallThreatProtectionId *string
```

- *Type:* *string

ResourceId.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_firewall_rule_group#firewall_threat_protection_id Route53ResolverFirewallRuleGroup#firewall_threat_protection_id}

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.priority"></a>

```go
Priority *f64
```

- *Type:* *f64

Rule Priority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_firewall_rule_group#priority Route53ResolverFirewallRuleGroup#priority}

---

##### `Qtype`<sup>Optional</sup> <a name="Qtype" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.qtype"></a>

```go
Qtype *string
```

- *Type:* *string

Qtype.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_firewall_rule_group#qtype Route53ResolverFirewallRuleGroup#qtype}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRules.property.status"></a>

```go
Status *string
```

- *Type:* *string

The status of the firewall rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_firewall_rule_group#status Route53ResolverFirewallRuleGroup#status}

---

### Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType <a name="Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/route53resolverfirewallrulegroup"

&route53resolverfirewallrulegroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType {
	FirewallAdvancedContentCategory: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategory,
	FirewallAdvancedThreatCategory: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategory,
	PartnerThreatProtection: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtection,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType.property.firewallAdvancedContentCategory">FirewallAdvancedContentCategory</a></code> | <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategory">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategory</a></code> | Configuration for an advanced content category rule type. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType.property.firewallAdvancedThreatCategory">FirewallAdvancedThreatCategory</a></code> | <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategory">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategory</a></code> | Configuration for an advanced threat category rule type. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType.property.partnerThreatProtection">PartnerThreatProtection</a></code> | <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtection">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtection</a></code> | Configuration for a partner threat protection rule type. |

---

##### `FirewallAdvancedContentCategory`<sup>Optional</sup> <a name="FirewallAdvancedContentCategory" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType.property.firewallAdvancedContentCategory"></a>

```go
FirewallAdvancedContentCategory Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategory
```

- *Type:* <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategory">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategory</a>

Configuration for an advanced content category rule type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_firewall_rule_group#firewall_advanced_content_category Route53ResolverFirewallRuleGroup#firewall_advanced_content_category}

---

##### `FirewallAdvancedThreatCategory`<sup>Optional</sup> <a name="FirewallAdvancedThreatCategory" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType.property.firewallAdvancedThreatCategory"></a>

```go
FirewallAdvancedThreatCategory Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategory
```

- *Type:* <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategory">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategory</a>

Configuration for an advanced threat category rule type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_firewall_rule_group#firewall_advanced_threat_category Route53ResolverFirewallRuleGroup#firewall_advanced_threat_category}

---

##### `PartnerThreatProtection`<sup>Optional</sup> <a name="PartnerThreatProtection" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType.property.partnerThreatProtection"></a>

```go
PartnerThreatProtection Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtection
```

- *Type:* <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtection">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtection</a>

Configuration for a partner threat protection rule type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_firewall_rule_group#partner_threat_protection Route53ResolverFirewallRuleGroup#partner_threat_protection}

---

### Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategory <a name="Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategory" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategory"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategory.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/route53resolverfirewallrulegroup"

&route53resolverfirewallrulegroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategory {
	Category: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategory.property.category">Category</a></code> | <code>*string</code> | The content category value. |

---

##### `Category`<sup>Optional</sup> <a name="Category" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategory.property.category"></a>

```go
Category *string
```

- *Type:* *string

The content category value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_firewall_rule_group#category Route53ResolverFirewallRuleGroup#category}

---

### Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategory <a name="Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategory" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategory"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategory.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/route53resolverfirewallrulegroup"

&route53resolverfirewallrulegroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategory {
	Category: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategory.property.category">Category</a></code> | <code>*string</code> | The threat category value. |

---

##### `Category`<sup>Optional</sup> <a name="Category" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategory.property.category"></a>

```go
Category *string
```

- *Type:* *string

The threat category value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_firewall_rule_group#category Route53ResolverFirewallRuleGroup#category}

---

### Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtection <a name="Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtection" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtection.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/route53resolverfirewallrulegroup"

&route53resolverfirewallrulegroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtection {
	Partner: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtection.property.partner">Partner</a></code> | <code>*string</code> | The partner identifier value. |

---

##### `Partner`<sup>Optional</sup> <a name="Partner" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtection.property.partner"></a>

```go
Partner *string
```

- *Type:* *string

The partner identifier value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_firewall_rule_group#partner Route53ResolverFirewallRuleGroup#partner}

---

### Route53ResolverFirewallRuleGroupTags <a name="Route53ResolverFirewallRuleGroupTags" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/route53resolverfirewallrulegroup"

&route53resolverfirewallrulegroup.Route53ResolverFirewallRuleGroupTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_firewall_rule_group#key Route53ResolverFirewallRuleGroup#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53resolver_firewall_rule_group#value Route53ResolverFirewallRuleGroup#value}

---

## Classes <a name="Classes" id="Classes"></a>

### Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference <a name="Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/route53resolverfirewallrulegroup"

route53resolverfirewallrulegroup.NewRoute53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.resetCategory">ResetCategory</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCategory` <a name="ResetCategory" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.resetCategory"></a>

```go
func ResetCategory()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.property.categoryInput">CategoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.property.category">Category</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CategoryInput`<sup>Optional</sup> <a name="CategoryInput" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.property.categoryInput"></a>

```go
func CategoryInput() *string
```

- *Type:* *string

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.property.category"></a>

```go
func Category() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference <a name="Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/route53resolverfirewallrulegroup"

route53resolverfirewallrulegroup.NewRoute53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.resetCategory">ResetCategory</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCategory` <a name="ResetCategory" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.resetCategory"></a>

```go
func ResetCategory()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.property.categoryInput">CategoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.property.category">Category</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CategoryInput`<sup>Optional</sup> <a name="CategoryInput" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.property.categoryInput"></a>

```go
func CategoryInput() *string
```

- *Type:* *string

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.property.category"></a>

```go
func Category() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference <a name="Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/route53resolverfirewallrulegroup"

route53resolverfirewallrulegroup.NewRoute53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.putFirewallAdvancedContentCategory">PutFirewallAdvancedContentCategory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.putFirewallAdvancedThreatCategory">PutFirewallAdvancedThreatCategory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.putPartnerThreatProtection">PutPartnerThreatProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.resetFirewallAdvancedContentCategory">ResetFirewallAdvancedContentCategory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.resetFirewallAdvancedThreatCategory">ResetFirewallAdvancedThreatCategory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.resetPartnerThreatProtection">ResetPartnerThreatProtection</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFirewallAdvancedContentCategory` <a name="PutFirewallAdvancedContentCategory" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.putFirewallAdvancedContentCategory"></a>

```go
func PutFirewallAdvancedContentCategory(value Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategory)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.putFirewallAdvancedContentCategory.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategory">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategory</a>

---

##### `PutFirewallAdvancedThreatCategory` <a name="PutFirewallAdvancedThreatCategory" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.putFirewallAdvancedThreatCategory"></a>

```go
func PutFirewallAdvancedThreatCategory(value Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategory)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.putFirewallAdvancedThreatCategory.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategory">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategory</a>

---

##### `PutPartnerThreatProtection` <a name="PutPartnerThreatProtection" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.putPartnerThreatProtection"></a>

```go
func PutPartnerThreatProtection(value Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtection)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.putPartnerThreatProtection.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtection">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtection</a>

---

##### `ResetFirewallAdvancedContentCategory` <a name="ResetFirewallAdvancedContentCategory" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.resetFirewallAdvancedContentCategory"></a>

```go
func ResetFirewallAdvancedContentCategory()
```

##### `ResetFirewallAdvancedThreatCategory` <a name="ResetFirewallAdvancedThreatCategory" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.resetFirewallAdvancedThreatCategory"></a>

```go
func ResetFirewallAdvancedThreatCategory()
```

##### `ResetPartnerThreatProtection` <a name="ResetPartnerThreatProtection" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.resetPartnerThreatProtection"></a>

```go
func ResetPartnerThreatProtection()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.property.firewallAdvancedContentCategory">FirewallAdvancedContentCategory</a></code> | <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.property.firewallAdvancedThreatCategory">FirewallAdvancedThreatCategory</a></code> | <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.property.partnerThreatProtection">PartnerThreatProtection</a></code> | <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.property.firewallAdvancedContentCategoryInput">FirewallAdvancedContentCategoryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.property.firewallAdvancedThreatCategoryInput">FirewallAdvancedThreatCategoryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.property.partnerThreatProtectionInput">PartnerThreatProtectionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FirewallAdvancedContentCategory`<sup>Required</sup> <a name="FirewallAdvancedContentCategory" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.property.firewallAdvancedContentCategory"></a>

```go
func FirewallAdvancedContentCategory() Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedContentCategoryOutputReference</a>

---

##### `FirewallAdvancedThreatCategory`<sup>Required</sup> <a name="FirewallAdvancedThreatCategory" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.property.firewallAdvancedThreatCategory"></a>

```go
func FirewallAdvancedThreatCategory() Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeFirewallAdvancedThreatCategoryOutputReference</a>

---

##### `PartnerThreatProtection`<sup>Required</sup> <a name="PartnerThreatProtection" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.property.partnerThreatProtection"></a>

```go
func PartnerThreatProtection() Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference</a>

---

##### `FirewallAdvancedContentCategoryInput`<sup>Optional</sup> <a name="FirewallAdvancedContentCategoryInput" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.property.firewallAdvancedContentCategoryInput"></a>

```go
func FirewallAdvancedContentCategoryInput() interface{}
```

- *Type:* interface{}

---

##### `FirewallAdvancedThreatCategoryInput`<sup>Optional</sup> <a name="FirewallAdvancedThreatCategoryInput" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.property.firewallAdvancedThreatCategoryInput"></a>

```go
func FirewallAdvancedThreatCategoryInput() interface{}
```

- *Type:* interface{}

---

##### `PartnerThreatProtectionInput`<sup>Optional</sup> <a name="PartnerThreatProtectionInput" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.property.partnerThreatProtectionInput"></a>

```go
func PartnerThreatProtectionInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference <a name="Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/route53resolverfirewallrulegroup"

route53resolverfirewallrulegroup.NewRoute53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.resetPartner">ResetPartner</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPartner` <a name="ResetPartner" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.resetPartner"></a>

```go
func ResetPartner()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.property.partnerInput">PartnerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.property.partner">Partner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PartnerInput`<sup>Optional</sup> <a name="PartnerInput" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.property.partnerInput"></a>

```go
func PartnerInput() *string
```

- *Type:* *string

---

##### `Partner`<sup>Required</sup> <a name="Partner" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.property.partner"></a>

```go
func Partner() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypePartnerThreatProtectionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Route53ResolverFirewallRuleGroupFirewallRulesList <a name="Route53ResolverFirewallRuleGroupFirewallRulesList" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/route53resolverfirewallrulegroup"

route53resolverfirewallrulegroup.NewRoute53ResolverFirewallRuleGroupFirewallRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Route53ResolverFirewallRuleGroupFirewallRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.get"></a>

```go
func Get(index *f64) Route53ResolverFirewallRuleGroupFirewallRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Route53ResolverFirewallRuleGroupFirewallRulesOutputReference <a name="Route53ResolverFirewallRuleGroupFirewallRulesOutputReference" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/route53resolverfirewallrulegroup"

route53resolverfirewallrulegroup.NewRoute53ResolverFirewallRuleGroupFirewallRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Route53ResolverFirewallRuleGroupFirewallRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.putFirewallRuleType">PutFirewallRuleType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetBlockOverrideDnsType">ResetBlockOverrideDnsType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetBlockOverrideDomain">ResetBlockOverrideDomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetBlockOverrideTtl">ResetBlockOverrideTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetBlockResponse">ResetBlockResponse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetConfidenceThreshold">ResetConfidenceThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetDnsThreatProtection">ResetDnsThreatProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetFirewallDomainListId">ResetFirewallDomainListId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetFirewallDomainRedirectionAction">ResetFirewallDomainRedirectionAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetFirewallRuleType">ResetFirewallRuleType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetFirewallThreatProtectionId">ResetFirewallThreatProtectionId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetQtype">ResetQtype</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetStatus">ResetStatus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFirewallRuleType` <a name="PutFirewallRuleType" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.putFirewallRuleType"></a>

```go
func PutFirewallRuleType(value Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.putFirewallRuleType.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleType</a>

---

##### `ResetAction` <a name="ResetAction" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetAction"></a>

```go
func ResetAction()
```

##### `ResetBlockOverrideDnsType` <a name="ResetBlockOverrideDnsType" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetBlockOverrideDnsType"></a>

```go
func ResetBlockOverrideDnsType()
```

##### `ResetBlockOverrideDomain` <a name="ResetBlockOverrideDomain" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetBlockOverrideDomain"></a>

```go
func ResetBlockOverrideDomain()
```

##### `ResetBlockOverrideTtl` <a name="ResetBlockOverrideTtl" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetBlockOverrideTtl"></a>

```go
func ResetBlockOverrideTtl()
```

##### `ResetBlockResponse` <a name="ResetBlockResponse" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetBlockResponse"></a>

```go
func ResetBlockResponse()
```

##### `ResetConfidenceThreshold` <a name="ResetConfidenceThreshold" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetConfidenceThreshold"></a>

```go
func ResetConfidenceThreshold()
```

##### `ResetDnsThreatProtection` <a name="ResetDnsThreatProtection" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetDnsThreatProtection"></a>

```go
func ResetDnsThreatProtection()
```

##### `ResetFirewallDomainListId` <a name="ResetFirewallDomainListId" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetFirewallDomainListId"></a>

```go
func ResetFirewallDomainListId()
```

##### `ResetFirewallDomainRedirectionAction` <a name="ResetFirewallDomainRedirectionAction" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetFirewallDomainRedirectionAction"></a>

```go
func ResetFirewallDomainRedirectionAction()
```

##### `ResetFirewallRuleType` <a name="ResetFirewallRuleType" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetFirewallRuleType"></a>

```go
func ResetFirewallRuleType()
```

##### `ResetFirewallThreatProtectionId` <a name="ResetFirewallThreatProtectionId" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetFirewallThreatProtectionId"></a>

```go
func ResetFirewallThreatProtectionId()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetPriority"></a>

```go
func ResetPriority()
```

##### `ResetQtype` <a name="ResetQtype" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetQtype"></a>

```go
func ResetQtype()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.resetStatus"></a>

```go
func ResetStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.firewallRuleType">FirewallRuleType</a></code> | <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.actionInput">ActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.blockOverrideDnsTypeInput">BlockOverrideDnsTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.blockOverrideDomainInput">BlockOverrideDomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.blockOverrideTtlInput">BlockOverrideTtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.blockResponseInput">BlockResponseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.confidenceThresholdInput">ConfidenceThresholdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.dnsThreatProtectionInput">DnsThreatProtectionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.firewallDomainListIdInput">FirewallDomainListIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.firewallDomainRedirectionActionInput">FirewallDomainRedirectionActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.firewallRuleTypeInput">FirewallRuleTypeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.firewallThreatProtectionIdInput">FirewallThreatProtectionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.priorityInput">PriorityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.qtypeInput">QtypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.blockOverrideDnsType">BlockOverrideDnsType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.blockOverrideDomain">BlockOverrideDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.blockOverrideTtl">BlockOverrideTtl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.blockResponse">BlockResponse</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.confidenceThreshold">ConfidenceThreshold</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.dnsThreatProtection">DnsThreatProtection</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.firewallDomainListId">FirewallDomainListId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.firewallDomainRedirectionAction">FirewallDomainRedirectionAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.firewallThreatProtectionId">FirewallThreatProtectionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.qtype">Qtype</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FirewallRuleType`<sup>Required</sup> <a name="FirewallRuleType" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.firewallRuleType"></a>

```go
func FirewallRuleType() Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference">Route53ResolverFirewallRuleGroupFirewallRulesFirewallRuleTypeOutputReference</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.actionInput"></a>

```go
func ActionInput() *string
```

- *Type:* *string

---

##### `BlockOverrideDnsTypeInput`<sup>Optional</sup> <a name="BlockOverrideDnsTypeInput" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.blockOverrideDnsTypeInput"></a>

```go
func BlockOverrideDnsTypeInput() *string
```

- *Type:* *string

---

##### `BlockOverrideDomainInput`<sup>Optional</sup> <a name="BlockOverrideDomainInput" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.blockOverrideDomainInput"></a>

```go
func BlockOverrideDomainInput() *string
```

- *Type:* *string

---

##### `BlockOverrideTtlInput`<sup>Optional</sup> <a name="BlockOverrideTtlInput" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.blockOverrideTtlInput"></a>

```go
func BlockOverrideTtlInput() *f64
```

- *Type:* *f64

---

##### `BlockResponseInput`<sup>Optional</sup> <a name="BlockResponseInput" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.blockResponseInput"></a>

```go
func BlockResponseInput() *string
```

- *Type:* *string

---

##### `ConfidenceThresholdInput`<sup>Optional</sup> <a name="ConfidenceThresholdInput" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.confidenceThresholdInput"></a>

```go
func ConfidenceThresholdInput() *string
```

- *Type:* *string

---

##### `DnsThreatProtectionInput`<sup>Optional</sup> <a name="DnsThreatProtectionInput" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.dnsThreatProtectionInput"></a>

```go
func DnsThreatProtectionInput() *string
```

- *Type:* *string

---

##### `FirewallDomainListIdInput`<sup>Optional</sup> <a name="FirewallDomainListIdInput" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.firewallDomainListIdInput"></a>

```go
func FirewallDomainListIdInput() *string
```

- *Type:* *string

---

##### `FirewallDomainRedirectionActionInput`<sup>Optional</sup> <a name="FirewallDomainRedirectionActionInput" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.firewallDomainRedirectionActionInput"></a>

```go
func FirewallDomainRedirectionActionInput() *string
```

- *Type:* *string

---

##### `FirewallRuleTypeInput`<sup>Optional</sup> <a name="FirewallRuleTypeInput" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.firewallRuleTypeInput"></a>

```go
func FirewallRuleTypeInput() interface{}
```

- *Type:* interface{}

---

##### `FirewallThreatProtectionIdInput`<sup>Optional</sup> <a name="FirewallThreatProtectionIdInput" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.firewallThreatProtectionIdInput"></a>

```go
func FirewallThreatProtectionIdInput() *string
```

- *Type:* *string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.priorityInput"></a>

```go
func PriorityInput() *f64
```

- *Type:* *f64

---

##### `QtypeInput`<sup>Optional</sup> <a name="QtypeInput" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.qtypeInput"></a>

```go
func QtypeInput() *string
```

- *Type:* *string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `BlockOverrideDnsType`<sup>Required</sup> <a name="BlockOverrideDnsType" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.blockOverrideDnsType"></a>

```go
func BlockOverrideDnsType() *string
```

- *Type:* *string

---

##### `BlockOverrideDomain`<sup>Required</sup> <a name="BlockOverrideDomain" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.blockOverrideDomain"></a>

```go
func BlockOverrideDomain() *string
```

- *Type:* *string

---

##### `BlockOverrideTtl`<sup>Required</sup> <a name="BlockOverrideTtl" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.blockOverrideTtl"></a>

```go
func BlockOverrideTtl() *f64
```

- *Type:* *f64

---

##### `BlockResponse`<sup>Required</sup> <a name="BlockResponse" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.blockResponse"></a>

```go
func BlockResponse() *string
```

- *Type:* *string

---

##### `ConfidenceThreshold`<sup>Required</sup> <a name="ConfidenceThreshold" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.confidenceThreshold"></a>

```go
func ConfidenceThreshold() *string
```

- *Type:* *string

---

##### `DnsThreatProtection`<sup>Required</sup> <a name="DnsThreatProtection" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.dnsThreatProtection"></a>

```go
func DnsThreatProtection() *string
```

- *Type:* *string

---

##### `FirewallDomainListId`<sup>Required</sup> <a name="FirewallDomainListId" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.firewallDomainListId"></a>

```go
func FirewallDomainListId() *string
```

- *Type:* *string

---

##### `FirewallDomainRedirectionAction`<sup>Required</sup> <a name="FirewallDomainRedirectionAction" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.firewallDomainRedirectionAction"></a>

```go
func FirewallDomainRedirectionAction() *string
```

- *Type:* *string

---

##### `FirewallThreatProtectionId`<sup>Required</sup> <a name="FirewallThreatProtectionId" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.firewallThreatProtectionId"></a>

```go
func FirewallThreatProtectionId() *string
```

- *Type:* *string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `Qtype`<sup>Required</sup> <a name="Qtype" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.qtype"></a>

```go
func Qtype() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupFirewallRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Route53ResolverFirewallRuleGroupTagsList <a name="Route53ResolverFirewallRuleGroupTagsList" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/route53resolverfirewallrulegroup"

route53resolverfirewallrulegroup.NewRoute53ResolverFirewallRuleGroupTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Route53ResolverFirewallRuleGroupTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.get"></a>

```go
func Get(index *f64) Route53ResolverFirewallRuleGroupTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Route53ResolverFirewallRuleGroupTagsOutputReference <a name="Route53ResolverFirewallRuleGroupTagsOutputReference" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/route53resolverfirewallrulegroup"

route53resolverfirewallrulegroup.NewRoute53ResolverFirewallRuleGroupTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Route53ResolverFirewallRuleGroupTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.route53ResolverFirewallRuleGroup.Route53ResolverFirewallRuleGroupTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



