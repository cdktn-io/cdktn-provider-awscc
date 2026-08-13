# `billingconductorPricingRule` Submodule <a name="`billingconductorPricingRule` Submodule" id="@cdktn/provider-awscc.billingconductorPricingRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BillingconductorPricingRule <a name="BillingconductorPricingRule" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billingconductor_pricing_rule awscc_billingconductor_pricing_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.Initializer"></a>

```python
from cdktn_provider_awscc import billingconductor_pricing_rule

billingconductorPricingRule.BillingconductorPricingRule(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  scope: str,
  type: str,
  billing_entity: str = None,
  description: str = None,
  modifier_percentage: typing.Union[int, float] = None,
  operation: str = None,
  service: str = None,
  tags: IResolvable | typing.List[BillingconductorPricingRuleTags] = None,
  tiering: BillingconductorPricingRuleTiering = None,
  usage_type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.Initializer.parameter.name">name</a></code> | <code>str</code> | Pricing rule name. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.Initializer.parameter.scope">scope</a></code> | <code>str</code> | A term used to categorize the granularity of a Pricing Rule. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.Initializer.parameter.type">type</a></code> | <code>str</code> | One of MARKUP, DISCOUNT or TIERING that describes the behaviour of the pricing rule. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.Initializer.parameter.billingEntity">billing_entity</a></code> | <code>str</code> | The seller of services provided by AWS, their affiliates, or third-party providers selling services via AWS Marketplaces. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.Initializer.parameter.description">description</a></code> | <code>str</code> | Pricing rule description. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.Initializer.parameter.modifierPercentage">modifier_percentage</a></code> | <code>typing.Union[int, float]</code> | Pricing rule modifier percentage. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.Initializer.parameter.operation">operation</a></code> | <code>str</code> | The Operation which a SKU pricing rule is modifying. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.Initializer.parameter.service">service</a></code> | <code>str</code> | The service which a pricing rule is applied on. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTags">BillingconductorPricingRuleTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billingconductor_pricing_rule#tags BillingconductorPricingRule#tags}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.Initializer.parameter.tiering">tiering</a></code> | <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTiering">BillingconductorPricingRuleTiering</a></code> | The set of tiering configurations for the pricing rule. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.Initializer.parameter.usageType">usage_type</a></code> | <code>str</code> | The UsageType which a SKU pricing rule is modifying. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.Initializer.parameter.name"></a>

- *Type:* str

Pricing rule name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billingconductor_pricing_rule#name BillingconductorPricingRule#name}

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.Initializer.parameter.scope"></a>

- *Type:* str

A term used to categorize the granularity of a Pricing Rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billingconductor_pricing_rule#scope BillingconductorPricingRule#scope}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.Initializer.parameter.type"></a>

- *Type:* str

One of MARKUP, DISCOUNT or TIERING that describes the behaviour of the pricing rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billingconductor_pricing_rule#type BillingconductorPricingRule#type}

---

##### `billing_entity`<sup>Optional</sup> <a name="billing_entity" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.Initializer.parameter.billingEntity"></a>

- *Type:* str

The seller of services provided by AWS, their affiliates, or third-party providers selling services via AWS Marketplaces.

Supported billing entities are AWS, AWS Marketplace, and AISPL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billingconductor_pricing_rule#billing_entity BillingconductorPricingRule#billing_entity}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.Initializer.parameter.description"></a>

- *Type:* str

Pricing rule description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billingconductor_pricing_rule#description BillingconductorPricingRule#description}

---

##### `modifier_percentage`<sup>Optional</sup> <a name="modifier_percentage" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.Initializer.parameter.modifierPercentage"></a>

- *Type:* typing.Union[int, float]

Pricing rule modifier percentage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billingconductor_pricing_rule#modifier_percentage BillingconductorPricingRule#modifier_percentage}

---

##### `operation`<sup>Optional</sup> <a name="operation" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.Initializer.parameter.operation"></a>

- *Type:* str

The Operation which a SKU pricing rule is modifying.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billingconductor_pricing_rule#operation BillingconductorPricingRule#operation}

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.Initializer.parameter.service"></a>

- *Type:* str

The service which a pricing rule is applied on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billingconductor_pricing_rule#service BillingconductorPricingRule#service}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTags">BillingconductorPricingRuleTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billingconductor_pricing_rule#tags BillingconductorPricingRule#tags}.

---

##### `tiering`<sup>Optional</sup> <a name="tiering" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.Initializer.parameter.tiering"></a>

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTiering">BillingconductorPricingRuleTiering</a>

The set of tiering configurations for the pricing rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billingconductor_pricing_rule#tiering BillingconductorPricingRule#tiering}

---

##### `usage_type`<sup>Optional</sup> <a name="usage_type" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.Initializer.parameter.usageType"></a>

- *Type:* str

The UsageType which a SKU pricing rule is modifying.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billingconductor_pricing_rule#usage_type BillingconductorPricingRule#usage_type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.putTiering">put_tiering</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.resetBillingEntity">reset_billing_entity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.resetModifierPercentage">reset_modifier_percentage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.resetOperation">reset_operation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.resetService">reset_service</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.resetTiering">reset_tiering</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.resetUsageType">reset_usage_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.with"></a>

```python
def with(
  mixins: *IMixin
) -> IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[BillingconductorPricingRuleTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTags">BillingconductorPricingRuleTags</a>]

---

##### `put_tiering` <a name="put_tiering" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.putTiering"></a>

```python
def put_tiering(
  free_tier: BillingconductorPricingRuleTieringFreeTier = None
) -> None
```

###### `free_tier`<sup>Optional</sup> <a name="free_tier" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.putTiering.parameter.freeTier"></a>

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTier">BillingconductorPricingRuleTieringFreeTier</a>

The possible customizable free tier configurations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billingconductor_pricing_rule#free_tier BillingconductorPricingRule#free_tier}

---

##### `reset_billing_entity` <a name="reset_billing_entity" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.resetBillingEntity"></a>

```python
def reset_billing_entity() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_modifier_percentage` <a name="reset_modifier_percentage" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.resetModifierPercentage"></a>

```python
def reset_modifier_percentage() -> None
```

##### `reset_operation` <a name="reset_operation" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.resetOperation"></a>

```python
def reset_operation() -> None
```

##### `reset_service` <a name="reset_service" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.resetService"></a>

```python
def reset_service() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tiering` <a name="reset_tiering" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.resetTiering"></a>

```python
def reset_tiering() -> None
```

##### `reset_usage_type` <a name="reset_usage_type" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.resetUsageType"></a>

```python
def reset_usage_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a BillingconductorPricingRule resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.isConstruct"></a>

```python
from cdktn_provider_awscc import billingconductor_pricing_rule

billingconductorPricingRule.BillingconductorPricingRule.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.isTerraformElement"></a>

```python
from cdktn_provider_awscc import billingconductor_pricing_rule

billingconductorPricingRule.BillingconductorPricingRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.isTerraformResource"></a>

```python
from cdktn_provider_awscc import billingconductor_pricing_rule

billingconductorPricingRule.BillingconductorPricingRule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import billingconductor_pricing_rule

billingconductorPricingRule.BillingconductorPricingRule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a BillingconductorPricingRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the BillingconductorPricingRule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing BillingconductorPricingRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billingconductor_pricing_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the BillingconductorPricingRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.associatedPricingPlanCount">associated_pricing_plan_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.creationTime">creation_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.lastModifiedTime">last_modified_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList">BillingconductorPricingRuleTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.tiering">tiering</a></code> | <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference">BillingconductorPricingRuleTieringOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.billingEntityInput">billing_entity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.modifierPercentageInput">modifier_percentage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.operationInput">operation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.scopeInput">scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.serviceInput">service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTags">BillingconductorPricingRuleTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.tieringInput">tiering_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTiering">BillingconductorPricingRuleTiering</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.usageTypeInput">usage_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.billingEntity">billing_entity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.modifierPercentage">modifier_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.operation">operation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.scope">scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.service">service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.usageType">usage_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `associated_pricing_plan_count`<sup>Required</sup> <a name="associated_pricing_plan_count" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.associatedPricingPlanCount"></a>

```python
associated_pricing_plan_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.creationTime"></a>

```python
creation_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_modified_time`<sup>Required</sup> <a name="last_modified_time" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.lastModifiedTime"></a>

```python
last_modified_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.tags"></a>

```python
tags: BillingconductorPricingRuleTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList">BillingconductorPricingRuleTagsList</a>

---

##### `tiering`<sup>Required</sup> <a name="tiering" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.tiering"></a>

```python
tiering: BillingconductorPricingRuleTieringOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference">BillingconductorPricingRuleTieringOutputReference</a>

---

##### `billing_entity_input`<sup>Optional</sup> <a name="billing_entity_input" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.billingEntityInput"></a>

```python
billing_entity_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `modifier_percentage_input`<sup>Optional</sup> <a name="modifier_percentage_input" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.modifierPercentageInput"></a>

```python
modifier_percentage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `operation_input`<sup>Optional</sup> <a name="operation_input" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.operationInput"></a>

```python
operation_input: str
```

- *Type:* str

---

##### `scope_input`<sup>Optional</sup> <a name="scope_input" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.scopeInput"></a>

```python
scope_input: str
```

- *Type:* str

---

##### `service_input`<sup>Optional</sup> <a name="service_input" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.serviceInput"></a>

```python
service_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[BillingconductorPricingRuleTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTags">BillingconductorPricingRuleTags</a>]

---

##### `tiering_input`<sup>Optional</sup> <a name="tiering_input" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.tieringInput"></a>

```python
tiering_input: IResolvable | BillingconductorPricingRuleTiering
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTiering">BillingconductorPricingRuleTiering</a>

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `usage_type_input`<sup>Optional</sup> <a name="usage_type_input" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.usageTypeInput"></a>

```python
usage_type_input: str
```

- *Type:* str

---

##### `billing_entity`<sup>Required</sup> <a name="billing_entity" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.billingEntity"></a>

```python
billing_entity: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `modifier_percentage`<sup>Required</sup> <a name="modifier_percentage" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.modifierPercentage"></a>

```python
modifier_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `operation`<sup>Required</sup> <a name="operation" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.operation"></a>

```python
operation: str
```

- *Type:* str

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.scope"></a>

```python
scope: str
```

- *Type:* str

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.service"></a>

```python
service: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `usage_type`<sup>Required</sup> <a name="usage_type" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.usageType"></a>

```python
usage_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BillingconductorPricingRuleConfig <a name="BillingconductorPricingRuleConfig" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.Initializer"></a>

```python
from cdktn_provider_awscc import billingconductor_pricing_rule

billingconductorPricingRule.BillingconductorPricingRuleConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  scope: str,
  type: str,
  billing_entity: str = None,
  description: str = None,
  modifier_percentage: typing.Union[int, float] = None,
  operation: str = None,
  service: str = None,
  tags: IResolvable | typing.List[BillingconductorPricingRuleTags] = None,
  tiering: BillingconductorPricingRuleTiering = None,
  usage_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.name">name</a></code> | <code>str</code> | Pricing rule name. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.scope">scope</a></code> | <code>str</code> | A term used to categorize the granularity of a Pricing Rule. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.type">type</a></code> | <code>str</code> | One of MARKUP, DISCOUNT or TIERING that describes the behaviour of the pricing rule. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.billingEntity">billing_entity</a></code> | <code>str</code> | The seller of services provided by AWS, their affiliates, or third-party providers selling services via AWS Marketplaces. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.description">description</a></code> | <code>str</code> | Pricing rule description. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.modifierPercentage">modifier_percentage</a></code> | <code>typing.Union[int, float]</code> | Pricing rule modifier percentage. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.operation">operation</a></code> | <code>str</code> | The Operation which a SKU pricing rule is modifying. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.service">service</a></code> | <code>str</code> | The service which a pricing rule is applied on. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTags">BillingconductorPricingRuleTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billingconductor_pricing_rule#tags BillingconductorPricingRule#tags}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.tiering">tiering</a></code> | <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTiering">BillingconductorPricingRuleTiering</a></code> | The set of tiering configurations for the pricing rule. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.usageType">usage_type</a></code> | <code>str</code> | The UsageType which a SKU pricing rule is modifying. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Pricing rule name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billingconductor_pricing_rule#name BillingconductorPricingRule#name}

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.scope"></a>

```python
scope: str
```

- *Type:* str

A term used to categorize the granularity of a Pricing Rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billingconductor_pricing_rule#scope BillingconductorPricingRule#scope}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.type"></a>

```python
type: str
```

- *Type:* str

One of MARKUP, DISCOUNT or TIERING that describes the behaviour of the pricing rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billingconductor_pricing_rule#type BillingconductorPricingRule#type}

---

##### `billing_entity`<sup>Optional</sup> <a name="billing_entity" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.billingEntity"></a>

```python
billing_entity: str
```

- *Type:* str

The seller of services provided by AWS, their affiliates, or third-party providers selling services via AWS Marketplaces.

Supported billing entities are AWS, AWS Marketplace, and AISPL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billingconductor_pricing_rule#billing_entity BillingconductorPricingRule#billing_entity}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Pricing rule description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billingconductor_pricing_rule#description BillingconductorPricingRule#description}

---

##### `modifier_percentage`<sup>Optional</sup> <a name="modifier_percentage" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.modifierPercentage"></a>

```python
modifier_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Pricing rule modifier percentage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billingconductor_pricing_rule#modifier_percentage BillingconductorPricingRule#modifier_percentage}

---

##### `operation`<sup>Optional</sup> <a name="operation" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.operation"></a>

```python
operation: str
```

- *Type:* str

The Operation which a SKU pricing rule is modifying.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billingconductor_pricing_rule#operation BillingconductorPricingRule#operation}

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.service"></a>

```python
service: str
```

- *Type:* str

The service which a pricing rule is applied on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billingconductor_pricing_rule#service BillingconductorPricingRule#service}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[BillingconductorPricingRuleTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTags">BillingconductorPricingRuleTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billingconductor_pricing_rule#tags BillingconductorPricingRule#tags}.

---

##### `tiering`<sup>Optional</sup> <a name="tiering" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.tiering"></a>

```python
tiering: BillingconductorPricingRuleTiering
```

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTiering">BillingconductorPricingRuleTiering</a>

The set of tiering configurations for the pricing rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billingconductor_pricing_rule#tiering BillingconductorPricingRule#tiering}

---

##### `usage_type`<sup>Optional</sup> <a name="usage_type" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleConfig.property.usageType"></a>

```python
usage_type: str
```

- *Type:* str

The UsageType which a SKU pricing rule is modifying.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billingconductor_pricing_rule#usage_type BillingconductorPricingRule#usage_type}

---

### BillingconductorPricingRuleTags <a name="BillingconductorPricingRuleTags" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTags.Initializer"></a>

```python
from cdktn_provider_awscc import billingconductor_pricing_rule

billingconductorPricingRule.BillingconductorPricingRuleTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billingconductor_pricing_rule#key BillingconductorPricingRule#key}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billingconductor_pricing_rule#value BillingconductorPricingRule#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billingconductor_pricing_rule#key BillingconductorPricingRule#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billingconductor_pricing_rule#value BillingconductorPricingRule#value}.

---

### BillingconductorPricingRuleTiering <a name="BillingconductorPricingRuleTiering" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTiering"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTiering.Initializer"></a>

```python
from cdktn_provider_awscc import billingconductor_pricing_rule

billingconductorPricingRule.BillingconductorPricingRuleTiering(
  free_tier: BillingconductorPricingRuleTieringFreeTier = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTiering.property.freeTier">free_tier</a></code> | <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTier">BillingconductorPricingRuleTieringFreeTier</a></code> | The possible customizable free tier configurations. |

---

##### `free_tier`<sup>Optional</sup> <a name="free_tier" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTiering.property.freeTier"></a>

```python
free_tier: BillingconductorPricingRuleTieringFreeTier
```

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTier">BillingconductorPricingRuleTieringFreeTier</a>

The possible customizable free tier configurations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billingconductor_pricing_rule#free_tier BillingconductorPricingRule#free_tier}

---

### BillingconductorPricingRuleTieringFreeTier <a name="BillingconductorPricingRuleTieringFreeTier" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTier"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTier.Initializer"></a>

```python
from cdktn_provider_awscc import billingconductor_pricing_rule

billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTier(
  activated: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTier.property.activated">activated</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billingconductor_pricing_rule#activated BillingconductorPricingRule#activated}. |

---

##### `activated`<sup>Optional</sup> <a name="activated" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTier.property.activated"></a>

```python
activated: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billingconductor_pricing_rule#activated BillingconductorPricingRule#activated}.

---

## Classes <a name="Classes" id="Classes"></a>

### BillingconductorPricingRuleTagsList <a name="BillingconductorPricingRuleTagsList" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import billingconductor_pricing_rule

billingconductorPricingRule.BillingconductorPricingRuleTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BillingconductorPricingRuleTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTags">BillingconductorPricingRuleTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BillingconductorPricingRuleTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTags">BillingconductorPricingRuleTags</a>]

---


### BillingconductorPricingRuleTagsOutputReference <a name="BillingconductorPricingRuleTagsOutputReference" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import billingconductor_pricing_rule

billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTags">BillingconductorPricingRuleTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BillingconductorPricingRuleTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTags">BillingconductorPricingRuleTags</a>

---


### BillingconductorPricingRuleTieringFreeTierOutputReference <a name="BillingconductorPricingRuleTieringFreeTierOutputReference" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import billingconductor_pricing_rule

billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.resetActivated">reset_activated</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_activated` <a name="reset_activated" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.resetActivated"></a>

```python
def reset_activated() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.property.activatedInput">activated_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.property.activated">activated</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTier">BillingconductorPricingRuleTieringFreeTier</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `activated_input`<sup>Optional</sup> <a name="activated_input" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.property.activatedInput"></a>

```python
activated_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `activated`<sup>Required</sup> <a name="activated" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.property.activated"></a>

```python
activated: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BillingconductorPricingRuleTieringFreeTier
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTier">BillingconductorPricingRuleTieringFreeTier</a>

---


### BillingconductorPricingRuleTieringOutputReference <a name="BillingconductorPricingRuleTieringOutputReference" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import billingconductor_pricing_rule

billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.putFreeTier">put_free_tier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.resetFreeTier">reset_free_tier</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_free_tier` <a name="put_free_tier" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.putFreeTier"></a>

```python
def put_free_tier(
  activated: bool | IResolvable = None
) -> None
```

###### `activated`<sup>Optional</sup> <a name="activated" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.putFreeTier.parameter.activated"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billingconductor_pricing_rule#activated BillingconductorPricingRule#activated}.

---

##### `reset_free_tier` <a name="reset_free_tier" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.resetFreeTier"></a>

```python
def reset_free_tier() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.property.freeTier">free_tier</a></code> | <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference">BillingconductorPricingRuleTieringFreeTierOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.property.freeTierInput">free_tier_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTier">BillingconductorPricingRuleTieringFreeTier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTiering">BillingconductorPricingRuleTiering</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `free_tier`<sup>Required</sup> <a name="free_tier" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.property.freeTier"></a>

```python
free_tier: BillingconductorPricingRuleTieringFreeTierOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTierOutputReference">BillingconductorPricingRuleTieringFreeTierOutputReference</a>

---

##### `free_tier_input`<sup>Optional</sup> <a name="free_tier_input" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.property.freeTierInput"></a>

```python
free_tier_input: IResolvable | BillingconductorPricingRuleTieringFreeTier
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringFreeTier">BillingconductorPricingRuleTieringFreeTier</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTieringOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BillingconductorPricingRuleTiering
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.billingconductorPricingRule.BillingconductorPricingRuleTiering">BillingconductorPricingRuleTiering</a>

---



