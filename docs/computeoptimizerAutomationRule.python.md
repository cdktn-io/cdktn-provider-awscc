# `computeoptimizerAutomationRule` Submodule <a name="`computeoptimizerAutomationRule` Submodule" id="@cdktn/provider-awscc.computeoptimizerAutomationRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeoptimizerAutomationRule <a name="ComputeoptimizerAutomationRule" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule awscc_computeoptimizer_automation_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.Initializer"></a>

```python
from cdktn_provider_awscc import computeoptimizer_automation_rule

computeoptimizerAutomationRule.ComputeoptimizerAutomationRule(
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
  recommended_action_types: typing.List[str],
  rule_type: str,
  schedule: ComputeoptimizerAutomationRuleSchedule,
  status: str,
  criteria: ComputeoptimizerAutomationRuleCriteria = None,
  description: str = None,
  organization_configuration: ComputeoptimizerAutomationRuleOrganizationConfiguration = None,
  priority: str = None,
  tags: IResolvable | typing.List[ComputeoptimizerAutomationRuleTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the automation rule. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.Initializer.parameter.recommendedActionTypes">recommended_action_types</a></code> | <code>typing.List[str]</code> | The types of recommended actions this rule will implement. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.Initializer.parameter.ruleType">rule_type</a></code> | <code>str</code> | The type of automation rule. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.Initializer.parameter.schedule">schedule</a></code> | <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleSchedule">ComputeoptimizerAutomationRuleSchedule</a></code> | The schedule configuration for when the rule runs. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.Initializer.parameter.status">status</a></code> | <code>str</code> | The status of the automation rule. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.Initializer.parameter.criteria">criteria</a></code> | <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteria">ComputeoptimizerAutomationRuleCriteria</a></code> | Filter criteria that specify which recommended actions qualify for implementation. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of the automation rule. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.Initializer.parameter.organizationConfiguration">organization_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfiguration">ComputeoptimizerAutomationRuleOrganizationConfiguration</a></code> | Organization configuration for organization rules, including rule apply order and account scope. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.Initializer.parameter.priority">priority</a></code> | <code>str</code> | Rule priority within its group. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTags">ComputeoptimizerAutomationRuleTags</a>]</code> | Tags associated with the automation rule. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.Initializer.parameter.name"></a>

- *Type:* str

The name of the automation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#name ComputeoptimizerAutomationRule#name}

---

##### `recommended_action_types`<sup>Required</sup> <a name="recommended_action_types" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.Initializer.parameter.recommendedActionTypes"></a>

- *Type:* typing.List[str]

The types of recommended actions this rule will implement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#recommended_action_types ComputeoptimizerAutomationRule#recommended_action_types}

---

##### `rule_type`<sup>Required</sup> <a name="rule_type" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.Initializer.parameter.ruleType"></a>

- *Type:* str

The type of automation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#rule_type ComputeoptimizerAutomationRule#rule_type}

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.Initializer.parameter.schedule"></a>

- *Type:* <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleSchedule">ComputeoptimizerAutomationRuleSchedule</a>

The schedule configuration for when the rule runs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#schedule ComputeoptimizerAutomationRule#schedule}

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.Initializer.parameter.status"></a>

- *Type:* str

The status of the automation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#status ComputeoptimizerAutomationRule#status}

---

##### `criteria`<sup>Optional</sup> <a name="criteria" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.Initializer.parameter.criteria"></a>

- *Type:* <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteria">ComputeoptimizerAutomationRuleCriteria</a>

Filter criteria that specify which recommended actions qualify for implementation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#criteria ComputeoptimizerAutomationRule#criteria}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.Initializer.parameter.description"></a>

- *Type:* str

The description of the automation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#description ComputeoptimizerAutomationRule#description}

---

##### `organization_configuration`<sup>Optional</sup> <a name="organization_configuration" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.Initializer.parameter.organizationConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfiguration">ComputeoptimizerAutomationRuleOrganizationConfiguration</a>

Organization configuration for organization rules, including rule apply order and account scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#organization_configuration ComputeoptimizerAutomationRule#organization_configuration}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.Initializer.parameter.priority"></a>

- *Type:* str

Rule priority within its group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#priority ComputeoptimizerAutomationRule#priority}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTags">ComputeoptimizerAutomationRuleTags</a>]

Tags associated with the automation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#tags ComputeoptimizerAutomationRule#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.putCriteria">put_criteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.putOrganizationConfiguration">put_organization_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.putSchedule">put_schedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.resetCriteria">reset_criteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.resetOrganizationConfiguration">reset_organization_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.resetPriority">reset_priority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_criteria` <a name="put_criteria" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.putCriteria"></a>

```python
def put_criteria(
  ebs_volume_size_in_gib: IResolvable | typing.List[ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib] = None,
  ebs_volume_type: IResolvable | typing.List[ComputeoptimizerAutomationRuleCriteriaEbsVolumeType] = None,
  estimated_monthly_savings: IResolvable | typing.List[ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings] = None,
  look_back_period_in_days: IResolvable | typing.List[ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays] = None,
  region: IResolvable | typing.List[ComputeoptimizerAutomationRuleCriteriaRegion] = None,
  resource_arn: IResolvable | typing.List[ComputeoptimizerAutomationRuleCriteriaResourceArn] = None,
  resource_tag: IResolvable | typing.List[ComputeoptimizerAutomationRuleCriteriaResourceTag] = None,
  restart_needed: IResolvable | typing.List[ComputeoptimizerAutomationRuleCriteriaRestartNeeded] = None
) -> None
```

###### `ebs_volume_size_in_gib`<sup>Optional</sup> <a name="ebs_volume_size_in_gib" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.putCriteria.parameter.ebsVolumeSizeInGib"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib">ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#ebs_volume_size_in_gib ComputeoptimizerAutomationRule#ebs_volume_size_in_gib}.

---

###### `ebs_volume_type`<sup>Optional</sup> <a name="ebs_volume_type" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.putCriteria.parameter.ebsVolumeType"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeType">ComputeoptimizerAutomationRuleCriteriaEbsVolumeType</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#ebs_volume_type ComputeoptimizerAutomationRule#ebs_volume_type}.

---

###### `estimated_monthly_savings`<sup>Optional</sup> <a name="estimated_monthly_savings" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.putCriteria.parameter.estimatedMonthlySavings"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings">ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#estimated_monthly_savings ComputeoptimizerAutomationRule#estimated_monthly_savings}.

---

###### `look_back_period_in_days`<sup>Optional</sup> <a name="look_back_period_in_days" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.putCriteria.parameter.lookBackPeriodInDays"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays">ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#look_back_period_in_days ComputeoptimizerAutomationRule#look_back_period_in_days}.

---

###### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.putCriteria.parameter.region"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegion">ComputeoptimizerAutomationRuleCriteriaRegion</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#region ComputeoptimizerAutomationRule#region}.

---

###### `resource_arn`<sup>Optional</sup> <a name="resource_arn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.putCriteria.parameter.resourceArn"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArn">ComputeoptimizerAutomationRuleCriteriaResourceArn</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#resource_arn ComputeoptimizerAutomationRule#resource_arn}.

---

###### `resource_tag`<sup>Optional</sup> <a name="resource_tag" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.putCriteria.parameter.resourceTag"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTag">ComputeoptimizerAutomationRuleCriteriaResourceTag</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#resource_tag ComputeoptimizerAutomationRule#resource_tag}.

---

###### `restart_needed`<sup>Optional</sup> <a name="restart_needed" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.putCriteria.parameter.restartNeeded"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeeded">ComputeoptimizerAutomationRuleCriteriaRestartNeeded</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#restart_needed ComputeoptimizerAutomationRule#restart_needed}.

---

##### `put_organization_configuration` <a name="put_organization_configuration" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.putOrganizationConfiguration"></a>

```python
def put_organization_configuration(
  account_ids: typing.List[str] = None,
  rule_apply_order: str = None
) -> None
```

###### `account_ids`<sup>Optional</sup> <a name="account_ids" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.putOrganizationConfiguration.parameter.accountIds"></a>

- *Type:* typing.List[str]

List of account IDs where the organization rule applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#account_ids ComputeoptimizerAutomationRule#account_ids}

---

###### `rule_apply_order`<sup>Optional</sup> <a name="rule_apply_order" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.putOrganizationConfiguration.parameter.ruleApplyOrder"></a>

- *Type:* str

When the rule should be applied relative to account rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#rule_apply_order ComputeoptimizerAutomationRule#rule_apply_order}

---

##### `put_schedule` <a name="put_schedule" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.putSchedule"></a>

```python
def put_schedule(
  execution_window_in_minutes: typing.Union[int, float] = None,
  schedule_expression: str = None,
  schedule_expression_timezone: str = None
) -> None
```

###### `execution_window_in_minutes`<sup>Optional</sup> <a name="execution_window_in_minutes" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.putSchedule.parameter.executionWindowInMinutes"></a>

- *Type:* typing.Union[int, float]

Execution window duration in minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#execution_window_in_minutes ComputeoptimizerAutomationRule#execution_window_in_minutes}

---

###### `schedule_expression`<sup>Optional</sup> <a name="schedule_expression" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.putSchedule.parameter.scheduleExpression"></a>

- *Type:* str

Schedule expression (e.g., cron or rate expression).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#schedule_expression ComputeoptimizerAutomationRule#schedule_expression}

---

###### `schedule_expression_timezone`<sup>Optional</sup> <a name="schedule_expression_timezone" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.putSchedule.parameter.scheduleExpressionTimezone"></a>

- *Type:* str

IANA timezone identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#schedule_expression_timezone ComputeoptimizerAutomationRule#schedule_expression_timezone}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[ComputeoptimizerAutomationRuleTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTags">ComputeoptimizerAutomationRuleTags</a>]

---

##### `reset_criteria` <a name="reset_criteria" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.resetCriteria"></a>

```python
def reset_criteria() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_organization_configuration` <a name="reset_organization_configuration" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.resetOrganizationConfiguration"></a>

```python
def reset_organization_configuration() -> None
```

##### `reset_priority` <a name="reset_priority" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.resetPriority"></a>

```python
def reset_priority() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ComputeoptimizerAutomationRule resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.isConstruct"></a>

```python
from cdktn_provider_awscc import computeoptimizer_automation_rule

computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.isTerraformElement"></a>

```python
from cdktn_provider_awscc import computeoptimizer_automation_rule

computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.isTerraformResource"></a>

```python
from cdktn_provider_awscc import computeoptimizer_automation_rule

computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import computeoptimizer_automation_rule

computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ComputeoptimizerAutomationRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ComputeoptimizerAutomationRule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ComputeoptimizerAutomationRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ComputeoptimizerAutomationRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.createdTimestamp">created_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.criteria">criteria</a></code> | <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference">ComputeoptimizerAutomationRuleCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.lastUpdatedTimestamp">last_updated_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.organizationConfiguration">organization_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference">ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.ruleArn">rule_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.ruleId">rule_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.ruleRevision">rule_revision</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.schedule">schedule</a></code> | <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference">ComputeoptimizerAutomationRuleScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsList">ComputeoptimizerAutomationRuleTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.criteriaInput">criteria_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteria">ComputeoptimizerAutomationRuleCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.organizationConfigurationInput">organization_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfiguration">ComputeoptimizerAutomationRuleOrganizationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.priorityInput">priority_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.recommendedActionTypesInput">recommended_action_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.ruleTypeInput">rule_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.scheduleInput">schedule_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleSchedule">ComputeoptimizerAutomationRuleSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTags">ComputeoptimizerAutomationRuleTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.priority">priority</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.recommendedActionTypes">recommended_action_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.ruleType">rule_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.status">status</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `created_timestamp`<sup>Required</sup> <a name="created_timestamp" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.createdTimestamp"></a>

```python
created_timestamp: str
```

- *Type:* str

---

##### `criteria`<sup>Required</sup> <a name="criteria" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.criteria"></a>

```python
criteria: ComputeoptimizerAutomationRuleCriteriaOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference">ComputeoptimizerAutomationRuleCriteriaOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_updated_timestamp`<sup>Required</sup> <a name="last_updated_timestamp" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.lastUpdatedTimestamp"></a>

```python
last_updated_timestamp: str
```

- *Type:* str

---

##### `organization_configuration`<sup>Required</sup> <a name="organization_configuration" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.organizationConfiguration"></a>

```python
organization_configuration: ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference">ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference</a>

---

##### `rule_arn`<sup>Required</sup> <a name="rule_arn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.ruleArn"></a>

```python
rule_arn: str
```

- *Type:* str

---

##### `rule_id`<sup>Required</sup> <a name="rule_id" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.ruleId"></a>

```python
rule_id: str
```

- *Type:* str

---

##### `rule_revision`<sup>Required</sup> <a name="rule_revision" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.ruleRevision"></a>

```python
rule_revision: str
```

- *Type:* str

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.schedule"></a>

```python
schedule: ComputeoptimizerAutomationRuleScheduleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference">ComputeoptimizerAutomationRuleScheduleOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.tags"></a>

```python
tags: ComputeoptimizerAutomationRuleTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsList">ComputeoptimizerAutomationRuleTagsList</a>

---

##### `criteria_input`<sup>Optional</sup> <a name="criteria_input" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.criteriaInput"></a>

```python
criteria_input: IResolvable | ComputeoptimizerAutomationRuleCriteria
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteria">ComputeoptimizerAutomationRuleCriteria</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `organization_configuration_input`<sup>Optional</sup> <a name="organization_configuration_input" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.organizationConfigurationInput"></a>

```python
organization_configuration_input: IResolvable | ComputeoptimizerAutomationRuleOrganizationConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfiguration">ComputeoptimizerAutomationRuleOrganizationConfiguration</a>

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.priorityInput"></a>

```python
priority_input: str
```

- *Type:* str

---

##### `recommended_action_types_input`<sup>Optional</sup> <a name="recommended_action_types_input" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.recommendedActionTypesInput"></a>

```python
recommended_action_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `rule_type_input`<sup>Optional</sup> <a name="rule_type_input" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.ruleTypeInput"></a>

```python
rule_type_input: str
```

- *Type:* str

---

##### `schedule_input`<sup>Optional</sup> <a name="schedule_input" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.scheduleInput"></a>

```python
schedule_input: IResolvable | ComputeoptimizerAutomationRuleSchedule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleSchedule">ComputeoptimizerAutomationRuleSchedule</a>

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[ComputeoptimizerAutomationRuleTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTags">ComputeoptimizerAutomationRuleTags</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.priority"></a>

```python
priority: str
```

- *Type:* str

---

##### `recommended_action_types`<sup>Required</sup> <a name="recommended_action_types" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.recommendedActionTypes"></a>

```python
recommended_action_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `rule_type`<sup>Required</sup> <a name="rule_type" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.ruleType"></a>

```python
rule_type: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.status"></a>

```python
status: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeoptimizerAutomationRuleConfig <a name="ComputeoptimizerAutomationRuleConfig" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.Initializer"></a>

```python
from cdktn_provider_awscc import computeoptimizer_automation_rule

computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  recommended_action_types: typing.List[str],
  rule_type: str,
  schedule: ComputeoptimizerAutomationRuleSchedule,
  status: str,
  criteria: ComputeoptimizerAutomationRuleCriteria = None,
  description: str = None,
  organization_configuration: ComputeoptimizerAutomationRuleOrganizationConfiguration = None,
  priority: str = None,
  tags: IResolvable | typing.List[ComputeoptimizerAutomationRuleTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.name">name</a></code> | <code>str</code> | The name of the automation rule. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.recommendedActionTypes">recommended_action_types</a></code> | <code>typing.List[str]</code> | The types of recommended actions this rule will implement. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.ruleType">rule_type</a></code> | <code>str</code> | The type of automation rule. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.schedule">schedule</a></code> | <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleSchedule">ComputeoptimizerAutomationRuleSchedule</a></code> | The schedule configuration for when the rule runs. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.status">status</a></code> | <code>str</code> | The status of the automation rule. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.criteria">criteria</a></code> | <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteria">ComputeoptimizerAutomationRuleCriteria</a></code> | Filter criteria that specify which recommended actions qualify for implementation. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.description">description</a></code> | <code>str</code> | The description of the automation rule. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.organizationConfiguration">organization_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfiguration">ComputeoptimizerAutomationRuleOrganizationConfiguration</a></code> | Organization configuration for organization rules, including rule apply order and account scope. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.priority">priority</a></code> | <code>str</code> | Rule priority within its group. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTags">ComputeoptimizerAutomationRuleTags</a>]</code> | Tags associated with the automation rule. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the automation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#name ComputeoptimizerAutomationRule#name}

---

##### `recommended_action_types`<sup>Required</sup> <a name="recommended_action_types" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.recommendedActionTypes"></a>

```python
recommended_action_types: typing.List[str]
```

- *Type:* typing.List[str]

The types of recommended actions this rule will implement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#recommended_action_types ComputeoptimizerAutomationRule#recommended_action_types}

---

##### `rule_type`<sup>Required</sup> <a name="rule_type" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.ruleType"></a>

```python
rule_type: str
```

- *Type:* str

The type of automation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#rule_type ComputeoptimizerAutomationRule#rule_type}

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.schedule"></a>

```python
schedule: ComputeoptimizerAutomationRuleSchedule
```

- *Type:* <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleSchedule">ComputeoptimizerAutomationRuleSchedule</a>

The schedule configuration for when the rule runs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#schedule ComputeoptimizerAutomationRule#schedule}

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.status"></a>

```python
status: str
```

- *Type:* str

The status of the automation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#status ComputeoptimizerAutomationRule#status}

---

##### `criteria`<sup>Optional</sup> <a name="criteria" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.criteria"></a>

```python
criteria: ComputeoptimizerAutomationRuleCriteria
```

- *Type:* <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteria">ComputeoptimizerAutomationRuleCriteria</a>

Filter criteria that specify which recommended actions qualify for implementation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#criteria ComputeoptimizerAutomationRule#criteria}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the automation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#description ComputeoptimizerAutomationRule#description}

---

##### `organization_configuration`<sup>Optional</sup> <a name="organization_configuration" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.organizationConfiguration"></a>

```python
organization_configuration: ComputeoptimizerAutomationRuleOrganizationConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfiguration">ComputeoptimizerAutomationRuleOrganizationConfiguration</a>

Organization configuration for organization rules, including rule apply order and account scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#organization_configuration ComputeoptimizerAutomationRule#organization_configuration}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.priority"></a>

```python
priority: str
```

- *Type:* str

Rule priority within its group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#priority ComputeoptimizerAutomationRule#priority}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[ComputeoptimizerAutomationRuleTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTags">ComputeoptimizerAutomationRuleTags</a>]

Tags associated with the automation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#tags ComputeoptimizerAutomationRule#tags}

---

### ComputeoptimizerAutomationRuleCriteria <a name="ComputeoptimizerAutomationRuleCriteria" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteria.Initializer"></a>

```python
from cdktn_provider_awscc import computeoptimizer_automation_rule

computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteria(
  ebs_volume_size_in_gib: IResolvable | typing.List[ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib] = None,
  ebs_volume_type: IResolvable | typing.List[ComputeoptimizerAutomationRuleCriteriaEbsVolumeType] = None,
  estimated_monthly_savings: IResolvable | typing.List[ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings] = None,
  look_back_period_in_days: IResolvable | typing.List[ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays] = None,
  region: IResolvable | typing.List[ComputeoptimizerAutomationRuleCriteriaRegion] = None,
  resource_arn: IResolvable | typing.List[ComputeoptimizerAutomationRuleCriteriaResourceArn] = None,
  resource_tag: IResolvable | typing.List[ComputeoptimizerAutomationRuleCriteriaResourceTag] = None,
  restart_needed: IResolvable | typing.List[ComputeoptimizerAutomationRuleCriteriaRestartNeeded] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteria.property.ebsVolumeSizeInGib">ebs_volume_size_in_gib</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib">ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#ebs_volume_size_in_gib ComputeoptimizerAutomationRule#ebs_volume_size_in_gib}. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteria.property.ebsVolumeType">ebs_volume_type</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeType">ComputeoptimizerAutomationRuleCriteriaEbsVolumeType</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#ebs_volume_type ComputeoptimizerAutomationRule#ebs_volume_type}. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteria.property.estimatedMonthlySavings">estimated_monthly_savings</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings">ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#estimated_monthly_savings ComputeoptimizerAutomationRule#estimated_monthly_savings}. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteria.property.lookBackPeriodInDays">look_back_period_in_days</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays">ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#look_back_period_in_days ComputeoptimizerAutomationRule#look_back_period_in_days}. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteria.property.region">region</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegion">ComputeoptimizerAutomationRuleCriteriaRegion</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#region ComputeoptimizerAutomationRule#region}. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteria.property.resourceArn">resource_arn</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArn">ComputeoptimizerAutomationRuleCriteriaResourceArn</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#resource_arn ComputeoptimizerAutomationRule#resource_arn}. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteria.property.resourceTag">resource_tag</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTag">ComputeoptimizerAutomationRuleCriteriaResourceTag</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#resource_tag ComputeoptimizerAutomationRule#resource_tag}. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteria.property.restartNeeded">restart_needed</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeeded">ComputeoptimizerAutomationRuleCriteriaRestartNeeded</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#restart_needed ComputeoptimizerAutomationRule#restart_needed}. |

---

##### `ebs_volume_size_in_gib`<sup>Optional</sup> <a name="ebs_volume_size_in_gib" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteria.property.ebsVolumeSizeInGib"></a>

```python
ebs_volume_size_in_gib: IResolvable | typing.List[ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib">ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#ebs_volume_size_in_gib ComputeoptimizerAutomationRule#ebs_volume_size_in_gib}.

---

##### `ebs_volume_type`<sup>Optional</sup> <a name="ebs_volume_type" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteria.property.ebsVolumeType"></a>

```python
ebs_volume_type: IResolvable | typing.List[ComputeoptimizerAutomationRuleCriteriaEbsVolumeType]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeType">ComputeoptimizerAutomationRuleCriteriaEbsVolumeType</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#ebs_volume_type ComputeoptimizerAutomationRule#ebs_volume_type}.

---

##### `estimated_monthly_savings`<sup>Optional</sup> <a name="estimated_monthly_savings" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteria.property.estimatedMonthlySavings"></a>

```python
estimated_monthly_savings: IResolvable | typing.List[ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings">ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#estimated_monthly_savings ComputeoptimizerAutomationRule#estimated_monthly_savings}.

---

##### `look_back_period_in_days`<sup>Optional</sup> <a name="look_back_period_in_days" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteria.property.lookBackPeriodInDays"></a>

```python
look_back_period_in_days: IResolvable | typing.List[ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays">ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#look_back_period_in_days ComputeoptimizerAutomationRule#look_back_period_in_days}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteria.property.region"></a>

```python
region: IResolvable | typing.List[ComputeoptimizerAutomationRuleCriteriaRegion]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegion">ComputeoptimizerAutomationRuleCriteriaRegion</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#region ComputeoptimizerAutomationRule#region}.

---

##### `resource_arn`<sup>Optional</sup> <a name="resource_arn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteria.property.resourceArn"></a>

```python
resource_arn: IResolvable | typing.List[ComputeoptimizerAutomationRuleCriteriaResourceArn]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArn">ComputeoptimizerAutomationRuleCriteriaResourceArn</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#resource_arn ComputeoptimizerAutomationRule#resource_arn}.

---

##### `resource_tag`<sup>Optional</sup> <a name="resource_tag" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteria.property.resourceTag"></a>

```python
resource_tag: IResolvable | typing.List[ComputeoptimizerAutomationRuleCriteriaResourceTag]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTag">ComputeoptimizerAutomationRuleCriteriaResourceTag</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#resource_tag ComputeoptimizerAutomationRule#resource_tag}.

---

##### `restart_needed`<sup>Optional</sup> <a name="restart_needed" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteria.property.restartNeeded"></a>

```python
restart_needed: IResolvable | typing.List[ComputeoptimizerAutomationRuleCriteriaRestartNeeded]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeeded">ComputeoptimizerAutomationRuleCriteriaRestartNeeded</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#restart_needed ComputeoptimizerAutomationRule#restart_needed}.

---

### ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib <a name="ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib.Initializer"></a>

```python
from cdktn_provider_awscc import computeoptimizer_automation_rule

computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib(
  comparison: str = None,
  values: typing.List[typing.Union[int, float]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib.property.comparison">comparison</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#comparison ComputeoptimizerAutomationRule#comparison}. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib.property.values">values</a></code> | <code>typing.List[typing.Union[int, float]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#values ComputeoptimizerAutomationRule#values}. |

---

##### `comparison`<sup>Optional</sup> <a name="comparison" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib.property.comparison"></a>

```python
comparison: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#comparison ComputeoptimizerAutomationRule#comparison}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib.property.values"></a>

```python
values: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#values ComputeoptimizerAutomationRule#values}.

---

### ComputeoptimizerAutomationRuleCriteriaEbsVolumeType <a name="ComputeoptimizerAutomationRuleCriteriaEbsVolumeType" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeType"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeType.Initializer"></a>

```python
from cdktn_provider_awscc import computeoptimizer_automation_rule

computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeType(
  comparison: str = None,
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeType.property.comparison">comparison</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#comparison ComputeoptimizerAutomationRule#comparison}. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeType.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#values ComputeoptimizerAutomationRule#values}. |

---

##### `comparison`<sup>Optional</sup> <a name="comparison" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeType.property.comparison"></a>

```python
comparison: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#comparison ComputeoptimizerAutomationRule#comparison}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeType.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#values ComputeoptimizerAutomationRule#values}.

---

### ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings <a name="ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings.Initializer"></a>

```python
from cdktn_provider_awscc import computeoptimizer_automation_rule

computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings(
  comparison: str = None,
  values: typing.List[typing.Union[int, float]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings.property.comparison">comparison</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#comparison ComputeoptimizerAutomationRule#comparison}. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings.property.values">values</a></code> | <code>typing.List[typing.Union[int, float]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#values ComputeoptimizerAutomationRule#values}. |

---

##### `comparison`<sup>Optional</sup> <a name="comparison" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings.property.comparison"></a>

```python
comparison: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#comparison ComputeoptimizerAutomationRule#comparison}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings.property.values"></a>

```python
values: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#values ComputeoptimizerAutomationRule#values}.

---

### ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays <a name="ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays.Initializer"></a>

```python
from cdktn_provider_awscc import computeoptimizer_automation_rule

computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays(
  comparison: str = None,
  values: typing.List[typing.Union[int, float]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays.property.comparison">comparison</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#comparison ComputeoptimizerAutomationRule#comparison}. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays.property.values">values</a></code> | <code>typing.List[typing.Union[int, float]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#values ComputeoptimizerAutomationRule#values}. |

---

##### `comparison`<sup>Optional</sup> <a name="comparison" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays.property.comparison"></a>

```python
comparison: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#comparison ComputeoptimizerAutomationRule#comparison}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays.property.values"></a>

```python
values: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#values ComputeoptimizerAutomationRule#values}.

---

### ComputeoptimizerAutomationRuleCriteriaRegion <a name="ComputeoptimizerAutomationRuleCriteriaRegion" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegion.Initializer"></a>

```python
from cdktn_provider_awscc import computeoptimizer_automation_rule

computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegion(
  comparison: str = None,
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegion.property.comparison">comparison</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#comparison ComputeoptimizerAutomationRule#comparison}. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegion.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#values ComputeoptimizerAutomationRule#values}. |

---

##### `comparison`<sup>Optional</sup> <a name="comparison" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegion.property.comparison"></a>

```python
comparison: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#comparison ComputeoptimizerAutomationRule#comparison}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegion.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#values ComputeoptimizerAutomationRule#values}.

---

### ComputeoptimizerAutomationRuleCriteriaResourceArn <a name="ComputeoptimizerAutomationRuleCriteriaResourceArn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArn.Initializer"></a>

```python
from cdktn_provider_awscc import computeoptimizer_automation_rule

computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArn(
  comparison: str = None,
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArn.property.comparison">comparison</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#comparison ComputeoptimizerAutomationRule#comparison}. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArn.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#values ComputeoptimizerAutomationRule#values}. |

---

##### `comparison`<sup>Optional</sup> <a name="comparison" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArn.property.comparison"></a>

```python
comparison: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#comparison ComputeoptimizerAutomationRule#comparison}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArn.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#values ComputeoptimizerAutomationRule#values}.

---

### ComputeoptimizerAutomationRuleCriteriaResourceTag <a name="ComputeoptimizerAutomationRuleCriteriaResourceTag" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTag"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTag.Initializer"></a>

```python
from cdktn_provider_awscc import computeoptimizer_automation_rule

computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTag(
  comparison: str = None,
  key: str = None,
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTag.property.comparison">comparison</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#comparison ComputeoptimizerAutomationRule#comparison}. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTag.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#key ComputeoptimizerAutomationRule#key}. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTag.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#values ComputeoptimizerAutomationRule#values}. |

---

##### `comparison`<sup>Optional</sup> <a name="comparison" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTag.property.comparison"></a>

```python
comparison: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#comparison ComputeoptimizerAutomationRule#comparison}.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTag.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#key ComputeoptimizerAutomationRule#key}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTag.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#values ComputeoptimizerAutomationRule#values}.

---

### ComputeoptimizerAutomationRuleCriteriaRestartNeeded <a name="ComputeoptimizerAutomationRuleCriteriaRestartNeeded" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeeded"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeeded.Initializer"></a>

```python
from cdktn_provider_awscc import computeoptimizer_automation_rule

computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeeded(
  comparison: str = None,
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeeded.property.comparison">comparison</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#comparison ComputeoptimizerAutomationRule#comparison}. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeeded.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#values ComputeoptimizerAutomationRule#values}. |

---

##### `comparison`<sup>Optional</sup> <a name="comparison" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeeded.property.comparison"></a>

```python
comparison: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#comparison ComputeoptimizerAutomationRule#comparison}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeeded.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#values ComputeoptimizerAutomationRule#values}.

---

### ComputeoptimizerAutomationRuleOrganizationConfiguration <a name="ComputeoptimizerAutomationRuleOrganizationConfiguration" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import computeoptimizer_automation_rule

computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfiguration(
  account_ids: typing.List[str] = None,
  rule_apply_order: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfiguration.property.accountIds">account_ids</a></code> | <code>typing.List[str]</code> | List of account IDs where the organization rule applies. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfiguration.property.ruleApplyOrder">rule_apply_order</a></code> | <code>str</code> | When the rule should be applied relative to account rules. |

---

##### `account_ids`<sup>Optional</sup> <a name="account_ids" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfiguration.property.accountIds"></a>

```python
account_ids: typing.List[str]
```

- *Type:* typing.List[str]

List of account IDs where the organization rule applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#account_ids ComputeoptimizerAutomationRule#account_ids}

---

##### `rule_apply_order`<sup>Optional</sup> <a name="rule_apply_order" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfiguration.property.ruleApplyOrder"></a>

```python
rule_apply_order: str
```

- *Type:* str

When the rule should be applied relative to account rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#rule_apply_order ComputeoptimizerAutomationRule#rule_apply_order}

---

### ComputeoptimizerAutomationRuleSchedule <a name="ComputeoptimizerAutomationRuleSchedule" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleSchedule.Initializer"></a>

```python
from cdktn_provider_awscc import computeoptimizer_automation_rule

computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleSchedule(
  execution_window_in_minutes: typing.Union[int, float] = None,
  schedule_expression: str = None,
  schedule_expression_timezone: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleSchedule.property.executionWindowInMinutes">execution_window_in_minutes</a></code> | <code>typing.Union[int, float]</code> | Execution window duration in minutes. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleSchedule.property.scheduleExpression">schedule_expression</a></code> | <code>str</code> | Schedule expression (e.g., cron or rate expression). |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleSchedule.property.scheduleExpressionTimezone">schedule_expression_timezone</a></code> | <code>str</code> | IANA timezone identifier. |

---

##### `execution_window_in_minutes`<sup>Optional</sup> <a name="execution_window_in_minutes" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleSchedule.property.executionWindowInMinutes"></a>

```python
execution_window_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Execution window duration in minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#execution_window_in_minutes ComputeoptimizerAutomationRule#execution_window_in_minutes}

---

##### `schedule_expression`<sup>Optional</sup> <a name="schedule_expression" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleSchedule.property.scheduleExpression"></a>

```python
schedule_expression: str
```

- *Type:* str

Schedule expression (e.g., cron or rate expression).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#schedule_expression ComputeoptimizerAutomationRule#schedule_expression}

---

##### `schedule_expression_timezone`<sup>Optional</sup> <a name="schedule_expression_timezone" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleSchedule.property.scheduleExpressionTimezone"></a>

```python
schedule_expression_timezone: str
```

- *Type:* str

IANA timezone identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#schedule_expression_timezone ComputeoptimizerAutomationRule#schedule_expression_timezone}

---

### ComputeoptimizerAutomationRuleTags <a name="ComputeoptimizerAutomationRuleTags" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTags.Initializer"></a>

```python
from cdktn_provider_awscc import computeoptimizer_automation_rule

computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#key ComputeoptimizerAutomationRule#key}. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#value ComputeoptimizerAutomationRule#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#key ComputeoptimizerAutomationRule#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/computeoptimizer_automation_rule#value ComputeoptimizerAutomationRule#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList <a name="ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.Initializer"></a>

```python
from cdktn_provider_awscc import computeoptimizer_automation_rule

computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib">ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib">ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib</a>]

---


### ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference <a name="ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import computeoptimizer_automation_rule

computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.resetComparison">reset_comparison</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_comparison` <a name="reset_comparison" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.resetComparison"></a>

```python
def reset_comparison() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.property.comparisonInput">comparison_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.property.comparison">comparison</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.property.values">values</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib">ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `comparison_input`<sup>Optional</sup> <a name="comparison_input" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.property.comparisonInput"></a>

```python
comparison_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `comparison`<sup>Required</sup> <a name="comparison" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.property.comparison"></a>

```python
comparison: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.property.values"></a>

```python
values: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib">ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib</a>

---


### ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList <a name="ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.Initializer"></a>

```python
from cdktn_provider_awscc import computeoptimizer_automation_rule

computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeType">ComputeoptimizerAutomationRuleCriteriaEbsVolumeType</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ComputeoptimizerAutomationRuleCriteriaEbsVolumeType]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeType">ComputeoptimizerAutomationRuleCriteriaEbsVolumeType</a>]

---


### ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference <a name="ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import computeoptimizer_automation_rule

computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.resetComparison">reset_comparison</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_comparison` <a name="reset_comparison" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.resetComparison"></a>

```python
def reset_comparison() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.property.comparisonInput">comparison_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.property.comparison">comparison</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeType">ComputeoptimizerAutomationRuleCriteriaEbsVolumeType</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `comparison_input`<sup>Optional</sup> <a name="comparison_input" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.property.comparisonInput"></a>

```python
comparison_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `comparison`<sup>Required</sup> <a name="comparison" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.property.comparison"></a>

```python
comparison: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ComputeoptimizerAutomationRuleCriteriaEbsVolumeType
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeType">ComputeoptimizerAutomationRuleCriteriaEbsVolumeType</a>

---


### ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList <a name="ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.Initializer"></a>

```python
from cdktn_provider_awscc import computeoptimizer_automation_rule

computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings">ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings">ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings</a>]

---


### ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference <a name="ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import computeoptimizer_automation_rule

computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.resetComparison">reset_comparison</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_comparison` <a name="reset_comparison" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.resetComparison"></a>

```python
def reset_comparison() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.property.comparisonInput">comparison_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.property.comparison">comparison</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.property.values">values</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings">ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `comparison_input`<sup>Optional</sup> <a name="comparison_input" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.property.comparisonInput"></a>

```python
comparison_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `comparison`<sup>Required</sup> <a name="comparison" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.property.comparison"></a>

```python
comparison: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.property.values"></a>

```python
values: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings">ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings</a>

---


### ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList <a name="ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.Initializer"></a>

```python
from cdktn_provider_awscc import computeoptimizer_automation_rule

computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays">ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays">ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays</a>]

---


### ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference <a name="ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import computeoptimizer_automation_rule

computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.resetComparison">reset_comparison</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_comparison` <a name="reset_comparison" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.resetComparison"></a>

```python
def reset_comparison() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.property.comparisonInput">comparison_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.property.comparison">comparison</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.property.values">values</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays">ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `comparison_input`<sup>Optional</sup> <a name="comparison_input" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.property.comparisonInput"></a>

```python
comparison_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `comparison`<sup>Required</sup> <a name="comparison" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.property.comparison"></a>

```python
comparison: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.property.values"></a>

```python
values: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays">ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays</a>

---


### ComputeoptimizerAutomationRuleCriteriaOutputReference <a name="ComputeoptimizerAutomationRuleCriteriaOutputReference" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import computeoptimizer_automation_rule

computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.putEbsVolumeSizeInGib">put_ebs_volume_size_in_gib</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.putEbsVolumeType">put_ebs_volume_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.putEstimatedMonthlySavings">put_estimated_monthly_savings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.putLookBackPeriodInDays">put_look_back_period_in_days</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.putRegion">put_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.putResourceArn">put_resource_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.putResourceTag">put_resource_tag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.putRestartNeeded">put_restart_needed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.resetEbsVolumeSizeInGib">reset_ebs_volume_size_in_gib</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.resetEbsVolumeType">reset_ebs_volume_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.resetEstimatedMonthlySavings">reset_estimated_monthly_savings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.resetLookBackPeriodInDays">reset_look_back_period_in_days</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.resetResourceArn">reset_resource_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.resetResourceTag">reset_resource_tag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.resetRestartNeeded">reset_restart_needed</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_ebs_volume_size_in_gib` <a name="put_ebs_volume_size_in_gib" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.putEbsVolumeSizeInGib"></a>

```python
def put_ebs_volume_size_in_gib(
  value: IResolvable | typing.List[ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.putEbsVolumeSizeInGib.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib">ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib</a>]

---

##### `put_ebs_volume_type` <a name="put_ebs_volume_type" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.putEbsVolumeType"></a>

```python
def put_ebs_volume_type(
  value: IResolvable | typing.List[ComputeoptimizerAutomationRuleCriteriaEbsVolumeType]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.putEbsVolumeType.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeType">ComputeoptimizerAutomationRuleCriteriaEbsVolumeType</a>]

---

##### `put_estimated_monthly_savings` <a name="put_estimated_monthly_savings" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.putEstimatedMonthlySavings"></a>

```python
def put_estimated_monthly_savings(
  value: IResolvable | typing.List[ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.putEstimatedMonthlySavings.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings">ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings</a>]

---

##### `put_look_back_period_in_days` <a name="put_look_back_period_in_days" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.putLookBackPeriodInDays"></a>

```python
def put_look_back_period_in_days(
  value: IResolvable | typing.List[ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.putLookBackPeriodInDays.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays">ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays</a>]

---

##### `put_region` <a name="put_region" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.putRegion"></a>

```python
def put_region(
  value: IResolvable | typing.List[ComputeoptimizerAutomationRuleCriteriaRegion]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.putRegion.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegion">ComputeoptimizerAutomationRuleCriteriaRegion</a>]

---

##### `put_resource_arn` <a name="put_resource_arn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.putResourceArn"></a>

```python
def put_resource_arn(
  value: IResolvable | typing.List[ComputeoptimizerAutomationRuleCriteriaResourceArn]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.putResourceArn.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArn">ComputeoptimizerAutomationRuleCriteriaResourceArn</a>]

---

##### `put_resource_tag` <a name="put_resource_tag" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.putResourceTag"></a>

```python
def put_resource_tag(
  value: IResolvable | typing.List[ComputeoptimizerAutomationRuleCriteriaResourceTag]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.putResourceTag.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTag">ComputeoptimizerAutomationRuleCriteriaResourceTag</a>]

---

##### `put_restart_needed` <a name="put_restart_needed" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.putRestartNeeded"></a>

```python
def put_restart_needed(
  value: IResolvable | typing.List[ComputeoptimizerAutomationRuleCriteriaRestartNeeded]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.putRestartNeeded.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeeded">ComputeoptimizerAutomationRuleCriteriaRestartNeeded</a>]

---

##### `reset_ebs_volume_size_in_gib` <a name="reset_ebs_volume_size_in_gib" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.resetEbsVolumeSizeInGib"></a>

```python
def reset_ebs_volume_size_in_gib() -> None
```

##### `reset_ebs_volume_type` <a name="reset_ebs_volume_type" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.resetEbsVolumeType"></a>

```python
def reset_ebs_volume_type() -> None
```

##### `reset_estimated_monthly_savings` <a name="reset_estimated_monthly_savings" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.resetEstimatedMonthlySavings"></a>

```python
def reset_estimated_monthly_savings() -> None
```

##### `reset_look_back_period_in_days` <a name="reset_look_back_period_in_days" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.resetLookBackPeriodInDays"></a>

```python
def reset_look_back_period_in_days() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_resource_arn` <a name="reset_resource_arn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.resetResourceArn"></a>

```python
def reset_resource_arn() -> None
```

##### `reset_resource_tag` <a name="reset_resource_tag" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.resetResourceTag"></a>

```python
def reset_resource_tag() -> None
```

##### `reset_restart_needed` <a name="reset_restart_needed" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.resetRestartNeeded"></a>

```python
def reset_restart_needed() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.ebsVolumeSizeInGib">ebs_volume_size_in_gib</a></code> | <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList">ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.ebsVolumeType">ebs_volume_type</a></code> | <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList">ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.estimatedMonthlySavings">estimated_monthly_savings</a></code> | <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList">ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.lookBackPeriodInDays">look_back_period_in_days</a></code> | <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList">ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.region">region</a></code> | <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionList">ComputeoptimizerAutomationRuleCriteriaRegionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.resourceArn">resource_arn</a></code> | <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnList">ComputeoptimizerAutomationRuleCriteriaResourceArnList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.resourceTag">resource_tag</a></code> | <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagList">ComputeoptimizerAutomationRuleCriteriaResourceTagList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.restartNeeded">restart_needed</a></code> | <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededList">ComputeoptimizerAutomationRuleCriteriaRestartNeededList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.ebsVolumeSizeInGibInput">ebs_volume_size_in_gib_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib">ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.ebsVolumeTypeInput">ebs_volume_type_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeType">ComputeoptimizerAutomationRuleCriteriaEbsVolumeType</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.estimatedMonthlySavingsInput">estimated_monthly_savings_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings">ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.lookBackPeriodInDaysInput">look_back_period_in_days_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays">ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.regionInput">region_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegion">ComputeoptimizerAutomationRuleCriteriaRegion</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.resourceArnInput">resource_arn_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArn">ComputeoptimizerAutomationRuleCriteriaResourceArn</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.resourceTagInput">resource_tag_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTag">ComputeoptimizerAutomationRuleCriteriaResourceTag</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.restartNeededInput">restart_needed_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeeded">ComputeoptimizerAutomationRuleCriteriaRestartNeeded</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteria">ComputeoptimizerAutomationRuleCriteria</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ebs_volume_size_in_gib`<sup>Required</sup> <a name="ebs_volume_size_in_gib" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.ebsVolumeSizeInGib"></a>

```python
ebs_volume_size_in_gib: ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList
```

- *Type:* <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList">ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList</a>

---

##### `ebs_volume_type`<sup>Required</sup> <a name="ebs_volume_type" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.ebsVolumeType"></a>

```python
ebs_volume_type: ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList
```

- *Type:* <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList">ComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList</a>

---

##### `estimated_monthly_savings`<sup>Required</sup> <a name="estimated_monthly_savings" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.estimatedMonthlySavings"></a>

```python
estimated_monthly_savings: ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList
```

- *Type:* <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList">ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList</a>

---

##### `look_back_period_in_days`<sup>Required</sup> <a name="look_back_period_in_days" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.lookBackPeriodInDays"></a>

```python
look_back_period_in_days: ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList
```

- *Type:* <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList">ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList</a>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.region"></a>

```python
region: ComputeoptimizerAutomationRuleCriteriaRegionList
```

- *Type:* <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionList">ComputeoptimizerAutomationRuleCriteriaRegionList</a>

---

##### `resource_arn`<sup>Required</sup> <a name="resource_arn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.resourceArn"></a>

```python
resource_arn: ComputeoptimizerAutomationRuleCriteriaResourceArnList
```

- *Type:* <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnList">ComputeoptimizerAutomationRuleCriteriaResourceArnList</a>

---

##### `resource_tag`<sup>Required</sup> <a name="resource_tag" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.resourceTag"></a>

```python
resource_tag: ComputeoptimizerAutomationRuleCriteriaResourceTagList
```

- *Type:* <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagList">ComputeoptimizerAutomationRuleCriteriaResourceTagList</a>

---

##### `restart_needed`<sup>Required</sup> <a name="restart_needed" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.restartNeeded"></a>

```python
restart_needed: ComputeoptimizerAutomationRuleCriteriaRestartNeededList
```

- *Type:* <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededList">ComputeoptimizerAutomationRuleCriteriaRestartNeededList</a>

---

##### `ebs_volume_size_in_gib_input`<sup>Optional</sup> <a name="ebs_volume_size_in_gib_input" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.ebsVolumeSizeInGibInput"></a>

```python
ebs_volume_size_in_gib_input: IResolvable | typing.List[ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib">ComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib</a>]

---

##### `ebs_volume_type_input`<sup>Optional</sup> <a name="ebs_volume_type_input" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.ebsVolumeTypeInput"></a>

```python
ebs_volume_type_input: IResolvable | typing.List[ComputeoptimizerAutomationRuleCriteriaEbsVolumeType]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEbsVolumeType">ComputeoptimizerAutomationRuleCriteriaEbsVolumeType</a>]

---

##### `estimated_monthly_savings_input`<sup>Optional</sup> <a name="estimated_monthly_savings_input" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.estimatedMonthlySavingsInput"></a>

```python
estimated_monthly_savings_input: IResolvable | typing.List[ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings">ComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings</a>]

---

##### `look_back_period_in_days_input`<sup>Optional</sup> <a name="look_back_period_in_days_input" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.lookBackPeriodInDaysInput"></a>

```python
look_back_period_in_days_input: IResolvable | typing.List[ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays">ComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays</a>]

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.regionInput"></a>

```python
region_input: IResolvable | typing.List[ComputeoptimizerAutomationRuleCriteriaRegion]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegion">ComputeoptimizerAutomationRuleCriteriaRegion</a>]

---

##### `resource_arn_input`<sup>Optional</sup> <a name="resource_arn_input" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.resourceArnInput"></a>

```python
resource_arn_input: IResolvable | typing.List[ComputeoptimizerAutomationRuleCriteriaResourceArn]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArn">ComputeoptimizerAutomationRuleCriteriaResourceArn</a>]

---

##### `resource_tag_input`<sup>Optional</sup> <a name="resource_tag_input" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.resourceTagInput"></a>

```python
resource_tag_input: IResolvable | typing.List[ComputeoptimizerAutomationRuleCriteriaResourceTag]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTag">ComputeoptimizerAutomationRuleCriteriaResourceTag</a>]

---

##### `restart_needed_input`<sup>Optional</sup> <a name="restart_needed_input" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.restartNeededInput"></a>

```python
restart_needed_input: IResolvable | typing.List[ComputeoptimizerAutomationRuleCriteriaRestartNeeded]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeeded">ComputeoptimizerAutomationRuleCriteriaRestartNeeded</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ComputeoptimizerAutomationRuleCriteria
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteria">ComputeoptimizerAutomationRuleCriteria</a>

---


### ComputeoptimizerAutomationRuleCriteriaRegionList <a name="ComputeoptimizerAutomationRuleCriteriaRegionList" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionList.Initializer"></a>

```python
from cdktn_provider_awscc import computeoptimizer_automation_rule

computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputeoptimizerAutomationRuleCriteriaRegionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegion">ComputeoptimizerAutomationRuleCriteriaRegion</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ComputeoptimizerAutomationRuleCriteriaRegion]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegion">ComputeoptimizerAutomationRuleCriteriaRegion</a>]

---


### ComputeoptimizerAutomationRuleCriteriaRegionOutputReference <a name="ComputeoptimizerAutomationRuleCriteriaRegionOutputReference" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import computeoptimizer_automation_rule

computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.resetComparison">reset_comparison</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_comparison` <a name="reset_comparison" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.resetComparison"></a>

```python
def reset_comparison() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.property.comparisonInput">comparison_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.property.comparison">comparison</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegion">ComputeoptimizerAutomationRuleCriteriaRegion</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `comparison_input`<sup>Optional</sup> <a name="comparison_input" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.property.comparisonInput"></a>

```python
comparison_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `comparison`<sup>Required</sup> <a name="comparison" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.property.comparison"></a>

```python
comparison: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ComputeoptimizerAutomationRuleCriteriaRegion
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRegion">ComputeoptimizerAutomationRuleCriteriaRegion</a>

---


### ComputeoptimizerAutomationRuleCriteriaResourceArnList <a name="ComputeoptimizerAutomationRuleCriteriaResourceArnList" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnList.Initializer"></a>

```python
from cdktn_provider_awscc import computeoptimizer_automation_rule

computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArn">ComputeoptimizerAutomationRuleCriteriaResourceArn</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ComputeoptimizerAutomationRuleCriteriaResourceArn]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArn">ComputeoptimizerAutomationRuleCriteriaResourceArn</a>]

---


### ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference <a name="ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import computeoptimizer_automation_rule

computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.resetComparison">reset_comparison</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_comparison` <a name="reset_comparison" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.resetComparison"></a>

```python
def reset_comparison() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.property.comparisonInput">comparison_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.property.comparison">comparison</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArn">ComputeoptimizerAutomationRuleCriteriaResourceArn</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `comparison_input`<sup>Optional</sup> <a name="comparison_input" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.property.comparisonInput"></a>

```python
comparison_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `comparison`<sup>Required</sup> <a name="comparison" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.property.comparison"></a>

```python
comparison: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ComputeoptimizerAutomationRuleCriteriaResourceArn
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceArn">ComputeoptimizerAutomationRuleCriteriaResourceArn</a>

---


### ComputeoptimizerAutomationRuleCriteriaResourceTagList <a name="ComputeoptimizerAutomationRuleCriteriaResourceTagList" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagList.Initializer"></a>

```python
from cdktn_provider_awscc import computeoptimizer_automation_rule

computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTag">ComputeoptimizerAutomationRuleCriteriaResourceTag</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ComputeoptimizerAutomationRuleCriteriaResourceTag]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTag">ComputeoptimizerAutomationRuleCriteriaResourceTag</a>]

---


### ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference <a name="ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import computeoptimizer_automation_rule

computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.resetComparison">reset_comparison</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_comparison` <a name="reset_comparison" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.resetComparison"></a>

```python
def reset_comparison() -> None
```

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.property.comparisonInput">comparison_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.property.comparison">comparison</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTag">ComputeoptimizerAutomationRuleCriteriaResourceTag</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `comparison_input`<sup>Optional</sup> <a name="comparison_input" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.property.comparisonInput"></a>

```python
comparison_input: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `comparison`<sup>Required</sup> <a name="comparison" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.property.comparison"></a>

```python
comparison: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ComputeoptimizerAutomationRuleCriteriaResourceTag
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaResourceTag">ComputeoptimizerAutomationRuleCriteriaResourceTag</a>

---


### ComputeoptimizerAutomationRuleCriteriaRestartNeededList <a name="ComputeoptimizerAutomationRuleCriteriaRestartNeededList" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededList.Initializer"></a>

```python
from cdktn_provider_awscc import computeoptimizer_automation_rule

computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeeded">ComputeoptimizerAutomationRuleCriteriaRestartNeeded</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ComputeoptimizerAutomationRuleCriteriaRestartNeeded]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeeded">ComputeoptimizerAutomationRuleCriteriaRestartNeeded</a>]

---


### ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference <a name="ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import computeoptimizer_automation_rule

computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.resetComparison">reset_comparison</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_comparison` <a name="reset_comparison" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.resetComparison"></a>

```python
def reset_comparison() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.property.comparisonInput">comparison_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.property.comparison">comparison</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeeded">ComputeoptimizerAutomationRuleCriteriaRestartNeeded</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `comparison_input`<sup>Optional</sup> <a name="comparison_input" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.property.comparisonInput"></a>

```python
comparison_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `comparison`<sup>Required</sup> <a name="comparison" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.property.comparison"></a>

```python
comparison: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ComputeoptimizerAutomationRuleCriteriaRestartNeeded
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleCriteriaRestartNeeded">ComputeoptimizerAutomationRuleCriteriaRestartNeeded</a>

---


### ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference <a name="ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import computeoptimizer_automation_rule

computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.resetAccountIds">reset_account_ids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.resetRuleApplyOrder">reset_rule_apply_order</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_account_ids` <a name="reset_account_ids" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.resetAccountIds"></a>

```python
def reset_account_ids() -> None
```

##### `reset_rule_apply_order` <a name="reset_rule_apply_order" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.resetRuleApplyOrder"></a>

```python
def reset_rule_apply_order() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.property.accountIdsInput">account_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.property.ruleApplyOrderInput">rule_apply_order_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.property.accountIds">account_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.property.ruleApplyOrder">rule_apply_order</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfiguration">ComputeoptimizerAutomationRuleOrganizationConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `account_ids_input`<sup>Optional</sup> <a name="account_ids_input" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.property.accountIdsInput"></a>

```python
account_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `rule_apply_order_input`<sup>Optional</sup> <a name="rule_apply_order_input" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.property.ruleApplyOrderInput"></a>

```python
rule_apply_order_input: str
```

- *Type:* str

---

##### `account_ids`<sup>Required</sup> <a name="account_ids" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.property.accountIds"></a>

```python
account_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `rule_apply_order`<sup>Required</sup> <a name="rule_apply_order" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.property.ruleApplyOrder"></a>

```python
rule_apply_order: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ComputeoptimizerAutomationRuleOrganizationConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleOrganizationConfiguration">ComputeoptimizerAutomationRuleOrganizationConfiguration</a>

---


### ComputeoptimizerAutomationRuleScheduleOutputReference <a name="ComputeoptimizerAutomationRuleScheduleOutputReference" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import computeoptimizer_automation_rule

computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.resetExecutionWindowInMinutes">reset_execution_window_in_minutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.resetScheduleExpression">reset_schedule_expression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.resetScheduleExpressionTimezone">reset_schedule_expression_timezone</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_execution_window_in_minutes` <a name="reset_execution_window_in_minutes" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.resetExecutionWindowInMinutes"></a>

```python
def reset_execution_window_in_minutes() -> None
```

##### `reset_schedule_expression` <a name="reset_schedule_expression" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.resetScheduleExpression"></a>

```python
def reset_schedule_expression() -> None
```

##### `reset_schedule_expression_timezone` <a name="reset_schedule_expression_timezone" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.resetScheduleExpressionTimezone"></a>

```python
def reset_schedule_expression_timezone() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.property.executionWindowInMinutesInput">execution_window_in_minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.property.scheduleExpressionInput">schedule_expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.property.scheduleExpressionTimezoneInput">schedule_expression_timezone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.property.executionWindowInMinutes">execution_window_in_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.property.scheduleExpression">schedule_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.property.scheduleExpressionTimezone">schedule_expression_timezone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleSchedule">ComputeoptimizerAutomationRuleSchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `execution_window_in_minutes_input`<sup>Optional</sup> <a name="execution_window_in_minutes_input" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.property.executionWindowInMinutesInput"></a>

```python
execution_window_in_minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `schedule_expression_input`<sup>Optional</sup> <a name="schedule_expression_input" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.property.scheduleExpressionInput"></a>

```python
schedule_expression_input: str
```

- *Type:* str

---

##### `schedule_expression_timezone_input`<sup>Optional</sup> <a name="schedule_expression_timezone_input" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.property.scheduleExpressionTimezoneInput"></a>

```python
schedule_expression_timezone_input: str
```

- *Type:* str

---

##### `execution_window_in_minutes`<sup>Required</sup> <a name="execution_window_in_minutes" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.property.executionWindowInMinutes"></a>

```python
execution_window_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `schedule_expression`<sup>Required</sup> <a name="schedule_expression" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.property.scheduleExpression"></a>

```python
schedule_expression: str
```

- *Type:* str

---

##### `schedule_expression_timezone`<sup>Required</sup> <a name="schedule_expression_timezone" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.property.scheduleExpressionTimezone"></a>

```python
schedule_expression_timezone: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleScheduleOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ComputeoptimizerAutomationRuleSchedule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleSchedule">ComputeoptimizerAutomationRuleSchedule</a>

---


### ComputeoptimizerAutomationRuleTagsList <a name="ComputeoptimizerAutomationRuleTagsList" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import computeoptimizer_automation_rule

computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputeoptimizerAutomationRuleTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTags">ComputeoptimizerAutomationRuleTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ComputeoptimizerAutomationRuleTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTags">ComputeoptimizerAutomationRuleTags</a>]

---


### ComputeoptimizerAutomationRuleTagsOutputReference <a name="ComputeoptimizerAutomationRuleTagsOutputReference" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import computeoptimizer_automation_rule

computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTags">ComputeoptimizerAutomationRuleTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ComputeoptimizerAutomationRuleTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.computeoptimizerAutomationRule.ComputeoptimizerAutomationRuleTags">ComputeoptimizerAutomationRuleTags</a>

---



