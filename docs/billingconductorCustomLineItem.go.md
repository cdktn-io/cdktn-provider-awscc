# `billingconductorCustomLineItem` Submodule <a name="`billingconductorCustomLineItem` Submodule" id="@cdktn/provider-awscc.billingconductorCustomLineItem"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BillingconductorCustomLineItem <a name="BillingconductorCustomLineItem" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_custom_line_item awscc_billingconductor_custom_line_item}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/billingconductorcustomlineitem"

billingconductorcustomlineitem.NewBillingconductorCustomLineItem(scope Construct, id *string, config BillingconductorCustomLineItemConfig) BillingconductorCustomLineItem
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig">BillingconductorCustomLineItemConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig">BillingconductorCustomLineItemConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.putBillingPeriodRange">PutBillingPeriodRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.putCustomLineItemChargeDetails">PutCustomLineItemChargeDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.putPresentationDetails">PutPresentationDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.resetBillingPeriodRange">ResetBillingPeriodRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.resetComputationRule">ResetComputationRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.resetCustomLineItemChargeDetails">ResetCustomLineItemChargeDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.resetPresentationDetails">ResetPresentationDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBillingPeriodRange` <a name="PutBillingPeriodRange" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.putBillingPeriodRange"></a>

```go
func PutBillingPeriodRange(value BillingconductorCustomLineItemBillingPeriodRange)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.putBillingPeriodRange.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRange">BillingconductorCustomLineItemBillingPeriodRange</a>

---

##### `PutCustomLineItemChargeDetails` <a name="PutCustomLineItemChargeDetails" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.putCustomLineItemChargeDetails"></a>

```go
func PutCustomLineItemChargeDetails(value BillingconductorCustomLineItemCustomLineItemChargeDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.putCustomLineItemChargeDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetails">BillingconductorCustomLineItemCustomLineItemChargeDetails</a>

---

##### `PutPresentationDetails` <a name="PutPresentationDetails" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.putPresentationDetails"></a>

```go
func PutPresentationDetails(value BillingconductorCustomLineItemPresentationDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.putPresentationDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetails">BillingconductorCustomLineItemPresentationDetails</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.resetAccountId"></a>

```go
func ResetAccountId()
```

##### `ResetBillingPeriodRange` <a name="ResetBillingPeriodRange" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.resetBillingPeriodRange"></a>

```go
func ResetBillingPeriodRange()
```

##### `ResetComputationRule` <a name="ResetComputationRule" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.resetComputationRule"></a>

```go
func ResetComputationRule()
```

##### `ResetCustomLineItemChargeDetails` <a name="ResetCustomLineItemChargeDetails" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.resetCustomLineItemChargeDetails"></a>

```go
func ResetCustomLineItemChargeDetails()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetPresentationDetails` <a name="ResetPresentationDetails" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.resetPresentationDetails"></a>

```go
func ResetPresentationDetails()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a BillingconductorCustomLineItem resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/billingconductorcustomlineitem"

billingconductorcustomlineitem.BillingconductorCustomLineItem_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/billingconductorcustomlineitem"

billingconductorcustomlineitem.BillingconductorCustomLineItem_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/billingconductorcustomlineitem"

billingconductorcustomlineitem.BillingconductorCustomLineItem_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/billingconductorcustomlineitem"

billingconductorcustomlineitem.BillingconductorCustomLineItem_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a BillingconductorCustomLineItem resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the BillingconductorCustomLineItem to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing BillingconductorCustomLineItem that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_custom_line_item#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the BillingconductorCustomLineItem to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.associationSize">AssociationSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.billingPeriodRange">BillingPeriodRange</a></code> | <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference">BillingconductorCustomLineItemBillingPeriodRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.creationTime">CreationTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.currencyCode">CurrencyCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.customLineItemChargeDetails">CustomLineItemChargeDetails</a></code> | <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference">BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.lastModifiedTime">LastModifiedTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.presentationDetails">PresentationDetails</a></code> | <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference">BillingconductorCustomLineItemPresentationDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.productCode">ProductCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsList">BillingconductorCustomLineItemTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.billingGroupArnInput">BillingGroupArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.billingPeriodRangeInput">BillingPeriodRangeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.computationRuleInput">ComputationRuleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.customLineItemChargeDetailsInput">CustomLineItemChargeDetailsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.presentationDetailsInput">PresentationDetailsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.billingGroupArn">BillingGroupArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.computationRule">ComputationRule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `AssociationSize`<sup>Required</sup> <a name="AssociationSize" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.associationSize"></a>

```go
func AssociationSize() *f64
```

- *Type:* *f64

---

##### `BillingPeriodRange`<sup>Required</sup> <a name="BillingPeriodRange" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.billingPeriodRange"></a>

```go
func BillingPeriodRange() BillingconductorCustomLineItemBillingPeriodRangeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference">BillingconductorCustomLineItemBillingPeriodRangeOutputReference</a>

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.creationTime"></a>

```go
func CreationTime() *f64
```

- *Type:* *f64

---

##### `CurrencyCode`<sup>Required</sup> <a name="CurrencyCode" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.currencyCode"></a>

```go
func CurrencyCode() *string
```

- *Type:* *string

---

##### `CustomLineItemChargeDetails`<sup>Required</sup> <a name="CustomLineItemChargeDetails" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.customLineItemChargeDetails"></a>

```go
func CustomLineItemChargeDetails() BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference">BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LastModifiedTime`<sup>Required</sup> <a name="LastModifiedTime" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.lastModifiedTime"></a>

```go
func LastModifiedTime() *f64
```

- *Type:* *f64

---

##### `PresentationDetails`<sup>Required</sup> <a name="PresentationDetails" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.presentationDetails"></a>

```go
func PresentationDetails() BillingconductorCustomLineItemPresentationDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference">BillingconductorCustomLineItemPresentationDetailsOutputReference</a>

---

##### `ProductCode`<sup>Required</sup> <a name="ProductCode" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.productCode"></a>

```go
func ProductCode() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.tags"></a>

```go
func Tags() BillingconductorCustomLineItemTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsList">BillingconductorCustomLineItemTagsList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `BillingGroupArnInput`<sup>Optional</sup> <a name="BillingGroupArnInput" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.billingGroupArnInput"></a>

```go
func BillingGroupArnInput() *string
```

- *Type:* *string

---

##### `BillingPeriodRangeInput`<sup>Optional</sup> <a name="BillingPeriodRangeInput" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.billingPeriodRangeInput"></a>

```go
func BillingPeriodRangeInput() interface{}
```

- *Type:* interface{}

---

##### `ComputationRuleInput`<sup>Optional</sup> <a name="ComputationRuleInput" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.computationRuleInput"></a>

```go
func ComputationRuleInput() *string
```

- *Type:* *string

---

##### `CustomLineItemChargeDetailsInput`<sup>Optional</sup> <a name="CustomLineItemChargeDetailsInput" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.customLineItemChargeDetailsInput"></a>

```go
func CustomLineItemChargeDetailsInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PresentationDetailsInput`<sup>Optional</sup> <a name="PresentationDetailsInput" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.presentationDetailsInput"></a>

```go
func PresentationDetailsInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `BillingGroupArn`<sup>Required</sup> <a name="BillingGroupArn" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.billingGroupArn"></a>

```go
func BillingGroupArn() *string
```

- *Type:* *string

---

##### `ComputationRule`<sup>Required</sup> <a name="ComputationRule" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.computationRule"></a>

```go
func ComputationRule() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### BillingconductorCustomLineItemBillingPeriodRange <a name="BillingconductorCustomLineItemBillingPeriodRange" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRange.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/billingconductorcustomlineitem"

&billingconductorcustomlineitem.BillingconductorCustomLineItemBillingPeriodRange {
	ExclusiveEndBillingPeriod: *string,
	InclusiveStartBillingPeriod: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRange.property.exclusiveEndBillingPeriod">ExclusiveEndBillingPeriod</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_custom_line_item#exclusive_end_billing_period BillingconductorCustomLineItem#exclusive_end_billing_period}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRange.property.inclusiveStartBillingPeriod">InclusiveStartBillingPeriod</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_custom_line_item#inclusive_start_billing_period BillingconductorCustomLineItem#inclusive_start_billing_period}. |

---

##### `ExclusiveEndBillingPeriod`<sup>Optional</sup> <a name="ExclusiveEndBillingPeriod" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRange.property.exclusiveEndBillingPeriod"></a>

```go
ExclusiveEndBillingPeriod *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_custom_line_item#exclusive_end_billing_period BillingconductorCustomLineItem#exclusive_end_billing_period}.

---

##### `InclusiveStartBillingPeriod`<sup>Optional</sup> <a name="InclusiveStartBillingPeriod" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRange.property.inclusiveStartBillingPeriod"></a>

```go
InclusiveStartBillingPeriod *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_custom_line_item#inclusive_start_billing_period BillingconductorCustomLineItem#inclusive_start_billing_period}.

---

### BillingconductorCustomLineItemConfig <a name="BillingconductorCustomLineItemConfig" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/billingconductorcustomlineitem"

&billingconductorcustomlineitem.BillingconductorCustomLineItemConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	BillingGroupArn: *string,
	Name: *string,
	AccountId: *string,
	BillingPeriodRange: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRange,
	ComputationRule: *string,
	CustomLineItemChargeDetails: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetails,
	Description: *string,
	PresentationDetails: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetails,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.billingGroupArn">BillingGroupArn</a></code> | <code>*string</code> | Billing Group ARN. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_custom_line_item#name BillingconductorCustomLineItem#name}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.accountId">AccountId</a></code> | <code>*string</code> | The account which this custom line item will be charged to. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.billingPeriodRange">BillingPeriodRange</a></code> | <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRange">BillingconductorCustomLineItemBillingPeriodRange</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_custom_line_item#billing_period_range BillingconductorCustomLineItem#billing_period_range}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.computationRule">ComputationRule</a></code> | <code>*string</code> | The display settings of the Custom Line Item. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.customLineItemChargeDetails">CustomLineItemChargeDetails</a></code> | <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetails">BillingconductorCustomLineItemCustomLineItemChargeDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_custom_line_item#custom_line_item_charge_details BillingconductorCustomLineItem#custom_line_item_charge_details}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_custom_line_item#description BillingconductorCustomLineItem#description}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.presentationDetails">PresentationDetails</a></code> | <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetails">BillingconductorCustomLineItemPresentationDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_custom_line_item#presentation_details BillingconductorCustomLineItem#presentation_details}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.tags">Tags</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_custom_line_item#tags BillingconductorCustomLineItem#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BillingGroupArn`<sup>Required</sup> <a name="BillingGroupArn" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.billingGroupArn"></a>

```go
BillingGroupArn *string
```

- *Type:* *string

Billing Group ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_custom_line_item#billing_group_arn BillingconductorCustomLineItem#billing_group_arn}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_custom_line_item#name BillingconductorCustomLineItem#name}.

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

The account which this custom line item will be charged to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_custom_line_item#account_id BillingconductorCustomLineItem#account_id}

---

##### `BillingPeriodRange`<sup>Optional</sup> <a name="BillingPeriodRange" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.billingPeriodRange"></a>

```go
BillingPeriodRange BillingconductorCustomLineItemBillingPeriodRange
```

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRange">BillingconductorCustomLineItemBillingPeriodRange</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_custom_line_item#billing_period_range BillingconductorCustomLineItem#billing_period_range}.

---

##### `ComputationRule`<sup>Optional</sup> <a name="ComputationRule" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.computationRule"></a>

```go
ComputationRule *string
```

- *Type:* *string

The display settings of the Custom Line Item.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_custom_line_item#computation_rule BillingconductorCustomLineItem#computation_rule}

---

##### `CustomLineItemChargeDetails`<sup>Optional</sup> <a name="CustomLineItemChargeDetails" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.customLineItemChargeDetails"></a>

```go
CustomLineItemChargeDetails BillingconductorCustomLineItemCustomLineItemChargeDetails
```

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetails">BillingconductorCustomLineItemCustomLineItemChargeDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_custom_line_item#custom_line_item_charge_details BillingconductorCustomLineItem#custom_line_item_charge_details}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_custom_line_item#description BillingconductorCustomLineItem#description}.

---

##### `PresentationDetails`<sup>Optional</sup> <a name="PresentationDetails" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.presentationDetails"></a>

```go
PresentationDetails BillingconductorCustomLineItemPresentationDetails
```

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetails">BillingconductorCustomLineItemPresentationDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_custom_line_item#presentation_details BillingconductorCustomLineItem#presentation_details}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_custom_line_item#tags BillingconductorCustomLineItem#tags}.

---

### BillingconductorCustomLineItemCustomLineItemChargeDetails <a name="BillingconductorCustomLineItemCustomLineItemChargeDetails" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetails.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/billingconductorcustomlineitem"

&billingconductorcustomlineitem.BillingconductorCustomLineItemCustomLineItemChargeDetails {
	Flat: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlat,
	LineItemFilters: interface{},
	Percentage: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentage,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetails.property.flat">Flat</a></code> | <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlat">BillingconductorCustomLineItemCustomLineItemChargeDetailsFlat</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_custom_line_item#flat BillingconductorCustomLineItem#flat}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetails.property.lineItemFilters">LineItemFilters</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_custom_line_item#line_item_filters BillingconductorCustomLineItem#line_item_filters}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetails.property.percentage">Percentage</a></code> | <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentage">BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentage</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_custom_line_item#percentage BillingconductorCustomLineItem#percentage}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetails.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_custom_line_item#type BillingconductorCustomLineItem#type}. |

---

##### `Flat`<sup>Optional</sup> <a name="Flat" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetails.property.flat"></a>

```go
Flat BillingconductorCustomLineItemCustomLineItemChargeDetailsFlat
```

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlat">BillingconductorCustomLineItemCustomLineItemChargeDetailsFlat</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_custom_line_item#flat BillingconductorCustomLineItem#flat}.

---

##### `LineItemFilters`<sup>Optional</sup> <a name="LineItemFilters" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetails.property.lineItemFilters"></a>

```go
LineItemFilters interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_custom_line_item#line_item_filters BillingconductorCustomLineItem#line_item_filters}.

---

##### `Percentage`<sup>Optional</sup> <a name="Percentage" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetails.property.percentage"></a>

```go
Percentage BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentage
```

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentage">BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentage</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_custom_line_item#percentage BillingconductorCustomLineItem#percentage}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetails.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_custom_line_item#type BillingconductorCustomLineItem#type}.

---

### BillingconductorCustomLineItemCustomLineItemChargeDetailsFlat <a name="BillingconductorCustomLineItemCustomLineItemChargeDetailsFlat" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlat.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/billingconductorcustomlineitem"

&billingconductorcustomlineitem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlat {
	ChargeValue: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlat.property.chargeValue">ChargeValue</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_custom_line_item#charge_value BillingconductorCustomLineItem#charge_value}. |

---

##### `ChargeValue`<sup>Optional</sup> <a name="ChargeValue" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlat.property.chargeValue"></a>

```go
ChargeValue *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_custom_line_item#charge_value BillingconductorCustomLineItem#charge_value}.

---

### BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters <a name="BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/billingconductorcustomlineitem"

&billingconductorcustomlineitem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters {
	Attribute: *string,
	AttributeValues: *[]*string,
	MatchOption: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters.property.attribute">Attribute</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_custom_line_item#attribute BillingconductorCustomLineItem#attribute}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters.property.attributeValues">AttributeValues</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_custom_line_item#attribute_values BillingconductorCustomLineItem#attribute_values}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters.property.matchOption">MatchOption</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_custom_line_item#match_option BillingconductorCustomLineItem#match_option}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_custom_line_item#values BillingconductorCustomLineItem#values}. |

---

##### `Attribute`<sup>Optional</sup> <a name="Attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters.property.attribute"></a>

```go
Attribute *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_custom_line_item#attribute BillingconductorCustomLineItem#attribute}.

---

##### `AttributeValues`<sup>Optional</sup> <a name="AttributeValues" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters.property.attributeValues"></a>

```go
AttributeValues *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_custom_line_item#attribute_values BillingconductorCustomLineItem#attribute_values}.

---

##### `MatchOption`<sup>Optional</sup> <a name="MatchOption" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters.property.matchOption"></a>

```go
MatchOption *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_custom_line_item#match_option BillingconductorCustomLineItem#match_option}.

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_custom_line_item#values BillingconductorCustomLineItem#values}.

---

### BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentage <a name="BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentage" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentage.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/billingconductorcustomlineitem"

&billingconductorcustomlineitem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentage {
	ChildAssociatedResources: *[]*string,
	PercentageValue: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentage.property.childAssociatedResources">ChildAssociatedResources</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_custom_line_item#child_associated_resources BillingconductorCustomLineItem#child_associated_resources}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentage.property.percentageValue">PercentageValue</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_custom_line_item#percentage_value BillingconductorCustomLineItem#percentage_value}. |

---

##### `ChildAssociatedResources`<sup>Optional</sup> <a name="ChildAssociatedResources" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentage.property.childAssociatedResources"></a>

```go
ChildAssociatedResources *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_custom_line_item#child_associated_resources BillingconductorCustomLineItem#child_associated_resources}.

---

##### `PercentageValue`<sup>Optional</sup> <a name="PercentageValue" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentage.property.percentageValue"></a>

```go
PercentageValue *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_custom_line_item#percentage_value BillingconductorCustomLineItem#percentage_value}.

---

### BillingconductorCustomLineItemPresentationDetails <a name="BillingconductorCustomLineItemPresentationDetails" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetails.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/billingconductorcustomlineitem"

&billingconductorcustomlineitem.BillingconductorCustomLineItemPresentationDetails {
	Service: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetails.property.service">Service</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_custom_line_item#service BillingconductorCustomLineItem#service}. |

---

##### `Service`<sup>Optional</sup> <a name="Service" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetails.property.service"></a>

```go
Service *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_custom_line_item#service BillingconductorCustomLineItem#service}.

---

### BillingconductorCustomLineItemTags <a name="BillingconductorCustomLineItemTags" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/billingconductorcustomlineitem"

&billingconductorcustomlineitem.BillingconductorCustomLineItemTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_custom_line_item#key BillingconductorCustomLineItem#key}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_custom_line_item#value BillingconductorCustomLineItem#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_custom_line_item#key BillingconductorCustomLineItem#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_custom_line_item#value BillingconductorCustomLineItem#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### BillingconductorCustomLineItemBillingPeriodRangeOutputReference <a name="BillingconductorCustomLineItemBillingPeriodRangeOutputReference" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/billingconductorcustomlineitem"

billingconductorcustomlineitem.NewBillingconductorCustomLineItemBillingPeriodRangeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BillingconductorCustomLineItemBillingPeriodRangeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.resetExclusiveEndBillingPeriod">ResetExclusiveEndBillingPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.resetInclusiveStartBillingPeriod">ResetInclusiveStartBillingPeriod</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExclusiveEndBillingPeriod` <a name="ResetExclusiveEndBillingPeriod" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.resetExclusiveEndBillingPeriod"></a>

```go
func ResetExclusiveEndBillingPeriod()
```

##### `ResetInclusiveStartBillingPeriod` <a name="ResetInclusiveStartBillingPeriod" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.resetInclusiveStartBillingPeriod"></a>

```go
func ResetInclusiveStartBillingPeriod()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.property.exclusiveEndBillingPeriodInput">ExclusiveEndBillingPeriodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.property.inclusiveStartBillingPeriodInput">InclusiveStartBillingPeriodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.property.exclusiveEndBillingPeriod">ExclusiveEndBillingPeriod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.property.inclusiveStartBillingPeriod">InclusiveStartBillingPeriod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExclusiveEndBillingPeriodInput`<sup>Optional</sup> <a name="ExclusiveEndBillingPeriodInput" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.property.exclusiveEndBillingPeriodInput"></a>

```go
func ExclusiveEndBillingPeriodInput() *string
```

- *Type:* *string

---

##### `InclusiveStartBillingPeriodInput`<sup>Optional</sup> <a name="InclusiveStartBillingPeriodInput" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.property.inclusiveStartBillingPeriodInput"></a>

```go
func InclusiveStartBillingPeriodInput() *string
```

- *Type:* *string

---

##### `ExclusiveEndBillingPeriod`<sup>Required</sup> <a name="ExclusiveEndBillingPeriod" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.property.exclusiveEndBillingPeriod"></a>

```go
func ExclusiveEndBillingPeriod() *string
```

- *Type:* *string

---

##### `InclusiveStartBillingPeriod`<sup>Required</sup> <a name="InclusiveStartBillingPeriod" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.property.inclusiveStartBillingPeriod"></a>

```go
func InclusiveStartBillingPeriod() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference <a name="BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/billingconductorcustomlineitem"

billingconductorcustomlineitem.NewBillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.resetChargeValue">ResetChargeValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetChargeValue` <a name="ResetChargeValue" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.resetChargeValue"></a>

```go
func ResetChargeValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.property.chargeValueInput">ChargeValueInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.property.chargeValue">ChargeValue</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ChargeValueInput`<sup>Optional</sup> <a name="ChargeValueInput" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.property.chargeValueInput"></a>

```go
func ChargeValueInput() *f64
```

- *Type:* *f64

---

##### `ChargeValue`<sup>Required</sup> <a name="ChargeValue" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.property.chargeValue"></a>

```go
func ChargeValue() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList <a name="BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/billingconductorcustomlineitem"

billingconductorcustomlineitem.NewBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.get"></a>

```go
func Get(index *f64) BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference <a name="BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/billingconductorcustomlineitem"

billingconductorcustomlineitem.NewBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.resetAttribute">ResetAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.resetAttributeValues">ResetAttributeValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.resetMatchOption">ResetMatchOption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAttribute` <a name="ResetAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.resetAttribute"></a>

```go
func ResetAttribute()
```

##### `ResetAttributeValues` <a name="ResetAttributeValues" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.resetAttributeValues"></a>

```go
func ResetAttributeValues()
```

##### `ResetMatchOption` <a name="ResetMatchOption" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.resetMatchOption"></a>

```go
func ResetMatchOption()
```

##### `ResetValues` <a name="ResetValues" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.resetValues"></a>

```go
func ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.property.attributeInput">AttributeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.property.attributeValuesInput">AttributeValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.property.matchOptionInput">MatchOptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.property.attribute">Attribute</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.property.attributeValues">AttributeValues</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.property.matchOption">MatchOption</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AttributeInput`<sup>Optional</sup> <a name="AttributeInput" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.property.attributeInput"></a>

```go
func AttributeInput() *string
```

- *Type:* *string

---

##### `AttributeValuesInput`<sup>Optional</sup> <a name="AttributeValuesInput" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.property.attributeValuesInput"></a>

```go
func AttributeValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `MatchOptionInput`<sup>Optional</sup> <a name="MatchOptionInput" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.property.matchOptionInput"></a>

```go
func MatchOptionInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Attribute`<sup>Required</sup> <a name="Attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.property.attribute"></a>

```go
func Attribute() *string
```

- *Type:* *string

---

##### `AttributeValues`<sup>Required</sup> <a name="AttributeValues" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.property.attributeValues"></a>

```go
func AttributeValues() *[]*string
```

- *Type:* *[]*string

---

##### `MatchOption`<sup>Required</sup> <a name="MatchOption" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.property.matchOption"></a>

```go
func MatchOption() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference <a name="BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/billingconductorcustomlineitem"

billingconductorcustomlineitem.NewBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.putFlat">PutFlat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.putLineItemFilters">PutLineItemFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.putPercentage">PutPercentage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.resetFlat">ResetFlat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.resetLineItemFilters">ResetLineItemFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.resetPercentage">ResetPercentage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFlat` <a name="PutFlat" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.putFlat"></a>

```go
func PutFlat(value BillingconductorCustomLineItemCustomLineItemChargeDetailsFlat)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.putFlat.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlat">BillingconductorCustomLineItemCustomLineItemChargeDetailsFlat</a>

---

##### `PutLineItemFilters` <a name="PutLineItemFilters" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.putLineItemFilters"></a>

```go
func PutLineItemFilters(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.putLineItemFilters.parameter.value"></a>

- *Type:* interface{}

---

##### `PutPercentage` <a name="PutPercentage" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.putPercentage"></a>

```go
func PutPercentage(value BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentage)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.putPercentage.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentage">BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentage</a>

---

##### `ResetFlat` <a name="ResetFlat" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.resetFlat"></a>

```go
func ResetFlat()
```

##### `ResetLineItemFilters` <a name="ResetLineItemFilters" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.resetLineItemFilters"></a>

```go
func ResetLineItemFilters()
```

##### `ResetPercentage` <a name="ResetPercentage" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.resetPercentage"></a>

```go
func ResetPercentage()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.property.flat">Flat</a></code> | <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference">BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.property.lineItemFilters">LineItemFilters</a></code> | <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList">BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.property.percentage">Percentage</a></code> | <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference">BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.property.flatInput">FlatInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.property.lineItemFiltersInput">LineItemFiltersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.property.percentageInput">PercentageInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Flat`<sup>Required</sup> <a name="Flat" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.property.flat"></a>

```go
func Flat() BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference">BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference</a>

---

##### `LineItemFilters`<sup>Required</sup> <a name="LineItemFilters" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.property.lineItemFilters"></a>

```go
func LineItemFilters() BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList
```

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList">BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList</a>

---

##### `Percentage`<sup>Required</sup> <a name="Percentage" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.property.percentage"></a>

```go
func Percentage() BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference">BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference</a>

---

##### `FlatInput`<sup>Optional</sup> <a name="FlatInput" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.property.flatInput"></a>

```go
func FlatInput() interface{}
```

- *Type:* interface{}

---

##### `LineItemFiltersInput`<sup>Optional</sup> <a name="LineItemFiltersInput" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.property.lineItemFiltersInput"></a>

```go
func LineItemFiltersInput() interface{}
```

- *Type:* interface{}

---

##### `PercentageInput`<sup>Optional</sup> <a name="PercentageInput" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.property.percentageInput"></a>

```go
func PercentageInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference <a name="BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/billingconductorcustomlineitem"

billingconductorcustomlineitem.NewBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.resetChildAssociatedResources">ResetChildAssociatedResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.resetPercentageValue">ResetPercentageValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetChildAssociatedResources` <a name="ResetChildAssociatedResources" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.resetChildAssociatedResources"></a>

```go
func ResetChildAssociatedResources()
```

##### `ResetPercentageValue` <a name="ResetPercentageValue" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.resetPercentageValue"></a>

```go
func ResetPercentageValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.property.childAssociatedResourcesInput">ChildAssociatedResourcesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.property.percentageValueInput">PercentageValueInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.property.childAssociatedResources">ChildAssociatedResources</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.property.percentageValue">PercentageValue</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ChildAssociatedResourcesInput`<sup>Optional</sup> <a name="ChildAssociatedResourcesInput" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.property.childAssociatedResourcesInput"></a>

```go
func ChildAssociatedResourcesInput() *[]*string
```

- *Type:* *[]*string

---

##### `PercentageValueInput`<sup>Optional</sup> <a name="PercentageValueInput" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.property.percentageValueInput"></a>

```go
func PercentageValueInput() *f64
```

- *Type:* *f64

---

##### `ChildAssociatedResources`<sup>Required</sup> <a name="ChildAssociatedResources" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.property.childAssociatedResources"></a>

```go
func ChildAssociatedResources() *[]*string
```

- *Type:* *[]*string

---

##### `PercentageValue`<sup>Required</sup> <a name="PercentageValue" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.property.percentageValue"></a>

```go
func PercentageValue() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BillingconductorCustomLineItemPresentationDetailsOutputReference <a name="BillingconductorCustomLineItemPresentationDetailsOutputReference" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/billingconductorcustomlineitem"

billingconductorcustomlineitem.NewBillingconductorCustomLineItemPresentationDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BillingconductorCustomLineItemPresentationDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.resetService">ResetService</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetService` <a name="ResetService" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.resetService"></a>

```go
func ResetService()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.property.serviceInput">ServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.property.service">Service</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.property.serviceInput"></a>

```go
func ServiceInput() *string
```

- *Type:* *string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BillingconductorCustomLineItemTagsList <a name="BillingconductorCustomLineItemTagsList" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/billingconductorcustomlineitem"

billingconductorcustomlineitem.NewBillingconductorCustomLineItemTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BillingconductorCustomLineItemTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsList.get"></a>

```go
func Get(index *f64) BillingconductorCustomLineItemTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BillingconductorCustomLineItemTagsOutputReference <a name="BillingconductorCustomLineItemTagsOutputReference" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/billingconductorcustomlineitem"

billingconductorcustomlineitem.NewBillingconductorCustomLineItemTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BillingconductorCustomLineItemTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



