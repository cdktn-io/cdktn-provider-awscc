# `bcmpricingcalculatorWorkloadEstimate` Submodule <a name="`bcmpricingcalculatorWorkloadEstimate` Submodule" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BcmpricingcalculatorWorkloadEstimate <a name="BcmpricingcalculatorWorkloadEstimate" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcmpricingcalculator_workload_estimate awscc_bcmpricingcalculator_workload_estimate}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.Initializer"></a>

```python
from cdktn_provider_awscc import bcmpricingcalculator_workload_estimate

bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate(
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
  expires_at: str = None,
  rate_type: str = None,
  tags: IResolvable | typing.List[BcmpricingcalculatorWorkloadEstimateTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the workload estimate. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.Initializer.parameter.expiresAt">expires_at</a></code> | <code>str</code> | The timestamp when the workload estimate will expire. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.Initializer.parameter.rateType">rate_type</a></code> | <code>str</code> | The type of pricing rates used for the estimate. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTags">BcmpricingcalculatorWorkloadEstimateTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.Initializer.parameter.name"></a>

- *Type:* str

The name of the workload estimate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcmpricingcalculator_workload_estimate#name BcmpricingcalculatorWorkloadEstimate#name}

---

##### `expires_at`<sup>Optional</sup> <a name="expires_at" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.Initializer.parameter.expiresAt"></a>

- *Type:* str

The timestamp when the workload estimate will expire.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcmpricingcalculator_workload_estimate#expires_at BcmpricingcalculatorWorkloadEstimate#expires_at}

---

##### `rate_type`<sup>Optional</sup> <a name="rate_type" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.Initializer.parameter.rateType"></a>

- *Type:* str

The type of pricing rates used for the estimate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcmpricingcalculator_workload_estimate#rate_type BcmpricingcalculatorWorkloadEstimate#rate_type}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTags">BcmpricingcalculatorWorkloadEstimateTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcmpricingcalculator_workload_estimate#tags BcmpricingcalculatorWorkloadEstimate#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.resetExpiresAt">reset_expires_at</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.resetRateType">reset_rate_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[BcmpricingcalculatorWorkloadEstimateTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTags">BcmpricingcalculatorWorkloadEstimateTags</a>]

---

##### `reset_expires_at` <a name="reset_expires_at" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.resetExpiresAt"></a>

```python
def reset_expires_at() -> None
```

##### `reset_rate_type` <a name="reset_rate_type" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.resetRateType"></a>

```python
def reset_rate_type() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a BcmpricingcalculatorWorkloadEstimate resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.isConstruct"></a>

```python
from cdktn_provider_awscc import bcmpricingcalculator_workload_estimate

bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.isTerraformElement"></a>

```python
from cdktn_provider_awscc import bcmpricingcalculator_workload_estimate

bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.isTerraformResource"></a>

```python
from cdktn_provider_awscc import bcmpricingcalculator_workload_estimate

bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import bcmpricingcalculator_workload_estimate

bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a BcmpricingcalculatorWorkloadEstimate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the BcmpricingcalculatorWorkloadEstimate to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing BcmpricingcalculatorWorkloadEstimate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcmpricingcalculator_workload_estimate#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the BcmpricingcalculatorWorkloadEstimate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.costCurrency">cost_currency</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.failureMessage">failure_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.rateTimestamp">rate_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsList">BcmpricingcalculatorWorkloadEstimateTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.totalCost">total_cost</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.workloadEstimateId">workload_estimate_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.expiresAtInput">expires_at_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.rateTypeInput">rate_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTags">BcmpricingcalculatorWorkloadEstimateTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.expiresAt">expires_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.rateType">rate_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `cost_currency`<sup>Required</sup> <a name="cost_currency" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.costCurrency"></a>

```python
cost_currency: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `failure_message`<sup>Required</sup> <a name="failure_message" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.failureMessage"></a>

```python
failure_message: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `rate_timestamp`<sup>Required</sup> <a name="rate_timestamp" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.rateTimestamp"></a>

```python
rate_timestamp: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.tags"></a>

```python
tags: BcmpricingcalculatorWorkloadEstimateTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsList">BcmpricingcalculatorWorkloadEstimateTagsList</a>

---

##### `total_cost`<sup>Required</sup> <a name="total_cost" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.totalCost"></a>

```python
total_cost: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `workload_estimate_id`<sup>Required</sup> <a name="workload_estimate_id" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.workloadEstimateId"></a>

```python
workload_estimate_id: str
```

- *Type:* str

---

##### `expires_at_input`<sup>Optional</sup> <a name="expires_at_input" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.expiresAtInput"></a>

```python
expires_at_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `rate_type_input`<sup>Optional</sup> <a name="rate_type_input" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.rateTypeInput"></a>

```python
rate_type_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[BcmpricingcalculatorWorkloadEstimateTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTags">BcmpricingcalculatorWorkloadEstimateTags</a>]

---

##### `expires_at`<sup>Required</sup> <a name="expires_at" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.expiresAt"></a>

```python
expires_at: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `rate_type`<sup>Required</sup> <a name="rate_type" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.rateType"></a>

```python
rate_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimate.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BcmpricingcalculatorWorkloadEstimateConfig <a name="BcmpricingcalculatorWorkloadEstimateConfig" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateConfig.Initializer"></a>

```python
from cdktn_provider_awscc import bcmpricingcalculator_workload_estimate

bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  expires_at: str = None,
  rate_type: str = None,
  tags: IResolvable | typing.List[BcmpricingcalculatorWorkloadEstimateTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateConfig.property.name">name</a></code> | <code>str</code> | The name of the workload estimate. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateConfig.property.expiresAt">expires_at</a></code> | <code>str</code> | The timestamp when the workload estimate will expire. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateConfig.property.rateType">rate_type</a></code> | <code>str</code> | The type of pricing rates used for the estimate. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTags">BcmpricingcalculatorWorkloadEstimateTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the workload estimate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcmpricingcalculator_workload_estimate#name BcmpricingcalculatorWorkloadEstimate#name}

---

##### `expires_at`<sup>Optional</sup> <a name="expires_at" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateConfig.property.expiresAt"></a>

```python
expires_at: str
```

- *Type:* str

The timestamp when the workload estimate will expire.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcmpricingcalculator_workload_estimate#expires_at BcmpricingcalculatorWorkloadEstimate#expires_at}

---

##### `rate_type`<sup>Optional</sup> <a name="rate_type" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateConfig.property.rateType"></a>

```python
rate_type: str
```

- *Type:* str

The type of pricing rates used for the estimate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcmpricingcalculator_workload_estimate#rate_type BcmpricingcalculatorWorkloadEstimate#rate_type}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[BcmpricingcalculatorWorkloadEstimateTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTags">BcmpricingcalculatorWorkloadEstimateTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcmpricingcalculator_workload_estimate#tags BcmpricingcalculatorWorkloadEstimate#tags}

---

### BcmpricingcalculatorWorkloadEstimateTags <a name="BcmpricingcalculatorWorkloadEstimateTags" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTags.Initializer"></a>

```python
from cdktn_provider_awscc import bcmpricingcalculator_workload_estimate

bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcmpricingcalculator_workload_estimate#key BcmpricingcalculatorWorkloadEstimate#key}. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcmpricingcalculator_workload_estimate#value BcmpricingcalculatorWorkloadEstimate#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcmpricingcalculator_workload_estimate#key BcmpricingcalculatorWorkloadEstimate#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcmpricingcalculator_workload_estimate#value BcmpricingcalculatorWorkloadEstimate#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### BcmpricingcalculatorWorkloadEstimateTagsList <a name="BcmpricingcalculatorWorkloadEstimateTagsList" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import bcmpricingcalculator_workload_estimate

bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BcmpricingcalculatorWorkloadEstimateTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTags">BcmpricingcalculatorWorkloadEstimateTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BcmpricingcalculatorWorkloadEstimateTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTags">BcmpricingcalculatorWorkloadEstimateTags</a>]

---


### BcmpricingcalculatorWorkloadEstimateTagsOutputReference <a name="BcmpricingcalculatorWorkloadEstimateTagsOutputReference" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bcmpricingcalculator_workload_estimate

bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTags">BcmpricingcalculatorWorkloadEstimateTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BcmpricingcalculatorWorkloadEstimateTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bcmpricingcalculatorWorkloadEstimate.BcmpricingcalculatorWorkloadEstimateTags">BcmpricingcalculatorWorkloadEstimateTags</a>

---



