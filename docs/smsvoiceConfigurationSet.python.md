# `smsvoiceConfigurationSet` Submodule <a name="`smsvoiceConfigurationSet` Submodule" id="@cdktn/provider-awscc.smsvoiceConfigurationSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SmsvoiceConfigurationSet <a name="SmsvoiceConfigurationSet" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/smsvoice_configuration_set awscc_smsvoice_configuration_set}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.Initializer"></a>

```python
from cdktn_provider_awscc import smsvoice_configuration_set

smsvoiceConfigurationSet.SmsvoiceConfigurationSet(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  configuration_set_name: str = None,
  default_sender_id: str = None,
  event_destinations: IResolvable | typing.List[SmsvoiceConfigurationSetEventDestinations] = None,
  message_feedback_enabled: bool | IResolvable = None,
  protect_configuration_id: str = None,
  tags: IResolvable | typing.List[SmsvoiceConfigurationSetTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.Initializer.parameter.configurationSetName">configuration_set_name</a></code> | <code>str</code> | The name to use for the configuration set. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.Initializer.parameter.defaultSenderId">default_sender_id</a></code> | <code>str</code> | The default sender ID to set for the ConfigurationSet. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.Initializer.parameter.eventDestinations">event_destinations</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinations">SmsvoiceConfigurationSetEventDestinations</a>]</code> | An event destination is a location where you send message events. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.Initializer.parameter.messageFeedbackEnabled">message_feedback_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Set to true to enable message feedback. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.Initializer.parameter.protectConfigurationId">protect_configuration_id</a></code> | <code>str</code> | The unique identifier for the protect configuration to be associated to the configuration set. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTags">SmsvoiceConfigurationSetTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `configuration_set_name`<sup>Optional</sup> <a name="configuration_set_name" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.Initializer.parameter.configurationSetName"></a>

- *Type:* str

The name to use for the configuration set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/smsvoice_configuration_set#configuration_set_name SmsvoiceConfigurationSet#configuration_set_name}

---

##### `default_sender_id`<sup>Optional</sup> <a name="default_sender_id" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.Initializer.parameter.defaultSenderId"></a>

- *Type:* str

The default sender ID to set for the ConfigurationSet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/smsvoice_configuration_set#default_sender_id SmsvoiceConfigurationSet#default_sender_id}

---

##### `event_destinations`<sup>Optional</sup> <a name="event_destinations" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.Initializer.parameter.eventDestinations"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinations">SmsvoiceConfigurationSetEventDestinations</a>]

An event destination is a location where you send message events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/smsvoice_configuration_set#event_destinations SmsvoiceConfigurationSet#event_destinations}

---

##### `message_feedback_enabled`<sup>Optional</sup> <a name="message_feedback_enabled" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.Initializer.parameter.messageFeedbackEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Set to true to enable message feedback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/smsvoice_configuration_set#message_feedback_enabled SmsvoiceConfigurationSet#message_feedback_enabled}

---

##### `protect_configuration_id`<sup>Optional</sup> <a name="protect_configuration_id" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.Initializer.parameter.protectConfigurationId"></a>

- *Type:* str

The unique identifier for the protect configuration to be associated to the configuration set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/smsvoice_configuration_set#protect_configuration_id SmsvoiceConfigurationSet#protect_configuration_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTags">SmsvoiceConfigurationSetTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/smsvoice_configuration_set#tags SmsvoiceConfigurationSet#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.putEventDestinations">put_event_destinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.resetConfigurationSetName">reset_configuration_set_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.resetDefaultSenderId">reset_default_sender_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.resetEventDestinations">reset_event_destinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.resetMessageFeedbackEnabled">reset_message_feedback_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.resetProtectConfigurationId">reset_protect_configuration_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_event_destinations` <a name="put_event_destinations" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.putEventDestinations"></a>

```python
def put_event_destinations(
  value: IResolvable | typing.List[SmsvoiceConfigurationSetEventDestinations]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.putEventDestinations.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinations">SmsvoiceConfigurationSetEventDestinations</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[SmsvoiceConfigurationSetTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTags">SmsvoiceConfigurationSetTags</a>]

---

##### `reset_configuration_set_name` <a name="reset_configuration_set_name" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.resetConfigurationSetName"></a>

```python
def reset_configuration_set_name() -> None
```

##### `reset_default_sender_id` <a name="reset_default_sender_id" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.resetDefaultSenderId"></a>

```python
def reset_default_sender_id() -> None
```

##### `reset_event_destinations` <a name="reset_event_destinations" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.resetEventDestinations"></a>

```python
def reset_event_destinations() -> None
```

##### `reset_message_feedback_enabled` <a name="reset_message_feedback_enabled" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.resetMessageFeedbackEnabled"></a>

```python
def reset_message_feedback_enabled() -> None
```

##### `reset_protect_configuration_id` <a name="reset_protect_configuration_id" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.resetProtectConfigurationId"></a>

```python
def reset_protect_configuration_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a SmsvoiceConfigurationSet resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.isConstruct"></a>

```python
from cdktn_provider_awscc import smsvoice_configuration_set

smsvoiceConfigurationSet.SmsvoiceConfigurationSet.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.isTerraformElement"></a>

```python
from cdktn_provider_awscc import smsvoice_configuration_set

smsvoiceConfigurationSet.SmsvoiceConfigurationSet.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.isTerraformResource"></a>

```python
from cdktn_provider_awscc import smsvoice_configuration_set

smsvoiceConfigurationSet.SmsvoiceConfigurationSet.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import smsvoice_configuration_set

smsvoiceConfigurationSet.SmsvoiceConfigurationSet.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a SmsvoiceConfigurationSet resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SmsvoiceConfigurationSet to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SmsvoiceConfigurationSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/smsvoice_configuration_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SmsvoiceConfigurationSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.eventDestinations">event_destinations</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList">SmsvoiceConfigurationSetEventDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList">SmsvoiceConfigurationSetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.configurationSetNameInput">configuration_set_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.defaultSenderIdInput">default_sender_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.eventDestinationsInput">event_destinations_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinations">SmsvoiceConfigurationSetEventDestinations</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.messageFeedbackEnabledInput">message_feedback_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.protectConfigurationIdInput">protect_configuration_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTags">SmsvoiceConfigurationSetTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.configurationSetName">configuration_set_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.defaultSenderId">default_sender_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.messageFeedbackEnabled">message_feedback_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.protectConfigurationId">protect_configuration_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `event_destinations`<sup>Required</sup> <a name="event_destinations" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.eventDestinations"></a>

```python
event_destinations: SmsvoiceConfigurationSetEventDestinationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList">SmsvoiceConfigurationSetEventDestinationsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.tags"></a>

```python
tags: SmsvoiceConfigurationSetTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList">SmsvoiceConfigurationSetTagsList</a>

---

##### `configuration_set_name_input`<sup>Optional</sup> <a name="configuration_set_name_input" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.configurationSetNameInput"></a>

```python
configuration_set_name_input: str
```

- *Type:* str

---

##### `default_sender_id_input`<sup>Optional</sup> <a name="default_sender_id_input" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.defaultSenderIdInput"></a>

```python
default_sender_id_input: str
```

- *Type:* str

---

##### `event_destinations_input`<sup>Optional</sup> <a name="event_destinations_input" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.eventDestinationsInput"></a>

```python
event_destinations_input: IResolvable | typing.List[SmsvoiceConfigurationSetEventDestinations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinations">SmsvoiceConfigurationSetEventDestinations</a>]

---

##### `message_feedback_enabled_input`<sup>Optional</sup> <a name="message_feedback_enabled_input" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.messageFeedbackEnabledInput"></a>

```python
message_feedback_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `protect_configuration_id_input`<sup>Optional</sup> <a name="protect_configuration_id_input" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.protectConfigurationIdInput"></a>

```python
protect_configuration_id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[SmsvoiceConfigurationSetTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTags">SmsvoiceConfigurationSetTags</a>]

---

##### `configuration_set_name`<sup>Required</sup> <a name="configuration_set_name" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.configurationSetName"></a>

```python
configuration_set_name: str
```

- *Type:* str

---

##### `default_sender_id`<sup>Required</sup> <a name="default_sender_id" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.defaultSenderId"></a>

```python
default_sender_id: str
```

- *Type:* str

---

##### `message_feedback_enabled`<sup>Required</sup> <a name="message_feedback_enabled" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.messageFeedbackEnabled"></a>

```python
message_feedback_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `protect_configuration_id`<sup>Required</sup> <a name="protect_configuration_id" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.protectConfigurationId"></a>

```python
protect_configuration_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSet.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SmsvoiceConfigurationSetConfig <a name="SmsvoiceConfigurationSetConfig" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.Initializer"></a>

```python
from cdktn_provider_awscc import smsvoice_configuration_set

smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  configuration_set_name: str = None,
  default_sender_id: str = None,
  event_destinations: IResolvable | typing.List[SmsvoiceConfigurationSetEventDestinations] = None,
  message_feedback_enabled: bool | IResolvable = None,
  protect_configuration_id: str = None,
  tags: IResolvable | typing.List[SmsvoiceConfigurationSetTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.configurationSetName">configuration_set_name</a></code> | <code>str</code> | The name to use for the configuration set. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.defaultSenderId">default_sender_id</a></code> | <code>str</code> | The default sender ID to set for the ConfigurationSet. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.eventDestinations">event_destinations</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinations">SmsvoiceConfigurationSetEventDestinations</a>]</code> | An event destination is a location where you send message events. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.messageFeedbackEnabled">message_feedback_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Set to true to enable message feedback. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.protectConfigurationId">protect_configuration_id</a></code> | <code>str</code> | The unique identifier for the protect configuration to be associated to the configuration set. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTags">SmsvoiceConfigurationSetTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `configuration_set_name`<sup>Optional</sup> <a name="configuration_set_name" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.configurationSetName"></a>

```python
configuration_set_name: str
```

- *Type:* str

The name to use for the configuration set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/smsvoice_configuration_set#configuration_set_name SmsvoiceConfigurationSet#configuration_set_name}

---

##### `default_sender_id`<sup>Optional</sup> <a name="default_sender_id" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.defaultSenderId"></a>

```python
default_sender_id: str
```

- *Type:* str

The default sender ID to set for the ConfigurationSet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/smsvoice_configuration_set#default_sender_id SmsvoiceConfigurationSet#default_sender_id}

---

##### `event_destinations`<sup>Optional</sup> <a name="event_destinations" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.eventDestinations"></a>

```python
event_destinations: IResolvable | typing.List[SmsvoiceConfigurationSetEventDestinations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinations">SmsvoiceConfigurationSetEventDestinations</a>]

An event destination is a location where you send message events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/smsvoice_configuration_set#event_destinations SmsvoiceConfigurationSet#event_destinations}

---

##### `message_feedback_enabled`<sup>Optional</sup> <a name="message_feedback_enabled" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.messageFeedbackEnabled"></a>

```python
message_feedback_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Set to true to enable message feedback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/smsvoice_configuration_set#message_feedback_enabled SmsvoiceConfigurationSet#message_feedback_enabled}

---

##### `protect_configuration_id`<sup>Optional</sup> <a name="protect_configuration_id" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.protectConfigurationId"></a>

```python
protect_configuration_id: str
```

- *Type:* str

The unique identifier for the protect configuration to be associated to the configuration set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/smsvoice_configuration_set#protect_configuration_id SmsvoiceConfigurationSet#protect_configuration_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[SmsvoiceConfigurationSetTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTags">SmsvoiceConfigurationSetTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/smsvoice_configuration_set#tags SmsvoiceConfigurationSet#tags}

---

### SmsvoiceConfigurationSetEventDestinations <a name="SmsvoiceConfigurationSetEventDestinations" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinations.Initializer"></a>

```python
from cdktn_provider_awscc import smsvoice_configuration_set

smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinations(
  cloudwatch_logs_destination: SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination = None,
  enabled: bool | IResolvable = None,
  event_destination_name: str = None,
  kinesis_firehose_destination: SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination = None,
  matching_event_types: typing.List[str] = None,
  sns_destination: SmsvoiceConfigurationSetEventDestinationsSnsDestination = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinations.property.cloudwatchLogsDestination">cloudwatch_logs_destination</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination">SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination</a></code> | An object that contains IamRoleArn and LogGroupArn associated with an Amazon CloudWatch event destination. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinations.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | When set to true events will be logged. By default this is set to true. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinations.property.eventDestinationName">event_destination_name</a></code> | <code>str</code> | The name that identifies the event destination. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinations.property.kinesisFirehoseDestination">kinesis_firehose_destination</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination">SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination</a></code> | An object that contains IamRoleArn and DeliveryStreamArn associated with an Amazon Kinesis Firehose event destination. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinations.property.matchingEventTypes">matching_event_types</a></code> | <code>typing.List[str]</code> | An array of event types that determine which events to log. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinations.property.snsDestination">sns_destination</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestination">SmsvoiceConfigurationSetEventDestinationsSnsDestination</a></code> | An object that contains SNS TopicArn event destination. |

---

##### `cloudwatch_logs_destination`<sup>Optional</sup> <a name="cloudwatch_logs_destination" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinations.property.cloudwatchLogsDestination"></a>

```python
cloudwatch_logs_destination: SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination">SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination</a>

An object that contains IamRoleArn and LogGroupArn associated with an Amazon CloudWatch event destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/smsvoice_configuration_set#cloudwatch_logs_destination SmsvoiceConfigurationSet#cloudwatch_logs_destination}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinations.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

When set to true events will be logged. By default this is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/smsvoice_configuration_set#enabled SmsvoiceConfigurationSet#enabled}

---

##### `event_destination_name`<sup>Optional</sup> <a name="event_destination_name" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinations.property.eventDestinationName"></a>

```python
event_destination_name: str
```

- *Type:* str

The name that identifies the event destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/smsvoice_configuration_set#event_destination_name SmsvoiceConfigurationSet#event_destination_name}

---

##### `kinesis_firehose_destination`<sup>Optional</sup> <a name="kinesis_firehose_destination" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinations.property.kinesisFirehoseDestination"></a>

```python
kinesis_firehose_destination: SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination">SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination</a>

An object that contains IamRoleArn and DeliveryStreamArn associated with an Amazon Kinesis Firehose event destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/smsvoice_configuration_set#kinesis_firehose_destination SmsvoiceConfigurationSet#kinesis_firehose_destination}

---

##### `matching_event_types`<sup>Optional</sup> <a name="matching_event_types" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinations.property.matchingEventTypes"></a>

```python
matching_event_types: typing.List[str]
```

- *Type:* typing.List[str]

An array of event types that determine which events to log.

If 'ALL' is used, then AWS End User Messaging SMS and Voice logs every event type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/smsvoice_configuration_set#matching_event_types SmsvoiceConfigurationSet#matching_event_types}

---

##### `sns_destination`<sup>Optional</sup> <a name="sns_destination" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinations.property.snsDestination"></a>

```python
sns_destination: SmsvoiceConfigurationSetEventDestinationsSnsDestination
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestination">SmsvoiceConfigurationSetEventDestinationsSnsDestination</a>

An object that contains SNS TopicArn event destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/smsvoice_configuration_set#sns_destination SmsvoiceConfigurationSet#sns_destination}

---

### SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination <a name="SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination.Initializer"></a>

```python
from cdktn_provider_awscc import smsvoice_configuration_set

smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination(
  iam_role_arn: str = None,
  log_group_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination.property.iamRoleArn">iam_role_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of an AWS Identity and Access Management role that is able to write event data to an Amazon CloudWatch destination. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination.property.logGroupArn">log_group_arn</a></code> | <code>str</code> | The name of the Amazon CloudWatch log group that you want to record events in. |

---

##### `iam_role_arn`<sup>Optional</sup> <a name="iam_role_arn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination.property.iamRoleArn"></a>

```python
iam_role_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of an AWS Identity and Access Management role that is able to write event data to an Amazon CloudWatch destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/smsvoice_configuration_set#iam_role_arn SmsvoiceConfigurationSet#iam_role_arn}

---

##### `log_group_arn`<sup>Optional</sup> <a name="log_group_arn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination.property.logGroupArn"></a>

```python
log_group_arn: str
```

- *Type:* str

The name of the Amazon CloudWatch log group that you want to record events in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/smsvoice_configuration_set#log_group_arn SmsvoiceConfigurationSet#log_group_arn}

---

### SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination <a name="SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination.Initializer"></a>

```python
from cdktn_provider_awscc import smsvoice_configuration_set

smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination(
  delivery_stream_arn: str = None,
  iam_role_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination.property.deliveryStreamArn">delivery_stream_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the delivery stream. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination.property.iamRoleArn">iam_role_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of an AWS Identity and Access Management role that is able to write event data to an Amazon CloudWatch destination. |

---

##### `delivery_stream_arn`<sup>Optional</sup> <a name="delivery_stream_arn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination.property.deliveryStreamArn"></a>

```python
delivery_stream_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the delivery stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/smsvoice_configuration_set#delivery_stream_arn SmsvoiceConfigurationSet#delivery_stream_arn}

---

##### `iam_role_arn`<sup>Optional</sup> <a name="iam_role_arn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination.property.iamRoleArn"></a>

```python
iam_role_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of an AWS Identity and Access Management role that is able to write event data to an Amazon CloudWatch destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/smsvoice_configuration_set#iam_role_arn SmsvoiceConfigurationSet#iam_role_arn}

---

### SmsvoiceConfigurationSetEventDestinationsSnsDestination <a name="SmsvoiceConfigurationSetEventDestinationsSnsDestination" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestination.Initializer"></a>

```python
from cdktn_provider_awscc import smsvoice_configuration_set

smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestination(
  topic_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestination.property.topicArn">topic_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the Amazon SNS topic that you want to publish events to. |

---

##### `topic_arn`<sup>Optional</sup> <a name="topic_arn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestination.property.topicArn"></a>

```python
topic_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the Amazon SNS topic that you want to publish events to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/smsvoice_configuration_set#topic_arn SmsvoiceConfigurationSet#topic_arn}

---

### SmsvoiceConfigurationSetTags <a name="SmsvoiceConfigurationSetTags" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTags.Initializer"></a>

```python
from cdktn_provider_awscc import smsvoice_configuration_set

smsvoiceConfigurationSet.SmsvoiceConfigurationSetTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/smsvoice_configuration_set#key SmsvoiceConfigurationSet#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/smsvoice_configuration_set#value SmsvoiceConfigurationSet#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference <a name="SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import smsvoice_configuration_set

smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.resetIamRoleArn">reset_iam_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.resetLogGroupArn">reset_log_group_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_iam_role_arn` <a name="reset_iam_role_arn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.resetIamRoleArn"></a>

```python
def reset_iam_role_arn() -> None
```

##### `reset_log_group_arn` <a name="reset_log_group_arn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.resetLogGroupArn"></a>

```python
def reset_log_group_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.property.iamRoleArnInput">iam_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.property.logGroupArnInput">log_group_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.property.iamRoleArn">iam_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.property.logGroupArn">log_group_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination">SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `iam_role_arn_input`<sup>Optional</sup> <a name="iam_role_arn_input" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.property.iamRoleArnInput"></a>

```python
iam_role_arn_input: str
```

- *Type:* str

---

##### `log_group_arn_input`<sup>Optional</sup> <a name="log_group_arn_input" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.property.logGroupArnInput"></a>

```python
log_group_arn_input: str
```

- *Type:* str

---

##### `iam_role_arn`<sup>Required</sup> <a name="iam_role_arn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.property.iamRoleArn"></a>

```python
iam_role_arn: str
```

- *Type:* str

---

##### `log_group_arn`<sup>Required</sup> <a name="log_group_arn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.property.logGroupArn"></a>

```python
log_group_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination">SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination</a>

---


### SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference <a name="SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import smsvoice_configuration_set

smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.resetDeliveryStreamArn">reset_delivery_stream_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.resetIamRoleArn">reset_iam_role_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_delivery_stream_arn` <a name="reset_delivery_stream_arn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.resetDeliveryStreamArn"></a>

```python
def reset_delivery_stream_arn() -> None
```

##### `reset_iam_role_arn` <a name="reset_iam_role_arn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.resetIamRoleArn"></a>

```python
def reset_iam_role_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.property.deliveryStreamArnInput">delivery_stream_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.property.iamRoleArnInput">iam_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.property.deliveryStreamArn">delivery_stream_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.property.iamRoleArn">iam_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination">SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `delivery_stream_arn_input`<sup>Optional</sup> <a name="delivery_stream_arn_input" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.property.deliveryStreamArnInput"></a>

```python
delivery_stream_arn_input: str
```

- *Type:* str

---

##### `iam_role_arn_input`<sup>Optional</sup> <a name="iam_role_arn_input" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.property.iamRoleArnInput"></a>

```python
iam_role_arn_input: str
```

- *Type:* str

---

##### `delivery_stream_arn`<sup>Required</sup> <a name="delivery_stream_arn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.property.deliveryStreamArn"></a>

```python
delivery_stream_arn: str
```

- *Type:* str

---

##### `iam_role_arn`<sup>Required</sup> <a name="iam_role_arn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.property.iamRoleArn"></a>

```python
iam_role_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination">SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination</a>

---


### SmsvoiceConfigurationSetEventDestinationsList <a name="SmsvoiceConfigurationSetEventDestinationsList" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.Initializer"></a>

```python
from cdktn_provider_awscc import smsvoice_configuration_set

smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SmsvoiceConfigurationSetEventDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinations">SmsvoiceConfigurationSetEventDestinations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SmsvoiceConfigurationSetEventDestinations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinations">SmsvoiceConfigurationSetEventDestinations</a>]

---


### SmsvoiceConfigurationSetEventDestinationsOutputReference <a name="SmsvoiceConfigurationSetEventDestinationsOutputReference" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import smsvoice_configuration_set

smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.putCloudwatchLogsDestination">put_cloudwatch_logs_destination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.putKinesisFirehoseDestination">put_kinesis_firehose_destination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.putSnsDestination">put_sns_destination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.resetCloudwatchLogsDestination">reset_cloudwatch_logs_destination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.resetEventDestinationName">reset_event_destination_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.resetKinesisFirehoseDestination">reset_kinesis_firehose_destination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.resetMatchingEventTypes">reset_matching_event_types</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.resetSnsDestination">reset_sns_destination</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cloudwatch_logs_destination` <a name="put_cloudwatch_logs_destination" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.putCloudwatchLogsDestination"></a>

```python
def put_cloudwatch_logs_destination(
  iam_role_arn: str = None,
  log_group_arn: str = None
) -> None
```

###### `iam_role_arn`<sup>Optional</sup> <a name="iam_role_arn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.putCloudwatchLogsDestination.parameter.iamRoleArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of an AWS Identity and Access Management role that is able to write event data to an Amazon CloudWatch destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/smsvoice_configuration_set#iam_role_arn SmsvoiceConfigurationSet#iam_role_arn}

---

###### `log_group_arn`<sup>Optional</sup> <a name="log_group_arn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.putCloudwatchLogsDestination.parameter.logGroupArn"></a>

- *Type:* str

The name of the Amazon CloudWatch log group that you want to record events in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/smsvoice_configuration_set#log_group_arn SmsvoiceConfigurationSet#log_group_arn}

---

##### `put_kinesis_firehose_destination` <a name="put_kinesis_firehose_destination" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.putKinesisFirehoseDestination"></a>

```python
def put_kinesis_firehose_destination(
  delivery_stream_arn: str = None,
  iam_role_arn: str = None
) -> None
```

###### `delivery_stream_arn`<sup>Optional</sup> <a name="delivery_stream_arn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.putKinesisFirehoseDestination.parameter.deliveryStreamArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the delivery stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/smsvoice_configuration_set#delivery_stream_arn SmsvoiceConfigurationSet#delivery_stream_arn}

---

###### `iam_role_arn`<sup>Optional</sup> <a name="iam_role_arn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.putKinesisFirehoseDestination.parameter.iamRoleArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of an AWS Identity and Access Management role that is able to write event data to an Amazon CloudWatch destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/smsvoice_configuration_set#iam_role_arn SmsvoiceConfigurationSet#iam_role_arn}

---

##### `put_sns_destination` <a name="put_sns_destination" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.putSnsDestination"></a>

```python
def put_sns_destination(
  topic_arn: str = None
) -> None
```

###### `topic_arn`<sup>Optional</sup> <a name="topic_arn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.putSnsDestination.parameter.topicArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the Amazon SNS topic that you want to publish events to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/smsvoice_configuration_set#topic_arn SmsvoiceConfigurationSet#topic_arn}

---

##### `reset_cloudwatch_logs_destination` <a name="reset_cloudwatch_logs_destination" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.resetCloudwatchLogsDestination"></a>

```python
def reset_cloudwatch_logs_destination() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_event_destination_name` <a name="reset_event_destination_name" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.resetEventDestinationName"></a>

```python
def reset_event_destination_name() -> None
```

##### `reset_kinesis_firehose_destination` <a name="reset_kinesis_firehose_destination" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.resetKinesisFirehoseDestination"></a>

```python
def reset_kinesis_firehose_destination() -> None
```

##### `reset_matching_event_types` <a name="reset_matching_event_types" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.resetMatchingEventTypes"></a>

```python
def reset_matching_event_types() -> None
```

##### `reset_sns_destination` <a name="reset_sns_destination" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.resetSnsDestination"></a>

```python
def reset_sns_destination() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.cloudwatchLogsDestination">cloudwatch_logs_destination</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference">SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.kinesisFirehoseDestination">kinesis_firehose_destination</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference">SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.snsDestination">sns_destination</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference">SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.cloudwatchLogsDestinationInput">cloudwatch_logs_destination_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination">SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.eventDestinationNameInput">event_destination_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.kinesisFirehoseDestinationInput">kinesis_firehose_destination_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination">SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.matchingEventTypesInput">matching_event_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.snsDestinationInput">sns_destination_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestination">SmsvoiceConfigurationSetEventDestinationsSnsDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.eventDestinationName">event_destination_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.matchingEventTypes">matching_event_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinations">SmsvoiceConfigurationSetEventDestinations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloudwatch_logs_destination`<sup>Required</sup> <a name="cloudwatch_logs_destination" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.cloudwatchLogsDestination"></a>

```python
cloudwatch_logs_destination: SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference">SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestinationOutputReference</a>

---

##### `kinesis_firehose_destination`<sup>Required</sup> <a name="kinesis_firehose_destination" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.kinesisFirehoseDestination"></a>

```python
kinesis_firehose_destination: SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference">SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestinationOutputReference</a>

---

##### `sns_destination`<sup>Required</sup> <a name="sns_destination" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.snsDestination"></a>

```python
sns_destination: SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference">SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference</a>

---

##### `cloudwatch_logs_destination_input`<sup>Optional</sup> <a name="cloudwatch_logs_destination_input" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.cloudwatchLogsDestinationInput"></a>

```python
cloudwatch_logs_destination_input: IResolvable | SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination">SmsvoiceConfigurationSetEventDestinationsCloudwatchLogsDestination</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `event_destination_name_input`<sup>Optional</sup> <a name="event_destination_name_input" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.eventDestinationNameInput"></a>

```python
event_destination_name_input: str
```

- *Type:* str

---

##### `kinesis_firehose_destination_input`<sup>Optional</sup> <a name="kinesis_firehose_destination_input" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.kinesisFirehoseDestinationInput"></a>

```python
kinesis_firehose_destination_input: IResolvable | SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination">SmsvoiceConfigurationSetEventDestinationsKinesisFirehoseDestination</a>

---

##### `matching_event_types_input`<sup>Optional</sup> <a name="matching_event_types_input" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.matchingEventTypesInput"></a>

```python
matching_event_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `sns_destination_input`<sup>Optional</sup> <a name="sns_destination_input" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.snsDestinationInput"></a>

```python
sns_destination_input: IResolvable | SmsvoiceConfigurationSetEventDestinationsSnsDestination
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestination">SmsvoiceConfigurationSetEventDestinationsSnsDestination</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `event_destination_name`<sup>Required</sup> <a name="event_destination_name" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.eventDestinationName"></a>

```python
event_destination_name: str
```

- *Type:* str

---

##### `matching_event_types`<sup>Required</sup> <a name="matching_event_types" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.matchingEventTypes"></a>

```python
matching_event_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SmsvoiceConfigurationSetEventDestinations
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinations">SmsvoiceConfigurationSetEventDestinations</a>

---


### SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference <a name="SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import smsvoice_configuration_set

smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.resetTopicArn">reset_topic_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_topic_arn` <a name="reset_topic_arn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.resetTopicArn"></a>

```python
def reset_topic_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.property.topicArnInput">topic_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.property.topicArn">topic_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestination">SmsvoiceConfigurationSetEventDestinationsSnsDestination</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `topic_arn_input`<sup>Optional</sup> <a name="topic_arn_input" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.property.topicArnInput"></a>

```python
topic_arn_input: str
```

- *Type:* str

---

##### `topic_arn`<sup>Required</sup> <a name="topic_arn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.property.topicArn"></a>

```python
topic_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestinationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SmsvoiceConfigurationSetEventDestinationsSnsDestination
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetEventDestinationsSnsDestination">SmsvoiceConfigurationSetEventDestinationsSnsDestination</a>

---


### SmsvoiceConfigurationSetTagsList <a name="SmsvoiceConfigurationSetTagsList" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import smsvoice_configuration_set

smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SmsvoiceConfigurationSetTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTags">SmsvoiceConfigurationSetTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SmsvoiceConfigurationSetTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTags">SmsvoiceConfigurationSetTags</a>]

---


### SmsvoiceConfigurationSetTagsOutputReference <a name="SmsvoiceConfigurationSetTagsOutputReference" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import smsvoice_configuration_set

smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTags">SmsvoiceConfigurationSetTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SmsvoiceConfigurationSetTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.smsvoiceConfigurationSet.SmsvoiceConfigurationSetTags">SmsvoiceConfigurationSetTags</a>

---



