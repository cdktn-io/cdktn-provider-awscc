# `elasticloadbalancingv2ListenerRule` Submodule <a name="`elasticloadbalancingv2ListenerRule` Submodule" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Elasticloadbalancingv2ListenerRule <a name="Elasticloadbalancingv2ListenerRule" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule awscc_elasticloadbalancingv2_listener_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_listener_rule

elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  actions: IResolvable | typing.List[Elasticloadbalancingv2ListenerRuleActions],
  conditions: IResolvable | typing.List[Elasticloadbalancingv2ListenerRuleConditions],
  priority: typing.Union[int, float],
  listener_arn: str = None,
  tags: IResolvable | typing.List[Elasticloadbalancingv2ListenerRuleTags] = None,
  transforms: IResolvable | typing.List[Elasticloadbalancingv2ListenerRuleTransforms] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.Initializer.parameter.actions">actions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActions">Elasticloadbalancingv2ListenerRuleActions</a>]</code> | The actions. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.Initializer.parameter.conditions">conditions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditions">Elasticloadbalancingv2ListenerRuleConditions</a>]</code> | The conditions. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.Initializer.parameter.priority">priority</a></code> | <code>typing.Union[int, float]</code> | The rule priority. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.Initializer.parameter.listenerArn">listener_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the listener. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTags">Elasticloadbalancingv2ListenerRuleTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#tags Elasticloadbalancingv2ListenerRule#tags}. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.Initializer.parameter.transforms">transforms</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransforms">Elasticloadbalancingv2ListenerRuleTransforms</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#transforms Elasticloadbalancingv2ListenerRule#transforms}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.Initializer.parameter.actions"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActions">Elasticloadbalancingv2ListenerRuleActions</a>]

The actions.

The rule must include exactly one of the following types of actions: `forward`, `fixed-response`, or `redirect`, and it must be the last action to be performed. If the rule is for an HTTPS listener, it can also optionally include an authentication action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#actions Elasticloadbalancingv2ListenerRule#actions}

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.Initializer.parameter.conditions"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditions">Elasticloadbalancingv2ListenerRuleConditions</a>]

The conditions.

The rule can optionally include up to one of each of the following conditions: `http-request-method`, `host-header`, `path-pattern`, and `source-ip`. A rule can also optionally include one or more of each of the following conditions: `http-header` and `query-string`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#conditions Elasticloadbalancingv2ListenerRule#conditions}

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.Initializer.parameter.priority"></a>

- *Type:* typing.Union[int, float]

The rule priority.

A listener can't have multiple rules with the same priority.
If you try to reorder rules by updating their priorities, do not specify a new priority if an existing rule already uses this priority, as this can cause an error. If you need to reuse a priority with a different rule, you must remove it as a priority first, and then specify it in a subsequent update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#priority Elasticloadbalancingv2ListenerRule#priority}

---

##### `listener_arn`<sup>Optional</sup> <a name="listener_arn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.Initializer.parameter.listenerArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the listener.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#listener_arn Elasticloadbalancingv2ListenerRule#listener_arn}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTags">Elasticloadbalancingv2ListenerRuleTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#tags Elasticloadbalancingv2ListenerRule#tags}.

---

##### `transforms`<sup>Optional</sup> <a name="transforms" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.Initializer.parameter.transforms"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransforms">Elasticloadbalancingv2ListenerRuleTransforms</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#transforms Elasticloadbalancingv2ListenerRule#transforms}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.putActions">put_actions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.putConditions">put_conditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.putTransforms">put_transforms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.resetListenerArn">reset_listener_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.resetTransforms">reset_transforms</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_actions` <a name="put_actions" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.putActions"></a>

```python
def put_actions(
  value: IResolvable | typing.List[Elasticloadbalancingv2ListenerRuleActions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.putActions.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActions">Elasticloadbalancingv2ListenerRuleActions</a>]

---

##### `put_conditions` <a name="put_conditions" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.putConditions"></a>

```python
def put_conditions(
  value: IResolvable | typing.List[Elasticloadbalancingv2ListenerRuleConditions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.putConditions.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditions">Elasticloadbalancingv2ListenerRuleConditions</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[Elasticloadbalancingv2ListenerRuleTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTags">Elasticloadbalancingv2ListenerRuleTags</a>]

---

##### `put_transforms` <a name="put_transforms" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.putTransforms"></a>

```python
def put_transforms(
  value: IResolvable | typing.List[Elasticloadbalancingv2ListenerRuleTransforms]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.putTransforms.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransforms">Elasticloadbalancingv2ListenerRuleTransforms</a>]

---

##### `reset_listener_arn` <a name="reset_listener_arn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.resetListenerArn"></a>

```python
def reset_listener_arn() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_transforms` <a name="reset_transforms" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.resetTransforms"></a>

```python
def reset_transforms() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a Elasticloadbalancingv2ListenerRule resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.isConstruct"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_listener_rule

elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.isTerraformElement"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_listener_rule

elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.isTerraformResource"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_listener_rule

elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_listener_rule

elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a Elasticloadbalancingv2ListenerRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Elasticloadbalancingv2ListenerRule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Elasticloadbalancingv2ListenerRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Elasticloadbalancingv2ListenerRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.actions">actions</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsList">Elasticloadbalancingv2ListenerRuleActionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.conditions">conditions</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsList">Elasticloadbalancingv2ListenerRuleConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.isDefault">is_default</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.ruleArn">rule_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsList">Elasticloadbalancingv2ListenerRuleTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.transforms">transforms</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsList">Elasticloadbalancingv2ListenerRuleTransformsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.actionsInput">actions_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActions">Elasticloadbalancingv2ListenerRuleActions</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.conditionsInput">conditions_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditions">Elasticloadbalancingv2ListenerRuleConditions</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.listenerArnInput">listener_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTags">Elasticloadbalancingv2ListenerRuleTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.transformsInput">transforms_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransforms">Elasticloadbalancingv2ListenerRuleTransforms</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.listenerArn">listener_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.actions"></a>

```python
actions: Elasticloadbalancingv2ListenerRuleActionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsList">Elasticloadbalancingv2ListenerRuleActionsList</a>

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.conditions"></a>

```python
conditions: Elasticloadbalancingv2ListenerRuleConditionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsList">Elasticloadbalancingv2ListenerRuleConditionsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_default`<sup>Required</sup> <a name="is_default" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.isDefault"></a>

```python
is_default: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `rule_arn`<sup>Required</sup> <a name="rule_arn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.ruleArn"></a>

```python
rule_arn: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.tags"></a>

```python
tags: Elasticloadbalancingv2ListenerRuleTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsList">Elasticloadbalancingv2ListenerRuleTagsList</a>

---

##### `transforms`<sup>Required</sup> <a name="transforms" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.transforms"></a>

```python
transforms: Elasticloadbalancingv2ListenerRuleTransformsList
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsList">Elasticloadbalancingv2ListenerRuleTransformsList</a>

---

##### `actions_input`<sup>Optional</sup> <a name="actions_input" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.actionsInput"></a>

```python
actions_input: IResolvable | typing.List[Elasticloadbalancingv2ListenerRuleActions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActions">Elasticloadbalancingv2ListenerRuleActions</a>]

---

##### `conditions_input`<sup>Optional</sup> <a name="conditions_input" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.conditionsInput"></a>

```python
conditions_input: IResolvable | typing.List[Elasticloadbalancingv2ListenerRuleConditions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditions">Elasticloadbalancingv2ListenerRuleConditions</a>]

---

##### `listener_arn_input`<sup>Optional</sup> <a name="listener_arn_input" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.listenerArnInput"></a>

```python
listener_arn_input: str
```

- *Type:* str

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[Elasticloadbalancingv2ListenerRuleTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTags">Elasticloadbalancingv2ListenerRuleTags</a>]

---

##### `transforms_input`<sup>Optional</sup> <a name="transforms_input" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.transformsInput"></a>

```python
transforms_input: IResolvable | typing.List[Elasticloadbalancingv2ListenerRuleTransforms]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransforms">Elasticloadbalancingv2ListenerRuleTransforms</a>]

---

##### `listener_arn`<sup>Required</sup> <a name="listener_arn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.listenerArn"></a>

```python
listener_arn: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Elasticloadbalancingv2ListenerRuleActions <a name="Elasticloadbalancingv2ListenerRuleActions" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActions.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_listener_rule

elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActions(
  type: str,
  authenticate_cognito_config: Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig = None,
  authenticate_oidc_config: Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig = None,
  fixed_response_config: Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfig = None,
  forward_config: Elasticloadbalancingv2ListenerRuleActionsForwardConfig = None,
  jwt_validation_config: Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfig = None,
  order: typing.Union[int, float] = None,
  redirect_config: Elasticloadbalancingv2ListenerRuleActionsRedirectConfig = None,
  target_group_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActions.property.type">type</a></code> | <code>str</code> | The type of action. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActions.property.authenticateCognitoConfig">authenticate_cognito_config</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig">Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig</a></code> | [HTTPS listeners] Information for using Amazon Cognito to authenticate users. Specify only when ``Type`` is ``authenticate-cognito``. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActions.property.authenticateOidcConfig">authenticate_oidc_config</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig">Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig</a></code> | [HTTPS listeners] Information about an identity provider that is compliant with OpenID Connect (OIDC). |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActions.property.fixedResponseConfig">fixed_response_config</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfig">Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfig</a></code> | [Application Load Balancer] Information for creating an action that returns a custom HTTP response. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActions.property.forwardConfig">forward_config</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfig">Elasticloadbalancingv2ListenerRuleActionsForwardConfig</a></code> | Information for creating an action that distributes requests among multiple target groups. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActions.property.jwtValidationConfig">jwt_validation_config</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfig">Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfig</a></code> | [HTTPS listeners] Information for validating JWT access tokens in client requests. Specify only when ``Type`` is ``jwt-validation``. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActions.property.order">order</a></code> | <code>typing.Union[int, float]</code> | The order for the action. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActions.property.redirectConfig">redirect_config</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfig">Elasticloadbalancingv2ListenerRuleActionsRedirectConfig</a></code> | [Application Load Balancer] Information for creating a redirect action. Specify only when ``Type`` is ``redirect``. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActions.property.targetGroupArn">target_group_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the target group. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActions.property.type"></a>

```python
type: str
```

- *Type:* str

The type of action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#type Elasticloadbalancingv2ListenerRule#type}

---

##### `authenticate_cognito_config`<sup>Optional</sup> <a name="authenticate_cognito_config" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActions.property.authenticateCognitoConfig"></a>

```python
authenticate_cognito_config: Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig">Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig</a>

[HTTPS listeners] Information for using Amazon Cognito to authenticate users. Specify only when ``Type`` is ``authenticate-cognito``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#authenticate_cognito_config Elasticloadbalancingv2ListenerRule#authenticate_cognito_config}

---

##### `authenticate_oidc_config`<sup>Optional</sup> <a name="authenticate_oidc_config" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActions.property.authenticateOidcConfig"></a>

```python
authenticate_oidc_config: Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig">Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig</a>

[HTTPS listeners] Information about an identity provider that is compliant with OpenID Connect (OIDC).

Specify only when `Type` is `authenticate-oidc`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#authenticate_oidc_config Elasticloadbalancingv2ListenerRule#authenticate_oidc_config}

---

##### `fixed_response_config`<sup>Optional</sup> <a name="fixed_response_config" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActions.property.fixedResponseConfig"></a>

```python
fixed_response_config: Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfig">Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfig</a>

[Application Load Balancer] Information for creating an action that returns a custom HTTP response.

Specify only when `Type` is `fixed-response`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#fixed_response_config Elasticloadbalancingv2ListenerRule#fixed_response_config}

---

##### `forward_config`<sup>Optional</sup> <a name="forward_config" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActions.property.forwardConfig"></a>

```python
forward_config: Elasticloadbalancingv2ListenerRuleActionsForwardConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfig">Elasticloadbalancingv2ListenerRuleActionsForwardConfig</a>

Information for creating an action that distributes requests among multiple target groups.

Specify only when `Type` is `forward`.
If you specify both `ForwardConfig` and `TargetGroupArn`, you can specify only one target group using `ForwardConfig` and it must be the same target group specified in `TargetGroupArn`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#forward_config Elasticloadbalancingv2ListenerRule#forward_config}

---

##### `jwt_validation_config`<sup>Optional</sup> <a name="jwt_validation_config" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActions.property.jwtValidationConfig"></a>

```python
jwt_validation_config: Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfig">Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfig</a>

[HTTPS listeners] Information for validating JWT access tokens in client requests. Specify only when ``Type`` is ``jwt-validation``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#jwt_validation_config Elasticloadbalancingv2ListenerRule#jwt_validation_config}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActions.property.order"></a>

```python
order: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The order for the action.

This value is required for rules with multiple actions. The action with the lowest value for order is performed first.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#order Elasticloadbalancingv2ListenerRule#order}

---

##### `redirect_config`<sup>Optional</sup> <a name="redirect_config" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActions.property.redirectConfig"></a>

```python
redirect_config: Elasticloadbalancingv2ListenerRuleActionsRedirectConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfig">Elasticloadbalancingv2ListenerRuleActionsRedirectConfig</a>

[Application Load Balancer] Information for creating a redirect action. Specify only when ``Type`` is ``redirect``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#redirect_config Elasticloadbalancingv2ListenerRule#redirect_config}

---

##### `target_group_arn`<sup>Optional</sup> <a name="target_group_arn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActions.property.targetGroupArn"></a>

```python
target_group_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the target group.

Specify only when `Type` is `forward` and you want to route to a single target group. To route to multiple target groups, you must use `ForwardConfig` instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#target_group_arn Elasticloadbalancingv2ListenerRule#target_group_arn}

---

### Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig <a name="Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_listener_rule

elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig(
  authentication_request_extra_params: typing.Mapping[str] = None,
  on_unauthenticated_request: str = None,
  scope: str = None,
  session_cookie_name: str = None,
  session_timeout: typing.Union[int, float] = None,
  user_pool_arn: str = None,
  user_pool_client_id: str = None,
  user_pool_domain: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig.property.authenticationRequestExtraParams">authentication_request_extra_params</a></code> | <code>typing.Mapping[str]</code> | The query parameters (up to 10) to include in the redirect request to the authorization endpoint. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig.property.onUnauthenticatedRequest">on_unauthenticated_request</a></code> | <code>str</code> | The behavior if the user is not authenticated. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig.property.scope">scope</a></code> | <code>str</code> | The set of user claims to be requested from the IdP. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig.property.sessionCookieName">session_cookie_name</a></code> | <code>str</code> | The name of the cookie used to maintain session information. The default is AWSELBAuthSessionCookie. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig.property.sessionTimeout">session_timeout</a></code> | <code>typing.Union[int, float]</code> | The maximum duration of the authentication session, in seconds. The default is 604800 seconds (7 days). |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig.property.userPoolArn">user_pool_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the Amazon Cognito user pool. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig.property.userPoolClientId">user_pool_client_id</a></code> | <code>str</code> | The ID of the Amazon Cognito user pool client. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig.property.userPoolDomain">user_pool_domain</a></code> | <code>str</code> | The domain prefix or fully-qualified domain name of the Amazon Cognito user pool. |

---

##### `authentication_request_extra_params`<sup>Optional</sup> <a name="authentication_request_extra_params" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig.property.authenticationRequestExtraParams"></a>

```python
authentication_request_extra_params: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The query parameters (up to 10) to include in the redirect request to the authorization endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#authentication_request_extra_params Elasticloadbalancingv2ListenerRule#authentication_request_extra_params}

---

##### `on_unauthenticated_request`<sup>Optional</sup> <a name="on_unauthenticated_request" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig.property.onUnauthenticatedRequest"></a>

```python
on_unauthenticated_request: str
```

- *Type:* str

The behavior if the user is not authenticated.

The following are possible values:

* deny```` - Return an HTTP 401 Unauthorized error.
* allow```` - Allow the request to be forwarded to the target.
* authenticate```` - Redirect the request to the IdP authorization endpoint. This is the default value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#on_unauthenticated_request Elasticloadbalancingv2ListenerRule#on_unauthenticated_request}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig.property.scope"></a>

```python
scope: str
```

- *Type:* str

The set of user claims to be requested from the IdP.

The default is `openid`.
To verify which scope values your IdP supports and how to separate multiple values, see the documentation for your IdP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#scope Elasticloadbalancingv2ListenerRule#scope}

---

##### `session_cookie_name`<sup>Optional</sup> <a name="session_cookie_name" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig.property.sessionCookieName"></a>

```python
session_cookie_name: str
```

- *Type:* str

The name of the cookie used to maintain session information. The default is AWSELBAuthSessionCookie.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#session_cookie_name Elasticloadbalancingv2ListenerRule#session_cookie_name}

---

##### `session_timeout`<sup>Optional</sup> <a name="session_timeout" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig.property.sessionTimeout"></a>

```python
session_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum duration of the authentication session, in seconds. The default is 604800 seconds (7 days).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#session_timeout Elasticloadbalancingv2ListenerRule#session_timeout}

---

##### `user_pool_arn`<sup>Optional</sup> <a name="user_pool_arn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig.property.userPoolArn"></a>

```python
user_pool_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the Amazon Cognito user pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#user_pool_arn Elasticloadbalancingv2ListenerRule#user_pool_arn}

---

##### `user_pool_client_id`<sup>Optional</sup> <a name="user_pool_client_id" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig.property.userPoolClientId"></a>

```python
user_pool_client_id: str
```

- *Type:* str

The ID of the Amazon Cognito user pool client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#user_pool_client_id Elasticloadbalancingv2ListenerRule#user_pool_client_id}

---

##### `user_pool_domain`<sup>Optional</sup> <a name="user_pool_domain" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig.property.userPoolDomain"></a>

```python
user_pool_domain: str
```

- *Type:* str

The domain prefix or fully-qualified domain name of the Amazon Cognito user pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#user_pool_domain Elasticloadbalancingv2ListenerRule#user_pool_domain}

---

### Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig <a name="Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_listener_rule

elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig(
  authentication_request_extra_params: typing.Mapping[str] = None,
  authorization_endpoint: str = None,
  client_id: str = None,
  client_secret: str = None,
  issuer: str = None,
  on_unauthenticated_request: str = None,
  scope: str = None,
  session_cookie_name: str = None,
  session_timeout: typing.Union[int, float] = None,
  token_endpoint: str = None,
  use_existing_client_secret: bool | IResolvable = None,
  user_info_endpoint: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig.property.authenticationRequestExtraParams">authentication_request_extra_params</a></code> | <code>typing.Mapping[str]</code> | The query parameters (up to 10) to include in the redirect request to the authorization endpoint. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig.property.authorizationEndpoint">authorization_endpoint</a></code> | <code>str</code> | The authorization endpoint of the IdP. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig.property.clientId">client_id</a></code> | <code>str</code> | The OAuth 2.0 client identifier. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig.property.clientSecret">client_secret</a></code> | <code>str</code> | The OAuth 2.0 client secret. This parameter is required if you are creating a rule. If you are modifying a rule, you can omit this parameter if you set ``UseExistingClientSecret`` to true. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig.property.issuer">issuer</a></code> | <code>str</code> | The OIDC issuer identifier of the IdP. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig.property.onUnauthenticatedRequest">on_unauthenticated_request</a></code> | <code>str</code> | The behavior if the user is not authenticated. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig.property.scope">scope</a></code> | <code>str</code> | The set of user claims to be requested from the IdP. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig.property.sessionCookieName">session_cookie_name</a></code> | <code>str</code> | The name of the cookie used to maintain session information. The default is AWSELBAuthSessionCookie. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig.property.sessionTimeout">session_timeout</a></code> | <code>typing.Union[int, float]</code> | The maximum duration of the authentication session, in seconds. The default is 604800 seconds (7 days). |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig.property.tokenEndpoint">token_endpoint</a></code> | <code>str</code> | The token endpoint of the IdP. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig.property.useExistingClientSecret">use_existing_client_secret</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether to use the existing client secret when modifying a rule. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig.property.userInfoEndpoint">user_info_endpoint</a></code> | <code>str</code> | The user info endpoint of the IdP. |

---

##### `authentication_request_extra_params`<sup>Optional</sup> <a name="authentication_request_extra_params" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig.property.authenticationRequestExtraParams"></a>

```python
authentication_request_extra_params: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The query parameters (up to 10) to include in the redirect request to the authorization endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#authentication_request_extra_params Elasticloadbalancingv2ListenerRule#authentication_request_extra_params}

---

##### `authorization_endpoint`<sup>Optional</sup> <a name="authorization_endpoint" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig.property.authorizationEndpoint"></a>

```python
authorization_endpoint: str
```

- *Type:* str

The authorization endpoint of the IdP.

This must be a full URL, including the HTTPS protocol, the domain, and the path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#authorization_endpoint Elasticloadbalancingv2ListenerRule#authorization_endpoint}

---

##### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

The OAuth 2.0 client identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#client_id Elasticloadbalancingv2ListenerRule#client_id}

---

##### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

The OAuth 2.0 client secret. This parameter is required if you are creating a rule. If you are modifying a rule, you can omit this parameter if you set ``UseExistingClientSecret`` to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#client_secret Elasticloadbalancingv2ListenerRule#client_secret}

---

##### `issuer`<sup>Optional</sup> <a name="issuer" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

The OIDC issuer identifier of the IdP.

This must be a full URL, including the HTTPS protocol, the domain, and the path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#issuer Elasticloadbalancingv2ListenerRule#issuer}

---

##### `on_unauthenticated_request`<sup>Optional</sup> <a name="on_unauthenticated_request" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig.property.onUnauthenticatedRequest"></a>

```python
on_unauthenticated_request: str
```

- *Type:* str

The behavior if the user is not authenticated.

The following are possible values:

* deny```` - Return an HTTP 401 Unauthorized error.
* allow```` - Allow the request to be forwarded to the target.
* authenticate```` - Redirect the request to the IdP authorization endpoint. This is the default value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#on_unauthenticated_request Elasticloadbalancingv2ListenerRule#on_unauthenticated_request}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig.property.scope"></a>

```python
scope: str
```

- *Type:* str

The set of user claims to be requested from the IdP.

The default is `openid`.
To verify which scope values your IdP supports and how to separate multiple values, see the documentation for your IdP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#scope Elasticloadbalancingv2ListenerRule#scope}

---

##### `session_cookie_name`<sup>Optional</sup> <a name="session_cookie_name" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig.property.sessionCookieName"></a>

```python
session_cookie_name: str
```

- *Type:* str

The name of the cookie used to maintain session information. The default is AWSELBAuthSessionCookie.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#session_cookie_name Elasticloadbalancingv2ListenerRule#session_cookie_name}

---

##### `session_timeout`<sup>Optional</sup> <a name="session_timeout" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig.property.sessionTimeout"></a>

```python
session_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum duration of the authentication session, in seconds. The default is 604800 seconds (7 days).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#session_timeout Elasticloadbalancingv2ListenerRule#session_timeout}

---

##### `token_endpoint`<sup>Optional</sup> <a name="token_endpoint" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig.property.tokenEndpoint"></a>

```python
token_endpoint: str
```

- *Type:* str

The token endpoint of the IdP.

This must be a full URL, including the HTTPS protocol, the domain, and the path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#token_endpoint Elasticloadbalancingv2ListenerRule#token_endpoint}

---

##### `use_existing_client_secret`<sup>Optional</sup> <a name="use_existing_client_secret" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig.property.useExistingClientSecret"></a>

```python
use_existing_client_secret: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether to use the existing client secret when modifying a rule.

If you are creating a rule, you can omit this parameter or set it to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#use_existing_client_secret Elasticloadbalancingv2ListenerRule#use_existing_client_secret}

---

##### `user_info_endpoint`<sup>Optional</sup> <a name="user_info_endpoint" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig.property.userInfoEndpoint"></a>

```python
user_info_endpoint: str
```

- *Type:* str

The user info endpoint of the IdP.

This must be a full URL, including the HTTPS protocol, the domain, and the path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#user_info_endpoint Elasticloadbalancingv2ListenerRule#user_info_endpoint}

---

### Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfig <a name="Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfig.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_listener_rule

elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfig(
  content_type: str = None,
  message_body: str = None,
  status_code: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfig.property.contentType">content_type</a></code> | <code>str</code> | The content type.  Valid Values: text/plain \| text/css \| text/html \| application/javascript \| application/json. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfig.property.messageBody">message_body</a></code> | <code>str</code> | The message. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfig.property.statusCode">status_code</a></code> | <code>str</code> | The HTTP response code (2XX, 4XX, or 5XX). |

---

##### `content_type`<sup>Optional</sup> <a name="content_type" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfig.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

The content type.  Valid Values: text/plain | text/css | text/html | application/javascript | application/json.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#content_type Elasticloadbalancingv2ListenerRule#content_type}

---

##### `message_body`<sup>Optional</sup> <a name="message_body" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfig.property.messageBody"></a>

```python
message_body: str
```

- *Type:* str

The message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#message_body Elasticloadbalancingv2ListenerRule#message_body}

---

##### `status_code`<sup>Optional</sup> <a name="status_code" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfig.property.statusCode"></a>

```python
status_code: str
```

- *Type:* str

The HTTP response code (2XX, 4XX, or 5XX).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#status_code Elasticloadbalancingv2ListenerRule#status_code}

---

### Elasticloadbalancingv2ListenerRuleActionsForwardConfig <a name="Elasticloadbalancingv2ListenerRuleActionsForwardConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfig.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_listener_rule

elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfig(
  target_groups: IResolvable | typing.List[Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroups] = None,
  target_group_stickiness_config: Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfig.property.targetGroups">target_groups</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroups">Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroups</a>]</code> | Information about how traffic will be distributed between multiple target groups in a forward rule. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfig.property.targetGroupStickinessConfig">target_group_stickiness_config</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfig">Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfig</a></code> | Information about the target group stickiness for a rule. |

---

##### `target_groups`<sup>Optional</sup> <a name="target_groups" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfig.property.targetGroups"></a>

```python
target_groups: IResolvable | typing.List[Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroups]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroups">Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroups</a>]

Information about how traffic will be distributed between multiple target groups in a forward rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#target_groups Elasticloadbalancingv2ListenerRule#target_groups}

---

##### `target_group_stickiness_config`<sup>Optional</sup> <a name="target_group_stickiness_config" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfig.property.targetGroupStickinessConfig"></a>

```python
target_group_stickiness_config: Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfig">Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfig</a>

Information about the target group stickiness for a rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#target_group_stickiness_config Elasticloadbalancingv2ListenerRule#target_group_stickiness_config}

---

### Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroups <a name="Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroups" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroups"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroups.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_listener_rule

elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroups(
  target_group_arn: str = None,
  weight: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroups.property.targetGroupArn">target_group_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the target group. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroups.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | The weight. The range is 0 to 999. |

---

##### `target_group_arn`<sup>Optional</sup> <a name="target_group_arn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroups.property.targetGroupArn"></a>

```python
target_group_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the target group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#target_group_arn Elasticloadbalancingv2ListenerRule#target_group_arn}

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroups.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The weight. The range is 0 to 999.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#weight Elasticloadbalancingv2ListenerRule#weight}

---

### Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfig <a name="Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfig.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_listener_rule

elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfig(
  duration_seconds: typing.Union[int, float] = None,
  enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfig.property.durationSeconds">duration_seconds</a></code> | <code>typing.Union[int, float]</code> | [Application Load Balancers] The time period, in seconds, during which requests from a client should be routed to the same target group. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfig.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether target group stickiness is enabled. |

---

##### `duration_seconds`<sup>Optional</sup> <a name="duration_seconds" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfig.property.durationSeconds"></a>

```python
duration_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

[Application Load Balancers] The time period, in seconds, during which requests from a client should be routed to the same target group.

The range is 1-604800 seconds (7 days). You must specify this value when enabling target group stickiness.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#duration_seconds Elasticloadbalancingv2ListenerRule#duration_seconds}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfig.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether target group stickiness is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#enabled Elasticloadbalancingv2ListenerRule#enabled}

---

### Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfig <a name="Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_listener_rule

elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfig(
  additional_claims: IResolvable | typing.List[Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaims] = None,
  issuer: str = None,
  jwks_endpoint: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfig.property.additionalClaims">additional_claims</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaims">Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaims</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#additional_claims Elasticloadbalancingv2ListenerRule#additional_claims}. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfig.property.issuer">issuer</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#issuer Elasticloadbalancingv2ListenerRule#issuer}. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfig.property.jwksEndpoint">jwks_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#jwks_endpoint Elasticloadbalancingv2ListenerRule#jwks_endpoint}. |

---

##### `additional_claims`<sup>Optional</sup> <a name="additional_claims" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfig.property.additionalClaims"></a>

```python
additional_claims: IResolvable | typing.List[Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaims]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaims">Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaims</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#additional_claims Elasticloadbalancingv2ListenerRule#additional_claims}.

---

##### `issuer`<sup>Optional</sup> <a name="issuer" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfig.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#issuer Elasticloadbalancingv2ListenerRule#issuer}.

---

##### `jwks_endpoint`<sup>Optional</sup> <a name="jwks_endpoint" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfig.property.jwksEndpoint"></a>

```python
jwks_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#jwks_endpoint Elasticloadbalancingv2ListenerRule#jwks_endpoint}.

---

### Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaims <a name="Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaims" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaims"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaims.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_listener_rule

elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaims(
  format: str = None,
  name: str = None,
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaims.property.format">format</a></code> | <code>str</code> | The format of the claim value. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaims.property.name">name</a></code> | <code>str</code> | The name of the claim. You can't specify ``exp``, ``iss``, ``nbf``, or ``iat`` because we validate them by default. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaims.property.values">values</a></code> | <code>typing.List[str]</code> | The claim value. |

---

##### `format`<sup>Optional</sup> <a name="format" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaims.property.format"></a>

```python
format: str
```

- *Type:* str

The format of the claim value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#format Elasticloadbalancingv2ListenerRule#format}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaims.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the claim. You can't specify ``exp``, ``iss``, ``nbf``, or ``iat`` because we validate them by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#name Elasticloadbalancingv2ListenerRule#name}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaims.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

The claim value.

The maximum size of the list is 10. Each value can be up to 256 characters in length. If the format is `space-separated-values`, the values can't include spaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#values Elasticloadbalancingv2ListenerRule#values}

---

### Elasticloadbalancingv2ListenerRuleActionsRedirectConfig <a name="Elasticloadbalancingv2ListenerRuleActionsRedirectConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfig.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_listener_rule

elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfig(
  host: str = None,
  path: str = None,
  port: str = None,
  protocol: str = None,
  query: str = None,
  status_code: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfig.property.host">host</a></code> | <code>str</code> | The hostname. This component is not percent-encoded. The hostname can contain #{host}. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfig.property.path">path</a></code> | <code>str</code> | The absolute path, starting with the leading "/". |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfig.property.port">port</a></code> | <code>str</code> | The port. You can specify a value from 1 to 65535 or #{port}. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfig.property.protocol">protocol</a></code> | <code>str</code> | The protocol. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfig.property.query">query</a></code> | <code>str</code> | The query parameters, URL-encoded when necessary, but not percent-encoded. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfig.property.statusCode">status_code</a></code> | <code>str</code> | The HTTP redirect code. The redirect is either permanent (HTTP 301) or temporary (HTTP 302). |

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfig.property.host"></a>

```python
host: str
```

- *Type:* str

The hostname. This component is not percent-encoded. The hostname can contain #{host}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#host Elasticloadbalancingv2ListenerRule#host}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfig.property.path"></a>

```python
path: str
```

- *Type:* str

The absolute path, starting with the leading "/".

This component is not percent-encoded. The path can contain #{host}, #{path}, and #{port}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#path Elasticloadbalancingv2ListenerRule#path}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfig.property.port"></a>

```python
port: str
```

- *Type:* str

The port. You can specify a value from 1 to 65535 or #{port}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#port Elasticloadbalancingv2ListenerRule#port}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfig.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

The protocol.

You can specify HTTP, HTTPS, or #{protocol}. You can redirect HTTP to HTTP, HTTP to HTTPS, and HTTPS to HTTPS. You can't redirect HTTPS to HTTP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#protocol Elasticloadbalancingv2ListenerRule#protocol}

---

##### `query`<sup>Optional</sup> <a name="query" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfig.property.query"></a>

```python
query: str
```

- *Type:* str

The query parameters, URL-encoded when necessary, but not percent-encoded.

Do not include the leading "?", as it is automatically added. You can specify any of the reserved keywords.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#query Elasticloadbalancingv2ListenerRule#query}

---

##### `status_code`<sup>Optional</sup> <a name="status_code" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfig.property.statusCode"></a>

```python
status_code: str
```

- *Type:* str

The HTTP redirect code. The redirect is either permanent (HTTP 301) or temporary (HTTP 302).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#status_code Elasticloadbalancingv2ListenerRule#status_code}

---

### Elasticloadbalancingv2ListenerRuleConditions <a name="Elasticloadbalancingv2ListenerRuleConditions" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditions.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_listener_rule

elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditions(
  field: str = None,
  host_header_config: Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfig = None,
  http_header_config: Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfig = None,
  http_request_method_config: Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfig = None,
  path_pattern_config: Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfig = None,
  query_string_config: Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfig = None,
  regex_values: typing.List[str] = None,
  source_ip_config: Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfig = None,
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditions.property.field">field</a></code> | <code>str</code> | The name of the field. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditions.property.hostHeaderConfig">host_header_config</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfig">Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfig</a></code> | Information for a host header condition. Specify only when ``Field`` is ``host-header``. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditions.property.httpHeaderConfig">http_header_config</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfig">Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfig</a></code> | Information for an HTTP header condition. Specify only when ``Field`` is ``http-header``. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditions.property.httpRequestMethodConfig">http_request_method_config</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfig">Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfig</a></code> | Information for an HTTP method condition. Specify only when ``Field`` is ``http-request-method``. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditions.property.pathPatternConfig">path_pattern_config</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfig">Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfig</a></code> | Information for a path pattern condition. Specify only when ``Field`` is ``path-pattern``. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditions.property.queryStringConfig">query_string_config</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfig">Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfig</a></code> | Information for a query string condition. Specify only when ``Field`` is ``query-string``. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditions.property.regexValues">regex_values</a></code> | <code>typing.List[str]</code> | The regular expressions to match against the condition field. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditions.property.sourceIpConfig">source_ip_config</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfig">Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfig</a></code> | Information for a source IP condition. Specify only when ``Field`` is ``source-ip``. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditions.property.values">values</a></code> | <code>typing.List[str]</code> | The condition value. |

---

##### `field`<sup>Optional</sup> <a name="field" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditions.property.field"></a>

```python
field: str
```

- *Type:* str

The name of the field.

The possible values are:

* `http-header` ? [ALB] Matches on an HTTP header field.
* `http-request-method` ? [ALB] Matches on the HTTP request method.
* `host-header` ? [ALB] Matches on the host header.
* `path-pattern` ? [ALB] Matches on the URL path of the request.
* `query-string` ? [ALB] Matches on a query string parameter.
* `source-ip` ? [ALB, NLB] Matches on the source IP address. For ALB, use `SourceIpConfig` with `Values` to specify CIDR ranges. For NLB, use `SourceIpConfig` with `IpAddressType` to match the IP address type (`ipv4` or `ipv6`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#field Elasticloadbalancingv2ListenerRule#field}

---

##### `host_header_config`<sup>Optional</sup> <a name="host_header_config" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditions.property.hostHeaderConfig"></a>

```python
host_header_config: Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfig">Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfig</a>

Information for a host header condition. Specify only when ``Field`` is ``host-header``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#host_header_config Elasticloadbalancingv2ListenerRule#host_header_config}

---

##### `http_header_config`<sup>Optional</sup> <a name="http_header_config" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditions.property.httpHeaderConfig"></a>

```python
http_header_config: Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfig">Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfig</a>

Information for an HTTP header condition. Specify only when ``Field`` is ``http-header``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#http_header_config Elasticloadbalancingv2ListenerRule#http_header_config}

---

##### `http_request_method_config`<sup>Optional</sup> <a name="http_request_method_config" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditions.property.httpRequestMethodConfig"></a>

```python
http_request_method_config: Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfig">Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfig</a>

Information for an HTTP method condition. Specify only when ``Field`` is ``http-request-method``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#http_request_method_config Elasticloadbalancingv2ListenerRule#http_request_method_config}

---

##### `path_pattern_config`<sup>Optional</sup> <a name="path_pattern_config" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditions.property.pathPatternConfig"></a>

```python
path_pattern_config: Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfig">Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfig</a>

Information for a path pattern condition. Specify only when ``Field`` is ``path-pattern``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#path_pattern_config Elasticloadbalancingv2ListenerRule#path_pattern_config}

---

##### `query_string_config`<sup>Optional</sup> <a name="query_string_config" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditions.property.queryStringConfig"></a>

```python
query_string_config: Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfig">Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfig</a>

Information for a query string condition. Specify only when ``Field`` is ``query-string``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#query_string_config Elasticloadbalancingv2ListenerRule#query_string_config}

---

##### `regex_values`<sup>Optional</sup> <a name="regex_values" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditions.property.regexValues"></a>

```python
regex_values: typing.List[str]
```

- *Type:* typing.List[str]

The regular expressions to match against the condition field.

The maximum length of each string is 128 characters. Specify only when `Field` is `http-header`, `host-header`, or `path-pattern`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#regex_values Elasticloadbalancingv2ListenerRule#regex_values}

---

##### `source_ip_config`<sup>Optional</sup> <a name="source_ip_config" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditions.property.sourceIpConfig"></a>

```python
source_ip_config: Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfig">Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfig</a>

Information for a source IP condition. Specify only when ``Field`` is ``source-ip``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#source_ip_config Elasticloadbalancingv2ListenerRule#source_ip_config}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditions.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

The condition value.

Specify only when `Field` is `host-header` or `path-pattern`. Alternatively, to specify multiple host names or multiple path patterns, use `HostHeaderConfig` or `PathPatternConfig`.
If `Field` is `host-header` and you're not using `HostHeaderConfig`, you can specify a single host name (for example, my.example.com). A host name is case insensitive, can be up to 128 characters in length, and can contain any of the following characters.

* A-Z, a-z, 0-9
* * .
* * (matches 0 or more characters)
* ? (matches exactly 1 character)

If `Field` is `path-pattern` and you're not using `PathPatternConfig`, you can specify a single path pattern (for example, /img/*). A path pattern is case-sensitive, can be up to 128 characters in length, and can contain any of the following characters.

* A-Z, a-z, 0-9
* _ - . $ / ~ " ' @ : +
* & (using &)
* * (matches 0 or more characters)
* ? (matches exactly 1 character)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#values Elasticloadbalancingv2ListenerRule#values}

---

### Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfig <a name="Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfig.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_listener_rule

elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfig(
  regex_values: typing.List[str] = None,
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfig.property.regexValues">regex_values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#regex_values Elasticloadbalancingv2ListenerRule#regex_values}. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfig.property.values">values</a></code> | <code>typing.List[str]</code> | The host names. |

---

##### `regex_values`<sup>Optional</sup> <a name="regex_values" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfig.property.regexValues"></a>

```python
regex_values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#regex_values Elasticloadbalancingv2ListenerRule#regex_values}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfig.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

The host names.

The maximum length of each string is 128 characters. The comparison is case insensitive. The following wildcard characters are supported: * (matches 0 or more characters) and ? (matches exactly 1 character). You must include at least one "." character. You can include only alphabetical characters after the final "." character.
If you specify multiple strings, the condition is satisfied if one of the strings matches the host name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#values Elasticloadbalancingv2ListenerRule#values}

---

### Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfig <a name="Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfig.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_listener_rule

elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfig(
  http_header_name: str = None,
  regex_values: typing.List[str] = None,
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfig.property.httpHeaderName">http_header_name</a></code> | <code>str</code> | The name of the HTTP header field. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfig.property.regexValues">regex_values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#regex_values Elasticloadbalancingv2ListenerRule#regex_values}. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfig.property.values">values</a></code> | <code>typing.List[str]</code> | The strings to compare against the value of the HTTP header. |

---

##### `http_header_name`<sup>Optional</sup> <a name="http_header_name" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfig.property.httpHeaderName"></a>

```python
http_header_name: str
```

- *Type:* str

The name of the HTTP header field.

The maximum size is 40 characters. The header name is case insensitive. The allowed characters are specified by RFC 7230. Wildcards are not supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#http_header_name Elasticloadbalancingv2ListenerRule#http_header_name}

---

##### `regex_values`<sup>Optional</sup> <a name="regex_values" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfig.property.regexValues"></a>

```python
regex_values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#regex_values Elasticloadbalancingv2ListenerRule#regex_values}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfig.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

The strings to compare against the value of the HTTP header.

The maximum length of each string is 128 characters. The comparison strings are case insensitive. The following wildcard characters are supported: * (matches 0 or more characters) and ? (matches exactly 1 character).
If the same header appears multiple times in the request, we search them in order until a match is found.
If you specify multiple strings, the condition is satisfied if one of the strings matches the value of the HTTP header. To require that all of the strings are a match, create one condition per string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#values Elasticloadbalancingv2ListenerRule#values}

---

### Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfig <a name="Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfig.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_listener_rule

elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfig(
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfig.property.values">values</a></code> | <code>typing.List[str]</code> | The name of the request method. |

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfig.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

The name of the request method.

The maximum length is 40 characters. The allowed characters are A-Z, hyphen (-), and underscore (_). The comparison is case sensitive. Wildcards are not supported; therefore, the method name must be an exact match.
If you specify multiple strings, the condition is satisfied if one of the strings matches the HTTP request method. We recommend that you route GET and HEAD requests in the same way, because the response to a HEAD request may be cached.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#values Elasticloadbalancingv2ListenerRule#values}

---

### Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfig <a name="Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfig.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_listener_rule

elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfig(
  regex_values: typing.List[str] = None,
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfig.property.regexValues">regex_values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#regex_values Elasticloadbalancingv2ListenerRule#regex_values}. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfig.property.values">values</a></code> | <code>typing.List[str]</code> | The path patterns to compare against the request URL. |

---

##### `regex_values`<sup>Optional</sup> <a name="regex_values" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfig.property.regexValues"></a>

```python
regex_values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#regex_values Elasticloadbalancingv2ListenerRule#regex_values}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfig.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

The path patterns to compare against the request URL.

The maximum size of each string is 128 characters. The comparison is case sensitive. The following wildcard characters are supported: * (matches 0 or more characters) and ? (matches exactly 1 character).
If you specify multiple strings, the condition is satisfied if one of them matches the request URL. The path pattern is compared only to the path of the URL, not to its query string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#values Elasticloadbalancingv2ListenerRule#values}

---

### Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfig <a name="Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfig.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_listener_rule

elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfig(
  values: IResolvable | typing.List[Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValues] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfig.property.values">values</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValues">Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValues</a>]</code> | The key/value pairs or values to find in the query string. |

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfig.property.values"></a>

```python
values: IResolvable | typing.List[Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValues]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValues">Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValues</a>]

The key/value pairs or values to find in the query string.

The maximum length of each string is 128 characters. The comparison is case insensitive. The following wildcard characters are supported: * (matches 0 or more characters) and ? (matches exactly 1 character). To search for a literal '*' or '?' character in a query string, you must escape these characters in `Values` using a '' character.
If you specify multiple key/value pairs or values, the condition is satisfied if one of them is found in the query string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#values Elasticloadbalancingv2ListenerRule#values}

---

### Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValues <a name="Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValues" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValues.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_listener_rule

elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValues(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValues.property.key">key</a></code> | <code>str</code> | The key. You can omit the key. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValues.property.value">value</a></code> | <code>str</code> | The value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValues.property.key"></a>

```python
key: str
```

- *Type:* str

The key. You can omit the key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#key Elasticloadbalancingv2ListenerRule#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValues.property.value"></a>

```python
value: str
```

- *Type:* str

The value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#value Elasticloadbalancingv2ListenerRule#value}

---

### Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfig <a name="Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfig.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_listener_rule

elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfig(
  ip_address_type: str = None,
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfig.property.ipAddressType">ip_address_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#ip_address_type Elasticloadbalancingv2ListenerRule#ip_address_type}. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfig.property.values">values</a></code> | <code>typing.List[str]</code> | The source IP addresses, in CIDR format. |

---

##### `ip_address_type`<sup>Optional</sup> <a name="ip_address_type" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfig.property.ipAddressType"></a>

```python
ip_address_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#ip_address_type Elasticloadbalancingv2ListenerRule#ip_address_type}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfig.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

The source IP addresses, in CIDR format.

You can use both IPv4 and IPv6 addresses. Wildcards are not supported.
If you specify multiple addresses, the condition is satisfied if the source IP address of the request matches one of the CIDR blocks. This condition is not satisfied by the addresses in the X-Forwarded-For header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#values Elasticloadbalancingv2ListenerRule#values}

---

### Elasticloadbalancingv2ListenerRuleConfig <a name="Elasticloadbalancingv2ListenerRuleConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConfig.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_listener_rule

elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  actions: IResolvable | typing.List[Elasticloadbalancingv2ListenerRuleActions],
  conditions: IResolvable | typing.List[Elasticloadbalancingv2ListenerRuleConditions],
  priority: typing.Union[int, float],
  listener_arn: str = None,
  tags: IResolvable | typing.List[Elasticloadbalancingv2ListenerRuleTags] = None,
  transforms: IResolvable | typing.List[Elasticloadbalancingv2ListenerRuleTransforms] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConfig.property.actions">actions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActions">Elasticloadbalancingv2ListenerRuleActions</a>]</code> | The actions. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConfig.property.conditions">conditions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditions">Elasticloadbalancingv2ListenerRuleConditions</a>]</code> | The conditions. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConfig.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | The rule priority. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConfig.property.listenerArn">listener_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the listener. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTags">Elasticloadbalancingv2ListenerRuleTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#tags Elasticloadbalancingv2ListenerRule#tags}. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConfig.property.transforms">transforms</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransforms">Elasticloadbalancingv2ListenerRuleTransforms</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#transforms Elasticloadbalancingv2ListenerRule#transforms}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConfig.property.actions"></a>

```python
actions: IResolvable | typing.List[Elasticloadbalancingv2ListenerRuleActions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActions">Elasticloadbalancingv2ListenerRuleActions</a>]

The actions.

The rule must include exactly one of the following types of actions: `forward`, `fixed-response`, or `redirect`, and it must be the last action to be performed. If the rule is for an HTTPS listener, it can also optionally include an authentication action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#actions Elasticloadbalancingv2ListenerRule#actions}

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConfig.property.conditions"></a>

```python
conditions: IResolvable | typing.List[Elasticloadbalancingv2ListenerRuleConditions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditions">Elasticloadbalancingv2ListenerRuleConditions</a>]

The conditions.

The rule can optionally include up to one of each of the following conditions: `http-request-method`, `host-header`, `path-pattern`, and `source-ip`. A rule can also optionally include one or more of each of the following conditions: `http-header` and `query-string`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#conditions Elasticloadbalancingv2ListenerRule#conditions}

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConfig.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The rule priority.

A listener can't have multiple rules with the same priority.
If you try to reorder rules by updating their priorities, do not specify a new priority if an existing rule already uses this priority, as this can cause an error. If you need to reuse a priority with a different rule, you must remove it as a priority first, and then specify it in a subsequent update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#priority Elasticloadbalancingv2ListenerRule#priority}

---

##### `listener_arn`<sup>Optional</sup> <a name="listener_arn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConfig.property.listenerArn"></a>

```python
listener_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the listener.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#listener_arn Elasticloadbalancingv2ListenerRule#listener_arn}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[Elasticloadbalancingv2ListenerRuleTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTags">Elasticloadbalancingv2ListenerRuleTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#tags Elasticloadbalancingv2ListenerRule#tags}.

---

##### `transforms`<sup>Optional</sup> <a name="transforms" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConfig.property.transforms"></a>

```python
transforms: IResolvable | typing.List[Elasticloadbalancingv2ListenerRuleTransforms]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransforms">Elasticloadbalancingv2ListenerRuleTransforms</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#transforms Elasticloadbalancingv2ListenerRule#transforms}.

---

### Elasticloadbalancingv2ListenerRuleTags <a name="Elasticloadbalancingv2ListenerRuleTags" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTags.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_listener_rule

elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTags.property.key">key</a></code> | <code>str</code> | The key of the tag. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTags.property.value">value</a></code> | <code>str</code> | The value of the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#key Elasticloadbalancingv2ListenerRule#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#value Elasticloadbalancingv2ListenerRule#value}

---

### Elasticloadbalancingv2ListenerRuleTransforms <a name="Elasticloadbalancingv2ListenerRuleTransforms" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransforms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransforms.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_listener_rule

elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransforms(
  host_header_rewrite_config: Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfig = None,
  type: str = None,
  url_rewrite_config: Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransforms.property.hostHeaderRewriteConfig">host_header_rewrite_config</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfig">Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#host_header_rewrite_config Elasticloadbalancingv2ListenerRule#host_header_rewrite_config}. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransforms.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#type Elasticloadbalancingv2ListenerRule#type}. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransforms.property.urlRewriteConfig">url_rewrite_config</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfig">Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#url_rewrite_config Elasticloadbalancingv2ListenerRule#url_rewrite_config}. |

---

##### `host_header_rewrite_config`<sup>Optional</sup> <a name="host_header_rewrite_config" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransforms.property.hostHeaderRewriteConfig"></a>

```python
host_header_rewrite_config: Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfig">Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#host_header_rewrite_config Elasticloadbalancingv2ListenerRule#host_header_rewrite_config}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransforms.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#type Elasticloadbalancingv2ListenerRule#type}.

---

##### `url_rewrite_config`<sup>Optional</sup> <a name="url_rewrite_config" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransforms.property.urlRewriteConfig"></a>

```python
url_rewrite_config: Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfig">Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#url_rewrite_config Elasticloadbalancingv2ListenerRule#url_rewrite_config}.

---

### Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfig <a name="Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfig.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_listener_rule

elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfig(
  rewrites: IResolvable | typing.List[Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewrites] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfig.property.rewrites">rewrites</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewrites">Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewrites</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#rewrites Elasticloadbalancingv2ListenerRule#rewrites}. |

---

##### `rewrites`<sup>Optional</sup> <a name="rewrites" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfig.property.rewrites"></a>

```python
rewrites: IResolvable | typing.List[Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewrites]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewrites">Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewrites</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#rewrites Elasticloadbalancingv2ListenerRule#rewrites}.

---

### Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewrites <a name="Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewrites" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewrites"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewrites.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_listener_rule

elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewrites(
  regex: str = None,
  replace: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewrites.property.regex">regex</a></code> | <code>str</code> | The regular expression to match in the input string. The maximum length of the string is 1,024 characters. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewrites.property.replace">replace</a></code> | <code>str</code> | The replacement string to use when rewriting the matched input. |

---

##### `regex`<sup>Optional</sup> <a name="regex" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewrites.property.regex"></a>

```python
regex: str
```

- *Type:* str

The regular expression to match in the input string. The maximum length of the string is 1,024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#regex Elasticloadbalancingv2ListenerRule#regex}

---

##### `replace`<sup>Optional</sup> <a name="replace" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewrites.property.replace"></a>

```python
replace: str
```

- *Type:* str

The replacement string to use when rewriting the matched input.

The maximum length of the string is 1,024 characters. You can specify capture groups in the regular expression (for example, $1 and $2).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#replace Elasticloadbalancingv2ListenerRule#replace}

---

### Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfig <a name="Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfig.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_listener_rule

elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfig(
  rewrites: IResolvable | typing.List[Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewrites] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfig.property.rewrites">rewrites</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewrites">Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewrites</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#rewrites Elasticloadbalancingv2ListenerRule#rewrites}. |

---

##### `rewrites`<sup>Optional</sup> <a name="rewrites" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfig.property.rewrites"></a>

```python
rewrites: IResolvable | typing.List[Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewrites]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewrites">Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewrites</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#rewrites Elasticloadbalancingv2ListenerRule#rewrites}.

---

### Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewrites <a name="Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewrites" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewrites"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewrites.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_listener_rule

elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewrites(
  regex: str = None,
  replace: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewrites.property.regex">regex</a></code> | <code>str</code> | The regular expression to match in the input string. The maximum length of the string is 1,024 characters. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewrites.property.replace">replace</a></code> | <code>str</code> | The replacement string to use when rewriting the matched input. |

---

##### `regex`<sup>Optional</sup> <a name="regex" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewrites.property.regex"></a>

```python
regex: str
```

- *Type:* str

The regular expression to match in the input string. The maximum length of the string is 1,024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#regex Elasticloadbalancingv2ListenerRule#regex}

---

##### `replace`<sup>Optional</sup> <a name="replace" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewrites.property.replace"></a>

```python
replace: str
```

- *Type:* str

The replacement string to use when rewriting the matched input.

The maximum length of the string is 1,024 characters. You can specify capture groups in the regular expression (for example, $1 and $2).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#replace Elasticloadbalancingv2ListenerRule#replace}

---

## Classes <a name="Classes" id="Classes"></a>

### Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference <a name="Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_listener_rule

elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.resetAuthenticationRequestExtraParams">reset_authentication_request_extra_params</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.resetOnUnauthenticatedRequest">reset_on_unauthenticated_request</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.resetScope">reset_scope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.resetSessionCookieName">reset_session_cookie_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.resetSessionTimeout">reset_session_timeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.resetUserPoolArn">reset_user_pool_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.resetUserPoolClientId">reset_user_pool_client_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.resetUserPoolDomain">reset_user_pool_domain</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_authentication_request_extra_params` <a name="reset_authentication_request_extra_params" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.resetAuthenticationRequestExtraParams"></a>

```python
def reset_authentication_request_extra_params() -> None
```

##### `reset_on_unauthenticated_request` <a name="reset_on_unauthenticated_request" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.resetOnUnauthenticatedRequest"></a>

```python
def reset_on_unauthenticated_request() -> None
```

##### `reset_scope` <a name="reset_scope" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.resetScope"></a>

```python
def reset_scope() -> None
```

##### `reset_session_cookie_name` <a name="reset_session_cookie_name" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.resetSessionCookieName"></a>

```python
def reset_session_cookie_name() -> None
```

##### `reset_session_timeout` <a name="reset_session_timeout" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.resetSessionTimeout"></a>

```python
def reset_session_timeout() -> None
```

##### `reset_user_pool_arn` <a name="reset_user_pool_arn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.resetUserPoolArn"></a>

```python
def reset_user_pool_arn() -> None
```

##### `reset_user_pool_client_id` <a name="reset_user_pool_client_id" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.resetUserPoolClientId"></a>

```python
def reset_user_pool_client_id() -> None
```

##### `reset_user_pool_domain` <a name="reset_user_pool_domain" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.resetUserPoolDomain"></a>

```python
def reset_user_pool_domain() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.authenticationRequestExtraParamsInput">authentication_request_extra_params_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.onUnauthenticatedRequestInput">on_unauthenticated_request_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.scopeInput">scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.sessionCookieNameInput">session_cookie_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.sessionTimeoutInput">session_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.userPoolArnInput">user_pool_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.userPoolClientIdInput">user_pool_client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.userPoolDomainInput">user_pool_domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.authenticationRequestExtraParams">authentication_request_extra_params</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.onUnauthenticatedRequest">on_unauthenticated_request</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.scope">scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.sessionCookieName">session_cookie_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.sessionTimeout">session_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.userPoolArn">user_pool_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.userPoolClientId">user_pool_client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.userPoolDomain">user_pool_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig">Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authentication_request_extra_params_input`<sup>Optional</sup> <a name="authentication_request_extra_params_input" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.authenticationRequestExtraParamsInput"></a>

```python
authentication_request_extra_params_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `on_unauthenticated_request_input`<sup>Optional</sup> <a name="on_unauthenticated_request_input" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.onUnauthenticatedRequestInput"></a>

```python
on_unauthenticated_request_input: str
```

- *Type:* str

---

##### `scope_input`<sup>Optional</sup> <a name="scope_input" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.scopeInput"></a>

```python
scope_input: str
```

- *Type:* str

---

##### `session_cookie_name_input`<sup>Optional</sup> <a name="session_cookie_name_input" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.sessionCookieNameInput"></a>

```python
session_cookie_name_input: str
```

- *Type:* str

---

##### `session_timeout_input`<sup>Optional</sup> <a name="session_timeout_input" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.sessionTimeoutInput"></a>

```python
session_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `user_pool_arn_input`<sup>Optional</sup> <a name="user_pool_arn_input" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.userPoolArnInput"></a>

```python
user_pool_arn_input: str
```

- *Type:* str

---

##### `user_pool_client_id_input`<sup>Optional</sup> <a name="user_pool_client_id_input" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.userPoolClientIdInput"></a>

```python
user_pool_client_id_input: str
```

- *Type:* str

---

##### `user_pool_domain_input`<sup>Optional</sup> <a name="user_pool_domain_input" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.userPoolDomainInput"></a>

```python
user_pool_domain_input: str
```

- *Type:* str

---

##### `authentication_request_extra_params`<sup>Required</sup> <a name="authentication_request_extra_params" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.authenticationRequestExtraParams"></a>

```python
authentication_request_extra_params: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `on_unauthenticated_request`<sup>Required</sup> <a name="on_unauthenticated_request" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.onUnauthenticatedRequest"></a>

```python
on_unauthenticated_request: str
```

- *Type:* str

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.scope"></a>

```python
scope: str
```

- *Type:* str

---

##### `session_cookie_name`<sup>Required</sup> <a name="session_cookie_name" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.sessionCookieName"></a>

```python
session_cookie_name: str
```

- *Type:* str

---

##### `session_timeout`<sup>Required</sup> <a name="session_timeout" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.sessionTimeout"></a>

```python
session_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `user_pool_arn`<sup>Required</sup> <a name="user_pool_arn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.userPoolArn"></a>

```python
user_pool_arn: str
```

- *Type:* str

---

##### `user_pool_client_id`<sup>Required</sup> <a name="user_pool_client_id" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.userPoolClientId"></a>

```python
user_pool_client_id: str
```

- *Type:* str

---

##### `user_pool_domain`<sup>Required</sup> <a name="user_pool_domain" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.userPoolDomain"></a>

```python
user_pool_domain: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig">Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig</a>

---


### Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference <a name="Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_listener_rule

elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.resetAuthenticationRequestExtraParams">reset_authentication_request_extra_params</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.resetAuthorizationEndpoint">reset_authorization_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.resetClientId">reset_client_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.resetClientSecret">reset_client_secret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.resetIssuer">reset_issuer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.resetOnUnauthenticatedRequest">reset_on_unauthenticated_request</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.resetScope">reset_scope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.resetSessionCookieName">reset_session_cookie_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.resetSessionTimeout">reset_session_timeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.resetTokenEndpoint">reset_token_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.resetUseExistingClientSecret">reset_use_existing_client_secret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.resetUserInfoEndpoint">reset_user_info_endpoint</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_authentication_request_extra_params` <a name="reset_authentication_request_extra_params" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.resetAuthenticationRequestExtraParams"></a>

```python
def reset_authentication_request_extra_params() -> None
```

##### `reset_authorization_endpoint` <a name="reset_authorization_endpoint" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.resetAuthorizationEndpoint"></a>

```python
def reset_authorization_endpoint() -> None
```

##### `reset_client_id` <a name="reset_client_id" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.resetClientId"></a>

```python
def reset_client_id() -> None
```

##### `reset_client_secret` <a name="reset_client_secret" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.resetClientSecret"></a>

```python
def reset_client_secret() -> None
```

##### `reset_issuer` <a name="reset_issuer" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.resetIssuer"></a>

```python
def reset_issuer() -> None
```

##### `reset_on_unauthenticated_request` <a name="reset_on_unauthenticated_request" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.resetOnUnauthenticatedRequest"></a>

```python
def reset_on_unauthenticated_request() -> None
```

##### `reset_scope` <a name="reset_scope" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.resetScope"></a>

```python
def reset_scope() -> None
```

##### `reset_session_cookie_name` <a name="reset_session_cookie_name" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.resetSessionCookieName"></a>

```python
def reset_session_cookie_name() -> None
```

##### `reset_session_timeout` <a name="reset_session_timeout" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.resetSessionTimeout"></a>

```python
def reset_session_timeout() -> None
```

##### `reset_token_endpoint` <a name="reset_token_endpoint" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.resetTokenEndpoint"></a>

```python
def reset_token_endpoint() -> None
```

##### `reset_use_existing_client_secret` <a name="reset_use_existing_client_secret" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.resetUseExistingClientSecret"></a>

```python
def reset_use_existing_client_secret() -> None
```

##### `reset_user_info_endpoint` <a name="reset_user_info_endpoint" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.resetUserInfoEndpoint"></a>

```python
def reset_user_info_endpoint() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.authenticationRequestExtraParamsInput">authentication_request_extra_params_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.authorizationEndpointInput">authorization_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.clientSecretInput">client_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.issuerInput">issuer_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.onUnauthenticatedRequestInput">on_unauthenticated_request_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.scopeInput">scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.sessionCookieNameInput">session_cookie_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.sessionTimeoutInput">session_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.tokenEndpointInput">token_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.useExistingClientSecretInput">use_existing_client_secret_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.userInfoEndpointInput">user_info_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.authenticationRequestExtraParams">authentication_request_extra_params</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.authorizationEndpoint">authorization_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.clientSecret">client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.issuer">issuer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.onUnauthenticatedRequest">on_unauthenticated_request</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.scope">scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.sessionCookieName">session_cookie_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.sessionTimeout">session_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.tokenEndpoint">token_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.useExistingClientSecret">use_existing_client_secret</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.userInfoEndpoint">user_info_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig">Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authentication_request_extra_params_input`<sup>Optional</sup> <a name="authentication_request_extra_params_input" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.authenticationRequestExtraParamsInput"></a>

```python
authentication_request_extra_params_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `authorization_endpoint_input`<sup>Optional</sup> <a name="authorization_endpoint_input" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.authorizationEndpointInput"></a>

```python
authorization_endpoint_input: str
```

- *Type:* str

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `client_secret_input`<sup>Optional</sup> <a name="client_secret_input" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.clientSecretInput"></a>

```python
client_secret_input: str
```

- *Type:* str

---

##### `issuer_input`<sup>Optional</sup> <a name="issuer_input" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.issuerInput"></a>

```python
issuer_input: str
```

- *Type:* str

---

##### `on_unauthenticated_request_input`<sup>Optional</sup> <a name="on_unauthenticated_request_input" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.onUnauthenticatedRequestInput"></a>

```python
on_unauthenticated_request_input: str
```

- *Type:* str

---

##### `scope_input`<sup>Optional</sup> <a name="scope_input" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.scopeInput"></a>

```python
scope_input: str
```

- *Type:* str

---

##### `session_cookie_name_input`<sup>Optional</sup> <a name="session_cookie_name_input" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.sessionCookieNameInput"></a>

```python
session_cookie_name_input: str
```

- *Type:* str

---

##### `session_timeout_input`<sup>Optional</sup> <a name="session_timeout_input" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.sessionTimeoutInput"></a>

```python
session_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_endpoint_input`<sup>Optional</sup> <a name="token_endpoint_input" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.tokenEndpointInput"></a>

```python
token_endpoint_input: str
```

- *Type:* str

---

##### `use_existing_client_secret_input`<sup>Optional</sup> <a name="use_existing_client_secret_input" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.useExistingClientSecretInput"></a>

```python
use_existing_client_secret_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `user_info_endpoint_input`<sup>Optional</sup> <a name="user_info_endpoint_input" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.userInfoEndpointInput"></a>

```python
user_info_endpoint_input: str
```

- *Type:* str

---

##### `authentication_request_extra_params`<sup>Required</sup> <a name="authentication_request_extra_params" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.authenticationRequestExtraParams"></a>

```python
authentication_request_extra_params: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `authorization_endpoint`<sup>Required</sup> <a name="authorization_endpoint" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.authorizationEndpoint"></a>

```python
authorization_endpoint: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

---

##### `on_unauthenticated_request`<sup>Required</sup> <a name="on_unauthenticated_request" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.onUnauthenticatedRequest"></a>

```python
on_unauthenticated_request: str
```

- *Type:* str

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.scope"></a>

```python
scope: str
```

- *Type:* str

---

##### `session_cookie_name`<sup>Required</sup> <a name="session_cookie_name" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.sessionCookieName"></a>

```python
session_cookie_name: str
```

- *Type:* str

---

##### `session_timeout`<sup>Required</sup> <a name="session_timeout" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.sessionTimeout"></a>

```python
session_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_endpoint`<sup>Required</sup> <a name="token_endpoint" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.tokenEndpoint"></a>

```python
token_endpoint: str
```

- *Type:* str

---

##### `use_existing_client_secret`<sup>Required</sup> <a name="use_existing_client_secret" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.useExistingClientSecret"></a>

```python
use_existing_client_secret: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `user_info_endpoint`<sup>Required</sup> <a name="user_info_endpoint" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.userInfoEndpoint"></a>

```python
user_info_endpoint: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig">Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig</a>

---


### Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference <a name="Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_listener_rule

elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.resetContentType">reset_content_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.resetMessageBody">reset_message_body</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.resetStatusCode">reset_status_code</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_content_type` <a name="reset_content_type" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.resetContentType"></a>

```python
def reset_content_type() -> None
```

##### `reset_message_body` <a name="reset_message_body" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.resetMessageBody"></a>

```python
def reset_message_body() -> None
```

##### `reset_status_code` <a name="reset_status_code" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.resetStatusCode"></a>

```python
def reset_status_code() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.property.contentTypeInput">content_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.property.messageBodyInput">message_body_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.property.statusCodeInput">status_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.property.contentType">content_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.property.messageBody">message_body</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.property.statusCode">status_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfig">Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content_type_input`<sup>Optional</sup> <a name="content_type_input" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.property.contentTypeInput"></a>

```python
content_type_input: str
```

- *Type:* str

---

##### `message_body_input`<sup>Optional</sup> <a name="message_body_input" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.property.messageBodyInput"></a>

```python
message_body_input: str
```

- *Type:* str

---

##### `status_code_input`<sup>Optional</sup> <a name="status_code_input" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.property.statusCodeInput"></a>

```python
status_code_input: str
```

- *Type:* str

---

##### `content_type`<sup>Required</sup> <a name="content_type" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

---

##### `message_body`<sup>Required</sup> <a name="message_body" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.property.messageBody"></a>

```python
message_body: str
```

- *Type:* str

---

##### `status_code`<sup>Required</sup> <a name="status_code" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.property.statusCode"></a>

```python
status_code: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfig">Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfig</a>

---


### Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference <a name="Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_listener_rule

elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.putTargetGroups">put_target_groups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.putTargetGroupStickinessConfig">put_target_group_stickiness_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.resetTargetGroups">reset_target_groups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.resetTargetGroupStickinessConfig">reset_target_group_stickiness_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_target_groups` <a name="put_target_groups" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.putTargetGroups"></a>

```python
def put_target_groups(
  value: IResolvable | typing.List[Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroups]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.putTargetGroups.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroups">Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroups</a>]

---

##### `put_target_group_stickiness_config` <a name="put_target_group_stickiness_config" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.putTargetGroupStickinessConfig"></a>

```python
def put_target_group_stickiness_config(
  duration_seconds: typing.Union[int, float] = None,
  enabled: bool | IResolvable = None
) -> None
```

###### `duration_seconds`<sup>Optional</sup> <a name="duration_seconds" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.putTargetGroupStickinessConfig.parameter.durationSeconds"></a>

- *Type:* typing.Union[int, float]

[Application Load Balancers] The time period, in seconds, during which requests from a client should be routed to the same target group.

The range is 1-604800 seconds (7 days). You must specify this value when enabling target group stickiness.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#duration_seconds Elasticloadbalancingv2ListenerRule#duration_seconds}

---

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.putTargetGroupStickinessConfig.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Indicates whether target group stickiness is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#enabled Elasticloadbalancingv2ListenerRule#enabled}

---

##### `reset_target_groups` <a name="reset_target_groups" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.resetTargetGroups"></a>

```python
def reset_target_groups() -> None
```

##### `reset_target_group_stickiness_config` <a name="reset_target_group_stickiness_config" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.resetTargetGroupStickinessConfig"></a>

```python
def reset_target_group_stickiness_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.property.targetGroups">target_groups</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList">Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.property.targetGroupStickinessConfig">target_group_stickiness_config</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference">Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.property.targetGroupsInput">target_groups_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroups">Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroups</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.property.targetGroupStickinessConfigInput">target_group_stickiness_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfig">Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfig">Elasticloadbalancingv2ListenerRuleActionsForwardConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `target_groups`<sup>Required</sup> <a name="target_groups" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.property.targetGroups"></a>

```python
target_groups: Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList">Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList</a>

---

##### `target_group_stickiness_config`<sup>Required</sup> <a name="target_group_stickiness_config" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.property.targetGroupStickinessConfig"></a>

```python
target_group_stickiness_config: Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference">Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference</a>

---

##### `target_groups_input`<sup>Optional</sup> <a name="target_groups_input" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.property.targetGroupsInput"></a>

```python
target_groups_input: IResolvable | typing.List[Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroups]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroups">Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroups</a>]

---

##### `target_group_stickiness_config_input`<sup>Optional</sup> <a name="target_group_stickiness_config_input" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.property.targetGroupStickinessConfigInput"></a>

```python
target_group_stickiness_config_input: IResolvable | Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfig">Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfig</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Elasticloadbalancingv2ListenerRuleActionsForwardConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfig">Elasticloadbalancingv2ListenerRuleActionsForwardConfig</a>

---


### Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList <a name="Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_listener_rule

elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroups">Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroups</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroups]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroups">Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroups</a>]

---


### Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference <a name="Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_listener_rule

elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.resetTargetGroupArn">reset_target_group_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.resetWeight">reset_weight</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_target_group_arn` <a name="reset_target_group_arn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.resetTargetGroupArn"></a>

```python
def reset_target_group_arn() -> None
```

##### `reset_weight` <a name="reset_weight" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.resetWeight"></a>

```python
def reset_weight() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.property.targetGroupArnInput">target_group_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.property.weightInput">weight_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.property.targetGroupArn">target_group_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroups">Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroups</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `target_group_arn_input`<sup>Optional</sup> <a name="target_group_arn_input" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.property.targetGroupArnInput"></a>

```python
target_group_arn_input: str
```

- *Type:* str

---

##### `weight_input`<sup>Optional</sup> <a name="weight_input" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.property.weightInput"></a>

```python
weight_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_group_arn`<sup>Required</sup> <a name="target_group_arn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.property.targetGroupArn"></a>

```python
target_group_arn: str
```

- *Type:* str

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroups
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroups">Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroups</a>

---


### Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference <a name="Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_listener_rule

elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.resetDurationSeconds">reset_duration_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_duration_seconds` <a name="reset_duration_seconds" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.resetDurationSeconds"></a>

```python
def reset_duration_seconds() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.durationSecondsInput">duration_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.durationSeconds">duration_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfig">Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `duration_seconds_input`<sup>Optional</sup> <a name="duration_seconds_input" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.durationSecondsInput"></a>

```python
duration_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `duration_seconds`<sup>Required</sup> <a name="duration_seconds" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.durationSeconds"></a>

```python
duration_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfig">Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfig</a>

---


### Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList <a name="Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_listener_rule

elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaims">Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaims</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaims]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaims">Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaims</a>]

---


### Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference <a name="Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_listener_rule

elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.resetFormat">reset_format</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_format` <a name="reset_format" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.resetFormat"></a>

```python
def reset_format() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.property.formatInput">format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.property.format">format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaims">Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaims</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `format_input`<sup>Optional</sup> <a name="format_input" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.property.formatInput"></a>

```python
format_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.property.format"></a>

```python
format: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaims
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaims">Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaims</a>

---


### Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference <a name="Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_listener_rule

elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.putAdditionalClaims">put_additional_claims</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.resetAdditionalClaims">reset_additional_claims</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.resetIssuer">reset_issuer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.resetJwksEndpoint">reset_jwks_endpoint</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_additional_claims` <a name="put_additional_claims" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.putAdditionalClaims"></a>

```python
def put_additional_claims(
  value: IResolvable | typing.List[Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaims]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.putAdditionalClaims.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaims">Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaims</a>]

---

##### `reset_additional_claims` <a name="reset_additional_claims" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.resetAdditionalClaims"></a>

```python
def reset_additional_claims() -> None
```

##### `reset_issuer` <a name="reset_issuer" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.resetIssuer"></a>

```python
def reset_issuer() -> None
```

##### `reset_jwks_endpoint` <a name="reset_jwks_endpoint" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.resetJwksEndpoint"></a>

```python
def reset_jwks_endpoint() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.property.additionalClaims">additional_claims</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList">Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.property.additionalClaimsInput">additional_claims_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaims">Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaims</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.property.issuerInput">issuer_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.property.jwksEndpointInput">jwks_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.property.issuer">issuer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.property.jwksEndpoint">jwks_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfig">Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `additional_claims`<sup>Required</sup> <a name="additional_claims" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.property.additionalClaims"></a>

```python
additional_claims: Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList">Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList</a>

---

##### `additional_claims_input`<sup>Optional</sup> <a name="additional_claims_input" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.property.additionalClaimsInput"></a>

```python
additional_claims_input: IResolvable | typing.List[Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaims]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaims">Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaims</a>]

---

##### `issuer_input`<sup>Optional</sup> <a name="issuer_input" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.property.issuerInput"></a>

```python
issuer_input: str
```

- *Type:* str

---

##### `jwks_endpoint_input`<sup>Optional</sup> <a name="jwks_endpoint_input" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.property.jwksEndpointInput"></a>

```python
jwks_endpoint_input: str
```

- *Type:* str

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

---

##### `jwks_endpoint`<sup>Required</sup> <a name="jwks_endpoint" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.property.jwksEndpoint"></a>

```python
jwks_endpoint: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfig">Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfig</a>

---


### Elasticloadbalancingv2ListenerRuleActionsList <a name="Elasticloadbalancingv2ListenerRuleActionsList" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsList.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_listener_rule

elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Elasticloadbalancingv2ListenerRuleActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActions">Elasticloadbalancingv2ListenerRuleActions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Elasticloadbalancingv2ListenerRuleActions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActions">Elasticloadbalancingv2ListenerRuleActions</a>]

---


### Elasticloadbalancingv2ListenerRuleActionsOutputReference <a name="Elasticloadbalancingv2ListenerRuleActionsOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_listener_rule

elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.putAuthenticateCognitoConfig">put_authenticate_cognito_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.putAuthenticateOidcConfig">put_authenticate_oidc_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.putFixedResponseConfig">put_fixed_response_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.putForwardConfig">put_forward_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.putJwtValidationConfig">put_jwt_validation_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.putRedirectConfig">put_redirect_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.resetAuthenticateCognitoConfig">reset_authenticate_cognito_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.resetAuthenticateOidcConfig">reset_authenticate_oidc_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.resetFixedResponseConfig">reset_fixed_response_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.resetForwardConfig">reset_forward_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.resetJwtValidationConfig">reset_jwt_validation_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.resetOrder">reset_order</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.resetRedirectConfig">reset_redirect_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.resetTargetGroupArn">reset_target_group_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_authenticate_cognito_config` <a name="put_authenticate_cognito_config" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.putAuthenticateCognitoConfig"></a>

```python
def put_authenticate_cognito_config(
  authentication_request_extra_params: typing.Mapping[str] = None,
  on_unauthenticated_request: str = None,
  scope: str = None,
  session_cookie_name: str = None,
  session_timeout: typing.Union[int, float] = None,
  user_pool_arn: str = None,
  user_pool_client_id: str = None,
  user_pool_domain: str = None
) -> None
```

###### `authentication_request_extra_params`<sup>Optional</sup> <a name="authentication_request_extra_params" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.putAuthenticateCognitoConfig.parameter.authenticationRequestExtraParams"></a>

- *Type:* typing.Mapping[str]

The query parameters (up to 10) to include in the redirect request to the authorization endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#authentication_request_extra_params Elasticloadbalancingv2ListenerRule#authentication_request_extra_params}

---

###### `on_unauthenticated_request`<sup>Optional</sup> <a name="on_unauthenticated_request" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.putAuthenticateCognitoConfig.parameter.onUnauthenticatedRequest"></a>

- *Type:* str

The behavior if the user is not authenticated.

The following are possible values:

* deny```` - Return an HTTP 401 Unauthorized error.
* allow```` - Allow the request to be forwarded to the target.
* authenticate```` - Redirect the request to the IdP authorization endpoint. This is the default value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#on_unauthenticated_request Elasticloadbalancingv2ListenerRule#on_unauthenticated_request}

---

###### `scope`<sup>Optional</sup> <a name="scope" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.putAuthenticateCognitoConfig.parameter.scope"></a>

- *Type:* str

The set of user claims to be requested from the IdP.

The default is `openid`.
To verify which scope values your IdP supports and how to separate multiple values, see the documentation for your IdP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#scope Elasticloadbalancingv2ListenerRule#scope}

---

###### `session_cookie_name`<sup>Optional</sup> <a name="session_cookie_name" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.putAuthenticateCognitoConfig.parameter.sessionCookieName"></a>

- *Type:* str

The name of the cookie used to maintain session information. The default is AWSELBAuthSessionCookie.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#session_cookie_name Elasticloadbalancingv2ListenerRule#session_cookie_name}

---

###### `session_timeout`<sup>Optional</sup> <a name="session_timeout" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.putAuthenticateCognitoConfig.parameter.sessionTimeout"></a>

- *Type:* typing.Union[int, float]

The maximum duration of the authentication session, in seconds. The default is 604800 seconds (7 days).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#session_timeout Elasticloadbalancingv2ListenerRule#session_timeout}

---

###### `user_pool_arn`<sup>Optional</sup> <a name="user_pool_arn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.putAuthenticateCognitoConfig.parameter.userPoolArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the Amazon Cognito user pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#user_pool_arn Elasticloadbalancingv2ListenerRule#user_pool_arn}

---

###### `user_pool_client_id`<sup>Optional</sup> <a name="user_pool_client_id" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.putAuthenticateCognitoConfig.parameter.userPoolClientId"></a>

- *Type:* str

The ID of the Amazon Cognito user pool client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#user_pool_client_id Elasticloadbalancingv2ListenerRule#user_pool_client_id}

---

###### `user_pool_domain`<sup>Optional</sup> <a name="user_pool_domain" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.putAuthenticateCognitoConfig.parameter.userPoolDomain"></a>

- *Type:* str

The domain prefix or fully-qualified domain name of the Amazon Cognito user pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#user_pool_domain Elasticloadbalancingv2ListenerRule#user_pool_domain}

---

##### `put_authenticate_oidc_config` <a name="put_authenticate_oidc_config" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.putAuthenticateOidcConfig"></a>

```python
def put_authenticate_oidc_config(
  authentication_request_extra_params: typing.Mapping[str] = None,
  authorization_endpoint: str = None,
  client_id: str = None,
  client_secret: str = None,
  issuer: str = None,
  on_unauthenticated_request: str = None,
  scope: str = None,
  session_cookie_name: str = None,
  session_timeout: typing.Union[int, float] = None,
  token_endpoint: str = None,
  use_existing_client_secret: bool | IResolvable = None,
  user_info_endpoint: str = None
) -> None
```

###### `authentication_request_extra_params`<sup>Optional</sup> <a name="authentication_request_extra_params" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.putAuthenticateOidcConfig.parameter.authenticationRequestExtraParams"></a>

- *Type:* typing.Mapping[str]

The query parameters (up to 10) to include in the redirect request to the authorization endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#authentication_request_extra_params Elasticloadbalancingv2ListenerRule#authentication_request_extra_params}

---

###### `authorization_endpoint`<sup>Optional</sup> <a name="authorization_endpoint" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.putAuthenticateOidcConfig.parameter.authorizationEndpoint"></a>

- *Type:* str

The authorization endpoint of the IdP.

This must be a full URL, including the HTTPS protocol, the domain, and the path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#authorization_endpoint Elasticloadbalancingv2ListenerRule#authorization_endpoint}

---

###### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.putAuthenticateOidcConfig.parameter.clientId"></a>

- *Type:* str

The OAuth 2.0 client identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#client_id Elasticloadbalancingv2ListenerRule#client_id}

---

###### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.putAuthenticateOidcConfig.parameter.clientSecret"></a>

- *Type:* str

The OAuth 2.0 client secret. This parameter is required if you are creating a rule. If you are modifying a rule, you can omit this parameter if you set ``UseExistingClientSecret`` to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#client_secret Elasticloadbalancingv2ListenerRule#client_secret}

---

###### `issuer`<sup>Optional</sup> <a name="issuer" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.putAuthenticateOidcConfig.parameter.issuer"></a>

- *Type:* str

The OIDC issuer identifier of the IdP.

This must be a full URL, including the HTTPS protocol, the domain, and the path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#issuer Elasticloadbalancingv2ListenerRule#issuer}

---

###### `on_unauthenticated_request`<sup>Optional</sup> <a name="on_unauthenticated_request" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.putAuthenticateOidcConfig.parameter.onUnauthenticatedRequest"></a>

- *Type:* str

The behavior if the user is not authenticated.

The following are possible values:

* deny```` - Return an HTTP 401 Unauthorized error.
* allow```` - Allow the request to be forwarded to the target.
* authenticate```` - Redirect the request to the IdP authorization endpoint. This is the default value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#on_unauthenticated_request Elasticloadbalancingv2ListenerRule#on_unauthenticated_request}

---

###### `scope`<sup>Optional</sup> <a name="scope" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.putAuthenticateOidcConfig.parameter.scope"></a>

- *Type:* str

The set of user claims to be requested from the IdP.

The default is `openid`.
To verify which scope values your IdP supports and how to separate multiple values, see the documentation for your IdP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#scope Elasticloadbalancingv2ListenerRule#scope}

---

###### `session_cookie_name`<sup>Optional</sup> <a name="session_cookie_name" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.putAuthenticateOidcConfig.parameter.sessionCookieName"></a>

- *Type:* str

The name of the cookie used to maintain session information. The default is AWSELBAuthSessionCookie.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#session_cookie_name Elasticloadbalancingv2ListenerRule#session_cookie_name}

---

###### `session_timeout`<sup>Optional</sup> <a name="session_timeout" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.putAuthenticateOidcConfig.parameter.sessionTimeout"></a>

- *Type:* typing.Union[int, float]

The maximum duration of the authentication session, in seconds. The default is 604800 seconds (7 days).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#session_timeout Elasticloadbalancingv2ListenerRule#session_timeout}

---

###### `token_endpoint`<sup>Optional</sup> <a name="token_endpoint" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.putAuthenticateOidcConfig.parameter.tokenEndpoint"></a>

- *Type:* str

The token endpoint of the IdP.

This must be a full URL, including the HTTPS protocol, the domain, and the path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#token_endpoint Elasticloadbalancingv2ListenerRule#token_endpoint}

---

###### `use_existing_client_secret`<sup>Optional</sup> <a name="use_existing_client_secret" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.putAuthenticateOidcConfig.parameter.useExistingClientSecret"></a>

- *Type:* bool | cdktn.IResolvable

Indicates whether to use the existing client secret when modifying a rule.

If you are creating a rule, you can omit this parameter or set it to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#use_existing_client_secret Elasticloadbalancingv2ListenerRule#use_existing_client_secret}

---

###### `user_info_endpoint`<sup>Optional</sup> <a name="user_info_endpoint" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.putAuthenticateOidcConfig.parameter.userInfoEndpoint"></a>

- *Type:* str

The user info endpoint of the IdP.

This must be a full URL, including the HTTPS protocol, the domain, and the path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#user_info_endpoint Elasticloadbalancingv2ListenerRule#user_info_endpoint}

---

##### `put_fixed_response_config` <a name="put_fixed_response_config" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.putFixedResponseConfig"></a>

```python
def put_fixed_response_config(
  content_type: str = None,
  message_body: str = None,
  status_code: str = None
) -> None
```

###### `content_type`<sup>Optional</sup> <a name="content_type" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.putFixedResponseConfig.parameter.contentType"></a>

- *Type:* str

The content type.  Valid Values: text/plain | text/css | text/html | application/javascript | application/json.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#content_type Elasticloadbalancingv2ListenerRule#content_type}

---

###### `message_body`<sup>Optional</sup> <a name="message_body" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.putFixedResponseConfig.parameter.messageBody"></a>

- *Type:* str

The message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#message_body Elasticloadbalancingv2ListenerRule#message_body}

---

###### `status_code`<sup>Optional</sup> <a name="status_code" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.putFixedResponseConfig.parameter.statusCode"></a>

- *Type:* str

The HTTP response code (2XX, 4XX, or 5XX).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#status_code Elasticloadbalancingv2ListenerRule#status_code}

---

##### `put_forward_config` <a name="put_forward_config" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.putForwardConfig"></a>

```python
def put_forward_config(
  target_groups: IResolvable | typing.List[Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroups] = None,
  target_group_stickiness_config: Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfig = None
) -> None
```

###### `target_groups`<sup>Optional</sup> <a name="target_groups" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.putForwardConfig.parameter.targetGroups"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroups">Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroups</a>]

Information about how traffic will be distributed between multiple target groups in a forward rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#target_groups Elasticloadbalancingv2ListenerRule#target_groups}

---

###### `target_group_stickiness_config`<sup>Optional</sup> <a name="target_group_stickiness_config" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.putForwardConfig.parameter.targetGroupStickinessConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfig">Elasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfig</a>

Information about the target group stickiness for a rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#target_group_stickiness_config Elasticloadbalancingv2ListenerRule#target_group_stickiness_config}

---

##### `put_jwt_validation_config` <a name="put_jwt_validation_config" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.putJwtValidationConfig"></a>

```python
def put_jwt_validation_config(
  additional_claims: IResolvable | typing.List[Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaims] = None,
  issuer: str = None,
  jwks_endpoint: str = None
) -> None
```

###### `additional_claims`<sup>Optional</sup> <a name="additional_claims" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.putJwtValidationConfig.parameter.additionalClaims"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaims">Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaims</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#additional_claims Elasticloadbalancingv2ListenerRule#additional_claims}.

---

###### `issuer`<sup>Optional</sup> <a name="issuer" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.putJwtValidationConfig.parameter.issuer"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#issuer Elasticloadbalancingv2ListenerRule#issuer}.

---

###### `jwks_endpoint`<sup>Optional</sup> <a name="jwks_endpoint" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.putJwtValidationConfig.parameter.jwksEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#jwks_endpoint Elasticloadbalancingv2ListenerRule#jwks_endpoint}.

---

##### `put_redirect_config` <a name="put_redirect_config" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.putRedirectConfig"></a>

```python
def put_redirect_config(
  host: str = None,
  path: str = None,
  port: str = None,
  protocol: str = None,
  query: str = None,
  status_code: str = None
) -> None
```

###### `host`<sup>Optional</sup> <a name="host" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.putRedirectConfig.parameter.host"></a>

- *Type:* str

The hostname. This component is not percent-encoded. The hostname can contain #{host}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#host Elasticloadbalancingv2ListenerRule#host}

---

###### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.putRedirectConfig.parameter.path"></a>

- *Type:* str

The absolute path, starting with the leading "/".

This component is not percent-encoded. The path can contain #{host}, #{path}, and #{port}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#path Elasticloadbalancingv2ListenerRule#path}

---

###### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.putRedirectConfig.parameter.port"></a>

- *Type:* str

The port. You can specify a value from 1 to 65535 or #{port}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#port Elasticloadbalancingv2ListenerRule#port}

---

###### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.putRedirectConfig.parameter.protocol"></a>

- *Type:* str

The protocol.

You can specify HTTP, HTTPS, or #{protocol}. You can redirect HTTP to HTTP, HTTP to HTTPS, and HTTPS to HTTPS. You can't redirect HTTPS to HTTP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#protocol Elasticloadbalancingv2ListenerRule#protocol}

---

###### `query`<sup>Optional</sup> <a name="query" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.putRedirectConfig.parameter.query"></a>

- *Type:* str

The query parameters, URL-encoded when necessary, but not percent-encoded.

Do not include the leading "?", as it is automatically added. You can specify any of the reserved keywords.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#query Elasticloadbalancingv2ListenerRule#query}

---

###### `status_code`<sup>Optional</sup> <a name="status_code" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.putRedirectConfig.parameter.statusCode"></a>

- *Type:* str

The HTTP redirect code. The redirect is either permanent (HTTP 301) or temporary (HTTP 302).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#status_code Elasticloadbalancingv2ListenerRule#status_code}

---

##### `reset_authenticate_cognito_config` <a name="reset_authenticate_cognito_config" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.resetAuthenticateCognitoConfig"></a>

```python
def reset_authenticate_cognito_config() -> None
```

##### `reset_authenticate_oidc_config` <a name="reset_authenticate_oidc_config" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.resetAuthenticateOidcConfig"></a>

```python
def reset_authenticate_oidc_config() -> None
```

##### `reset_fixed_response_config` <a name="reset_fixed_response_config" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.resetFixedResponseConfig"></a>

```python
def reset_fixed_response_config() -> None
```

##### `reset_forward_config` <a name="reset_forward_config" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.resetForwardConfig"></a>

```python
def reset_forward_config() -> None
```

##### `reset_jwt_validation_config` <a name="reset_jwt_validation_config" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.resetJwtValidationConfig"></a>

```python
def reset_jwt_validation_config() -> None
```

##### `reset_order` <a name="reset_order" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.resetOrder"></a>

```python
def reset_order() -> None
```

##### `reset_redirect_config` <a name="reset_redirect_config" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.resetRedirectConfig"></a>

```python
def reset_redirect_config() -> None
```

##### `reset_target_group_arn` <a name="reset_target_group_arn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.resetTargetGroupArn"></a>

```python
def reset_target_group_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.property.authenticateCognitoConfig">authenticate_cognito_config</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference">Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.property.authenticateOidcConfig">authenticate_oidc_config</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference">Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.property.fixedResponseConfig">fixed_response_config</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference">Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.property.forwardConfig">forward_config</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference">Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.property.jwtValidationConfig">jwt_validation_config</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference">Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.property.redirectConfig">redirect_config</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference">Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.property.authenticateCognitoConfigInput">authenticate_cognito_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig">Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.property.authenticateOidcConfigInput">authenticate_oidc_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig">Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.property.fixedResponseConfigInput">fixed_response_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfig">Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.property.forwardConfigInput">forward_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfig">Elasticloadbalancingv2ListenerRuleActionsForwardConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.property.jwtValidationConfigInput">jwt_validation_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfig">Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.property.orderInput">order_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.property.redirectConfigInput">redirect_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfig">Elasticloadbalancingv2ListenerRuleActionsRedirectConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.property.targetGroupArnInput">target_group_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.property.order">order</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.property.targetGroupArn">target_group_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActions">Elasticloadbalancingv2ListenerRuleActions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authenticate_cognito_config`<sup>Required</sup> <a name="authenticate_cognito_config" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.property.authenticateCognitoConfig"></a>

```python
authenticate_cognito_config: Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference">Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference</a>

---

##### `authenticate_oidc_config`<sup>Required</sup> <a name="authenticate_oidc_config" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.property.authenticateOidcConfig"></a>

```python
authenticate_oidc_config: Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference">Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference</a>

---

##### `fixed_response_config`<sup>Required</sup> <a name="fixed_response_config" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.property.fixedResponseConfig"></a>

```python
fixed_response_config: Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference">Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference</a>

---

##### `forward_config`<sup>Required</sup> <a name="forward_config" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.property.forwardConfig"></a>

```python
forward_config: Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference">Elasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference</a>

---

##### `jwt_validation_config`<sup>Required</sup> <a name="jwt_validation_config" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.property.jwtValidationConfig"></a>

```python
jwt_validation_config: Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference">Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference</a>

---

##### `redirect_config`<sup>Required</sup> <a name="redirect_config" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.property.redirectConfig"></a>

```python
redirect_config: Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference">Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference</a>

---

##### `authenticate_cognito_config_input`<sup>Optional</sup> <a name="authenticate_cognito_config_input" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.property.authenticateCognitoConfigInput"></a>

```python
authenticate_cognito_config_input: IResolvable | Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig">Elasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig</a>

---

##### `authenticate_oidc_config_input`<sup>Optional</sup> <a name="authenticate_oidc_config_input" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.property.authenticateOidcConfigInput"></a>

```python
authenticate_oidc_config_input: IResolvable | Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig">Elasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig</a>

---

##### `fixed_response_config_input`<sup>Optional</sup> <a name="fixed_response_config_input" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.property.fixedResponseConfigInput"></a>

```python
fixed_response_config_input: IResolvable | Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfig">Elasticloadbalancingv2ListenerRuleActionsFixedResponseConfig</a>

---

##### `forward_config_input`<sup>Optional</sup> <a name="forward_config_input" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.property.forwardConfigInput"></a>

```python
forward_config_input: IResolvable | Elasticloadbalancingv2ListenerRuleActionsForwardConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsForwardConfig">Elasticloadbalancingv2ListenerRuleActionsForwardConfig</a>

---

##### `jwt_validation_config_input`<sup>Optional</sup> <a name="jwt_validation_config_input" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.property.jwtValidationConfigInput"></a>

```python
jwt_validation_config_input: IResolvable | Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfig">Elasticloadbalancingv2ListenerRuleActionsJwtValidationConfig</a>

---

##### `order_input`<sup>Optional</sup> <a name="order_input" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.property.orderInput"></a>

```python
order_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `redirect_config_input`<sup>Optional</sup> <a name="redirect_config_input" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.property.redirectConfigInput"></a>

```python
redirect_config_input: IResolvable | Elasticloadbalancingv2ListenerRuleActionsRedirectConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfig">Elasticloadbalancingv2ListenerRuleActionsRedirectConfig</a>

---

##### `target_group_arn_input`<sup>Optional</sup> <a name="target_group_arn_input" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.property.targetGroupArnInput"></a>

```python
target_group_arn_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.property.order"></a>

```python
order: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_group_arn`<sup>Required</sup> <a name="target_group_arn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.property.targetGroupArn"></a>

```python
target_group_arn: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Elasticloadbalancingv2ListenerRuleActions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActions">Elasticloadbalancingv2ListenerRuleActions</a>

---


### Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference <a name="Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_listener_rule

elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.resetHost">reset_host</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.resetPath">reset_path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.resetProtocol">reset_protocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.resetQuery">reset_query</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.resetStatusCode">reset_status_code</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_host` <a name="reset_host" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.resetHost"></a>

```python
def reset_host() -> None
```

##### `reset_path` <a name="reset_path" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.resetPath"></a>

```python
def reset_path() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_protocol` <a name="reset_protocol" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.resetProtocol"></a>

```python
def reset_protocol() -> None
```

##### `reset_query` <a name="reset_query" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.resetQuery"></a>

```python
def reset_query() -> None
```

##### `reset_status_code` <a name="reset_status_code" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.resetStatusCode"></a>

```python
def reset_status_code() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.property.hostInput">host_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.property.portInput">port_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.property.queryInput">query_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.property.statusCodeInput">status_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.property.port">port</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.property.query">query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.property.statusCode">status_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfig">Elasticloadbalancingv2ListenerRuleActionsRedirectConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `host_input`<sup>Optional</sup> <a name="host_input" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.property.hostInput"></a>

```python
host_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.property.portInput"></a>

```python
port_input: str
```

- *Type:* str

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `query_input`<sup>Optional</sup> <a name="query_input" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.property.queryInput"></a>

```python
query_input: str
```

- *Type:* str

---

##### `status_code_input`<sup>Optional</sup> <a name="status_code_input" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.property.statusCodeInput"></a>

```python
status_code_input: str
```

- *Type:* str

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.property.port"></a>

```python
port: str
```

- *Type:* str

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.property.query"></a>

```python
query: str
```

- *Type:* str

---

##### `status_code`<sup>Required</sup> <a name="status_code" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.property.statusCode"></a>

```python
status_code: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Elasticloadbalancingv2ListenerRuleActionsRedirectConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleActionsRedirectConfig">Elasticloadbalancingv2ListenerRuleActionsRedirectConfig</a>

---


### Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference <a name="Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_listener_rule

elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.resetRegexValues">reset_regex_values</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex_values` <a name="reset_regex_values" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.resetRegexValues"></a>

```python
def reset_regex_values() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.property.regexValuesInput">regex_values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.property.regexValues">regex_values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfig">Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `regex_values_input`<sup>Optional</sup> <a name="regex_values_input" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.property.regexValuesInput"></a>

```python
regex_values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `regex_values`<sup>Required</sup> <a name="regex_values" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.property.regexValues"></a>

```python
regex_values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfig">Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfig</a>

---


### Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference <a name="Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_listener_rule

elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.resetHttpHeaderName">reset_http_header_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.resetRegexValues">reset_regex_values</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_http_header_name` <a name="reset_http_header_name" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.resetHttpHeaderName"></a>

```python
def reset_http_header_name() -> None
```

##### `reset_regex_values` <a name="reset_regex_values" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.resetRegexValues"></a>

```python
def reset_regex_values() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.property.httpHeaderNameInput">http_header_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.property.regexValuesInput">regex_values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.property.httpHeaderName">http_header_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.property.regexValues">regex_values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfig">Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `http_header_name_input`<sup>Optional</sup> <a name="http_header_name_input" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.property.httpHeaderNameInput"></a>

```python
http_header_name_input: str
```

- *Type:* str

---

##### `regex_values_input`<sup>Optional</sup> <a name="regex_values_input" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.property.regexValuesInput"></a>

```python
regex_values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `http_header_name`<sup>Required</sup> <a name="http_header_name" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.property.httpHeaderName"></a>

```python
http_header_name: str
```

- *Type:* str

---

##### `regex_values`<sup>Required</sup> <a name="regex_values" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.property.regexValues"></a>

```python
regex_values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfig">Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfig</a>

---


### Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference <a name="Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_listener_rule

elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_values` <a name="reset_values" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfig">Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfig">Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfig</a>

---


### Elasticloadbalancingv2ListenerRuleConditionsList <a name="Elasticloadbalancingv2ListenerRuleConditionsList" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsList.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_listener_rule

elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Elasticloadbalancingv2ListenerRuleConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditions">Elasticloadbalancingv2ListenerRuleConditions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Elasticloadbalancingv2ListenerRuleConditions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditions">Elasticloadbalancingv2ListenerRuleConditions</a>]

---


### Elasticloadbalancingv2ListenerRuleConditionsOutputReference <a name="Elasticloadbalancingv2ListenerRuleConditionsOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_listener_rule

elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.putHostHeaderConfig">put_host_header_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.putHttpHeaderConfig">put_http_header_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.putHttpRequestMethodConfig">put_http_request_method_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.putPathPatternConfig">put_path_pattern_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.putQueryStringConfig">put_query_string_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.putSourceIpConfig">put_source_ip_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.resetField">reset_field</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.resetHostHeaderConfig">reset_host_header_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.resetHttpHeaderConfig">reset_http_header_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.resetHttpRequestMethodConfig">reset_http_request_method_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.resetPathPatternConfig">reset_path_pattern_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.resetQueryStringConfig">reset_query_string_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.resetRegexValues">reset_regex_values</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.resetSourceIpConfig">reset_source_ip_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_host_header_config` <a name="put_host_header_config" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.putHostHeaderConfig"></a>

```python
def put_host_header_config(
  regex_values: typing.List[str] = None,
  values: typing.List[str] = None
) -> None
```

###### `regex_values`<sup>Optional</sup> <a name="regex_values" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.putHostHeaderConfig.parameter.regexValues"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#regex_values Elasticloadbalancingv2ListenerRule#regex_values}.

---

###### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.putHostHeaderConfig.parameter.values"></a>

- *Type:* typing.List[str]

The host names.

The maximum length of each string is 128 characters. The comparison is case insensitive. The following wildcard characters are supported: * (matches 0 or more characters) and ? (matches exactly 1 character). You must include at least one "." character. You can include only alphabetical characters after the final "." character.
If you specify multiple strings, the condition is satisfied if one of the strings matches the host name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#values Elasticloadbalancingv2ListenerRule#values}

---

##### `put_http_header_config` <a name="put_http_header_config" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.putHttpHeaderConfig"></a>

```python
def put_http_header_config(
  http_header_name: str = None,
  regex_values: typing.List[str] = None,
  values: typing.List[str] = None
) -> None
```

###### `http_header_name`<sup>Optional</sup> <a name="http_header_name" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.putHttpHeaderConfig.parameter.httpHeaderName"></a>

- *Type:* str

The name of the HTTP header field.

The maximum size is 40 characters. The header name is case insensitive. The allowed characters are specified by RFC 7230. Wildcards are not supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#http_header_name Elasticloadbalancingv2ListenerRule#http_header_name}

---

###### `regex_values`<sup>Optional</sup> <a name="regex_values" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.putHttpHeaderConfig.parameter.regexValues"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#regex_values Elasticloadbalancingv2ListenerRule#regex_values}.

---

###### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.putHttpHeaderConfig.parameter.values"></a>

- *Type:* typing.List[str]

The strings to compare against the value of the HTTP header.

The maximum length of each string is 128 characters. The comparison strings are case insensitive. The following wildcard characters are supported: * (matches 0 or more characters) and ? (matches exactly 1 character).
If the same header appears multiple times in the request, we search them in order until a match is found.
If you specify multiple strings, the condition is satisfied if one of the strings matches the value of the HTTP header. To require that all of the strings are a match, create one condition per string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#values Elasticloadbalancingv2ListenerRule#values}

---

##### `put_http_request_method_config` <a name="put_http_request_method_config" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.putHttpRequestMethodConfig"></a>

```python
def put_http_request_method_config(
  values: typing.List[str] = None
) -> None
```

###### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.putHttpRequestMethodConfig.parameter.values"></a>

- *Type:* typing.List[str]

The name of the request method.

The maximum length is 40 characters. The allowed characters are A-Z, hyphen (-), and underscore (_). The comparison is case sensitive. Wildcards are not supported; therefore, the method name must be an exact match.
If you specify multiple strings, the condition is satisfied if one of the strings matches the HTTP request method. We recommend that you route GET and HEAD requests in the same way, because the response to a HEAD request may be cached.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#values Elasticloadbalancingv2ListenerRule#values}

---

##### `put_path_pattern_config` <a name="put_path_pattern_config" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.putPathPatternConfig"></a>

```python
def put_path_pattern_config(
  regex_values: typing.List[str] = None,
  values: typing.List[str] = None
) -> None
```

###### `regex_values`<sup>Optional</sup> <a name="regex_values" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.putPathPatternConfig.parameter.regexValues"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#regex_values Elasticloadbalancingv2ListenerRule#regex_values}.

---

###### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.putPathPatternConfig.parameter.values"></a>

- *Type:* typing.List[str]

The path patterns to compare against the request URL.

The maximum size of each string is 128 characters. The comparison is case sensitive. The following wildcard characters are supported: * (matches 0 or more characters) and ? (matches exactly 1 character).
If you specify multiple strings, the condition is satisfied if one of them matches the request URL. The path pattern is compared only to the path of the URL, not to its query string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#values Elasticloadbalancingv2ListenerRule#values}

---

##### `put_query_string_config` <a name="put_query_string_config" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.putQueryStringConfig"></a>

```python
def put_query_string_config(
  values: IResolvable | typing.List[Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValues] = None
) -> None
```

###### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.putQueryStringConfig.parameter.values"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValues">Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValues</a>]

The key/value pairs or values to find in the query string.

The maximum length of each string is 128 characters. The comparison is case insensitive. The following wildcard characters are supported: * (matches 0 or more characters) and ? (matches exactly 1 character). To search for a literal '*' or '?' character in a query string, you must escape these characters in `Values` using a '' character.
If you specify multiple key/value pairs or values, the condition is satisfied if one of them is found in the query string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#values Elasticloadbalancingv2ListenerRule#values}

---

##### `put_source_ip_config` <a name="put_source_ip_config" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.putSourceIpConfig"></a>

```python
def put_source_ip_config(
  ip_address_type: str = None,
  values: typing.List[str] = None
) -> None
```

###### `ip_address_type`<sup>Optional</sup> <a name="ip_address_type" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.putSourceIpConfig.parameter.ipAddressType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#ip_address_type Elasticloadbalancingv2ListenerRule#ip_address_type}.

---

###### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.putSourceIpConfig.parameter.values"></a>

- *Type:* typing.List[str]

The source IP addresses, in CIDR format.

You can use both IPv4 and IPv6 addresses. Wildcards are not supported.
If you specify multiple addresses, the condition is satisfied if the source IP address of the request matches one of the CIDR blocks. This condition is not satisfied by the addresses in the X-Forwarded-For header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#values Elasticloadbalancingv2ListenerRule#values}

---

##### `reset_field` <a name="reset_field" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.resetField"></a>

```python
def reset_field() -> None
```

##### `reset_host_header_config` <a name="reset_host_header_config" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.resetHostHeaderConfig"></a>

```python
def reset_host_header_config() -> None
```

##### `reset_http_header_config` <a name="reset_http_header_config" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.resetHttpHeaderConfig"></a>

```python
def reset_http_header_config() -> None
```

##### `reset_http_request_method_config` <a name="reset_http_request_method_config" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.resetHttpRequestMethodConfig"></a>

```python
def reset_http_request_method_config() -> None
```

##### `reset_path_pattern_config` <a name="reset_path_pattern_config" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.resetPathPatternConfig"></a>

```python
def reset_path_pattern_config() -> None
```

##### `reset_query_string_config` <a name="reset_query_string_config" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.resetQueryStringConfig"></a>

```python
def reset_query_string_config() -> None
```

##### `reset_regex_values` <a name="reset_regex_values" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.resetRegexValues"></a>

```python
def reset_regex_values() -> None
```

##### `reset_source_ip_config` <a name="reset_source_ip_config" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.resetSourceIpConfig"></a>

```python
def reset_source_ip_config() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.property.hostHeaderConfig">host_header_config</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference">Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.property.httpHeaderConfig">http_header_config</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference">Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.property.httpRequestMethodConfig">http_request_method_config</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference">Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.property.pathPatternConfig">path_pattern_config</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference">Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.property.queryStringConfig">query_string_config</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference">Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.property.sourceIpConfig">source_ip_config</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference">Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.property.fieldInput">field_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.property.hostHeaderConfigInput">host_header_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfig">Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.property.httpHeaderConfigInput">http_header_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfig">Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.property.httpRequestMethodConfigInput">http_request_method_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfig">Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.property.pathPatternConfigInput">path_pattern_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfig">Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.property.queryStringConfigInput">query_string_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfig">Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.property.regexValuesInput">regex_values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.property.sourceIpConfigInput">source_ip_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfig">Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.property.field">field</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.property.regexValues">regex_values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditions">Elasticloadbalancingv2ListenerRuleConditions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `host_header_config`<sup>Required</sup> <a name="host_header_config" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.property.hostHeaderConfig"></a>

```python
host_header_config: Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference">Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference</a>

---

##### `http_header_config`<sup>Required</sup> <a name="http_header_config" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.property.httpHeaderConfig"></a>

```python
http_header_config: Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference">Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference</a>

---

##### `http_request_method_config`<sup>Required</sup> <a name="http_request_method_config" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.property.httpRequestMethodConfig"></a>

```python
http_request_method_config: Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference">Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference</a>

---

##### `path_pattern_config`<sup>Required</sup> <a name="path_pattern_config" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.property.pathPatternConfig"></a>

```python
path_pattern_config: Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference">Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference</a>

---

##### `query_string_config`<sup>Required</sup> <a name="query_string_config" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.property.queryStringConfig"></a>

```python
query_string_config: Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference">Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference</a>

---

##### `source_ip_config`<sup>Required</sup> <a name="source_ip_config" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.property.sourceIpConfig"></a>

```python
source_ip_config: Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference">Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference</a>

---

##### `field_input`<sup>Optional</sup> <a name="field_input" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.property.fieldInput"></a>

```python
field_input: str
```

- *Type:* str

---

##### `host_header_config_input`<sup>Optional</sup> <a name="host_header_config_input" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.property.hostHeaderConfigInput"></a>

```python
host_header_config_input: IResolvable | Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfig">Elasticloadbalancingv2ListenerRuleConditionsHostHeaderConfig</a>

---

##### `http_header_config_input`<sup>Optional</sup> <a name="http_header_config_input" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.property.httpHeaderConfigInput"></a>

```python
http_header_config_input: IResolvable | Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfig">Elasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfig</a>

---

##### `http_request_method_config_input`<sup>Optional</sup> <a name="http_request_method_config_input" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.property.httpRequestMethodConfigInput"></a>

```python
http_request_method_config_input: IResolvable | Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfig">Elasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfig</a>

---

##### `path_pattern_config_input`<sup>Optional</sup> <a name="path_pattern_config_input" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.property.pathPatternConfigInput"></a>

```python
path_pattern_config_input: IResolvable | Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfig">Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfig</a>

---

##### `query_string_config_input`<sup>Optional</sup> <a name="query_string_config_input" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.property.queryStringConfigInput"></a>

```python
query_string_config_input: IResolvable | Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfig">Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfig</a>

---

##### `regex_values_input`<sup>Optional</sup> <a name="regex_values_input" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.property.regexValuesInput"></a>

```python
regex_values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `source_ip_config_input`<sup>Optional</sup> <a name="source_ip_config_input" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.property.sourceIpConfigInput"></a>

```python
source_ip_config_input: IResolvable | Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfig">Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfig</a>

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.property.field"></a>

```python
field: str
```

- *Type:* str

---

##### `regex_values`<sup>Required</sup> <a name="regex_values" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.property.regexValues"></a>

```python
regex_values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Elasticloadbalancingv2ListenerRuleConditions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditions">Elasticloadbalancingv2ListenerRuleConditions</a>

---


### Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference <a name="Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_listener_rule

elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.resetRegexValues">reset_regex_values</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex_values` <a name="reset_regex_values" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.resetRegexValues"></a>

```python
def reset_regex_values() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.property.regexValuesInput">regex_values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.property.regexValues">regex_values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfig">Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `regex_values_input`<sup>Optional</sup> <a name="regex_values_input" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.property.regexValuesInput"></a>

```python
regex_values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `regex_values`<sup>Required</sup> <a name="regex_values" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.property.regexValues"></a>

```python
regex_values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfig">Elasticloadbalancingv2ListenerRuleConditionsPathPatternConfig</a>

---


### Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference <a name="Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_listener_rule

elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.putValues">put_values</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_values` <a name="put_values" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.putValues"></a>

```python
def put_values(
  value: IResolvable | typing.List[Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValues]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.putValues.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValues">Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValues</a>]

---

##### `reset_values` <a name="reset_values" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.property.values">values</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList">Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.property.valuesInput">values_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValues">Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValues</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfig">Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.property.values"></a>

```python
values: Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList">Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList</a>

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.property.valuesInput"></a>

```python
values_input: IResolvable | typing.List[Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValues]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValues">Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValues</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfig">Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfig</a>

---


### Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList <a name="Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_listener_rule

elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValues">Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValues</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValues]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValues">Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValues</a>]

---


### Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference <a name="Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_listener_rule

elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValues">Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValues</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValues
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValues">Elasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValues</a>

---


### Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference <a name="Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_listener_rule

elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.resetIpAddressType">reset_ip_address_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ip_address_type` <a name="reset_ip_address_type" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.resetIpAddressType"></a>

```python
def reset_ip_address_type() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.property.ipAddressTypeInput">ip_address_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.property.ipAddressType">ip_address_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfig">Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ip_address_type_input`<sup>Optional</sup> <a name="ip_address_type_input" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.property.ipAddressTypeInput"></a>

```python
ip_address_type_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ip_address_type`<sup>Required</sup> <a name="ip_address_type" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.property.ipAddressType"></a>

```python
ip_address_type: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfig">Elasticloadbalancingv2ListenerRuleConditionsSourceIpConfig</a>

---


### Elasticloadbalancingv2ListenerRuleTagsList <a name="Elasticloadbalancingv2ListenerRuleTagsList" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_listener_rule

elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Elasticloadbalancingv2ListenerRuleTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTags">Elasticloadbalancingv2ListenerRuleTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Elasticloadbalancingv2ListenerRuleTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTags">Elasticloadbalancingv2ListenerRuleTags</a>]

---


### Elasticloadbalancingv2ListenerRuleTagsOutputReference <a name="Elasticloadbalancingv2ListenerRuleTagsOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_listener_rule

elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTags">Elasticloadbalancingv2ListenerRuleTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Elasticloadbalancingv2ListenerRuleTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTags">Elasticloadbalancingv2ListenerRuleTags</a>

---


### Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference <a name="Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_listener_rule

elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.putRewrites">put_rewrites</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.resetRewrites">reset_rewrites</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_rewrites` <a name="put_rewrites" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.putRewrites"></a>

```python
def put_rewrites(
  value: IResolvable | typing.List[Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewrites]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.putRewrites.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewrites">Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewrites</a>]

---

##### `reset_rewrites` <a name="reset_rewrites" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.resetRewrites"></a>

```python
def reset_rewrites() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.property.rewrites">rewrites</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList">Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.property.rewritesInput">rewrites_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewrites">Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewrites</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfig">Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `rewrites`<sup>Required</sup> <a name="rewrites" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.property.rewrites"></a>

```python
rewrites: Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList">Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList</a>

---

##### `rewrites_input`<sup>Optional</sup> <a name="rewrites_input" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.property.rewritesInput"></a>

```python
rewrites_input: IResolvable | typing.List[Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewrites]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewrites">Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewrites</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfig">Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfig</a>

---


### Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList <a name="Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_listener_rule

elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewrites">Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewrites</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewrites]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewrites">Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewrites</a>]

---


### Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference <a name="Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_listener_rule

elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.resetRegex">reset_regex</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.resetReplace">reset_replace</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```

##### `reset_replace` <a name="reset_replace" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.resetReplace"></a>

```python
def reset_replace() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.property.regexInput">regex_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.property.replaceInput">replace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.property.regex">regex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.property.replace">replace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewrites">Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewrites</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.property.regexInput"></a>

```python
regex_input: str
```

- *Type:* str

---

##### `replace_input`<sup>Optional</sup> <a name="replace_input" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.property.replaceInput"></a>

```python
replace_input: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.property.regex"></a>

```python
regex: str
```

- *Type:* str

---

##### `replace`<sup>Required</sup> <a name="replace" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.property.replace"></a>

```python
replace: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewrites
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewrites">Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewrites</a>

---


### Elasticloadbalancingv2ListenerRuleTransformsList <a name="Elasticloadbalancingv2ListenerRuleTransformsList" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsList.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_listener_rule

elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Elasticloadbalancingv2ListenerRuleTransformsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransforms">Elasticloadbalancingv2ListenerRuleTransforms</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Elasticloadbalancingv2ListenerRuleTransforms]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransforms">Elasticloadbalancingv2ListenerRuleTransforms</a>]

---


### Elasticloadbalancingv2ListenerRuleTransformsOutputReference <a name="Elasticloadbalancingv2ListenerRuleTransformsOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_listener_rule

elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.putHostHeaderRewriteConfig">put_host_header_rewrite_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.putUrlRewriteConfig">put_url_rewrite_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.resetHostHeaderRewriteConfig">reset_host_header_rewrite_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.resetType">reset_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.resetUrlRewriteConfig">reset_url_rewrite_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_host_header_rewrite_config` <a name="put_host_header_rewrite_config" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.putHostHeaderRewriteConfig"></a>

```python
def put_host_header_rewrite_config(
  rewrites: IResolvable | typing.List[Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewrites] = None
) -> None
```

###### `rewrites`<sup>Optional</sup> <a name="rewrites" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.putHostHeaderRewriteConfig.parameter.rewrites"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewrites">Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewrites</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#rewrites Elasticloadbalancingv2ListenerRule#rewrites}.

---

##### `put_url_rewrite_config` <a name="put_url_rewrite_config" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.putUrlRewriteConfig"></a>

```python
def put_url_rewrite_config(
  rewrites: IResolvable | typing.List[Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewrites] = None
) -> None
```

###### `rewrites`<sup>Optional</sup> <a name="rewrites" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.putUrlRewriteConfig.parameter.rewrites"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewrites">Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewrites</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticloadbalancingv2_listener_rule#rewrites Elasticloadbalancingv2ListenerRule#rewrites}.

---

##### `reset_host_header_rewrite_config` <a name="reset_host_header_rewrite_config" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.resetHostHeaderRewriteConfig"></a>

```python
def reset_host_header_rewrite_config() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.resetType"></a>

```python
def reset_type() -> None
```

##### `reset_url_rewrite_config` <a name="reset_url_rewrite_config" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.resetUrlRewriteConfig"></a>

```python
def reset_url_rewrite_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.property.hostHeaderRewriteConfig">host_header_rewrite_config</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference">Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.property.urlRewriteConfig">url_rewrite_config</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference">Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.property.hostHeaderRewriteConfigInput">host_header_rewrite_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfig">Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.property.urlRewriteConfigInput">url_rewrite_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfig">Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransforms">Elasticloadbalancingv2ListenerRuleTransforms</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `host_header_rewrite_config`<sup>Required</sup> <a name="host_header_rewrite_config" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.property.hostHeaderRewriteConfig"></a>

```python
host_header_rewrite_config: Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference">Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference</a>

---

##### `url_rewrite_config`<sup>Required</sup> <a name="url_rewrite_config" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.property.urlRewriteConfig"></a>

```python
url_rewrite_config: Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference">Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference</a>

---

##### `host_header_rewrite_config_input`<sup>Optional</sup> <a name="host_header_rewrite_config_input" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.property.hostHeaderRewriteConfigInput"></a>

```python
host_header_rewrite_config_input: IResolvable | Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfig">Elasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfig</a>

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `url_rewrite_config_input`<sup>Optional</sup> <a name="url_rewrite_config_input" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.property.urlRewriteConfigInput"></a>

```python
url_rewrite_config_input: IResolvable | Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfig">Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfig</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Elasticloadbalancingv2ListenerRuleTransforms
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransforms">Elasticloadbalancingv2ListenerRuleTransforms</a>

---


### Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference <a name="Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_listener_rule

elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.putRewrites">put_rewrites</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.resetRewrites">reset_rewrites</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_rewrites` <a name="put_rewrites" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.putRewrites"></a>

```python
def put_rewrites(
  value: IResolvable | typing.List[Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewrites]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.putRewrites.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewrites">Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewrites</a>]

---

##### `reset_rewrites` <a name="reset_rewrites" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.resetRewrites"></a>

```python
def reset_rewrites() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.property.rewrites">rewrites</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList">Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.property.rewritesInput">rewrites_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewrites">Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewrites</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfig">Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `rewrites`<sup>Required</sup> <a name="rewrites" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.property.rewrites"></a>

```python
rewrites: Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList">Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList</a>

---

##### `rewrites_input`<sup>Optional</sup> <a name="rewrites_input" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.property.rewritesInput"></a>

```python
rewrites_input: IResolvable | typing.List[Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewrites]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewrites">Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewrites</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfig">Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfig</a>

---


### Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList <a name="Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_listener_rule

elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewrites">Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewrites</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewrites]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewrites">Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewrites</a>]

---


### Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference <a name="Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import elasticloadbalancingv2_listener_rule

elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.resetRegex">reset_regex</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.resetReplace">reset_replace</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```

##### `reset_replace` <a name="reset_replace" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.resetReplace"></a>

```python
def reset_replace() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.property.regexInput">regex_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.property.replaceInput">replace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.property.regex">regex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.property.replace">replace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewrites">Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewrites</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.property.regexInput"></a>

```python
regex_input: str
```

- *Type:* str

---

##### `replace_input`<sup>Optional</sup> <a name="replace_input" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.property.replaceInput"></a>

```python
replace_input: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.property.regex"></a>

```python
regex: str
```

- *Type:* str

---

##### `replace`<sup>Required</sup> <a name="replace" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.property.replace"></a>

```python
replace: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewrites
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2ListenerRule.Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewrites">Elasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewrites</a>

---



