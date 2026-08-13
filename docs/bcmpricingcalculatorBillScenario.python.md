# `bcmpricingcalculatorBillScenario` Submodule <a name="`bcmpricingcalculatorBillScenario` Submodule" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BcmpricingcalculatorBillScenario <a name="BcmpricingcalculatorBillScenario" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bcmpricingcalculator_bill_scenario awscc_bcmpricingcalculator_bill_scenario}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.Initializer"></a>

```python
from cdktn_provider_awscc import bcmpricingcalculator_bill_scenario

bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  cost_category_group_sharing_preference_arn: str = None,
  expires_at: str = None,
  group_sharing_preference: str = None,
  name: str = None,
  tags: IResolvable | typing.List[BcmpricingcalculatorBillScenarioTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.Initializer.parameter.costCategoryGroupSharingPreferenceArn">cost_category_group_sharing_preference_arn</a></code> | <code>str</code> | The ARN of the cost category group sharing preference. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.Initializer.parameter.expiresAt">expires_at</a></code> | <code>str</code> | The timestamp when the bill scenario expires. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.Initializer.parameter.groupSharingPreference">group_sharing_preference</a></code> | <code>str</code> | The group sharing preference for the bill scenario. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the bill scenario. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTags">BcmpricingcalculatorBillScenarioTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `cost_category_group_sharing_preference_arn`<sup>Optional</sup> <a name="cost_category_group_sharing_preference_arn" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.Initializer.parameter.costCategoryGroupSharingPreferenceArn"></a>

- *Type:* str

The ARN of the cost category group sharing preference.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bcmpricingcalculator_bill_scenario#cost_category_group_sharing_preference_arn BcmpricingcalculatorBillScenario#cost_category_group_sharing_preference_arn}

---

##### `expires_at`<sup>Optional</sup> <a name="expires_at" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.Initializer.parameter.expiresAt"></a>

- *Type:* str

The timestamp when the bill scenario expires.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bcmpricingcalculator_bill_scenario#expires_at BcmpricingcalculatorBillScenario#expires_at}

---

##### `group_sharing_preference`<sup>Optional</sup> <a name="group_sharing_preference" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.Initializer.parameter.groupSharingPreference"></a>

- *Type:* str

The group sharing preference for the bill scenario.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bcmpricingcalculator_bill_scenario#group_sharing_preference BcmpricingcalculatorBillScenario#group_sharing_preference}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.Initializer.parameter.name"></a>

- *Type:* str

The name of the bill scenario.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bcmpricingcalculator_bill_scenario#name BcmpricingcalculatorBillScenario#name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTags">BcmpricingcalculatorBillScenarioTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bcmpricingcalculator_bill_scenario#tags BcmpricingcalculatorBillScenario#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.resetCostCategoryGroupSharingPreferenceArn">reset_cost_category_group_sharing_preference_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.resetExpiresAt">reset_expires_at</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.resetGroupSharingPreference">reset_group_sharing_preference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[BcmpricingcalculatorBillScenarioTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTags">BcmpricingcalculatorBillScenarioTags</a>]

---

##### `reset_cost_category_group_sharing_preference_arn` <a name="reset_cost_category_group_sharing_preference_arn" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.resetCostCategoryGroupSharingPreferenceArn"></a>

```python
def reset_cost_category_group_sharing_preference_arn() -> None
```

##### `reset_expires_at` <a name="reset_expires_at" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.resetExpiresAt"></a>

```python
def reset_expires_at() -> None
```

##### `reset_group_sharing_preference` <a name="reset_group_sharing_preference" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.resetGroupSharingPreference"></a>

```python
def reset_group_sharing_preference() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a BcmpricingcalculatorBillScenario resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.isConstruct"></a>

```python
from cdktn_provider_awscc import bcmpricingcalculator_bill_scenario

bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.isTerraformElement"></a>

```python
from cdktn_provider_awscc import bcmpricingcalculator_bill_scenario

bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.isTerraformResource"></a>

```python
from cdktn_provider_awscc import bcmpricingcalculator_bill_scenario

bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import bcmpricingcalculator_bill_scenario

bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a BcmpricingcalculatorBillScenario resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the BcmpricingcalculatorBillScenario to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing BcmpricingcalculatorBillScenario that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bcmpricingcalculator_bill_scenario#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the BcmpricingcalculatorBillScenario to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.billInterval">bill_interval</a></code> | <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference">BcmpricingcalculatorBillScenarioBillIntervalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.billScenarioId">bill_scenario_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.failureMessage">failure_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsList">BcmpricingcalculatorBillScenarioTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.costCategoryGroupSharingPreferenceArnInput">cost_category_group_sharing_preference_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.expiresAtInput">expires_at_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.groupSharingPreferenceInput">group_sharing_preference_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTags">BcmpricingcalculatorBillScenarioTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.costCategoryGroupSharingPreferenceArn">cost_category_group_sharing_preference_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.expiresAt">expires_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.groupSharingPreference">group_sharing_preference</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `bill_interval`<sup>Required</sup> <a name="bill_interval" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.billInterval"></a>

```python
bill_interval: BcmpricingcalculatorBillScenarioBillIntervalOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference">BcmpricingcalculatorBillScenarioBillIntervalOutputReference</a>

---

##### `bill_scenario_id`<sup>Required</sup> <a name="bill_scenario_id" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.billScenarioId"></a>

```python
bill_scenario_id: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `failure_message`<sup>Required</sup> <a name="failure_message" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.failureMessage"></a>

```python
failure_message: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.tags"></a>

```python
tags: BcmpricingcalculatorBillScenarioTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsList">BcmpricingcalculatorBillScenarioTagsList</a>

---

##### `cost_category_group_sharing_preference_arn_input`<sup>Optional</sup> <a name="cost_category_group_sharing_preference_arn_input" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.costCategoryGroupSharingPreferenceArnInput"></a>

```python
cost_category_group_sharing_preference_arn_input: str
```

- *Type:* str

---

##### `expires_at_input`<sup>Optional</sup> <a name="expires_at_input" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.expiresAtInput"></a>

```python
expires_at_input: str
```

- *Type:* str

---

##### `group_sharing_preference_input`<sup>Optional</sup> <a name="group_sharing_preference_input" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.groupSharingPreferenceInput"></a>

```python
group_sharing_preference_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[BcmpricingcalculatorBillScenarioTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTags">BcmpricingcalculatorBillScenarioTags</a>]

---

##### `cost_category_group_sharing_preference_arn`<sup>Required</sup> <a name="cost_category_group_sharing_preference_arn" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.costCategoryGroupSharingPreferenceArn"></a>

```python
cost_category_group_sharing_preference_arn: str
```

- *Type:* str

---

##### `expires_at`<sup>Required</sup> <a name="expires_at" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.expiresAt"></a>

```python
expires_at: str
```

- *Type:* str

---

##### `group_sharing_preference`<sup>Required</sup> <a name="group_sharing_preference" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.groupSharingPreference"></a>

```python
group_sharing_preference: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenario.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BcmpricingcalculatorBillScenarioBillInterval <a name="BcmpricingcalculatorBillScenarioBillInterval" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillInterval"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillInterval.Initializer"></a>

```python
from cdktn_provider_awscc import bcmpricingcalculator_bill_scenario

bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillInterval()
```


### BcmpricingcalculatorBillScenarioConfig <a name="BcmpricingcalculatorBillScenarioConfig" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioConfig.Initializer"></a>

```python
from cdktn_provider_awscc import bcmpricingcalculator_bill_scenario

bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  cost_category_group_sharing_preference_arn: str = None,
  expires_at: str = None,
  group_sharing_preference: str = None,
  name: str = None,
  tags: IResolvable | typing.List[BcmpricingcalculatorBillScenarioTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioConfig.property.costCategoryGroupSharingPreferenceArn">cost_category_group_sharing_preference_arn</a></code> | <code>str</code> | The ARN of the cost category group sharing preference. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioConfig.property.expiresAt">expires_at</a></code> | <code>str</code> | The timestamp when the bill scenario expires. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioConfig.property.groupSharingPreference">group_sharing_preference</a></code> | <code>str</code> | The group sharing preference for the bill scenario. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioConfig.property.name">name</a></code> | <code>str</code> | The name of the bill scenario. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTags">BcmpricingcalculatorBillScenarioTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `cost_category_group_sharing_preference_arn`<sup>Optional</sup> <a name="cost_category_group_sharing_preference_arn" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioConfig.property.costCategoryGroupSharingPreferenceArn"></a>

```python
cost_category_group_sharing_preference_arn: str
```

- *Type:* str

The ARN of the cost category group sharing preference.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bcmpricingcalculator_bill_scenario#cost_category_group_sharing_preference_arn BcmpricingcalculatorBillScenario#cost_category_group_sharing_preference_arn}

---

##### `expires_at`<sup>Optional</sup> <a name="expires_at" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioConfig.property.expiresAt"></a>

```python
expires_at: str
```

- *Type:* str

The timestamp when the bill scenario expires.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bcmpricingcalculator_bill_scenario#expires_at BcmpricingcalculatorBillScenario#expires_at}

---

##### `group_sharing_preference`<sup>Optional</sup> <a name="group_sharing_preference" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioConfig.property.groupSharingPreference"></a>

```python
group_sharing_preference: str
```

- *Type:* str

The group sharing preference for the bill scenario.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bcmpricingcalculator_bill_scenario#group_sharing_preference BcmpricingcalculatorBillScenario#group_sharing_preference}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the bill scenario.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bcmpricingcalculator_bill_scenario#name BcmpricingcalculatorBillScenario#name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[BcmpricingcalculatorBillScenarioTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTags">BcmpricingcalculatorBillScenarioTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bcmpricingcalculator_bill_scenario#tags BcmpricingcalculatorBillScenario#tags}

---

### BcmpricingcalculatorBillScenarioTags <a name="BcmpricingcalculatorBillScenarioTags" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTags.Initializer"></a>

```python
from cdktn_provider_awscc import bcmpricingcalculator_bill_scenario

bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bcmpricingcalculator_bill_scenario#key BcmpricingcalculatorBillScenario#key}. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bcmpricingcalculator_bill_scenario#value BcmpricingcalculatorBillScenario#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bcmpricingcalculator_bill_scenario#key BcmpricingcalculatorBillScenario#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bcmpricingcalculator_bill_scenario#value BcmpricingcalculatorBillScenario#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### BcmpricingcalculatorBillScenarioBillIntervalOutputReference <a name="BcmpricingcalculatorBillScenarioBillIntervalOutputReference" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bcmpricingcalculator_bill_scenario

bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.property.end">end</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.property.start">start</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillInterval">BcmpricingcalculatorBillScenarioBillInterval</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.property.end"></a>

```python
end: str
```

- *Type:* str

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.property.start"></a>

```python
start: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillIntervalOutputReference.property.internalValue"></a>

```python
internal_value: BcmpricingcalculatorBillScenarioBillInterval
```

- *Type:* <a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioBillInterval">BcmpricingcalculatorBillScenarioBillInterval</a>

---


### BcmpricingcalculatorBillScenarioTagsList <a name="BcmpricingcalculatorBillScenarioTagsList" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import bcmpricingcalculator_bill_scenario

bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BcmpricingcalculatorBillScenarioTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTags">BcmpricingcalculatorBillScenarioTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BcmpricingcalculatorBillScenarioTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTags">BcmpricingcalculatorBillScenarioTags</a>]

---


### BcmpricingcalculatorBillScenarioTagsOutputReference <a name="BcmpricingcalculatorBillScenarioTagsOutputReference" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bcmpricingcalculator_bill_scenario

bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTags">BcmpricingcalculatorBillScenarioTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BcmpricingcalculatorBillScenarioTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillScenario.BcmpricingcalculatorBillScenarioTags">BcmpricingcalculatorBillScenarioTags</a>

---



