# `notificationsEventRule` Submodule <a name="`notificationsEventRule` Submodule" id="@cdktn/provider-awscc.notificationsEventRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NotificationsEventRule <a name="NotificationsEventRule" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/notifications_event_rule awscc_notifications_event_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.Initializer"></a>

```python
from cdktn_provider_awscc import notifications_event_rule

notificationsEventRule.NotificationsEventRule(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  event_type: str,
  notification_configuration_arn: str,
  regions: typing.List[str],
  source: str,
  event_pattern: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.Initializer.parameter.eventType">event_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/notifications_event_rule#event_type NotificationsEventRule#event_type}. |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.Initializer.parameter.notificationConfigurationArn">notification_configuration_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/notifications_event_rule#notification_configuration_arn NotificationsEventRule#notification_configuration_arn}. |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.Initializer.parameter.regions">regions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/notifications_event_rule#regions NotificationsEventRule#regions}. |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.Initializer.parameter.source">source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/notifications_event_rule#source NotificationsEventRule#source}. |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.Initializer.parameter.eventPattern">event_pattern</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/notifications_event_rule#event_pattern NotificationsEventRule#event_pattern}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `event_type`<sup>Required</sup> <a name="event_type" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.Initializer.parameter.eventType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/notifications_event_rule#event_type NotificationsEventRule#event_type}.

---

##### `notification_configuration_arn`<sup>Required</sup> <a name="notification_configuration_arn" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.Initializer.parameter.notificationConfigurationArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/notifications_event_rule#notification_configuration_arn NotificationsEventRule#notification_configuration_arn}.

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.Initializer.parameter.regions"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/notifications_event_rule#regions NotificationsEventRule#regions}.

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.Initializer.parameter.source"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/notifications_event_rule#source NotificationsEventRule#source}.

---

##### `event_pattern`<sup>Optional</sup> <a name="event_pattern" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.Initializer.parameter.eventPattern"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/notifications_event_rule#event_pattern NotificationsEventRule#event_pattern}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.resetEventPattern">reset_event_pattern</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_event_pattern` <a name="reset_event_pattern" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.resetEventPattern"></a>

```python
def reset_event_pattern() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a NotificationsEventRule resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.isConstruct"></a>

```python
from cdktn_provider_awscc import notifications_event_rule

notificationsEventRule.NotificationsEventRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.isTerraformElement"></a>

```python
from cdktn_provider_awscc import notifications_event_rule

notificationsEventRule.NotificationsEventRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.isTerraformResource"></a>

```python
from cdktn_provider_awscc import notifications_event_rule

notificationsEventRule.NotificationsEventRule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import notifications_event_rule

notificationsEventRule.NotificationsEventRule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a NotificationsEventRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the NotificationsEventRule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing NotificationsEventRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/notifications_event_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the NotificationsEventRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.managedRules">managed_rules</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.statusSummaryByRegion">status_summary_by_region</a></code> | <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionMap">NotificationsEventRuleStatusSummaryByRegionMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.eventPatternInput">event_pattern_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.eventTypeInput">event_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.notificationConfigurationArnInput">notification_configuration_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.regionsInput">regions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.sourceInput">source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.eventPattern">event_pattern</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.eventType">event_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.notificationConfigurationArn">notification_configuration_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.regions">regions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.source">source</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `managed_rules`<sup>Required</sup> <a name="managed_rules" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.managedRules"></a>

```python
managed_rules: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `status_summary_by_region`<sup>Required</sup> <a name="status_summary_by_region" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.statusSummaryByRegion"></a>

```python
status_summary_by_region: NotificationsEventRuleStatusSummaryByRegionMap
```

- *Type:* <a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionMap">NotificationsEventRuleStatusSummaryByRegionMap</a>

---

##### `event_pattern_input`<sup>Optional</sup> <a name="event_pattern_input" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.eventPatternInput"></a>

```python
event_pattern_input: str
```

- *Type:* str

---

##### `event_type_input`<sup>Optional</sup> <a name="event_type_input" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.eventTypeInput"></a>

```python
event_type_input: str
```

- *Type:* str

---

##### `notification_configuration_arn_input`<sup>Optional</sup> <a name="notification_configuration_arn_input" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.notificationConfigurationArnInput"></a>

```python
notification_configuration_arn_input: str
```

- *Type:* str

---

##### `regions_input`<sup>Optional</sup> <a name="regions_input" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.regionsInput"></a>

```python
regions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.sourceInput"></a>

```python
source_input: str
```

- *Type:* str

---

##### `event_pattern`<sup>Required</sup> <a name="event_pattern" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.eventPattern"></a>

```python
event_pattern: str
```

- *Type:* str

---

##### `event_type`<sup>Required</sup> <a name="event_type" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.eventType"></a>

```python
event_type: str
```

- *Type:* str

---

##### `notification_configuration_arn`<sup>Required</sup> <a name="notification_configuration_arn" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.notificationConfigurationArn"></a>

```python
notification_configuration_arn: str
```

- *Type:* str

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.regions"></a>

```python
regions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.source"></a>

```python
source: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NotificationsEventRuleConfig <a name="NotificationsEventRuleConfig" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleConfig.Initializer"></a>

```python
from cdktn_provider_awscc import notifications_event_rule

notificationsEventRule.NotificationsEventRuleConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  event_type: str,
  notification_configuration_arn: str,
  regions: typing.List[str],
  source: str,
  event_pattern: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleConfig.property.eventType">event_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/notifications_event_rule#event_type NotificationsEventRule#event_type}. |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleConfig.property.notificationConfigurationArn">notification_configuration_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/notifications_event_rule#notification_configuration_arn NotificationsEventRule#notification_configuration_arn}. |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleConfig.property.regions">regions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/notifications_event_rule#regions NotificationsEventRule#regions}. |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleConfig.property.source">source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/notifications_event_rule#source NotificationsEventRule#source}. |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleConfig.property.eventPattern">event_pattern</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/notifications_event_rule#event_pattern NotificationsEventRule#event_pattern}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `event_type`<sup>Required</sup> <a name="event_type" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleConfig.property.eventType"></a>

```python
event_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/notifications_event_rule#event_type NotificationsEventRule#event_type}.

---

##### `notification_configuration_arn`<sup>Required</sup> <a name="notification_configuration_arn" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleConfig.property.notificationConfigurationArn"></a>

```python
notification_configuration_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/notifications_event_rule#notification_configuration_arn NotificationsEventRule#notification_configuration_arn}.

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleConfig.property.regions"></a>

```python
regions: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/notifications_event_rule#regions NotificationsEventRule#regions}.

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleConfig.property.source"></a>

```python
source: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/notifications_event_rule#source NotificationsEventRule#source}.

---

##### `event_pattern`<sup>Optional</sup> <a name="event_pattern" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleConfig.property.eventPattern"></a>

```python
event_pattern: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/notifications_event_rule#event_pattern NotificationsEventRule#event_pattern}.

---

### NotificationsEventRuleStatusSummaryByRegion <a name="NotificationsEventRuleStatusSummaryByRegion" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegion.Initializer"></a>

```python
from cdktn_provider_awscc import notifications_event_rule

notificationsEventRule.NotificationsEventRuleStatusSummaryByRegion()
```


## Classes <a name="Classes" id="Classes"></a>

### NotificationsEventRuleStatusSummaryByRegionMap <a name="NotificationsEventRuleStatusSummaryByRegionMap" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionMap.Initializer"></a>

```python
from cdktn_provider_awscc import notifications_event_rule

notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionMap(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionMap.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionMap.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionMap.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionMap.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionMap.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionMap.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionMap.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionMap.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionMap.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionMap.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionMap.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionMap.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionMap.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionMap.get"></a>

```python
def get(
  key: str
) -> NotificationsEventRuleStatusSummaryByRegionOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionMap.get.parameter.key"></a>

- *Type:* str

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionMap.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionMap.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionMap.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionMap.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### NotificationsEventRuleStatusSummaryByRegionOutputReference <a name="NotificationsEventRuleStatusSummaryByRegionOutputReference" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import notifications_event_rule

notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_key: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.Initializer.parameter.complexObjectKey">complex_object_key</a></code> | <code>str</code> | the key of this item in the map. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_key`<sup>Required</sup> <a name="complex_object_key" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* str

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.property.reason">reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegion">NotificationsEventRuleStatusSummaryByRegion</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.property.reason"></a>

```python
reason: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.property.internalValue"></a>

```python
internal_value: NotificationsEventRuleStatusSummaryByRegion
```

- *Type:* <a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegion">NotificationsEventRuleStatusSummaryByRegion</a>

---



