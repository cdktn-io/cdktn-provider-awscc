# `billingconductorPricingRule` Submodule <a name="`billingconductorPricingRule` Submodule" id="@cdktn/provider-awscc.billingconductorPricingRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BillingconductorPricingRule <a name="BillingconductorPricingRule" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billingconductor_pricing_rule awscc_billingconductor_pricing_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/billingconductorpricingrule"

billingconductorpricingrule.NewBillingconductorPricingRule(scope Construct, id *string, config BillingconductorPricingRuleConfig) BillingconductorPricingRule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig">BillingconductorPricingRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig">BillingconductorPricingRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.putTiering">PutTiering</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.resetBillingEntity">ResetBillingEntity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.resetModifierPercentage">ResetModifierPercentage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.resetOperation">ResetOperation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.resetService">ResetService</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.resetTiering">ResetTiering</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.resetUsageType">ResetUsageType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTiering` <a name="PutTiering" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.putTiering"></a>

```go
func PutTiering(value BillingconductorPricingRuleTiering)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.putTiering.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTiering">BillingconductorPricingRuleTiering</a>

---

##### `ResetBillingEntity` <a name="ResetBillingEntity" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.resetBillingEntity"></a>

```go
func ResetBillingEntity()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetModifierPercentage` <a name="ResetModifierPercentage" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.resetModifierPercentage"></a>

```go
func ResetModifierPercentage()
```

##### `ResetOperation` <a name="ResetOperation" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.resetOperation"></a>

```go
func ResetOperation()
```

##### `ResetService` <a name="ResetService" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.resetService"></a>

```go
func ResetService()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTiering` <a name="ResetTiering" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.resetTiering"></a>

```go
func ResetTiering()
```

##### `ResetUsageType` <a name="ResetUsageType" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.resetUsageType"></a>

```go
func ResetUsageType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a BillingconductorPricingRule resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/billingconductorpricingrule"

billingconductorpricingrule.BillingconductorPricingRule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/billingconductorpricingrule"

billingconductorpricingrule.BillingconductorPricingRule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/billingconductorpricingrule"

billingconductorpricingrule.BillingconductorPricingRule_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/billingconductorpricingrule"

billingconductorpricingrule.BillingconductorPricingRule_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a BillingconductorPricingRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the BillingconductorPricingRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing BillingconductorPricingRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billingconductor_pricing_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the BillingconductorPricingRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.associatedPricingPlanCount">AssociatedPricingPlanCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.creationTime">CreationTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.lastModifiedTime">LastModifiedTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList">BillingconductorPricingRuleTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.tiering">Tiering</a></code> | <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference">BillingconductorPricingRuleTieringOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.billingEntityInput">BillingEntityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.modifierPercentageInput">ModifierPercentageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.operationInput">OperationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.scopeInput">ScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.serviceInput">ServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.tieringInput">TieringInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.usageTypeInput">UsageTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.billingEntity">BillingEntity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.modifierPercentage">ModifierPercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.operation">Operation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.scope">Scope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.service">Service</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.usageType">UsageType</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `AssociatedPricingPlanCount`<sup>Required</sup> <a name="AssociatedPricingPlanCount" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.associatedPricingPlanCount"></a>

```go
func AssociatedPricingPlanCount() *f64
```

- *Type:* *f64

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.creationTime"></a>

```go
func CreationTime() *f64
```

- *Type:* *f64

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LastModifiedTime`<sup>Required</sup> <a name="LastModifiedTime" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.lastModifiedTime"></a>

```go
func LastModifiedTime() *f64
```

- *Type:* *f64

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.tags"></a>

```go
func Tags() BillingconductorPricingRuleTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList">BillingconductorPricingRuleTagsList</a>

---

##### `Tiering`<sup>Required</sup> <a name="Tiering" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.tiering"></a>

```go
func Tiering() BillingconductorPricingRuleTieringOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference">BillingconductorPricingRuleTieringOutputReference</a>

---

##### `BillingEntityInput`<sup>Optional</sup> <a name="BillingEntityInput" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.billingEntityInput"></a>

```go
func BillingEntityInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ModifierPercentageInput`<sup>Optional</sup> <a name="ModifierPercentageInput" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.modifierPercentageInput"></a>

```go
func ModifierPercentageInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OperationInput`<sup>Optional</sup> <a name="OperationInput" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.operationInput"></a>

```go
func OperationInput() *string
```

- *Type:* *string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.scopeInput"></a>

```go
func ScopeInput() *string
```

- *Type:* *string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.serviceInput"></a>

```go
func ServiceInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `TieringInput`<sup>Optional</sup> <a name="TieringInput" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.tieringInput"></a>

```go
func TieringInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `UsageTypeInput`<sup>Optional</sup> <a name="UsageTypeInput" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.usageTypeInput"></a>

```go
func UsageTypeInput() *string
```

- *Type:* *string

---

##### `BillingEntity`<sup>Required</sup> <a name="BillingEntity" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.billingEntity"></a>

```go
func BillingEntity() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `ModifierPercentage`<sup>Required</sup> <a name="ModifierPercentage" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.modifierPercentage"></a>

```go
func ModifierPercentage() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Operation`<sup>Required</sup> <a name="Operation" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.operation"></a>

```go
func Operation() *string
```

- *Type:* *string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.scope"></a>

```go
func Scope() *string
```

- *Type:* *string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `UsageType`<sup>Required</sup> <a name="UsageType" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.usageType"></a>

```go
func UsageType() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### BillingconductorPricingRuleConfig <a name="BillingconductorPricingRuleConfig" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/billingconductorpricingrule"

&billingconductorpricingrule.BillingconductorPricingRuleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Scope: *string,
	Type: *string,
	BillingEntity: *string,
	Description: *string,
	ModifierPercentage: *f64,
	Operation: *string,
	Service: *string,
	Tags: interface{},
	Tiering: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.billingconductorPricingRule.BillingconductorPricingRuleTiering,
	UsageType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.name">Name</a></code> | <code>*string</code> | Pricing rule name. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.scope">Scope</a></code> | <code>*string</code> | A term used to categorize the granularity of a Pricing Rule. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.type">Type</a></code> | <code>*string</code> | One of MARKUP, DISCOUNT or TIERING that describes the behaviour of the pricing rule. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.billingEntity">BillingEntity</a></code> | <code>*string</code> | The seller of services provided by AWS, their affiliates, or third-party providers selling services via AWS Marketplaces. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.description">Description</a></code> | <code>*string</code> | Pricing rule description. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.modifierPercentage">ModifierPercentage</a></code> | <code>*f64</code> | Pricing rule modifier percentage. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.operation">Operation</a></code> | <code>*string</code> | The Operation which a SKU pricing rule is modifying. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.service">Service</a></code> | <code>*string</code> | The service which a pricing rule is applied on. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.tags">Tags</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billingconductor_pricing_rule#tags BillingconductorPricingRule#tags}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.tiering">Tiering</a></code> | <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTiering">BillingconductorPricingRuleTiering</a></code> | The set of tiering configurations for the pricing rule. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.usageType">UsageType</a></code> | <code>*string</code> | The UsageType which a SKU pricing rule is modifying. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Pricing rule name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billingconductor_pricing_rule#name BillingconductorPricingRule#name}

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.scope"></a>

```go
Scope *string
```

- *Type:* *string

A term used to categorize the granularity of a Pricing Rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billingconductor_pricing_rule#scope BillingconductorPricingRule#scope}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

One of MARKUP, DISCOUNT or TIERING that describes the behaviour of the pricing rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billingconductor_pricing_rule#type BillingconductorPricingRule#type}

---

##### `BillingEntity`<sup>Optional</sup> <a name="BillingEntity" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.billingEntity"></a>

```go
BillingEntity *string
```

- *Type:* *string

The seller of services provided by AWS, their affiliates, or third-party providers selling services via AWS Marketplaces.

Supported billing entities are AWS, AWS Marketplace, and AISPL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billingconductor_pricing_rule#billing_entity BillingconductorPricingRule#billing_entity}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Pricing rule description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billingconductor_pricing_rule#description BillingconductorPricingRule#description}

---

##### `ModifierPercentage`<sup>Optional</sup> <a name="ModifierPercentage" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.modifierPercentage"></a>

```go
ModifierPercentage *f64
```

- *Type:* *f64

Pricing rule modifier percentage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billingconductor_pricing_rule#modifier_percentage BillingconductorPricingRule#modifier_percentage}

---

##### `Operation`<sup>Optional</sup> <a name="Operation" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.operation"></a>

```go
Operation *string
```

- *Type:* *string

The Operation which a SKU pricing rule is modifying.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billingconductor_pricing_rule#operation BillingconductorPricingRule#operation}

---

##### `Service`<sup>Optional</sup> <a name="Service" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.service"></a>

```go
Service *string
```

- *Type:* *string

The service which a pricing rule is applied on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billingconductor_pricing_rule#service BillingconductorPricingRule#service}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billingconductor_pricing_rule#tags BillingconductorPricingRule#tags}.

---

##### `Tiering`<sup>Optional</sup> <a name="Tiering" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.tiering"></a>

```go
Tiering BillingconductorPricingRuleTiering
```

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTiering">BillingconductorPricingRuleTiering</a>

The set of tiering configurations for the pricing rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billingconductor_pricing_rule#tiering BillingconductorPricingRule#tiering}

---

##### `UsageType`<sup>Optional</sup> <a name="UsageType" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.usageType"></a>

```go
UsageType *string
```

- *Type:* *string

The UsageType which a SKU pricing rule is modifying.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billingconductor_pricing_rule#usage_type BillingconductorPricingRule#usage_type}

---

### BillingconductorPricingRuleTags <a name="BillingconductorPricingRuleTags" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/billingconductorpricingrule"

&billingconductorpricingrule.BillingconductorPricingRuleTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billingconductor_pricing_rule#key BillingconductorPricingRule#key}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billingconductor_pricing_rule#value BillingconductorPricingRule#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billingconductor_pricing_rule#key BillingconductorPricingRule#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billingconductor_pricing_rule#value BillingconductorPricingRule#value}.

---

### BillingconductorPricingRuleTiering <a name="BillingconductorPricingRuleTiering" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTiering"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTiering.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/billingconductorpricingrule"

&billingconductorpricingrule.BillingconductorPricingRuleTiering {
	FreeTier: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTier,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTiering.property.freeTier">FreeTier</a></code> | <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTier">BillingconductorPricingRuleTieringFreeTier</a></code> | The possible customizable free tier configurations. |

---

##### `FreeTier`<sup>Optional</sup> <a name="FreeTier" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTiering.property.freeTier"></a>

```go
FreeTier BillingconductorPricingRuleTieringFreeTier
```

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTier">BillingconductorPricingRuleTieringFreeTier</a>

The possible customizable free tier configurations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billingconductor_pricing_rule#free_tier BillingconductorPricingRule#free_tier}

---

### BillingconductorPricingRuleTieringFreeTier <a name="BillingconductorPricingRuleTieringFreeTier" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTier"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTier.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/billingconductorpricingrule"

&billingconductorpricingrule.BillingconductorPricingRuleTieringFreeTier {
	Activated: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTier.property.activated">Activated</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billingconductor_pricing_rule#activated BillingconductorPricingRule#activated}. |

---

##### `Activated`<sup>Optional</sup> <a name="Activated" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTier.property.activated"></a>

```go
Activated interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billingconductor_pricing_rule#activated BillingconductorPricingRule#activated}.

---

## Classes <a name="Classes" id="Classes"></a>

### BillingconductorPricingRuleTagsList <a name="BillingconductorPricingRuleTagsList" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/billingconductorpricingrule"

billingconductorpricingrule.NewBillingconductorPricingRuleTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BillingconductorPricingRuleTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.get"></a>

```go
func Get(index *f64) BillingconductorPricingRuleTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BillingconductorPricingRuleTagsOutputReference <a name="BillingconductorPricingRuleTagsOutputReference" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/billingconductorpricingrule"

billingconductorpricingrule.NewBillingconductorPricingRuleTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BillingconductorPricingRuleTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BillingconductorPricingRuleTieringFreeTierOutputReference <a name="BillingconductorPricingRuleTieringFreeTierOutputReference" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/billingconductorpricingrule"

billingconductorpricingrule.NewBillingconductorPricingRuleTieringFreeTierOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BillingconductorPricingRuleTieringFreeTierOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.resetActivated">ResetActivated</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetActivated` <a name="ResetActivated" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.resetActivated"></a>

```go
func ResetActivated()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.property.activatedInput">ActivatedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.property.activated">Activated</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActivatedInput`<sup>Optional</sup> <a name="ActivatedInput" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.property.activatedInput"></a>

```go
func ActivatedInput() interface{}
```

- *Type:* interface{}

---

##### `Activated`<sup>Required</sup> <a name="Activated" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.property.activated"></a>

```go
func Activated() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BillingconductorPricingRuleTieringOutputReference <a name="BillingconductorPricingRuleTieringOutputReference" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/billingconductorpricingrule"

billingconductorpricingrule.NewBillingconductorPricingRuleTieringOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BillingconductorPricingRuleTieringOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.putFreeTier">PutFreeTier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.resetFreeTier">ResetFreeTier</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFreeTier` <a name="PutFreeTier" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.putFreeTier"></a>

```go
func PutFreeTier(value BillingconductorPricingRuleTieringFreeTier)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.putFreeTier.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTier">BillingconductorPricingRuleTieringFreeTier</a>

---

##### `ResetFreeTier` <a name="ResetFreeTier" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.resetFreeTier"></a>

```go
func ResetFreeTier()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.property.freeTier">FreeTier</a></code> | <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference">BillingconductorPricingRuleTieringFreeTierOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.property.freeTierInput">FreeTierInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FreeTier`<sup>Required</sup> <a name="FreeTier" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.property.freeTier"></a>

```go
func FreeTier() BillingconductorPricingRuleTieringFreeTierOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference">BillingconductorPricingRuleTieringFreeTierOutputReference</a>

---

##### `FreeTierInput`<sup>Optional</sup> <a name="FreeTierInput" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.property.freeTierInput"></a>

```go
func FreeTierInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



