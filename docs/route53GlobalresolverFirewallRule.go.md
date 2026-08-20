# `route53GlobalresolverFirewallRule` Submodule <a name="`route53GlobalresolverFirewallRule` Submodule" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53GlobalresolverFirewallRule <a name="Route53GlobalresolverFirewallRule" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53globalresolver_firewall_rule awscc_route53globalresolver_firewall_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/route53globalresolverfirewallrule"

route53globalresolverfirewallrule.NewRoute53GlobalresolverFirewallRule(scope Construct, id *string, config Route53GlobalresolverFirewallRuleConfig) Route53GlobalresolverFirewallRule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig">Route53GlobalresolverFirewallRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig">Route53GlobalresolverFirewallRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.resetBlockOverrideDnsType">ResetBlockOverrideDnsType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.resetBlockOverrideDomain">ResetBlockOverrideDomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.resetBlockOverrideTtl">ResetBlockOverrideTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.resetBlockResponse">ResetBlockResponse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.resetClientToken">ResetClientToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.resetConfidenceThreshold">ResetConfidenceThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.resetDnsAdvancedProtection">ResetDnsAdvancedProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.resetFirewallDomainListId">ResetFirewallDomainListId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.resetQType">ResetQType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetBlockOverrideDnsType` <a name="ResetBlockOverrideDnsType" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.resetBlockOverrideDnsType"></a>

```go
func ResetBlockOverrideDnsType()
```

##### `ResetBlockOverrideDomain` <a name="ResetBlockOverrideDomain" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.resetBlockOverrideDomain"></a>

```go
func ResetBlockOverrideDomain()
```

##### `ResetBlockOverrideTtl` <a name="ResetBlockOverrideTtl" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.resetBlockOverrideTtl"></a>

```go
func ResetBlockOverrideTtl()
```

##### `ResetBlockResponse` <a name="ResetBlockResponse" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.resetBlockResponse"></a>

```go
func ResetBlockResponse()
```

##### `ResetClientToken` <a name="ResetClientToken" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.resetClientToken"></a>

```go
func ResetClientToken()
```

##### `ResetConfidenceThreshold` <a name="ResetConfidenceThreshold" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.resetConfidenceThreshold"></a>

```go
func ResetConfidenceThreshold()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDnsAdvancedProtection` <a name="ResetDnsAdvancedProtection" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.resetDnsAdvancedProtection"></a>

```go
func ResetDnsAdvancedProtection()
```

##### `ResetFirewallDomainListId` <a name="ResetFirewallDomainListId" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.resetFirewallDomainListId"></a>

```go
func ResetFirewallDomainListId()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.resetPriority"></a>

```go
func ResetPriority()
```

##### `ResetQType` <a name="ResetQType" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.resetQType"></a>

```go
func ResetQType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Route53GlobalresolverFirewallRule resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/route53globalresolverfirewallrule"

route53globalresolverfirewallrule.Route53GlobalresolverFirewallRule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/route53globalresolverfirewallrule"

route53globalresolverfirewallrule.Route53GlobalresolverFirewallRule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/route53globalresolverfirewallrule"

route53globalresolverfirewallrule.Route53GlobalresolverFirewallRule_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/route53globalresolverfirewallrule"

route53globalresolverfirewallrule.Route53GlobalresolverFirewallRule_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a Route53GlobalresolverFirewallRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Route53GlobalresolverFirewallRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Route53GlobalresolverFirewallRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53globalresolver_firewall_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the Route53GlobalresolverFirewallRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.firewallRuleId">FirewallRuleId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.queryType">QueryType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.actionInput">ActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.blockOverrideDnsTypeInput">BlockOverrideDnsTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.blockOverrideDomainInput">BlockOverrideDomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.blockOverrideTtlInput">BlockOverrideTtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.blockResponseInput">BlockResponseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.clientTokenInput">ClientTokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.confidenceThresholdInput">ConfidenceThresholdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.dnsAdvancedProtectionInput">DnsAdvancedProtectionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.dnsViewIdInput">DnsViewIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.firewallDomainListIdInput">FirewallDomainListIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.priorityInput">PriorityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.qTypeInput">QTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.blockOverrideDnsType">BlockOverrideDnsType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.blockOverrideDomain">BlockOverrideDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.blockOverrideTtl">BlockOverrideTtl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.blockResponse">BlockResponse</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.clientToken">ClientToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.confidenceThreshold">ConfidenceThreshold</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.dnsAdvancedProtection">DnsAdvancedProtection</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.dnsViewId">DnsViewId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.firewallDomainListId">FirewallDomainListId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.qType">QType</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `FirewallRuleId`<sup>Required</sup> <a name="FirewallRuleId" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.firewallRuleId"></a>

```go
func FirewallRuleId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `QueryType`<sup>Required</sup> <a name="QueryType" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.queryType"></a>

```go
func QueryType() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.actionInput"></a>

```go
func ActionInput() *string
```

- *Type:* *string

---

##### `BlockOverrideDnsTypeInput`<sup>Optional</sup> <a name="BlockOverrideDnsTypeInput" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.blockOverrideDnsTypeInput"></a>

```go
func BlockOverrideDnsTypeInput() *string
```

- *Type:* *string

---

##### `BlockOverrideDomainInput`<sup>Optional</sup> <a name="BlockOverrideDomainInput" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.blockOverrideDomainInput"></a>

```go
func BlockOverrideDomainInput() *string
```

- *Type:* *string

---

##### `BlockOverrideTtlInput`<sup>Optional</sup> <a name="BlockOverrideTtlInput" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.blockOverrideTtlInput"></a>

```go
func BlockOverrideTtlInput() *f64
```

- *Type:* *f64

---

##### `BlockResponseInput`<sup>Optional</sup> <a name="BlockResponseInput" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.blockResponseInput"></a>

```go
func BlockResponseInput() *string
```

- *Type:* *string

---

##### `ClientTokenInput`<sup>Optional</sup> <a name="ClientTokenInput" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.clientTokenInput"></a>

```go
func ClientTokenInput() *string
```

- *Type:* *string

---

##### `ConfidenceThresholdInput`<sup>Optional</sup> <a name="ConfidenceThresholdInput" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.confidenceThresholdInput"></a>

```go
func ConfidenceThresholdInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DnsAdvancedProtectionInput`<sup>Optional</sup> <a name="DnsAdvancedProtectionInput" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.dnsAdvancedProtectionInput"></a>

```go
func DnsAdvancedProtectionInput() *string
```

- *Type:* *string

---

##### `DnsViewIdInput`<sup>Optional</sup> <a name="DnsViewIdInput" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.dnsViewIdInput"></a>

```go
func DnsViewIdInput() *string
```

- *Type:* *string

---

##### `FirewallDomainListIdInput`<sup>Optional</sup> <a name="FirewallDomainListIdInput" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.firewallDomainListIdInput"></a>

```go
func FirewallDomainListIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.priorityInput"></a>

```go
func PriorityInput() *f64
```

- *Type:* *f64

---

##### `QTypeInput`<sup>Optional</sup> <a name="QTypeInput" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.qTypeInput"></a>

```go
func QTypeInput() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `BlockOverrideDnsType`<sup>Required</sup> <a name="BlockOverrideDnsType" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.blockOverrideDnsType"></a>

```go
func BlockOverrideDnsType() *string
```

- *Type:* *string

---

##### `BlockOverrideDomain`<sup>Required</sup> <a name="BlockOverrideDomain" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.blockOverrideDomain"></a>

```go
func BlockOverrideDomain() *string
```

- *Type:* *string

---

##### `BlockOverrideTtl`<sup>Required</sup> <a name="BlockOverrideTtl" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.blockOverrideTtl"></a>

```go
func BlockOverrideTtl() *f64
```

- *Type:* *f64

---

##### `BlockResponse`<sup>Required</sup> <a name="BlockResponse" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.blockResponse"></a>

```go
func BlockResponse() *string
```

- *Type:* *string

---

##### `ClientToken`<sup>Required</sup> <a name="ClientToken" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.clientToken"></a>

```go
func ClientToken() *string
```

- *Type:* *string

---

##### `ConfidenceThreshold`<sup>Required</sup> <a name="ConfidenceThreshold" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.confidenceThreshold"></a>

```go
func ConfidenceThreshold() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DnsAdvancedProtection`<sup>Required</sup> <a name="DnsAdvancedProtection" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.dnsAdvancedProtection"></a>

```go
func DnsAdvancedProtection() *string
```

- *Type:* *string

---

##### `DnsViewId`<sup>Required</sup> <a name="DnsViewId" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.dnsViewId"></a>

```go
func DnsViewId() *string
```

- *Type:* *string

---

##### `FirewallDomainListId`<sup>Required</sup> <a name="FirewallDomainListId" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.firewallDomainListId"></a>

```go
func FirewallDomainListId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `QType`<sup>Required</sup> <a name="QType" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.qType"></a>

```go
func QType() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### Route53GlobalresolverFirewallRuleConfig <a name="Route53GlobalresolverFirewallRuleConfig" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/route53globalresolverfirewallrule"

&route53globalresolverfirewallrule.Route53GlobalresolverFirewallRuleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Action: *string,
	DnsViewId: *string,
	Name: *string,
	BlockOverrideDnsType: *string,
	BlockOverrideDomain: *string,
	BlockOverrideTtl: *f64,
	BlockResponse: *string,
	ClientToken: *string,
	ConfidenceThreshold: *string,
	Description: *string,
	DnsAdvancedProtection: *string,
	FirewallDomainListId: *string,
	Priority: *f64,
	QType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.property.action">Action</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53globalresolver_firewall_rule#action Route53GlobalresolverFirewallRule#action}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.property.dnsViewId">DnsViewId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53globalresolver_firewall_rule#dns_view_id Route53GlobalresolverFirewallRule#dns_view_id}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53globalresolver_firewall_rule#name Route53GlobalresolverFirewallRule#name}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.property.blockOverrideDnsType">BlockOverrideDnsType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53globalresolver_firewall_rule#block_override_dns_type Route53GlobalresolverFirewallRule#block_override_dns_type}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.property.blockOverrideDomain">BlockOverrideDomain</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53globalresolver_firewall_rule#block_override_domain Route53GlobalresolverFirewallRule#block_override_domain}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.property.blockOverrideTtl">BlockOverrideTtl</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53globalresolver_firewall_rule#block_override_ttl Route53GlobalresolverFirewallRule#block_override_ttl}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.property.blockResponse">BlockResponse</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53globalresolver_firewall_rule#block_response Route53GlobalresolverFirewallRule#block_response}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.property.clientToken">ClientToken</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53globalresolver_firewall_rule#client_token Route53GlobalresolverFirewallRule#client_token}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.property.confidenceThreshold">ConfidenceThreshold</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53globalresolver_firewall_rule#confidence_threshold Route53GlobalresolverFirewallRule#confidence_threshold}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53globalresolver_firewall_rule#description Route53GlobalresolverFirewallRule#description}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.property.dnsAdvancedProtection">DnsAdvancedProtection</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53globalresolver_firewall_rule#dns_advanced_protection Route53GlobalresolverFirewallRule#dns_advanced_protection}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.property.firewallDomainListId">FirewallDomainListId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53globalresolver_firewall_rule#firewall_domain_list_id Route53GlobalresolverFirewallRule#firewall_domain_list_id}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.property.priority">Priority</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53globalresolver_firewall_rule#priority Route53GlobalresolverFirewallRule#priority}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.property.qType">QType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53globalresolver_firewall_rule#q_type Route53GlobalresolverFirewallRule#q_type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.property.action"></a>

```go
Action *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53globalresolver_firewall_rule#action Route53GlobalresolverFirewallRule#action}.

---

##### `DnsViewId`<sup>Required</sup> <a name="DnsViewId" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.property.dnsViewId"></a>

```go
DnsViewId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53globalresolver_firewall_rule#dns_view_id Route53GlobalresolverFirewallRule#dns_view_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53globalresolver_firewall_rule#name Route53GlobalresolverFirewallRule#name}.

---

##### `BlockOverrideDnsType`<sup>Optional</sup> <a name="BlockOverrideDnsType" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.property.blockOverrideDnsType"></a>

```go
BlockOverrideDnsType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53globalresolver_firewall_rule#block_override_dns_type Route53GlobalresolverFirewallRule#block_override_dns_type}.

---

##### `BlockOverrideDomain`<sup>Optional</sup> <a name="BlockOverrideDomain" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.property.blockOverrideDomain"></a>

```go
BlockOverrideDomain *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53globalresolver_firewall_rule#block_override_domain Route53GlobalresolverFirewallRule#block_override_domain}.

---

##### `BlockOverrideTtl`<sup>Optional</sup> <a name="BlockOverrideTtl" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.property.blockOverrideTtl"></a>

```go
BlockOverrideTtl *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53globalresolver_firewall_rule#block_override_ttl Route53GlobalresolverFirewallRule#block_override_ttl}.

---

##### `BlockResponse`<sup>Optional</sup> <a name="BlockResponse" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.property.blockResponse"></a>

```go
BlockResponse *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53globalresolver_firewall_rule#block_response Route53GlobalresolverFirewallRule#block_response}.

---

##### `ClientToken`<sup>Optional</sup> <a name="ClientToken" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.property.clientToken"></a>

```go
ClientToken *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53globalresolver_firewall_rule#client_token Route53GlobalresolverFirewallRule#client_token}.

---

##### `ConfidenceThreshold`<sup>Optional</sup> <a name="ConfidenceThreshold" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.property.confidenceThreshold"></a>

```go
ConfidenceThreshold *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53globalresolver_firewall_rule#confidence_threshold Route53GlobalresolverFirewallRule#confidence_threshold}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53globalresolver_firewall_rule#description Route53GlobalresolverFirewallRule#description}.

---

##### `DnsAdvancedProtection`<sup>Optional</sup> <a name="DnsAdvancedProtection" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.property.dnsAdvancedProtection"></a>

```go
DnsAdvancedProtection *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53globalresolver_firewall_rule#dns_advanced_protection Route53GlobalresolverFirewallRule#dns_advanced_protection}.

---

##### `FirewallDomainListId`<sup>Optional</sup> <a name="FirewallDomainListId" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.property.firewallDomainListId"></a>

```go
FirewallDomainListId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53globalresolver_firewall_rule#firewall_domain_list_id Route53GlobalresolverFirewallRule#firewall_domain_list_id}.

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.property.priority"></a>

```go
Priority *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53globalresolver_firewall_rule#priority Route53GlobalresolverFirewallRule#priority}.

---

##### `QType`<sup>Optional</sup> <a name="QType" id="@cdktn/provider-awscc.route53GlobalresolverFirewallRule.Route53GlobalresolverFirewallRuleConfig.property.qType"></a>

```go
QType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53globalresolver_firewall_rule#q_type Route53GlobalresolverFirewallRule#q_type}.

---



