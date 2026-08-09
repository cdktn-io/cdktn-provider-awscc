# `billingconductorBillingGroup` Submodule <a name="`billingconductorBillingGroup` Submodule" id="@cdktn/provider-awscc.billingconductorBillingGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BillingconductorBillingGroup <a name="BillingconductorBillingGroup" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_billing_group awscc_billingconductor_billing_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.Initializer"></a>

```python
from cdktn_provider_awscc import billingconductor_billing_group

billingconductorBillingGroup.BillingconductorBillingGroup(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_grouping: BillingconductorBillingGroupAccountGrouping,
  computation_preference: BillingconductorBillingGroupComputationPreference,
  name: str,
  description: str = None,
  primary_account_id: str = None,
  tags: IResolvable | typing.List[BillingconductorBillingGroupTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.Initializer.parameter.accountGrouping">account_grouping</a></code> | <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGrouping">BillingconductorBillingGroupAccountGrouping</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_billing_group#account_grouping BillingconductorBillingGroup#account_grouping}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.Initializer.parameter.computationPreference">computation_preference</a></code> | <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreference">BillingconductorBillingGroupComputationPreference</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_billing_group#computation_preference BillingconductorBillingGroup#computation_preference}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_billing_group#name BillingconductorBillingGroup#name}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_billing_group#description BillingconductorBillingGroup#description}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.Initializer.parameter.primaryAccountId">primary_account_id</a></code> | <code>str</code> | This account will act as a virtual payer account of the billing group. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTags">BillingconductorBillingGroupTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_billing_group#tags BillingconductorBillingGroup#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_grouping`<sup>Required</sup> <a name="account_grouping" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.Initializer.parameter.accountGrouping"></a>

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGrouping">BillingconductorBillingGroupAccountGrouping</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_billing_group#account_grouping BillingconductorBillingGroup#account_grouping}.

---

##### `computation_preference`<sup>Required</sup> <a name="computation_preference" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.Initializer.parameter.computationPreference"></a>

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreference">BillingconductorBillingGroupComputationPreference</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_billing_group#computation_preference BillingconductorBillingGroup#computation_preference}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_billing_group#name BillingconductorBillingGroup#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_billing_group#description BillingconductorBillingGroup#description}.

---

##### `primary_account_id`<sup>Optional</sup> <a name="primary_account_id" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.Initializer.parameter.primaryAccountId"></a>

- *Type:* str

This account will act as a virtual payer account of the billing group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_billing_group#primary_account_id BillingconductorBillingGroup#primary_account_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTags">BillingconductorBillingGroupTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_billing_group#tags BillingconductorBillingGroup#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.putAccountGrouping">put_account_grouping</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.putComputationPreference">put_computation_preference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.resetPrimaryAccountId">reset_primary_account_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_account_grouping` <a name="put_account_grouping" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.putAccountGrouping"></a>

```python
def put_account_grouping(
  auto_associate: bool | IResolvable = None,
  linked_account_ids: typing.List[str] = None,
  responsibility_transfer_arn: str = None
) -> None
```

###### `auto_associate`<sup>Optional</sup> <a name="auto_associate" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.putAccountGrouping.parameter.autoAssociate"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_billing_group#auto_associate BillingconductorBillingGroup#auto_associate}.

---

###### `linked_account_ids`<sup>Optional</sup> <a name="linked_account_ids" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.putAccountGrouping.parameter.linkedAccountIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_billing_group#linked_account_ids BillingconductorBillingGroup#linked_account_ids}.

---

###### `responsibility_transfer_arn`<sup>Optional</sup> <a name="responsibility_transfer_arn" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.putAccountGrouping.parameter.responsibilityTransferArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_billing_group#responsibility_transfer_arn BillingconductorBillingGroup#responsibility_transfer_arn}.

---

##### `put_computation_preference` <a name="put_computation_preference" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.putComputationPreference"></a>

```python
def put_computation_preference(
  pricing_plan_arn: str
) -> None
```

###### `pricing_plan_arn`<sup>Required</sup> <a name="pricing_plan_arn" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.putComputationPreference.parameter.pricingPlanArn"></a>

- *Type:* str

ARN of the attached pricing plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_billing_group#pricing_plan_arn BillingconductorBillingGroup#pricing_plan_arn}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[BillingconductorBillingGroupTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTags">BillingconductorBillingGroupTags</a>]

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_primary_account_id` <a name="reset_primary_account_id" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.resetPrimaryAccountId"></a>

```python
def reset_primary_account_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a BillingconductorBillingGroup resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.isConstruct"></a>

```python
from cdktn_provider_awscc import billingconductor_billing_group

billingconductorBillingGroup.BillingconductorBillingGroup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.isTerraformElement"></a>

```python
from cdktn_provider_awscc import billingconductor_billing_group

billingconductorBillingGroup.BillingconductorBillingGroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.isTerraformResource"></a>

```python
from cdktn_provider_awscc import billingconductor_billing_group

billingconductorBillingGroup.BillingconductorBillingGroup.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import billingconductor_billing_group

billingconductorBillingGroup.BillingconductorBillingGroup.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a BillingconductorBillingGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the BillingconductorBillingGroup to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing BillingconductorBillingGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_billing_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the BillingconductorBillingGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.accountGrouping">account_grouping</a></code> | <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference">BillingconductorBillingGroupAccountGroupingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.computationPreference">computation_preference</a></code> | <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference">BillingconductorBillingGroupComputationPreferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.creationTime">creation_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.lastModifiedTime">last_modified_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.size">size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.statusReason">status_reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList">BillingconductorBillingGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.accountGroupingInput">account_grouping_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGrouping">BillingconductorBillingGroupAccountGrouping</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.computationPreferenceInput">computation_preference_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreference">BillingconductorBillingGroupComputationPreference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.primaryAccountIdInput">primary_account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTags">BillingconductorBillingGroupTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.primaryAccountId">primary_account_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_grouping`<sup>Required</sup> <a name="account_grouping" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.accountGrouping"></a>

```python
account_grouping: BillingconductorBillingGroupAccountGroupingOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference">BillingconductorBillingGroupAccountGroupingOutputReference</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `computation_preference`<sup>Required</sup> <a name="computation_preference" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.computationPreference"></a>

```python
computation_preference: BillingconductorBillingGroupComputationPreferenceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference">BillingconductorBillingGroupComputationPreferenceOutputReference</a>

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.creationTime"></a>

```python
creation_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_modified_time`<sup>Required</sup> <a name="last_modified_time" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.lastModifiedTime"></a>

```python
last_modified_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `status_reason`<sup>Required</sup> <a name="status_reason" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.statusReason"></a>

```python
status_reason: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.tags"></a>

```python
tags: BillingconductorBillingGroupTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList">BillingconductorBillingGroupTagsList</a>

---

##### `account_grouping_input`<sup>Optional</sup> <a name="account_grouping_input" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.accountGroupingInput"></a>

```python
account_grouping_input: IResolvable | BillingconductorBillingGroupAccountGrouping
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGrouping">BillingconductorBillingGroupAccountGrouping</a>

---

##### `computation_preference_input`<sup>Optional</sup> <a name="computation_preference_input" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.computationPreferenceInput"></a>

```python
computation_preference_input: IResolvable | BillingconductorBillingGroupComputationPreference
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreference">BillingconductorBillingGroupComputationPreference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `primary_account_id_input`<sup>Optional</sup> <a name="primary_account_id_input" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.primaryAccountIdInput"></a>

```python
primary_account_id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[BillingconductorBillingGroupTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTags">BillingconductorBillingGroupTags</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `primary_account_id`<sup>Required</sup> <a name="primary_account_id" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.primaryAccountId"></a>

```python
primary_account_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BillingconductorBillingGroupAccountGrouping <a name="BillingconductorBillingGroupAccountGrouping" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGrouping"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGrouping.Initializer"></a>

```python
from cdktn_provider_awscc import billingconductor_billing_group

billingconductorBillingGroup.BillingconductorBillingGroupAccountGrouping(
  auto_associate: bool | IResolvable = None,
  linked_account_ids: typing.List[str] = None,
  responsibility_transfer_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGrouping.property.autoAssociate">auto_associate</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_billing_group#auto_associate BillingconductorBillingGroup#auto_associate}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGrouping.property.linkedAccountIds">linked_account_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_billing_group#linked_account_ids BillingconductorBillingGroup#linked_account_ids}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGrouping.property.responsibilityTransferArn">responsibility_transfer_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_billing_group#responsibility_transfer_arn BillingconductorBillingGroup#responsibility_transfer_arn}. |

---

##### `auto_associate`<sup>Optional</sup> <a name="auto_associate" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGrouping.property.autoAssociate"></a>

```python
auto_associate: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_billing_group#auto_associate BillingconductorBillingGroup#auto_associate}.

---

##### `linked_account_ids`<sup>Optional</sup> <a name="linked_account_ids" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGrouping.property.linkedAccountIds"></a>

```python
linked_account_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_billing_group#linked_account_ids BillingconductorBillingGroup#linked_account_ids}.

---

##### `responsibility_transfer_arn`<sup>Optional</sup> <a name="responsibility_transfer_arn" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGrouping.property.responsibilityTransferArn"></a>

```python
responsibility_transfer_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_billing_group#responsibility_transfer_arn BillingconductorBillingGroup#responsibility_transfer_arn}.

---

### BillingconductorBillingGroupComputationPreference <a name="BillingconductorBillingGroupComputationPreference" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreference"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreference.Initializer"></a>

```python
from cdktn_provider_awscc import billingconductor_billing_group

billingconductorBillingGroup.BillingconductorBillingGroupComputationPreference(
  pricing_plan_arn: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreference.property.pricingPlanArn">pricing_plan_arn</a></code> | <code>str</code> | ARN of the attached pricing plan. |

---

##### `pricing_plan_arn`<sup>Required</sup> <a name="pricing_plan_arn" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreference.property.pricingPlanArn"></a>

```python
pricing_plan_arn: str
```

- *Type:* str

ARN of the attached pricing plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_billing_group#pricing_plan_arn BillingconductorBillingGroup#pricing_plan_arn}

---

### BillingconductorBillingGroupConfig <a name="BillingconductorBillingGroupConfig" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.Initializer"></a>

```python
from cdktn_provider_awscc import billingconductor_billing_group

billingconductorBillingGroup.BillingconductorBillingGroupConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_grouping: BillingconductorBillingGroupAccountGrouping,
  computation_preference: BillingconductorBillingGroupComputationPreference,
  name: str,
  description: str = None,
  primary_account_id: str = None,
  tags: IResolvable | typing.List[BillingconductorBillingGroupTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.accountGrouping">account_grouping</a></code> | <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGrouping">BillingconductorBillingGroupAccountGrouping</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_billing_group#account_grouping BillingconductorBillingGroup#account_grouping}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.computationPreference">computation_preference</a></code> | <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreference">BillingconductorBillingGroupComputationPreference</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_billing_group#computation_preference BillingconductorBillingGroup#computation_preference}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_billing_group#name BillingconductorBillingGroup#name}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_billing_group#description BillingconductorBillingGroup#description}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.primaryAccountId">primary_account_id</a></code> | <code>str</code> | This account will act as a virtual payer account of the billing group. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTags">BillingconductorBillingGroupTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_billing_group#tags BillingconductorBillingGroup#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_grouping`<sup>Required</sup> <a name="account_grouping" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.accountGrouping"></a>

```python
account_grouping: BillingconductorBillingGroupAccountGrouping
```

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGrouping">BillingconductorBillingGroupAccountGrouping</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_billing_group#account_grouping BillingconductorBillingGroup#account_grouping}.

---

##### `computation_preference`<sup>Required</sup> <a name="computation_preference" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.computationPreference"></a>

```python
computation_preference: BillingconductorBillingGroupComputationPreference
```

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreference">BillingconductorBillingGroupComputationPreference</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_billing_group#computation_preference BillingconductorBillingGroup#computation_preference}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_billing_group#name BillingconductorBillingGroup#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_billing_group#description BillingconductorBillingGroup#description}.

---

##### `primary_account_id`<sup>Optional</sup> <a name="primary_account_id" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.primaryAccountId"></a>

```python
primary_account_id: str
```

- *Type:* str

This account will act as a virtual payer account of the billing group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_billing_group#primary_account_id BillingconductorBillingGroup#primary_account_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[BillingconductorBillingGroupTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTags">BillingconductorBillingGroupTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_billing_group#tags BillingconductorBillingGroup#tags}.

---

### BillingconductorBillingGroupTags <a name="BillingconductorBillingGroupTags" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTags.Initializer"></a>

```python
from cdktn_provider_awscc import billingconductor_billing_group

billingconductorBillingGroup.BillingconductorBillingGroupTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_billing_group#key BillingconductorBillingGroup#key}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_billing_group#value BillingconductorBillingGroup#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_billing_group#key BillingconductorBillingGroup#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/billingconductor_billing_group#value BillingconductorBillingGroup#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### BillingconductorBillingGroupAccountGroupingOutputReference <a name="BillingconductorBillingGroupAccountGroupingOutputReference" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import billingconductor_billing_group

billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.resetAutoAssociate">reset_auto_associate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.resetLinkedAccountIds">reset_linked_account_ids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.resetResponsibilityTransferArn">reset_responsibility_transfer_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_auto_associate` <a name="reset_auto_associate" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.resetAutoAssociate"></a>

```python
def reset_auto_associate() -> None
```

##### `reset_linked_account_ids` <a name="reset_linked_account_ids" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.resetLinkedAccountIds"></a>

```python
def reset_linked_account_ids() -> None
```

##### `reset_responsibility_transfer_arn` <a name="reset_responsibility_transfer_arn" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.resetResponsibilityTransferArn"></a>

```python
def reset_responsibility_transfer_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.property.autoAssociateInput">auto_associate_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.property.linkedAccountIdsInput">linked_account_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.property.responsibilityTransferArnInput">responsibility_transfer_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.property.autoAssociate">auto_associate</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.property.linkedAccountIds">linked_account_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.property.responsibilityTransferArn">responsibility_transfer_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGrouping">BillingconductorBillingGroupAccountGrouping</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auto_associate_input`<sup>Optional</sup> <a name="auto_associate_input" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.property.autoAssociateInput"></a>

```python
auto_associate_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `linked_account_ids_input`<sup>Optional</sup> <a name="linked_account_ids_input" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.property.linkedAccountIdsInput"></a>

```python
linked_account_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `responsibility_transfer_arn_input`<sup>Optional</sup> <a name="responsibility_transfer_arn_input" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.property.responsibilityTransferArnInput"></a>

```python
responsibility_transfer_arn_input: str
```

- *Type:* str

---

##### `auto_associate`<sup>Required</sup> <a name="auto_associate" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.property.autoAssociate"></a>

```python
auto_associate: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `linked_account_ids`<sup>Required</sup> <a name="linked_account_ids" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.property.linkedAccountIds"></a>

```python
linked_account_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `responsibility_transfer_arn`<sup>Required</sup> <a name="responsibility_transfer_arn" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.property.responsibilityTransferArn"></a>

```python
responsibility_transfer_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BillingconductorBillingGroupAccountGrouping
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGrouping">BillingconductorBillingGroupAccountGrouping</a>

---


### BillingconductorBillingGroupComputationPreferenceOutputReference <a name="BillingconductorBillingGroupComputationPreferenceOutputReference" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import billingconductor_billing_group

billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.property.pricingPlanArnInput">pricing_plan_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.property.pricingPlanArn">pricing_plan_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreference">BillingconductorBillingGroupComputationPreference</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `pricing_plan_arn_input`<sup>Optional</sup> <a name="pricing_plan_arn_input" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.property.pricingPlanArnInput"></a>

```python
pricing_plan_arn_input: str
```

- *Type:* str

---

##### `pricing_plan_arn`<sup>Required</sup> <a name="pricing_plan_arn" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.property.pricingPlanArn"></a>

```python
pricing_plan_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BillingconductorBillingGroupComputationPreference
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreference">BillingconductorBillingGroupComputationPreference</a>

---


### BillingconductorBillingGroupTagsList <a name="BillingconductorBillingGroupTagsList" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import billingconductor_billing_group

billingconductorBillingGroup.BillingconductorBillingGroupTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BillingconductorBillingGroupTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTags">BillingconductorBillingGroupTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BillingconductorBillingGroupTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTags">BillingconductorBillingGroupTags</a>]

---


### BillingconductorBillingGroupTagsOutputReference <a name="BillingconductorBillingGroupTagsOutputReference" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import billingconductor_billing_group

billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTags">BillingconductorBillingGroupTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BillingconductorBillingGroupTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTags">BillingconductorBillingGroupTags</a>

---



