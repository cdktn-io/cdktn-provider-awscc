# `eventsRule` Submodule <a name="`eventsRule` Submodule" id="@cdktn/provider-awscc.eventsRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EventsRule <a name="EventsRule" id="@cdktn/provider-awscc.eventsRule.EventsRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule awscc_events_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsRule.EventsRule.Initializer"></a>

```python
from cdktn_provider_awscc import events_rule

eventsRule.EventsRule(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  description: str = None,
  event_bus_name: str = None,
  event_pattern: str = None,
  name: str = None,
  role_arn: str = None,
  schedule_expression: str = None,
  state: str = None,
  tags: IResolvable | typing.List[EventsRuleTags] = None,
  targets: IResolvable | typing.List[EventsRuleTargets] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of the rule. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.Initializer.parameter.eventBusName">event_bus_name</a></code> | <code>str</code> | The name or ARN of the event bus associated with the rule. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.Initializer.parameter.eventPattern">event_pattern</a></code> | <code>str</code> | The event pattern of the rule. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the rule. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.Initializer.parameter.roleArn">role_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the role that is used for target invocation. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.Initializer.parameter.scheduleExpression">schedule_expression</a></code> | <code>str</code> | The scheduling expression. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.Initializer.parameter.state">state</a></code> | <code>str</code> | The state of the rule. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTags">EventsRuleTags</a>]</code> | Any tags assigned to the event rule. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.Initializer.parameter.targets">targets</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargets">EventsRuleTargets</a>]</code> | Adds the specified targets to the specified rule, or updates the targets if they are already associated with the rule. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.eventsRule.EventsRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eventsRule.EventsRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.eventsRule.EventsRule.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.eventsRule.EventsRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.eventsRule.EventsRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.eventsRule.EventsRule.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.eventsRule.EventsRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.eventsRule.EventsRule.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.eventsRule.EventsRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.eventsRule.EventsRule.Initializer.parameter.description"></a>

- *Type:* str

The description of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#description EventsRule#description}

---

##### `event_bus_name`<sup>Optional</sup> <a name="event_bus_name" id="@cdktn/provider-awscc.eventsRule.EventsRule.Initializer.parameter.eventBusName"></a>

- *Type:* str

The name or ARN of the event bus associated with the rule.

If you omit this, the default event bus is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#event_bus_name EventsRule#event_bus_name}

---

##### `event_pattern`<sup>Optional</sup> <a name="event_pattern" id="@cdktn/provider-awscc.eventsRule.EventsRule.Initializer.parameter.eventPattern"></a>

- *Type:* str

The event pattern of the rule.

For more information, see Events and Event Patterns in the Amazon EventBridge User Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#event_pattern EventsRule#event_pattern}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.eventsRule.EventsRule.Initializer.parameter.name"></a>

- *Type:* str

The name of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#name EventsRule#name}

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.eventsRule.EventsRule.Initializer.parameter.roleArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the role that is used for target invocation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#role_arn EventsRule#role_arn}

---

##### `schedule_expression`<sup>Optional</sup> <a name="schedule_expression" id="@cdktn/provider-awscc.eventsRule.EventsRule.Initializer.parameter.scheduleExpression"></a>

- *Type:* str

The scheduling expression.

For example, "cron(0 20 * * ? *)", "rate(5 minutes)". For more information, see Creating an Amazon EventBridge rule that runs on a schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#schedule_expression EventsRule#schedule_expression}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktn/provider-awscc.eventsRule.EventsRule.Initializer.parameter.state"></a>

- *Type:* str

The state of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#state EventsRule#state}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.eventsRule.EventsRule.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTags">EventsRuleTags</a>]

Any tags assigned to the event rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#tags EventsRule#tags}

---

##### `targets`<sup>Optional</sup> <a name="targets" id="@cdktn/provider-awscc.eventsRule.EventsRule.Initializer.parameter.targets"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargets">EventsRuleTargets</a>]

Adds the specified targets to the specified rule, or updates the targets if they are already associated with the rule.

Targets are the resources that are invoked when a rule is triggered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#targets EventsRule#targets}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.putTargets">put_targets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.resetEventBusName">reset_event_bus_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.resetEventPattern">reset_event_pattern</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.resetRoleArn">reset_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.resetScheduleExpression">reset_schedule_expression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.resetState">reset_state</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.resetTargets">reset_targets</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eventsRule.EventsRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.eventsRule.EventsRule.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.eventsRule.EventsRule.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.eventsRule.EventsRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.eventsRule.EventsRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsRule.EventsRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.eventsRule.EventsRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.eventsRule.EventsRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.eventsRule.EventsRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.eventsRule.EventsRule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.eventsRule.EventsRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.eventsRule.EventsRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.eventsRule.EventsRule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.eventsRule.EventsRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.eventsRule.EventsRule.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.eventsRule.EventsRule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eventsRule.EventsRule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.eventsRule.EventsRule.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.eventsRule.EventsRule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eventsRule.EventsRule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.eventsRule.EventsRule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.eventsRule.EventsRule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.eventsRule.EventsRule.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.eventsRule.EventsRule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eventsRule.EventsRule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.eventsRule.EventsRule.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[EventsRuleTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsRule.EventsRule.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTags">EventsRuleTags</a>]

---

##### `put_targets` <a name="put_targets" id="@cdktn/provider-awscc.eventsRule.EventsRule.putTargets"></a>

```python
def put_targets(
  value: IResolvable | typing.List[EventsRuleTargets]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsRule.EventsRule.putTargets.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargets">EventsRuleTargets</a>]

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.eventsRule.EventsRule.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_event_bus_name` <a name="reset_event_bus_name" id="@cdktn/provider-awscc.eventsRule.EventsRule.resetEventBusName"></a>

```python
def reset_event_bus_name() -> None
```

##### `reset_event_pattern` <a name="reset_event_pattern" id="@cdktn/provider-awscc.eventsRule.EventsRule.resetEventPattern"></a>

```python
def reset_event_pattern() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.eventsRule.EventsRule.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_role_arn` <a name="reset_role_arn" id="@cdktn/provider-awscc.eventsRule.EventsRule.resetRoleArn"></a>

```python
def reset_role_arn() -> None
```

##### `reset_schedule_expression` <a name="reset_schedule_expression" id="@cdktn/provider-awscc.eventsRule.EventsRule.resetScheduleExpression"></a>

```python
def reset_schedule_expression() -> None
```

##### `reset_state` <a name="reset_state" id="@cdktn/provider-awscc.eventsRule.EventsRule.resetState"></a>

```python
def reset_state() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.eventsRule.EventsRule.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_targets` <a name="reset_targets" id="@cdktn/provider-awscc.eventsRule.EventsRule.resetTargets"></a>

```python
def reset_targets() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a EventsRule resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.eventsRule.EventsRule.isConstruct"></a>

```python
from cdktn_provider_awscc import events_rule

eventsRule.EventsRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.eventsRule.EventsRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.eventsRule.EventsRule.isTerraformElement"></a>

```python
from cdktn_provider_awscc import events_rule

eventsRule.EventsRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.eventsRule.EventsRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.eventsRule.EventsRule.isTerraformResource"></a>

```python
from cdktn_provider_awscc import events_rule

eventsRule.EventsRule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.eventsRule.EventsRule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.eventsRule.EventsRule.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import events_rule

eventsRule.EventsRule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a EventsRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.eventsRule.EventsRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.eventsRule.EventsRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the EventsRule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.eventsRule.EventsRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing EventsRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.eventsRule.EventsRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the EventsRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTagsList">EventsRuleTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.property.targets">targets</a></code> | <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsList">EventsRuleTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.property.eventBusNameInput">event_bus_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.property.eventPatternInput">event_pattern_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.property.scheduleExpressionInput">schedule_expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTags">EventsRuleTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.property.targetsInput">targets_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargets">EventsRuleTargets</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.property.eventBusName">event_bus_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.property.eventPattern">event_pattern</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.property.scheduleExpression">schedule_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.eventsRule.EventsRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.eventsRule.EventsRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsRule.EventsRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.eventsRule.EventsRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.eventsRule.EventsRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.eventsRule.EventsRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.eventsRule.EventsRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.eventsRule.EventsRule.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.eventsRule.EventsRule.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.eventsRule.EventsRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.eventsRule.EventsRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.eventsRule.EventsRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.eventsRule.EventsRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.eventsRule.EventsRule.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.eventsRule.EventsRule.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eventsRule.EventsRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.eventsRule.EventsRule.property.tags"></a>

```python
tags: EventsRuleTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTagsList">EventsRuleTagsList</a>

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktn/provider-awscc.eventsRule.EventsRule.property.targets"></a>

```python
targets: EventsRuleTargetsList
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsList">EventsRuleTargetsList</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.eventsRule.EventsRule.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `event_bus_name_input`<sup>Optional</sup> <a name="event_bus_name_input" id="@cdktn/provider-awscc.eventsRule.EventsRule.property.eventBusNameInput"></a>

```python
event_bus_name_input: str
```

- *Type:* str

---

##### `event_pattern_input`<sup>Optional</sup> <a name="event_pattern_input" id="@cdktn/provider-awscc.eventsRule.EventsRule.property.eventPatternInput"></a>

```python
event_pattern_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.eventsRule.EventsRule.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-awscc.eventsRule.EventsRule.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `schedule_expression_input`<sup>Optional</sup> <a name="schedule_expression_input" id="@cdktn/provider-awscc.eventsRule.EventsRule.property.scheduleExpressionInput"></a>

```python
schedule_expression_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="@cdktn/provider-awscc.eventsRule.EventsRule.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.eventsRule.EventsRule.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[EventsRuleTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTags">EventsRuleTags</a>]

---

##### `targets_input`<sup>Optional</sup> <a name="targets_input" id="@cdktn/provider-awscc.eventsRule.EventsRule.property.targetsInput"></a>

```python
targets_input: IResolvable | typing.List[EventsRuleTargets]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargets">EventsRuleTargets</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.eventsRule.EventsRule.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `event_bus_name`<sup>Required</sup> <a name="event_bus_name" id="@cdktn/provider-awscc.eventsRule.EventsRule.property.eventBusName"></a>

```python
event_bus_name: str
```

- *Type:* str

---

##### `event_pattern`<sup>Required</sup> <a name="event_pattern" id="@cdktn/provider-awscc.eventsRule.EventsRule.property.eventPattern"></a>

```python
event_pattern: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.eventsRule.EventsRule.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.eventsRule.EventsRule.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `schedule_expression`<sup>Required</sup> <a name="schedule_expression" id="@cdktn/provider-awscc.eventsRule.EventsRule.property.scheduleExpression"></a>

```python
schedule_expression: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.eventsRule.EventsRule.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.eventsRule.EventsRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EventsRuleConfig <a name="EventsRuleConfig" id="@cdktn/provider-awscc.eventsRule.EventsRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsRule.EventsRuleConfig.Initializer"></a>

```python
from cdktn_provider_awscc import events_rule

eventsRule.EventsRuleConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  description: str = None,
  event_bus_name: str = None,
  event_pattern: str = None,
  name: str = None,
  role_arn: str = None,
  schedule_expression: str = None,
  state: str = None,
  tags: IResolvable | typing.List[EventsRuleTags] = None,
  targets: IResolvable | typing.List[EventsRuleTargets] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleConfig.property.description">description</a></code> | <code>str</code> | The description of the rule. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleConfig.property.eventBusName">event_bus_name</a></code> | <code>str</code> | The name or ARN of the event bus associated with the rule. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleConfig.property.eventPattern">event_pattern</a></code> | <code>str</code> | The event pattern of the rule. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleConfig.property.name">name</a></code> | <code>str</code> | The name of the rule. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleConfig.property.roleArn">role_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the role that is used for target invocation. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleConfig.property.scheduleExpression">schedule_expression</a></code> | <code>str</code> | The scheduling expression. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleConfig.property.state">state</a></code> | <code>str</code> | The state of the rule. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTags">EventsRuleTags</a>]</code> | Any tags assigned to the event rule. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleConfig.property.targets">targets</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargets">EventsRuleTargets</a>]</code> | Adds the specified targets to the specified rule, or updates the targets if they are already associated with the rule. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.eventsRule.EventsRuleConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.eventsRule.EventsRuleConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.eventsRule.EventsRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.eventsRule.EventsRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.eventsRule.EventsRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.eventsRule.EventsRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.eventsRule.EventsRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.eventsRule.EventsRuleConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#description EventsRule#description}

---

##### `event_bus_name`<sup>Optional</sup> <a name="event_bus_name" id="@cdktn/provider-awscc.eventsRule.EventsRuleConfig.property.eventBusName"></a>

```python
event_bus_name: str
```

- *Type:* str

The name or ARN of the event bus associated with the rule.

If you omit this, the default event bus is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#event_bus_name EventsRule#event_bus_name}

---

##### `event_pattern`<sup>Optional</sup> <a name="event_pattern" id="@cdktn/provider-awscc.eventsRule.EventsRuleConfig.property.eventPattern"></a>

```python
event_pattern: str
```

- *Type:* str

The event pattern of the rule.

For more information, see Events and Event Patterns in the Amazon EventBridge User Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#event_pattern EventsRule#event_pattern}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.eventsRule.EventsRuleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#name EventsRule#name}

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.eventsRule.EventsRuleConfig.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the role that is used for target invocation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#role_arn EventsRule#role_arn}

---

##### `schedule_expression`<sup>Optional</sup> <a name="schedule_expression" id="@cdktn/provider-awscc.eventsRule.EventsRuleConfig.property.scheduleExpression"></a>

```python
schedule_expression: str
```

- *Type:* str

The scheduling expression.

For example, "cron(0 20 * * ? *)", "rate(5 minutes)". For more information, see Creating an Amazon EventBridge rule that runs on a schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#schedule_expression EventsRule#schedule_expression}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktn/provider-awscc.eventsRule.EventsRuleConfig.property.state"></a>

```python
state: str
```

- *Type:* str

The state of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#state EventsRule#state}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.eventsRule.EventsRuleConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[EventsRuleTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTags">EventsRuleTags</a>]

Any tags assigned to the event rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#tags EventsRule#tags}

---

##### `targets`<sup>Optional</sup> <a name="targets" id="@cdktn/provider-awscc.eventsRule.EventsRuleConfig.property.targets"></a>

```python
targets: IResolvable | typing.List[EventsRuleTargets]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargets">EventsRuleTargets</a>]

Adds the specified targets to the specified rule, or updates the targets if they are already associated with the rule.

Targets are the resources that are invoked when a rule is triggered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#targets EventsRule#targets}

---

### EventsRuleTags <a name="EventsRuleTags" id="@cdktn/provider-awscc.eventsRule.EventsRuleTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsRule.EventsRuleTags.Initializer"></a>

```python
from cdktn_provider_awscc import events_rule

eventsRule.EventsRuleTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#key EventsRule#key}. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#value EventsRule#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.eventsRule.EventsRuleTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#key EventsRule#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.eventsRule.EventsRuleTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#value EventsRule#value}.

---

### EventsRuleTargets <a name="EventsRuleTargets" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargets.Initializer"></a>

```python
from cdktn_provider_awscc import events_rule

eventsRule.EventsRuleTargets(
  app_sync_parameters: EventsRuleTargetsAppSyncParameters = None,
  arn: str = None,
  batch_parameters: EventsRuleTargetsBatchParameters = None,
  dead_letter_config: EventsRuleTargetsDeadLetterConfig = None,
  ecs_parameters: EventsRuleTargetsEcsParameters = None,
  http_parameters: EventsRuleTargetsHttpParameters = None,
  id: str = None,
  input: str = None,
  input_path: str = None,
  input_transformer: EventsRuleTargetsInputTransformer = None,
  kinesis_parameters: EventsRuleTargetsKinesisParameters = None,
  redshift_data_parameters: EventsRuleTargetsRedshiftDataParameters = None,
  retry_policy: EventsRuleTargetsRetryPolicy = None,
  role_arn: str = None,
  run_command_parameters: EventsRuleTargetsRunCommandParameters = None,
  sage_maker_pipeline_parameters: EventsRuleTargetsSageMakerPipelineParameters = None,
  sqs_parameters: EventsRuleTargetsSqsParameters = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargets.property.appSyncParameters">app_sync_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParameters">EventsRuleTargetsAppSyncParameters</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#app_sync_parameters EventsRule#app_sync_parameters}. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargets.property.arn">arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#arn EventsRule#arn}. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargets.property.batchParameters">batch_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParameters">EventsRuleTargetsBatchParameters</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#batch_parameters EventsRule#batch_parameters}. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargets.property.deadLetterConfig">dead_letter_config</a></code> | <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfig">EventsRuleTargetsDeadLetterConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#dead_letter_config EventsRule#dead_letter_config}. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargets.property.ecsParameters">ecs_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParameters">EventsRuleTargetsEcsParameters</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#ecs_parameters EventsRule#ecs_parameters}. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargets.property.httpParameters">http_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParameters">EventsRuleTargetsHttpParameters</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#http_parameters EventsRule#http_parameters}. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargets.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#id EventsRule#id}. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargets.property.input">input</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#input EventsRule#input}. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargets.property.inputPath">input_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#input_path EventsRule#input_path}. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargets.property.inputTransformer">input_transformer</a></code> | <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformer">EventsRuleTargetsInputTransformer</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#input_transformer EventsRule#input_transformer}. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargets.property.kinesisParameters">kinesis_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParameters">EventsRuleTargetsKinesisParameters</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#kinesis_parameters EventsRule#kinesis_parameters}. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargets.property.redshiftDataParameters">redshift_data_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParameters">EventsRuleTargetsRedshiftDataParameters</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#redshift_data_parameters EventsRule#redshift_data_parameters}. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargets.property.retryPolicy">retry_policy</a></code> | <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicy">EventsRuleTargetsRetryPolicy</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#retry_policy EventsRule#retry_policy}. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargets.property.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#role_arn EventsRule#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargets.property.runCommandParameters">run_command_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParameters">EventsRuleTargetsRunCommandParameters</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#run_command_parameters EventsRule#run_command_parameters}. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargets.property.sageMakerPipelineParameters">sage_maker_pipeline_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParameters">EventsRuleTargetsSageMakerPipelineParameters</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#sage_maker_pipeline_parameters EventsRule#sage_maker_pipeline_parameters}. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargets.property.sqsParameters">sqs_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParameters">EventsRuleTargetsSqsParameters</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#sqs_parameters EventsRule#sqs_parameters}. |

---

##### `app_sync_parameters`<sup>Optional</sup> <a name="app_sync_parameters" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargets.property.appSyncParameters"></a>

```python
app_sync_parameters: EventsRuleTargetsAppSyncParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParameters">EventsRuleTargetsAppSyncParameters</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#app_sync_parameters EventsRule#app_sync_parameters}.

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargets.property.arn"></a>

```python
arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#arn EventsRule#arn}.

---

##### `batch_parameters`<sup>Optional</sup> <a name="batch_parameters" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargets.property.batchParameters"></a>

```python
batch_parameters: EventsRuleTargetsBatchParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParameters">EventsRuleTargetsBatchParameters</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#batch_parameters EventsRule#batch_parameters}.

---

##### `dead_letter_config`<sup>Optional</sup> <a name="dead_letter_config" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargets.property.deadLetterConfig"></a>

```python
dead_letter_config: EventsRuleTargetsDeadLetterConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfig">EventsRuleTargetsDeadLetterConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#dead_letter_config EventsRule#dead_letter_config}.

---

##### `ecs_parameters`<sup>Optional</sup> <a name="ecs_parameters" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargets.property.ecsParameters"></a>

```python
ecs_parameters: EventsRuleTargetsEcsParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParameters">EventsRuleTargetsEcsParameters</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#ecs_parameters EventsRule#ecs_parameters}.

---

##### `http_parameters`<sup>Optional</sup> <a name="http_parameters" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargets.property.httpParameters"></a>

```python
http_parameters: EventsRuleTargetsHttpParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParameters">EventsRuleTargetsHttpParameters</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#http_parameters EventsRule#http_parameters}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargets.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#id EventsRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `input`<sup>Optional</sup> <a name="input" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargets.property.input"></a>

```python
input: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#input EventsRule#input}.

---

##### `input_path`<sup>Optional</sup> <a name="input_path" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargets.property.inputPath"></a>

```python
input_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#input_path EventsRule#input_path}.

---

##### `input_transformer`<sup>Optional</sup> <a name="input_transformer" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargets.property.inputTransformer"></a>

```python
input_transformer: EventsRuleTargetsInputTransformer
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformer">EventsRuleTargetsInputTransformer</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#input_transformer EventsRule#input_transformer}.

---

##### `kinesis_parameters`<sup>Optional</sup> <a name="kinesis_parameters" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargets.property.kinesisParameters"></a>

```python
kinesis_parameters: EventsRuleTargetsKinesisParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParameters">EventsRuleTargetsKinesisParameters</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#kinesis_parameters EventsRule#kinesis_parameters}.

---

##### `redshift_data_parameters`<sup>Optional</sup> <a name="redshift_data_parameters" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargets.property.redshiftDataParameters"></a>

```python
redshift_data_parameters: EventsRuleTargetsRedshiftDataParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParameters">EventsRuleTargetsRedshiftDataParameters</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#redshift_data_parameters EventsRule#redshift_data_parameters}.

---

##### `retry_policy`<sup>Optional</sup> <a name="retry_policy" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargets.property.retryPolicy"></a>

```python
retry_policy: EventsRuleTargetsRetryPolicy
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicy">EventsRuleTargetsRetryPolicy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#retry_policy EventsRule#retry_policy}.

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargets.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#role_arn EventsRule#role_arn}.

---

##### `run_command_parameters`<sup>Optional</sup> <a name="run_command_parameters" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargets.property.runCommandParameters"></a>

```python
run_command_parameters: EventsRuleTargetsRunCommandParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParameters">EventsRuleTargetsRunCommandParameters</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#run_command_parameters EventsRule#run_command_parameters}.

---

##### `sage_maker_pipeline_parameters`<sup>Optional</sup> <a name="sage_maker_pipeline_parameters" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargets.property.sageMakerPipelineParameters"></a>

```python
sage_maker_pipeline_parameters: EventsRuleTargetsSageMakerPipelineParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParameters">EventsRuleTargetsSageMakerPipelineParameters</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#sage_maker_pipeline_parameters EventsRule#sage_maker_pipeline_parameters}.

---

##### `sqs_parameters`<sup>Optional</sup> <a name="sqs_parameters" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargets.property.sqsParameters"></a>

```python
sqs_parameters: EventsRuleTargetsSqsParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParameters">EventsRuleTargetsSqsParameters</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#sqs_parameters EventsRule#sqs_parameters}.

---

### EventsRuleTargetsAppSyncParameters <a name="EventsRuleTargetsAppSyncParameters" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParameters.Initializer"></a>

```python
from cdktn_provider_awscc import events_rule

eventsRule.EventsRuleTargetsAppSyncParameters(
  graph_ql_operation: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParameters.property.graphQlOperation">graph_ql_operation</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#graph_ql_operation EventsRule#graph_ql_operation}. |

---

##### `graph_ql_operation`<sup>Optional</sup> <a name="graph_ql_operation" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParameters.property.graphQlOperation"></a>

```python
graph_ql_operation: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#graph_ql_operation EventsRule#graph_ql_operation}.

---

### EventsRuleTargetsBatchParameters <a name="EventsRuleTargetsBatchParameters" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParameters.Initializer"></a>

```python
from cdktn_provider_awscc import events_rule

eventsRule.EventsRuleTargetsBatchParameters(
  array_properties: EventsRuleTargetsBatchParametersArrayProperties = None,
  job_definition: str = None,
  job_name: str = None,
  retry_strategy: EventsRuleTargetsBatchParametersRetryStrategy = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParameters.property.arrayProperties">array_properties</a></code> | <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayProperties">EventsRuleTargetsBatchParametersArrayProperties</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#array_properties EventsRule#array_properties}. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParameters.property.jobDefinition">job_definition</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#job_definition EventsRule#job_definition}. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParameters.property.jobName">job_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#job_name EventsRule#job_name}. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParameters.property.retryStrategy">retry_strategy</a></code> | <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategy">EventsRuleTargetsBatchParametersRetryStrategy</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#retry_strategy EventsRule#retry_strategy}. |

---

##### `array_properties`<sup>Optional</sup> <a name="array_properties" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParameters.property.arrayProperties"></a>

```python
array_properties: EventsRuleTargetsBatchParametersArrayProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayProperties">EventsRuleTargetsBatchParametersArrayProperties</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#array_properties EventsRule#array_properties}.

---

##### `job_definition`<sup>Optional</sup> <a name="job_definition" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParameters.property.jobDefinition"></a>

```python
job_definition: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#job_definition EventsRule#job_definition}.

---

##### `job_name`<sup>Optional</sup> <a name="job_name" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParameters.property.jobName"></a>

```python
job_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#job_name EventsRule#job_name}.

---

##### `retry_strategy`<sup>Optional</sup> <a name="retry_strategy" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParameters.property.retryStrategy"></a>

```python
retry_strategy: EventsRuleTargetsBatchParametersRetryStrategy
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategy">EventsRuleTargetsBatchParametersRetryStrategy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#retry_strategy EventsRule#retry_strategy}.

---

### EventsRuleTargetsBatchParametersArrayProperties <a name="EventsRuleTargetsBatchParametersArrayProperties" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayProperties.Initializer"></a>

```python
from cdktn_provider_awscc import events_rule

eventsRule.EventsRuleTargetsBatchParametersArrayProperties(
  size: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayProperties.property.size">size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#size EventsRule#size}. |

---

##### `size`<sup>Optional</sup> <a name="size" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayProperties.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#size EventsRule#size}.

---

### EventsRuleTargetsBatchParametersRetryStrategy <a name="EventsRuleTargetsBatchParametersRetryStrategy" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategy.Initializer"></a>

```python
from cdktn_provider_awscc import events_rule

eventsRule.EventsRuleTargetsBatchParametersRetryStrategy(
  attempts: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategy.property.attempts">attempts</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#attempts EventsRule#attempts}. |

---

##### `attempts`<sup>Optional</sup> <a name="attempts" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategy.property.attempts"></a>

```python
attempts: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#attempts EventsRule#attempts}.

---

### EventsRuleTargetsDeadLetterConfig <a name="EventsRuleTargetsDeadLetterConfig" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfig.Initializer"></a>

```python
from cdktn_provider_awscc import events_rule

eventsRule.EventsRuleTargetsDeadLetterConfig(
  arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfig.property.arn">arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#arn EventsRule#arn}. |

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfig.property.arn"></a>

```python
arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#arn EventsRule#arn}.

---

### EventsRuleTargetsEcsParameters <a name="EventsRuleTargetsEcsParameters" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParameters.Initializer"></a>

```python
from cdktn_provider_awscc import events_rule

eventsRule.EventsRuleTargetsEcsParameters(
  capacity_provider_strategy: IResolvable | typing.List[EventsRuleTargetsEcsParametersCapacityProviderStrategy] = None,
  enable_ecs_managed_tags: bool | IResolvable = None,
  enable_execute_command: bool | IResolvable = None,
  group: str = None,
  launch_type: str = None,
  network_configuration: EventsRuleTargetsEcsParametersNetworkConfiguration = None,
  placement_constraints: IResolvable | typing.List[EventsRuleTargetsEcsParametersPlacementConstraints] = None,
  placement_strategies: IResolvable | typing.List[EventsRuleTargetsEcsParametersPlacementStrategies] = None,
  platform_version: str = None,
  propagate_tags: str = None,
  reference_id: str = None,
  tag_list: IResolvable | typing.List[EventsRuleTargetsEcsParametersTagListStruct] = None,
  task_count: typing.Union[int, float] = None,
  task_definition_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParameters.property.capacityProviderStrategy">capacity_provider_strategy</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategy">EventsRuleTargetsEcsParametersCapacityProviderStrategy</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#capacity_provider_strategy EventsRule#capacity_provider_strategy}. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParameters.property.enableEcsManagedTags">enable_ecs_managed_tags</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#enable_ecs_managed_tags EventsRule#enable_ecs_managed_tags}. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParameters.property.enableExecuteCommand">enable_execute_command</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#enable_execute_command EventsRule#enable_execute_command}. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParameters.property.group">group</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#group EventsRule#group}. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParameters.property.launchType">launch_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#launch_type EventsRule#launch_type}. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParameters.property.networkConfiguration">network_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfiguration">EventsRuleTargetsEcsParametersNetworkConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#network_configuration EventsRule#network_configuration}. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParameters.property.placementConstraints">placement_constraints</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraints">EventsRuleTargetsEcsParametersPlacementConstraints</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#placement_constraints EventsRule#placement_constraints}. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParameters.property.placementStrategies">placement_strategies</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategies">EventsRuleTargetsEcsParametersPlacementStrategies</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#placement_strategies EventsRule#placement_strategies}. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParameters.property.platformVersion">platform_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#platform_version EventsRule#platform_version}. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParameters.property.propagateTags">propagate_tags</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#propagate_tags EventsRule#propagate_tags}. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParameters.property.referenceId">reference_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#reference_id EventsRule#reference_id}. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParameters.property.tagList">tag_list</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStruct">EventsRuleTargetsEcsParametersTagListStruct</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#tag_list EventsRule#tag_list}. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParameters.property.taskCount">task_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#task_count EventsRule#task_count}. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParameters.property.taskDefinitionArn">task_definition_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#task_definition_arn EventsRule#task_definition_arn}. |

---

##### `capacity_provider_strategy`<sup>Optional</sup> <a name="capacity_provider_strategy" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParameters.property.capacityProviderStrategy"></a>

```python
capacity_provider_strategy: IResolvable | typing.List[EventsRuleTargetsEcsParametersCapacityProviderStrategy]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategy">EventsRuleTargetsEcsParametersCapacityProviderStrategy</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#capacity_provider_strategy EventsRule#capacity_provider_strategy}.

---

##### `enable_ecs_managed_tags`<sup>Optional</sup> <a name="enable_ecs_managed_tags" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParameters.property.enableEcsManagedTags"></a>

```python
enable_ecs_managed_tags: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#enable_ecs_managed_tags EventsRule#enable_ecs_managed_tags}.

---

##### `enable_execute_command`<sup>Optional</sup> <a name="enable_execute_command" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParameters.property.enableExecuteCommand"></a>

```python
enable_execute_command: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#enable_execute_command EventsRule#enable_execute_command}.

---

##### `group`<sup>Optional</sup> <a name="group" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParameters.property.group"></a>

```python
group: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#group EventsRule#group}.

---

##### `launch_type`<sup>Optional</sup> <a name="launch_type" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParameters.property.launchType"></a>

```python
launch_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#launch_type EventsRule#launch_type}.

---

##### `network_configuration`<sup>Optional</sup> <a name="network_configuration" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParameters.property.networkConfiguration"></a>

```python
network_configuration: EventsRuleTargetsEcsParametersNetworkConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfiguration">EventsRuleTargetsEcsParametersNetworkConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#network_configuration EventsRule#network_configuration}.

---

##### `placement_constraints`<sup>Optional</sup> <a name="placement_constraints" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParameters.property.placementConstraints"></a>

```python
placement_constraints: IResolvable | typing.List[EventsRuleTargetsEcsParametersPlacementConstraints]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraints">EventsRuleTargetsEcsParametersPlacementConstraints</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#placement_constraints EventsRule#placement_constraints}.

---

##### `placement_strategies`<sup>Optional</sup> <a name="placement_strategies" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParameters.property.placementStrategies"></a>

```python
placement_strategies: IResolvable | typing.List[EventsRuleTargetsEcsParametersPlacementStrategies]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategies">EventsRuleTargetsEcsParametersPlacementStrategies</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#placement_strategies EventsRule#placement_strategies}.

---

##### `platform_version`<sup>Optional</sup> <a name="platform_version" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParameters.property.platformVersion"></a>

```python
platform_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#platform_version EventsRule#platform_version}.

---

##### `propagate_tags`<sup>Optional</sup> <a name="propagate_tags" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParameters.property.propagateTags"></a>

```python
propagate_tags: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#propagate_tags EventsRule#propagate_tags}.

---

##### `reference_id`<sup>Optional</sup> <a name="reference_id" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParameters.property.referenceId"></a>

```python
reference_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#reference_id EventsRule#reference_id}.

---

##### `tag_list`<sup>Optional</sup> <a name="tag_list" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParameters.property.tagList"></a>

```python
tag_list: IResolvable | typing.List[EventsRuleTargetsEcsParametersTagListStruct]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStruct">EventsRuleTargetsEcsParametersTagListStruct</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#tag_list EventsRule#tag_list}.

---

##### `task_count`<sup>Optional</sup> <a name="task_count" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParameters.property.taskCount"></a>

```python
task_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#task_count EventsRule#task_count}.

---

##### `task_definition_arn`<sup>Optional</sup> <a name="task_definition_arn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParameters.property.taskDefinitionArn"></a>

```python
task_definition_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#task_definition_arn EventsRule#task_definition_arn}.

---

### EventsRuleTargetsEcsParametersCapacityProviderStrategy <a name="EventsRuleTargetsEcsParametersCapacityProviderStrategy" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategy.Initializer"></a>

```python
from cdktn_provider_awscc import events_rule

eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategy(
  base: typing.Union[int, float] = None,
  capacity_provider: str = None,
  weight: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategy.property.base">base</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#base EventsRule#base}. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategy.property.capacityProvider">capacity_provider</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#capacity_provider EventsRule#capacity_provider}. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategy.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#weight EventsRule#weight}. |

---

##### `base`<sup>Optional</sup> <a name="base" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategy.property.base"></a>

```python
base: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#base EventsRule#base}.

---

##### `capacity_provider`<sup>Optional</sup> <a name="capacity_provider" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategy.property.capacityProvider"></a>

```python
capacity_provider: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#capacity_provider EventsRule#capacity_provider}.

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategy.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#weight EventsRule#weight}.

---

### EventsRuleTargetsEcsParametersNetworkConfiguration <a name="EventsRuleTargetsEcsParametersNetworkConfiguration" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import events_rule

eventsRule.EventsRuleTargetsEcsParametersNetworkConfiguration(
  aws_vpc_configuration: EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfiguration = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfiguration.property.awsVpcConfiguration">aws_vpc_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfiguration">EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#aws_vpc_configuration EventsRule#aws_vpc_configuration}. |

---

##### `aws_vpc_configuration`<sup>Optional</sup> <a name="aws_vpc_configuration" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfiguration.property.awsVpcConfiguration"></a>

```python
aws_vpc_configuration: EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfiguration">EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#aws_vpc_configuration EventsRule#aws_vpc_configuration}.

---

### EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfiguration <a name="EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfiguration" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import events_rule

eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfiguration(
  assign_public_ip: str = None,
  security_groups: typing.List[str] = None,
  subnets: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfiguration.property.assignPublicIp">assign_public_ip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#assign_public_ip EventsRule#assign_public_ip}. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfiguration.property.securityGroups">security_groups</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#security_groups EventsRule#security_groups}. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfiguration.property.subnets">subnets</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#subnets EventsRule#subnets}. |

---

##### `assign_public_ip`<sup>Optional</sup> <a name="assign_public_ip" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfiguration.property.assignPublicIp"></a>

```python
assign_public_ip: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#assign_public_ip EventsRule#assign_public_ip}.

---

##### `security_groups`<sup>Optional</sup> <a name="security_groups" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfiguration.property.securityGroups"></a>

```python
security_groups: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#security_groups EventsRule#security_groups}.

---

##### `subnets`<sup>Optional</sup> <a name="subnets" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfiguration.property.subnets"></a>

```python
subnets: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#subnets EventsRule#subnets}.

---

### EventsRuleTargetsEcsParametersPlacementConstraints <a name="EventsRuleTargetsEcsParametersPlacementConstraints" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraints.Initializer"></a>

```python
from cdktn_provider_awscc import events_rule

eventsRule.EventsRuleTargetsEcsParametersPlacementConstraints(
  expression: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraints.property.expression">expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#expression EventsRule#expression}. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraints.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#type EventsRule#type}. |

---

##### `expression`<sup>Optional</sup> <a name="expression" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraints.property.expression"></a>

```python
expression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#expression EventsRule#expression}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraints.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#type EventsRule#type}.

---

### EventsRuleTargetsEcsParametersPlacementStrategies <a name="EventsRuleTargetsEcsParametersPlacementStrategies" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategies.Initializer"></a>

```python
from cdktn_provider_awscc import events_rule

eventsRule.EventsRuleTargetsEcsParametersPlacementStrategies(
  field: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategies.property.field">field</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#field EventsRule#field}. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategies.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#type EventsRule#type}. |

---

##### `field`<sup>Optional</sup> <a name="field" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategies.property.field"></a>

```python
field: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#field EventsRule#field}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategies.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#type EventsRule#type}.

---

### EventsRuleTargetsEcsParametersTagListStruct <a name="EventsRuleTargetsEcsParametersTagListStruct" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStruct.Initializer"></a>

```python
from cdktn_provider_awscc import events_rule

eventsRule.EventsRuleTargetsEcsParametersTagListStruct(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStruct.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#key EventsRule#key}. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStruct.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#value EventsRule#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStruct.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#key EventsRule#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStruct.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#value EventsRule#value}.

---

### EventsRuleTargetsHttpParameters <a name="EventsRuleTargetsHttpParameters" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParameters.Initializer"></a>

```python
from cdktn_provider_awscc import events_rule

eventsRule.EventsRuleTargetsHttpParameters(
  header_parameters: typing.Mapping[str] = None,
  path_parameter_values: typing.List[str] = None,
  query_string_parameters: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParameters.property.headerParameters">header_parameters</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#header_parameters EventsRule#header_parameters}. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParameters.property.pathParameterValues">path_parameter_values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#path_parameter_values EventsRule#path_parameter_values}. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParameters.property.queryStringParameters">query_string_parameters</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#query_string_parameters EventsRule#query_string_parameters}. |

---

##### `header_parameters`<sup>Optional</sup> <a name="header_parameters" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParameters.property.headerParameters"></a>

```python
header_parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#header_parameters EventsRule#header_parameters}.

---

##### `path_parameter_values`<sup>Optional</sup> <a name="path_parameter_values" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParameters.property.pathParameterValues"></a>

```python
path_parameter_values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#path_parameter_values EventsRule#path_parameter_values}.

---

##### `query_string_parameters`<sup>Optional</sup> <a name="query_string_parameters" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParameters.property.queryStringParameters"></a>

```python
query_string_parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#query_string_parameters EventsRule#query_string_parameters}.

---

### EventsRuleTargetsInputTransformer <a name="EventsRuleTargetsInputTransformer" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformer.Initializer"></a>

```python
from cdktn_provider_awscc import events_rule

eventsRule.EventsRuleTargetsInputTransformer(
  input_paths_map: typing.Mapping[str] = None,
  input_template: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformer.property.inputPathsMap">input_paths_map</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#input_paths_map EventsRule#input_paths_map}. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformer.property.inputTemplate">input_template</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#input_template EventsRule#input_template}. |

---

##### `input_paths_map`<sup>Optional</sup> <a name="input_paths_map" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformer.property.inputPathsMap"></a>

```python
input_paths_map: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#input_paths_map EventsRule#input_paths_map}.

---

##### `input_template`<sup>Optional</sup> <a name="input_template" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformer.property.inputTemplate"></a>

```python
input_template: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#input_template EventsRule#input_template}.

---

### EventsRuleTargetsKinesisParameters <a name="EventsRuleTargetsKinesisParameters" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParameters.Initializer"></a>

```python
from cdktn_provider_awscc import events_rule

eventsRule.EventsRuleTargetsKinesisParameters(
  partition_key_path: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParameters.property.partitionKeyPath">partition_key_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#partition_key_path EventsRule#partition_key_path}. |

---

##### `partition_key_path`<sup>Optional</sup> <a name="partition_key_path" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParameters.property.partitionKeyPath"></a>

```python
partition_key_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#partition_key_path EventsRule#partition_key_path}.

---

### EventsRuleTargetsRedshiftDataParameters <a name="EventsRuleTargetsRedshiftDataParameters" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParameters.Initializer"></a>

```python
from cdktn_provider_awscc import events_rule

eventsRule.EventsRuleTargetsRedshiftDataParameters(
  database: str = None,
  db_user: str = None,
  secret_manager_arn: str = None,
  sql: str = None,
  sqls: typing.List[str] = None,
  statement_name: str = None,
  with_event: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParameters.property.database">database</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#database EventsRule#database}. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParameters.property.dbUser">db_user</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#db_user EventsRule#db_user}. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParameters.property.secretManagerArn">secret_manager_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#secret_manager_arn EventsRule#secret_manager_arn}. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParameters.property.sql">sql</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#sql EventsRule#sql}. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParameters.property.sqls">sqls</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#sqls EventsRule#sqls}. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParameters.property.statementName">statement_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#statement_name EventsRule#statement_name}. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParameters.property.withEvent">with_event</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#with_event EventsRule#with_event}. |

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParameters.property.database"></a>

```python
database: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#database EventsRule#database}.

---

##### `db_user`<sup>Optional</sup> <a name="db_user" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParameters.property.dbUser"></a>

```python
db_user: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#db_user EventsRule#db_user}.

---

##### `secret_manager_arn`<sup>Optional</sup> <a name="secret_manager_arn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParameters.property.secretManagerArn"></a>

```python
secret_manager_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#secret_manager_arn EventsRule#secret_manager_arn}.

---

##### `sql`<sup>Optional</sup> <a name="sql" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParameters.property.sql"></a>

```python
sql: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#sql EventsRule#sql}.

---

##### `sqls`<sup>Optional</sup> <a name="sqls" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParameters.property.sqls"></a>

```python
sqls: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#sqls EventsRule#sqls}.

---

##### `statement_name`<sup>Optional</sup> <a name="statement_name" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParameters.property.statementName"></a>

```python
statement_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#statement_name EventsRule#statement_name}.

---

##### `with_event`<sup>Optional</sup> <a name="with_event" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParameters.property.withEvent"></a>

```python
with_event: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#with_event EventsRule#with_event}.

---

### EventsRuleTargetsRetryPolicy <a name="EventsRuleTargetsRetryPolicy" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicy.Initializer"></a>

```python
from cdktn_provider_awscc import events_rule

eventsRule.EventsRuleTargetsRetryPolicy(
  maximum_event_age_in_seconds: typing.Union[int, float] = None,
  maximum_retry_attempts: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicy.property.maximumEventAgeInSeconds">maximum_event_age_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#maximum_event_age_in_seconds EventsRule#maximum_event_age_in_seconds}. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicy.property.maximumRetryAttempts">maximum_retry_attempts</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#maximum_retry_attempts EventsRule#maximum_retry_attempts}. |

---

##### `maximum_event_age_in_seconds`<sup>Optional</sup> <a name="maximum_event_age_in_seconds" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicy.property.maximumEventAgeInSeconds"></a>

```python
maximum_event_age_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#maximum_event_age_in_seconds EventsRule#maximum_event_age_in_seconds}.

---

##### `maximum_retry_attempts`<sup>Optional</sup> <a name="maximum_retry_attempts" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicy.property.maximumRetryAttempts"></a>

```python
maximum_retry_attempts: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#maximum_retry_attempts EventsRule#maximum_retry_attempts}.

---

### EventsRuleTargetsRunCommandParameters <a name="EventsRuleTargetsRunCommandParameters" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParameters.Initializer"></a>

```python
from cdktn_provider_awscc import events_rule

eventsRule.EventsRuleTargetsRunCommandParameters(
  run_command_targets: IResolvable | typing.List[EventsRuleTargetsRunCommandParametersRunCommandTargets] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParameters.property.runCommandTargets">run_command_targets</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargets">EventsRuleTargetsRunCommandParametersRunCommandTargets</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#run_command_targets EventsRule#run_command_targets}. |

---

##### `run_command_targets`<sup>Optional</sup> <a name="run_command_targets" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParameters.property.runCommandTargets"></a>

```python
run_command_targets: IResolvable | typing.List[EventsRuleTargetsRunCommandParametersRunCommandTargets]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargets">EventsRuleTargetsRunCommandParametersRunCommandTargets</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#run_command_targets EventsRule#run_command_targets}.

---

### EventsRuleTargetsRunCommandParametersRunCommandTargets <a name="EventsRuleTargetsRunCommandParametersRunCommandTargets" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargets.Initializer"></a>

```python
from cdktn_provider_awscc import events_rule

eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargets(
  key: str = None,
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargets.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#key EventsRule#key}. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargets.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#values EventsRule#values}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargets.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#key EventsRule#key}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargets.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#values EventsRule#values}.

---

### EventsRuleTargetsSageMakerPipelineParameters <a name="EventsRuleTargetsSageMakerPipelineParameters" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParameters.Initializer"></a>

```python
from cdktn_provider_awscc import events_rule

eventsRule.EventsRuleTargetsSageMakerPipelineParameters(
  pipeline_parameter_list: IResolvable | typing.List[EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStruct] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParameters.property.pipelineParameterList">pipeline_parameter_list</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStruct">EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStruct</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#pipeline_parameter_list EventsRule#pipeline_parameter_list}. |

---

##### `pipeline_parameter_list`<sup>Optional</sup> <a name="pipeline_parameter_list" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParameters.property.pipelineParameterList"></a>

```python
pipeline_parameter_list: IResolvable | typing.List[EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStruct]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStruct">EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStruct</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#pipeline_parameter_list EventsRule#pipeline_parameter_list}.

---

### EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStruct <a name="EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStruct" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStruct.Initializer"></a>

```python
from cdktn_provider_awscc import events_rule

eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStruct(
  name: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStruct.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#name EventsRule#name}. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStruct.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#value EventsRule#value}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStruct.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#name EventsRule#name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStruct.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#value EventsRule#value}.

---

### EventsRuleTargetsSqsParameters <a name="EventsRuleTargetsSqsParameters" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParameters.Initializer"></a>

```python
from cdktn_provider_awscc import events_rule

eventsRule.EventsRuleTargetsSqsParameters(
  message_group_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParameters.property.messageGroupId">message_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#message_group_id EventsRule#message_group_id}. |

---

##### `message_group_id`<sup>Optional</sup> <a name="message_group_id" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParameters.property.messageGroupId"></a>

```python
message_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#message_group_id EventsRule#message_group_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### EventsRuleTagsList <a name="EventsRuleTagsList" id="@cdktn/provider-awscc.eventsRule.EventsRuleTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsRule.EventsRuleTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import events_rule

eventsRule.EventsRuleTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.eventsRule.EventsRuleTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.eventsRule.EventsRuleTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.eventsRule.EventsRuleTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.eventsRule.EventsRuleTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsRule.EventsRuleTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsRule.EventsRuleTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eventsRule.EventsRuleTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.eventsRule.EventsRuleTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EventsRuleTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.eventsRule.EventsRuleTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTags">EventsRuleTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.eventsRule.EventsRuleTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.eventsRule.EventsRuleTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[EventsRuleTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTags">EventsRuleTags</a>]

---


### EventsRuleTagsOutputReference <a name="EventsRuleTagsOutputReference" id="@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import events_rule

eventsRule.EventsRuleTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTags">EventsRuleTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.eventsRule.EventsRuleTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EventsRuleTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTags">EventsRuleTags</a>

---


### EventsRuleTargetsAppSyncParametersOutputReference <a name="EventsRuleTargetsAppSyncParametersOutputReference" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import events_rule

eventsRule.EventsRuleTargetsAppSyncParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParametersOutputReference.resetGraphQlOperation">reset_graph_ql_operation</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_graph_ql_operation` <a name="reset_graph_ql_operation" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParametersOutputReference.resetGraphQlOperation"></a>

```python
def reset_graph_ql_operation() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParametersOutputReference.property.graphQlOperationInput">graph_ql_operation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParametersOutputReference.property.graphQlOperation">graph_ql_operation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParametersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParameters">EventsRuleTargetsAppSyncParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `graph_ql_operation_input`<sup>Optional</sup> <a name="graph_ql_operation_input" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParametersOutputReference.property.graphQlOperationInput"></a>

```python
graph_ql_operation_input: str
```

- *Type:* str

---

##### `graph_ql_operation`<sup>Required</sup> <a name="graph_ql_operation" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParametersOutputReference.property.graphQlOperation"></a>

```python
graph_ql_operation: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParametersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EventsRuleTargetsAppSyncParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParameters">EventsRuleTargetsAppSyncParameters</a>

---


### EventsRuleTargetsBatchParametersArrayPropertiesOutputReference <a name="EventsRuleTargetsBatchParametersArrayPropertiesOutputReference" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayPropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import events_rule

eventsRule.EventsRuleTargetsBatchParametersArrayPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayPropertiesOutputReference.resetSize">reset_size</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_size` <a name="reset_size" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayPropertiesOutputReference.resetSize"></a>

```python
def reset_size() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayPropertiesOutputReference.property.sizeInput">size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayPropertiesOutputReference.property.size">size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayProperties">EventsRuleTargetsBatchParametersArrayProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `size_input`<sup>Optional</sup> <a name="size_input" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayPropertiesOutputReference.property.sizeInput"></a>

```python
size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayPropertiesOutputReference.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EventsRuleTargetsBatchParametersArrayProperties
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayProperties">EventsRuleTargetsBatchParametersArrayProperties</a>

---


### EventsRuleTargetsBatchParametersOutputReference <a name="EventsRuleTargetsBatchParametersOutputReference" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import events_rule

eventsRule.EventsRuleTargetsBatchParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.putArrayProperties">put_array_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.putRetryStrategy">put_retry_strategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.resetArrayProperties">reset_array_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.resetJobDefinition">reset_job_definition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.resetJobName">reset_job_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.resetRetryStrategy">reset_retry_strategy</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_array_properties` <a name="put_array_properties" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.putArrayProperties"></a>

```python
def put_array_properties(
  size: typing.Union[int, float] = None
) -> None
```

###### `size`<sup>Optional</sup> <a name="size" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.putArrayProperties.parameter.size"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#size EventsRule#size}.

---

##### `put_retry_strategy` <a name="put_retry_strategy" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.putRetryStrategy"></a>

```python
def put_retry_strategy(
  attempts: typing.Union[int, float] = None
) -> None
```

###### `attempts`<sup>Optional</sup> <a name="attempts" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.putRetryStrategy.parameter.attempts"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#attempts EventsRule#attempts}.

---

##### `reset_array_properties` <a name="reset_array_properties" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.resetArrayProperties"></a>

```python
def reset_array_properties() -> None
```

##### `reset_job_definition` <a name="reset_job_definition" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.resetJobDefinition"></a>

```python
def reset_job_definition() -> None
```

##### `reset_job_name` <a name="reset_job_name" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.resetJobName"></a>

```python
def reset_job_name() -> None
```

##### `reset_retry_strategy` <a name="reset_retry_strategy" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.resetRetryStrategy"></a>

```python
def reset_retry_strategy() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.property.arrayProperties">array_properties</a></code> | <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayPropertiesOutputReference">EventsRuleTargetsBatchParametersArrayPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.property.retryStrategy">retry_strategy</a></code> | <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategyOutputReference">EventsRuleTargetsBatchParametersRetryStrategyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.property.arrayPropertiesInput">array_properties_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayProperties">EventsRuleTargetsBatchParametersArrayProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.property.jobDefinitionInput">job_definition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.property.jobNameInput">job_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.property.retryStrategyInput">retry_strategy_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategy">EventsRuleTargetsBatchParametersRetryStrategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.property.jobDefinition">job_definition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.property.jobName">job_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParameters">EventsRuleTargetsBatchParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `array_properties`<sup>Required</sup> <a name="array_properties" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.property.arrayProperties"></a>

```python
array_properties: EventsRuleTargetsBatchParametersArrayPropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayPropertiesOutputReference">EventsRuleTargetsBatchParametersArrayPropertiesOutputReference</a>

---

##### `retry_strategy`<sup>Required</sup> <a name="retry_strategy" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.property.retryStrategy"></a>

```python
retry_strategy: EventsRuleTargetsBatchParametersRetryStrategyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategyOutputReference">EventsRuleTargetsBatchParametersRetryStrategyOutputReference</a>

---

##### `array_properties_input`<sup>Optional</sup> <a name="array_properties_input" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.property.arrayPropertiesInput"></a>

```python
array_properties_input: IResolvable | EventsRuleTargetsBatchParametersArrayProperties
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayProperties">EventsRuleTargetsBatchParametersArrayProperties</a>

---

##### `job_definition_input`<sup>Optional</sup> <a name="job_definition_input" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.property.jobDefinitionInput"></a>

```python
job_definition_input: str
```

- *Type:* str

---

##### `job_name_input`<sup>Optional</sup> <a name="job_name_input" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.property.jobNameInput"></a>

```python
job_name_input: str
```

- *Type:* str

---

##### `retry_strategy_input`<sup>Optional</sup> <a name="retry_strategy_input" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.property.retryStrategyInput"></a>

```python
retry_strategy_input: IResolvable | EventsRuleTargetsBatchParametersRetryStrategy
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategy">EventsRuleTargetsBatchParametersRetryStrategy</a>

---

##### `job_definition`<sup>Required</sup> <a name="job_definition" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.property.jobDefinition"></a>

```python
job_definition: str
```

- *Type:* str

---

##### `job_name`<sup>Required</sup> <a name="job_name" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.property.jobName"></a>

```python
job_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EventsRuleTargetsBatchParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParameters">EventsRuleTargetsBatchParameters</a>

---


### EventsRuleTargetsBatchParametersRetryStrategyOutputReference <a name="EventsRuleTargetsBatchParametersRetryStrategyOutputReference" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import events_rule

eventsRule.EventsRuleTargetsBatchParametersRetryStrategyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategyOutputReference.resetAttempts">reset_attempts</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_attempts` <a name="reset_attempts" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategyOutputReference.resetAttempts"></a>

```python
def reset_attempts() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategyOutputReference.property.attemptsInput">attempts_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategyOutputReference.property.attempts">attempts</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategyOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategy">EventsRuleTargetsBatchParametersRetryStrategy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attempts_input`<sup>Optional</sup> <a name="attempts_input" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategyOutputReference.property.attemptsInput"></a>

```python
attempts_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `attempts`<sup>Required</sup> <a name="attempts" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategyOutputReference.property.attempts"></a>

```python
attempts: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategyOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EventsRuleTargetsBatchParametersRetryStrategy
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategy">EventsRuleTargetsBatchParametersRetryStrategy</a>

---


### EventsRuleTargetsDeadLetterConfigOutputReference <a name="EventsRuleTargetsDeadLetterConfigOutputReference" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import events_rule

eventsRule.EventsRuleTargetsDeadLetterConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfigOutputReference.resetArn">reset_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_arn` <a name="reset_arn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfigOutputReference.resetArn"></a>

```python
def reset_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfigOutputReference.property.arnInput">arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfigOutputReference.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfig">EventsRuleTargetsDeadLetterConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `arn_input`<sup>Optional</sup> <a name="arn_input" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfigOutputReference.property.arnInput"></a>

```python
arn_input: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfigOutputReference.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EventsRuleTargetsDeadLetterConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfig">EventsRuleTargetsDeadLetterConfig</a>

---


### EventsRuleTargetsEcsParametersCapacityProviderStrategyList <a name="EventsRuleTargetsEcsParametersCapacityProviderStrategyList" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyList.Initializer"></a>

```python
from cdktn_provider_awscc import events_rule

eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategy">EventsRuleTargetsEcsParametersCapacityProviderStrategy</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[EventsRuleTargetsEcsParametersCapacityProviderStrategy]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategy">EventsRuleTargetsEcsParametersCapacityProviderStrategy</a>]

---


### EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference <a name="EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import events_rule

eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.resetBase">reset_base</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.resetCapacityProvider">reset_capacity_provider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.resetWeight">reset_weight</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_base` <a name="reset_base" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.resetBase"></a>

```python
def reset_base() -> None
```

##### `reset_capacity_provider` <a name="reset_capacity_provider" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.resetCapacityProvider"></a>

```python
def reset_capacity_provider() -> None
```

##### `reset_weight` <a name="reset_weight" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.resetWeight"></a>

```python
def reset_weight() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.property.baseInput">base_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.property.capacityProviderInput">capacity_provider_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.property.weightInput">weight_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.property.base">base</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.property.capacityProvider">capacity_provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategy">EventsRuleTargetsEcsParametersCapacityProviderStrategy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `base_input`<sup>Optional</sup> <a name="base_input" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.property.baseInput"></a>

```python
base_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `capacity_provider_input`<sup>Optional</sup> <a name="capacity_provider_input" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.property.capacityProviderInput"></a>

```python
capacity_provider_input: str
```

- *Type:* str

---

##### `weight_input`<sup>Optional</sup> <a name="weight_input" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.property.weightInput"></a>

```python
weight_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `base`<sup>Required</sup> <a name="base" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.property.base"></a>

```python
base: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `capacity_provider`<sup>Required</sup> <a name="capacity_provider" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.property.capacityProvider"></a>

```python
capacity_provider: str
```

- *Type:* str

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EventsRuleTargetsEcsParametersCapacityProviderStrategy
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategy">EventsRuleTargetsEcsParametersCapacityProviderStrategy</a>

---


### EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference <a name="EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import events_rule

eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.resetAssignPublicIp">reset_assign_public_ip</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.resetSecurityGroups">reset_security_groups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.resetSubnets">reset_subnets</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_assign_public_ip` <a name="reset_assign_public_ip" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.resetAssignPublicIp"></a>

```python
def reset_assign_public_ip() -> None
```

##### `reset_security_groups` <a name="reset_security_groups" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.resetSecurityGroups"></a>

```python
def reset_security_groups() -> None
```

##### `reset_subnets` <a name="reset_subnets" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.resetSubnets"></a>

```python
def reset_subnets() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.property.assignPublicIpInput">assign_public_ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.property.securityGroupsInput">security_groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.property.subnetsInput">subnets_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.property.assignPublicIp">assign_public_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.property.securityGroups">security_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.property.subnets">subnets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfiguration">EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `assign_public_ip_input`<sup>Optional</sup> <a name="assign_public_ip_input" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.property.assignPublicIpInput"></a>

```python
assign_public_ip_input: str
```

- *Type:* str

---

##### `security_groups_input`<sup>Optional</sup> <a name="security_groups_input" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.property.securityGroupsInput"></a>

```python
security_groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnets_input`<sup>Optional</sup> <a name="subnets_input" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.property.subnetsInput"></a>

```python
subnets_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `assign_public_ip`<sup>Required</sup> <a name="assign_public_ip" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.property.assignPublicIp"></a>

```python
assign_public_ip: str
```

- *Type:* str

---

##### `security_groups`<sup>Required</sup> <a name="security_groups" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.property.securityGroups"></a>

```python
security_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.property.subnets"></a>

```python
subnets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfiguration">EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfiguration</a>

---


### EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference <a name="EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import events_rule

eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.putAwsVpcConfiguration">put_aws_vpc_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.resetAwsVpcConfiguration">reset_aws_vpc_configuration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_aws_vpc_configuration` <a name="put_aws_vpc_configuration" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.putAwsVpcConfiguration"></a>

```python
def put_aws_vpc_configuration(
  assign_public_ip: str = None,
  security_groups: typing.List[str] = None,
  subnets: typing.List[str] = None
) -> None
```

###### `assign_public_ip`<sup>Optional</sup> <a name="assign_public_ip" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.putAwsVpcConfiguration.parameter.assignPublicIp"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#assign_public_ip EventsRule#assign_public_ip}.

---

###### `security_groups`<sup>Optional</sup> <a name="security_groups" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.putAwsVpcConfiguration.parameter.securityGroups"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#security_groups EventsRule#security_groups}.

---

###### `subnets`<sup>Optional</sup> <a name="subnets" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.putAwsVpcConfiguration.parameter.subnets"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#subnets EventsRule#subnets}.

---

##### `reset_aws_vpc_configuration` <a name="reset_aws_vpc_configuration" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.resetAwsVpcConfiguration"></a>

```python
def reset_aws_vpc_configuration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.property.awsVpcConfiguration">aws_vpc_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference">EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.property.awsVpcConfigurationInput">aws_vpc_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfiguration">EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfiguration">EventsRuleTargetsEcsParametersNetworkConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aws_vpc_configuration`<sup>Required</sup> <a name="aws_vpc_configuration" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.property.awsVpcConfiguration"></a>

```python
aws_vpc_configuration: EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference">EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference</a>

---

##### `aws_vpc_configuration_input`<sup>Optional</sup> <a name="aws_vpc_configuration_input" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.property.awsVpcConfigurationInput"></a>

```python
aws_vpc_configuration_input: IResolvable | EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfiguration">EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfiguration</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EventsRuleTargetsEcsParametersNetworkConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfiguration">EventsRuleTargetsEcsParametersNetworkConfiguration</a>

---


### EventsRuleTargetsEcsParametersOutputReference <a name="EventsRuleTargetsEcsParametersOutputReference" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import events_rule

eventsRule.EventsRuleTargetsEcsParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.putCapacityProviderStrategy">put_capacity_provider_strategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.putNetworkConfiguration">put_network_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.putPlacementConstraints">put_placement_constraints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.putPlacementStrategies">put_placement_strategies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.putTagList">put_tag_list</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.resetCapacityProviderStrategy">reset_capacity_provider_strategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.resetEnableEcsManagedTags">reset_enable_ecs_managed_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.resetEnableExecuteCommand">reset_enable_execute_command</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.resetGroup">reset_group</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.resetLaunchType">reset_launch_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.resetNetworkConfiguration">reset_network_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.resetPlacementConstraints">reset_placement_constraints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.resetPlacementStrategies">reset_placement_strategies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.resetPlatformVersion">reset_platform_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.resetPropagateTags">reset_propagate_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.resetReferenceId">reset_reference_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.resetTagList">reset_tag_list</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.resetTaskCount">reset_task_count</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.resetTaskDefinitionArn">reset_task_definition_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_capacity_provider_strategy` <a name="put_capacity_provider_strategy" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.putCapacityProviderStrategy"></a>

```python
def put_capacity_provider_strategy(
  value: IResolvable | typing.List[EventsRuleTargetsEcsParametersCapacityProviderStrategy]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.putCapacityProviderStrategy.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategy">EventsRuleTargetsEcsParametersCapacityProviderStrategy</a>]

---

##### `put_network_configuration` <a name="put_network_configuration" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.putNetworkConfiguration"></a>

```python
def put_network_configuration(
  aws_vpc_configuration: EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfiguration = None
) -> None
```

###### `aws_vpc_configuration`<sup>Optional</sup> <a name="aws_vpc_configuration" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.putNetworkConfiguration.parameter.awsVpcConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfiguration">EventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#aws_vpc_configuration EventsRule#aws_vpc_configuration}.

---

##### `put_placement_constraints` <a name="put_placement_constraints" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.putPlacementConstraints"></a>

```python
def put_placement_constraints(
  value: IResolvable | typing.List[EventsRuleTargetsEcsParametersPlacementConstraints]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.putPlacementConstraints.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraints">EventsRuleTargetsEcsParametersPlacementConstraints</a>]

---

##### `put_placement_strategies` <a name="put_placement_strategies" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.putPlacementStrategies"></a>

```python
def put_placement_strategies(
  value: IResolvable | typing.List[EventsRuleTargetsEcsParametersPlacementStrategies]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.putPlacementStrategies.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategies">EventsRuleTargetsEcsParametersPlacementStrategies</a>]

---

##### `put_tag_list` <a name="put_tag_list" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.putTagList"></a>

```python
def put_tag_list(
  value: IResolvable | typing.List[EventsRuleTargetsEcsParametersTagListStruct]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.putTagList.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStruct">EventsRuleTargetsEcsParametersTagListStruct</a>]

---

##### `reset_capacity_provider_strategy` <a name="reset_capacity_provider_strategy" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.resetCapacityProviderStrategy"></a>

```python
def reset_capacity_provider_strategy() -> None
```

##### `reset_enable_ecs_managed_tags` <a name="reset_enable_ecs_managed_tags" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.resetEnableEcsManagedTags"></a>

```python
def reset_enable_ecs_managed_tags() -> None
```

##### `reset_enable_execute_command` <a name="reset_enable_execute_command" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.resetEnableExecuteCommand"></a>

```python
def reset_enable_execute_command() -> None
```

##### `reset_group` <a name="reset_group" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.resetGroup"></a>

```python
def reset_group() -> None
```

##### `reset_launch_type` <a name="reset_launch_type" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.resetLaunchType"></a>

```python
def reset_launch_type() -> None
```

##### `reset_network_configuration` <a name="reset_network_configuration" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.resetNetworkConfiguration"></a>

```python
def reset_network_configuration() -> None
```

##### `reset_placement_constraints` <a name="reset_placement_constraints" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.resetPlacementConstraints"></a>

```python
def reset_placement_constraints() -> None
```

##### `reset_placement_strategies` <a name="reset_placement_strategies" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.resetPlacementStrategies"></a>

```python
def reset_placement_strategies() -> None
```

##### `reset_platform_version` <a name="reset_platform_version" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.resetPlatformVersion"></a>

```python
def reset_platform_version() -> None
```

##### `reset_propagate_tags` <a name="reset_propagate_tags" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.resetPropagateTags"></a>

```python
def reset_propagate_tags() -> None
```

##### `reset_reference_id` <a name="reset_reference_id" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.resetReferenceId"></a>

```python
def reset_reference_id() -> None
```

##### `reset_tag_list` <a name="reset_tag_list" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.resetTagList"></a>

```python
def reset_tag_list() -> None
```

##### `reset_task_count` <a name="reset_task_count" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.resetTaskCount"></a>

```python
def reset_task_count() -> None
```

##### `reset_task_definition_arn` <a name="reset_task_definition_arn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.resetTaskDefinitionArn"></a>

```python
def reset_task_definition_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.property.capacityProviderStrategy">capacity_provider_strategy</a></code> | <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyList">EventsRuleTargetsEcsParametersCapacityProviderStrategyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.property.networkConfiguration">network_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference">EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.property.placementConstraints">placement_constraints</a></code> | <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsList">EventsRuleTargetsEcsParametersPlacementConstraintsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.property.placementStrategies">placement_strategies</a></code> | <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesList">EventsRuleTargetsEcsParametersPlacementStrategiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.property.tagList">tag_list</a></code> | <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructList">EventsRuleTargetsEcsParametersTagListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.property.capacityProviderStrategyInput">capacity_provider_strategy_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategy">EventsRuleTargetsEcsParametersCapacityProviderStrategy</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.property.enableEcsManagedTagsInput">enable_ecs_managed_tags_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.property.enableExecuteCommandInput">enable_execute_command_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.property.groupInput">group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.property.launchTypeInput">launch_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.property.networkConfigurationInput">network_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfiguration">EventsRuleTargetsEcsParametersNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.property.placementConstraintsInput">placement_constraints_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraints">EventsRuleTargetsEcsParametersPlacementConstraints</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.property.placementStrategiesInput">placement_strategies_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategies">EventsRuleTargetsEcsParametersPlacementStrategies</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.property.platformVersionInput">platform_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.property.propagateTagsInput">propagate_tags_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.property.referenceIdInput">reference_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.property.tagListInput">tag_list_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStruct">EventsRuleTargetsEcsParametersTagListStruct</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.property.taskCountInput">task_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.property.taskDefinitionArnInput">task_definition_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.property.enableEcsManagedTags">enable_ecs_managed_tags</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.property.enableExecuteCommand">enable_execute_command</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.property.group">group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.property.launchType">launch_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.property.platformVersion">platform_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.property.propagateTags">propagate_tags</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.property.referenceId">reference_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.property.taskCount">task_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.property.taskDefinitionArn">task_definition_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParameters">EventsRuleTargetsEcsParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `capacity_provider_strategy`<sup>Required</sup> <a name="capacity_provider_strategy" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.property.capacityProviderStrategy"></a>

```python
capacity_provider_strategy: EventsRuleTargetsEcsParametersCapacityProviderStrategyList
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategyList">EventsRuleTargetsEcsParametersCapacityProviderStrategyList</a>

---

##### `network_configuration`<sup>Required</sup> <a name="network_configuration" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.property.networkConfiguration"></a>

```python
network_configuration: EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference">EventsRuleTargetsEcsParametersNetworkConfigurationOutputReference</a>

---

##### `placement_constraints`<sup>Required</sup> <a name="placement_constraints" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.property.placementConstraints"></a>

```python
placement_constraints: EventsRuleTargetsEcsParametersPlacementConstraintsList
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsList">EventsRuleTargetsEcsParametersPlacementConstraintsList</a>

---

##### `placement_strategies`<sup>Required</sup> <a name="placement_strategies" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.property.placementStrategies"></a>

```python
placement_strategies: EventsRuleTargetsEcsParametersPlacementStrategiesList
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesList">EventsRuleTargetsEcsParametersPlacementStrategiesList</a>

---

##### `tag_list`<sup>Required</sup> <a name="tag_list" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.property.tagList"></a>

```python
tag_list: EventsRuleTargetsEcsParametersTagListStructList
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructList">EventsRuleTargetsEcsParametersTagListStructList</a>

---

##### `capacity_provider_strategy_input`<sup>Optional</sup> <a name="capacity_provider_strategy_input" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.property.capacityProviderStrategyInput"></a>

```python
capacity_provider_strategy_input: IResolvable | typing.List[EventsRuleTargetsEcsParametersCapacityProviderStrategy]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategy">EventsRuleTargetsEcsParametersCapacityProviderStrategy</a>]

---

##### `enable_ecs_managed_tags_input`<sup>Optional</sup> <a name="enable_ecs_managed_tags_input" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.property.enableEcsManagedTagsInput"></a>

```python
enable_ecs_managed_tags_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_execute_command_input`<sup>Optional</sup> <a name="enable_execute_command_input" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.property.enableExecuteCommandInput"></a>

```python
enable_execute_command_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `group_input`<sup>Optional</sup> <a name="group_input" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.property.groupInput"></a>

```python
group_input: str
```

- *Type:* str

---

##### `launch_type_input`<sup>Optional</sup> <a name="launch_type_input" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.property.launchTypeInput"></a>

```python
launch_type_input: str
```

- *Type:* str

---

##### `network_configuration_input`<sup>Optional</sup> <a name="network_configuration_input" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.property.networkConfigurationInput"></a>

```python
network_configuration_input: IResolvable | EventsRuleTargetsEcsParametersNetworkConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfiguration">EventsRuleTargetsEcsParametersNetworkConfiguration</a>

---

##### `placement_constraints_input`<sup>Optional</sup> <a name="placement_constraints_input" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.property.placementConstraintsInput"></a>

```python
placement_constraints_input: IResolvable | typing.List[EventsRuleTargetsEcsParametersPlacementConstraints]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraints">EventsRuleTargetsEcsParametersPlacementConstraints</a>]

---

##### `placement_strategies_input`<sup>Optional</sup> <a name="placement_strategies_input" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.property.placementStrategiesInput"></a>

```python
placement_strategies_input: IResolvable | typing.List[EventsRuleTargetsEcsParametersPlacementStrategies]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategies">EventsRuleTargetsEcsParametersPlacementStrategies</a>]

---

##### `platform_version_input`<sup>Optional</sup> <a name="platform_version_input" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.property.platformVersionInput"></a>

```python
platform_version_input: str
```

- *Type:* str

---

##### `propagate_tags_input`<sup>Optional</sup> <a name="propagate_tags_input" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.property.propagateTagsInput"></a>

```python
propagate_tags_input: str
```

- *Type:* str

---

##### `reference_id_input`<sup>Optional</sup> <a name="reference_id_input" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.property.referenceIdInput"></a>

```python
reference_id_input: str
```

- *Type:* str

---

##### `tag_list_input`<sup>Optional</sup> <a name="tag_list_input" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.property.tagListInput"></a>

```python
tag_list_input: IResolvable | typing.List[EventsRuleTargetsEcsParametersTagListStruct]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStruct">EventsRuleTargetsEcsParametersTagListStruct</a>]

---

##### `task_count_input`<sup>Optional</sup> <a name="task_count_input" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.property.taskCountInput"></a>

```python
task_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `task_definition_arn_input`<sup>Optional</sup> <a name="task_definition_arn_input" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.property.taskDefinitionArnInput"></a>

```python
task_definition_arn_input: str
```

- *Type:* str

---

##### `enable_ecs_managed_tags`<sup>Required</sup> <a name="enable_ecs_managed_tags" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.property.enableEcsManagedTags"></a>

```python
enable_ecs_managed_tags: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_execute_command`<sup>Required</sup> <a name="enable_execute_command" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.property.enableExecuteCommand"></a>

```python
enable_execute_command: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.property.group"></a>

```python
group: str
```

- *Type:* str

---

##### `launch_type`<sup>Required</sup> <a name="launch_type" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.property.launchType"></a>

```python
launch_type: str
```

- *Type:* str

---

##### `platform_version`<sup>Required</sup> <a name="platform_version" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.property.platformVersion"></a>

```python
platform_version: str
```

- *Type:* str

---

##### `propagate_tags`<sup>Required</sup> <a name="propagate_tags" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.property.propagateTags"></a>

```python
propagate_tags: str
```

- *Type:* str

---

##### `reference_id`<sup>Required</sup> <a name="reference_id" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.property.referenceId"></a>

```python
reference_id: str
```

- *Type:* str

---

##### `task_count`<sup>Required</sup> <a name="task_count" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.property.taskCount"></a>

```python
task_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `task_definition_arn`<sup>Required</sup> <a name="task_definition_arn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.property.taskDefinitionArn"></a>

```python
task_definition_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EventsRuleTargetsEcsParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParameters">EventsRuleTargetsEcsParameters</a>

---


### EventsRuleTargetsEcsParametersPlacementConstraintsList <a name="EventsRuleTargetsEcsParametersPlacementConstraintsList" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsList.Initializer"></a>

```python
from cdktn_provider_awscc import events_rule

eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraints">EventsRuleTargetsEcsParametersPlacementConstraints</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[EventsRuleTargetsEcsParametersPlacementConstraints]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraints">EventsRuleTargetsEcsParametersPlacementConstraints</a>]

---


### EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference <a name="EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import events_rule

eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.resetExpression">reset_expression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_expression` <a name="reset_expression" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.resetExpression"></a>

```python
def reset_expression() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraints">EventsRuleTargetsEcsParametersPlacementConstraints</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EventsRuleTargetsEcsParametersPlacementConstraints
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraints">EventsRuleTargetsEcsParametersPlacementConstraints</a>

---


### EventsRuleTargetsEcsParametersPlacementStrategiesList <a name="EventsRuleTargetsEcsParametersPlacementStrategiesList" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesList.Initializer"></a>

```python
from cdktn_provider_awscc import events_rule

eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategies">EventsRuleTargetsEcsParametersPlacementStrategies</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[EventsRuleTargetsEcsParametersPlacementStrategies]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategies">EventsRuleTargetsEcsParametersPlacementStrategies</a>]

---


### EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference <a name="EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import events_rule

eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.resetField">reset_field</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_field` <a name="reset_field" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.resetField"></a>

```python
def reset_field() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.property.fieldInput">field_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.property.field">field</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategies">EventsRuleTargetsEcsParametersPlacementStrategies</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `field_input`<sup>Optional</sup> <a name="field_input" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.property.fieldInput"></a>

```python
field_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.property.field"></a>

```python
field: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EventsRuleTargetsEcsParametersPlacementStrategies
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategies">EventsRuleTargetsEcsParametersPlacementStrategies</a>

---


### EventsRuleTargetsEcsParametersTagListStructList <a name="EventsRuleTargetsEcsParametersTagListStructList" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructList.Initializer"></a>

```python
from cdktn_provider_awscc import events_rule

eventsRule.EventsRuleTargetsEcsParametersTagListStructList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EventsRuleTargetsEcsParametersTagListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStruct">EventsRuleTargetsEcsParametersTagListStruct</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[EventsRuleTargetsEcsParametersTagListStruct]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStruct">EventsRuleTargetsEcsParametersTagListStruct</a>]

---


### EventsRuleTargetsEcsParametersTagListStructOutputReference <a name="EventsRuleTargetsEcsParametersTagListStructOutputReference" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import events_rule

eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStruct">EventsRuleTargetsEcsParametersTagListStruct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStructOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EventsRuleTargetsEcsParametersTagListStruct
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStruct">EventsRuleTargetsEcsParametersTagListStruct</a>

---


### EventsRuleTargetsHttpParametersOutputReference <a name="EventsRuleTargetsHttpParametersOutputReference" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import events_rule

eventsRule.EventsRuleTargetsHttpParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.resetHeaderParameters">reset_header_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.resetPathParameterValues">reset_path_parameter_values</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.resetQueryStringParameters">reset_query_string_parameters</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_header_parameters` <a name="reset_header_parameters" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.resetHeaderParameters"></a>

```python
def reset_header_parameters() -> None
```

##### `reset_path_parameter_values` <a name="reset_path_parameter_values" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.resetPathParameterValues"></a>

```python
def reset_path_parameter_values() -> None
```

##### `reset_query_string_parameters` <a name="reset_query_string_parameters" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.resetQueryStringParameters"></a>

```python
def reset_query_string_parameters() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.property.headerParametersInput">header_parameters_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.property.pathParameterValuesInput">path_parameter_values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.property.queryStringParametersInput">query_string_parameters_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.property.headerParameters">header_parameters</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.property.pathParameterValues">path_parameter_values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.property.queryStringParameters">query_string_parameters</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParameters">EventsRuleTargetsHttpParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `header_parameters_input`<sup>Optional</sup> <a name="header_parameters_input" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.property.headerParametersInput"></a>

```python
header_parameters_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `path_parameter_values_input`<sup>Optional</sup> <a name="path_parameter_values_input" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.property.pathParameterValuesInput"></a>

```python
path_parameter_values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `query_string_parameters_input`<sup>Optional</sup> <a name="query_string_parameters_input" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.property.queryStringParametersInput"></a>

```python
query_string_parameters_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `header_parameters`<sup>Required</sup> <a name="header_parameters" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.property.headerParameters"></a>

```python
header_parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `path_parameter_values`<sup>Required</sup> <a name="path_parameter_values" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.property.pathParameterValues"></a>

```python
path_parameter_values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `query_string_parameters`<sup>Required</sup> <a name="query_string_parameters" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.property.queryStringParameters"></a>

```python
query_string_parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EventsRuleTargetsHttpParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParameters">EventsRuleTargetsHttpParameters</a>

---


### EventsRuleTargetsInputTransformerOutputReference <a name="EventsRuleTargetsInputTransformerOutputReference" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformerOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import events_rule

eventsRule.EventsRuleTargetsInputTransformerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformerOutputReference.resetInputPathsMap">reset_input_paths_map</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformerOutputReference.resetInputTemplate">reset_input_template</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_input_paths_map` <a name="reset_input_paths_map" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformerOutputReference.resetInputPathsMap"></a>

```python
def reset_input_paths_map() -> None
```

##### `reset_input_template` <a name="reset_input_template" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformerOutputReference.resetInputTemplate"></a>

```python
def reset_input_template() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformerOutputReference.property.inputPathsMapInput">input_paths_map_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformerOutputReference.property.inputTemplateInput">input_template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformerOutputReference.property.inputPathsMap">input_paths_map</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformerOutputReference.property.inputTemplate">input_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformerOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformer">EventsRuleTargetsInputTransformer</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `input_paths_map_input`<sup>Optional</sup> <a name="input_paths_map_input" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformerOutputReference.property.inputPathsMapInput"></a>

```python
input_paths_map_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `input_template_input`<sup>Optional</sup> <a name="input_template_input" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformerOutputReference.property.inputTemplateInput"></a>

```python
input_template_input: str
```

- *Type:* str

---

##### `input_paths_map`<sup>Required</sup> <a name="input_paths_map" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformerOutputReference.property.inputPathsMap"></a>

```python
input_paths_map: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `input_template`<sup>Required</sup> <a name="input_template" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformerOutputReference.property.inputTemplate"></a>

```python
input_template: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformerOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EventsRuleTargetsInputTransformer
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformer">EventsRuleTargetsInputTransformer</a>

---


### EventsRuleTargetsKinesisParametersOutputReference <a name="EventsRuleTargetsKinesisParametersOutputReference" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import events_rule

eventsRule.EventsRuleTargetsKinesisParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParametersOutputReference.resetPartitionKeyPath">reset_partition_key_path</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_partition_key_path` <a name="reset_partition_key_path" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParametersOutputReference.resetPartitionKeyPath"></a>

```python
def reset_partition_key_path() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParametersOutputReference.property.partitionKeyPathInput">partition_key_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParametersOutputReference.property.partitionKeyPath">partition_key_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParametersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParameters">EventsRuleTargetsKinesisParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `partition_key_path_input`<sup>Optional</sup> <a name="partition_key_path_input" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParametersOutputReference.property.partitionKeyPathInput"></a>

```python
partition_key_path_input: str
```

- *Type:* str

---

##### `partition_key_path`<sup>Required</sup> <a name="partition_key_path" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParametersOutputReference.property.partitionKeyPath"></a>

```python
partition_key_path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParametersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EventsRuleTargetsKinesisParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParameters">EventsRuleTargetsKinesisParameters</a>

---


### EventsRuleTargetsList <a name="EventsRuleTargetsList" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsList.Initializer"></a>

```python
from cdktn_provider_awscc import events_rule

eventsRule.EventsRuleTargetsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EventsRuleTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargets">EventsRuleTargets</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[EventsRuleTargets]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargets">EventsRuleTargets</a>]

---


### EventsRuleTargetsOutputReference <a name="EventsRuleTargetsOutputReference" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import events_rule

eventsRule.EventsRuleTargetsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.putAppSyncParameters">put_app_sync_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.putBatchParameters">put_batch_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.putDeadLetterConfig">put_dead_letter_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.putEcsParameters">put_ecs_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.putHttpParameters">put_http_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.putInputTransformer">put_input_transformer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.putKinesisParameters">put_kinesis_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.putRedshiftDataParameters">put_redshift_data_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.putRetryPolicy">put_retry_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.putRunCommandParameters">put_run_command_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.putSageMakerPipelineParameters">put_sage_maker_pipeline_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.putSqsParameters">put_sqs_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.resetAppSyncParameters">reset_app_sync_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.resetArn">reset_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.resetBatchParameters">reset_batch_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.resetDeadLetterConfig">reset_dead_letter_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.resetEcsParameters">reset_ecs_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.resetHttpParameters">reset_http_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.resetInput">reset_input</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.resetInputPath">reset_input_path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.resetInputTransformer">reset_input_transformer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.resetKinesisParameters">reset_kinesis_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.resetRedshiftDataParameters">reset_redshift_data_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.resetRetryPolicy">reset_retry_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.resetRoleArn">reset_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.resetRunCommandParameters">reset_run_command_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.resetSageMakerPipelineParameters">reset_sage_maker_pipeline_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.resetSqsParameters">reset_sqs_parameters</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_app_sync_parameters` <a name="put_app_sync_parameters" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.putAppSyncParameters"></a>

```python
def put_app_sync_parameters(
  graph_ql_operation: str = None
) -> None
```

###### `graph_ql_operation`<sup>Optional</sup> <a name="graph_ql_operation" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.putAppSyncParameters.parameter.graphQlOperation"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#graph_ql_operation EventsRule#graph_ql_operation}.

---

##### `put_batch_parameters` <a name="put_batch_parameters" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.putBatchParameters"></a>

```python
def put_batch_parameters(
  array_properties: EventsRuleTargetsBatchParametersArrayProperties = None,
  job_definition: str = None,
  job_name: str = None,
  retry_strategy: EventsRuleTargetsBatchParametersRetryStrategy = None
) -> None
```

###### `array_properties`<sup>Optional</sup> <a name="array_properties" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.putBatchParameters.parameter.arrayProperties"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersArrayProperties">EventsRuleTargetsBatchParametersArrayProperties</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#array_properties EventsRule#array_properties}.

---

###### `job_definition`<sup>Optional</sup> <a name="job_definition" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.putBatchParameters.parameter.jobDefinition"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#job_definition EventsRule#job_definition}.

---

###### `job_name`<sup>Optional</sup> <a name="job_name" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.putBatchParameters.parameter.jobName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#job_name EventsRule#job_name}.

---

###### `retry_strategy`<sup>Optional</sup> <a name="retry_strategy" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.putBatchParameters.parameter.retryStrategy"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersRetryStrategy">EventsRuleTargetsBatchParametersRetryStrategy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#retry_strategy EventsRule#retry_strategy}.

---

##### `put_dead_letter_config` <a name="put_dead_letter_config" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.putDeadLetterConfig"></a>

```python
def put_dead_letter_config(
  arn: str = None
) -> None
```

###### `arn`<sup>Optional</sup> <a name="arn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.putDeadLetterConfig.parameter.arn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#arn EventsRule#arn}.

---

##### `put_ecs_parameters` <a name="put_ecs_parameters" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.putEcsParameters"></a>

```python
def put_ecs_parameters(
  capacity_provider_strategy: IResolvable | typing.List[EventsRuleTargetsEcsParametersCapacityProviderStrategy] = None,
  enable_ecs_managed_tags: bool | IResolvable = None,
  enable_execute_command: bool | IResolvable = None,
  group: str = None,
  launch_type: str = None,
  network_configuration: EventsRuleTargetsEcsParametersNetworkConfiguration = None,
  placement_constraints: IResolvable | typing.List[EventsRuleTargetsEcsParametersPlacementConstraints] = None,
  placement_strategies: IResolvable | typing.List[EventsRuleTargetsEcsParametersPlacementStrategies] = None,
  platform_version: str = None,
  propagate_tags: str = None,
  reference_id: str = None,
  tag_list: IResolvable | typing.List[EventsRuleTargetsEcsParametersTagListStruct] = None,
  task_count: typing.Union[int, float] = None,
  task_definition_arn: str = None
) -> None
```

###### `capacity_provider_strategy`<sup>Optional</sup> <a name="capacity_provider_strategy" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.putEcsParameters.parameter.capacityProviderStrategy"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersCapacityProviderStrategy">EventsRuleTargetsEcsParametersCapacityProviderStrategy</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#capacity_provider_strategy EventsRule#capacity_provider_strategy}.

---

###### `enable_ecs_managed_tags`<sup>Optional</sup> <a name="enable_ecs_managed_tags" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.putEcsParameters.parameter.enableEcsManagedTags"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#enable_ecs_managed_tags EventsRule#enable_ecs_managed_tags}.

---

###### `enable_execute_command`<sup>Optional</sup> <a name="enable_execute_command" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.putEcsParameters.parameter.enableExecuteCommand"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#enable_execute_command EventsRule#enable_execute_command}.

---

###### `group`<sup>Optional</sup> <a name="group" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.putEcsParameters.parameter.group"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#group EventsRule#group}.

---

###### `launch_type`<sup>Optional</sup> <a name="launch_type" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.putEcsParameters.parameter.launchType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#launch_type EventsRule#launch_type}.

---

###### `network_configuration`<sup>Optional</sup> <a name="network_configuration" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.putEcsParameters.parameter.networkConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersNetworkConfiguration">EventsRuleTargetsEcsParametersNetworkConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#network_configuration EventsRule#network_configuration}.

---

###### `placement_constraints`<sup>Optional</sup> <a name="placement_constraints" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.putEcsParameters.parameter.placementConstraints"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementConstraints">EventsRuleTargetsEcsParametersPlacementConstraints</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#placement_constraints EventsRule#placement_constraints}.

---

###### `placement_strategies`<sup>Optional</sup> <a name="placement_strategies" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.putEcsParameters.parameter.placementStrategies"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersPlacementStrategies">EventsRuleTargetsEcsParametersPlacementStrategies</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#placement_strategies EventsRule#placement_strategies}.

---

###### `platform_version`<sup>Optional</sup> <a name="platform_version" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.putEcsParameters.parameter.platformVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#platform_version EventsRule#platform_version}.

---

###### `propagate_tags`<sup>Optional</sup> <a name="propagate_tags" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.putEcsParameters.parameter.propagateTags"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#propagate_tags EventsRule#propagate_tags}.

---

###### `reference_id`<sup>Optional</sup> <a name="reference_id" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.putEcsParameters.parameter.referenceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#reference_id EventsRule#reference_id}.

---

###### `tag_list`<sup>Optional</sup> <a name="tag_list" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.putEcsParameters.parameter.tagList"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersTagListStruct">EventsRuleTargetsEcsParametersTagListStruct</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#tag_list EventsRule#tag_list}.

---

###### `task_count`<sup>Optional</sup> <a name="task_count" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.putEcsParameters.parameter.taskCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#task_count EventsRule#task_count}.

---

###### `task_definition_arn`<sup>Optional</sup> <a name="task_definition_arn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.putEcsParameters.parameter.taskDefinitionArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#task_definition_arn EventsRule#task_definition_arn}.

---

##### `put_http_parameters` <a name="put_http_parameters" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.putHttpParameters"></a>

```python
def put_http_parameters(
  header_parameters: typing.Mapping[str] = None,
  path_parameter_values: typing.List[str] = None,
  query_string_parameters: typing.Mapping[str] = None
) -> None
```

###### `header_parameters`<sup>Optional</sup> <a name="header_parameters" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.putHttpParameters.parameter.headerParameters"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#header_parameters EventsRule#header_parameters}.

---

###### `path_parameter_values`<sup>Optional</sup> <a name="path_parameter_values" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.putHttpParameters.parameter.pathParameterValues"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#path_parameter_values EventsRule#path_parameter_values}.

---

###### `query_string_parameters`<sup>Optional</sup> <a name="query_string_parameters" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.putHttpParameters.parameter.queryStringParameters"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#query_string_parameters EventsRule#query_string_parameters}.

---

##### `put_input_transformer` <a name="put_input_transformer" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.putInputTransformer"></a>

```python
def put_input_transformer(
  input_paths_map: typing.Mapping[str] = None,
  input_template: str = None
) -> None
```

###### `input_paths_map`<sup>Optional</sup> <a name="input_paths_map" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.putInputTransformer.parameter.inputPathsMap"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#input_paths_map EventsRule#input_paths_map}.

---

###### `input_template`<sup>Optional</sup> <a name="input_template" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.putInputTransformer.parameter.inputTemplate"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#input_template EventsRule#input_template}.

---

##### `put_kinesis_parameters` <a name="put_kinesis_parameters" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.putKinesisParameters"></a>

```python
def put_kinesis_parameters(
  partition_key_path: str = None
) -> None
```

###### `partition_key_path`<sup>Optional</sup> <a name="partition_key_path" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.putKinesisParameters.parameter.partitionKeyPath"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#partition_key_path EventsRule#partition_key_path}.

---

##### `put_redshift_data_parameters` <a name="put_redshift_data_parameters" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.putRedshiftDataParameters"></a>

```python
def put_redshift_data_parameters(
  database: str = None,
  db_user: str = None,
  secret_manager_arn: str = None,
  sql: str = None,
  sqls: typing.List[str] = None,
  statement_name: str = None,
  with_event: bool | IResolvable = None
) -> None
```

###### `database`<sup>Optional</sup> <a name="database" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.putRedshiftDataParameters.parameter.database"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#database EventsRule#database}.

---

###### `db_user`<sup>Optional</sup> <a name="db_user" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.putRedshiftDataParameters.parameter.dbUser"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#db_user EventsRule#db_user}.

---

###### `secret_manager_arn`<sup>Optional</sup> <a name="secret_manager_arn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.putRedshiftDataParameters.parameter.secretManagerArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#secret_manager_arn EventsRule#secret_manager_arn}.

---

###### `sql`<sup>Optional</sup> <a name="sql" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.putRedshiftDataParameters.parameter.sql"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#sql EventsRule#sql}.

---

###### `sqls`<sup>Optional</sup> <a name="sqls" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.putRedshiftDataParameters.parameter.sqls"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#sqls EventsRule#sqls}.

---

###### `statement_name`<sup>Optional</sup> <a name="statement_name" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.putRedshiftDataParameters.parameter.statementName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#statement_name EventsRule#statement_name}.

---

###### `with_event`<sup>Optional</sup> <a name="with_event" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.putRedshiftDataParameters.parameter.withEvent"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#with_event EventsRule#with_event}.

---

##### `put_retry_policy` <a name="put_retry_policy" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.putRetryPolicy"></a>

```python
def put_retry_policy(
  maximum_event_age_in_seconds: typing.Union[int, float] = None,
  maximum_retry_attempts: typing.Union[int, float] = None
) -> None
```

###### `maximum_event_age_in_seconds`<sup>Optional</sup> <a name="maximum_event_age_in_seconds" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.putRetryPolicy.parameter.maximumEventAgeInSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#maximum_event_age_in_seconds EventsRule#maximum_event_age_in_seconds}.

---

###### `maximum_retry_attempts`<sup>Optional</sup> <a name="maximum_retry_attempts" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.putRetryPolicy.parameter.maximumRetryAttempts"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#maximum_retry_attempts EventsRule#maximum_retry_attempts}.

---

##### `put_run_command_parameters` <a name="put_run_command_parameters" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.putRunCommandParameters"></a>

```python
def put_run_command_parameters(
  run_command_targets: IResolvable | typing.List[EventsRuleTargetsRunCommandParametersRunCommandTargets] = None
) -> None
```

###### `run_command_targets`<sup>Optional</sup> <a name="run_command_targets" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.putRunCommandParameters.parameter.runCommandTargets"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargets">EventsRuleTargetsRunCommandParametersRunCommandTargets</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#run_command_targets EventsRule#run_command_targets}.

---

##### `put_sage_maker_pipeline_parameters` <a name="put_sage_maker_pipeline_parameters" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.putSageMakerPipelineParameters"></a>

```python
def put_sage_maker_pipeline_parameters(
  pipeline_parameter_list: IResolvable | typing.List[EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStruct] = None
) -> None
```

###### `pipeline_parameter_list`<sup>Optional</sup> <a name="pipeline_parameter_list" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.putSageMakerPipelineParameters.parameter.pipelineParameterList"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStruct">EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStruct</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#pipeline_parameter_list EventsRule#pipeline_parameter_list}.

---

##### `put_sqs_parameters` <a name="put_sqs_parameters" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.putSqsParameters"></a>

```python
def put_sqs_parameters(
  message_group_id: str = None
) -> None
```

###### `message_group_id`<sup>Optional</sup> <a name="message_group_id" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.putSqsParameters.parameter.messageGroupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/events_rule#message_group_id EventsRule#message_group_id}.

---

##### `reset_app_sync_parameters` <a name="reset_app_sync_parameters" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.resetAppSyncParameters"></a>

```python
def reset_app_sync_parameters() -> None
```

##### `reset_arn` <a name="reset_arn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.resetArn"></a>

```python
def reset_arn() -> None
```

##### `reset_batch_parameters` <a name="reset_batch_parameters" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.resetBatchParameters"></a>

```python
def reset_batch_parameters() -> None
```

##### `reset_dead_letter_config` <a name="reset_dead_letter_config" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.resetDeadLetterConfig"></a>

```python
def reset_dead_letter_config() -> None
```

##### `reset_ecs_parameters` <a name="reset_ecs_parameters" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.resetEcsParameters"></a>

```python
def reset_ecs_parameters() -> None
```

##### `reset_http_parameters` <a name="reset_http_parameters" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.resetHttpParameters"></a>

```python
def reset_http_parameters() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_input` <a name="reset_input" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.resetInput"></a>

```python
def reset_input() -> None
```

##### `reset_input_path` <a name="reset_input_path" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.resetInputPath"></a>

```python
def reset_input_path() -> None
```

##### `reset_input_transformer` <a name="reset_input_transformer" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.resetInputTransformer"></a>

```python
def reset_input_transformer() -> None
```

##### `reset_kinesis_parameters` <a name="reset_kinesis_parameters" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.resetKinesisParameters"></a>

```python
def reset_kinesis_parameters() -> None
```

##### `reset_redshift_data_parameters` <a name="reset_redshift_data_parameters" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.resetRedshiftDataParameters"></a>

```python
def reset_redshift_data_parameters() -> None
```

##### `reset_retry_policy` <a name="reset_retry_policy" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.resetRetryPolicy"></a>

```python
def reset_retry_policy() -> None
```

##### `reset_role_arn` <a name="reset_role_arn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.resetRoleArn"></a>

```python
def reset_role_arn() -> None
```

##### `reset_run_command_parameters` <a name="reset_run_command_parameters" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.resetRunCommandParameters"></a>

```python
def reset_run_command_parameters() -> None
```

##### `reset_sage_maker_pipeline_parameters` <a name="reset_sage_maker_pipeline_parameters" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.resetSageMakerPipelineParameters"></a>

```python
def reset_sage_maker_pipeline_parameters() -> None
```

##### `reset_sqs_parameters` <a name="reset_sqs_parameters" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.resetSqsParameters"></a>

```python
def reset_sqs_parameters() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.appSyncParameters">app_sync_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParametersOutputReference">EventsRuleTargetsAppSyncParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.batchParameters">batch_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference">EventsRuleTargetsBatchParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.deadLetterConfig">dead_letter_config</a></code> | <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfigOutputReference">EventsRuleTargetsDeadLetterConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.ecsParameters">ecs_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference">EventsRuleTargetsEcsParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.httpParameters">http_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference">EventsRuleTargetsHttpParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.inputTransformer">input_transformer</a></code> | <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformerOutputReference">EventsRuleTargetsInputTransformerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.kinesisParameters">kinesis_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParametersOutputReference">EventsRuleTargetsKinesisParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.redshiftDataParameters">redshift_data_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference">EventsRuleTargetsRedshiftDataParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.retryPolicy">retry_policy</a></code> | <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicyOutputReference">EventsRuleTargetsRetryPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.runCommandParameters">run_command_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersOutputReference">EventsRuleTargetsRunCommandParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.sageMakerPipelineParameters">sage_maker_pipeline_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersOutputReference">EventsRuleTargetsSageMakerPipelineParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.sqsParameters">sqs_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParametersOutputReference">EventsRuleTargetsSqsParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.appSyncParametersInput">app_sync_parameters_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParameters">EventsRuleTargetsAppSyncParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.arnInput">arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.batchParametersInput">batch_parameters_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParameters">EventsRuleTargetsBatchParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.deadLetterConfigInput">dead_letter_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfig">EventsRuleTargetsDeadLetterConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.ecsParametersInput">ecs_parameters_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParameters">EventsRuleTargetsEcsParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.httpParametersInput">http_parameters_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParameters">EventsRuleTargetsHttpParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.inputInput">input_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.inputPathInput">input_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.inputTransformerInput">input_transformer_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformer">EventsRuleTargetsInputTransformer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.kinesisParametersInput">kinesis_parameters_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParameters">EventsRuleTargetsKinesisParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.redshiftDataParametersInput">redshift_data_parameters_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParameters">EventsRuleTargetsRedshiftDataParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.retryPolicyInput">retry_policy_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicy">EventsRuleTargetsRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.runCommandParametersInput">run_command_parameters_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParameters">EventsRuleTargetsRunCommandParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.sageMakerPipelineParametersInput">sage_maker_pipeline_parameters_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParameters">EventsRuleTargetsSageMakerPipelineParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.sqsParametersInput">sqs_parameters_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParameters">EventsRuleTargetsSqsParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.input">input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.inputPath">input_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargets">EventsRuleTargets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `app_sync_parameters`<sup>Required</sup> <a name="app_sync_parameters" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.appSyncParameters"></a>

```python
app_sync_parameters: EventsRuleTargetsAppSyncParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParametersOutputReference">EventsRuleTargetsAppSyncParametersOutputReference</a>

---

##### `batch_parameters`<sup>Required</sup> <a name="batch_parameters" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.batchParameters"></a>

```python
batch_parameters: EventsRuleTargetsBatchParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParametersOutputReference">EventsRuleTargetsBatchParametersOutputReference</a>

---

##### `dead_letter_config`<sup>Required</sup> <a name="dead_letter_config" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.deadLetterConfig"></a>

```python
dead_letter_config: EventsRuleTargetsDeadLetterConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfigOutputReference">EventsRuleTargetsDeadLetterConfigOutputReference</a>

---

##### `ecs_parameters`<sup>Required</sup> <a name="ecs_parameters" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.ecsParameters"></a>

```python
ecs_parameters: EventsRuleTargetsEcsParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParametersOutputReference">EventsRuleTargetsEcsParametersOutputReference</a>

---

##### `http_parameters`<sup>Required</sup> <a name="http_parameters" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.httpParameters"></a>

```python
http_parameters: EventsRuleTargetsHttpParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParametersOutputReference">EventsRuleTargetsHttpParametersOutputReference</a>

---

##### `input_transformer`<sup>Required</sup> <a name="input_transformer" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.inputTransformer"></a>

```python
input_transformer: EventsRuleTargetsInputTransformerOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformerOutputReference">EventsRuleTargetsInputTransformerOutputReference</a>

---

##### `kinesis_parameters`<sup>Required</sup> <a name="kinesis_parameters" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.kinesisParameters"></a>

```python
kinesis_parameters: EventsRuleTargetsKinesisParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParametersOutputReference">EventsRuleTargetsKinesisParametersOutputReference</a>

---

##### `redshift_data_parameters`<sup>Required</sup> <a name="redshift_data_parameters" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.redshiftDataParameters"></a>

```python
redshift_data_parameters: EventsRuleTargetsRedshiftDataParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference">EventsRuleTargetsRedshiftDataParametersOutputReference</a>

---

##### `retry_policy`<sup>Required</sup> <a name="retry_policy" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.retryPolicy"></a>

```python
retry_policy: EventsRuleTargetsRetryPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicyOutputReference">EventsRuleTargetsRetryPolicyOutputReference</a>

---

##### `run_command_parameters`<sup>Required</sup> <a name="run_command_parameters" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.runCommandParameters"></a>

```python
run_command_parameters: EventsRuleTargetsRunCommandParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersOutputReference">EventsRuleTargetsRunCommandParametersOutputReference</a>

---

##### `sage_maker_pipeline_parameters`<sup>Required</sup> <a name="sage_maker_pipeline_parameters" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.sageMakerPipelineParameters"></a>

```python
sage_maker_pipeline_parameters: EventsRuleTargetsSageMakerPipelineParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersOutputReference">EventsRuleTargetsSageMakerPipelineParametersOutputReference</a>

---

##### `sqs_parameters`<sup>Required</sup> <a name="sqs_parameters" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.sqsParameters"></a>

```python
sqs_parameters: EventsRuleTargetsSqsParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParametersOutputReference">EventsRuleTargetsSqsParametersOutputReference</a>

---

##### `app_sync_parameters_input`<sup>Optional</sup> <a name="app_sync_parameters_input" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.appSyncParametersInput"></a>

```python
app_sync_parameters_input: IResolvable | EventsRuleTargetsAppSyncParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsAppSyncParameters">EventsRuleTargetsAppSyncParameters</a>

---

##### `arn_input`<sup>Optional</sup> <a name="arn_input" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.arnInput"></a>

```python
arn_input: str
```

- *Type:* str

---

##### `batch_parameters_input`<sup>Optional</sup> <a name="batch_parameters_input" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.batchParametersInput"></a>

```python
batch_parameters_input: IResolvable | EventsRuleTargetsBatchParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsBatchParameters">EventsRuleTargetsBatchParameters</a>

---

##### `dead_letter_config_input`<sup>Optional</sup> <a name="dead_letter_config_input" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.deadLetterConfigInput"></a>

```python
dead_letter_config_input: IResolvable | EventsRuleTargetsDeadLetterConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsDeadLetterConfig">EventsRuleTargetsDeadLetterConfig</a>

---

##### `ecs_parameters_input`<sup>Optional</sup> <a name="ecs_parameters_input" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.ecsParametersInput"></a>

```python
ecs_parameters_input: IResolvable | EventsRuleTargetsEcsParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsEcsParameters">EventsRuleTargetsEcsParameters</a>

---

##### `http_parameters_input`<sup>Optional</sup> <a name="http_parameters_input" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.httpParametersInput"></a>

```python
http_parameters_input: IResolvable | EventsRuleTargetsHttpParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsHttpParameters">EventsRuleTargetsHttpParameters</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `input_input`<sup>Optional</sup> <a name="input_input" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.inputInput"></a>

```python
input_input: str
```

- *Type:* str

---

##### `input_path_input`<sup>Optional</sup> <a name="input_path_input" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.inputPathInput"></a>

```python
input_path_input: str
```

- *Type:* str

---

##### `input_transformer_input`<sup>Optional</sup> <a name="input_transformer_input" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.inputTransformerInput"></a>

```python
input_transformer_input: IResolvable | EventsRuleTargetsInputTransformer
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsInputTransformer">EventsRuleTargetsInputTransformer</a>

---

##### `kinesis_parameters_input`<sup>Optional</sup> <a name="kinesis_parameters_input" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.kinesisParametersInput"></a>

```python
kinesis_parameters_input: IResolvable | EventsRuleTargetsKinesisParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsKinesisParameters">EventsRuleTargetsKinesisParameters</a>

---

##### `redshift_data_parameters_input`<sup>Optional</sup> <a name="redshift_data_parameters_input" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.redshiftDataParametersInput"></a>

```python
redshift_data_parameters_input: IResolvable | EventsRuleTargetsRedshiftDataParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParameters">EventsRuleTargetsRedshiftDataParameters</a>

---

##### `retry_policy_input`<sup>Optional</sup> <a name="retry_policy_input" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.retryPolicyInput"></a>

```python
retry_policy_input: IResolvable | EventsRuleTargetsRetryPolicy
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicy">EventsRuleTargetsRetryPolicy</a>

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `run_command_parameters_input`<sup>Optional</sup> <a name="run_command_parameters_input" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.runCommandParametersInput"></a>

```python
run_command_parameters_input: IResolvable | EventsRuleTargetsRunCommandParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParameters">EventsRuleTargetsRunCommandParameters</a>

---

##### `sage_maker_pipeline_parameters_input`<sup>Optional</sup> <a name="sage_maker_pipeline_parameters_input" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.sageMakerPipelineParametersInput"></a>

```python
sage_maker_pipeline_parameters_input: IResolvable | EventsRuleTargetsSageMakerPipelineParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParameters">EventsRuleTargetsSageMakerPipelineParameters</a>

---

##### `sqs_parameters_input`<sup>Optional</sup> <a name="sqs_parameters_input" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.sqsParametersInput"></a>

```python
sqs_parameters_input: IResolvable | EventsRuleTargetsSqsParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParameters">EventsRuleTargetsSqsParameters</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.input"></a>

```python
input: str
```

- *Type:* str

---

##### `input_path`<sup>Required</sup> <a name="input_path" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.inputPath"></a>

```python
input_path: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EventsRuleTargets
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargets">EventsRuleTargets</a>

---


### EventsRuleTargetsRedshiftDataParametersOutputReference <a name="EventsRuleTargetsRedshiftDataParametersOutputReference" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import events_rule

eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.resetDatabase">reset_database</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.resetDbUser">reset_db_user</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.resetSecretManagerArn">reset_secret_manager_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.resetSql">reset_sql</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.resetSqls">reset_sqls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.resetStatementName">reset_statement_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.resetWithEvent">reset_with_event</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_database` <a name="reset_database" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.resetDatabase"></a>

```python
def reset_database() -> None
```

##### `reset_db_user` <a name="reset_db_user" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.resetDbUser"></a>

```python
def reset_db_user() -> None
```

##### `reset_secret_manager_arn` <a name="reset_secret_manager_arn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.resetSecretManagerArn"></a>

```python
def reset_secret_manager_arn() -> None
```

##### `reset_sql` <a name="reset_sql" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.resetSql"></a>

```python
def reset_sql() -> None
```

##### `reset_sqls` <a name="reset_sqls" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.resetSqls"></a>

```python
def reset_sqls() -> None
```

##### `reset_statement_name` <a name="reset_statement_name" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.resetStatementName"></a>

```python
def reset_statement_name() -> None
```

##### `reset_with_event` <a name="reset_with_event" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.resetWithEvent"></a>

```python
def reset_with_event() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.property.databaseInput">database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.property.dbUserInput">db_user_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.property.secretManagerArnInput">secret_manager_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.property.sqlInput">sql_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.property.sqlsInput">sqls_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.property.statementNameInput">statement_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.property.withEventInput">with_event_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.property.database">database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.property.dbUser">db_user</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.property.secretManagerArn">secret_manager_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.property.sql">sql</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.property.sqls">sqls</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.property.statementName">statement_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.property.withEvent">with_event</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParameters">EventsRuleTargetsRedshiftDataParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `database_input`<sup>Optional</sup> <a name="database_input" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.property.databaseInput"></a>

```python
database_input: str
```

- *Type:* str

---

##### `db_user_input`<sup>Optional</sup> <a name="db_user_input" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.property.dbUserInput"></a>

```python
db_user_input: str
```

- *Type:* str

---

##### `secret_manager_arn_input`<sup>Optional</sup> <a name="secret_manager_arn_input" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.property.secretManagerArnInput"></a>

```python
secret_manager_arn_input: str
```

- *Type:* str

---

##### `sql_input`<sup>Optional</sup> <a name="sql_input" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.property.sqlInput"></a>

```python
sql_input: str
```

- *Type:* str

---

##### `sqls_input`<sup>Optional</sup> <a name="sqls_input" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.property.sqlsInput"></a>

```python
sqls_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `statement_name_input`<sup>Optional</sup> <a name="statement_name_input" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.property.statementNameInput"></a>

```python
statement_name_input: str
```

- *Type:* str

---

##### `with_event_input`<sup>Optional</sup> <a name="with_event_input" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.property.withEventInput"></a>

```python
with_event_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.property.database"></a>

```python
database: str
```

- *Type:* str

---

##### `db_user`<sup>Required</sup> <a name="db_user" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.property.dbUser"></a>

```python
db_user: str
```

- *Type:* str

---

##### `secret_manager_arn`<sup>Required</sup> <a name="secret_manager_arn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.property.secretManagerArn"></a>

```python
secret_manager_arn: str
```

- *Type:* str

---

##### `sql`<sup>Required</sup> <a name="sql" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.property.sql"></a>

```python
sql: str
```

- *Type:* str

---

##### `sqls`<sup>Required</sup> <a name="sqls" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.property.sqls"></a>

```python
sqls: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `statement_name`<sup>Required</sup> <a name="statement_name" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.property.statementName"></a>

```python
statement_name: str
```

- *Type:* str

---

##### `with_event`<sup>Required</sup> <a name="with_event" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.property.withEvent"></a>

```python
with_event: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParametersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EventsRuleTargetsRedshiftDataParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRedshiftDataParameters">EventsRuleTargetsRedshiftDataParameters</a>

---


### EventsRuleTargetsRetryPolicyOutputReference <a name="EventsRuleTargetsRetryPolicyOutputReference" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import events_rule

eventsRule.EventsRuleTargetsRetryPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicyOutputReference.resetMaximumEventAgeInSeconds">reset_maximum_event_age_in_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicyOutputReference.resetMaximumRetryAttempts">reset_maximum_retry_attempts</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_maximum_event_age_in_seconds` <a name="reset_maximum_event_age_in_seconds" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicyOutputReference.resetMaximumEventAgeInSeconds"></a>

```python
def reset_maximum_event_age_in_seconds() -> None
```

##### `reset_maximum_retry_attempts` <a name="reset_maximum_retry_attempts" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicyOutputReference.resetMaximumRetryAttempts"></a>

```python
def reset_maximum_retry_attempts() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicyOutputReference.property.maximumEventAgeInSecondsInput">maximum_event_age_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicyOutputReference.property.maximumRetryAttemptsInput">maximum_retry_attempts_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicyOutputReference.property.maximumEventAgeInSeconds">maximum_event_age_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicyOutputReference.property.maximumRetryAttempts">maximum_retry_attempts</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicyOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicy">EventsRuleTargetsRetryPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `maximum_event_age_in_seconds_input`<sup>Optional</sup> <a name="maximum_event_age_in_seconds_input" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicyOutputReference.property.maximumEventAgeInSecondsInput"></a>

```python
maximum_event_age_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maximum_retry_attempts_input`<sup>Optional</sup> <a name="maximum_retry_attempts_input" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicyOutputReference.property.maximumRetryAttemptsInput"></a>

```python
maximum_retry_attempts_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maximum_event_age_in_seconds`<sup>Required</sup> <a name="maximum_event_age_in_seconds" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicyOutputReference.property.maximumEventAgeInSeconds"></a>

```python
maximum_event_age_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maximum_retry_attempts`<sup>Required</sup> <a name="maximum_retry_attempts" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicyOutputReference.property.maximumRetryAttempts"></a>

```python
maximum_retry_attempts: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicyOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EventsRuleTargetsRetryPolicy
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRetryPolicy">EventsRuleTargetsRetryPolicy</a>

---


### EventsRuleTargetsRunCommandParametersOutputReference <a name="EventsRuleTargetsRunCommandParametersOutputReference" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import events_rule

eventsRule.EventsRuleTargetsRunCommandParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersOutputReference.putRunCommandTargets">put_run_command_targets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersOutputReference.resetRunCommandTargets">reset_run_command_targets</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_run_command_targets` <a name="put_run_command_targets" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersOutputReference.putRunCommandTargets"></a>

```python
def put_run_command_targets(
  value: IResolvable | typing.List[EventsRuleTargetsRunCommandParametersRunCommandTargets]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersOutputReference.putRunCommandTargets.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargets">EventsRuleTargetsRunCommandParametersRunCommandTargets</a>]

---

##### `reset_run_command_targets` <a name="reset_run_command_targets" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersOutputReference.resetRunCommandTargets"></a>

```python
def reset_run_command_targets() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersOutputReference.property.runCommandTargets">run_command_targets</a></code> | <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsList">EventsRuleTargetsRunCommandParametersRunCommandTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersOutputReference.property.runCommandTargetsInput">run_command_targets_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargets">EventsRuleTargetsRunCommandParametersRunCommandTargets</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParameters">EventsRuleTargetsRunCommandParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `run_command_targets`<sup>Required</sup> <a name="run_command_targets" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersOutputReference.property.runCommandTargets"></a>

```python
run_command_targets: EventsRuleTargetsRunCommandParametersRunCommandTargetsList
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsList">EventsRuleTargetsRunCommandParametersRunCommandTargetsList</a>

---

##### `run_command_targets_input`<sup>Optional</sup> <a name="run_command_targets_input" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersOutputReference.property.runCommandTargetsInput"></a>

```python
run_command_targets_input: IResolvable | typing.List[EventsRuleTargetsRunCommandParametersRunCommandTargets]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargets">EventsRuleTargetsRunCommandParametersRunCommandTargets</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EventsRuleTargetsRunCommandParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParameters">EventsRuleTargetsRunCommandParameters</a>

---


### EventsRuleTargetsRunCommandParametersRunCommandTargetsList <a name="EventsRuleTargetsRunCommandParametersRunCommandTargetsList" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsList.Initializer"></a>

```python
from cdktn_provider_awscc import events_rule

eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargets">EventsRuleTargetsRunCommandParametersRunCommandTargets</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[EventsRuleTargetsRunCommandParametersRunCommandTargets]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargets">EventsRuleTargetsRunCommandParametersRunCommandTargets</a>]

---


### EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference <a name="EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import events_rule

eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargets">EventsRuleTargetsRunCommandParametersRunCommandTargets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EventsRuleTargetsRunCommandParametersRunCommandTargets
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsRunCommandParametersRunCommandTargets">EventsRuleTargetsRunCommandParametersRunCommandTargets</a>

---


### EventsRuleTargetsSageMakerPipelineParametersOutputReference <a name="EventsRuleTargetsSageMakerPipelineParametersOutputReference" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import events_rule

eventsRule.EventsRuleTargetsSageMakerPipelineParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersOutputReference.putPipelineParameterList">put_pipeline_parameter_list</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersOutputReference.resetPipelineParameterList">reset_pipeline_parameter_list</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_pipeline_parameter_list` <a name="put_pipeline_parameter_list" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersOutputReference.putPipelineParameterList"></a>

```python
def put_pipeline_parameter_list(
  value: IResolvable | typing.List[EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStruct]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersOutputReference.putPipelineParameterList.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStruct">EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStruct</a>]

---

##### `reset_pipeline_parameter_list` <a name="reset_pipeline_parameter_list" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersOutputReference.resetPipelineParameterList"></a>

```python
def reset_pipeline_parameter_list() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersOutputReference.property.pipelineParameterList">pipeline_parameter_list</a></code> | <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList">EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersOutputReference.property.pipelineParameterListInput">pipeline_parameter_list_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStruct">EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStruct</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParameters">EventsRuleTargetsSageMakerPipelineParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `pipeline_parameter_list`<sup>Required</sup> <a name="pipeline_parameter_list" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersOutputReference.property.pipelineParameterList"></a>

```python
pipeline_parameter_list: EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList">EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList</a>

---

##### `pipeline_parameter_list_input`<sup>Optional</sup> <a name="pipeline_parameter_list_input" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersOutputReference.property.pipelineParameterListInput"></a>

```python
pipeline_parameter_list_input: IResolvable | typing.List[EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStruct]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStruct">EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStruct</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EventsRuleTargetsSageMakerPipelineParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParameters">EventsRuleTargetsSageMakerPipelineParameters</a>

---


### EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList <a name="EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList.Initializer"></a>

```python
from cdktn_provider_awscc import events_rule

eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStruct">EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStruct</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStruct]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStruct">EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStruct</a>]

---


### EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference <a name="EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import events_rule

eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStruct">EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStruct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStruct
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStruct">EventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStruct</a>

---


### EventsRuleTargetsSqsParametersOutputReference <a name="EventsRuleTargetsSqsParametersOutputReference" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import events_rule

eventsRule.EventsRuleTargetsSqsParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParametersOutputReference.resetMessageGroupId">reset_message_group_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_message_group_id` <a name="reset_message_group_id" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParametersOutputReference.resetMessageGroupId"></a>

```python
def reset_message_group_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParametersOutputReference.property.messageGroupIdInput">message_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParametersOutputReference.property.messageGroupId">message_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParametersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParameters">EventsRuleTargetsSqsParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `message_group_id_input`<sup>Optional</sup> <a name="message_group_id_input" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParametersOutputReference.property.messageGroupIdInput"></a>

```python
message_group_id_input: str
```

- *Type:* str

---

##### `message_group_id`<sup>Required</sup> <a name="message_group_id" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParametersOutputReference.property.messageGroupId"></a>

```python
message_group_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParametersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EventsRuleTargetsSqsParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsRule.EventsRuleTargetsSqsParameters">EventsRuleTargetsSqsParameters</a>

---



