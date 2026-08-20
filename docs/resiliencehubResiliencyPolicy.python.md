# `resiliencehubResiliencyPolicy` Submodule <a name="`resiliencehubResiliencyPolicy` Submodule" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ResiliencehubResiliencyPolicy <a name="ResiliencehubResiliencyPolicy" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_resiliency_policy awscc_resiliencehub_resiliency_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.Initializer"></a>

```python
from cdktn_provider_awscc import resiliencehub_resiliency_policy

resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  policy: ResiliencehubResiliencyPolicyPolicy,
  policy_name: str,
  tier: str,
  data_location_constraint: str = None,
  policy_description: str = None,
  tags: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.Initializer.parameter.policy">policy</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicy">ResiliencehubResiliencyPolicyPolicy</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_resiliency_policy#policy ResiliencehubResiliencyPolicy#policy}. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.Initializer.parameter.policyName">policy_name</a></code> | <code>str</code> | Name of Resiliency Policy. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.Initializer.parameter.tier">tier</a></code> | <code>str</code> | Resiliency Policy Tier. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.Initializer.parameter.dataLocationConstraint">data_location_constraint</a></code> | <code>str</code> | Data Location Constraint of the Policy. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.Initializer.parameter.policyDescription">policy_description</a></code> | <code>str</code> | Description of Resiliency Policy. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_resiliency_policy#tags ResiliencehubResiliencyPolicy#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.Initializer.parameter.policy"></a>

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicy">ResiliencehubResiliencyPolicyPolicy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_resiliency_policy#policy ResiliencehubResiliencyPolicy#policy}.

---

##### `policy_name`<sup>Required</sup> <a name="policy_name" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.Initializer.parameter.policyName"></a>

- *Type:* str

Name of Resiliency Policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_resiliency_policy#policy_name ResiliencehubResiliencyPolicy#policy_name}

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.Initializer.parameter.tier"></a>

- *Type:* str

Resiliency Policy Tier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_resiliency_policy#tier ResiliencehubResiliencyPolicy#tier}

---

##### `data_location_constraint`<sup>Optional</sup> <a name="data_location_constraint" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.Initializer.parameter.dataLocationConstraint"></a>

- *Type:* str

Data Location Constraint of the Policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_resiliency_policy#data_location_constraint ResiliencehubResiliencyPolicy#data_location_constraint}

---

##### `policy_description`<sup>Optional</sup> <a name="policy_description" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.Initializer.parameter.policyDescription"></a>

- *Type:* str

Description of Resiliency Policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_resiliency_policy#policy_description ResiliencehubResiliencyPolicy#policy_description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_resiliency_policy#tags ResiliencehubResiliencyPolicy#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.putPolicy">put_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.resetDataLocationConstraint">reset_data_location_constraint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.resetPolicyDescription">reset_policy_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_policy` <a name="put_policy" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.putPolicy"></a>

```python
def put_policy(
  az: ResiliencehubResiliencyPolicyPolicyAz,
  hardware: ResiliencehubResiliencyPolicyPolicyHardware,
  software_attribute: ResiliencehubResiliencyPolicyPolicySoftware,
  region: ResiliencehubResiliencyPolicyPolicyRegion = None
) -> None
```

###### `az`<sup>Required</sup> <a name="az" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.putPolicy.parameter.az"></a>

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAz">ResiliencehubResiliencyPolicyPolicyAz</a>

Failure Policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_resiliency_policy#az ResiliencehubResiliencyPolicy#az}

---

###### `hardware`<sup>Required</sup> <a name="hardware" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.putPolicy.parameter.hardware"></a>

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardware">ResiliencehubResiliencyPolicyPolicyHardware</a>

Failure Policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_resiliency_policy#hardware ResiliencehubResiliencyPolicy#hardware}

---

###### `software_attribute`<sup>Required</sup> <a name="software_attribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.putPolicy.parameter.softwareAttribute"></a>

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftware">ResiliencehubResiliencyPolicyPolicySoftware</a>

Failure Policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_resiliency_policy#software ResiliencehubResiliencyPolicy#software}

---

###### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.putPolicy.parameter.region"></a>

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegion">ResiliencehubResiliencyPolicyPolicyRegion</a>

Failure Policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_resiliency_policy#region ResiliencehubResiliencyPolicy#region}

---

##### `reset_data_location_constraint` <a name="reset_data_location_constraint" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.resetDataLocationConstraint"></a>

```python
def reset_data_location_constraint() -> None
```

##### `reset_policy_description` <a name="reset_policy_description" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.resetPolicyDescription"></a>

```python
def reset_policy_description() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ResiliencehubResiliencyPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.isConstruct"></a>

```python
from cdktn_provider_awscc import resiliencehub_resiliency_policy

resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.isTerraformElement"></a>

```python
from cdktn_provider_awscc import resiliencehub_resiliency_policy

resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.isTerraformResource"></a>

```python
from cdktn_provider_awscc import resiliencehub_resiliency_policy

resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import resiliencehub_resiliency_policy

resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ResiliencehubResiliencyPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ResiliencehubResiliencyPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ResiliencehubResiliencyPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_resiliency_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ResiliencehubResiliencyPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.policy">policy</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference">ResiliencehubResiliencyPolicyPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.policyArn">policy_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.dataLocationConstraintInput">data_location_constraint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.policyDescriptionInput">policy_description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.policyInput">policy_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicy">ResiliencehubResiliencyPolicyPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.policyNameInput">policy_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.tierInput">tier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.dataLocationConstraint">data_location_constraint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.policyDescription">policy_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.policyName">policy_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.tier">tier</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.policy"></a>

```python
policy: ResiliencehubResiliencyPolicyPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference">ResiliencehubResiliencyPolicyPolicyOutputReference</a>

---

##### `policy_arn`<sup>Required</sup> <a name="policy_arn" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.policyArn"></a>

```python
policy_arn: str
```

- *Type:* str

---

##### `data_location_constraint_input`<sup>Optional</sup> <a name="data_location_constraint_input" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.dataLocationConstraintInput"></a>

```python
data_location_constraint_input: str
```

- *Type:* str

---

##### `policy_description_input`<sup>Optional</sup> <a name="policy_description_input" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.policyDescriptionInput"></a>

```python
policy_description_input: str
```

- *Type:* str

---

##### `policy_input`<sup>Optional</sup> <a name="policy_input" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.policyInput"></a>

```python
policy_input: IResolvable | ResiliencehubResiliencyPolicyPolicy
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicy">ResiliencehubResiliencyPolicyPolicy</a>

---

##### `policy_name_input`<sup>Optional</sup> <a name="policy_name_input" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.policyNameInput"></a>

```python
policy_name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tier_input`<sup>Optional</sup> <a name="tier_input" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.tierInput"></a>

```python
tier_input: str
```

- *Type:* str

---

##### `data_location_constraint`<sup>Required</sup> <a name="data_location_constraint" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.dataLocationConstraint"></a>

```python
data_location_constraint: str
```

- *Type:* str

---

##### `policy_description`<sup>Required</sup> <a name="policy_description" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.policyDescription"></a>

```python
policy_description: str
```

- *Type:* str

---

##### `policy_name`<sup>Required</sup> <a name="policy_name" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.policyName"></a>

```python
policy_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.tier"></a>

```python
tier: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ResiliencehubResiliencyPolicyConfig <a name="ResiliencehubResiliencyPolicyConfig" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.Initializer"></a>

```python
from cdktn_provider_awscc import resiliencehub_resiliency_policy

resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  policy: ResiliencehubResiliencyPolicyPolicy,
  policy_name: str,
  tier: str,
  data_location_constraint: str = None,
  policy_description: str = None,
  tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.policy">policy</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicy">ResiliencehubResiliencyPolicyPolicy</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_resiliency_policy#policy ResiliencehubResiliencyPolicy#policy}. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.policyName">policy_name</a></code> | <code>str</code> | Name of Resiliency Policy. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.tier">tier</a></code> | <code>str</code> | Resiliency Policy Tier. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.dataLocationConstraint">data_location_constraint</a></code> | <code>str</code> | Data Location Constraint of the Policy. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.policyDescription">policy_description</a></code> | <code>str</code> | Description of Resiliency Policy. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_resiliency_policy#tags ResiliencehubResiliencyPolicy#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.policy"></a>

```python
policy: ResiliencehubResiliencyPolicyPolicy
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicy">ResiliencehubResiliencyPolicyPolicy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_resiliency_policy#policy ResiliencehubResiliencyPolicy#policy}.

---

##### `policy_name`<sup>Required</sup> <a name="policy_name" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.policyName"></a>

```python
policy_name: str
```

- *Type:* str

Name of Resiliency Policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_resiliency_policy#policy_name ResiliencehubResiliencyPolicy#policy_name}

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.tier"></a>

```python
tier: str
```

- *Type:* str

Resiliency Policy Tier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_resiliency_policy#tier ResiliencehubResiliencyPolicy#tier}

---

##### `data_location_constraint`<sup>Optional</sup> <a name="data_location_constraint" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.dataLocationConstraint"></a>

```python
data_location_constraint: str
```

- *Type:* str

Data Location Constraint of the Policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_resiliency_policy#data_location_constraint ResiliencehubResiliencyPolicy#data_location_constraint}

---

##### `policy_description`<sup>Optional</sup> <a name="policy_description" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.policyDescription"></a>

```python
policy_description: str
```

- *Type:* str

Description of Resiliency Policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_resiliency_policy#policy_description ResiliencehubResiliencyPolicy#policy_description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_resiliency_policy#tags ResiliencehubResiliencyPolicy#tags}.

---

### ResiliencehubResiliencyPolicyPolicy <a name="ResiliencehubResiliencyPolicyPolicy" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicy.Initializer"></a>

```python
from cdktn_provider_awscc import resiliencehub_resiliency_policy

resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicy(
  az: ResiliencehubResiliencyPolicyPolicyAz,
  hardware: ResiliencehubResiliencyPolicyPolicyHardware,
  software_attribute: ResiliencehubResiliencyPolicyPolicySoftware,
  region: ResiliencehubResiliencyPolicyPolicyRegion = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicy.property.az">az</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAz">ResiliencehubResiliencyPolicyPolicyAz</a></code> | Failure Policy. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicy.property.hardware">hardware</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardware">ResiliencehubResiliencyPolicyPolicyHardware</a></code> | Failure Policy. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicy.property.softwareAttribute">software_attribute</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftware">ResiliencehubResiliencyPolicyPolicySoftware</a></code> | Failure Policy. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicy.property.region">region</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegion">ResiliencehubResiliencyPolicyPolicyRegion</a></code> | Failure Policy. |

---

##### `az`<sup>Required</sup> <a name="az" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicy.property.az"></a>

```python
az: ResiliencehubResiliencyPolicyPolicyAz
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAz">ResiliencehubResiliencyPolicyPolicyAz</a>

Failure Policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_resiliency_policy#az ResiliencehubResiliencyPolicy#az}

---

##### `hardware`<sup>Required</sup> <a name="hardware" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicy.property.hardware"></a>

```python
hardware: ResiliencehubResiliencyPolicyPolicyHardware
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardware">ResiliencehubResiliencyPolicyPolicyHardware</a>

Failure Policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_resiliency_policy#hardware ResiliencehubResiliencyPolicy#hardware}

---

##### `software_attribute`<sup>Required</sup> <a name="software_attribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicy.property.softwareAttribute"></a>

```python
software_attribute: ResiliencehubResiliencyPolicyPolicySoftware
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftware">ResiliencehubResiliencyPolicyPolicySoftware</a>

Failure Policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_resiliency_policy#software ResiliencehubResiliencyPolicy#software}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicy.property.region"></a>

```python
region: ResiliencehubResiliencyPolicyPolicyRegion
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegion">ResiliencehubResiliencyPolicyPolicyRegion</a>

Failure Policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_resiliency_policy#region ResiliencehubResiliencyPolicy#region}

---

### ResiliencehubResiliencyPolicyPolicyAz <a name="ResiliencehubResiliencyPolicyPolicyAz" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAz"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAz.Initializer"></a>

```python
from cdktn_provider_awscc import resiliencehub_resiliency_policy

resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAz(
  rpo_in_secs: typing.Union[int, float],
  rto_in_secs: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAz.property.rpoInSecs">rpo_in_secs</a></code> | <code>typing.Union[int, float]</code> | RPO in seconds. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAz.property.rtoInSecs">rto_in_secs</a></code> | <code>typing.Union[int, float]</code> | RTO in seconds. |

---

##### `rpo_in_secs`<sup>Required</sup> <a name="rpo_in_secs" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAz.property.rpoInSecs"></a>

```python
rpo_in_secs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

RPO in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_resiliency_policy#rpo_in_secs ResiliencehubResiliencyPolicy#rpo_in_secs}

---

##### `rto_in_secs`<sup>Required</sup> <a name="rto_in_secs" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAz.property.rtoInSecs"></a>

```python
rto_in_secs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

RTO in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_resiliency_policy#rto_in_secs ResiliencehubResiliencyPolicy#rto_in_secs}

---

### ResiliencehubResiliencyPolicyPolicyHardware <a name="ResiliencehubResiliencyPolicyPolicyHardware" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardware"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardware.Initializer"></a>

```python
from cdktn_provider_awscc import resiliencehub_resiliency_policy

resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardware(
  rpo_in_secs: typing.Union[int, float],
  rto_in_secs: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardware.property.rpoInSecs">rpo_in_secs</a></code> | <code>typing.Union[int, float]</code> | RPO in seconds. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardware.property.rtoInSecs">rto_in_secs</a></code> | <code>typing.Union[int, float]</code> | RTO in seconds. |

---

##### `rpo_in_secs`<sup>Required</sup> <a name="rpo_in_secs" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardware.property.rpoInSecs"></a>

```python
rpo_in_secs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

RPO in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_resiliency_policy#rpo_in_secs ResiliencehubResiliencyPolicy#rpo_in_secs}

---

##### `rto_in_secs`<sup>Required</sup> <a name="rto_in_secs" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardware.property.rtoInSecs"></a>

```python
rto_in_secs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

RTO in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_resiliency_policy#rto_in_secs ResiliencehubResiliencyPolicy#rto_in_secs}

---

### ResiliencehubResiliencyPolicyPolicyRegion <a name="ResiliencehubResiliencyPolicyPolicyRegion" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegion.Initializer"></a>

```python
from cdktn_provider_awscc import resiliencehub_resiliency_policy

resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegion(
  rpo_in_secs: typing.Union[int, float] = None,
  rto_in_secs: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegion.property.rpoInSecs">rpo_in_secs</a></code> | <code>typing.Union[int, float]</code> | RPO in seconds. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegion.property.rtoInSecs">rto_in_secs</a></code> | <code>typing.Union[int, float]</code> | RTO in seconds. |

---

##### `rpo_in_secs`<sup>Optional</sup> <a name="rpo_in_secs" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegion.property.rpoInSecs"></a>

```python
rpo_in_secs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

RPO in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_resiliency_policy#rpo_in_secs ResiliencehubResiliencyPolicy#rpo_in_secs}

---

##### `rto_in_secs`<sup>Optional</sup> <a name="rto_in_secs" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegion.property.rtoInSecs"></a>

```python
rto_in_secs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

RTO in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_resiliency_policy#rto_in_secs ResiliencehubResiliencyPolicy#rto_in_secs}

---

### ResiliencehubResiliencyPolicyPolicySoftware <a name="ResiliencehubResiliencyPolicyPolicySoftware" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftware"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftware.Initializer"></a>

```python
from cdktn_provider_awscc import resiliencehub_resiliency_policy

resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftware(
  rpo_in_secs: typing.Union[int, float],
  rto_in_secs: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftware.property.rpoInSecs">rpo_in_secs</a></code> | <code>typing.Union[int, float]</code> | RPO in seconds. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftware.property.rtoInSecs">rto_in_secs</a></code> | <code>typing.Union[int, float]</code> | RTO in seconds. |

---

##### `rpo_in_secs`<sup>Required</sup> <a name="rpo_in_secs" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftware.property.rpoInSecs"></a>

```python
rpo_in_secs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

RPO in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_resiliency_policy#rpo_in_secs ResiliencehubResiliencyPolicy#rpo_in_secs}

---

##### `rto_in_secs`<sup>Required</sup> <a name="rto_in_secs" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftware.property.rtoInSecs"></a>

```python
rto_in_secs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

RTO in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_resiliency_policy#rto_in_secs ResiliencehubResiliencyPolicy#rto_in_secs}

---

## Classes <a name="Classes" id="Classes"></a>

### ResiliencehubResiliencyPolicyPolicyAzOutputReference <a name="ResiliencehubResiliencyPolicyPolicyAzOutputReference" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import resiliencehub_resiliency_policy

resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.property.rpoInSecsInput">rpo_in_secs_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.property.rtoInSecsInput">rto_in_secs_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.property.rpoInSecs">rpo_in_secs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.property.rtoInSecs">rto_in_secs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAz">ResiliencehubResiliencyPolicyPolicyAz</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `rpo_in_secs_input`<sup>Optional</sup> <a name="rpo_in_secs_input" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.property.rpoInSecsInput"></a>

```python
rpo_in_secs_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rto_in_secs_input`<sup>Optional</sup> <a name="rto_in_secs_input" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.property.rtoInSecsInput"></a>

```python
rto_in_secs_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rpo_in_secs`<sup>Required</sup> <a name="rpo_in_secs" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.property.rpoInSecs"></a>

```python
rpo_in_secs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rto_in_secs`<sup>Required</sup> <a name="rto_in_secs" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.property.rtoInSecs"></a>

```python
rto_in_secs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ResiliencehubResiliencyPolicyPolicyAz
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAz">ResiliencehubResiliencyPolicyPolicyAz</a>

---


### ResiliencehubResiliencyPolicyPolicyHardwareOutputReference <a name="ResiliencehubResiliencyPolicyPolicyHardwareOutputReference" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import resiliencehub_resiliency_policy

resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.property.rpoInSecsInput">rpo_in_secs_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.property.rtoInSecsInput">rto_in_secs_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.property.rpoInSecs">rpo_in_secs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.property.rtoInSecs">rto_in_secs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardware">ResiliencehubResiliencyPolicyPolicyHardware</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `rpo_in_secs_input`<sup>Optional</sup> <a name="rpo_in_secs_input" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.property.rpoInSecsInput"></a>

```python
rpo_in_secs_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rto_in_secs_input`<sup>Optional</sup> <a name="rto_in_secs_input" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.property.rtoInSecsInput"></a>

```python
rto_in_secs_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rpo_in_secs`<sup>Required</sup> <a name="rpo_in_secs" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.property.rpoInSecs"></a>

```python
rpo_in_secs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rto_in_secs`<sup>Required</sup> <a name="rto_in_secs" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.property.rtoInSecs"></a>

```python
rto_in_secs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ResiliencehubResiliencyPolicyPolicyHardware
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardware">ResiliencehubResiliencyPolicyPolicyHardware</a>

---


### ResiliencehubResiliencyPolicyPolicyOutputReference <a name="ResiliencehubResiliencyPolicyPolicyOutputReference" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import resiliencehub_resiliency_policy

resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.putAz">put_az</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.putHardware">put_hardware</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.putRegion">put_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.putSoftwareAttribute">put_software_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.resetRegion">reset_region</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_az` <a name="put_az" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.putAz"></a>

```python
def put_az(
  rpo_in_secs: typing.Union[int, float],
  rto_in_secs: typing.Union[int, float]
) -> None
```

###### `rpo_in_secs`<sup>Required</sup> <a name="rpo_in_secs" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.putAz.parameter.rpoInSecs"></a>

- *Type:* typing.Union[int, float]

RPO in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_resiliency_policy#rpo_in_secs ResiliencehubResiliencyPolicy#rpo_in_secs}

---

###### `rto_in_secs`<sup>Required</sup> <a name="rto_in_secs" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.putAz.parameter.rtoInSecs"></a>

- *Type:* typing.Union[int, float]

RTO in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_resiliency_policy#rto_in_secs ResiliencehubResiliencyPolicy#rto_in_secs}

---

##### `put_hardware` <a name="put_hardware" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.putHardware"></a>

```python
def put_hardware(
  rpo_in_secs: typing.Union[int, float],
  rto_in_secs: typing.Union[int, float]
) -> None
```

###### `rpo_in_secs`<sup>Required</sup> <a name="rpo_in_secs" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.putHardware.parameter.rpoInSecs"></a>

- *Type:* typing.Union[int, float]

RPO in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_resiliency_policy#rpo_in_secs ResiliencehubResiliencyPolicy#rpo_in_secs}

---

###### `rto_in_secs`<sup>Required</sup> <a name="rto_in_secs" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.putHardware.parameter.rtoInSecs"></a>

- *Type:* typing.Union[int, float]

RTO in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_resiliency_policy#rto_in_secs ResiliencehubResiliencyPolicy#rto_in_secs}

---

##### `put_region` <a name="put_region" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.putRegion"></a>

```python
def put_region(
  rpo_in_secs: typing.Union[int, float] = None,
  rto_in_secs: typing.Union[int, float] = None
) -> None
```

###### `rpo_in_secs`<sup>Optional</sup> <a name="rpo_in_secs" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.putRegion.parameter.rpoInSecs"></a>

- *Type:* typing.Union[int, float]

RPO in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_resiliency_policy#rpo_in_secs ResiliencehubResiliencyPolicy#rpo_in_secs}

---

###### `rto_in_secs`<sup>Optional</sup> <a name="rto_in_secs" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.putRegion.parameter.rtoInSecs"></a>

- *Type:* typing.Union[int, float]

RTO in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_resiliency_policy#rto_in_secs ResiliencehubResiliencyPolicy#rto_in_secs}

---

##### `put_software_attribute` <a name="put_software_attribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.putSoftwareAttribute"></a>

```python
def put_software_attribute(
  rpo_in_secs: typing.Union[int, float],
  rto_in_secs: typing.Union[int, float]
) -> None
```

###### `rpo_in_secs`<sup>Required</sup> <a name="rpo_in_secs" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.putSoftwareAttribute.parameter.rpoInSecs"></a>

- *Type:* typing.Union[int, float]

RPO in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_resiliency_policy#rpo_in_secs ResiliencehubResiliencyPolicy#rpo_in_secs}

---

###### `rto_in_secs`<sup>Required</sup> <a name="rto_in_secs" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.putSoftwareAttribute.parameter.rtoInSecs"></a>

- *Type:* typing.Union[int, float]

RTO in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_resiliency_policy#rto_in_secs ResiliencehubResiliencyPolicy#rto_in_secs}

---

##### `reset_region` <a name="reset_region" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.resetRegion"></a>

```python
def reset_region() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.property.az">az</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference">ResiliencehubResiliencyPolicyPolicyAzOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.property.hardware">hardware</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference">ResiliencehubResiliencyPolicyPolicyHardwareOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.property.region">region</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference">ResiliencehubResiliencyPolicyPolicyRegionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.property.softwareAttribute">software_attribute</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference">ResiliencehubResiliencyPolicyPolicySoftwareOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.property.azInput">az_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAz">ResiliencehubResiliencyPolicyPolicyAz</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.property.hardwareInput">hardware_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardware">ResiliencehubResiliencyPolicyPolicyHardware</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.property.regionInput">region_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegion">ResiliencehubResiliencyPolicyPolicyRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.property.softwareAttributeInput">software_attribute_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftware">ResiliencehubResiliencyPolicyPolicySoftware</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicy">ResiliencehubResiliencyPolicyPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `az`<sup>Required</sup> <a name="az" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.property.az"></a>

```python
az: ResiliencehubResiliencyPolicyPolicyAzOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference">ResiliencehubResiliencyPolicyPolicyAzOutputReference</a>

---

##### `hardware`<sup>Required</sup> <a name="hardware" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.property.hardware"></a>

```python
hardware: ResiliencehubResiliencyPolicyPolicyHardwareOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference">ResiliencehubResiliencyPolicyPolicyHardwareOutputReference</a>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.property.region"></a>

```python
region: ResiliencehubResiliencyPolicyPolicyRegionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference">ResiliencehubResiliencyPolicyPolicyRegionOutputReference</a>

---

##### `software_attribute`<sup>Required</sup> <a name="software_attribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.property.softwareAttribute"></a>

```python
software_attribute: ResiliencehubResiliencyPolicyPolicySoftwareOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference">ResiliencehubResiliencyPolicyPolicySoftwareOutputReference</a>

---

##### `az_input`<sup>Optional</sup> <a name="az_input" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.property.azInput"></a>

```python
az_input: IResolvable | ResiliencehubResiliencyPolicyPolicyAz
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAz">ResiliencehubResiliencyPolicyPolicyAz</a>

---

##### `hardware_input`<sup>Optional</sup> <a name="hardware_input" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.property.hardwareInput"></a>

```python
hardware_input: IResolvable | ResiliencehubResiliencyPolicyPolicyHardware
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardware">ResiliencehubResiliencyPolicyPolicyHardware</a>

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.property.regionInput"></a>

```python
region_input: IResolvable | ResiliencehubResiliencyPolicyPolicyRegion
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegion">ResiliencehubResiliencyPolicyPolicyRegion</a>

---

##### `software_attribute_input`<sup>Optional</sup> <a name="software_attribute_input" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.property.softwareAttributeInput"></a>

```python
software_attribute_input: IResolvable | ResiliencehubResiliencyPolicyPolicySoftware
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftware">ResiliencehubResiliencyPolicyPolicySoftware</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ResiliencehubResiliencyPolicyPolicy
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicy">ResiliencehubResiliencyPolicyPolicy</a>

---


### ResiliencehubResiliencyPolicyPolicyRegionOutputReference <a name="ResiliencehubResiliencyPolicyPolicyRegionOutputReference" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import resiliencehub_resiliency_policy

resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.resetRpoInSecs">reset_rpo_in_secs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.resetRtoInSecs">reset_rto_in_secs</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_rpo_in_secs` <a name="reset_rpo_in_secs" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.resetRpoInSecs"></a>

```python
def reset_rpo_in_secs() -> None
```

##### `reset_rto_in_secs` <a name="reset_rto_in_secs" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.resetRtoInSecs"></a>

```python
def reset_rto_in_secs() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.property.rpoInSecsInput">rpo_in_secs_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.property.rtoInSecsInput">rto_in_secs_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.property.rpoInSecs">rpo_in_secs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.property.rtoInSecs">rto_in_secs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegion">ResiliencehubResiliencyPolicyPolicyRegion</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `rpo_in_secs_input`<sup>Optional</sup> <a name="rpo_in_secs_input" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.property.rpoInSecsInput"></a>

```python
rpo_in_secs_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rto_in_secs_input`<sup>Optional</sup> <a name="rto_in_secs_input" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.property.rtoInSecsInput"></a>

```python
rto_in_secs_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rpo_in_secs`<sup>Required</sup> <a name="rpo_in_secs" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.property.rpoInSecs"></a>

```python
rpo_in_secs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rto_in_secs`<sup>Required</sup> <a name="rto_in_secs" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.property.rtoInSecs"></a>

```python
rto_in_secs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ResiliencehubResiliencyPolicyPolicyRegion
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegion">ResiliencehubResiliencyPolicyPolicyRegion</a>

---


### ResiliencehubResiliencyPolicyPolicySoftwareOutputReference <a name="ResiliencehubResiliencyPolicyPolicySoftwareOutputReference" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import resiliencehub_resiliency_policy

resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.property.rpoInSecsInput">rpo_in_secs_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.property.rtoInSecsInput">rto_in_secs_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.property.rpoInSecs">rpo_in_secs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.property.rtoInSecs">rto_in_secs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftware">ResiliencehubResiliencyPolicyPolicySoftware</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `rpo_in_secs_input`<sup>Optional</sup> <a name="rpo_in_secs_input" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.property.rpoInSecsInput"></a>

```python
rpo_in_secs_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rto_in_secs_input`<sup>Optional</sup> <a name="rto_in_secs_input" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.property.rtoInSecsInput"></a>

```python
rto_in_secs_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rpo_in_secs`<sup>Required</sup> <a name="rpo_in_secs" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.property.rpoInSecs"></a>

```python
rpo_in_secs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rto_in_secs`<sup>Required</sup> <a name="rto_in_secs" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.property.rtoInSecs"></a>

```python
rto_in_secs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ResiliencehubResiliencyPolicyPolicySoftware
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftware">ResiliencehubResiliencyPolicyPolicySoftware</a>

---



