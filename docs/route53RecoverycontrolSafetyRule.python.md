# `route53RecoverycontrolSafetyRule` Submodule <a name="`route53RecoverycontrolSafetyRule` Submodule" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53RecoverycontrolSafetyRule <a name="Route53RecoverycontrolSafetyRule" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/route53recoverycontrol_safety_rule awscc_route53recoverycontrol_safety_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.Initializer"></a>

```python
from cdktn_provider_awscc import route53_recoverycontrol_safety_rule

route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  assertion_rule: Route53RecoverycontrolSafetyRuleAssertionRule = None,
  control_panel_arn: str = None,
  gating_rule: Route53RecoverycontrolSafetyRuleGatingRule = None,
  name: str = None,
  rule_config: Route53RecoverycontrolSafetyRuleRuleConfig = None,
  tags: IResolvable | typing.List[Route53RecoverycontrolSafetyRuleTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.Initializer.parameter.assertionRule">assertion_rule</a></code> | <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRule">Route53RecoverycontrolSafetyRuleAssertionRule</a></code> | An assertion rule enforces that, when a routing control state is changed, that the criteria set by the rule configuration is met. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.Initializer.parameter.controlPanelArn">control_panel_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the control panel. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.Initializer.parameter.gatingRule">gating_rule</a></code> | <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRule">Route53RecoverycontrolSafetyRuleGatingRule</a></code> | A gating rule verifies that a set of gating controls evaluates as true, based on a rule configuration that you specify. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.Initializer.parameter.name">name</a></code> | <code>str</code> | The name for the safety rule. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.Initializer.parameter.ruleConfig">rule_config</a></code> | <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfig">Route53RecoverycontrolSafetyRuleRuleConfig</a></code> | The rule configuration for an assertion rule or gating rule. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTags">Route53RecoverycontrolSafetyRuleTags</a>]</code> | A collection of tags associated with a resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `assertion_rule`<sup>Optional</sup> <a name="assertion_rule" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.Initializer.parameter.assertionRule"></a>

- *Type:* <a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRule">Route53RecoverycontrolSafetyRuleAssertionRule</a>

An assertion rule enforces that, when a routing control state is changed, that the criteria set by the rule configuration is met.

Otherwise, the change to the routing control is not accepted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/route53recoverycontrol_safety_rule#assertion_rule Route53RecoverycontrolSafetyRule#assertion_rule}

---

##### `control_panel_arn`<sup>Optional</sup> <a name="control_panel_arn" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.Initializer.parameter.controlPanelArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the control panel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/route53recoverycontrol_safety_rule#control_panel_arn Route53RecoverycontrolSafetyRule#control_panel_arn}

---

##### `gating_rule`<sup>Optional</sup> <a name="gating_rule" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.Initializer.parameter.gatingRule"></a>

- *Type:* <a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRule">Route53RecoverycontrolSafetyRuleGatingRule</a>

A gating rule verifies that a set of gating controls evaluates as true, based on a rule configuration that you specify.

If the gating rule evaluates to true, Amazon Route 53 Application Recovery Controller allows a set of routing control state changes to run and complete against the set of target controls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/route53recoverycontrol_safety_rule#gating_rule Route53RecoverycontrolSafetyRule#gating_rule}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.Initializer.parameter.name"></a>

- *Type:* str

The name for the safety rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/route53recoverycontrol_safety_rule#name Route53RecoverycontrolSafetyRule#name}

---

##### `rule_config`<sup>Optional</sup> <a name="rule_config" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.Initializer.parameter.ruleConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfig">Route53RecoverycontrolSafetyRuleRuleConfig</a>

The rule configuration for an assertion rule or gating rule.

This is the criteria that you set for specific assertion controls (routing controls) or gating controls. This configuration specifies how many controls must be enabled after a transaction completes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/route53recoverycontrol_safety_rule#rule_config Route53RecoverycontrolSafetyRule#rule_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTags">Route53RecoverycontrolSafetyRuleTags</a>]

A collection of tags associated with a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/route53recoverycontrol_safety_rule#tags Route53RecoverycontrolSafetyRule#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.putAssertionRule">put_assertion_rule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.putGatingRule">put_gating_rule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.putRuleConfig">put_rule_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.resetAssertionRule">reset_assertion_rule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.resetControlPanelArn">reset_control_panel_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.resetGatingRule">reset_gating_rule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.resetRuleConfig">reset_rule_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_assertion_rule` <a name="put_assertion_rule" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.putAssertionRule"></a>

```python
def put_assertion_rule(
  asserted_controls: typing.List[str] = None,
  wait_period_ms: typing.Union[int, float] = None
) -> None
```

###### `asserted_controls`<sup>Optional</sup> <a name="asserted_controls" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.putAssertionRule.parameter.assertedControls"></a>

- *Type:* typing.List[str]

The routing controls that are part of transactions that are evaluated to determine if a request to change a routing control state is allowed.

For example, you might include three routing controls, one for each of three AWS Regions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/route53recoverycontrol_safety_rule#asserted_controls Route53RecoverycontrolSafetyRule#asserted_controls}

---

###### `wait_period_ms`<sup>Optional</sup> <a name="wait_period_ms" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.putAssertionRule.parameter.waitPeriodMs"></a>

- *Type:* typing.Union[int, float]

An evaluation period, in milliseconds (ms), during which any request against the target routing controls will fail.

This helps prevent "flapping" of state. The wait period is 5000 ms by default, but you can choose a custom value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/route53recoverycontrol_safety_rule#wait_period_ms Route53RecoverycontrolSafetyRule#wait_period_ms}

---

##### `put_gating_rule` <a name="put_gating_rule" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.putGatingRule"></a>

```python
def put_gating_rule(
  gating_controls: typing.List[str] = None,
  target_controls: typing.List[str] = None,
  wait_period_ms: typing.Union[int, float] = None
) -> None
```

###### `gating_controls`<sup>Optional</sup> <a name="gating_controls" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.putGatingRule.parameter.gatingControls"></a>

- *Type:* typing.List[str]

The gating controls for the gating rule.

That is, routing controls that are evaluated by the rule configuration that you specify.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/route53recoverycontrol_safety_rule#gating_controls Route53RecoverycontrolSafetyRule#gating_controls}

---

###### `target_controls`<sup>Optional</sup> <a name="target_controls" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.putGatingRule.parameter.targetControls"></a>

- *Type:* typing.List[str]

Routing controls that can only be set or unset if the specified RuleConfig evaluates to true for the specified GatingControls.

For example, say you have three gating controls, one for each of three AWS Regions. Now you specify AtLeast 2 as your RuleConfig. With these settings, you can only change (set or unset) the routing controls that you have specified as TargetControls if that rule evaluates to true.
In other words, your ability to change the routing controls that you have specified as TargetControls is gated by the rule that you set for the routing controls in GatingControls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/route53recoverycontrol_safety_rule#target_controls Route53RecoverycontrolSafetyRule#target_controls}

---

###### `wait_period_ms`<sup>Optional</sup> <a name="wait_period_ms" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.putGatingRule.parameter.waitPeriodMs"></a>

- *Type:* typing.Union[int, float]

An evaluation period, in milliseconds (ms), during which any request against the target routing controls will fail.

This helps prevent "flapping" of state. The wait period is 5000 ms by default, but you can choose a custom value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/route53recoverycontrol_safety_rule#wait_period_ms Route53RecoverycontrolSafetyRule#wait_period_ms}

---

##### `put_rule_config` <a name="put_rule_config" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.putRuleConfig"></a>

```python
def put_rule_config(
  inverted: bool | IResolvable = None,
  threshold: typing.Union[int, float] = None,
  type: str = None
) -> None
```

###### `inverted`<sup>Optional</sup> <a name="inverted" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.putRuleConfig.parameter.inverted"></a>

- *Type:* bool | cdktn.IResolvable

Logical negation of the rule. If the rule would usually evaluate true, it's evaluated as false, and vice versa.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/route53recoverycontrol_safety_rule#inverted Route53RecoverycontrolSafetyRule#inverted}

---

###### `threshold`<sup>Optional</sup> <a name="threshold" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.putRuleConfig.parameter.threshold"></a>

- *Type:* typing.Union[int, float]

The value of N, when you specify an ATLEAST rule type.

That is, Threshold is the number of controls that must be set when you specify an ATLEAST type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/route53recoverycontrol_safety_rule#threshold Route53RecoverycontrolSafetyRule#threshold}

---

###### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.putRuleConfig.parameter.type"></a>

- *Type:* str

A rule can be one of the following: ATLEAST, AND, or OR.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/route53recoverycontrol_safety_rule#type Route53RecoverycontrolSafetyRule#type}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[Route53RecoverycontrolSafetyRuleTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTags">Route53RecoverycontrolSafetyRuleTags</a>]

---

##### `reset_assertion_rule` <a name="reset_assertion_rule" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.resetAssertionRule"></a>

```python
def reset_assertion_rule() -> None
```

##### `reset_control_panel_arn` <a name="reset_control_panel_arn" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.resetControlPanelArn"></a>

```python
def reset_control_panel_arn() -> None
```

##### `reset_gating_rule` <a name="reset_gating_rule" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.resetGatingRule"></a>

```python
def reset_gating_rule() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_rule_config` <a name="reset_rule_config" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.resetRuleConfig"></a>

```python
def reset_rule_config() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a Route53RecoverycontrolSafetyRule resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.isConstruct"></a>

```python
from cdktn_provider_awscc import route53_recoverycontrol_safety_rule

route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.isTerraformElement"></a>

```python
from cdktn_provider_awscc import route53_recoverycontrol_safety_rule

route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.isTerraformResource"></a>

```python
from cdktn_provider_awscc import route53_recoverycontrol_safety_rule

route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import route53_recoverycontrol_safety_rule

route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a Route53RecoverycontrolSafetyRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Route53RecoverycontrolSafetyRule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Route53RecoverycontrolSafetyRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/route53recoverycontrol_safety_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Route53RecoverycontrolSafetyRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.assertionRule">assertion_rule</a></code> | <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference">Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.gatingRule">gating_rule</a></code> | <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference">Route53RecoverycontrolSafetyRuleGatingRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.ruleConfig">rule_config</a></code> | <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference">Route53RecoverycontrolSafetyRuleRuleConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.safetyRuleArn">safety_rule_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsList">Route53RecoverycontrolSafetyRuleTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.assertionRuleInput">assertion_rule_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRule">Route53RecoverycontrolSafetyRuleAssertionRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.controlPanelArnInput">control_panel_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.gatingRuleInput">gating_rule_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRule">Route53RecoverycontrolSafetyRuleGatingRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.ruleConfigInput">rule_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfig">Route53RecoverycontrolSafetyRuleRuleConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTags">Route53RecoverycontrolSafetyRuleTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.controlPanelArn">control_panel_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `assertion_rule`<sup>Required</sup> <a name="assertion_rule" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.assertionRule"></a>

```python
assertion_rule: Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference">Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference</a>

---

##### `gating_rule`<sup>Required</sup> <a name="gating_rule" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.gatingRule"></a>

```python
gating_rule: Route53RecoverycontrolSafetyRuleGatingRuleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference">Route53RecoverycontrolSafetyRuleGatingRuleOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `rule_config`<sup>Required</sup> <a name="rule_config" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.ruleConfig"></a>

```python
rule_config: Route53RecoverycontrolSafetyRuleRuleConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference">Route53RecoverycontrolSafetyRuleRuleConfigOutputReference</a>

---

##### `safety_rule_arn`<sup>Required</sup> <a name="safety_rule_arn" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.safetyRuleArn"></a>

```python
safety_rule_arn: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.tags"></a>

```python
tags: Route53RecoverycontrolSafetyRuleTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsList">Route53RecoverycontrolSafetyRuleTagsList</a>

---

##### `assertion_rule_input`<sup>Optional</sup> <a name="assertion_rule_input" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.assertionRuleInput"></a>

```python
assertion_rule_input: IResolvable | Route53RecoverycontrolSafetyRuleAssertionRule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRule">Route53RecoverycontrolSafetyRuleAssertionRule</a>

---

##### `control_panel_arn_input`<sup>Optional</sup> <a name="control_panel_arn_input" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.controlPanelArnInput"></a>

```python
control_panel_arn_input: str
```

- *Type:* str

---

##### `gating_rule_input`<sup>Optional</sup> <a name="gating_rule_input" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.gatingRuleInput"></a>

```python
gating_rule_input: IResolvable | Route53RecoverycontrolSafetyRuleGatingRule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRule">Route53RecoverycontrolSafetyRuleGatingRule</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `rule_config_input`<sup>Optional</sup> <a name="rule_config_input" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.ruleConfigInput"></a>

```python
rule_config_input: IResolvable | Route53RecoverycontrolSafetyRuleRuleConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfig">Route53RecoverycontrolSafetyRuleRuleConfig</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[Route53RecoverycontrolSafetyRuleTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTags">Route53RecoverycontrolSafetyRuleTags</a>]

---

##### `control_panel_arn`<sup>Required</sup> <a name="control_panel_arn" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.controlPanelArn"></a>

```python
control_panel_arn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Route53RecoverycontrolSafetyRuleAssertionRule <a name="Route53RecoverycontrolSafetyRuleAssertionRule" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRule.Initializer"></a>

```python
from cdktn_provider_awscc import route53_recoverycontrol_safety_rule

route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRule(
  asserted_controls: typing.List[str] = None,
  wait_period_ms: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRule.property.assertedControls">asserted_controls</a></code> | <code>typing.List[str]</code> | The routing controls that are part of transactions that are evaluated to determine if a request to change a routing control state is allowed. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRule.property.waitPeriodMs">wait_period_ms</a></code> | <code>typing.Union[int, float]</code> | An evaluation period, in milliseconds (ms), during which any request against the target routing controls will fail. |

---

##### `asserted_controls`<sup>Optional</sup> <a name="asserted_controls" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRule.property.assertedControls"></a>

```python
asserted_controls: typing.List[str]
```

- *Type:* typing.List[str]

The routing controls that are part of transactions that are evaluated to determine if a request to change a routing control state is allowed.

For example, you might include three routing controls, one for each of three AWS Regions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/route53recoverycontrol_safety_rule#asserted_controls Route53RecoverycontrolSafetyRule#asserted_controls}

---

##### `wait_period_ms`<sup>Optional</sup> <a name="wait_period_ms" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRule.property.waitPeriodMs"></a>

```python
wait_period_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

An evaluation period, in milliseconds (ms), during which any request against the target routing controls will fail.

This helps prevent "flapping" of state. The wait period is 5000 ms by default, but you can choose a custom value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/route53recoverycontrol_safety_rule#wait_period_ms Route53RecoverycontrolSafetyRule#wait_period_ms}

---

### Route53RecoverycontrolSafetyRuleConfig <a name="Route53RecoverycontrolSafetyRuleConfig" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleConfig.Initializer"></a>

```python
from cdktn_provider_awscc import route53_recoverycontrol_safety_rule

route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  assertion_rule: Route53RecoverycontrolSafetyRuleAssertionRule = None,
  control_panel_arn: str = None,
  gating_rule: Route53RecoverycontrolSafetyRuleGatingRule = None,
  name: str = None,
  rule_config: Route53RecoverycontrolSafetyRuleRuleConfig = None,
  tags: IResolvable | typing.List[Route53RecoverycontrolSafetyRuleTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleConfig.property.assertionRule">assertion_rule</a></code> | <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRule">Route53RecoverycontrolSafetyRuleAssertionRule</a></code> | An assertion rule enforces that, when a routing control state is changed, that the criteria set by the rule configuration is met. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleConfig.property.controlPanelArn">control_panel_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the control panel. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleConfig.property.gatingRule">gating_rule</a></code> | <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRule">Route53RecoverycontrolSafetyRuleGatingRule</a></code> | A gating rule verifies that a set of gating controls evaluates as true, based on a rule configuration that you specify. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleConfig.property.name">name</a></code> | <code>str</code> | The name for the safety rule. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleConfig.property.ruleConfig">rule_config</a></code> | <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfig">Route53RecoverycontrolSafetyRuleRuleConfig</a></code> | The rule configuration for an assertion rule or gating rule. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTags">Route53RecoverycontrolSafetyRuleTags</a>]</code> | A collection of tags associated with a resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `assertion_rule`<sup>Optional</sup> <a name="assertion_rule" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleConfig.property.assertionRule"></a>

```python
assertion_rule: Route53RecoverycontrolSafetyRuleAssertionRule
```

- *Type:* <a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRule">Route53RecoverycontrolSafetyRuleAssertionRule</a>

An assertion rule enforces that, when a routing control state is changed, that the criteria set by the rule configuration is met.

Otherwise, the change to the routing control is not accepted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/route53recoverycontrol_safety_rule#assertion_rule Route53RecoverycontrolSafetyRule#assertion_rule}

---

##### `control_panel_arn`<sup>Optional</sup> <a name="control_panel_arn" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleConfig.property.controlPanelArn"></a>

```python
control_panel_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the control panel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/route53recoverycontrol_safety_rule#control_panel_arn Route53RecoverycontrolSafetyRule#control_panel_arn}

---

##### `gating_rule`<sup>Optional</sup> <a name="gating_rule" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleConfig.property.gatingRule"></a>

```python
gating_rule: Route53RecoverycontrolSafetyRuleGatingRule
```

- *Type:* <a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRule">Route53RecoverycontrolSafetyRuleGatingRule</a>

A gating rule verifies that a set of gating controls evaluates as true, based on a rule configuration that you specify.

If the gating rule evaluates to true, Amazon Route 53 Application Recovery Controller allows a set of routing control state changes to run and complete against the set of target controls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/route53recoverycontrol_safety_rule#gating_rule Route53RecoverycontrolSafetyRule#gating_rule}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name for the safety rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/route53recoverycontrol_safety_rule#name Route53RecoverycontrolSafetyRule#name}

---

##### `rule_config`<sup>Optional</sup> <a name="rule_config" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleConfig.property.ruleConfig"></a>

```python
rule_config: Route53RecoverycontrolSafetyRuleRuleConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfig">Route53RecoverycontrolSafetyRuleRuleConfig</a>

The rule configuration for an assertion rule or gating rule.

This is the criteria that you set for specific assertion controls (routing controls) or gating controls. This configuration specifies how many controls must be enabled after a transaction completes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/route53recoverycontrol_safety_rule#rule_config Route53RecoverycontrolSafetyRule#rule_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[Route53RecoverycontrolSafetyRuleTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTags">Route53RecoverycontrolSafetyRuleTags</a>]

A collection of tags associated with a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/route53recoverycontrol_safety_rule#tags Route53RecoverycontrolSafetyRule#tags}

---

### Route53RecoverycontrolSafetyRuleGatingRule <a name="Route53RecoverycontrolSafetyRuleGatingRule" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRule.Initializer"></a>

```python
from cdktn_provider_awscc import route53_recoverycontrol_safety_rule

route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRule(
  gating_controls: typing.List[str] = None,
  target_controls: typing.List[str] = None,
  wait_period_ms: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRule.property.gatingControls">gating_controls</a></code> | <code>typing.List[str]</code> | The gating controls for the gating rule. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRule.property.targetControls">target_controls</a></code> | <code>typing.List[str]</code> | Routing controls that can only be set or unset if the specified RuleConfig evaluates to true for the specified GatingControls. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRule.property.waitPeriodMs">wait_period_ms</a></code> | <code>typing.Union[int, float]</code> | An evaluation period, in milliseconds (ms), during which any request against the target routing controls will fail. |

---

##### `gating_controls`<sup>Optional</sup> <a name="gating_controls" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRule.property.gatingControls"></a>

```python
gating_controls: typing.List[str]
```

- *Type:* typing.List[str]

The gating controls for the gating rule.

That is, routing controls that are evaluated by the rule configuration that you specify.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/route53recoverycontrol_safety_rule#gating_controls Route53RecoverycontrolSafetyRule#gating_controls}

---

##### `target_controls`<sup>Optional</sup> <a name="target_controls" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRule.property.targetControls"></a>

```python
target_controls: typing.List[str]
```

- *Type:* typing.List[str]

Routing controls that can only be set or unset if the specified RuleConfig evaluates to true for the specified GatingControls.

For example, say you have three gating controls, one for each of three AWS Regions. Now you specify AtLeast 2 as your RuleConfig. With these settings, you can only change (set or unset) the routing controls that you have specified as TargetControls if that rule evaluates to true.
In other words, your ability to change the routing controls that you have specified as TargetControls is gated by the rule that you set for the routing controls in GatingControls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/route53recoverycontrol_safety_rule#target_controls Route53RecoverycontrolSafetyRule#target_controls}

---

##### `wait_period_ms`<sup>Optional</sup> <a name="wait_period_ms" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRule.property.waitPeriodMs"></a>

```python
wait_period_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

An evaluation period, in milliseconds (ms), during which any request against the target routing controls will fail.

This helps prevent "flapping" of state. The wait period is 5000 ms by default, but you can choose a custom value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/route53recoverycontrol_safety_rule#wait_period_ms Route53RecoverycontrolSafetyRule#wait_period_ms}

---

### Route53RecoverycontrolSafetyRuleRuleConfig <a name="Route53RecoverycontrolSafetyRuleRuleConfig" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfig.Initializer"></a>

```python
from cdktn_provider_awscc import route53_recoverycontrol_safety_rule

route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfig(
  inverted: bool | IResolvable = None,
  threshold: typing.Union[int, float] = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfig.property.inverted">inverted</a></code> | <code>bool \| cdktn.IResolvable</code> | Logical negation of the rule. If the rule would usually evaluate true, it's evaluated as false, and vice versa. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfig.property.threshold">threshold</a></code> | <code>typing.Union[int, float]</code> | The value of N, when you specify an ATLEAST rule type. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfig.property.type">type</a></code> | <code>str</code> | A rule can be one of the following: ATLEAST, AND, or OR. |

---

##### `inverted`<sup>Optional</sup> <a name="inverted" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfig.property.inverted"></a>

```python
inverted: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Logical negation of the rule. If the rule would usually evaluate true, it's evaluated as false, and vice versa.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/route53recoverycontrol_safety_rule#inverted Route53RecoverycontrolSafetyRule#inverted}

---

##### `threshold`<sup>Optional</sup> <a name="threshold" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfig.property.threshold"></a>

```python
threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The value of N, when you specify an ATLEAST rule type.

That is, Threshold is the number of controls that must be set when you specify an ATLEAST type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/route53recoverycontrol_safety_rule#threshold Route53RecoverycontrolSafetyRule#threshold}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfig.property.type"></a>

```python
type: str
```

- *Type:* str

A rule can be one of the following: ATLEAST, AND, or OR.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/route53recoverycontrol_safety_rule#type Route53RecoverycontrolSafetyRule#type}

---

### Route53RecoverycontrolSafetyRuleTags <a name="Route53RecoverycontrolSafetyRuleTags" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTags.Initializer"></a>

```python
from cdktn_provider_awscc import route53_recoverycontrol_safety_rule

route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/route53recoverycontrol_safety_rule#key Route53RecoverycontrolSafetyRule#key}. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/route53recoverycontrol_safety_rule#value Route53RecoverycontrolSafetyRule#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/route53recoverycontrol_safety_rule#key Route53RecoverycontrolSafetyRule#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/route53recoverycontrol_safety_rule#value Route53RecoverycontrolSafetyRule#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference <a name="Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import route53_recoverycontrol_safety_rule

route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.resetAssertedControls">reset_asserted_controls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.resetWaitPeriodMs">reset_wait_period_ms</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_asserted_controls` <a name="reset_asserted_controls" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.resetAssertedControls"></a>

```python
def reset_asserted_controls() -> None
```

##### `reset_wait_period_ms` <a name="reset_wait_period_ms" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.resetWaitPeriodMs"></a>

```python
def reset_wait_period_ms() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.property.assertedControlsInput">asserted_controls_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.property.waitPeriodMsInput">wait_period_ms_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.property.assertedControls">asserted_controls</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.property.waitPeriodMs">wait_period_ms</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRule">Route53RecoverycontrolSafetyRuleAssertionRule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `asserted_controls_input`<sup>Optional</sup> <a name="asserted_controls_input" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.property.assertedControlsInput"></a>

```python
asserted_controls_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `wait_period_ms_input`<sup>Optional</sup> <a name="wait_period_ms_input" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.property.waitPeriodMsInput"></a>

```python
wait_period_ms_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `asserted_controls`<sup>Required</sup> <a name="asserted_controls" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.property.assertedControls"></a>

```python
asserted_controls: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `wait_period_ms`<sup>Required</sup> <a name="wait_period_ms" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.property.waitPeriodMs"></a>

```python
wait_period_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRuleOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Route53RecoverycontrolSafetyRuleAssertionRule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleAssertionRule">Route53RecoverycontrolSafetyRuleAssertionRule</a>

---


### Route53RecoverycontrolSafetyRuleGatingRuleOutputReference <a name="Route53RecoverycontrolSafetyRuleGatingRuleOutputReference" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import route53_recoverycontrol_safety_rule

route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.resetGatingControls">reset_gating_controls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.resetTargetControls">reset_target_controls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.resetWaitPeriodMs">reset_wait_period_ms</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_gating_controls` <a name="reset_gating_controls" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.resetGatingControls"></a>

```python
def reset_gating_controls() -> None
```

##### `reset_target_controls` <a name="reset_target_controls" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.resetTargetControls"></a>

```python
def reset_target_controls() -> None
```

##### `reset_wait_period_ms` <a name="reset_wait_period_ms" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.resetWaitPeriodMs"></a>

```python
def reset_wait_period_ms() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.property.gatingControlsInput">gating_controls_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.property.targetControlsInput">target_controls_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.property.waitPeriodMsInput">wait_period_ms_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.property.gatingControls">gating_controls</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.property.targetControls">target_controls</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.property.waitPeriodMs">wait_period_ms</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRule">Route53RecoverycontrolSafetyRuleGatingRule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `gating_controls_input`<sup>Optional</sup> <a name="gating_controls_input" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.property.gatingControlsInput"></a>

```python
gating_controls_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `target_controls_input`<sup>Optional</sup> <a name="target_controls_input" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.property.targetControlsInput"></a>

```python
target_controls_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `wait_period_ms_input`<sup>Optional</sup> <a name="wait_period_ms_input" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.property.waitPeriodMsInput"></a>

```python
wait_period_ms_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `gating_controls`<sup>Required</sup> <a name="gating_controls" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.property.gatingControls"></a>

```python
gating_controls: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `target_controls`<sup>Required</sup> <a name="target_controls" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.property.targetControls"></a>

```python
target_controls: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `wait_period_ms`<sup>Required</sup> <a name="wait_period_ms" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.property.waitPeriodMs"></a>

```python
wait_period_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRuleOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Route53RecoverycontrolSafetyRuleGatingRule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleGatingRule">Route53RecoverycontrolSafetyRuleGatingRule</a>

---


### Route53RecoverycontrolSafetyRuleRuleConfigOutputReference <a name="Route53RecoverycontrolSafetyRuleRuleConfigOutputReference" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import route53_recoverycontrol_safety_rule

route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.resetInverted">reset_inverted</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.resetThreshold">reset_threshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_inverted` <a name="reset_inverted" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.resetInverted"></a>

```python
def reset_inverted() -> None
```

##### `reset_threshold` <a name="reset_threshold" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.resetThreshold"></a>

```python
def reset_threshold() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.property.invertedInput">inverted_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.property.thresholdInput">threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.property.inverted">inverted</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.property.threshold">threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfig">Route53RecoverycontrolSafetyRuleRuleConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `inverted_input`<sup>Optional</sup> <a name="inverted_input" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.property.invertedInput"></a>

```python
inverted_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `threshold_input`<sup>Optional</sup> <a name="threshold_input" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.property.thresholdInput"></a>

```python
threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `inverted`<sup>Required</sup> <a name="inverted" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.property.inverted"></a>

```python
inverted: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.property.threshold"></a>

```python
threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Route53RecoverycontrolSafetyRuleRuleConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleRuleConfig">Route53RecoverycontrolSafetyRuleRuleConfig</a>

---


### Route53RecoverycontrolSafetyRuleTagsList <a name="Route53RecoverycontrolSafetyRuleTagsList" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import route53_recoverycontrol_safety_rule

route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Route53RecoverycontrolSafetyRuleTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTags">Route53RecoverycontrolSafetyRuleTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Route53RecoverycontrolSafetyRuleTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTags">Route53RecoverycontrolSafetyRuleTags</a>]

---


### Route53RecoverycontrolSafetyRuleTagsOutputReference <a name="Route53RecoverycontrolSafetyRuleTagsOutputReference" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import route53_recoverycontrol_safety_rule

route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTags">Route53RecoverycontrolSafetyRuleTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Route53RecoverycontrolSafetyRuleTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53RecoverycontrolSafetyRule.Route53RecoverycontrolSafetyRuleTags">Route53RecoverycontrolSafetyRuleTags</a>

---



