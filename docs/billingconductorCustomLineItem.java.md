# `billingconductorCustomLineItem` Submodule <a name="`billingconductorCustomLineItem` Submodule" id="@cdktn/provider-awscc.billingconductorCustomLineItem"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BillingconductorCustomLineItem <a name="BillingconductorCustomLineItem" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_custom_line_item awscc_billingconductor_custom_line_item}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.Initializer"></a>

```java
import io.cdktn.providers.awscc.billingconductor_custom_line_item.BillingconductorCustomLineItem;

BillingconductorCustomLineItem.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .billingGroupArn(java.lang.String)
    .name(java.lang.String)
//  .accountId(java.lang.String)
//  .billingPeriodRange(BillingconductorCustomLineItemBillingPeriodRange)
//  .computationRule(java.lang.String)
//  .customLineItemChargeDetails(BillingconductorCustomLineItemCustomLineItemChargeDetails)
//  .description(java.lang.String)
//  .presentationDetails(BillingconductorCustomLineItemPresentationDetails)
//  .tags(IResolvable|java.util.List<BillingconductorCustomLineItemTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.Initializer.parameter.billingGroupArn">billingGroupArn</a></code> | <code>java.lang.String</code> | Billing Group ARN. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_custom_line_item#name BillingconductorCustomLineItem#name}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | The account which this custom line item will be charged to. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.Initializer.parameter.billingPeriodRange">billingPeriodRange</a></code> | <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRange">BillingconductorCustomLineItemBillingPeriodRange</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_custom_line_item#billing_period_range BillingconductorCustomLineItem#billing_period_range}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.Initializer.parameter.computationRule">computationRule</a></code> | <code>java.lang.String</code> | The display settings of the Custom Line Item. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.Initializer.parameter.customLineItemChargeDetails">customLineItemChargeDetails</a></code> | <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetails">BillingconductorCustomLineItemCustomLineItemChargeDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_custom_line_item#custom_line_item_charge_details BillingconductorCustomLineItem#custom_line_item_charge_details}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_custom_line_item#description BillingconductorCustomLineItem#description}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.Initializer.parameter.presentationDetails">presentationDetails</a></code> | <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetails">BillingconductorCustomLineItemPresentationDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_custom_line_item#presentation_details BillingconductorCustomLineItem#presentation_details}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTags">BillingconductorCustomLineItemTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_custom_line_item#tags BillingconductorCustomLineItem#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `billingGroupArn`<sup>Required</sup> <a name="billingGroupArn" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.Initializer.parameter.billingGroupArn"></a>

- *Type:* java.lang.String

Billing Group ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_custom_line_item#billing_group_arn BillingconductorCustomLineItem#billing_group_arn}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_custom_line_item#name BillingconductorCustomLineItem#name}.

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

The account which this custom line item will be charged to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_custom_line_item#account_id BillingconductorCustomLineItem#account_id}

---

##### `billingPeriodRange`<sup>Optional</sup> <a name="billingPeriodRange" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.Initializer.parameter.billingPeriodRange"></a>

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRange">BillingconductorCustomLineItemBillingPeriodRange</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_custom_line_item#billing_period_range BillingconductorCustomLineItem#billing_period_range}.

---

##### `computationRule`<sup>Optional</sup> <a name="computationRule" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.Initializer.parameter.computationRule"></a>

- *Type:* java.lang.String

The display settings of the Custom Line Item.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_custom_line_item#computation_rule BillingconductorCustomLineItem#computation_rule}

---

##### `customLineItemChargeDetails`<sup>Optional</sup> <a name="customLineItemChargeDetails" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.Initializer.parameter.customLineItemChargeDetails"></a>

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetails">BillingconductorCustomLineItemCustomLineItemChargeDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_custom_line_item#custom_line_item_charge_details BillingconductorCustomLineItem#custom_line_item_charge_details}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_custom_line_item#description BillingconductorCustomLineItem#description}.

---

##### `presentationDetails`<sup>Optional</sup> <a name="presentationDetails" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.Initializer.parameter.presentationDetails"></a>

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetails">BillingconductorCustomLineItemPresentationDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_custom_line_item#presentation_details BillingconductorCustomLineItem#presentation_details}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTags">BillingconductorCustomLineItemTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_custom_line_item#tags BillingconductorCustomLineItem#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.putBillingPeriodRange">putBillingPeriodRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.putCustomLineItemChargeDetails">putCustomLineItemChargeDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.putPresentationDetails">putPresentationDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.resetBillingPeriodRange">resetBillingPeriodRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.resetComputationRule">resetComputationRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.resetCustomLineItemChargeDetails">resetCustomLineItemChargeDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.resetPresentationDetails">resetPresentationDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBillingPeriodRange` <a name="putBillingPeriodRange" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.putBillingPeriodRange"></a>

```java
public void putBillingPeriodRange(BillingconductorCustomLineItemBillingPeriodRange value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.putBillingPeriodRange.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRange">BillingconductorCustomLineItemBillingPeriodRange</a>

---

##### `putCustomLineItemChargeDetails` <a name="putCustomLineItemChargeDetails" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.putCustomLineItemChargeDetails"></a>

```java
public void putCustomLineItemChargeDetails(BillingconductorCustomLineItemCustomLineItemChargeDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.putCustomLineItemChargeDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetails">BillingconductorCustomLineItemCustomLineItemChargeDetails</a>

---

##### `putPresentationDetails` <a name="putPresentationDetails" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.putPresentationDetails"></a>

```java
public void putPresentationDetails(BillingconductorCustomLineItemPresentationDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.putPresentationDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetails">BillingconductorCustomLineItemPresentationDetails</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<BillingconductorCustomLineItemTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTags">BillingconductorCustomLineItemTags</a>>

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.resetAccountId"></a>

```java
public void resetAccountId()
```

##### `resetBillingPeriodRange` <a name="resetBillingPeriodRange" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.resetBillingPeriodRange"></a>

```java
public void resetBillingPeriodRange()
```

##### `resetComputationRule` <a name="resetComputationRule" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.resetComputationRule"></a>

```java
public void resetComputationRule()
```

##### `resetCustomLineItemChargeDetails` <a name="resetCustomLineItemChargeDetails" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.resetCustomLineItemChargeDetails"></a>

```java
public void resetCustomLineItemChargeDetails()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetPresentationDetails` <a name="resetPresentationDetails" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.resetPresentationDetails"></a>

```java
public void resetPresentationDetails()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a BillingconductorCustomLineItem resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.isConstruct"></a>

```java
import io.cdktn.providers.awscc.billingconductor_custom_line_item.BillingconductorCustomLineItem;

BillingconductorCustomLineItem.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.billingconductor_custom_line_item.BillingconductorCustomLineItem;

BillingconductorCustomLineItem.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.billingconductor_custom_line_item.BillingconductorCustomLineItem;

BillingconductorCustomLineItem.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.billingconductor_custom_line_item.BillingconductorCustomLineItem;

BillingconductorCustomLineItem.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),BillingconductorCustomLineItem.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a BillingconductorCustomLineItem resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the BillingconductorCustomLineItem to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing BillingconductorCustomLineItem that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_custom_line_item#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the BillingconductorCustomLineItem to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.associationSize">associationSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.billingPeriodRange">billingPeriodRange</a></code> | <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference">BillingconductorCustomLineItemBillingPeriodRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.creationTime">creationTime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.currencyCode">currencyCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.customLineItemChargeDetails">customLineItemChargeDetails</a></code> | <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference">BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.lastModifiedTime">lastModifiedTime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.presentationDetails">presentationDetails</a></code> | <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference">BillingconductorCustomLineItemPresentationDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.productCode">productCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsList">BillingconductorCustomLineItemTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.billingGroupArnInput">billingGroupArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.billingPeriodRangeInput">billingPeriodRangeInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRange">BillingconductorCustomLineItemBillingPeriodRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.computationRuleInput">computationRuleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.customLineItemChargeDetailsInput">customLineItemChargeDetailsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetails">BillingconductorCustomLineItemCustomLineItemChargeDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.presentationDetailsInput">presentationDetailsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetails">BillingconductorCustomLineItemPresentationDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTags">BillingconductorCustomLineItemTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.billingGroupArn">billingGroupArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.computationRule">computationRule</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `associationSize`<sup>Required</sup> <a name="associationSize" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.associationSize"></a>

```java
public java.lang.Number getAssociationSize();
```

- *Type:* java.lang.Number

---

##### `billingPeriodRange`<sup>Required</sup> <a name="billingPeriodRange" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.billingPeriodRange"></a>

```java
public BillingconductorCustomLineItemBillingPeriodRangeOutputReference getBillingPeriodRange();
```

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference">BillingconductorCustomLineItemBillingPeriodRangeOutputReference</a>

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.creationTime"></a>

```java
public java.lang.Number getCreationTime();
```

- *Type:* java.lang.Number

---

##### `currencyCode`<sup>Required</sup> <a name="currencyCode" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.currencyCode"></a>

```java
public java.lang.String getCurrencyCode();
```

- *Type:* java.lang.String

---

##### `customLineItemChargeDetails`<sup>Required</sup> <a name="customLineItemChargeDetails" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.customLineItemChargeDetails"></a>

```java
public BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference getCustomLineItemChargeDetails();
```

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference">BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lastModifiedTime`<sup>Required</sup> <a name="lastModifiedTime" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.lastModifiedTime"></a>

```java
public java.lang.Number getLastModifiedTime();
```

- *Type:* java.lang.Number

---

##### `presentationDetails`<sup>Required</sup> <a name="presentationDetails" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.presentationDetails"></a>

```java
public BillingconductorCustomLineItemPresentationDetailsOutputReference getPresentationDetails();
```

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference">BillingconductorCustomLineItemPresentationDetailsOutputReference</a>

---

##### `productCode`<sup>Required</sup> <a name="productCode" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.productCode"></a>

```java
public java.lang.String getProductCode();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.tags"></a>

```java
public BillingconductorCustomLineItemTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsList">BillingconductorCustomLineItemTagsList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `billingGroupArnInput`<sup>Optional</sup> <a name="billingGroupArnInput" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.billingGroupArnInput"></a>

```java
public java.lang.String getBillingGroupArnInput();
```

- *Type:* java.lang.String

---

##### `billingPeriodRangeInput`<sup>Optional</sup> <a name="billingPeriodRangeInput" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.billingPeriodRangeInput"></a>

```java
public IResolvable|BillingconductorCustomLineItemBillingPeriodRange getBillingPeriodRangeInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRange">BillingconductorCustomLineItemBillingPeriodRange</a>

---

##### `computationRuleInput`<sup>Optional</sup> <a name="computationRuleInput" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.computationRuleInput"></a>

```java
public java.lang.String getComputationRuleInput();
```

- *Type:* java.lang.String

---

##### `customLineItemChargeDetailsInput`<sup>Optional</sup> <a name="customLineItemChargeDetailsInput" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.customLineItemChargeDetailsInput"></a>

```java
public IResolvable|BillingconductorCustomLineItemCustomLineItemChargeDetails getCustomLineItemChargeDetailsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetails">BillingconductorCustomLineItemCustomLineItemChargeDetails</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `presentationDetailsInput`<sup>Optional</sup> <a name="presentationDetailsInput" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.presentationDetailsInput"></a>

```java
public IResolvable|BillingconductorCustomLineItemPresentationDetails getPresentationDetailsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetails">BillingconductorCustomLineItemPresentationDetails</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.tagsInput"></a>

```java
public IResolvable|java.util.List<BillingconductorCustomLineItemTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTags">BillingconductorCustomLineItemTags</a>>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `billingGroupArn`<sup>Required</sup> <a name="billingGroupArn" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.billingGroupArn"></a>

```java
public java.lang.String getBillingGroupArn();
```

- *Type:* java.lang.String

---

##### `computationRule`<sup>Required</sup> <a name="computationRule" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.computationRule"></a>

```java
public java.lang.String getComputationRule();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### BillingconductorCustomLineItemBillingPeriodRange <a name="BillingconductorCustomLineItemBillingPeriodRange" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRange.Initializer"></a>

```java
import io.cdktn.providers.awscc.billingconductor_custom_line_item.BillingconductorCustomLineItemBillingPeriodRange;

BillingconductorCustomLineItemBillingPeriodRange.builder()
//  .exclusiveEndBillingPeriod(java.lang.String)
//  .inclusiveStartBillingPeriod(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRange.property.exclusiveEndBillingPeriod">exclusiveEndBillingPeriod</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_custom_line_item#exclusive_end_billing_period BillingconductorCustomLineItem#exclusive_end_billing_period}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRange.property.inclusiveStartBillingPeriod">inclusiveStartBillingPeriod</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_custom_line_item#inclusive_start_billing_period BillingconductorCustomLineItem#inclusive_start_billing_period}. |

---

##### `exclusiveEndBillingPeriod`<sup>Optional</sup> <a name="exclusiveEndBillingPeriod" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRange.property.exclusiveEndBillingPeriod"></a>

```java
public java.lang.String getExclusiveEndBillingPeriod();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_custom_line_item#exclusive_end_billing_period BillingconductorCustomLineItem#exclusive_end_billing_period}.

---

##### `inclusiveStartBillingPeriod`<sup>Optional</sup> <a name="inclusiveStartBillingPeriod" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRange.property.inclusiveStartBillingPeriod"></a>

```java
public java.lang.String getInclusiveStartBillingPeriod();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_custom_line_item#inclusive_start_billing_period BillingconductorCustomLineItem#inclusive_start_billing_period}.

---

### BillingconductorCustomLineItemConfig <a name="BillingconductorCustomLineItemConfig" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.billingconductor_custom_line_item.BillingconductorCustomLineItemConfig;

BillingconductorCustomLineItemConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .billingGroupArn(java.lang.String)
    .name(java.lang.String)
//  .accountId(java.lang.String)
//  .billingPeriodRange(BillingconductorCustomLineItemBillingPeriodRange)
//  .computationRule(java.lang.String)
//  .customLineItemChargeDetails(BillingconductorCustomLineItemCustomLineItemChargeDetails)
//  .description(java.lang.String)
//  .presentationDetails(BillingconductorCustomLineItemPresentationDetails)
//  .tags(IResolvable|java.util.List<BillingconductorCustomLineItemTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.billingGroupArn">billingGroupArn</a></code> | <code>java.lang.String</code> | Billing Group ARN. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_custom_line_item#name BillingconductorCustomLineItem#name}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | The account which this custom line item will be charged to. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.billingPeriodRange">billingPeriodRange</a></code> | <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRange">BillingconductorCustomLineItemBillingPeriodRange</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_custom_line_item#billing_period_range BillingconductorCustomLineItem#billing_period_range}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.computationRule">computationRule</a></code> | <code>java.lang.String</code> | The display settings of the Custom Line Item. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.customLineItemChargeDetails">customLineItemChargeDetails</a></code> | <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetails">BillingconductorCustomLineItemCustomLineItemChargeDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_custom_line_item#custom_line_item_charge_details BillingconductorCustomLineItem#custom_line_item_charge_details}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_custom_line_item#description BillingconductorCustomLineItem#description}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.presentationDetails">presentationDetails</a></code> | <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetails">BillingconductorCustomLineItemPresentationDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_custom_line_item#presentation_details BillingconductorCustomLineItem#presentation_details}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTags">BillingconductorCustomLineItemTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_custom_line_item#tags BillingconductorCustomLineItem#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `billingGroupArn`<sup>Required</sup> <a name="billingGroupArn" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.billingGroupArn"></a>

```java
public java.lang.String getBillingGroupArn();
```

- *Type:* java.lang.String

Billing Group ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_custom_line_item#billing_group_arn BillingconductorCustomLineItem#billing_group_arn}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_custom_line_item#name BillingconductorCustomLineItem#name}.

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

The account which this custom line item will be charged to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_custom_line_item#account_id BillingconductorCustomLineItem#account_id}

---

##### `billingPeriodRange`<sup>Optional</sup> <a name="billingPeriodRange" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.billingPeriodRange"></a>

```java
public BillingconductorCustomLineItemBillingPeriodRange getBillingPeriodRange();
```

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRange">BillingconductorCustomLineItemBillingPeriodRange</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_custom_line_item#billing_period_range BillingconductorCustomLineItem#billing_period_range}.

---

##### `computationRule`<sup>Optional</sup> <a name="computationRule" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.computationRule"></a>

```java
public java.lang.String getComputationRule();
```

- *Type:* java.lang.String

The display settings of the Custom Line Item.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_custom_line_item#computation_rule BillingconductorCustomLineItem#computation_rule}

---

##### `customLineItemChargeDetails`<sup>Optional</sup> <a name="customLineItemChargeDetails" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.customLineItemChargeDetails"></a>

```java
public BillingconductorCustomLineItemCustomLineItemChargeDetails getCustomLineItemChargeDetails();
```

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetails">BillingconductorCustomLineItemCustomLineItemChargeDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_custom_line_item#custom_line_item_charge_details BillingconductorCustomLineItem#custom_line_item_charge_details}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_custom_line_item#description BillingconductorCustomLineItem#description}.

---

##### `presentationDetails`<sup>Optional</sup> <a name="presentationDetails" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.presentationDetails"></a>

```java
public BillingconductorCustomLineItemPresentationDetails getPresentationDetails();
```

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetails">BillingconductorCustomLineItemPresentationDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_custom_line_item#presentation_details BillingconductorCustomLineItem#presentation_details}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.tags"></a>

```java
public IResolvable|java.util.List<BillingconductorCustomLineItemTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTags">BillingconductorCustomLineItemTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_custom_line_item#tags BillingconductorCustomLineItem#tags}.

---

### BillingconductorCustomLineItemCustomLineItemChargeDetails <a name="BillingconductorCustomLineItemCustomLineItemChargeDetails" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetails.Initializer"></a>

```java
import io.cdktn.providers.awscc.billingconductor_custom_line_item.BillingconductorCustomLineItemCustomLineItemChargeDetails;

BillingconductorCustomLineItemCustomLineItemChargeDetails.builder()
//  .flat(BillingconductorCustomLineItemCustomLineItemChargeDetailsFlat)
//  .lineItemFilters(IResolvable|java.util.List<BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters>)
//  .percentage(BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentage)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetails.property.flat">flat</a></code> | <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlat">BillingconductorCustomLineItemCustomLineItemChargeDetailsFlat</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_custom_line_item#flat BillingconductorCustomLineItem#flat}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetails.property.lineItemFilters">lineItemFilters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters">BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_custom_line_item#line_item_filters BillingconductorCustomLineItem#line_item_filters}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetails.property.percentage">percentage</a></code> | <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentage">BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentage</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_custom_line_item#percentage BillingconductorCustomLineItem#percentage}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetails.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_custom_line_item#type BillingconductorCustomLineItem#type}. |

---

##### `flat`<sup>Optional</sup> <a name="flat" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetails.property.flat"></a>

```java
public BillingconductorCustomLineItemCustomLineItemChargeDetailsFlat getFlat();
```

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlat">BillingconductorCustomLineItemCustomLineItemChargeDetailsFlat</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_custom_line_item#flat BillingconductorCustomLineItem#flat}.

---

##### `lineItemFilters`<sup>Optional</sup> <a name="lineItemFilters" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetails.property.lineItemFilters"></a>

```java
public IResolvable|java.util.List<BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters> getLineItemFilters();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters">BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_custom_line_item#line_item_filters BillingconductorCustomLineItem#line_item_filters}.

---

##### `percentage`<sup>Optional</sup> <a name="percentage" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetails.property.percentage"></a>

```java
public BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentage getPercentage();
```

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentage">BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentage</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_custom_line_item#percentage BillingconductorCustomLineItem#percentage}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetails.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_custom_line_item#type BillingconductorCustomLineItem#type}.

---

### BillingconductorCustomLineItemCustomLineItemChargeDetailsFlat <a name="BillingconductorCustomLineItemCustomLineItemChargeDetailsFlat" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlat.Initializer"></a>

```java
import io.cdktn.providers.awscc.billingconductor_custom_line_item.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlat;

BillingconductorCustomLineItemCustomLineItemChargeDetailsFlat.builder()
//  .chargeValue(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlat.property.chargeValue">chargeValue</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_custom_line_item#charge_value BillingconductorCustomLineItem#charge_value}. |

---

##### `chargeValue`<sup>Optional</sup> <a name="chargeValue" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlat.property.chargeValue"></a>

```java
public java.lang.Number getChargeValue();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_custom_line_item#charge_value BillingconductorCustomLineItem#charge_value}.

---

### BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters <a name="BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters.Initializer"></a>

```java
import io.cdktn.providers.awscc.billingconductor_custom_line_item.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters;

BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters.builder()
//  .attribute(java.lang.String)
//  .attributeValues(java.util.List<java.lang.String>)
//  .matchOption(java.lang.String)
//  .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters.property.attribute">attribute</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_custom_line_item#attribute BillingconductorCustomLineItem#attribute}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters.property.attributeValues">attributeValues</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_custom_line_item#attribute_values BillingconductorCustomLineItem#attribute_values}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters.property.matchOption">matchOption</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_custom_line_item#match_option BillingconductorCustomLineItem#match_option}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_custom_line_item#values BillingconductorCustomLineItem#values}. |

---

##### `attribute`<sup>Optional</sup> <a name="attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters.property.attribute"></a>

```java
public java.lang.String getAttribute();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_custom_line_item#attribute BillingconductorCustomLineItem#attribute}.

---

##### `attributeValues`<sup>Optional</sup> <a name="attributeValues" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters.property.attributeValues"></a>

```java
public java.util.List<java.lang.String> getAttributeValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_custom_line_item#attribute_values BillingconductorCustomLineItem#attribute_values}.

---

##### `matchOption`<sup>Optional</sup> <a name="matchOption" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters.property.matchOption"></a>

```java
public java.lang.String getMatchOption();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_custom_line_item#match_option BillingconductorCustomLineItem#match_option}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_custom_line_item#values BillingconductorCustomLineItem#values}.

---

### BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentage <a name="BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentage" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentage.Initializer"></a>

```java
import io.cdktn.providers.awscc.billingconductor_custom_line_item.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentage;

BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentage.builder()
//  .childAssociatedResources(java.util.List<java.lang.String>)
//  .percentageValue(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentage.property.childAssociatedResources">childAssociatedResources</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_custom_line_item#child_associated_resources BillingconductorCustomLineItem#child_associated_resources}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentage.property.percentageValue">percentageValue</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_custom_line_item#percentage_value BillingconductorCustomLineItem#percentage_value}. |

---

##### `childAssociatedResources`<sup>Optional</sup> <a name="childAssociatedResources" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentage.property.childAssociatedResources"></a>

```java
public java.util.List<java.lang.String> getChildAssociatedResources();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_custom_line_item#child_associated_resources BillingconductorCustomLineItem#child_associated_resources}.

---

##### `percentageValue`<sup>Optional</sup> <a name="percentageValue" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentage.property.percentageValue"></a>

```java
public java.lang.Number getPercentageValue();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_custom_line_item#percentage_value BillingconductorCustomLineItem#percentage_value}.

---

### BillingconductorCustomLineItemPresentationDetails <a name="BillingconductorCustomLineItemPresentationDetails" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetails.Initializer"></a>

```java
import io.cdktn.providers.awscc.billingconductor_custom_line_item.BillingconductorCustomLineItemPresentationDetails;

BillingconductorCustomLineItemPresentationDetails.builder()
//  .service(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetails.property.service">service</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_custom_line_item#service BillingconductorCustomLineItem#service}. |

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetails.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_custom_line_item#service BillingconductorCustomLineItem#service}.

---

### BillingconductorCustomLineItemTags <a name="BillingconductorCustomLineItemTags" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.billingconductor_custom_line_item.BillingconductorCustomLineItemTags;

BillingconductorCustomLineItemTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_custom_line_item#key BillingconductorCustomLineItem#key}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_custom_line_item#value BillingconductorCustomLineItem#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_custom_line_item#key BillingconductorCustomLineItem#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_custom_line_item#value BillingconductorCustomLineItem#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### BillingconductorCustomLineItemBillingPeriodRangeOutputReference <a name="BillingconductorCustomLineItemBillingPeriodRangeOutputReference" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.billingconductor_custom_line_item.BillingconductorCustomLineItemBillingPeriodRangeOutputReference;

new BillingconductorCustomLineItemBillingPeriodRangeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.resetExclusiveEndBillingPeriod">resetExclusiveEndBillingPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.resetInclusiveStartBillingPeriod">resetInclusiveStartBillingPeriod</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExclusiveEndBillingPeriod` <a name="resetExclusiveEndBillingPeriod" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.resetExclusiveEndBillingPeriod"></a>

```java
public void resetExclusiveEndBillingPeriod()
```

##### `resetInclusiveStartBillingPeriod` <a name="resetInclusiveStartBillingPeriod" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.resetInclusiveStartBillingPeriod"></a>

```java
public void resetInclusiveStartBillingPeriod()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.property.exclusiveEndBillingPeriodInput">exclusiveEndBillingPeriodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.property.inclusiveStartBillingPeriodInput">inclusiveStartBillingPeriodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.property.exclusiveEndBillingPeriod">exclusiveEndBillingPeriod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.property.inclusiveStartBillingPeriod">inclusiveStartBillingPeriod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRange">BillingconductorCustomLineItemBillingPeriodRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `exclusiveEndBillingPeriodInput`<sup>Optional</sup> <a name="exclusiveEndBillingPeriodInput" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.property.exclusiveEndBillingPeriodInput"></a>

```java
public java.lang.String getExclusiveEndBillingPeriodInput();
```

- *Type:* java.lang.String

---

##### `inclusiveStartBillingPeriodInput`<sup>Optional</sup> <a name="inclusiveStartBillingPeriodInput" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.property.inclusiveStartBillingPeriodInput"></a>

```java
public java.lang.String getInclusiveStartBillingPeriodInput();
```

- *Type:* java.lang.String

---

##### `exclusiveEndBillingPeriod`<sup>Required</sup> <a name="exclusiveEndBillingPeriod" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.property.exclusiveEndBillingPeriod"></a>

```java
public java.lang.String getExclusiveEndBillingPeriod();
```

- *Type:* java.lang.String

---

##### `inclusiveStartBillingPeriod`<sup>Required</sup> <a name="inclusiveStartBillingPeriod" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.property.inclusiveStartBillingPeriod"></a>

```java
public java.lang.String getInclusiveStartBillingPeriod();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.property.internalValue"></a>

```java
public IResolvable|BillingconductorCustomLineItemBillingPeriodRange getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRange">BillingconductorCustomLineItemBillingPeriodRange</a>

---


### BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference <a name="BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.billingconductor_custom_line_item.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference;

new BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.resetChargeValue">resetChargeValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetChargeValue` <a name="resetChargeValue" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.resetChargeValue"></a>

```java
public void resetChargeValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.property.chargeValueInput">chargeValueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.property.chargeValue">chargeValue</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlat">BillingconductorCustomLineItemCustomLineItemChargeDetailsFlat</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `chargeValueInput`<sup>Optional</sup> <a name="chargeValueInput" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.property.chargeValueInput"></a>

```java
public java.lang.Number getChargeValueInput();
```

- *Type:* java.lang.Number

---

##### `chargeValue`<sup>Required</sup> <a name="chargeValue" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.property.chargeValue"></a>

```java
public java.lang.Number getChargeValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.property.internalValue"></a>

```java
public IResolvable|BillingconductorCustomLineItemCustomLineItemChargeDetailsFlat getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlat">BillingconductorCustomLineItemCustomLineItemChargeDetailsFlat</a>

---


### BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList <a name="BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.Initializer"></a>

```java
import io.cdktn.providers.awscc.billingconductor_custom_line_item.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList;

new BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.get"></a>

```java
public BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters">BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters">BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters</a>>

---


### BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference <a name="BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.billingconductor_custom_line_item.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference;

new BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.resetAttribute">resetAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.resetAttributeValues">resetAttributeValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.resetMatchOption">resetMatchOption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAttribute` <a name="resetAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.resetAttribute"></a>

```java
public void resetAttribute()
```

##### `resetAttributeValues` <a name="resetAttributeValues" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.resetAttributeValues"></a>

```java
public void resetAttributeValues()
```

##### `resetMatchOption` <a name="resetMatchOption" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.resetMatchOption"></a>

```java
public void resetMatchOption()
```

##### `resetValues` <a name="resetValues" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.resetValues"></a>

```java
public void resetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.property.attributeInput">attributeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.property.attributeValuesInput">attributeValuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.property.matchOptionInput">matchOptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.property.attribute">attribute</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.property.attributeValues">attributeValues</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.property.matchOption">matchOption</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters">BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `attributeInput`<sup>Optional</sup> <a name="attributeInput" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.property.attributeInput"></a>

```java
public java.lang.String getAttributeInput();
```

- *Type:* java.lang.String

---

##### `attributeValuesInput`<sup>Optional</sup> <a name="attributeValuesInput" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.property.attributeValuesInput"></a>

```java
public java.util.List<java.lang.String> getAttributeValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `matchOptionInput`<sup>Optional</sup> <a name="matchOptionInput" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.property.matchOptionInput"></a>

```java
public java.lang.String getMatchOptionInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.property.attribute"></a>

```java
public java.lang.String getAttribute();
```

- *Type:* java.lang.String

---

##### `attributeValues`<sup>Required</sup> <a name="attributeValues" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.property.attributeValues"></a>

```java
public java.util.List<java.lang.String> getAttributeValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `matchOption`<sup>Required</sup> <a name="matchOption" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.property.matchOption"></a>

```java
public java.lang.String getMatchOption();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.property.internalValue"></a>

```java
public IResolvable|BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters">BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters</a>

---


### BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference <a name="BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.billingconductor_custom_line_item.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference;

new BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.putFlat">putFlat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.putLineItemFilters">putLineItemFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.putPercentage">putPercentage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.resetFlat">resetFlat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.resetLineItemFilters">resetLineItemFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.resetPercentage">resetPercentage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFlat` <a name="putFlat" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.putFlat"></a>

```java
public void putFlat(BillingconductorCustomLineItemCustomLineItemChargeDetailsFlat value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.putFlat.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlat">BillingconductorCustomLineItemCustomLineItemChargeDetailsFlat</a>

---

##### `putLineItemFilters` <a name="putLineItemFilters" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.putLineItemFilters"></a>

```java
public void putLineItemFilters(IResolvable|java.util.List<BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.putLineItemFilters.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters">BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters</a>>

---

##### `putPercentage` <a name="putPercentage" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.putPercentage"></a>

```java
public void putPercentage(BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentage value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.putPercentage.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentage">BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentage</a>

---

##### `resetFlat` <a name="resetFlat" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.resetFlat"></a>

```java
public void resetFlat()
```

##### `resetLineItemFilters` <a name="resetLineItemFilters" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.resetLineItemFilters"></a>

```java
public void resetLineItemFilters()
```

##### `resetPercentage` <a name="resetPercentage" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.resetPercentage"></a>

```java
public void resetPercentage()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.property.flat">flat</a></code> | <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference">BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.property.lineItemFilters">lineItemFilters</a></code> | <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList">BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.property.percentage">percentage</a></code> | <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference">BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.property.flatInput">flatInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlat">BillingconductorCustomLineItemCustomLineItemChargeDetailsFlat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.property.lineItemFiltersInput">lineItemFiltersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters">BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.property.percentageInput">percentageInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentage">BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetails">BillingconductorCustomLineItemCustomLineItemChargeDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `flat`<sup>Required</sup> <a name="flat" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.property.flat"></a>

```java
public BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference getFlat();
```

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference">BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference</a>

---

##### `lineItemFilters`<sup>Required</sup> <a name="lineItemFilters" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.property.lineItemFilters"></a>

```java
public BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList getLineItemFilters();
```

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList">BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList</a>

---

##### `percentage`<sup>Required</sup> <a name="percentage" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.property.percentage"></a>

```java
public BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference getPercentage();
```

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference">BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference</a>

---

##### `flatInput`<sup>Optional</sup> <a name="flatInput" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.property.flatInput"></a>

```java
public IResolvable|BillingconductorCustomLineItemCustomLineItemChargeDetailsFlat getFlatInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlat">BillingconductorCustomLineItemCustomLineItemChargeDetailsFlat</a>

---

##### `lineItemFiltersInput`<sup>Optional</sup> <a name="lineItemFiltersInput" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.property.lineItemFiltersInput"></a>

```java
public IResolvable|java.util.List<BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters> getLineItemFiltersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters">BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters</a>>

---

##### `percentageInput`<sup>Optional</sup> <a name="percentageInput" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.property.percentageInput"></a>

```java
public IResolvable|BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentage getPercentageInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentage">BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentage</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.property.internalValue"></a>

```java
public IResolvable|BillingconductorCustomLineItemCustomLineItemChargeDetails getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetails">BillingconductorCustomLineItemCustomLineItemChargeDetails</a>

---


### BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference <a name="BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.billingconductor_custom_line_item.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference;

new BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.resetChildAssociatedResources">resetChildAssociatedResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.resetPercentageValue">resetPercentageValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetChildAssociatedResources` <a name="resetChildAssociatedResources" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.resetChildAssociatedResources"></a>

```java
public void resetChildAssociatedResources()
```

##### `resetPercentageValue` <a name="resetPercentageValue" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.resetPercentageValue"></a>

```java
public void resetPercentageValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.property.childAssociatedResourcesInput">childAssociatedResourcesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.property.percentageValueInput">percentageValueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.property.childAssociatedResources">childAssociatedResources</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.property.percentageValue">percentageValue</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentage">BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `childAssociatedResourcesInput`<sup>Optional</sup> <a name="childAssociatedResourcesInput" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.property.childAssociatedResourcesInput"></a>

```java
public java.util.List<java.lang.String> getChildAssociatedResourcesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `percentageValueInput`<sup>Optional</sup> <a name="percentageValueInput" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.property.percentageValueInput"></a>

```java
public java.lang.Number getPercentageValueInput();
```

- *Type:* java.lang.Number

---

##### `childAssociatedResources`<sup>Required</sup> <a name="childAssociatedResources" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.property.childAssociatedResources"></a>

```java
public java.util.List<java.lang.String> getChildAssociatedResources();
```

- *Type:* java.util.List<java.lang.String>

---

##### `percentageValue`<sup>Required</sup> <a name="percentageValue" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.property.percentageValue"></a>

```java
public java.lang.Number getPercentageValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.property.internalValue"></a>

```java
public IResolvable|BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentage getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentage">BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentage</a>

---


### BillingconductorCustomLineItemPresentationDetailsOutputReference <a name="BillingconductorCustomLineItemPresentationDetailsOutputReference" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.billingconductor_custom_line_item.BillingconductorCustomLineItemPresentationDetailsOutputReference;

new BillingconductorCustomLineItemPresentationDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.resetService">resetService</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetService` <a name="resetService" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.resetService"></a>

```java
public void resetService()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.property.serviceInput">serviceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.property.service">service</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetails">BillingconductorCustomLineItemPresentationDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.property.serviceInput"></a>

```java
public java.lang.String getServiceInput();
```

- *Type:* java.lang.String

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.property.internalValue"></a>

```java
public IResolvable|BillingconductorCustomLineItemPresentationDetails getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetails">BillingconductorCustomLineItemPresentationDetails</a>

---


### BillingconductorCustomLineItemTagsList <a name="BillingconductorCustomLineItemTagsList" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.billingconductor_custom_line_item.BillingconductorCustomLineItemTagsList;

new BillingconductorCustomLineItemTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsList.get"></a>

```java
public BillingconductorCustomLineItemTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTags">BillingconductorCustomLineItemTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BillingconductorCustomLineItemTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTags">BillingconductorCustomLineItemTags</a>>

---


### BillingconductorCustomLineItemTagsOutputReference <a name="BillingconductorCustomLineItemTagsOutputReference" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.billingconductor_custom_line_item.BillingconductorCustomLineItemTagsOutputReference;

new BillingconductorCustomLineItemTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTags">BillingconductorCustomLineItemTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|BillingconductorCustomLineItemTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTags">BillingconductorCustomLineItemTags</a>

---



