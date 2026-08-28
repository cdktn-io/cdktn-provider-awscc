# `billingconductorPricingRule` Submodule <a name="`billingconductorPricingRule` Submodule" id="@cdktn/provider-awscc.billingconductorPricingRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BillingconductorPricingRule <a name="BillingconductorPricingRule" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_pricing_rule awscc_billingconductor_pricing_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.Initializer"></a>

```java
import io.cdktn.providers.awscc.billingconductor_pricing_rule.BillingconductorPricingRule;

BillingconductorPricingRule.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .scope(java.lang.String)
    .type(java.lang.String)
//  .billingEntity(java.lang.String)
//  .description(java.lang.String)
//  .modifierPercentage(java.lang.Number)
//  .operation(java.lang.String)
//  .service(java.lang.String)
//  .tags(IResolvable|java.util.List<BillingconductorPricingRuleTags>)
//  .tiering(BillingconductorPricingRuleTiering)
//  .usageType(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Pricing rule name. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.Initializer.parameter.scope">scope</a></code> | <code>java.lang.String</code> | A term used to categorize the granularity of a Pricing Rule. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | One of MARKUP, DISCOUNT or TIERING that describes the behaviour of the pricing rule. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.Initializer.parameter.billingEntity">billingEntity</a></code> | <code>java.lang.String</code> | The seller of services provided by AWS, their affiliates, or third-party providers selling services via AWS Marketplaces. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Pricing rule description. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.Initializer.parameter.modifierPercentage">modifierPercentage</a></code> | <code>java.lang.Number</code> | Pricing rule modifier percentage. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.Initializer.parameter.operation">operation</a></code> | <code>java.lang.String</code> | The Operation which a SKU pricing rule is modifying. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.Initializer.parameter.service">service</a></code> | <code>java.lang.String</code> | The service which a pricing rule is applied on. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTags">BillingconductorPricingRuleTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_pricing_rule#tags BillingconductorPricingRule#tags}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.Initializer.parameter.tiering">tiering</a></code> | <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTiering">BillingconductorPricingRuleTiering</a></code> | The set of tiering configurations for the pricing rule. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.Initializer.parameter.usageType">usageType</a></code> | <code>java.lang.String</code> | The UsageType which a SKU pricing rule is modifying. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Pricing rule name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_pricing_rule#name BillingconductorPricingRule#name}

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.Initializer.parameter.scope"></a>

- *Type:* java.lang.String

A term used to categorize the granularity of a Pricing Rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_pricing_rule#scope BillingconductorPricingRule#scope}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.Initializer.parameter.type"></a>

- *Type:* java.lang.String

One of MARKUP, DISCOUNT or TIERING that describes the behaviour of the pricing rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_pricing_rule#type BillingconductorPricingRule#type}

---

##### `billingEntity`<sup>Optional</sup> <a name="billingEntity" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.Initializer.parameter.billingEntity"></a>

- *Type:* java.lang.String

The seller of services provided by AWS, their affiliates, or third-party providers selling services via AWS Marketplaces.

Supported billing entities are AWS, AWS Marketplace, and AISPL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_pricing_rule#billing_entity BillingconductorPricingRule#billing_entity}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Pricing rule description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_pricing_rule#description BillingconductorPricingRule#description}

---

##### `modifierPercentage`<sup>Optional</sup> <a name="modifierPercentage" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.Initializer.parameter.modifierPercentage"></a>

- *Type:* java.lang.Number

Pricing rule modifier percentage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_pricing_rule#modifier_percentage BillingconductorPricingRule#modifier_percentage}

---

##### `operation`<sup>Optional</sup> <a name="operation" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.Initializer.parameter.operation"></a>

- *Type:* java.lang.String

The Operation which a SKU pricing rule is modifying.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_pricing_rule#operation BillingconductorPricingRule#operation}

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.Initializer.parameter.service"></a>

- *Type:* java.lang.String

The service which a pricing rule is applied on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_pricing_rule#service BillingconductorPricingRule#service}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTags">BillingconductorPricingRuleTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_pricing_rule#tags BillingconductorPricingRule#tags}.

---

##### `tiering`<sup>Optional</sup> <a name="tiering" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.Initializer.parameter.tiering"></a>

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTiering">BillingconductorPricingRuleTiering</a>

The set of tiering configurations for the pricing rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_pricing_rule#tiering BillingconductorPricingRule#tiering}

---

##### `usageType`<sup>Optional</sup> <a name="usageType" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.Initializer.parameter.usageType"></a>

- *Type:* java.lang.String

The UsageType which a SKU pricing rule is modifying.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_pricing_rule#usage_type BillingconductorPricingRule#usage_type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.putTiering">putTiering</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.resetBillingEntity">resetBillingEntity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.resetModifierPercentage">resetModifierPercentage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.resetOperation">resetOperation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.resetService">resetService</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.resetTiering">resetTiering</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.resetUsageType">resetUsageType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<BillingconductorPricingRuleTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTags">BillingconductorPricingRuleTags</a>>

---

##### `putTiering` <a name="putTiering" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.putTiering"></a>

```java
public void putTiering(BillingconductorPricingRuleTiering value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.putTiering.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTiering">BillingconductorPricingRuleTiering</a>

---

##### `resetBillingEntity` <a name="resetBillingEntity" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.resetBillingEntity"></a>

```java
public void resetBillingEntity()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetModifierPercentage` <a name="resetModifierPercentage" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.resetModifierPercentage"></a>

```java
public void resetModifierPercentage()
```

##### `resetOperation` <a name="resetOperation" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.resetOperation"></a>

```java
public void resetOperation()
```

##### `resetService` <a name="resetService" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.resetService"></a>

```java
public void resetService()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.resetTags"></a>

```java
public void resetTags()
```

##### `resetTiering` <a name="resetTiering" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.resetTiering"></a>

```java
public void resetTiering()
```

##### `resetUsageType` <a name="resetUsageType" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.resetUsageType"></a>

```java
public void resetUsageType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a BillingconductorPricingRule resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.isConstruct"></a>

```java
import io.cdktn.providers.awscc.billingconductor_pricing_rule.BillingconductorPricingRule;

BillingconductorPricingRule.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.billingconductor_pricing_rule.BillingconductorPricingRule;

BillingconductorPricingRule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.billingconductor_pricing_rule.BillingconductorPricingRule;

BillingconductorPricingRule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.billingconductor_pricing_rule.BillingconductorPricingRule;

BillingconductorPricingRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),BillingconductorPricingRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a BillingconductorPricingRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the BillingconductorPricingRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing BillingconductorPricingRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_pricing_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the BillingconductorPricingRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.associatedPricingPlanCount">associatedPricingPlanCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.creationTime">creationTime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.lastModifiedTime">lastModifiedTime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList">BillingconductorPricingRuleTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.tiering">tiering</a></code> | <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference">BillingconductorPricingRuleTieringOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.billingEntityInput">billingEntityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.modifierPercentageInput">modifierPercentageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.operationInput">operationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.scopeInput">scopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.serviceInput">serviceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTags">BillingconductorPricingRuleTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.tieringInput">tieringInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTiering">BillingconductorPricingRuleTiering</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.usageTypeInput">usageTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.billingEntity">billingEntity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.modifierPercentage">modifierPercentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.operation">operation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.scope">scope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.service">service</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.usageType">usageType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `associatedPricingPlanCount`<sup>Required</sup> <a name="associatedPricingPlanCount" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.associatedPricingPlanCount"></a>

```java
public java.lang.Number getAssociatedPricingPlanCount();
```

- *Type:* java.lang.Number

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.creationTime"></a>

```java
public java.lang.Number getCreationTime();
```

- *Type:* java.lang.Number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lastModifiedTime`<sup>Required</sup> <a name="lastModifiedTime" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.lastModifiedTime"></a>

```java
public java.lang.Number getLastModifiedTime();
```

- *Type:* java.lang.Number

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.tags"></a>

```java
public BillingconductorPricingRuleTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList">BillingconductorPricingRuleTagsList</a>

---

##### `tiering`<sup>Required</sup> <a name="tiering" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.tiering"></a>

```java
public BillingconductorPricingRuleTieringOutputReference getTiering();
```

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference">BillingconductorPricingRuleTieringOutputReference</a>

---

##### `billingEntityInput`<sup>Optional</sup> <a name="billingEntityInput" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.billingEntityInput"></a>

```java
public java.lang.String getBillingEntityInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `modifierPercentageInput`<sup>Optional</sup> <a name="modifierPercentageInput" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.modifierPercentageInput"></a>

```java
public java.lang.Number getModifierPercentageInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `operationInput`<sup>Optional</sup> <a name="operationInput" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.operationInput"></a>

```java
public java.lang.String getOperationInput();
```

- *Type:* java.lang.String

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.scopeInput"></a>

```java
public java.lang.String getScopeInput();
```

- *Type:* java.lang.String

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.serviceInput"></a>

```java
public java.lang.String getServiceInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.tagsInput"></a>

```java
public IResolvable|java.util.List<BillingconductorPricingRuleTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTags">BillingconductorPricingRuleTags</a>>

---

##### `tieringInput`<sup>Optional</sup> <a name="tieringInput" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.tieringInput"></a>

```java
public IResolvable|BillingconductorPricingRuleTiering getTieringInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTiering">BillingconductorPricingRuleTiering</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `usageTypeInput`<sup>Optional</sup> <a name="usageTypeInput" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.usageTypeInput"></a>

```java
public java.lang.String getUsageTypeInput();
```

- *Type:* java.lang.String

---

##### `billingEntity`<sup>Required</sup> <a name="billingEntity" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.billingEntity"></a>

```java
public java.lang.String getBillingEntity();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `modifierPercentage`<sup>Required</sup> <a name="modifierPercentage" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.modifierPercentage"></a>

```java
public java.lang.Number getModifierPercentage();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `operation`<sup>Required</sup> <a name="operation" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.operation"></a>

```java
public java.lang.String getOperation();
```

- *Type:* java.lang.String

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `usageType`<sup>Required</sup> <a name="usageType" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.usageType"></a>

```java
public java.lang.String getUsageType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### BillingconductorPricingRuleConfig <a name="BillingconductorPricingRuleConfig" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.billingconductor_pricing_rule.BillingconductorPricingRuleConfig;

BillingconductorPricingRuleConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .scope(java.lang.String)
    .type(java.lang.String)
//  .billingEntity(java.lang.String)
//  .description(java.lang.String)
//  .modifierPercentage(java.lang.Number)
//  .operation(java.lang.String)
//  .service(java.lang.String)
//  .tags(IResolvable|java.util.List<BillingconductorPricingRuleTags>)
//  .tiering(BillingconductorPricingRuleTiering)
//  .usageType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.name">name</a></code> | <code>java.lang.String</code> | Pricing rule name. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.scope">scope</a></code> | <code>java.lang.String</code> | A term used to categorize the granularity of a Pricing Rule. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.type">type</a></code> | <code>java.lang.String</code> | One of MARKUP, DISCOUNT or TIERING that describes the behaviour of the pricing rule. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.billingEntity">billingEntity</a></code> | <code>java.lang.String</code> | The seller of services provided by AWS, their affiliates, or third-party providers selling services via AWS Marketplaces. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.description">description</a></code> | <code>java.lang.String</code> | Pricing rule description. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.modifierPercentage">modifierPercentage</a></code> | <code>java.lang.Number</code> | Pricing rule modifier percentage. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.operation">operation</a></code> | <code>java.lang.String</code> | The Operation which a SKU pricing rule is modifying. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.service">service</a></code> | <code>java.lang.String</code> | The service which a pricing rule is applied on. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTags">BillingconductorPricingRuleTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_pricing_rule#tags BillingconductorPricingRule#tags}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.tiering">tiering</a></code> | <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTiering">BillingconductorPricingRuleTiering</a></code> | The set of tiering configurations for the pricing rule. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.usageType">usageType</a></code> | <code>java.lang.String</code> | The UsageType which a SKU pricing rule is modifying. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Pricing rule name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_pricing_rule#name BillingconductorPricingRule#name}

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

A term used to categorize the granularity of a Pricing Rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_pricing_rule#scope BillingconductorPricingRule#scope}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

One of MARKUP, DISCOUNT or TIERING that describes the behaviour of the pricing rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_pricing_rule#type BillingconductorPricingRule#type}

---

##### `billingEntity`<sup>Optional</sup> <a name="billingEntity" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.billingEntity"></a>

```java
public java.lang.String getBillingEntity();
```

- *Type:* java.lang.String

The seller of services provided by AWS, their affiliates, or third-party providers selling services via AWS Marketplaces.

Supported billing entities are AWS, AWS Marketplace, and AISPL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_pricing_rule#billing_entity BillingconductorPricingRule#billing_entity}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Pricing rule description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_pricing_rule#description BillingconductorPricingRule#description}

---

##### `modifierPercentage`<sup>Optional</sup> <a name="modifierPercentage" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.modifierPercentage"></a>

```java
public java.lang.Number getModifierPercentage();
```

- *Type:* java.lang.Number

Pricing rule modifier percentage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_pricing_rule#modifier_percentage BillingconductorPricingRule#modifier_percentage}

---

##### `operation`<sup>Optional</sup> <a name="operation" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.operation"></a>

```java
public java.lang.String getOperation();
```

- *Type:* java.lang.String

The Operation which a SKU pricing rule is modifying.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_pricing_rule#operation BillingconductorPricingRule#operation}

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

The service which a pricing rule is applied on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_pricing_rule#service BillingconductorPricingRule#service}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.tags"></a>

```java
public IResolvable|java.util.List<BillingconductorPricingRuleTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTags">BillingconductorPricingRuleTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_pricing_rule#tags BillingconductorPricingRule#tags}.

---

##### `tiering`<sup>Optional</sup> <a name="tiering" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.tiering"></a>

```java
public BillingconductorPricingRuleTiering getTiering();
```

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTiering">BillingconductorPricingRuleTiering</a>

The set of tiering configurations for the pricing rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_pricing_rule#tiering BillingconductorPricingRule#tiering}

---

##### `usageType`<sup>Optional</sup> <a name="usageType" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.usageType"></a>

```java
public java.lang.String getUsageType();
```

- *Type:* java.lang.String

The UsageType which a SKU pricing rule is modifying.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_pricing_rule#usage_type BillingconductorPricingRule#usage_type}

---

### BillingconductorPricingRuleTags <a name="BillingconductorPricingRuleTags" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.billingconductor_pricing_rule.BillingconductorPricingRuleTags;

BillingconductorPricingRuleTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_pricing_rule#key BillingconductorPricingRule#key}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_pricing_rule#value BillingconductorPricingRule#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_pricing_rule#key BillingconductorPricingRule#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_pricing_rule#value BillingconductorPricingRule#value}.

---

### BillingconductorPricingRuleTiering <a name="BillingconductorPricingRuleTiering" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTiering"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTiering.Initializer"></a>

```java
import io.cdktn.providers.awscc.billingconductor_pricing_rule.BillingconductorPricingRuleTiering;

BillingconductorPricingRuleTiering.builder()
//  .freeTier(BillingconductorPricingRuleTieringFreeTier)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTiering.property.freeTier">freeTier</a></code> | <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTier">BillingconductorPricingRuleTieringFreeTier</a></code> | The possible customizable free tier configurations. |

---

##### `freeTier`<sup>Optional</sup> <a name="freeTier" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTiering.property.freeTier"></a>

```java
public BillingconductorPricingRuleTieringFreeTier getFreeTier();
```

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTier">BillingconductorPricingRuleTieringFreeTier</a>

The possible customizable free tier configurations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_pricing_rule#free_tier BillingconductorPricingRule#free_tier}

---

### BillingconductorPricingRuleTieringFreeTier <a name="BillingconductorPricingRuleTieringFreeTier" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTier"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTier.Initializer"></a>

```java
import io.cdktn.providers.awscc.billingconductor_pricing_rule.BillingconductorPricingRuleTieringFreeTier;

BillingconductorPricingRuleTieringFreeTier.builder()
//  .activated(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTier.property.activated">activated</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_pricing_rule#activated BillingconductorPricingRule#activated}. |

---

##### `activated`<sup>Optional</sup> <a name="activated" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTier.property.activated"></a>

```java
public java.lang.Boolean|IResolvable getActivated();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/billingconductor_pricing_rule#activated BillingconductorPricingRule#activated}.

---

## Classes <a name="Classes" id="Classes"></a>

### BillingconductorPricingRuleTagsList <a name="BillingconductorPricingRuleTagsList" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.billingconductor_pricing_rule.BillingconductorPricingRuleTagsList;

new BillingconductorPricingRuleTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.get"></a>

```java
public BillingconductorPricingRuleTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTags">BillingconductorPricingRuleTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BillingconductorPricingRuleTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTags">BillingconductorPricingRuleTags</a>>

---


### BillingconductorPricingRuleTagsOutputReference <a name="BillingconductorPricingRuleTagsOutputReference" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.billingconductor_pricing_rule.BillingconductorPricingRuleTagsOutputReference;

new BillingconductorPricingRuleTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTags">BillingconductorPricingRuleTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|BillingconductorPricingRuleTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTags">BillingconductorPricingRuleTags</a>

---


### BillingconductorPricingRuleTieringFreeTierOutputReference <a name="BillingconductorPricingRuleTieringFreeTierOutputReference" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.billingconductor_pricing_rule.BillingconductorPricingRuleTieringFreeTierOutputReference;

new BillingconductorPricingRuleTieringFreeTierOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.resetActivated">resetActivated</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetActivated` <a name="resetActivated" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.resetActivated"></a>

```java
public void resetActivated()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.property.activatedInput">activatedInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.property.activated">activated</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTier">BillingconductorPricingRuleTieringFreeTier</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `activatedInput`<sup>Optional</sup> <a name="activatedInput" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.property.activatedInput"></a>

```java
public java.lang.Boolean|IResolvable getActivatedInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `activated`<sup>Required</sup> <a name="activated" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.property.activated"></a>

```java
public java.lang.Boolean|IResolvable getActivated();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.property.internalValue"></a>

```java
public IResolvable|BillingconductorPricingRuleTieringFreeTier getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTier">BillingconductorPricingRuleTieringFreeTier</a>

---


### BillingconductorPricingRuleTieringOutputReference <a name="BillingconductorPricingRuleTieringOutputReference" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.billingconductor_pricing_rule.BillingconductorPricingRuleTieringOutputReference;

new BillingconductorPricingRuleTieringOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.putFreeTier">putFreeTier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.resetFreeTier">resetFreeTier</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFreeTier` <a name="putFreeTier" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.putFreeTier"></a>

```java
public void putFreeTier(BillingconductorPricingRuleTieringFreeTier value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.putFreeTier.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTier">BillingconductorPricingRuleTieringFreeTier</a>

---

##### `resetFreeTier` <a name="resetFreeTier" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.resetFreeTier"></a>

```java
public void resetFreeTier()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.property.freeTier">freeTier</a></code> | <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference">BillingconductorPricingRuleTieringFreeTierOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.property.freeTierInput">freeTierInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTier">BillingconductorPricingRuleTieringFreeTier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTiering">BillingconductorPricingRuleTiering</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `freeTier`<sup>Required</sup> <a name="freeTier" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.property.freeTier"></a>

```java
public BillingconductorPricingRuleTieringFreeTierOutputReference getFreeTier();
```

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference">BillingconductorPricingRuleTieringFreeTierOutputReference</a>

---

##### `freeTierInput`<sup>Optional</sup> <a name="freeTierInput" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.property.freeTierInput"></a>

```java
public IResolvable|BillingconductorPricingRuleTieringFreeTier getFreeTierInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTier">BillingconductorPricingRuleTieringFreeTier</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.property.internalValue"></a>

```java
public IResolvable|BillingconductorPricingRuleTiering getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTiering">BillingconductorPricingRuleTiering</a>

---



