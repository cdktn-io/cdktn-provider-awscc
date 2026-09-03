# `cloudwatchAlarmMuteRule` Submodule <a name="`cloudwatchAlarmMuteRule` Submodule" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudwatchAlarmMuteRule <a name="CloudwatchAlarmMuteRule" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudwatch_alarm_mute_rule awscc_cloudwatch_alarm_mute_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_alarm_mute_rule

cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  rule: CloudwatchAlarmMuteRuleRule,
  description: str = None,
  expire_date: str = None,
  mute_targets: CloudwatchAlarmMuteRuleMuteTargets = None,
  name: str = None,
  start_date: str = None,
  tags: IResolvable | typing.List[CloudwatchAlarmMuteRuleTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.Initializer.parameter.rule">rule</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRule">CloudwatchAlarmMuteRuleRule</a></code> | The rule for the mute. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of the AlarmMuteRule. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.Initializer.parameter.expireDate">expire_date</a></code> | <code>str</code> | The date, with the same timezone offset as "ScheduleTimezone" after which the alarm mute rule will be expired. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.Initializer.parameter.muteTargets">mute_targets</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargets">CloudwatchAlarmMuteRuleMuteTargets</a></code> | Targets to be muted. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the AlarmMuteRule. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.Initializer.parameter.startDate">start_date</a></code> | <code>str</code> | The date, with the same timezone offset as "ScheduleTimezone", after which the alarm mute rule will become active. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTags">CloudwatchAlarmMuteRuleTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.Initializer.parameter.rule"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRule">CloudwatchAlarmMuteRuleRule</a>

The rule for the mute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudwatch_alarm_mute_rule#rule CloudwatchAlarmMuteRule#rule}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.Initializer.parameter.description"></a>

- *Type:* str

The description of the AlarmMuteRule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudwatch_alarm_mute_rule#description CloudwatchAlarmMuteRule#description}

---

##### `expire_date`<sup>Optional</sup> <a name="expire_date" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.Initializer.parameter.expireDate"></a>

- *Type:* str

The date, with the same timezone offset as "ScheduleTimezone" after which the alarm mute rule will be expired.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudwatch_alarm_mute_rule#expire_date CloudwatchAlarmMuteRule#expire_date}

---

##### `mute_targets`<sup>Optional</sup> <a name="mute_targets" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.Initializer.parameter.muteTargets"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargets">CloudwatchAlarmMuteRuleMuteTargets</a>

Targets to be muted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudwatch_alarm_mute_rule#mute_targets CloudwatchAlarmMuteRule#mute_targets}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.Initializer.parameter.name"></a>

- *Type:* str

The name of the AlarmMuteRule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudwatch_alarm_mute_rule#name CloudwatchAlarmMuteRule#name}

---

##### `start_date`<sup>Optional</sup> <a name="start_date" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.Initializer.parameter.startDate"></a>

- *Type:* str

The date, with the same timezone offset as "ScheduleTimezone", after which the alarm mute rule will become active.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudwatch_alarm_mute_rule#start_date CloudwatchAlarmMuteRule#start_date}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTags">CloudwatchAlarmMuteRuleTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudwatch_alarm_mute_rule#tags CloudwatchAlarmMuteRule#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.putMuteTargets">put_mute_targets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.putRule">put_rule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.resetExpireDate">reset_expire_date</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.resetMuteTargets">reset_mute_targets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.resetStartDate">reset_start_date</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_mute_targets` <a name="put_mute_targets" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.putMuteTargets"></a>

```python
def put_mute_targets(
  alarm_names: typing.List[str] = None
) -> None
```

###### `alarm_names`<sup>Optional</sup> <a name="alarm_names" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.putMuteTargets.parameter.alarmNames"></a>

- *Type:* typing.List[str]

The alarm names to be mute by the AlarmMuteRule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudwatch_alarm_mute_rule#alarm_names CloudwatchAlarmMuteRule#alarm_names}

---

##### `put_rule` <a name="put_rule" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.putRule"></a>

```python
def put_rule(
  schedule: CloudwatchAlarmMuteRuleRuleSchedule
) -> None
```

###### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.putRule.parameter.schedule"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleSchedule">CloudwatchAlarmMuteRuleRuleSchedule</a>

Schedule for the mute to be active.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudwatch_alarm_mute_rule#schedule CloudwatchAlarmMuteRule#schedule}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[CloudwatchAlarmMuteRuleTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTags">CloudwatchAlarmMuteRuleTags</a>]

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_expire_date` <a name="reset_expire_date" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.resetExpireDate"></a>

```python
def reset_expire_date() -> None
```

##### `reset_mute_targets` <a name="reset_mute_targets" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.resetMuteTargets"></a>

```python
def reset_mute_targets() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_start_date` <a name="reset_start_date" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.resetStartDate"></a>

```python
def reset_start_date() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a CloudwatchAlarmMuteRule resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.isConstruct"></a>

```python
from cdktn_provider_awscc import cloudwatch_alarm_mute_rule

cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.isTerraformElement"></a>

```python
from cdktn_provider_awscc import cloudwatch_alarm_mute_rule

cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.isTerraformResource"></a>

```python
from cdktn_provider_awscc import cloudwatch_alarm_mute_rule

cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import cloudwatch_alarm_mute_rule

cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a CloudwatchAlarmMuteRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CloudwatchAlarmMuteRule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CloudwatchAlarmMuteRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudwatch_alarm_mute_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CloudwatchAlarmMuteRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.lastUpdatedTimestamp">last_updated_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.muteTargets">mute_targets</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference">CloudwatchAlarmMuteRuleMuteTargetsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.muteType">mute_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.rule">rule</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference">CloudwatchAlarmMuteRuleRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsList">CloudwatchAlarmMuteRuleTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.expireDateInput">expire_date_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.muteTargetsInput">mute_targets_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargets">CloudwatchAlarmMuteRuleMuteTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.ruleInput">rule_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRule">CloudwatchAlarmMuteRuleRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.startDateInput">start_date_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTags">CloudwatchAlarmMuteRuleTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.expireDate">expire_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.startDate">start_date</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_updated_timestamp`<sup>Required</sup> <a name="last_updated_timestamp" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.lastUpdatedTimestamp"></a>

```python
last_updated_timestamp: str
```

- *Type:* str

---

##### `mute_targets`<sup>Required</sup> <a name="mute_targets" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.muteTargets"></a>

```python
mute_targets: CloudwatchAlarmMuteRuleMuteTargetsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference">CloudwatchAlarmMuteRuleMuteTargetsOutputReference</a>

---

##### `mute_type`<sup>Required</sup> <a name="mute_type" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.muteType"></a>

```python
mute_type: str
```

- *Type:* str

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.rule"></a>

```python
rule: CloudwatchAlarmMuteRuleRuleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference">CloudwatchAlarmMuteRuleRuleOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.tags"></a>

```python
tags: CloudwatchAlarmMuteRuleTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsList">CloudwatchAlarmMuteRuleTagsList</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `expire_date_input`<sup>Optional</sup> <a name="expire_date_input" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.expireDateInput"></a>

```python
expire_date_input: str
```

- *Type:* str

---

##### `mute_targets_input`<sup>Optional</sup> <a name="mute_targets_input" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.muteTargetsInput"></a>

```python
mute_targets_input: IResolvable | CloudwatchAlarmMuteRuleMuteTargets
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargets">CloudwatchAlarmMuteRuleMuteTargets</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `rule_input`<sup>Optional</sup> <a name="rule_input" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.ruleInput"></a>

```python
rule_input: IResolvable | CloudwatchAlarmMuteRuleRule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRule">CloudwatchAlarmMuteRuleRule</a>

---

##### `start_date_input`<sup>Optional</sup> <a name="start_date_input" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.startDateInput"></a>

```python
start_date_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[CloudwatchAlarmMuteRuleTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTags">CloudwatchAlarmMuteRuleTags</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `expire_date`<sup>Required</sup> <a name="expire_date" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.expireDate"></a>

```python
expire_date: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `start_date`<sup>Required</sup> <a name="start_date" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.startDate"></a>

```python
start_date: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CloudwatchAlarmMuteRuleConfig <a name="CloudwatchAlarmMuteRuleConfig" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_alarm_mute_rule

cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  rule: CloudwatchAlarmMuteRuleRule,
  description: str = None,
  expire_date: str = None,
  mute_targets: CloudwatchAlarmMuteRuleMuteTargets = None,
  name: str = None,
  start_date: str = None,
  tags: IResolvable | typing.List[CloudwatchAlarmMuteRuleTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.rule">rule</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRule">CloudwatchAlarmMuteRuleRule</a></code> | The rule for the mute. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.description">description</a></code> | <code>str</code> | The description of the AlarmMuteRule. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.expireDate">expire_date</a></code> | <code>str</code> | The date, with the same timezone offset as "ScheduleTimezone" after which the alarm mute rule will be expired. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.muteTargets">mute_targets</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargets">CloudwatchAlarmMuteRuleMuteTargets</a></code> | Targets to be muted. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.name">name</a></code> | <code>str</code> | The name of the AlarmMuteRule. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.startDate">start_date</a></code> | <code>str</code> | The date, with the same timezone offset as "ScheduleTimezone", after which the alarm mute rule will become active. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTags">CloudwatchAlarmMuteRuleTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.rule"></a>

```python
rule: CloudwatchAlarmMuteRuleRule
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRule">CloudwatchAlarmMuteRuleRule</a>

The rule for the mute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudwatch_alarm_mute_rule#rule CloudwatchAlarmMuteRule#rule}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the AlarmMuteRule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudwatch_alarm_mute_rule#description CloudwatchAlarmMuteRule#description}

---

##### `expire_date`<sup>Optional</sup> <a name="expire_date" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.expireDate"></a>

```python
expire_date: str
```

- *Type:* str

The date, with the same timezone offset as "ScheduleTimezone" after which the alarm mute rule will be expired.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudwatch_alarm_mute_rule#expire_date CloudwatchAlarmMuteRule#expire_date}

---

##### `mute_targets`<sup>Optional</sup> <a name="mute_targets" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.muteTargets"></a>

```python
mute_targets: CloudwatchAlarmMuteRuleMuteTargets
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargets">CloudwatchAlarmMuteRuleMuteTargets</a>

Targets to be muted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudwatch_alarm_mute_rule#mute_targets CloudwatchAlarmMuteRule#mute_targets}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the AlarmMuteRule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudwatch_alarm_mute_rule#name CloudwatchAlarmMuteRule#name}

---

##### `start_date`<sup>Optional</sup> <a name="start_date" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.startDate"></a>

```python
start_date: str
```

- *Type:* str

The date, with the same timezone offset as "ScheduleTimezone", after which the alarm mute rule will become active.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudwatch_alarm_mute_rule#start_date CloudwatchAlarmMuteRule#start_date}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[CloudwatchAlarmMuteRuleTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTags">CloudwatchAlarmMuteRuleTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudwatch_alarm_mute_rule#tags CloudwatchAlarmMuteRule#tags}

---

### CloudwatchAlarmMuteRuleMuteTargets <a name="CloudwatchAlarmMuteRuleMuteTargets" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargets.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_alarm_mute_rule

cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargets(
  alarm_names: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargets.property.alarmNames">alarm_names</a></code> | <code>typing.List[str]</code> | The alarm names to be mute by the AlarmMuteRule. |

---

##### `alarm_names`<sup>Optional</sup> <a name="alarm_names" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargets.property.alarmNames"></a>

```python
alarm_names: typing.List[str]
```

- *Type:* typing.List[str]

The alarm names to be mute by the AlarmMuteRule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudwatch_alarm_mute_rule#alarm_names CloudwatchAlarmMuteRule#alarm_names}

---

### CloudwatchAlarmMuteRuleRule <a name="CloudwatchAlarmMuteRuleRule" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRule.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_alarm_mute_rule

cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRule(
  schedule: CloudwatchAlarmMuteRuleRuleSchedule
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRule.property.schedule">schedule</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleSchedule">CloudwatchAlarmMuteRuleRuleSchedule</a></code> | Schedule for the mute to be active. |

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRule.property.schedule"></a>

```python
schedule: CloudwatchAlarmMuteRuleRuleSchedule
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleSchedule">CloudwatchAlarmMuteRuleRuleSchedule</a>

Schedule for the mute to be active.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudwatch_alarm_mute_rule#schedule CloudwatchAlarmMuteRule#schedule}

---

### CloudwatchAlarmMuteRuleRuleSchedule <a name="CloudwatchAlarmMuteRuleRuleSchedule" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleSchedule.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_alarm_mute_rule

cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleSchedule(
  duration: str,
  expression: str,
  timezone: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleSchedule.property.duration">duration</a></code> | <code>str</code> | The duration of the schedule when it triggers. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleSchedule.property.expression">expression</a></code> | <code>str</code> | The expression of the schedule. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleSchedule.property.timezone">timezone</a></code> | <code>str</code> | The timezone of the schedule. |

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleSchedule.property.duration"></a>

```python
duration: str
```

- *Type:* str

The duration of the schedule when it triggers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudwatch_alarm_mute_rule#duration CloudwatchAlarmMuteRule#duration}

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleSchedule.property.expression"></a>

```python
expression: str
```

- *Type:* str

The expression of the schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudwatch_alarm_mute_rule#expression CloudwatchAlarmMuteRule#expression}

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleSchedule.property.timezone"></a>

```python
timezone: str
```

- *Type:* str

The timezone of the schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudwatch_alarm_mute_rule#timezone CloudwatchAlarmMuteRule#timezone}

---

### CloudwatchAlarmMuteRuleTags <a name="CloudwatchAlarmMuteRuleTags" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTags.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_alarm_mute_rule

cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudwatch_alarm_mute_rule#key CloudwatchAlarmMuteRule#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudwatch_alarm_mute_rule#value CloudwatchAlarmMuteRule#value}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudwatchAlarmMuteRuleMuteTargetsOutputReference <a name="CloudwatchAlarmMuteRuleMuteTargetsOutputReference" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_alarm_mute_rule

cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.resetAlarmNames">reset_alarm_names</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_alarm_names` <a name="reset_alarm_names" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.resetAlarmNames"></a>

```python
def reset_alarm_names() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.property.alarmNamesInput">alarm_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.property.alarmNames">alarm_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargets">CloudwatchAlarmMuteRuleMuteTargets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `alarm_names_input`<sup>Optional</sup> <a name="alarm_names_input" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.property.alarmNamesInput"></a>

```python
alarm_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `alarm_names`<sup>Required</sup> <a name="alarm_names" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.property.alarmNames"></a>

```python
alarm_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudwatchAlarmMuteRuleMuteTargets
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargets">CloudwatchAlarmMuteRuleMuteTargets</a>

---


### CloudwatchAlarmMuteRuleRuleOutputReference <a name="CloudwatchAlarmMuteRuleRuleOutputReference" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_alarm_mute_rule

cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.putSchedule">put_schedule</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_schedule` <a name="put_schedule" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.putSchedule"></a>

```python
def put_schedule(
  duration: str,
  expression: str,
  timezone: str = None
) -> None
```

###### `duration`<sup>Required</sup> <a name="duration" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.putSchedule.parameter.duration"></a>

- *Type:* str

The duration of the schedule when it triggers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudwatch_alarm_mute_rule#duration CloudwatchAlarmMuteRule#duration}

---

###### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.putSchedule.parameter.expression"></a>

- *Type:* str

The expression of the schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudwatch_alarm_mute_rule#expression CloudwatchAlarmMuteRule#expression}

---

###### `timezone`<sup>Optional</sup> <a name="timezone" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.putSchedule.parameter.timezone"></a>

- *Type:* str

The timezone of the schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudwatch_alarm_mute_rule#timezone CloudwatchAlarmMuteRule#timezone}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.property.schedule">schedule</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference">CloudwatchAlarmMuteRuleRuleScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.property.scheduleInput">schedule_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleSchedule">CloudwatchAlarmMuteRuleRuleSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRule">CloudwatchAlarmMuteRuleRule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.property.schedule"></a>

```python
schedule: CloudwatchAlarmMuteRuleRuleScheduleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference">CloudwatchAlarmMuteRuleRuleScheduleOutputReference</a>

---

##### `schedule_input`<sup>Optional</sup> <a name="schedule_input" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.property.scheduleInput"></a>

```python
schedule_input: IResolvable | CloudwatchAlarmMuteRuleRuleSchedule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleSchedule">CloudwatchAlarmMuteRuleRuleSchedule</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudwatchAlarmMuteRuleRule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRule">CloudwatchAlarmMuteRuleRule</a>

---


### CloudwatchAlarmMuteRuleRuleScheduleOutputReference <a name="CloudwatchAlarmMuteRuleRuleScheduleOutputReference" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_alarm_mute_rule

cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.resetTimezone">reset_timezone</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_timezone` <a name="reset_timezone" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.resetTimezone"></a>

```python
def reset_timezone() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.property.durationInput">duration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.property.timezoneInput">timezone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.property.duration">duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.property.timezone">timezone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleSchedule">CloudwatchAlarmMuteRuleRuleSchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `duration_input`<sup>Optional</sup> <a name="duration_input" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.property.durationInput"></a>

```python
duration_input: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `timezone_input`<sup>Optional</sup> <a name="timezone_input" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.property.timezoneInput"></a>

```python
timezone_input: str
```

- *Type:* str

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.property.duration"></a>

```python
duration: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.property.timezone"></a>

```python
timezone: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudwatchAlarmMuteRuleRuleSchedule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleSchedule">CloudwatchAlarmMuteRuleRuleSchedule</a>

---


### CloudwatchAlarmMuteRuleTagsList <a name="CloudwatchAlarmMuteRuleTagsList" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_alarm_mute_rule

cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudwatchAlarmMuteRuleTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTags">CloudwatchAlarmMuteRuleTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CloudwatchAlarmMuteRuleTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTags">CloudwatchAlarmMuteRuleTags</a>]

---


### CloudwatchAlarmMuteRuleTagsOutputReference <a name="CloudwatchAlarmMuteRuleTagsOutputReference" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_alarm_mute_rule

cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTags">CloudwatchAlarmMuteRuleTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudwatchAlarmMuteRuleTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleTags">CloudwatchAlarmMuteRuleTags</a>

---



