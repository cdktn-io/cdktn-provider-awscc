# `billingconductorCustomLineItem` Submodule <a name="`billingconductorCustomLineItem` Submodule" id="@cdktn/provider-awscc.billingconductorCustomLineItem"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BillingconductorCustomLineItem <a name="BillingconductorCustomLineItem" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billingconductor_custom_line_item awscc_billingconductor_custom_line_item}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.Initializer"></a>

```python
from cdktn_provider_awscc import billingconductor_custom_line_item

billingconductorCustomLineItem.BillingconductorCustomLineItem(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  billing_group_arn: str,
  name: str,
  account_id: str = None,
  billing_period_range: BillingconductorCustomLineItemBillingPeriodRange = None,
  computation_rule: str = None,
  custom_line_item_charge_details: BillingconductorCustomLineItemCustomLineItemChargeDetails = None,
  description: str = None,
  presentation_details: BillingconductorCustomLineItemPresentationDetails = None,
  tags: IResolvable | typing.List[BillingconductorCustomLineItemTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.Initializer.parameter.billingGroupArn">billing_group_arn</a></code> | <code>str</code> | Billing Group ARN. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billingconductor_custom_line_item#name BillingconductorCustomLineItem#name}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | The account which this custom line item will be charged to. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.Initializer.parameter.billingPeriodRange">billing_period_range</a></code> | <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRange">BillingconductorCustomLineItemBillingPeriodRange</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billingconductor_custom_line_item#billing_period_range BillingconductorCustomLineItem#billing_period_range}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.Initializer.parameter.computationRule">computation_rule</a></code> | <code>str</code> | The display settings of the Custom Line Item. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.Initializer.parameter.customLineItemChargeDetails">custom_line_item_charge_details</a></code> | <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetails">BillingconductorCustomLineItemCustomLineItemChargeDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billingconductor_custom_line_item#custom_line_item_charge_details BillingconductorCustomLineItem#custom_line_item_charge_details}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billingconductor_custom_line_item#description BillingconductorCustomLineItem#description}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.Initializer.parameter.presentationDetails">presentation_details</a></code> | <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetails">BillingconductorCustomLineItemPresentationDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billingconductor_custom_line_item#presentation_details BillingconductorCustomLineItem#presentation_details}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTags">BillingconductorCustomLineItemTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billingconductor_custom_line_item#tags BillingconductorCustomLineItem#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `billing_group_arn`<sup>Required</sup> <a name="billing_group_arn" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.Initializer.parameter.billingGroupArn"></a>

- *Type:* str

Billing Group ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billingconductor_custom_line_item#billing_group_arn BillingconductorCustomLineItem#billing_group_arn}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billingconductor_custom_line_item#name BillingconductorCustomLineItem#name}.

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.Initializer.parameter.accountId"></a>

- *Type:* str

The account which this custom line item will be charged to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billingconductor_custom_line_item#account_id BillingconductorCustomLineItem#account_id}

---

##### `billing_period_range`<sup>Optional</sup> <a name="billing_period_range" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.Initializer.parameter.billingPeriodRange"></a>

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRange">BillingconductorCustomLineItemBillingPeriodRange</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billingconductor_custom_line_item#billing_period_range BillingconductorCustomLineItem#billing_period_range}.

---

##### `computation_rule`<sup>Optional</sup> <a name="computation_rule" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.Initializer.parameter.computationRule"></a>

- *Type:* str

The display settings of the Custom Line Item.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billingconductor_custom_line_item#computation_rule BillingconductorCustomLineItem#computation_rule}

---

##### `custom_line_item_charge_details`<sup>Optional</sup> <a name="custom_line_item_charge_details" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.Initializer.parameter.customLineItemChargeDetails"></a>

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetails">BillingconductorCustomLineItemCustomLineItemChargeDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billingconductor_custom_line_item#custom_line_item_charge_details BillingconductorCustomLineItem#custom_line_item_charge_details}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billingconductor_custom_line_item#description BillingconductorCustomLineItem#description}.

---

##### `presentation_details`<sup>Optional</sup> <a name="presentation_details" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.Initializer.parameter.presentationDetails"></a>

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetails">BillingconductorCustomLineItemPresentationDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billingconductor_custom_line_item#presentation_details BillingconductorCustomLineItem#presentation_details}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTags">BillingconductorCustomLineItemTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billingconductor_custom_line_item#tags BillingconductorCustomLineItem#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.putBillingPeriodRange">put_billing_period_range</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.putCustomLineItemChargeDetails">put_custom_line_item_charge_details</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.putPresentationDetails">put_presentation_details</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.resetAccountId">reset_account_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.resetBillingPeriodRange">reset_billing_period_range</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.resetComputationRule">reset_computation_rule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.resetCustomLineItemChargeDetails">reset_custom_line_item_charge_details</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.resetPresentationDetails">reset_presentation_details</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_billing_period_range` <a name="put_billing_period_range" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.putBillingPeriodRange"></a>

```python
def put_billing_period_range(
  exclusive_end_billing_period: str = None,
  inclusive_start_billing_period: str = None
) -> None
```

###### `exclusive_end_billing_period`<sup>Optional</sup> <a name="exclusive_end_billing_period" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.putBillingPeriodRange.parameter.exclusiveEndBillingPeriod"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billingconductor_custom_line_item#exclusive_end_billing_period BillingconductorCustomLineItem#exclusive_end_billing_period}.

---

###### `inclusive_start_billing_period`<sup>Optional</sup> <a name="inclusive_start_billing_period" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.putBillingPeriodRange.parameter.inclusiveStartBillingPeriod"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billingconductor_custom_line_item#inclusive_start_billing_period BillingconductorCustomLineItem#inclusive_start_billing_period}.

---

##### `put_custom_line_item_charge_details` <a name="put_custom_line_item_charge_details" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.putCustomLineItemChargeDetails"></a>

```python
def put_custom_line_item_charge_details(
  flat: BillingconductorCustomLineItemCustomLineItemChargeDetailsFlat = None,
  line_item_filters: IResolvable | typing.List[BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters] = None,
  percentage: BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentage = None,
  type: str = None
) -> None
```

###### `flat`<sup>Optional</sup> <a name="flat" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.putCustomLineItemChargeDetails.parameter.flat"></a>

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlat">BillingconductorCustomLineItemCustomLineItemChargeDetailsFlat</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billingconductor_custom_line_item#flat BillingconductorCustomLineItem#flat}.

---

###### `line_item_filters`<sup>Optional</sup> <a name="line_item_filters" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.putCustomLineItemChargeDetails.parameter.lineItemFilters"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters">BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billingconductor_custom_line_item#line_item_filters BillingconductorCustomLineItem#line_item_filters}.

---

###### `percentage`<sup>Optional</sup> <a name="percentage" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.putCustomLineItemChargeDetails.parameter.percentage"></a>

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentage">BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentage</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billingconductor_custom_line_item#percentage BillingconductorCustomLineItem#percentage}.

---

###### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.putCustomLineItemChargeDetails.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billingconductor_custom_line_item#type BillingconductorCustomLineItem#type}.

---

##### `put_presentation_details` <a name="put_presentation_details" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.putPresentationDetails"></a>

```python
def put_presentation_details(
  service: str = None
) -> None
```

###### `service`<sup>Optional</sup> <a name="service" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.putPresentationDetails.parameter.service"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billingconductor_custom_line_item#service BillingconductorCustomLineItem#service}.

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[BillingconductorCustomLineItemTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTags">BillingconductorCustomLineItemTags</a>]

---

##### `reset_account_id` <a name="reset_account_id" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.resetAccountId"></a>

```python
def reset_account_id() -> None
```

##### `reset_billing_period_range` <a name="reset_billing_period_range" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.resetBillingPeriodRange"></a>

```python
def reset_billing_period_range() -> None
```

##### `reset_computation_rule` <a name="reset_computation_rule" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.resetComputationRule"></a>

```python
def reset_computation_rule() -> None
```

##### `reset_custom_line_item_charge_details` <a name="reset_custom_line_item_charge_details" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.resetCustomLineItemChargeDetails"></a>

```python
def reset_custom_line_item_charge_details() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_presentation_details` <a name="reset_presentation_details" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.resetPresentationDetails"></a>

```python
def reset_presentation_details() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a BillingconductorCustomLineItem resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.isConstruct"></a>

```python
from cdktn_provider_awscc import billingconductor_custom_line_item

billingconductorCustomLineItem.BillingconductorCustomLineItem.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.isTerraformElement"></a>

```python
from cdktn_provider_awscc import billingconductor_custom_line_item

billingconductorCustomLineItem.BillingconductorCustomLineItem.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.isTerraformResource"></a>

```python
from cdktn_provider_awscc import billingconductor_custom_line_item

billingconductorCustomLineItem.BillingconductorCustomLineItem.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import billingconductor_custom_line_item

billingconductorCustomLineItem.BillingconductorCustomLineItem.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a BillingconductorCustomLineItem resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the BillingconductorCustomLineItem to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing BillingconductorCustomLineItem that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billingconductor_custom_line_item#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the BillingconductorCustomLineItem to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.associationSize">association_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.billingPeriodRange">billing_period_range</a></code> | <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference">BillingconductorCustomLineItemBillingPeriodRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.creationTime">creation_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.currencyCode">currency_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.customLineItemChargeDetails">custom_line_item_charge_details</a></code> | <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference">BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.lastModifiedTime">last_modified_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.presentationDetails">presentation_details</a></code> | <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference">BillingconductorCustomLineItemPresentationDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.productCode">product_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsList">BillingconductorCustomLineItemTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.billingGroupArnInput">billing_group_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.billingPeriodRangeInput">billing_period_range_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRange">BillingconductorCustomLineItemBillingPeriodRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.computationRuleInput">computation_rule_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.customLineItemChargeDetailsInput">custom_line_item_charge_details_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetails">BillingconductorCustomLineItemCustomLineItemChargeDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.presentationDetailsInput">presentation_details_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetails">BillingconductorCustomLineItemPresentationDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTags">BillingconductorCustomLineItemTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.billingGroupArn">billing_group_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.computationRule">computation_rule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `association_size`<sup>Required</sup> <a name="association_size" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.associationSize"></a>

```python
association_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `billing_period_range`<sup>Required</sup> <a name="billing_period_range" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.billingPeriodRange"></a>

```python
billing_period_range: BillingconductorCustomLineItemBillingPeriodRangeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference">BillingconductorCustomLineItemBillingPeriodRangeOutputReference</a>

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.creationTime"></a>

```python
creation_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `currency_code`<sup>Required</sup> <a name="currency_code" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.currencyCode"></a>

```python
currency_code: str
```

- *Type:* str

---

##### `custom_line_item_charge_details`<sup>Required</sup> <a name="custom_line_item_charge_details" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.customLineItemChargeDetails"></a>

```python
custom_line_item_charge_details: BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference">BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_modified_time`<sup>Required</sup> <a name="last_modified_time" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.lastModifiedTime"></a>

```python
last_modified_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `presentation_details`<sup>Required</sup> <a name="presentation_details" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.presentationDetails"></a>

```python
presentation_details: BillingconductorCustomLineItemPresentationDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference">BillingconductorCustomLineItemPresentationDetailsOutputReference</a>

---

##### `product_code`<sup>Required</sup> <a name="product_code" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.productCode"></a>

```python
product_code: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.tags"></a>

```python
tags: BillingconductorCustomLineItemTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsList">BillingconductorCustomLineItemTagsList</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `billing_group_arn_input`<sup>Optional</sup> <a name="billing_group_arn_input" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.billingGroupArnInput"></a>

```python
billing_group_arn_input: str
```

- *Type:* str

---

##### `billing_period_range_input`<sup>Optional</sup> <a name="billing_period_range_input" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.billingPeriodRangeInput"></a>

```python
billing_period_range_input: IResolvable | BillingconductorCustomLineItemBillingPeriodRange
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRange">BillingconductorCustomLineItemBillingPeriodRange</a>

---

##### `computation_rule_input`<sup>Optional</sup> <a name="computation_rule_input" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.computationRuleInput"></a>

```python
computation_rule_input: str
```

- *Type:* str

---

##### `custom_line_item_charge_details_input`<sup>Optional</sup> <a name="custom_line_item_charge_details_input" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.customLineItemChargeDetailsInput"></a>

```python
custom_line_item_charge_details_input: IResolvable | BillingconductorCustomLineItemCustomLineItemChargeDetails
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetails">BillingconductorCustomLineItemCustomLineItemChargeDetails</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `presentation_details_input`<sup>Optional</sup> <a name="presentation_details_input" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.presentationDetailsInput"></a>

```python
presentation_details_input: IResolvable | BillingconductorCustomLineItemPresentationDetails
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetails">BillingconductorCustomLineItemPresentationDetails</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[BillingconductorCustomLineItemTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTags">BillingconductorCustomLineItemTags</a>]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `billing_group_arn`<sup>Required</sup> <a name="billing_group_arn" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.billingGroupArn"></a>

```python
billing_group_arn: str
```

- *Type:* str

---

##### `computation_rule`<sup>Required</sup> <a name="computation_rule" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.computationRule"></a>

```python
computation_rule: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItem.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BillingconductorCustomLineItemBillingPeriodRange <a name="BillingconductorCustomLineItemBillingPeriodRange" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRange.Initializer"></a>

```python
from cdktn_provider_awscc import billingconductor_custom_line_item

billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRange(
  exclusive_end_billing_period: str = None,
  inclusive_start_billing_period: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRange.property.exclusiveEndBillingPeriod">exclusive_end_billing_period</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billingconductor_custom_line_item#exclusive_end_billing_period BillingconductorCustomLineItem#exclusive_end_billing_period}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRange.property.inclusiveStartBillingPeriod">inclusive_start_billing_period</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billingconductor_custom_line_item#inclusive_start_billing_period BillingconductorCustomLineItem#inclusive_start_billing_period}. |

---

##### `exclusive_end_billing_period`<sup>Optional</sup> <a name="exclusive_end_billing_period" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRange.property.exclusiveEndBillingPeriod"></a>

```python
exclusive_end_billing_period: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billingconductor_custom_line_item#exclusive_end_billing_period BillingconductorCustomLineItem#exclusive_end_billing_period}.

---

##### `inclusive_start_billing_period`<sup>Optional</sup> <a name="inclusive_start_billing_period" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRange.property.inclusiveStartBillingPeriod"></a>

```python
inclusive_start_billing_period: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billingconductor_custom_line_item#inclusive_start_billing_period BillingconductorCustomLineItem#inclusive_start_billing_period}.

---

### BillingconductorCustomLineItemConfig <a name="BillingconductorCustomLineItemConfig" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.Initializer"></a>

```python
from cdktn_provider_awscc import billingconductor_custom_line_item

billingconductorCustomLineItem.BillingconductorCustomLineItemConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  billing_group_arn: str,
  name: str,
  account_id: str = None,
  billing_period_range: BillingconductorCustomLineItemBillingPeriodRange = None,
  computation_rule: str = None,
  custom_line_item_charge_details: BillingconductorCustomLineItemCustomLineItemChargeDetails = None,
  description: str = None,
  presentation_details: BillingconductorCustomLineItemPresentationDetails = None,
  tags: IResolvable | typing.List[BillingconductorCustomLineItemTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.billingGroupArn">billing_group_arn</a></code> | <code>str</code> | Billing Group ARN. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billingconductor_custom_line_item#name BillingconductorCustomLineItem#name}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.accountId">account_id</a></code> | <code>str</code> | The account which this custom line item will be charged to. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.billingPeriodRange">billing_period_range</a></code> | <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRange">BillingconductorCustomLineItemBillingPeriodRange</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billingconductor_custom_line_item#billing_period_range BillingconductorCustomLineItem#billing_period_range}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.computationRule">computation_rule</a></code> | <code>str</code> | The display settings of the Custom Line Item. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.customLineItemChargeDetails">custom_line_item_charge_details</a></code> | <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetails">BillingconductorCustomLineItemCustomLineItemChargeDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billingconductor_custom_line_item#custom_line_item_charge_details BillingconductorCustomLineItem#custom_line_item_charge_details}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billingconductor_custom_line_item#description BillingconductorCustomLineItem#description}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.presentationDetails">presentation_details</a></code> | <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetails">BillingconductorCustomLineItemPresentationDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billingconductor_custom_line_item#presentation_details BillingconductorCustomLineItem#presentation_details}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTags">BillingconductorCustomLineItemTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billingconductor_custom_line_item#tags BillingconductorCustomLineItem#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `billing_group_arn`<sup>Required</sup> <a name="billing_group_arn" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.billingGroupArn"></a>

```python
billing_group_arn: str
```

- *Type:* str

Billing Group ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billingconductor_custom_line_item#billing_group_arn BillingconductorCustomLineItem#billing_group_arn}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billingconductor_custom_line_item#name BillingconductorCustomLineItem#name}.

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

The account which this custom line item will be charged to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billingconductor_custom_line_item#account_id BillingconductorCustomLineItem#account_id}

---

##### `billing_period_range`<sup>Optional</sup> <a name="billing_period_range" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.billingPeriodRange"></a>

```python
billing_period_range: BillingconductorCustomLineItemBillingPeriodRange
```

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRange">BillingconductorCustomLineItemBillingPeriodRange</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billingconductor_custom_line_item#billing_period_range BillingconductorCustomLineItem#billing_period_range}.

---

##### `computation_rule`<sup>Optional</sup> <a name="computation_rule" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.computationRule"></a>

```python
computation_rule: str
```

- *Type:* str

The display settings of the Custom Line Item.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billingconductor_custom_line_item#computation_rule BillingconductorCustomLineItem#computation_rule}

---

##### `custom_line_item_charge_details`<sup>Optional</sup> <a name="custom_line_item_charge_details" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.customLineItemChargeDetails"></a>

```python
custom_line_item_charge_details: BillingconductorCustomLineItemCustomLineItemChargeDetails
```

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetails">BillingconductorCustomLineItemCustomLineItemChargeDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billingconductor_custom_line_item#custom_line_item_charge_details BillingconductorCustomLineItem#custom_line_item_charge_details}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billingconductor_custom_line_item#description BillingconductorCustomLineItem#description}.

---

##### `presentation_details`<sup>Optional</sup> <a name="presentation_details" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.presentationDetails"></a>

```python
presentation_details: BillingconductorCustomLineItemPresentationDetails
```

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetails">BillingconductorCustomLineItemPresentationDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billingconductor_custom_line_item#presentation_details BillingconductorCustomLineItem#presentation_details}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[BillingconductorCustomLineItemTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTags">BillingconductorCustomLineItemTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billingconductor_custom_line_item#tags BillingconductorCustomLineItem#tags}.

---

### BillingconductorCustomLineItemCustomLineItemChargeDetails <a name="BillingconductorCustomLineItemCustomLineItemChargeDetails" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetails.Initializer"></a>

```python
from cdktn_provider_awscc import billingconductor_custom_line_item

billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetails(
  flat: BillingconductorCustomLineItemCustomLineItemChargeDetailsFlat = None,
  line_item_filters: IResolvable | typing.List[BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters] = None,
  percentage: BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentage = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetails.property.flat">flat</a></code> | <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlat">BillingconductorCustomLineItemCustomLineItemChargeDetailsFlat</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billingconductor_custom_line_item#flat BillingconductorCustomLineItem#flat}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetails.property.lineItemFilters">line_item_filters</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters">BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billingconductor_custom_line_item#line_item_filters BillingconductorCustomLineItem#line_item_filters}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetails.property.percentage">percentage</a></code> | <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentage">BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentage</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billingconductor_custom_line_item#percentage BillingconductorCustomLineItem#percentage}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetails.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billingconductor_custom_line_item#type BillingconductorCustomLineItem#type}. |

---

##### `flat`<sup>Optional</sup> <a name="flat" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetails.property.flat"></a>

```python
flat: BillingconductorCustomLineItemCustomLineItemChargeDetailsFlat
```

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlat">BillingconductorCustomLineItemCustomLineItemChargeDetailsFlat</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billingconductor_custom_line_item#flat BillingconductorCustomLineItem#flat}.

---

##### `line_item_filters`<sup>Optional</sup> <a name="line_item_filters" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetails.property.lineItemFilters"></a>

```python
line_item_filters: IResolvable | typing.List[BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters">BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billingconductor_custom_line_item#line_item_filters BillingconductorCustomLineItem#line_item_filters}.

---

##### `percentage`<sup>Optional</sup> <a name="percentage" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetails.property.percentage"></a>

```python
percentage: BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentage
```

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentage">BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentage</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billingconductor_custom_line_item#percentage BillingconductorCustomLineItem#percentage}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetails.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billingconductor_custom_line_item#type BillingconductorCustomLineItem#type}.

---

### BillingconductorCustomLineItemCustomLineItemChargeDetailsFlat <a name="BillingconductorCustomLineItemCustomLineItemChargeDetailsFlat" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlat.Initializer"></a>

```python
from cdktn_provider_awscc import billingconductor_custom_line_item

billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlat(
  charge_value: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlat.property.chargeValue">charge_value</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billingconductor_custom_line_item#charge_value BillingconductorCustomLineItem#charge_value}. |

---

##### `charge_value`<sup>Optional</sup> <a name="charge_value" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlat.property.chargeValue"></a>

```python
charge_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billingconductor_custom_line_item#charge_value BillingconductorCustomLineItem#charge_value}.

---

### BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters <a name="BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters.Initializer"></a>

```python
from cdktn_provider_awscc import billingconductor_custom_line_item

billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters(
  attribute: str = None,
  attribute_values: typing.List[str] = None,
  match_option: str = None,
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters.property.attribute">attribute</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billingconductor_custom_line_item#attribute BillingconductorCustomLineItem#attribute}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters.property.attributeValues">attribute_values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billingconductor_custom_line_item#attribute_values BillingconductorCustomLineItem#attribute_values}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters.property.matchOption">match_option</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billingconductor_custom_line_item#match_option BillingconductorCustomLineItem#match_option}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billingconductor_custom_line_item#values BillingconductorCustomLineItem#values}. |

---

##### `attribute`<sup>Optional</sup> <a name="attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters.property.attribute"></a>

```python
attribute: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billingconductor_custom_line_item#attribute BillingconductorCustomLineItem#attribute}.

---

##### `attribute_values`<sup>Optional</sup> <a name="attribute_values" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters.property.attributeValues"></a>

```python
attribute_values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billingconductor_custom_line_item#attribute_values BillingconductorCustomLineItem#attribute_values}.

---

##### `match_option`<sup>Optional</sup> <a name="match_option" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters.property.matchOption"></a>

```python
match_option: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billingconductor_custom_line_item#match_option BillingconductorCustomLineItem#match_option}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billingconductor_custom_line_item#values BillingconductorCustomLineItem#values}.

---

### BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentage <a name="BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentage" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentage.Initializer"></a>

```python
from cdktn_provider_awscc import billingconductor_custom_line_item

billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentage(
  child_associated_resources: typing.List[str] = None,
  percentage_value: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentage.property.childAssociatedResources">child_associated_resources</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billingconductor_custom_line_item#child_associated_resources BillingconductorCustomLineItem#child_associated_resources}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentage.property.percentageValue">percentage_value</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billingconductor_custom_line_item#percentage_value BillingconductorCustomLineItem#percentage_value}. |

---

##### `child_associated_resources`<sup>Optional</sup> <a name="child_associated_resources" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentage.property.childAssociatedResources"></a>

```python
child_associated_resources: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billingconductor_custom_line_item#child_associated_resources BillingconductorCustomLineItem#child_associated_resources}.

---

##### `percentage_value`<sup>Optional</sup> <a name="percentage_value" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentage.property.percentageValue"></a>

```python
percentage_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billingconductor_custom_line_item#percentage_value BillingconductorCustomLineItem#percentage_value}.

---

### BillingconductorCustomLineItemPresentationDetails <a name="BillingconductorCustomLineItemPresentationDetails" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetails.Initializer"></a>

```python
from cdktn_provider_awscc import billingconductor_custom_line_item

billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetails(
  service: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetails.property.service">service</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billingconductor_custom_line_item#service BillingconductorCustomLineItem#service}. |

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetails.property.service"></a>

```python
service: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billingconductor_custom_line_item#service BillingconductorCustomLineItem#service}.

---

### BillingconductorCustomLineItemTags <a name="BillingconductorCustomLineItemTags" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTags.Initializer"></a>

```python
from cdktn_provider_awscc import billingconductor_custom_line_item

billingconductorCustomLineItem.BillingconductorCustomLineItemTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billingconductor_custom_line_item#key BillingconductorCustomLineItem#key}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billingconductor_custom_line_item#value BillingconductorCustomLineItem#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billingconductor_custom_line_item#key BillingconductorCustomLineItem#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billingconductor_custom_line_item#value BillingconductorCustomLineItem#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### BillingconductorCustomLineItemBillingPeriodRangeOutputReference <a name="BillingconductorCustomLineItemBillingPeriodRangeOutputReference" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import billingconductor_custom_line_item

billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.resetExclusiveEndBillingPeriod">reset_exclusive_end_billing_period</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.resetInclusiveStartBillingPeriod">reset_inclusive_start_billing_period</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_exclusive_end_billing_period` <a name="reset_exclusive_end_billing_period" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.resetExclusiveEndBillingPeriod"></a>

```python
def reset_exclusive_end_billing_period() -> None
```

##### `reset_inclusive_start_billing_period` <a name="reset_inclusive_start_billing_period" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.resetInclusiveStartBillingPeriod"></a>

```python
def reset_inclusive_start_billing_period() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.property.exclusiveEndBillingPeriodInput">exclusive_end_billing_period_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.property.inclusiveStartBillingPeriodInput">inclusive_start_billing_period_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.property.exclusiveEndBillingPeriod">exclusive_end_billing_period</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.property.inclusiveStartBillingPeriod">inclusive_start_billing_period</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRange">BillingconductorCustomLineItemBillingPeriodRange</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `exclusive_end_billing_period_input`<sup>Optional</sup> <a name="exclusive_end_billing_period_input" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.property.exclusiveEndBillingPeriodInput"></a>

```python
exclusive_end_billing_period_input: str
```

- *Type:* str

---

##### `inclusive_start_billing_period_input`<sup>Optional</sup> <a name="inclusive_start_billing_period_input" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.property.inclusiveStartBillingPeriodInput"></a>

```python
inclusive_start_billing_period_input: str
```

- *Type:* str

---

##### `exclusive_end_billing_period`<sup>Required</sup> <a name="exclusive_end_billing_period" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.property.exclusiveEndBillingPeriod"></a>

```python
exclusive_end_billing_period: str
```

- *Type:* str

---

##### `inclusive_start_billing_period`<sup>Required</sup> <a name="inclusive_start_billing_period" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.property.inclusiveStartBillingPeriod"></a>

```python
inclusive_start_billing_period: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRangeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BillingconductorCustomLineItemBillingPeriodRange
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemBillingPeriodRange">BillingconductorCustomLineItemBillingPeriodRange</a>

---


### BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference <a name="BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import billingconductor_custom_line_item

billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.resetChargeValue">reset_charge_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_charge_value` <a name="reset_charge_value" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.resetChargeValue"></a>

```python
def reset_charge_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.property.chargeValueInput">charge_value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.property.chargeValue">charge_value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlat">BillingconductorCustomLineItemCustomLineItemChargeDetailsFlat</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `charge_value_input`<sup>Optional</sup> <a name="charge_value_input" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.property.chargeValueInput"></a>

```python
charge_value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `charge_value`<sup>Required</sup> <a name="charge_value" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.property.chargeValue"></a>

```python
charge_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BillingconductorCustomLineItemCustomLineItemChargeDetailsFlat
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlat">BillingconductorCustomLineItemCustomLineItemChargeDetailsFlat</a>

---


### BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList <a name="BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.Initializer"></a>

```python
from cdktn_provider_awscc import billingconductor_custom_line_item

billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters">BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters">BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters</a>]

---


### BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference <a name="BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import billingconductor_custom_line_item

billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.resetAttribute">reset_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.resetAttributeValues">reset_attribute_values</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.resetMatchOption">reset_match_option</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_attribute` <a name="reset_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.resetAttribute"></a>

```python
def reset_attribute() -> None
```

##### `reset_attribute_values` <a name="reset_attribute_values" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.resetAttributeValues"></a>

```python
def reset_attribute_values() -> None
```

##### `reset_match_option` <a name="reset_match_option" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.resetMatchOption"></a>

```python
def reset_match_option() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.property.attributeInput">attribute_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.property.attributeValuesInput">attribute_values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.property.matchOptionInput">match_option_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.property.attribute">attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.property.attributeValues">attribute_values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.property.matchOption">match_option</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters">BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attribute_input`<sup>Optional</sup> <a name="attribute_input" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.property.attributeInput"></a>

```python
attribute_input: str
```

- *Type:* str

---

##### `attribute_values_input`<sup>Optional</sup> <a name="attribute_values_input" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.property.attributeValuesInput"></a>

```python
attribute_values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `match_option_input`<sup>Optional</sup> <a name="match_option_input" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.property.matchOptionInput"></a>

```python
match_option_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.property.attribute"></a>

```python
attribute: str
```

- *Type:* str

---

##### `attribute_values`<sup>Required</sup> <a name="attribute_values" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.property.attributeValues"></a>

```python
attribute_values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `match_option`<sup>Required</sup> <a name="match_option" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.property.matchOption"></a>

```python
match_option: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters">BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters</a>

---


### BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference <a name="BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import billingconductor_custom_line_item

billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.putFlat">put_flat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.putLineItemFilters">put_line_item_filters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.putPercentage">put_percentage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.resetFlat">reset_flat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.resetLineItemFilters">reset_line_item_filters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.resetPercentage">reset_percentage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_flat` <a name="put_flat" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.putFlat"></a>

```python
def put_flat(
  charge_value: typing.Union[int, float] = None
) -> None
```

###### `charge_value`<sup>Optional</sup> <a name="charge_value" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.putFlat.parameter.chargeValue"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billingconductor_custom_line_item#charge_value BillingconductorCustomLineItem#charge_value}.

---

##### `put_line_item_filters` <a name="put_line_item_filters" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.putLineItemFilters"></a>

```python
def put_line_item_filters(
  value: IResolvable | typing.List[BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.putLineItemFilters.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters">BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters</a>]

---

##### `put_percentage` <a name="put_percentage" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.putPercentage"></a>

```python
def put_percentage(
  child_associated_resources: typing.List[str] = None,
  percentage_value: typing.Union[int, float] = None
) -> None
```

###### `child_associated_resources`<sup>Optional</sup> <a name="child_associated_resources" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.putPercentage.parameter.childAssociatedResources"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billingconductor_custom_line_item#child_associated_resources BillingconductorCustomLineItem#child_associated_resources}.

---

###### `percentage_value`<sup>Optional</sup> <a name="percentage_value" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.putPercentage.parameter.percentageValue"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/billingconductor_custom_line_item#percentage_value BillingconductorCustomLineItem#percentage_value}.

---

##### `reset_flat` <a name="reset_flat" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.resetFlat"></a>

```python
def reset_flat() -> None
```

##### `reset_line_item_filters` <a name="reset_line_item_filters" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.resetLineItemFilters"></a>

```python
def reset_line_item_filters() -> None
```

##### `reset_percentage` <a name="reset_percentage" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.resetPercentage"></a>

```python
def reset_percentage() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.property.flat">flat</a></code> | <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference">BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.property.lineItemFilters">line_item_filters</a></code> | <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList">BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.property.percentage">percentage</a></code> | <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference">BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.property.flatInput">flat_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlat">BillingconductorCustomLineItemCustomLineItemChargeDetailsFlat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.property.lineItemFiltersInput">line_item_filters_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters">BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.property.percentageInput">percentage_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentage">BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetails">BillingconductorCustomLineItemCustomLineItemChargeDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `flat`<sup>Required</sup> <a name="flat" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.property.flat"></a>

```python
flat: BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference">BillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference</a>

---

##### `line_item_filters`<sup>Required</sup> <a name="line_item_filters" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.property.lineItemFilters"></a>

```python
line_item_filters: BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList
```

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList">BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList</a>

---

##### `percentage`<sup>Required</sup> <a name="percentage" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.property.percentage"></a>

```python
percentage: BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference">BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference</a>

---

##### `flat_input`<sup>Optional</sup> <a name="flat_input" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.property.flatInput"></a>

```python
flat_input: IResolvable | BillingconductorCustomLineItemCustomLineItemChargeDetailsFlat
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsFlat">BillingconductorCustomLineItemCustomLineItemChargeDetailsFlat</a>

---

##### `line_item_filters_input`<sup>Optional</sup> <a name="line_item_filters_input" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.property.lineItemFiltersInput"></a>

```python
line_item_filters_input: IResolvable | typing.List[BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters">BillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters</a>]

---

##### `percentage_input`<sup>Optional</sup> <a name="percentage_input" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.property.percentageInput"></a>

```python
percentage_input: IResolvable | BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentage
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentage">BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentage</a>

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BillingconductorCustomLineItemCustomLineItemChargeDetails
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetails">BillingconductorCustomLineItemCustomLineItemChargeDetails</a>

---


### BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference <a name="BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import billingconductor_custom_line_item

billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.resetChildAssociatedResources">reset_child_associated_resources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.resetPercentageValue">reset_percentage_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_child_associated_resources` <a name="reset_child_associated_resources" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.resetChildAssociatedResources"></a>

```python
def reset_child_associated_resources() -> None
```

##### `reset_percentage_value` <a name="reset_percentage_value" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.resetPercentageValue"></a>

```python
def reset_percentage_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.property.childAssociatedResourcesInput">child_associated_resources_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.property.percentageValueInput">percentage_value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.property.childAssociatedResources">child_associated_resources</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.property.percentageValue">percentage_value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentage">BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `child_associated_resources_input`<sup>Optional</sup> <a name="child_associated_resources_input" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.property.childAssociatedResourcesInput"></a>

```python
child_associated_resources_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `percentage_value_input`<sup>Optional</sup> <a name="percentage_value_input" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.property.percentageValueInput"></a>

```python
percentage_value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `child_associated_resources`<sup>Required</sup> <a name="child_associated_resources" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.property.childAssociatedResources"></a>

```python
child_associated_resources: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `percentage_value`<sup>Required</sup> <a name="percentage_value" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.property.percentageValue"></a>

```python
percentage_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentage
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentage">BillingconductorCustomLineItemCustomLineItemChargeDetailsPercentage</a>

---


### BillingconductorCustomLineItemPresentationDetailsOutputReference <a name="BillingconductorCustomLineItemPresentationDetailsOutputReference" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import billingconductor_custom_line_item

billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.resetService">reset_service</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_service` <a name="reset_service" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.resetService"></a>

```python
def reset_service() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.property.serviceInput">service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.property.service">service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetails">BillingconductorCustomLineItemPresentationDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `service_input`<sup>Optional</sup> <a name="service_input" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.property.serviceInput"></a>

```python
service_input: str
```

- *Type:* str

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.property.service"></a>

```python
service: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetailsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BillingconductorCustomLineItemPresentationDetails
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemPresentationDetails">BillingconductorCustomLineItemPresentationDetails</a>

---


### BillingconductorCustomLineItemTagsList <a name="BillingconductorCustomLineItemTagsList" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import billingconductor_custom_line_item

billingconductorCustomLineItem.BillingconductorCustomLineItemTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BillingconductorCustomLineItemTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTags">BillingconductorCustomLineItemTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BillingconductorCustomLineItemTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTags">BillingconductorCustomLineItemTags</a>]

---


### BillingconductorCustomLineItemTagsOutputReference <a name="BillingconductorCustomLineItemTagsOutputReference" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import billingconductor_custom_line_item

billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTags">BillingconductorCustomLineItemTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BillingconductorCustomLineItemTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.billingconductorCustomLineItem.BillingconductorCustomLineItemTags">BillingconductorCustomLineItemTags</a>

---



