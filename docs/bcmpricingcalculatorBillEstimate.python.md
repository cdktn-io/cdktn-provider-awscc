# `bcmpricingcalculatorBillEstimate` Submodule <a name="`bcmpricingcalculatorBillEstimate` Submodule" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BcmpricingcalculatorBillEstimate <a name="BcmpricingcalculatorBillEstimate" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/bcmpricingcalculator_bill_estimate awscc_bcmpricingcalculator_bill_estimate}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.Initializer"></a>

```python
from cdktn_provider_awscc import bcmpricingcalculator_bill_estimate

bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate(
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
  bill_scenario_id: str = None,
  expires_at: str = None,
  tags: IResolvable | typing.List[BcmpricingcalculatorBillEstimateTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the bill estimate. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.Initializer.parameter.billScenarioId">bill_scenario_id</a></code> | <code>str</code> | The unique identifier of the bill scenario this estimate is based on. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.Initializer.parameter.expiresAt">expires_at</a></code> | <code>str</code> | The timestamp when the bill estimate expires. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTags">BcmpricingcalculatorBillEstimateTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.Initializer.parameter.name"></a>

- *Type:* str

The name of the bill estimate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/bcmpricingcalculator_bill_estimate#name BcmpricingcalculatorBillEstimate#name}

---

##### `bill_scenario_id`<sup>Optional</sup> <a name="bill_scenario_id" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.Initializer.parameter.billScenarioId"></a>

- *Type:* str

The unique identifier of the bill scenario this estimate is based on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/bcmpricingcalculator_bill_estimate#bill_scenario_id BcmpricingcalculatorBillEstimate#bill_scenario_id}

---

##### `expires_at`<sup>Optional</sup> <a name="expires_at" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.Initializer.parameter.expiresAt"></a>

- *Type:* str

The timestamp when the bill estimate expires.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/bcmpricingcalculator_bill_estimate#expires_at BcmpricingcalculatorBillEstimate#expires_at}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTags">BcmpricingcalculatorBillEstimateTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/bcmpricingcalculator_bill_estimate#tags BcmpricingcalculatorBillEstimate#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.resetBillScenarioId">reset_bill_scenario_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.resetExpiresAt">reset_expires_at</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[BcmpricingcalculatorBillEstimateTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTags">BcmpricingcalculatorBillEstimateTags</a>]

---

##### `reset_bill_scenario_id` <a name="reset_bill_scenario_id" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.resetBillScenarioId"></a>

```python
def reset_bill_scenario_id() -> None
```

##### `reset_expires_at` <a name="reset_expires_at" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.resetExpiresAt"></a>

```python
def reset_expires_at() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a BcmpricingcalculatorBillEstimate resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.isConstruct"></a>

```python
from cdktn_provider_awscc import bcmpricingcalculator_bill_estimate

bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.isTerraformElement"></a>

```python
from cdktn_provider_awscc import bcmpricingcalculator_bill_estimate

bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.isTerraformResource"></a>

```python
from cdktn_provider_awscc import bcmpricingcalculator_bill_estimate

bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import bcmpricingcalculator_bill_estimate

bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a BcmpricingcalculatorBillEstimate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the BcmpricingcalculatorBillEstimate to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing BcmpricingcalculatorBillEstimate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/bcmpricingcalculator_bill_estimate#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the BcmpricingcalculatorBillEstimate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.billEstimateId">bill_estimate_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.billInterval">bill_interval</a></code> | <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference">BcmpricingcalculatorBillEstimateBillIntervalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.costCategoryGroupSharingPreferenceArn">cost_category_group_sharing_preference_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.costCategoryGroupSharingPreferenceEffectiveDate">cost_category_group_sharing_preference_effective_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.groupSharingPreference">group_sharing_preference</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsList">BcmpricingcalculatorBillEstimateTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.billScenarioIdInput">bill_scenario_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.expiresAtInput">expires_at_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTags">BcmpricingcalculatorBillEstimateTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.billScenarioId">bill_scenario_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.expiresAt">expires_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `bill_estimate_id`<sup>Required</sup> <a name="bill_estimate_id" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.billEstimateId"></a>

```python
bill_estimate_id: str
```

- *Type:* str

---

##### `bill_interval`<sup>Required</sup> <a name="bill_interval" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.billInterval"></a>

```python
bill_interval: BcmpricingcalculatorBillEstimateBillIntervalOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference">BcmpricingcalculatorBillEstimateBillIntervalOutputReference</a>

---

##### `cost_category_group_sharing_preference_arn`<sup>Required</sup> <a name="cost_category_group_sharing_preference_arn" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.costCategoryGroupSharingPreferenceArn"></a>

```python
cost_category_group_sharing_preference_arn: str
```

- *Type:* str

---

##### `cost_category_group_sharing_preference_effective_date`<sup>Required</sup> <a name="cost_category_group_sharing_preference_effective_date" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.costCategoryGroupSharingPreferenceEffectiveDate"></a>

```python
cost_category_group_sharing_preference_effective_date: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `group_sharing_preference`<sup>Required</sup> <a name="group_sharing_preference" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.groupSharingPreference"></a>

```python
group_sharing_preference: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.tags"></a>

```python
tags: BcmpricingcalculatorBillEstimateTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsList">BcmpricingcalculatorBillEstimateTagsList</a>

---

##### `bill_scenario_id_input`<sup>Optional</sup> <a name="bill_scenario_id_input" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.billScenarioIdInput"></a>

```python
bill_scenario_id_input: str
```

- *Type:* str

---

##### `expires_at_input`<sup>Optional</sup> <a name="expires_at_input" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.expiresAtInput"></a>

```python
expires_at_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[BcmpricingcalculatorBillEstimateTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTags">BcmpricingcalculatorBillEstimateTags</a>]

---

##### `bill_scenario_id`<sup>Required</sup> <a name="bill_scenario_id" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.billScenarioId"></a>

```python
bill_scenario_id: str
```

- *Type:* str

---

##### `expires_at`<sup>Required</sup> <a name="expires_at" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.expiresAt"></a>

```python
expires_at: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimate.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BcmpricingcalculatorBillEstimateBillInterval <a name="BcmpricingcalculatorBillEstimateBillInterval" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillInterval"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillInterval.Initializer"></a>

```python
from cdktn_provider_awscc import bcmpricingcalculator_bill_estimate

bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillInterval()
```


### BcmpricingcalculatorBillEstimateConfig <a name="BcmpricingcalculatorBillEstimateConfig" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateConfig.Initializer"></a>

```python
from cdktn_provider_awscc import bcmpricingcalculator_bill_estimate

bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  bill_scenario_id: str = None,
  expires_at: str = None,
  tags: IResolvable | typing.List[BcmpricingcalculatorBillEstimateTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateConfig.property.name">name</a></code> | <code>str</code> | The name of the bill estimate. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateConfig.property.billScenarioId">bill_scenario_id</a></code> | <code>str</code> | The unique identifier of the bill scenario this estimate is based on. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateConfig.property.expiresAt">expires_at</a></code> | <code>str</code> | The timestamp when the bill estimate expires. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTags">BcmpricingcalculatorBillEstimateTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the bill estimate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/bcmpricingcalculator_bill_estimate#name BcmpricingcalculatorBillEstimate#name}

---

##### `bill_scenario_id`<sup>Optional</sup> <a name="bill_scenario_id" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateConfig.property.billScenarioId"></a>

```python
bill_scenario_id: str
```

- *Type:* str

The unique identifier of the bill scenario this estimate is based on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/bcmpricingcalculator_bill_estimate#bill_scenario_id BcmpricingcalculatorBillEstimate#bill_scenario_id}

---

##### `expires_at`<sup>Optional</sup> <a name="expires_at" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateConfig.property.expiresAt"></a>

```python
expires_at: str
```

- *Type:* str

The timestamp when the bill estimate expires.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/bcmpricingcalculator_bill_estimate#expires_at BcmpricingcalculatorBillEstimate#expires_at}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[BcmpricingcalculatorBillEstimateTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTags">BcmpricingcalculatorBillEstimateTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/bcmpricingcalculator_bill_estimate#tags BcmpricingcalculatorBillEstimate#tags}

---

### BcmpricingcalculatorBillEstimateTags <a name="BcmpricingcalculatorBillEstimateTags" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTags.Initializer"></a>

```python
from cdktn_provider_awscc import bcmpricingcalculator_bill_estimate

bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/bcmpricingcalculator_bill_estimate#key BcmpricingcalculatorBillEstimate#key}. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/bcmpricingcalculator_bill_estimate#value BcmpricingcalculatorBillEstimate#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/bcmpricingcalculator_bill_estimate#key BcmpricingcalculatorBillEstimate#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/bcmpricingcalculator_bill_estimate#value BcmpricingcalculatorBillEstimate#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### BcmpricingcalculatorBillEstimateBillIntervalOutputReference <a name="BcmpricingcalculatorBillEstimateBillIntervalOutputReference" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bcmpricingcalculator_bill_estimate

bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.property.end">end</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.property.start">start</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillInterval">BcmpricingcalculatorBillEstimateBillInterval</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.property.end"></a>

```python
end: str
```

- *Type:* str

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.property.start"></a>

```python
start: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillIntervalOutputReference.property.internalValue"></a>

```python
internal_value: BcmpricingcalculatorBillEstimateBillInterval
```

- *Type:* <a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateBillInterval">BcmpricingcalculatorBillEstimateBillInterval</a>

---


### BcmpricingcalculatorBillEstimateTagsList <a name="BcmpricingcalculatorBillEstimateTagsList" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import bcmpricingcalculator_bill_estimate

bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BcmpricingcalculatorBillEstimateTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTags">BcmpricingcalculatorBillEstimateTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BcmpricingcalculatorBillEstimateTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTags">BcmpricingcalculatorBillEstimateTags</a>]

---


### BcmpricingcalculatorBillEstimateTagsOutputReference <a name="BcmpricingcalculatorBillEstimateTagsOutputReference" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bcmpricingcalculator_bill_estimate

bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTags">BcmpricingcalculatorBillEstimateTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BcmpricingcalculatorBillEstimateTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bcmpricingcalculatorBillEstimate.BcmpricingcalculatorBillEstimateTags">BcmpricingcalculatorBillEstimateTags</a>

---



