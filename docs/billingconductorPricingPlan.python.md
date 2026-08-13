# `billingconductorPricingPlan` Submodule <a name="`billingconductorPricingPlan` Submodule" id="@cdktn/provider-awscc.billingconductorPricingPlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BillingconductorPricingPlan <a name="BillingconductorPricingPlan" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billingconductor_pricing_plan awscc_billingconductor_pricing_plan}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.Initializer"></a>

```python
from cdktn_provider_awscc import billingconductor_pricing_plan

billingconductorPricingPlan.BillingconductorPricingPlan(
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
  description: str = None,
  pricing_rule_arns: typing.List[str] = None,
  tags: IResolvable | typing.List[BillingconductorPricingPlanTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billingconductor_pricing_plan#name BillingconductorPricingPlan#name}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billingconductor_pricing_plan#description BillingconductorPricingPlan#description}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.Initializer.parameter.pricingRuleArns">pricing_rule_arns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billingconductor_pricing_plan#pricing_rule_arns BillingconductorPricingPlan#pricing_rule_arns}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanTags">BillingconductorPricingPlanTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billingconductor_pricing_plan#tags BillingconductorPricingPlan#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billingconductor_pricing_plan#name BillingconductorPricingPlan#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billingconductor_pricing_plan#description BillingconductorPricingPlan#description}.

---

##### `pricing_rule_arns`<sup>Optional</sup> <a name="pricing_rule_arns" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.Initializer.parameter.pricingRuleArns"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billingconductor_pricing_plan#pricing_rule_arns BillingconductorPricingPlan#pricing_rule_arns}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanTags">BillingconductorPricingPlanTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billingconductor_pricing_plan#tags BillingconductorPricingPlan#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.resetPricingRuleArns">reset_pricing_rule_arns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[BillingconductorPricingPlanTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanTags">BillingconductorPricingPlanTags</a>]

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_pricing_rule_arns` <a name="reset_pricing_rule_arns" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.resetPricingRuleArns"></a>

```python
def reset_pricing_rule_arns() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a BillingconductorPricingPlan resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.isConstruct"></a>

```python
from cdktn_provider_awscc import billingconductor_pricing_plan

billingconductorPricingPlan.BillingconductorPricingPlan.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.isTerraformElement"></a>

```python
from cdktn_provider_awscc import billingconductor_pricing_plan

billingconductorPricingPlan.BillingconductorPricingPlan.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.isTerraformResource"></a>

```python
from cdktn_provider_awscc import billingconductor_pricing_plan

billingconductorPricingPlan.BillingconductorPricingPlan.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import billingconductor_pricing_plan

billingconductorPricingPlan.BillingconductorPricingPlan.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a BillingconductorPricingPlan resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the BillingconductorPricingPlan to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing BillingconductorPricingPlan that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billingconductor_pricing_plan#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the BillingconductorPricingPlan to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.property.creationTime">creation_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.property.lastModifiedTime">last_modified_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.property.size">size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanTagsList">BillingconductorPricingPlanTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.property.pricingRuleArnsInput">pricing_rule_arns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanTags">BillingconductorPricingPlanTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.property.pricingRuleArns">pricing_rule_arns</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.property.creationTime"></a>

```python
creation_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_modified_time`<sup>Required</sup> <a name="last_modified_time" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.property.lastModifiedTime"></a>

```python
last_modified_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.property.tags"></a>

```python
tags: BillingconductorPricingPlanTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanTagsList">BillingconductorPricingPlanTagsList</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `pricing_rule_arns_input`<sup>Optional</sup> <a name="pricing_rule_arns_input" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.property.pricingRuleArnsInput"></a>

```python
pricing_rule_arns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[BillingconductorPricingPlanTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanTags">BillingconductorPricingPlanTags</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `pricing_rule_arns`<sup>Required</sup> <a name="pricing_rule_arns" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.property.pricingRuleArns"></a>

```python
pricing_rule_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlan.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BillingconductorPricingPlanConfig <a name="BillingconductorPricingPlanConfig" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanConfig.Initializer"></a>

```python
from cdktn_provider_awscc import billingconductor_pricing_plan

billingconductorPricingPlan.BillingconductorPricingPlanConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  description: str = None,
  pricing_rule_arns: typing.List[str] = None,
  tags: IResolvable | typing.List[BillingconductorPricingPlanTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billingconductor_pricing_plan#name BillingconductorPricingPlan#name}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billingconductor_pricing_plan#description BillingconductorPricingPlan#description}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanConfig.property.pricingRuleArns">pricing_rule_arns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billingconductor_pricing_plan#pricing_rule_arns BillingconductorPricingPlan#pricing_rule_arns}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanTags">BillingconductorPricingPlanTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billingconductor_pricing_plan#tags BillingconductorPricingPlan#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billingconductor_pricing_plan#name BillingconductorPricingPlan#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billingconductor_pricing_plan#description BillingconductorPricingPlan#description}.

---

##### `pricing_rule_arns`<sup>Optional</sup> <a name="pricing_rule_arns" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanConfig.property.pricingRuleArns"></a>

```python
pricing_rule_arns: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billingconductor_pricing_plan#pricing_rule_arns BillingconductorPricingPlan#pricing_rule_arns}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[BillingconductorPricingPlanTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanTags">BillingconductorPricingPlanTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billingconductor_pricing_plan#tags BillingconductorPricingPlan#tags}.

---

### BillingconductorPricingPlanTags <a name="BillingconductorPricingPlanTags" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanTags.Initializer"></a>

```python
from cdktn_provider_awscc import billingconductor_pricing_plan

billingconductorPricingPlan.BillingconductorPricingPlanTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billingconductor_pricing_plan#key BillingconductorPricingPlan#key}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billingconductor_pricing_plan#value BillingconductorPricingPlan#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billingconductor_pricing_plan#key BillingconductorPricingPlan#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billingconductor_pricing_plan#value BillingconductorPricingPlan#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### BillingconductorPricingPlanTagsList <a name="BillingconductorPricingPlanTagsList" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import billingconductor_pricing_plan

billingconductorPricingPlan.BillingconductorPricingPlanTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BillingconductorPricingPlanTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanTags">BillingconductorPricingPlanTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BillingconductorPricingPlanTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanTags">BillingconductorPricingPlanTags</a>]

---


### BillingconductorPricingPlanTagsOutputReference <a name="BillingconductorPricingPlanTagsOutputReference" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import billingconductor_pricing_plan

billingconductorPricingPlan.BillingconductorPricingPlanTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanTags">BillingconductorPricingPlanTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BillingconductorPricingPlanTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.billingconductorPricingPlan.BillingconductorPricingPlanTags">BillingconductorPricingPlanTags</a>

---



