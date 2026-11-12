# `cloudwatchAlert` Submodule <a name="`cloudwatchAlert` Submodule" id="@cdktn/provider-awscc.cloudwatchAlert"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudwatchAlert <a name="CloudwatchAlert" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert awscc_cloudwatch_alert}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_alert

cloudwatchAlert.CloudwatchAlert(
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
  profile_id: str,
  rule: CloudwatchAlertRule,
  space_id: str,
  description: str = None,
  notification_rules: IResolvable | typing.List[CloudwatchAlertNotificationRules] = None,
  notifications_enabled: bool | IResolvable = None,
  tags: IResolvable | typing.List[CloudwatchAlertTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.Initializer.parameter.name">name</a></code> | <code>str</code> | The display name of the alert. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.Initializer.parameter.profileId">profile_id</a></code> | <code>str</code> | The ID of the access profile the alert uses to run its query and send notifications. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.Initializer.parameter.rule">rule</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRule">CloudwatchAlertRule</a></code> | The rule that defines how the alert is evaluated. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.Initializer.parameter.spaceId">space_id</a></code> | <code>str</code> | The ID of the space to create the alert in. Changing this value replaces the alert. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.Initializer.parameter.description">description</a></code> | <code>str</code> | A description of the alert. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.Initializer.parameter.notificationRules">notification_rules</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRules">CloudwatchAlertNotificationRules</a>]</code> | The notification rules that determine when and where notifications are sent. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.Initializer.parameter.notificationsEnabled">notifications_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the alert sends notifications. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTags">CloudwatchAlertTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.Initializer.parameter.name"></a>

- *Type:* str

The display name of the alert.

Names don't need to be unique within a space; the alert is identified by AlertId.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#name CloudwatchAlert#name}

---

##### `profile_id`<sup>Required</sup> <a name="profile_id" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.Initializer.parameter.profileId"></a>

- *Type:* str

The ID of the access profile the alert uses to run its query and send notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#profile_id CloudwatchAlert#profile_id}

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.Initializer.parameter.rule"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRule">CloudwatchAlertRule</a>

The rule that defines how the alert is evaluated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#rule CloudwatchAlert#rule}

---

##### `space_id`<sup>Required</sup> <a name="space_id" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.Initializer.parameter.spaceId"></a>

- *Type:* str

The ID of the space to create the alert in. Changing this value replaces the alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#space_id CloudwatchAlert#space_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.Initializer.parameter.description"></a>

- *Type:* str

A description of the alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#description CloudwatchAlert#description}

---

##### `notification_rules`<sup>Optional</sup> <a name="notification_rules" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.Initializer.parameter.notificationRules"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRules">CloudwatchAlertNotificationRules</a>]

The notification rules that determine when and where notifications are sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#notification_rules CloudwatchAlert#notification_rules}

---

##### `notifications_enabled`<sup>Optional</sup> <a name="notifications_enabled" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.Initializer.parameter.notificationsEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether the alert sends notifications.

When false, the alert is still evaluated and records its state, but sends nothing. Defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#notifications_enabled CloudwatchAlert#notifications_enabled}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTags">CloudwatchAlertTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#tags CloudwatchAlert#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.putNotificationRules">put_notification_rules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.putRule">put_rule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.resetNotificationRules">reset_notification_rules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.resetNotificationsEnabled">reset_notifications_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_notification_rules` <a name="put_notification_rules" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.putNotificationRules"></a>

```python
def put_notification_rules(
  value: IResolvable | typing.List[CloudwatchAlertNotificationRules]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.putNotificationRules.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRules">CloudwatchAlertNotificationRules</a>]

---

##### `put_rule` <a name="put_rule" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.putRule"></a>

```python
def put_rule(
  telemetry_rule: CloudwatchAlertRuleTelemetryRule
) -> None
```

###### `telemetry_rule`<sup>Required</sup> <a name="telemetry_rule" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.putRule.parameter.telemetryRule"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRule">CloudwatchAlertRuleTelemetryRule</a>

A rule that queries telemetry, evaluates the result against a condition, and sets how missing data is handled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#telemetry_rule CloudwatchAlert#telemetry_rule}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[CloudwatchAlertTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTags">CloudwatchAlertTags</a>]

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_notification_rules` <a name="reset_notification_rules" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.resetNotificationRules"></a>

```python
def reset_notification_rules() -> None
```

##### `reset_notifications_enabled` <a name="reset_notifications_enabled" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.resetNotificationsEnabled"></a>

```python
def reset_notifications_enabled() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a CloudwatchAlert resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.isConstruct"></a>

```python
from cdktn_provider_awscc import cloudwatch_alert

cloudwatchAlert.CloudwatchAlert.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.isTerraformElement"></a>

```python
from cdktn_provider_awscc import cloudwatch_alert

cloudwatchAlert.CloudwatchAlert.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.isTerraformResource"></a>

```python
from cdktn_provider_awscc import cloudwatch_alert

cloudwatchAlert.CloudwatchAlert.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import cloudwatch_alert

cloudwatchAlert.CloudwatchAlert.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a CloudwatchAlert resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CloudwatchAlert to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CloudwatchAlert that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CloudwatchAlert to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.alertId">alert_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.notificationRules">notification_rules</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesList">CloudwatchAlertNotificationRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.rule">rule</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference">CloudwatchAlertRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsList">CloudwatchAlertTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.notificationRulesInput">notification_rules_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRules">CloudwatchAlertNotificationRules</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.notificationsEnabledInput">notifications_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.profileIdInput">profile_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.ruleInput">rule_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRule">CloudwatchAlertRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.spaceIdInput">space_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTags">CloudwatchAlertTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.notificationsEnabled">notifications_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.profileId">profile_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.spaceId">space_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `alert_id`<sup>Required</sup> <a name="alert_id" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.alertId"></a>

```python
alert_id: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `notification_rules`<sup>Required</sup> <a name="notification_rules" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.notificationRules"></a>

```python
notification_rules: CloudwatchAlertNotificationRulesList
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesList">CloudwatchAlertNotificationRulesList</a>

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.rule"></a>

```python
rule: CloudwatchAlertRuleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference">CloudwatchAlertRuleOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.tags"></a>

```python
tags: CloudwatchAlertTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsList">CloudwatchAlertTagsList</a>

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `notification_rules_input`<sup>Optional</sup> <a name="notification_rules_input" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.notificationRulesInput"></a>

```python
notification_rules_input: IResolvable | typing.List[CloudwatchAlertNotificationRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRules">CloudwatchAlertNotificationRules</a>]

---

##### `notifications_enabled_input`<sup>Optional</sup> <a name="notifications_enabled_input" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.notificationsEnabledInput"></a>

```python
notifications_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `profile_id_input`<sup>Optional</sup> <a name="profile_id_input" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.profileIdInput"></a>

```python
profile_id_input: str
```

- *Type:* str

---

##### `rule_input`<sup>Optional</sup> <a name="rule_input" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.ruleInput"></a>

```python
rule_input: IResolvable | CloudwatchAlertRule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRule">CloudwatchAlertRule</a>

---

##### `space_id_input`<sup>Optional</sup> <a name="space_id_input" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.spaceIdInput"></a>

```python
space_id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[CloudwatchAlertTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTags">CloudwatchAlertTags</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `notifications_enabled`<sup>Required</sup> <a name="notifications_enabled" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.notificationsEnabled"></a>

```python
notifications_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `profile_id`<sup>Required</sup> <a name="profile_id" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.profileId"></a>

```python
profile_id: str
```

- *Type:* str

---

##### `space_id`<sup>Required</sup> <a name="space_id" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.spaceId"></a>

```python
space_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlert.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CloudwatchAlertConfig <a name="CloudwatchAlertConfig" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_alert

cloudwatchAlert.CloudwatchAlertConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  profile_id: str,
  rule: CloudwatchAlertRule,
  space_id: str,
  description: str = None,
  notification_rules: IResolvable | typing.List[CloudwatchAlertNotificationRules] = None,
  notifications_enabled: bool | IResolvable = None,
  tags: IResolvable | typing.List[CloudwatchAlertTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig.property.name">name</a></code> | <code>str</code> | The display name of the alert. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig.property.profileId">profile_id</a></code> | <code>str</code> | The ID of the access profile the alert uses to run its query and send notifications. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig.property.rule">rule</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRule">CloudwatchAlertRule</a></code> | The rule that defines how the alert is evaluated. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig.property.spaceId">space_id</a></code> | <code>str</code> | The ID of the space to create the alert in. Changing this value replaces the alert. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig.property.description">description</a></code> | <code>str</code> | A description of the alert. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig.property.notificationRules">notification_rules</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRules">CloudwatchAlertNotificationRules</a>]</code> | The notification rules that determine when and where notifications are sent. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig.property.notificationsEnabled">notifications_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the alert sends notifications. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTags">CloudwatchAlertTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The display name of the alert.

Names don't need to be unique within a space; the alert is identified by AlertId.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#name CloudwatchAlert#name}

---

##### `profile_id`<sup>Required</sup> <a name="profile_id" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig.property.profileId"></a>

```python
profile_id: str
```

- *Type:* str

The ID of the access profile the alert uses to run its query and send notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#profile_id CloudwatchAlert#profile_id}

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig.property.rule"></a>

```python
rule: CloudwatchAlertRule
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRule">CloudwatchAlertRule</a>

The rule that defines how the alert is evaluated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#rule CloudwatchAlert#rule}

---

##### `space_id`<sup>Required</sup> <a name="space_id" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig.property.spaceId"></a>

```python
space_id: str
```

- *Type:* str

The ID of the space to create the alert in. Changing this value replaces the alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#space_id CloudwatchAlert#space_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A description of the alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#description CloudwatchAlert#description}

---

##### `notification_rules`<sup>Optional</sup> <a name="notification_rules" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig.property.notificationRules"></a>

```python
notification_rules: IResolvable | typing.List[CloudwatchAlertNotificationRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRules">CloudwatchAlertNotificationRules</a>]

The notification rules that determine when and where notifications are sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#notification_rules CloudwatchAlert#notification_rules}

---

##### `notifications_enabled`<sup>Optional</sup> <a name="notifications_enabled" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig.property.notificationsEnabled"></a>

```python
notifications_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether the alert sends notifications.

When false, the alert is still evaluated and records its state, but sends nothing. Defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#notifications_enabled CloudwatchAlert#notifications_enabled}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[CloudwatchAlertTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTags">CloudwatchAlertTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#tags CloudwatchAlert#tags}

---

### CloudwatchAlertNotificationRules <a name="CloudwatchAlertNotificationRules" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRules.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_alert

cloudwatchAlert.CloudwatchAlertNotificationRules(
  target: CloudwatchAlertNotificationRulesTarget = None,
  trigger: CloudwatchAlertNotificationRulesTrigger = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRules.property.target">target</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTarget">CloudwatchAlertNotificationRulesTarget</a></code> | Where the notification is sent. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRules.property.trigger">trigger</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTrigger">CloudwatchAlertNotificationRulesTrigger</a></code> | The alert states that trigger the notification rule. |

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRules.property.target"></a>

```python
target: CloudwatchAlertNotificationRulesTarget
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTarget">CloudwatchAlertNotificationRulesTarget</a>

Where the notification is sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#target CloudwatchAlert#target}

---

##### `trigger`<sup>Optional</sup> <a name="trigger" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRules.property.trigger"></a>

```python
trigger: CloudwatchAlertNotificationRulesTrigger
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTrigger">CloudwatchAlertNotificationRulesTrigger</a>

The alert states that trigger the notification rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#trigger CloudwatchAlert#trigger}

---

### CloudwatchAlertNotificationRulesTarget <a name="CloudwatchAlertNotificationRulesTarget" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTarget.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_alert

cloudwatchAlert.CloudwatchAlertNotificationRulesTarget(
  arn: str = None,
  metadata: typing.Mapping[str] = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTarget.property.arn">arn</a></code> | <code>str</code> | The ARN of the target. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTarget.property.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | Settings specific to the target, as key-value pairs (up to 20). |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTarget.property.type">type</a></code> | <code>str</code> | The target type. Valid values: sns, slack, pagerduty. |

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTarget.property.arn"></a>

```python
arn: str
```

- *Type:* str

The ARN of the target.

For sns, the ARN of the Amazon SNS topic. For slack and pagerduty, the ARN of a CloudWatch Omni integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#arn CloudwatchAlert#arn}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTarget.property.metadata"></a>

```python
metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Settings specific to the target, as key-value pairs (up to 20).

The keys depend on the integration type. Not used for sns targets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#metadata CloudwatchAlert#metadata}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTarget.property.type"></a>

```python
type: str
```

- *Type:* str

The target type. Valid values: sns, slack, pagerduty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#type CloudwatchAlert#type}

---

### CloudwatchAlertNotificationRulesTrigger <a name="CloudwatchAlertNotificationRulesTrigger" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTrigger"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTrigger.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_alert

cloudwatchAlert.CloudwatchAlertNotificationRulesTrigger(
  state_values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTrigger.property.stateValues">state_values</a></code> | <code>typing.List[str]</code> | The alert states that trigger this rule. |

---

##### `state_values`<sup>Optional</sup> <a name="state_values" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTrigger.property.stateValues"></a>

```python
state_values: typing.List[str]
```

- *Type:* typing.List[str]

The alert states that trigger this rule.

A notification is sent when the alert enters any listed state. If omitted or empty, every state triggers the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#state_values CloudwatchAlert#state_values}

---

### CloudwatchAlertRule <a name="CloudwatchAlertRule" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRule.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_alert

cloudwatchAlert.CloudwatchAlertRule(
  telemetry_rule: CloudwatchAlertRuleTelemetryRule
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRule.property.telemetryRule">telemetry_rule</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRule">CloudwatchAlertRuleTelemetryRule</a></code> | A rule that queries telemetry, evaluates the result against a condition, and sets how missing data is handled. |

---

##### `telemetry_rule`<sup>Required</sup> <a name="telemetry_rule" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRule.property.telemetryRule"></a>

```python
telemetry_rule: CloudwatchAlertRuleTelemetryRule
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRule">CloudwatchAlertRuleTelemetryRule</a>

A rule that queries telemetry, evaluates the result against a condition, and sets how missing data is handled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#telemetry_rule CloudwatchAlert#telemetry_rule}

---

### CloudwatchAlertRuleTelemetryRule <a name="CloudwatchAlertRuleTelemetryRule" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRule.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_alert

cloudwatchAlert.CloudwatchAlertRuleTelemetryRule(
  condition: CloudwatchAlertRuleTelemetryRuleCondition,
  evaluation: CloudwatchAlertRuleTelemetryRuleEvaluation,
  query: CloudwatchAlertRuleTelemetryRuleQuery,
  no_data: CloudwatchAlertRuleTelemetryRuleNoData = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRule.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleCondition">CloudwatchAlertRuleTelemetryRuleCondition</a></code> | The thresholds that set the alert's state. Specify at least one of WarningThreshold and CriticalThreshold. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRule.property.evaluation">evaluation</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluation">CloudwatchAlertRuleTelemetryRuleEvaluation</a></code> | How often the alert is evaluated, and how long a change must last before the state changes. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRule.property.query">query</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQuery">CloudwatchAlertRuleTelemetryRuleQuery</a></code> | The query the alert runs, and the language it is written in. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRule.property.noData">no_data</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoData">CloudwatchAlertRuleTelemetryRuleNoData</a></code> | How the alert behaves when an evaluation returns no data. If omitted, the alert reports NODATA. |

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRule.property.condition"></a>

```python
condition: CloudwatchAlertRuleTelemetryRuleCondition
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleCondition">CloudwatchAlertRuleTelemetryRuleCondition</a>

The thresholds that set the alert's state. Specify at least one of WarningThreshold and CriticalThreshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#condition CloudwatchAlert#condition}

---

##### `evaluation`<sup>Required</sup> <a name="evaluation" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRule.property.evaluation"></a>

```python
evaluation: CloudwatchAlertRuleTelemetryRuleEvaluation
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluation">CloudwatchAlertRuleTelemetryRuleEvaluation</a>

How often the alert is evaluated, and how long a change must last before the state changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#evaluation CloudwatchAlert#evaluation}

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRule.property.query"></a>

```python
query: CloudwatchAlertRuleTelemetryRuleQuery
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQuery">CloudwatchAlertRuleTelemetryRuleQuery</a>

The query the alert runs, and the language it is written in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#query CloudwatchAlert#query}

---

##### `no_data`<sup>Optional</sup> <a name="no_data" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRule.property.noData"></a>

```python
no_data: CloudwatchAlertRuleTelemetryRuleNoData
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoData">CloudwatchAlertRuleTelemetryRuleNoData</a>

How the alert behaves when an evaluation returns no data. If omitted, the alert reports NODATA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#no_data CloudwatchAlert#no_data}

---

### CloudwatchAlertRuleTelemetryRuleCondition <a name="CloudwatchAlertRuleTelemetryRuleCondition" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleCondition.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_alert

cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleCondition(
  comparator: str = None,
  critical_threshold: typing.Union[int, float] = None,
  threshold_field: str = None,
  threshold_mode: str = None,
  warning_threshold: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleCondition.property.comparator">comparator</a></code> | <code>str</code> | The comparison operator. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleCondition.property.criticalThreshold">critical_threshold</a></code> | <code>typing.Union[int, float]</code> | The value at which the alert enters the CRITICAL state. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleCondition.property.thresholdField">threshold_field</a></code> | <code>str</code> | The result field to compare against the threshold. Required when ThresholdMode is FIELD_VALUE. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleCondition.property.thresholdMode">threshold_mode</a></code> | <code>str</code> | How the threshold is applied. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleCondition.property.warningThreshold">warning_threshold</a></code> | <code>typing.Union[int, float]</code> | The value at which the alert enters the WARNING state. |

---

##### `comparator`<sup>Optional</sup> <a name="comparator" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleCondition.property.comparator"></a>

```python
comparator: str
```

- *Type:* str

The comparison operator.

Valid values: GT, GTE, LT, LTE (greater than, greater than or equal to, less than, less than or equal to).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#comparator CloudwatchAlert#comparator}

---

##### `critical_threshold`<sup>Optional</sup> <a name="critical_threshold" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleCondition.property.criticalThreshold"></a>

```python
critical_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The value at which the alert enters the CRITICAL state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#critical_threshold CloudwatchAlert#critical_threshold}

---

##### `threshold_field`<sup>Optional</sup> <a name="threshold_field" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleCondition.property.thresholdField"></a>

```python
threshold_field: str
```

- *Type:* str

The result field to compare against the threshold. Required when ThresholdMode is FIELD_VALUE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#threshold_field CloudwatchAlert#threshold_field}

---

##### `threshold_mode`<sup>Optional</sup> <a name="threshold_mode" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleCondition.property.thresholdMode"></a>

```python
threshold_mode: str
```

- *Type:* str

How the threshold is applied.

COUNT_OF_RESULTS compares the number of rows the query returns. FIELD_VALUE compares the value of ThresholdField in each result row; each row is tracked separately.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#threshold_mode CloudwatchAlert#threshold_mode}

---

##### `warning_threshold`<sup>Optional</sup> <a name="warning_threshold" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleCondition.property.warningThreshold"></a>

```python
warning_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The value at which the alert enters the WARNING state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#warning_threshold CloudwatchAlert#warning_threshold}

---

### CloudwatchAlertRuleTelemetryRuleEvaluation <a name="CloudwatchAlertRuleTelemetryRuleEvaluation" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluation.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_alert

cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluation(
  interval_seconds: typing.Union[int, float],
  pending_duration_seconds: typing.Union[int, float] = None,
  recovery_duration_seconds: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluation.property.intervalSeconds">interval_seconds</a></code> | <code>typing.Union[int, float]</code> | The time between evaluations, in seconds. Valid values: 30, 60, 120, 300, 600, 900, 1800, 3600. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluation.property.pendingDurationSeconds">pending_duration_seconds</a></code> | <code>typing.Union[int, float]</code> | How long a threshold breach must last before the alert changes state, in seconds. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluation.property.recoveryDurationSeconds">recovery_duration_seconds</a></code> | <code>typing.Union[int, float]</code> | How long the result must stay within its thresholds before the alert returns to OK, in seconds. |

---

##### `interval_seconds`<sup>Required</sup> <a name="interval_seconds" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluation.property.intervalSeconds"></a>

```python
interval_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The time between evaluations, in seconds. Valid values: 30, 60, 120, 300, 600, 900, 1800, 3600.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#interval_seconds CloudwatchAlert#interval_seconds}

---

##### `pending_duration_seconds`<sup>Optional</sup> <a name="pending_duration_seconds" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluation.property.pendingDurationSeconds"></a>

```python
pending_duration_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

How long a threshold breach must last before the alert changes state, in seconds.

Must be a multiple of IntervalSeconds. 0 changes state immediately.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#pending_duration_seconds CloudwatchAlert#pending_duration_seconds}

---

##### `recovery_duration_seconds`<sup>Optional</sup> <a name="recovery_duration_seconds" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluation.property.recoveryDurationSeconds"></a>

```python
recovery_duration_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

How long the result must stay within its thresholds before the alert returns to OK, in seconds.

Must be a multiple of IntervalSeconds. 0 returns to OK immediately.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#recovery_duration_seconds CloudwatchAlert#recovery_duration_seconds}

---

### CloudwatchAlertRuleTelemetryRuleNoData <a name="CloudwatchAlertRuleTelemetryRuleNoData" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoData"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoData.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_alert

cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoData(
  treat_as: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoData.property.treatAs">treat_as</a></code> | <code>str</code> | The state to report when an evaluation returns no data. Valid values: OK, WARNING, CRITICAL, NODATA. |

---

##### `treat_as`<sup>Optional</sup> <a name="treat_as" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoData.property.treatAs"></a>

```python
treat_as: str
```

- *Type:* str

The state to report when an evaluation returns no data. Valid values: OK, WARNING, CRITICAL, NODATA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#treat_as CloudwatchAlert#treat_as}

---

### CloudwatchAlertRuleTelemetryRuleQuery <a name="CloudwatchAlertRuleTelemetryRuleQuery" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQuery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQuery.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_alert

cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQuery(
  expression: str,
  language: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQuery.property.expression">expression</a></code> | <code>str</code> | The query expression. For PromQL, the series value is returned in a field named value. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQuery.property.language">language</a></code> | <code>str</code> | The query language. Valid values: SQL, PROMQL. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQuery.property.expression"></a>

```python
expression: str
```

- *Type:* str

The query expression. For PromQL, the series value is returned in a field named value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#expression CloudwatchAlert#expression}

---

##### `language`<sup>Required</sup> <a name="language" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQuery.property.language"></a>

```python
language: str
```

- *Type:* str

The query language. Valid values: SQL, PROMQL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#language CloudwatchAlert#language}

---

### CloudwatchAlertTags <a name="CloudwatchAlertTags" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTags.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_alert

cloudwatchAlert.CloudwatchAlertTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#key CloudwatchAlert#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#value CloudwatchAlert#value}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudwatchAlertNotificationRulesList <a name="CloudwatchAlertNotificationRulesList" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesList.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_alert

cloudwatchAlert.CloudwatchAlertNotificationRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudwatchAlertNotificationRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRules">CloudwatchAlertNotificationRules</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CloudwatchAlertNotificationRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRules">CloudwatchAlertNotificationRules</a>]

---


### CloudwatchAlertNotificationRulesOutputReference <a name="CloudwatchAlertNotificationRulesOutputReference" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_alert

cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.putTarget">put_target</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.putTrigger">put_trigger</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.resetTarget">reset_target</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.resetTrigger">reset_trigger</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_target` <a name="put_target" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.putTarget"></a>

```python
def put_target(
  arn: str = None,
  metadata: typing.Mapping[str] = None,
  type: str = None
) -> None
```

###### `arn`<sup>Optional</sup> <a name="arn" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.putTarget.parameter.arn"></a>

- *Type:* str

The ARN of the target.

For sns, the ARN of the Amazon SNS topic. For slack and pagerduty, the ARN of a CloudWatch Omni integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#arn CloudwatchAlert#arn}

---

###### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.putTarget.parameter.metadata"></a>

- *Type:* typing.Mapping[str]

Settings specific to the target, as key-value pairs (up to 20).

The keys depend on the integration type. Not used for sns targets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#metadata CloudwatchAlert#metadata}

---

###### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.putTarget.parameter.type"></a>

- *Type:* str

The target type. Valid values: sns, slack, pagerduty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#type CloudwatchAlert#type}

---

##### `put_trigger` <a name="put_trigger" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.putTrigger"></a>

```python
def put_trigger(
  state_values: typing.List[str] = None
) -> None
```

###### `state_values`<sup>Optional</sup> <a name="state_values" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.putTrigger.parameter.stateValues"></a>

- *Type:* typing.List[str]

The alert states that trigger this rule.

A notification is sent when the alert enters any listed state. If omitted or empty, every state triggers the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#state_values CloudwatchAlert#state_values}

---

##### `reset_target` <a name="reset_target" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.resetTarget"></a>

```python
def reset_target() -> None
```

##### `reset_trigger` <a name="reset_trigger" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.resetTrigger"></a>

```python
def reset_trigger() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.property.target">target</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference">CloudwatchAlertNotificationRulesTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.property.trigger">trigger</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference">CloudwatchAlertNotificationRulesTriggerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.property.targetInput">target_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTarget">CloudwatchAlertNotificationRulesTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.property.triggerInput">trigger_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTrigger">CloudwatchAlertNotificationRulesTrigger</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRules">CloudwatchAlertNotificationRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.property.target"></a>

```python
target: CloudwatchAlertNotificationRulesTargetOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference">CloudwatchAlertNotificationRulesTargetOutputReference</a>

---

##### `trigger`<sup>Required</sup> <a name="trigger" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.property.trigger"></a>

```python
trigger: CloudwatchAlertNotificationRulesTriggerOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference">CloudwatchAlertNotificationRulesTriggerOutputReference</a>

---

##### `target_input`<sup>Optional</sup> <a name="target_input" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.property.targetInput"></a>

```python
target_input: IResolvable | CloudwatchAlertNotificationRulesTarget
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTarget">CloudwatchAlertNotificationRulesTarget</a>

---

##### `trigger_input`<sup>Optional</sup> <a name="trigger_input" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.property.triggerInput"></a>

```python
trigger_input: IResolvable | CloudwatchAlertNotificationRulesTrigger
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTrigger">CloudwatchAlertNotificationRulesTrigger</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudwatchAlertNotificationRules
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRules">CloudwatchAlertNotificationRules</a>

---


### CloudwatchAlertNotificationRulesTargetOutputReference <a name="CloudwatchAlertNotificationRulesTargetOutputReference" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_alert

cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.resetArn">reset_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.resetMetadata">reset_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_arn` <a name="reset_arn" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.resetArn"></a>

```python
def reset_arn() -> None
```

##### `reset_metadata` <a name="reset_metadata" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.resetMetadata"></a>

```python
def reset_metadata() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.property.arnInput">arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.property.metadataInput">metadata_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.property.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTarget">CloudwatchAlertNotificationRulesTarget</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `arn_input`<sup>Optional</sup> <a name="arn_input" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.property.arnInput"></a>

```python
arn_input: str
```

- *Type:* str

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.property.metadataInput"></a>

```python
metadata_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.property.metadata"></a>

```python
metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTargetOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudwatchAlertNotificationRulesTarget
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTarget">CloudwatchAlertNotificationRulesTarget</a>

---


### CloudwatchAlertNotificationRulesTriggerOutputReference <a name="CloudwatchAlertNotificationRulesTriggerOutputReference" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_alert

cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.resetStateValues">reset_state_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_state_values` <a name="reset_state_values" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.resetStateValues"></a>

```python
def reset_state_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.property.stateValuesInput">state_values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.property.stateValues">state_values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTrigger">CloudwatchAlertNotificationRulesTrigger</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `state_values_input`<sup>Optional</sup> <a name="state_values_input" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.property.stateValuesInput"></a>

```python
state_values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `state_values`<sup>Required</sup> <a name="state_values" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.property.stateValues"></a>

```python
state_values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTriggerOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudwatchAlertNotificationRulesTrigger
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertNotificationRulesTrigger">CloudwatchAlertNotificationRulesTrigger</a>

---


### CloudwatchAlertRuleOutputReference <a name="CloudwatchAlertRuleOutputReference" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_alert

cloudwatchAlert.CloudwatchAlertRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.putTelemetryRule">put_telemetry_rule</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_telemetry_rule` <a name="put_telemetry_rule" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.putTelemetryRule"></a>

```python
def put_telemetry_rule(
  condition: CloudwatchAlertRuleTelemetryRuleCondition,
  evaluation: CloudwatchAlertRuleTelemetryRuleEvaluation,
  query: CloudwatchAlertRuleTelemetryRuleQuery,
  no_data: CloudwatchAlertRuleTelemetryRuleNoData = None
) -> None
```

###### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.putTelemetryRule.parameter.condition"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleCondition">CloudwatchAlertRuleTelemetryRuleCondition</a>

The thresholds that set the alert's state. Specify at least one of WarningThreshold and CriticalThreshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#condition CloudwatchAlert#condition}

---

###### `evaluation`<sup>Required</sup> <a name="evaluation" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.putTelemetryRule.parameter.evaluation"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluation">CloudwatchAlertRuleTelemetryRuleEvaluation</a>

How often the alert is evaluated, and how long a change must last before the state changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#evaluation CloudwatchAlert#evaluation}

---

###### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.putTelemetryRule.parameter.query"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQuery">CloudwatchAlertRuleTelemetryRuleQuery</a>

The query the alert runs, and the language it is written in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#query CloudwatchAlert#query}

---

###### `no_data`<sup>Optional</sup> <a name="no_data" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.putTelemetryRule.parameter.noData"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoData">CloudwatchAlertRuleTelemetryRuleNoData</a>

How the alert behaves when an evaluation returns no data. If omitted, the alert reports NODATA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#no_data CloudwatchAlert#no_data}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.property.telemetryRule">telemetry_rule</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference">CloudwatchAlertRuleTelemetryRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.property.telemetryRuleInput">telemetry_rule_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRule">CloudwatchAlertRuleTelemetryRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRule">CloudwatchAlertRule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `telemetry_rule`<sup>Required</sup> <a name="telemetry_rule" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.property.telemetryRule"></a>

```python
telemetry_rule: CloudwatchAlertRuleTelemetryRuleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference">CloudwatchAlertRuleTelemetryRuleOutputReference</a>

---

##### `telemetry_rule_input`<sup>Optional</sup> <a name="telemetry_rule_input" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.property.telemetryRuleInput"></a>

```python
telemetry_rule_input: IResolvable | CloudwatchAlertRuleTelemetryRule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRule">CloudwatchAlertRuleTelemetryRule</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudwatchAlertRule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRule">CloudwatchAlertRule</a>

---


### CloudwatchAlertRuleTelemetryRuleConditionOutputReference <a name="CloudwatchAlertRuleTelemetryRuleConditionOutputReference" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_alert

cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.resetComparator">reset_comparator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.resetCriticalThreshold">reset_critical_threshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.resetThresholdField">reset_threshold_field</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.resetThresholdMode">reset_threshold_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.resetWarningThreshold">reset_warning_threshold</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_comparator` <a name="reset_comparator" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.resetComparator"></a>

```python
def reset_comparator() -> None
```

##### `reset_critical_threshold` <a name="reset_critical_threshold" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.resetCriticalThreshold"></a>

```python
def reset_critical_threshold() -> None
```

##### `reset_threshold_field` <a name="reset_threshold_field" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.resetThresholdField"></a>

```python
def reset_threshold_field() -> None
```

##### `reset_threshold_mode` <a name="reset_threshold_mode" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.resetThresholdMode"></a>

```python
def reset_threshold_mode() -> None
```

##### `reset_warning_threshold` <a name="reset_warning_threshold" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.resetWarningThreshold"></a>

```python
def reset_warning_threshold() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.property.comparatorInput">comparator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.property.criticalThresholdInput">critical_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.property.thresholdFieldInput">threshold_field_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.property.thresholdModeInput">threshold_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.property.warningThresholdInput">warning_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.property.comparator">comparator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.property.criticalThreshold">critical_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.property.thresholdField">threshold_field</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.property.thresholdMode">threshold_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.property.warningThreshold">warning_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleCondition">CloudwatchAlertRuleTelemetryRuleCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `comparator_input`<sup>Optional</sup> <a name="comparator_input" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.property.comparatorInput"></a>

```python
comparator_input: str
```

- *Type:* str

---

##### `critical_threshold_input`<sup>Optional</sup> <a name="critical_threshold_input" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.property.criticalThresholdInput"></a>

```python
critical_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `threshold_field_input`<sup>Optional</sup> <a name="threshold_field_input" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.property.thresholdFieldInput"></a>

```python
threshold_field_input: str
```

- *Type:* str

---

##### `threshold_mode_input`<sup>Optional</sup> <a name="threshold_mode_input" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.property.thresholdModeInput"></a>

```python
threshold_mode_input: str
```

- *Type:* str

---

##### `warning_threshold_input`<sup>Optional</sup> <a name="warning_threshold_input" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.property.warningThresholdInput"></a>

```python
warning_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `comparator`<sup>Required</sup> <a name="comparator" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.property.comparator"></a>

```python
comparator: str
```

- *Type:* str

---

##### `critical_threshold`<sup>Required</sup> <a name="critical_threshold" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.property.criticalThreshold"></a>

```python
critical_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `threshold_field`<sup>Required</sup> <a name="threshold_field" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.property.thresholdField"></a>

```python
threshold_field: str
```

- *Type:* str

---

##### `threshold_mode`<sup>Required</sup> <a name="threshold_mode" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.property.thresholdMode"></a>

```python
threshold_mode: str
```

- *Type:* str

---

##### `warning_threshold`<sup>Required</sup> <a name="warning_threshold" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.property.warningThreshold"></a>

```python
warning_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudwatchAlertRuleTelemetryRuleCondition
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleCondition">CloudwatchAlertRuleTelemetryRuleCondition</a>

---


### CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference <a name="CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_alert

cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.resetPendingDurationSeconds">reset_pending_duration_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.resetRecoveryDurationSeconds">reset_recovery_duration_seconds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_pending_duration_seconds` <a name="reset_pending_duration_seconds" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.resetPendingDurationSeconds"></a>

```python
def reset_pending_duration_seconds() -> None
```

##### `reset_recovery_duration_seconds` <a name="reset_recovery_duration_seconds" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.resetRecoveryDurationSeconds"></a>

```python
def reset_recovery_duration_seconds() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.property.intervalSecondsInput">interval_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.property.pendingDurationSecondsInput">pending_duration_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.property.recoveryDurationSecondsInput">recovery_duration_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.property.intervalSeconds">interval_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.property.pendingDurationSeconds">pending_duration_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.property.recoveryDurationSeconds">recovery_duration_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluation">CloudwatchAlertRuleTelemetryRuleEvaluation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `interval_seconds_input`<sup>Optional</sup> <a name="interval_seconds_input" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.property.intervalSecondsInput"></a>

```python
interval_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `pending_duration_seconds_input`<sup>Optional</sup> <a name="pending_duration_seconds_input" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.property.pendingDurationSecondsInput"></a>

```python
pending_duration_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `recovery_duration_seconds_input`<sup>Optional</sup> <a name="recovery_duration_seconds_input" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.property.recoveryDurationSecondsInput"></a>

```python
recovery_duration_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `interval_seconds`<sup>Required</sup> <a name="interval_seconds" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.property.intervalSeconds"></a>

```python
interval_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `pending_duration_seconds`<sup>Required</sup> <a name="pending_duration_seconds" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.property.pendingDurationSeconds"></a>

```python
pending_duration_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `recovery_duration_seconds`<sup>Required</sup> <a name="recovery_duration_seconds" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.property.recoveryDurationSeconds"></a>

```python
recovery_duration_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudwatchAlertRuleTelemetryRuleEvaluation
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluation">CloudwatchAlertRuleTelemetryRuleEvaluation</a>

---


### CloudwatchAlertRuleTelemetryRuleNoDataOutputReference <a name="CloudwatchAlertRuleTelemetryRuleNoDataOutputReference" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_alert

cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.resetTreatAs">reset_treat_as</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_treat_as` <a name="reset_treat_as" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.resetTreatAs"></a>

```python
def reset_treat_as() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.property.treatAsInput">treat_as_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.property.treatAs">treat_as</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoData">CloudwatchAlertRuleTelemetryRuleNoData</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `treat_as_input`<sup>Optional</sup> <a name="treat_as_input" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.property.treatAsInput"></a>

```python
treat_as_input: str
```

- *Type:* str

---

##### `treat_as`<sup>Required</sup> <a name="treat_as" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.property.treatAs"></a>

```python
treat_as: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudwatchAlertRuleTelemetryRuleNoData
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoData">CloudwatchAlertRuleTelemetryRuleNoData</a>

---


### CloudwatchAlertRuleTelemetryRuleOutputReference <a name="CloudwatchAlertRuleTelemetryRuleOutputReference" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_alert

cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.putCondition">put_condition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.putEvaluation">put_evaluation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.putNoData">put_no_data</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.putQuery">put_query</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.resetNoData">reset_no_data</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_condition` <a name="put_condition" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.putCondition"></a>

```python
def put_condition(
  comparator: str = None,
  critical_threshold: typing.Union[int, float] = None,
  threshold_field: str = None,
  threshold_mode: str = None,
  warning_threshold: typing.Union[int, float] = None
) -> None
```

###### `comparator`<sup>Optional</sup> <a name="comparator" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.putCondition.parameter.comparator"></a>

- *Type:* str

The comparison operator.

Valid values: GT, GTE, LT, LTE (greater than, greater than or equal to, less than, less than or equal to).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#comparator CloudwatchAlert#comparator}

---

###### `critical_threshold`<sup>Optional</sup> <a name="critical_threshold" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.putCondition.parameter.criticalThreshold"></a>

- *Type:* typing.Union[int, float]

The value at which the alert enters the CRITICAL state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#critical_threshold CloudwatchAlert#critical_threshold}

---

###### `threshold_field`<sup>Optional</sup> <a name="threshold_field" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.putCondition.parameter.thresholdField"></a>

- *Type:* str

The result field to compare against the threshold. Required when ThresholdMode is FIELD_VALUE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#threshold_field CloudwatchAlert#threshold_field}

---

###### `threshold_mode`<sup>Optional</sup> <a name="threshold_mode" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.putCondition.parameter.thresholdMode"></a>

- *Type:* str

How the threshold is applied.

COUNT_OF_RESULTS compares the number of rows the query returns. FIELD_VALUE compares the value of ThresholdField in each result row; each row is tracked separately.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#threshold_mode CloudwatchAlert#threshold_mode}

---

###### `warning_threshold`<sup>Optional</sup> <a name="warning_threshold" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.putCondition.parameter.warningThreshold"></a>

- *Type:* typing.Union[int, float]

The value at which the alert enters the WARNING state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#warning_threshold CloudwatchAlert#warning_threshold}

---

##### `put_evaluation` <a name="put_evaluation" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.putEvaluation"></a>

```python
def put_evaluation(
  interval_seconds: typing.Union[int, float],
  pending_duration_seconds: typing.Union[int, float] = None,
  recovery_duration_seconds: typing.Union[int, float] = None
) -> None
```

###### `interval_seconds`<sup>Required</sup> <a name="interval_seconds" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.putEvaluation.parameter.intervalSeconds"></a>

- *Type:* typing.Union[int, float]

The time between evaluations, in seconds. Valid values: 30, 60, 120, 300, 600, 900, 1800, 3600.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#interval_seconds CloudwatchAlert#interval_seconds}

---

###### `pending_duration_seconds`<sup>Optional</sup> <a name="pending_duration_seconds" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.putEvaluation.parameter.pendingDurationSeconds"></a>

- *Type:* typing.Union[int, float]

How long a threshold breach must last before the alert changes state, in seconds.

Must be a multiple of IntervalSeconds. 0 changes state immediately.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#pending_duration_seconds CloudwatchAlert#pending_duration_seconds}

---

###### `recovery_duration_seconds`<sup>Optional</sup> <a name="recovery_duration_seconds" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.putEvaluation.parameter.recoveryDurationSeconds"></a>

- *Type:* typing.Union[int, float]

How long the result must stay within its thresholds before the alert returns to OK, in seconds.

Must be a multiple of IntervalSeconds. 0 returns to OK immediately.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#recovery_duration_seconds CloudwatchAlert#recovery_duration_seconds}

---

##### `put_no_data` <a name="put_no_data" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.putNoData"></a>

```python
def put_no_data(
  treat_as: str = None
) -> None
```

###### `treat_as`<sup>Optional</sup> <a name="treat_as" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.putNoData.parameter.treatAs"></a>

- *Type:* str

The state to report when an evaluation returns no data. Valid values: OK, WARNING, CRITICAL, NODATA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#treat_as CloudwatchAlert#treat_as}

---

##### `put_query` <a name="put_query" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.putQuery"></a>

```python
def put_query(
  expression: str,
  language: str
) -> None
```

###### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.putQuery.parameter.expression"></a>

- *Type:* str

The query expression. For PromQL, the series value is returned in a field named value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#expression CloudwatchAlert#expression}

---

###### `language`<sup>Required</sup> <a name="language" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.putQuery.parameter.language"></a>

- *Type:* str

The query language. Valid values: SQL, PROMQL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/cloudwatch_alert#language CloudwatchAlert#language}

---

##### `reset_no_data` <a name="reset_no_data" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.resetNoData"></a>

```python
def reset_no_data() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference">CloudwatchAlertRuleTelemetryRuleConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.property.evaluation">evaluation</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference">CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.property.noData">no_data</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference">CloudwatchAlertRuleTelemetryRuleNoDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.property.query">query</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference">CloudwatchAlertRuleTelemetryRuleQueryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.property.conditionInput">condition_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleCondition">CloudwatchAlertRuleTelemetryRuleCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.property.evaluationInput">evaluation_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluation">CloudwatchAlertRuleTelemetryRuleEvaluation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.property.noDataInput">no_data_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoData">CloudwatchAlertRuleTelemetryRuleNoData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.property.queryInput">query_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQuery">CloudwatchAlertRuleTelemetryRuleQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRule">CloudwatchAlertRuleTelemetryRule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.property.condition"></a>

```python
condition: CloudwatchAlertRuleTelemetryRuleConditionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleConditionOutputReference">CloudwatchAlertRuleTelemetryRuleConditionOutputReference</a>

---

##### `evaluation`<sup>Required</sup> <a name="evaluation" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.property.evaluation"></a>

```python
evaluation: CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference">CloudwatchAlertRuleTelemetryRuleEvaluationOutputReference</a>

---

##### `no_data`<sup>Required</sup> <a name="no_data" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.property.noData"></a>

```python
no_data: CloudwatchAlertRuleTelemetryRuleNoDataOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoDataOutputReference">CloudwatchAlertRuleTelemetryRuleNoDataOutputReference</a>

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.property.query"></a>

```python
query: CloudwatchAlertRuleTelemetryRuleQueryOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference">CloudwatchAlertRuleTelemetryRuleQueryOutputReference</a>

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.property.conditionInput"></a>

```python
condition_input: IResolvable | CloudwatchAlertRuleTelemetryRuleCondition
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleCondition">CloudwatchAlertRuleTelemetryRuleCondition</a>

---

##### `evaluation_input`<sup>Optional</sup> <a name="evaluation_input" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.property.evaluationInput"></a>

```python
evaluation_input: IResolvable | CloudwatchAlertRuleTelemetryRuleEvaluation
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleEvaluation">CloudwatchAlertRuleTelemetryRuleEvaluation</a>

---

##### `no_data_input`<sup>Optional</sup> <a name="no_data_input" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.property.noDataInput"></a>

```python
no_data_input: IResolvable | CloudwatchAlertRuleTelemetryRuleNoData
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleNoData">CloudwatchAlertRuleTelemetryRuleNoData</a>

---

##### `query_input`<sup>Optional</sup> <a name="query_input" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.property.queryInput"></a>

```python
query_input: IResolvable | CloudwatchAlertRuleTelemetryRuleQuery
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQuery">CloudwatchAlertRuleTelemetryRuleQuery</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudwatchAlertRuleTelemetryRule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRule">CloudwatchAlertRuleTelemetryRule</a>

---


### CloudwatchAlertRuleTelemetryRuleQueryOutputReference <a name="CloudwatchAlertRuleTelemetryRuleQueryOutputReference" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_alert

cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.property.languageInput">language_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.property.language">language</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQuery">CloudwatchAlertRuleTelemetryRuleQuery</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `language_input`<sup>Optional</sup> <a name="language_input" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.property.languageInput"></a>

```python
language_input: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `language`<sup>Required</sup> <a name="language" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.property.language"></a>

```python
language: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQueryOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudwatchAlertRuleTelemetryRuleQuery
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertRuleTelemetryRuleQuery">CloudwatchAlertRuleTelemetryRuleQuery</a>

---


### CloudwatchAlertTagsList <a name="CloudwatchAlertTagsList" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_alert

cloudwatchAlert.CloudwatchAlertTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudwatchAlertTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTags">CloudwatchAlertTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CloudwatchAlertTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTags">CloudwatchAlertTags</a>]

---


### CloudwatchAlertTagsOutputReference <a name="CloudwatchAlertTagsOutputReference" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cloudwatch_alert

cloudwatchAlert.CloudwatchAlertTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTags">CloudwatchAlertTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudwatchAlertTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchAlert.CloudwatchAlertTags">CloudwatchAlertTags</a>

---



