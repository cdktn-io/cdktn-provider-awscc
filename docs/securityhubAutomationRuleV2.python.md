# `securityhubAutomationRuleV2` Submodule <a name="`securityhubAutomationRuleV2` Submodule" id="@cdktn/provider-awscc.securityhubAutomationRuleV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityhubAutomationRuleV2 <a name="SecurityhubAutomationRuleV2" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/securityhub_automation_rule_v2 awscc_securityhub_automation_rule_v2}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer"></a>

```python
from cdktn_provider_awscc import securityhub_automation_rule_v2

securityhubAutomationRuleV2.SecurityhubAutomationRuleV2(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  actions: IResolvable | typing.List[SecurityhubAutomationRuleV2Actions],
  criteria: SecurityhubAutomationRuleV2Criteria,
  description: str,
  rule_name: str,
  rule_order: typing.Union[int, float],
  rule_status: str = None,
  tags: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer.parameter.actions">actions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Actions">SecurityhubAutomationRuleV2Actions</a>]</code> | A list of actions to be performed when the rule criteria is met. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer.parameter.criteria">criteria</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Criteria">SecurityhubAutomationRuleV2Criteria</a></code> | Defines the parameters and conditions used to evaluate and filter security findings. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer.parameter.description">description</a></code> | <code>str</code> | A description of the automation rule. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer.parameter.ruleName">rule_name</a></code> | <code>str</code> | The name of the automation rule. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer.parameter.ruleOrder">rule_order</a></code> | <code>typing.Union[int, float]</code> | The value for the rule priority. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer.parameter.ruleStatus">rule_status</a></code> | <code>str</code> | The status of the automation rule. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | A key-value pair to associate with a resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer.parameter.actions"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Actions">SecurityhubAutomationRuleV2Actions</a>]

A list of actions to be performed when the rule criteria is met.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/securityhub_automation_rule_v2#actions SecurityhubAutomationRuleV2#actions}

---

##### `criteria`<sup>Required</sup> <a name="criteria" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer.parameter.criteria"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Criteria">SecurityhubAutomationRuleV2Criteria</a>

Defines the parameters and conditions used to evaluate and filter security findings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/securityhub_automation_rule_v2#criteria SecurityhubAutomationRuleV2#criteria}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer.parameter.description"></a>

- *Type:* str

A description of the automation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/securityhub_automation_rule_v2#description SecurityhubAutomationRuleV2#description}

---

##### `rule_name`<sup>Required</sup> <a name="rule_name" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer.parameter.ruleName"></a>

- *Type:* str

The name of the automation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/securityhub_automation_rule_v2#rule_name SecurityhubAutomationRuleV2#rule_name}

---

##### `rule_order`<sup>Required</sup> <a name="rule_order" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer.parameter.ruleOrder"></a>

- *Type:* typing.Union[int, float]

The value for the rule priority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/securityhub_automation_rule_v2#rule_order SecurityhubAutomationRuleV2#rule_order}

---

##### `rule_status`<sup>Optional</sup> <a name="rule_status" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer.parameter.ruleStatus"></a>

- *Type:* str

The status of the automation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/securityhub_automation_rule_v2#rule_status SecurityhubAutomationRuleV2#rule_status}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

A key-value pair to associate with a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/securityhub_automation_rule_v2#tags SecurityhubAutomationRuleV2#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.putActions">put_actions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.putCriteria">put_criteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.resetRuleStatus">reset_rule_status</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_actions` <a name="put_actions" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.putActions"></a>

```python
def put_actions(
  value: IResolvable | typing.List[SecurityhubAutomationRuleV2Actions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.putActions.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Actions">SecurityhubAutomationRuleV2Actions</a>]

---

##### `put_criteria` <a name="put_criteria" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.putCriteria"></a>

```python
def put_criteria(
  ocsf_finding_criteria: SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteria = None
) -> None
```

###### `ocsf_finding_criteria`<sup>Optional</sup> <a name="ocsf_finding_criteria" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.putCriteria.parameter.ocsfFindingCriteria"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteria">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteria</a>

The filtering conditions that align with OCSF standards.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/securityhub_automation_rule_v2#ocsf_finding_criteria SecurityhubAutomationRuleV2#ocsf_finding_criteria}

---

##### `reset_rule_status` <a name="reset_rule_status" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.resetRuleStatus"></a>

```python
def reset_rule_status() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a SecurityhubAutomationRuleV2 resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.isConstruct"></a>

```python
from cdktn_provider_awscc import securityhub_automation_rule_v2

securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.isTerraformElement"></a>

```python
from cdktn_provider_awscc import securityhub_automation_rule_v2

securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.isTerraformResource"></a>

```python
from cdktn_provider_awscc import securityhub_automation_rule_v2

securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import securityhub_automation_rule_v2

securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a SecurityhubAutomationRuleV2 resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SecurityhubAutomationRuleV2 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SecurityhubAutomationRuleV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/securityhub_automation_rule_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SecurityhubAutomationRuleV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.actions">actions</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsList">SecurityhubAutomationRuleV2ActionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.criteria">criteria</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference">SecurityhubAutomationRuleV2CriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.ruleArn">rule_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.ruleId">rule_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.actionsInput">actions_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Actions">SecurityhubAutomationRuleV2Actions</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.criteriaInput">criteria_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Criteria">SecurityhubAutomationRuleV2Criteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.ruleNameInput">rule_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.ruleOrderInput">rule_order_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.ruleStatusInput">rule_status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.ruleName">rule_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.ruleOrder">rule_order</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.ruleStatus">rule_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.actions"></a>

```python
actions: SecurityhubAutomationRuleV2ActionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsList">SecurityhubAutomationRuleV2ActionsList</a>

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `criteria`<sup>Required</sup> <a name="criteria" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.criteria"></a>

```python
criteria: SecurityhubAutomationRuleV2CriteriaOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference">SecurityhubAutomationRuleV2CriteriaOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `rule_arn`<sup>Required</sup> <a name="rule_arn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.ruleArn"></a>

```python
rule_arn: str
```

- *Type:* str

---

##### `rule_id`<sup>Required</sup> <a name="rule_id" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.ruleId"></a>

```python
rule_id: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `actions_input`<sup>Optional</sup> <a name="actions_input" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.actionsInput"></a>

```python
actions_input: IResolvable | typing.List[SecurityhubAutomationRuleV2Actions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Actions">SecurityhubAutomationRuleV2Actions</a>]

---

##### `criteria_input`<sup>Optional</sup> <a name="criteria_input" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.criteriaInput"></a>

```python
criteria_input: IResolvable | SecurityhubAutomationRuleV2Criteria
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Criteria">SecurityhubAutomationRuleV2Criteria</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `rule_name_input`<sup>Optional</sup> <a name="rule_name_input" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.ruleNameInput"></a>

```python
rule_name_input: str
```

- *Type:* str

---

##### `rule_order_input`<sup>Optional</sup> <a name="rule_order_input" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.ruleOrderInput"></a>

```python
rule_order_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rule_status_input`<sup>Optional</sup> <a name="rule_status_input" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.ruleStatusInput"></a>

```python
rule_status_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `rule_name`<sup>Required</sup> <a name="rule_name" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.ruleName"></a>

```python
rule_name: str
```

- *Type:* str

---

##### `rule_order`<sup>Required</sup> <a name="rule_order" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.ruleOrder"></a>

```python
rule_order: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rule_status`<sup>Required</sup> <a name="rule_status" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.ruleStatus"></a>

```python
rule_status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityhubAutomationRuleV2Actions <a name="SecurityhubAutomationRuleV2Actions" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Actions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Actions.Initializer"></a>

```python
from cdktn_provider_awscc import securityhub_automation_rule_v2

securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Actions(
  type: str,
  external_integration_configuration: SecurityhubAutomationRuleV2ActionsExternalIntegrationConfiguration = None,
  finding_fields_update: SecurityhubAutomationRuleV2ActionsFindingFieldsUpdate = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Actions.property.type">type</a></code> | <code>str</code> | The category of action to be executed by the automation rule. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Actions.property.externalIntegrationConfiguration">external_integration_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfiguration">SecurityhubAutomationRuleV2ActionsExternalIntegrationConfiguration</a></code> | The settings for integrating automation rule actions with external systems or service. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Actions.property.findingFieldsUpdate">finding_fields_update</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdate">SecurityhubAutomationRuleV2ActionsFindingFieldsUpdate</a></code> | The changes to be applied to fields in a security finding when an automation rule is triggered. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Actions.property.type"></a>

```python
type: str
```

- *Type:* str

The category of action to be executed by the automation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/securityhub_automation_rule_v2#type SecurityhubAutomationRuleV2#type}

---

##### `external_integration_configuration`<sup>Optional</sup> <a name="external_integration_configuration" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Actions.property.externalIntegrationConfiguration"></a>

```python
external_integration_configuration: SecurityhubAutomationRuleV2ActionsExternalIntegrationConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfiguration">SecurityhubAutomationRuleV2ActionsExternalIntegrationConfiguration</a>

The settings for integrating automation rule actions with external systems or service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/securityhub_automation_rule_v2#external_integration_configuration SecurityhubAutomationRuleV2#external_integration_configuration}

---

##### `finding_fields_update`<sup>Optional</sup> <a name="finding_fields_update" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Actions.property.findingFieldsUpdate"></a>

```python
finding_fields_update: SecurityhubAutomationRuleV2ActionsFindingFieldsUpdate
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdate">SecurityhubAutomationRuleV2ActionsFindingFieldsUpdate</a>

The changes to be applied to fields in a security finding when an automation rule is triggered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/securityhub_automation_rule_v2#finding_fields_update SecurityhubAutomationRuleV2#finding_fields_update}

---

### SecurityhubAutomationRuleV2ActionsExternalIntegrationConfiguration <a name="SecurityhubAutomationRuleV2ActionsExternalIntegrationConfiguration" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import securityhub_automation_rule_v2

securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfiguration(
  connector_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfiguration.property.connectorArn">connector_arn</a></code> | <code>str</code> | The ARN of the connector that establishes the integration. |

---

##### `connector_arn`<sup>Optional</sup> <a name="connector_arn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfiguration.property.connectorArn"></a>

```python
connector_arn: str
```

- *Type:* str

The ARN of the connector that establishes the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/securityhub_automation_rule_v2#connector_arn SecurityhubAutomationRuleV2#connector_arn}

---

### SecurityhubAutomationRuleV2ActionsFindingFieldsUpdate <a name="SecurityhubAutomationRuleV2ActionsFindingFieldsUpdate" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdate.Initializer"></a>

```python
from cdktn_provider_awscc import securityhub_automation_rule_v2

securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdate(
  comment: str = None,
  severity_id: typing.Union[int, float] = None,
  status_id: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdate.property.comment">comment</a></code> | <code>str</code> | Notes or contextual information for findings that are modified by the automation rule. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdate.property.severityId">severity_id</a></code> | <code>typing.Union[int, float]</code> | The severity level to be assigned to findings that match the automation rule criteria. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdate.property.statusId">status_id</a></code> | <code>typing.Union[int, float]</code> | The status to be applied to findings that match automation rule criteria. |

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdate.property.comment"></a>

```python
comment: str
```

- *Type:* str

Notes or contextual information for findings that are modified by the automation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/securityhub_automation_rule_v2#comment SecurityhubAutomationRuleV2#comment}

---

##### `severity_id`<sup>Optional</sup> <a name="severity_id" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdate.property.severityId"></a>

```python
severity_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The severity level to be assigned to findings that match the automation rule criteria.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/securityhub_automation_rule_v2#severity_id SecurityhubAutomationRuleV2#severity_id}

---

##### `status_id`<sup>Optional</sup> <a name="status_id" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdate.property.statusId"></a>

```python
status_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The status to be applied to findings that match automation rule criteria.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/securityhub_automation_rule_v2#status_id SecurityhubAutomationRuleV2#status_id}

---

### SecurityhubAutomationRuleV2Config <a name="SecurityhubAutomationRuleV2Config" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.Initializer"></a>

```python
from cdktn_provider_awscc import securityhub_automation_rule_v2

securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  actions: IResolvable | typing.List[SecurityhubAutomationRuleV2Actions],
  criteria: SecurityhubAutomationRuleV2Criteria,
  description: str,
  rule_name: str,
  rule_order: typing.Union[int, float],
  rule_status: str = None,
  tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.actions">actions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Actions">SecurityhubAutomationRuleV2Actions</a>]</code> | A list of actions to be performed when the rule criteria is met. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.criteria">criteria</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Criteria">SecurityhubAutomationRuleV2Criteria</a></code> | Defines the parameters and conditions used to evaluate and filter security findings. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.description">description</a></code> | <code>str</code> | A description of the automation rule. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.ruleName">rule_name</a></code> | <code>str</code> | The name of the automation rule. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.ruleOrder">rule_order</a></code> | <code>typing.Union[int, float]</code> | The value for the rule priority. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.ruleStatus">rule_status</a></code> | <code>str</code> | The status of the automation rule. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | A key-value pair to associate with a resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.actions"></a>

```python
actions: IResolvable | typing.List[SecurityhubAutomationRuleV2Actions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Actions">SecurityhubAutomationRuleV2Actions</a>]

A list of actions to be performed when the rule criteria is met.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/securityhub_automation_rule_v2#actions SecurityhubAutomationRuleV2#actions}

---

##### `criteria`<sup>Required</sup> <a name="criteria" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.criteria"></a>

```python
criteria: SecurityhubAutomationRuleV2Criteria
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Criteria">SecurityhubAutomationRuleV2Criteria</a>

Defines the parameters and conditions used to evaluate and filter security findings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/securityhub_automation_rule_v2#criteria SecurityhubAutomationRuleV2#criteria}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.description"></a>

```python
description: str
```

- *Type:* str

A description of the automation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/securityhub_automation_rule_v2#description SecurityhubAutomationRuleV2#description}

---

##### `rule_name`<sup>Required</sup> <a name="rule_name" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.ruleName"></a>

```python
rule_name: str
```

- *Type:* str

The name of the automation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/securityhub_automation_rule_v2#rule_name SecurityhubAutomationRuleV2#rule_name}

---

##### `rule_order`<sup>Required</sup> <a name="rule_order" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.ruleOrder"></a>

```python
rule_order: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The value for the rule priority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/securityhub_automation_rule_v2#rule_order SecurityhubAutomationRuleV2#rule_order}

---

##### `rule_status`<sup>Optional</sup> <a name="rule_status" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.ruleStatus"></a>

```python
rule_status: str
```

- *Type:* str

The status of the automation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/securityhub_automation_rule_v2#rule_status SecurityhubAutomationRuleV2#rule_status}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A key-value pair to associate with a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/securityhub_automation_rule_v2#tags SecurityhubAutomationRuleV2#tags}

---

### SecurityhubAutomationRuleV2Criteria <a name="SecurityhubAutomationRuleV2Criteria" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Criteria"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Criteria.Initializer"></a>

```python
from cdktn_provider_awscc import securityhub_automation_rule_v2

securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Criteria(
  ocsf_finding_criteria: SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteria = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Criteria.property.ocsfFindingCriteria">ocsf_finding_criteria</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteria">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteria</a></code> | The filtering conditions that align with OCSF standards. |

---

##### `ocsf_finding_criteria`<sup>Optional</sup> <a name="ocsf_finding_criteria" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Criteria.property.ocsfFindingCriteria"></a>

```python
ocsf_finding_criteria: SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteria
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteria">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteria</a>

The filtering conditions that align with OCSF standards.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/securityhub_automation_rule_v2#ocsf_finding_criteria SecurityhubAutomationRuleV2#ocsf_finding_criteria}

---

### SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteria <a name="SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteria" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteria.Initializer"></a>

```python
from cdktn_provider_awscc import securityhub_automation_rule_v2

securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteria(
  composite_filters: IResolvable | typing.List[SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters] = None,
  composite_operator: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteria.property.compositeFilters">composite_filters</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters</a>]</code> | Enables the creation of complex filtering conditions by combining filter. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteria.property.compositeOperator">composite_operator</a></code> | <code>str</code> | The logical operator used to combine multiple conditions. |

---

##### `composite_filters`<sup>Optional</sup> <a name="composite_filters" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteria.property.compositeFilters"></a>

```python
composite_filters: IResolvable | typing.List[SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters</a>]

Enables the creation of complex filtering conditions by combining filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/securityhub_automation_rule_v2#composite_filters SecurityhubAutomationRuleV2#composite_filters}

---

##### `composite_operator`<sup>Optional</sup> <a name="composite_operator" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteria.property.compositeOperator"></a>

```python
composite_operator: str
```

- *Type:* str

The logical operator used to combine multiple conditions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/securityhub_automation_rule_v2#composite_operator SecurityhubAutomationRuleV2#composite_operator}

---

### SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters <a name="SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters.Initializer"></a>

```python
from cdktn_provider_awscc import securityhub_automation_rule_v2

securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters(
  boolean_filters: IResolvable | typing.List[SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFilters] = None,
  date_filters: IResolvable | typing.List[SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFilters] = None,
  map_filters: IResolvable | typing.List[SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFilters] = None,
  number_filters: IResolvable | typing.List[SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFilters] = None,
  operator: str = None,
  string_filters: IResolvable | typing.List[SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFilters] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters.property.booleanFilters">boolean_filters</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFilters</a>]</code> | Enables filtering based on boolean field values. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters.property.dateFilters">date_filters</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFilters</a>]</code> | Enables filtering based on date and timestamp fields. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters.property.mapFilters">map_filters</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFilters</a>]</code> | Enables filtering based on map field value. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters.property.numberFilters">number_filters</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFilters</a>]</code> | Enables filtering based on numerical field values. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters.property.operator">operator</a></code> | <code>str</code> | The logical operator used to combine multiple conditions. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters.property.stringFilters">string_filters</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFilters</a>]</code> | Enables filtering based on string field values. |

---

##### `boolean_filters`<sup>Optional</sup> <a name="boolean_filters" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters.property.booleanFilters"></a>

```python
boolean_filters: IResolvable | typing.List[SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFilters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFilters</a>]

Enables filtering based on boolean field values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/securityhub_automation_rule_v2#boolean_filters SecurityhubAutomationRuleV2#boolean_filters}

---

##### `date_filters`<sup>Optional</sup> <a name="date_filters" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters.property.dateFilters"></a>

```python
date_filters: IResolvable | typing.List[SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFilters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFilters</a>]

Enables filtering based on date and timestamp fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/securityhub_automation_rule_v2#date_filters SecurityhubAutomationRuleV2#date_filters}

---

##### `map_filters`<sup>Optional</sup> <a name="map_filters" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters.property.mapFilters"></a>

```python
map_filters: IResolvable | typing.List[SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFilters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFilters</a>]

Enables filtering based on map field value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/securityhub_automation_rule_v2#map_filters SecurityhubAutomationRuleV2#map_filters}

---

##### `number_filters`<sup>Optional</sup> <a name="number_filters" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters.property.numberFilters"></a>

```python
number_filters: IResolvable | typing.List[SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFilters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFilters</a>]

Enables filtering based on numerical field values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/securityhub_automation_rule_v2#number_filters SecurityhubAutomationRuleV2#number_filters}

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters.property.operator"></a>

```python
operator: str
```

- *Type:* str

The logical operator used to combine multiple conditions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/securityhub_automation_rule_v2#operator SecurityhubAutomationRuleV2#operator}

---

##### `string_filters`<sup>Optional</sup> <a name="string_filters" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters.property.stringFilters"></a>

```python
string_filters: IResolvable | typing.List[SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFilters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFilters</a>]

Enables filtering based on string field values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/securityhub_automation_rule_v2#string_filters SecurityhubAutomationRuleV2#string_filters}

---

### SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFilters <a name="SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFilters" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFilters.Initializer"></a>

```python
from cdktn_provider_awscc import securityhub_automation_rule_v2

securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFilters(
  field_name: str = None,
  filter: SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilter = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFilters.property.fieldName">field_name</a></code> | <code>str</code> | The name of the field. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFilters.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilter">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilter</a></code> | Boolean filter for querying findings. |

---

##### `field_name`<sup>Optional</sup> <a name="field_name" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFilters.property.fieldName"></a>

```python
field_name: str
```

- *Type:* str

The name of the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/securityhub_automation_rule_v2#field_name SecurityhubAutomationRuleV2#field_name}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFilters.property.filter"></a>

```python
filter: SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilter
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilter">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilter</a>

Boolean filter for querying findings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/securityhub_automation_rule_v2#filter SecurityhubAutomationRuleV2#filter}

---

### SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilter <a name="SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilter" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilter.Initializer"></a>

```python
from cdktn_provider_awscc import securityhub_automation_rule_v2

securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilter(
  value: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilter.property.value">value</a></code> | <code>bool \| cdktn.IResolvable</code> | The value of the boolean. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilter.property.value"></a>

```python
value: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

The value of the boolean.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/securityhub_automation_rule_v2#value SecurityhubAutomationRuleV2#value}

---

### SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFilters <a name="SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFilters" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFilters.Initializer"></a>

```python
from cdktn_provider_awscc import securityhub_automation_rule_v2

securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFilters(
  field_name: str = None,
  filter: SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilter = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFilters.property.fieldName">field_name</a></code> | <code>str</code> | The name of the field. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFilters.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilter">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilter</a></code> | A date filter for querying findings. |

---

##### `field_name`<sup>Optional</sup> <a name="field_name" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFilters.property.fieldName"></a>

```python
field_name: str
```

- *Type:* str

The name of the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/securityhub_automation_rule_v2#field_name SecurityhubAutomationRuleV2#field_name}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFilters.property.filter"></a>

```python
filter: SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilter
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilter">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilter</a>

A date filter for querying findings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/securityhub_automation_rule_v2#filter SecurityhubAutomationRuleV2#filter}

---

### SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilter <a name="SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilter" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilter.Initializer"></a>

```python
from cdktn_provider_awscc import securityhub_automation_rule_v2

securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilter(
  date_range: SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRange = None,
  end: str = None,
  start: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilter.property.dateRange">date_range</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRange">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRange</a></code> | A date range for the date filter. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilter.property.end">end</a></code> | <code>str</code> | The timestamp formatted in ISO8601. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilter.property.start">start</a></code> | <code>str</code> | The timestamp formatted in ISO8601. |

---

##### `date_range`<sup>Optional</sup> <a name="date_range" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilter.property.dateRange"></a>

```python
date_range: SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRange
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRange">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRange</a>

A date range for the date filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/securityhub_automation_rule_v2#date_range SecurityhubAutomationRuleV2#date_range}

---

##### `end`<sup>Optional</sup> <a name="end" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilter.property.end"></a>

```python
end: str
```

- *Type:* str

The timestamp formatted in ISO8601.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/securityhub_automation_rule_v2#end SecurityhubAutomationRuleV2#end}

---

##### `start`<sup>Optional</sup> <a name="start" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilter.property.start"></a>

```python
start: str
```

- *Type:* str

The timestamp formatted in ISO8601.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/securityhub_automation_rule_v2#start SecurityhubAutomationRuleV2#start}

---

### SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRange <a name="SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRange" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRange.Initializer"></a>

```python
from cdktn_provider_awscc import securityhub_automation_rule_v2

securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRange(
  unit: str = None,
  value: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRange.property.unit">unit</a></code> | <code>str</code> | A date range unit for the date filter. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRange.property.value">value</a></code> | <code>typing.Union[int, float]</code> | A date range value for the date filter. |

---

##### `unit`<sup>Optional</sup> <a name="unit" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRange.property.unit"></a>

```python
unit: str
```

- *Type:* str

A date range unit for the date filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/securityhub_automation_rule_v2#unit SecurityhubAutomationRuleV2#unit}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRange.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

A date range value for the date filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/securityhub_automation_rule_v2#value SecurityhubAutomationRuleV2#value}

---

### SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFilters <a name="SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFilters" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFilters.Initializer"></a>

```python
from cdktn_provider_awscc import securityhub_automation_rule_v2

securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFilters(
  field_name: str = None,
  filter: SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilter = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFilters.property.fieldName">field_name</a></code> | <code>str</code> | The name of the field. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFilters.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilter">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilter</a></code> | A map filter for filtering findings. |

---

##### `field_name`<sup>Optional</sup> <a name="field_name" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFilters.property.fieldName"></a>

```python
field_name: str
```

- *Type:* str

The name of the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/securityhub_automation_rule_v2#field_name SecurityhubAutomationRuleV2#field_name}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFilters.property.filter"></a>

```python
filter: SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilter
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilter">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilter</a>

A map filter for filtering findings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/securityhub_automation_rule_v2#filter SecurityhubAutomationRuleV2#filter}

---

### SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilter <a name="SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilter" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilter.Initializer"></a>

```python
from cdktn_provider_awscc import securityhub_automation_rule_v2

securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilter(
  comparison: str = None,
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilter.property.comparison">comparison</a></code> | <code>str</code> | The condition to apply to the key value when filtering findings with a map filter. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilter.property.key">key</a></code> | <code>str</code> | The key of the map filter. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilter.property.value">value</a></code> | <code>str</code> | The value for the key in the map filter. |

---

##### `comparison`<sup>Optional</sup> <a name="comparison" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilter.property.comparison"></a>

```python
comparison: str
```

- *Type:* str

The condition to apply to the key value when filtering findings with a map filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/securityhub_automation_rule_v2#comparison SecurityhubAutomationRuleV2#comparison}

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilter.property.key"></a>

```python
key: str
```

- *Type:* str

The key of the map filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/securityhub_automation_rule_v2#key SecurityhubAutomationRuleV2#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilter.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the key in the map filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/securityhub_automation_rule_v2#value SecurityhubAutomationRuleV2#value}

---

### SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFilters <a name="SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFilters" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFilters.Initializer"></a>

```python
from cdktn_provider_awscc import securityhub_automation_rule_v2

securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFilters(
  field_name: str = None,
  filter: SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilter = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFilters.property.fieldName">field_name</a></code> | <code>str</code> | The name of the field. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFilters.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilter">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilter</a></code> | A number filter for querying findings. |

---

##### `field_name`<sup>Optional</sup> <a name="field_name" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFilters.property.fieldName"></a>

```python
field_name: str
```

- *Type:* str

The name of the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/securityhub_automation_rule_v2#field_name SecurityhubAutomationRuleV2#field_name}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFilters.property.filter"></a>

```python
filter: SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilter
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilter">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilter</a>

A number filter for querying findings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/securityhub_automation_rule_v2#filter SecurityhubAutomationRuleV2#filter}

---

### SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilter <a name="SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilter" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilter.Initializer"></a>

```python
from cdktn_provider_awscc import securityhub_automation_rule_v2

securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilter(
  eq: typing.Union[int, float] = None,
  gte: typing.Union[int, float] = None,
  lte: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilter.property.eq">eq</a></code> | <code>typing.Union[int, float]</code> | The equal-to condition to be applied to a single field when querying for findings. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilter.property.gte">gte</a></code> | <code>typing.Union[int, float]</code> | The greater-than-equal condition to be applied to a single field when querying for findings. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilter.property.lte">lte</a></code> | <code>typing.Union[int, float]</code> | The less-than-equal condition to be applied to a single field when querying for findings. |

---

##### `eq`<sup>Optional</sup> <a name="eq" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilter.property.eq"></a>

```python
eq: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The equal-to condition to be applied to a single field when querying for findings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/securityhub_automation_rule_v2#eq SecurityhubAutomationRuleV2#eq}

---

##### `gte`<sup>Optional</sup> <a name="gte" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilter.property.gte"></a>

```python
gte: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The greater-than-equal condition to be applied to a single field when querying for findings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/securityhub_automation_rule_v2#gte SecurityhubAutomationRuleV2#gte}

---

##### `lte`<sup>Optional</sup> <a name="lte" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilter.property.lte"></a>

```python
lte: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The less-than-equal condition to be applied to a single field when querying for findings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/securityhub_automation_rule_v2#lte SecurityhubAutomationRuleV2#lte}

---

### SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFilters <a name="SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFilters" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFilters.Initializer"></a>

```python
from cdktn_provider_awscc import securityhub_automation_rule_v2

securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFilters(
  field_name: str = None,
  filter: SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilter = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFilters.property.fieldName">field_name</a></code> | <code>str</code> | The name of the field. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFilters.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilter">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilter</a></code> | A string filter for filtering findings. |

---

##### `field_name`<sup>Optional</sup> <a name="field_name" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFilters.property.fieldName"></a>

```python
field_name: str
```

- *Type:* str

The name of the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/securityhub_automation_rule_v2#field_name SecurityhubAutomationRuleV2#field_name}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFilters.property.filter"></a>

```python
filter: SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilter
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilter">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilter</a>

A string filter for filtering findings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/securityhub_automation_rule_v2#filter SecurityhubAutomationRuleV2#filter}

---

### SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilter <a name="SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilter" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilter.Initializer"></a>

```python
from cdktn_provider_awscc import securityhub_automation_rule_v2

securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilter(
  comparison: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilter.property.comparison">comparison</a></code> | <code>str</code> | The condition to apply to a string value when filtering findings. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilter.property.value">value</a></code> | <code>str</code> | The string filter value. |

---

##### `comparison`<sup>Optional</sup> <a name="comparison" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilter.property.comparison"></a>

```python
comparison: str
```

- *Type:* str

The condition to apply to a string value when filtering findings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/securityhub_automation_rule_v2#comparison SecurityhubAutomationRuleV2#comparison}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilter.property.value"></a>

```python
value: str
```

- *Type:* str

The string filter value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/securityhub_automation_rule_v2#value SecurityhubAutomationRuleV2#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference <a name="SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import securityhub_automation_rule_v2

securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.resetConnectorArn">reset_connector_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_connector_arn` <a name="reset_connector_arn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.resetConnectorArn"></a>

```python
def reset_connector_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.property.connectorArnInput">connector_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.property.connectorArn">connector_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfiguration">SecurityhubAutomationRuleV2ActionsExternalIntegrationConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connector_arn_input`<sup>Optional</sup> <a name="connector_arn_input" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.property.connectorArnInput"></a>

```python
connector_arn_input: str
```

- *Type:* str

---

##### `connector_arn`<sup>Required</sup> <a name="connector_arn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.property.connectorArn"></a>

```python
connector_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SecurityhubAutomationRuleV2ActionsExternalIntegrationConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfiguration">SecurityhubAutomationRuleV2ActionsExternalIntegrationConfiguration</a>

---


### SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference <a name="SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import securityhub_automation_rule_v2

securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.resetSeverityId">reset_severity_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.resetStatusId">reset_status_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_comment` <a name="reset_comment" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_severity_id` <a name="reset_severity_id" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.resetSeverityId"></a>

```python
def reset_severity_id() -> None
```

##### `reset_status_id` <a name="reset_status_id" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.resetStatusId"></a>

```python
def reset_status_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.property.severityIdInput">severity_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.property.statusIdInput">status_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.property.severityId">severity_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.property.statusId">status_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdate">SecurityhubAutomationRuleV2ActionsFindingFieldsUpdate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `severity_id_input`<sup>Optional</sup> <a name="severity_id_input" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.property.severityIdInput"></a>

```python
severity_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `status_id_input`<sup>Optional</sup> <a name="status_id_input" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.property.statusIdInput"></a>

```python
status_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `severity_id`<sup>Required</sup> <a name="severity_id" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.property.severityId"></a>

```python
severity_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `status_id`<sup>Required</sup> <a name="status_id" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.property.statusId"></a>

```python
status_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SecurityhubAutomationRuleV2ActionsFindingFieldsUpdate
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdate">SecurityhubAutomationRuleV2ActionsFindingFieldsUpdate</a>

---


### SecurityhubAutomationRuleV2ActionsList <a name="SecurityhubAutomationRuleV2ActionsList" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsList.Initializer"></a>

```python
from cdktn_provider_awscc import securityhub_automation_rule_v2

securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SecurityhubAutomationRuleV2ActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Actions">SecurityhubAutomationRuleV2Actions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SecurityhubAutomationRuleV2Actions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Actions">SecurityhubAutomationRuleV2Actions</a>]

---


### SecurityhubAutomationRuleV2ActionsOutputReference <a name="SecurityhubAutomationRuleV2ActionsOutputReference" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import securityhub_automation_rule_v2

securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.putExternalIntegrationConfiguration">put_external_integration_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.putFindingFieldsUpdate">put_finding_fields_update</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.resetExternalIntegrationConfiguration">reset_external_integration_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.resetFindingFieldsUpdate">reset_finding_fields_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_external_integration_configuration` <a name="put_external_integration_configuration" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.putExternalIntegrationConfiguration"></a>

```python
def put_external_integration_configuration(
  connector_arn: str = None
) -> None
```

###### `connector_arn`<sup>Optional</sup> <a name="connector_arn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.putExternalIntegrationConfiguration.parameter.connectorArn"></a>

- *Type:* str

The ARN of the connector that establishes the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/securityhub_automation_rule_v2#connector_arn SecurityhubAutomationRuleV2#connector_arn}

---

##### `put_finding_fields_update` <a name="put_finding_fields_update" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.putFindingFieldsUpdate"></a>

```python
def put_finding_fields_update(
  comment: str = None,
  severity_id: typing.Union[int, float] = None,
  status_id: typing.Union[int, float] = None
) -> None
```

###### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.putFindingFieldsUpdate.parameter.comment"></a>

- *Type:* str

Notes or contextual information for findings that are modified by the automation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/securityhub_automation_rule_v2#comment SecurityhubAutomationRuleV2#comment}

---

###### `severity_id`<sup>Optional</sup> <a name="severity_id" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.putFindingFieldsUpdate.parameter.severityId"></a>

- *Type:* typing.Union[int, float]

The severity level to be assigned to findings that match the automation rule criteria.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/securityhub_automation_rule_v2#severity_id SecurityhubAutomationRuleV2#severity_id}

---

###### `status_id`<sup>Optional</sup> <a name="status_id" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.putFindingFieldsUpdate.parameter.statusId"></a>

- *Type:* typing.Union[int, float]

The status to be applied to findings that match automation rule criteria.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/securityhub_automation_rule_v2#status_id SecurityhubAutomationRuleV2#status_id}

---

##### `reset_external_integration_configuration` <a name="reset_external_integration_configuration" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.resetExternalIntegrationConfiguration"></a>

```python
def reset_external_integration_configuration() -> None
```

##### `reset_finding_fields_update` <a name="reset_finding_fields_update" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.resetFindingFieldsUpdate"></a>

```python
def reset_finding_fields_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.property.externalIntegrationConfiguration">external_integration_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference">SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.property.findingFieldsUpdate">finding_fields_update</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference">SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.property.externalIntegrationConfigurationInput">external_integration_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfiguration">SecurityhubAutomationRuleV2ActionsExternalIntegrationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.property.findingFieldsUpdateInput">finding_fields_update_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdate">SecurityhubAutomationRuleV2ActionsFindingFieldsUpdate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Actions">SecurityhubAutomationRuleV2Actions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `external_integration_configuration`<sup>Required</sup> <a name="external_integration_configuration" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.property.externalIntegrationConfiguration"></a>

```python
external_integration_configuration: SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference">SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference</a>

---

##### `finding_fields_update`<sup>Required</sup> <a name="finding_fields_update" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.property.findingFieldsUpdate"></a>

```python
finding_fields_update: SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference">SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference</a>

---

##### `external_integration_configuration_input`<sup>Optional</sup> <a name="external_integration_configuration_input" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.property.externalIntegrationConfigurationInput"></a>

```python
external_integration_configuration_input: IResolvable | SecurityhubAutomationRuleV2ActionsExternalIntegrationConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfiguration">SecurityhubAutomationRuleV2ActionsExternalIntegrationConfiguration</a>

---

##### `finding_fields_update_input`<sup>Optional</sup> <a name="finding_fields_update_input" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.property.findingFieldsUpdateInput"></a>

```python
finding_fields_update_input: IResolvable | SecurityhubAutomationRuleV2ActionsFindingFieldsUpdate
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdate">SecurityhubAutomationRuleV2ActionsFindingFieldsUpdate</a>

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SecurityhubAutomationRuleV2Actions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Actions">SecurityhubAutomationRuleV2Actions</a>

---


### SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference <a name="SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import securityhub_automation_rule_v2

securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.property.valueInput">value_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.property.value">value</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilter">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.property.valueInput"></a>

```python
value_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.property.value"></a>

```python
value: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilter
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilter">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilter</a>

---


### SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList <a name="SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList.Initializer"></a>

```python
from cdktn_provider_awscc import securityhub_automation_rule_v2

securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFilters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFilters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFilters</a>]

---


### SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference <a name="SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import securityhub_automation_rule_v2

securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.resetFieldName">reset_field_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.resetFilter">reset_filter</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_filter` <a name="put_filter" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.putFilter"></a>

```python
def put_filter(
  value: bool | IResolvable = None
) -> None
```

###### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.putFilter.parameter.value"></a>

- *Type:* bool | cdktn.IResolvable

The value of the boolean.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/securityhub_automation_rule_v2#value SecurityhubAutomationRuleV2#value}

---

##### `reset_field_name` <a name="reset_field_name" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.resetFieldName"></a>

```python
def reset_field_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.resetFilter"></a>

```python
def reset_filter() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.property.fieldNameInput">field_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.property.filterInput">filter_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilter">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.property.fieldName">field_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFilters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.property.filter"></a>

```python
filter: SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference</a>

---

##### `field_name_input`<sup>Optional</sup> <a name="field_name_input" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.property.fieldNameInput"></a>

```python
field_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.property.filterInput"></a>

```python
filter_input: IResolvable | SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilter
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilter">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilter</a>

---

##### `field_name`<sup>Required</sup> <a name="field_name" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.property.fieldName"></a>

```python
field_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFilters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFilters</a>

---


### SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference <a name="SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import securityhub_automation_rule_v2

securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.resetUnit">reset_unit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_unit` <a name="reset_unit" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.resetUnit"></a>

```python
def reset_unit() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.property.unitInput">unit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.property.valueInput">value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.property.unit">unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRange">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRange</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `unit_input`<sup>Optional</sup> <a name="unit_input" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.property.unitInput"></a>

```python
unit_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.property.valueInput"></a>

```python
value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.property.unit"></a>

```python
unit: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRange
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRange">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRange</a>

---


### SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference <a name="SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import securityhub_automation_rule_v2

securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.putDateRange">put_date_range</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.resetDateRange">reset_date_range</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.resetEnd">reset_end</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.resetStart">reset_start</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_date_range` <a name="put_date_range" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.putDateRange"></a>

```python
def put_date_range(
  unit: str = None,
  value: typing.Union[int, float] = None
) -> None
```

###### `unit`<sup>Optional</sup> <a name="unit" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.putDateRange.parameter.unit"></a>

- *Type:* str

A date range unit for the date filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/securityhub_automation_rule_v2#unit SecurityhubAutomationRuleV2#unit}

---

###### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.putDateRange.parameter.value"></a>

- *Type:* typing.Union[int, float]

A date range value for the date filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/securityhub_automation_rule_v2#value SecurityhubAutomationRuleV2#value}

---

##### `reset_date_range` <a name="reset_date_range" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.resetDateRange"></a>

```python
def reset_date_range() -> None
```

##### `reset_end` <a name="reset_end" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.resetEnd"></a>

```python
def reset_end() -> None
```

##### `reset_start` <a name="reset_start" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.resetStart"></a>

```python
def reset_start() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.property.dateRange">date_range</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.property.dateRangeInput">date_range_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRange">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.property.endInput">end_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.property.startInput">start_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.property.end">end</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.property.start">start</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilter">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `date_range`<sup>Required</sup> <a name="date_range" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.property.dateRange"></a>

```python
date_range: SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference</a>

---

##### `date_range_input`<sup>Optional</sup> <a name="date_range_input" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.property.dateRangeInput"></a>

```python
date_range_input: IResolvable | SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRange
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRange">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRange</a>

---

##### `end_input`<sup>Optional</sup> <a name="end_input" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.property.endInput"></a>

```python
end_input: str
```

- *Type:* str

---

##### `start_input`<sup>Optional</sup> <a name="start_input" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.property.startInput"></a>

```python
start_input: str
```

- *Type:* str

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.property.end"></a>

```python
end: str
```

- *Type:* str

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.property.start"></a>

```python
start: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilter
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilter">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilter</a>

---


### SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList <a name="SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList.Initializer"></a>

```python
from cdktn_provider_awscc import securityhub_automation_rule_v2

securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFilters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFilters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFilters</a>]

---


### SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference <a name="SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import securityhub_automation_rule_v2

securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.resetFieldName">reset_field_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.resetFilter">reset_filter</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_filter` <a name="put_filter" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.putFilter"></a>

```python
def put_filter(
  date_range: SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRange = None,
  end: str = None,
  start: str = None
) -> None
```

###### `date_range`<sup>Optional</sup> <a name="date_range" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.putFilter.parameter.dateRange"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRange">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRange</a>

A date range for the date filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/securityhub_automation_rule_v2#date_range SecurityhubAutomationRuleV2#date_range}

---

###### `end`<sup>Optional</sup> <a name="end" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.putFilter.parameter.end"></a>

- *Type:* str

The timestamp formatted in ISO8601.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/securityhub_automation_rule_v2#end SecurityhubAutomationRuleV2#end}

---

###### `start`<sup>Optional</sup> <a name="start" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.putFilter.parameter.start"></a>

- *Type:* str

The timestamp formatted in ISO8601.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/securityhub_automation_rule_v2#start SecurityhubAutomationRuleV2#start}

---

##### `reset_field_name` <a name="reset_field_name" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.resetFieldName"></a>

```python
def reset_field_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.resetFilter"></a>

```python
def reset_filter() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.property.fieldNameInput">field_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.property.filterInput">filter_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilter">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.property.fieldName">field_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFilters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.property.filter"></a>

```python
filter: SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference</a>

---

##### `field_name_input`<sup>Optional</sup> <a name="field_name_input" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.property.fieldNameInput"></a>

```python
field_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.property.filterInput"></a>

```python
filter_input: IResolvable | SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilter
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilter">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilter</a>

---

##### `field_name`<sup>Required</sup> <a name="field_name" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.property.fieldName"></a>

```python
field_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFilters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFilters</a>

---


### SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList <a name="SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList.Initializer"></a>

```python
from cdktn_provider_awscc import securityhub_automation_rule_v2

securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters</a>]

---


### SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference <a name="SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import securityhub_automation_rule_v2

securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.resetComparison">reset_comparison</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_comparison` <a name="reset_comparison" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.resetComparison"></a>

```python
def reset_comparison() -> None
```

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.property.comparisonInput">comparison_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.property.comparison">comparison</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilter">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `comparison_input`<sup>Optional</sup> <a name="comparison_input" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.property.comparisonInput"></a>

```python
comparison_input: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `comparison`<sup>Required</sup> <a name="comparison" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.property.comparison"></a>

```python
comparison: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilter
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilter">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilter</a>

---


### SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList <a name="SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList.Initializer"></a>

```python
from cdktn_provider_awscc import securityhub_automation_rule_v2

securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFilters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFilters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFilters</a>]

---


### SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference <a name="SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import securityhub_automation_rule_v2

securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.resetFieldName">reset_field_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.resetFilter">reset_filter</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_filter` <a name="put_filter" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.putFilter"></a>

```python
def put_filter(
  comparison: str = None,
  key: str = None,
  value: str = None
) -> None
```

###### `comparison`<sup>Optional</sup> <a name="comparison" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.putFilter.parameter.comparison"></a>

- *Type:* str

The condition to apply to the key value when filtering findings with a map filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/securityhub_automation_rule_v2#comparison SecurityhubAutomationRuleV2#comparison}

---

###### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.putFilter.parameter.key"></a>

- *Type:* str

The key of the map filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/securityhub_automation_rule_v2#key SecurityhubAutomationRuleV2#key}

---

###### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.putFilter.parameter.value"></a>

- *Type:* str

The value for the key in the map filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/securityhub_automation_rule_v2#value SecurityhubAutomationRuleV2#value}

---

##### `reset_field_name` <a name="reset_field_name" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.resetFieldName"></a>

```python
def reset_field_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.resetFilter"></a>

```python
def reset_filter() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.property.fieldNameInput">field_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.property.filterInput">filter_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilter">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.property.fieldName">field_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFilters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.property.filter"></a>

```python
filter: SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference</a>

---

##### `field_name_input`<sup>Optional</sup> <a name="field_name_input" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.property.fieldNameInput"></a>

```python
field_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.property.filterInput"></a>

```python
filter_input: IResolvable | SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilter
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilter">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilter</a>

---

##### `field_name`<sup>Required</sup> <a name="field_name" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.property.fieldName"></a>

```python
field_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFilters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFilters</a>

---


### SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference <a name="SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import securityhub_automation_rule_v2

securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.resetEq">reset_eq</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.resetGte">reset_gte</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.resetLte">reset_lte</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_eq` <a name="reset_eq" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.resetEq"></a>

```python
def reset_eq() -> None
```

##### `reset_gte` <a name="reset_gte" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.resetGte"></a>

```python
def reset_gte() -> None
```

##### `reset_lte` <a name="reset_lte" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.resetLte"></a>

```python
def reset_lte() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.property.eqInput">eq_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.property.gteInput">gte_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.property.lteInput">lte_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.property.eq">eq</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.property.gte">gte</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.property.lte">lte</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilter">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `eq_input`<sup>Optional</sup> <a name="eq_input" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.property.eqInput"></a>

```python
eq_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `gte_input`<sup>Optional</sup> <a name="gte_input" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.property.gteInput"></a>

```python
gte_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `lte_input`<sup>Optional</sup> <a name="lte_input" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.property.lteInput"></a>

```python
lte_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `eq`<sup>Required</sup> <a name="eq" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.property.eq"></a>

```python
eq: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `gte`<sup>Required</sup> <a name="gte" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.property.gte"></a>

```python
gte: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `lte`<sup>Required</sup> <a name="lte" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.property.lte"></a>

```python
lte: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilter
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilter">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilter</a>

---


### SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList <a name="SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList.Initializer"></a>

```python
from cdktn_provider_awscc import securityhub_automation_rule_v2

securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFilters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFilters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFilters</a>]

---


### SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference <a name="SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import securityhub_automation_rule_v2

securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.resetFieldName">reset_field_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.resetFilter">reset_filter</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_filter` <a name="put_filter" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.putFilter"></a>

```python
def put_filter(
  eq: typing.Union[int, float] = None,
  gte: typing.Union[int, float] = None,
  lte: typing.Union[int, float] = None
) -> None
```

###### `eq`<sup>Optional</sup> <a name="eq" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.putFilter.parameter.eq"></a>

- *Type:* typing.Union[int, float]

The equal-to condition to be applied to a single field when querying for findings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/securityhub_automation_rule_v2#eq SecurityhubAutomationRuleV2#eq}

---

###### `gte`<sup>Optional</sup> <a name="gte" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.putFilter.parameter.gte"></a>

- *Type:* typing.Union[int, float]

The greater-than-equal condition to be applied to a single field when querying for findings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/securityhub_automation_rule_v2#gte SecurityhubAutomationRuleV2#gte}

---

###### `lte`<sup>Optional</sup> <a name="lte" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.putFilter.parameter.lte"></a>

- *Type:* typing.Union[int, float]

The less-than-equal condition to be applied to a single field when querying for findings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/securityhub_automation_rule_v2#lte SecurityhubAutomationRuleV2#lte}

---

##### `reset_field_name` <a name="reset_field_name" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.resetFieldName"></a>

```python
def reset_field_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.resetFilter"></a>

```python
def reset_filter() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.property.fieldNameInput">field_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.property.filterInput">filter_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilter">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.property.fieldName">field_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFilters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.property.filter"></a>

```python
filter: SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference</a>

---

##### `field_name_input`<sup>Optional</sup> <a name="field_name_input" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.property.fieldNameInput"></a>

```python
field_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.property.filterInput"></a>

```python
filter_input: IResolvable | SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilter
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilter">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilter</a>

---

##### `field_name`<sup>Required</sup> <a name="field_name" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.property.fieldName"></a>

```python
field_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFilters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFilters</a>

---


### SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference <a name="SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import securityhub_automation_rule_v2

securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.putBooleanFilters">put_boolean_filters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.putDateFilters">put_date_filters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.putMapFilters">put_map_filters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.putNumberFilters">put_number_filters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.putStringFilters">put_string_filters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.resetBooleanFilters">reset_boolean_filters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.resetDateFilters">reset_date_filters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.resetMapFilters">reset_map_filters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.resetNumberFilters">reset_number_filters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.resetOperator">reset_operator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.resetStringFilters">reset_string_filters</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_boolean_filters` <a name="put_boolean_filters" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.putBooleanFilters"></a>

```python
def put_boolean_filters(
  value: IResolvable | typing.List[SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFilters]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.putBooleanFilters.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFilters</a>]

---

##### `put_date_filters` <a name="put_date_filters" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.putDateFilters"></a>

```python
def put_date_filters(
  value: IResolvable | typing.List[SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFilters]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.putDateFilters.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFilters</a>]

---

##### `put_map_filters` <a name="put_map_filters" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.putMapFilters"></a>

```python
def put_map_filters(
  value: IResolvable | typing.List[SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFilters]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.putMapFilters.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFilters</a>]

---

##### `put_number_filters` <a name="put_number_filters" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.putNumberFilters"></a>

```python
def put_number_filters(
  value: IResolvable | typing.List[SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFilters]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.putNumberFilters.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFilters</a>]

---

##### `put_string_filters` <a name="put_string_filters" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.putStringFilters"></a>

```python
def put_string_filters(
  value: IResolvable | typing.List[SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFilters]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.putStringFilters.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFilters</a>]

---

##### `reset_boolean_filters` <a name="reset_boolean_filters" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.resetBooleanFilters"></a>

```python
def reset_boolean_filters() -> None
```

##### `reset_date_filters` <a name="reset_date_filters" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.resetDateFilters"></a>

```python
def reset_date_filters() -> None
```

##### `reset_map_filters` <a name="reset_map_filters" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.resetMapFilters"></a>

```python
def reset_map_filters() -> None
```

##### `reset_number_filters` <a name="reset_number_filters" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.resetNumberFilters"></a>

```python
def reset_number_filters() -> None
```

##### `reset_operator` <a name="reset_operator" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.resetOperator"></a>

```python
def reset_operator() -> None
```

##### `reset_string_filters` <a name="reset_string_filters" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.resetStringFilters"></a>

```python
def reset_string_filters() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.property.booleanFilters">boolean_filters</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.property.dateFilters">date_filters</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.property.mapFilters">map_filters</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.property.numberFilters">number_filters</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.property.stringFilters">string_filters</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.property.booleanFiltersInput">boolean_filters_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFilters</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.property.dateFiltersInput">date_filters_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFilters</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.property.mapFiltersInput">map_filters_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFilters</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.property.numberFiltersInput">number_filters_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFilters</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.property.stringFiltersInput">string_filters_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFilters</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `boolean_filters`<sup>Required</sup> <a name="boolean_filters" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.property.booleanFilters"></a>

```python
boolean_filters: SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList</a>

---

##### `date_filters`<sup>Required</sup> <a name="date_filters" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.property.dateFilters"></a>

```python
date_filters: SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList</a>

---

##### `map_filters`<sup>Required</sup> <a name="map_filters" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.property.mapFilters"></a>

```python
map_filters: SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList</a>

---

##### `number_filters`<sup>Required</sup> <a name="number_filters" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.property.numberFilters"></a>

```python
number_filters: SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList</a>

---

##### `string_filters`<sup>Required</sup> <a name="string_filters" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.property.stringFilters"></a>

```python
string_filters: SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList</a>

---

##### `boolean_filters_input`<sup>Optional</sup> <a name="boolean_filters_input" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.property.booleanFiltersInput"></a>

```python
boolean_filters_input: IResolvable | typing.List[SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFilters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFilters</a>]

---

##### `date_filters_input`<sup>Optional</sup> <a name="date_filters_input" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.property.dateFiltersInput"></a>

```python
date_filters_input: IResolvable | typing.List[SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFilters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFilters</a>]

---

##### `map_filters_input`<sup>Optional</sup> <a name="map_filters_input" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.property.mapFiltersInput"></a>

```python
map_filters_input: IResolvable | typing.List[SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFilters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFilters</a>]

---

##### `number_filters_input`<sup>Optional</sup> <a name="number_filters_input" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.property.numberFiltersInput"></a>

```python
number_filters_input: IResolvable | typing.List[SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFilters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFilters</a>]

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `string_filters_input`<sup>Optional</sup> <a name="string_filters_input" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.property.stringFiltersInput"></a>

```python
string_filters_input: IResolvable | typing.List[SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFilters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFilters</a>]

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters</a>

---


### SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference <a name="SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import securityhub_automation_rule_v2

securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.resetComparison">reset_comparison</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_comparison` <a name="reset_comparison" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.resetComparison"></a>

```python
def reset_comparison() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.property.comparisonInput">comparison_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.property.comparison">comparison</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilter">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `comparison_input`<sup>Optional</sup> <a name="comparison_input" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.property.comparisonInput"></a>

```python
comparison_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `comparison`<sup>Required</sup> <a name="comparison" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.property.comparison"></a>

```python
comparison: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilter
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilter">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilter</a>

---


### SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList <a name="SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList.Initializer"></a>

```python
from cdktn_provider_awscc import securityhub_automation_rule_v2

securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFilters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFilters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFilters</a>]

---


### SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference <a name="SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import securityhub_automation_rule_v2

securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.resetFieldName">reset_field_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.resetFilter">reset_filter</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_filter` <a name="put_filter" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.putFilter"></a>

```python
def put_filter(
  comparison: str = None,
  value: str = None
) -> None
```

###### `comparison`<sup>Optional</sup> <a name="comparison" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.putFilter.parameter.comparison"></a>

- *Type:* str

The condition to apply to a string value when filtering findings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/securityhub_automation_rule_v2#comparison SecurityhubAutomationRuleV2#comparison}

---

###### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.putFilter.parameter.value"></a>

- *Type:* str

The string filter value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/securityhub_automation_rule_v2#value SecurityhubAutomationRuleV2#value}

---

##### `reset_field_name` <a name="reset_field_name" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.resetFieldName"></a>

```python
def reset_field_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.resetFilter"></a>

```python
def reset_filter() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.property.fieldNameInput">field_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.property.filterInput">filter_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilter">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.property.fieldName">field_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFilters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.property.filter"></a>

```python
filter: SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference</a>

---

##### `field_name_input`<sup>Optional</sup> <a name="field_name_input" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.property.fieldNameInput"></a>

```python
field_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.property.filterInput"></a>

```python
filter_input: IResolvable | SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilter
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilter">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilter</a>

---

##### `field_name`<sup>Required</sup> <a name="field_name" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.property.fieldName"></a>

```python
field_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFilters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFilters</a>

---


### SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference <a name="SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import securityhub_automation_rule_v2

securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.putCompositeFilters">put_composite_filters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.resetCompositeFilters">reset_composite_filters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.resetCompositeOperator">reset_composite_operator</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_composite_filters` <a name="put_composite_filters" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.putCompositeFilters"></a>

```python
def put_composite_filters(
  value: IResolvable | typing.List[SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.putCompositeFilters.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters</a>]

---

##### `reset_composite_filters` <a name="reset_composite_filters" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.resetCompositeFilters"></a>

```python
def reset_composite_filters() -> None
```

##### `reset_composite_operator` <a name="reset_composite_operator" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.resetCompositeOperator"></a>

```python
def reset_composite_operator() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.property.compositeFilters">composite_filters</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.property.compositeFiltersInput">composite_filters_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.property.compositeOperatorInput">composite_operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.property.compositeOperator">composite_operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteria">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteria</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `composite_filters`<sup>Required</sup> <a name="composite_filters" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.property.compositeFilters"></a>

```python
composite_filters: SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList</a>

---

##### `composite_filters_input`<sup>Optional</sup> <a name="composite_filters_input" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.property.compositeFiltersInput"></a>

```python
composite_filters_input: IResolvable | typing.List[SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters</a>]

---

##### `composite_operator_input`<sup>Optional</sup> <a name="composite_operator_input" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.property.compositeOperatorInput"></a>

```python
composite_operator_input: str
```

- *Type:* str

---

##### `composite_operator`<sup>Required</sup> <a name="composite_operator" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.property.compositeOperator"></a>

```python
composite_operator: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteria
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteria">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteria</a>

---


### SecurityhubAutomationRuleV2CriteriaOutputReference <a name="SecurityhubAutomationRuleV2CriteriaOutputReference" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import securityhub_automation_rule_v2

securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.putOcsfFindingCriteria">put_ocsf_finding_criteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.resetOcsfFindingCriteria">reset_ocsf_finding_criteria</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_ocsf_finding_criteria` <a name="put_ocsf_finding_criteria" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.putOcsfFindingCriteria"></a>

```python
def put_ocsf_finding_criteria(
  composite_filters: IResolvable | typing.List[SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters] = None,
  composite_operator: str = None
) -> None
```

###### `composite_filters`<sup>Optional</sup> <a name="composite_filters" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.putOcsfFindingCriteria.parameter.compositeFilters"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters</a>]

Enables the creation of complex filtering conditions by combining filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/securityhub_automation_rule_v2#composite_filters SecurityhubAutomationRuleV2#composite_filters}

---

###### `composite_operator`<sup>Optional</sup> <a name="composite_operator" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.putOcsfFindingCriteria.parameter.compositeOperator"></a>

- *Type:* str

The logical operator used to combine multiple conditions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/securityhub_automation_rule_v2#composite_operator SecurityhubAutomationRuleV2#composite_operator}

---

##### `reset_ocsf_finding_criteria` <a name="reset_ocsf_finding_criteria" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.resetOcsfFindingCriteria"></a>

```python
def reset_ocsf_finding_criteria() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.property.ocsfFindingCriteria">ocsf_finding_criteria</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.property.ocsfFindingCriteriaInput">ocsf_finding_criteria_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteria">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Criteria">SecurityhubAutomationRuleV2Criteria</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ocsf_finding_criteria`<sup>Required</sup> <a name="ocsf_finding_criteria" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.property.ocsfFindingCriteria"></a>

```python
ocsf_finding_criteria: SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference</a>

---

##### `ocsf_finding_criteria_input`<sup>Optional</sup> <a name="ocsf_finding_criteria_input" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.property.ocsfFindingCriteriaInput"></a>

```python
ocsf_finding_criteria_input: IResolvable | SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteria
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteria">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteria</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SecurityhubAutomationRuleV2Criteria
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Criteria">SecurityhubAutomationRuleV2Criteria</a>

---



