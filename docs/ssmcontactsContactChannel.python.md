# `ssmcontactsContactChannel` Submodule <a name="`ssmcontactsContactChannel` Submodule" id="@cdktn/provider-awscc.ssmcontactsContactChannel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SsmcontactsContactChannel <a name="SsmcontactsContactChannel" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmcontacts_contact_channel awscc_ssmcontacts_contact_channel}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.Initializer"></a>

```python
from cdktn_provider_awscc import ssmcontacts_contact_channel

ssmcontactsContactChannel.SsmcontactsContactChannel(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  channel_address: str = None,
  channel_name: str = None,
  channel_type: str = None,
  contact_id: str = None,
  defer_activation: bool | IResolvable = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.Initializer.parameter.channelAddress">channel_address</a></code> | <code>str</code> | The details that SSM Incident Manager uses when trying to engage the contact channel. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.Initializer.parameter.channelName">channel_name</a></code> | <code>str</code> | The device name. String of 6 to 50 alphabetical, numeric, dash, and underscore characters. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.Initializer.parameter.channelType">channel_type</a></code> | <code>str</code> | Device type, which specify notification channel. Currently supported values: ?SMS?, ?VOICE?, ?EMAIL?, ?CHATBOT. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.Initializer.parameter.contactId">contact_id</a></code> | <code>str</code> | ARN of the contact resource. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.Initializer.parameter.deferActivation">defer_activation</a></code> | <code>bool \| cdktn.IResolvable</code> | If you want to activate the channel at a later time, you can choose to defer activation. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `channel_address`<sup>Optional</sup> <a name="channel_address" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.Initializer.parameter.channelAddress"></a>

- *Type:* str

The details that SSM Incident Manager uses when trying to engage the contact channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmcontacts_contact_channel#channel_address SsmcontactsContactChannel#channel_address}

---

##### `channel_name`<sup>Optional</sup> <a name="channel_name" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.Initializer.parameter.channelName"></a>

- *Type:* str

The device name. String of 6 to 50 alphabetical, numeric, dash, and underscore characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmcontacts_contact_channel#channel_name SsmcontactsContactChannel#channel_name}

---

##### `channel_type`<sup>Optional</sup> <a name="channel_type" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.Initializer.parameter.channelType"></a>

- *Type:* str

Device type, which specify notification channel. Currently supported values: ?SMS?, ?VOICE?, ?EMAIL?, ?CHATBOT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmcontacts_contact_channel#channel_type SsmcontactsContactChannel#channel_type}

---

##### `contact_id`<sup>Optional</sup> <a name="contact_id" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.Initializer.parameter.contactId"></a>

- *Type:* str

ARN of the contact resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmcontacts_contact_channel#contact_id SsmcontactsContactChannel#contact_id}

---

##### `defer_activation`<sup>Optional</sup> <a name="defer_activation" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.Initializer.parameter.deferActivation"></a>

- *Type:* bool | cdktn.IResolvable

If you want to activate the channel at a later time, you can choose to defer activation.

SSM Incident Manager can't engage your contact channel until it has been activated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmcontacts_contact_channel#defer_activation SsmcontactsContactChannel#defer_activation}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.resetChannelAddress">reset_channel_address</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.resetChannelName">reset_channel_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.resetChannelType">reset_channel_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.resetContactId">reset_contact_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.resetDeferActivation">reset_defer_activation</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_channel_address` <a name="reset_channel_address" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.resetChannelAddress"></a>

```python
def reset_channel_address() -> None
```

##### `reset_channel_name` <a name="reset_channel_name" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.resetChannelName"></a>

```python
def reset_channel_name() -> None
```

##### `reset_channel_type` <a name="reset_channel_type" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.resetChannelType"></a>

```python
def reset_channel_type() -> None
```

##### `reset_contact_id` <a name="reset_contact_id" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.resetContactId"></a>

```python
def reset_contact_id() -> None
```

##### `reset_defer_activation` <a name="reset_defer_activation" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.resetDeferActivation"></a>

```python
def reset_defer_activation() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a SsmcontactsContactChannel resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.isConstruct"></a>

```python
from cdktn_provider_awscc import ssmcontacts_contact_channel

ssmcontactsContactChannel.SsmcontactsContactChannel.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.isTerraformElement"></a>

```python
from cdktn_provider_awscc import ssmcontacts_contact_channel

ssmcontactsContactChannel.SsmcontactsContactChannel.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.isTerraformResource"></a>

```python
from cdktn_provider_awscc import ssmcontacts_contact_channel

ssmcontactsContactChannel.SsmcontactsContactChannel.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import ssmcontacts_contact_channel

ssmcontactsContactChannel.SsmcontactsContactChannel.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a SsmcontactsContactChannel resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SsmcontactsContactChannel to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SsmcontactsContactChannel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmcontacts_contact_channel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SsmcontactsContactChannel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.channelAddressInput">channel_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.channelNameInput">channel_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.channelTypeInput">channel_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.contactIdInput">contact_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.deferActivationInput">defer_activation_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.channelAddress">channel_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.channelName">channel_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.channelType">channel_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.contactId">contact_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.deferActivation">defer_activation</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `channel_address_input`<sup>Optional</sup> <a name="channel_address_input" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.channelAddressInput"></a>

```python
channel_address_input: str
```

- *Type:* str

---

##### `channel_name_input`<sup>Optional</sup> <a name="channel_name_input" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.channelNameInput"></a>

```python
channel_name_input: str
```

- *Type:* str

---

##### `channel_type_input`<sup>Optional</sup> <a name="channel_type_input" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.channelTypeInput"></a>

```python
channel_type_input: str
```

- *Type:* str

---

##### `contact_id_input`<sup>Optional</sup> <a name="contact_id_input" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.contactIdInput"></a>

```python
contact_id_input: str
```

- *Type:* str

---

##### `defer_activation_input`<sup>Optional</sup> <a name="defer_activation_input" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.deferActivationInput"></a>

```python
defer_activation_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `channel_address`<sup>Required</sup> <a name="channel_address" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.channelAddress"></a>

```python
channel_address: str
```

- *Type:* str

---

##### `channel_name`<sup>Required</sup> <a name="channel_name" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.channelName"></a>

```python
channel_name: str
```

- *Type:* str

---

##### `channel_type`<sup>Required</sup> <a name="channel_type" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.channelType"></a>

```python
channel_type: str
```

- *Type:* str

---

##### `contact_id`<sup>Required</sup> <a name="contact_id" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.contactId"></a>

```python
contact_id: str
```

- *Type:* str

---

##### `defer_activation`<sup>Required</sup> <a name="defer_activation" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.deferActivation"></a>

```python
defer_activation: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SsmcontactsContactChannelConfig <a name="SsmcontactsContactChannelConfig" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannelConfig.Initializer"></a>

```python
from cdktn_provider_awscc import ssmcontacts_contact_channel

ssmcontactsContactChannel.SsmcontactsContactChannelConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  channel_address: str = None,
  channel_name: str = None,
  channel_type: str = None,
  contact_id: str = None,
  defer_activation: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannelConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannelConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannelConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannelConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannelConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannelConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannelConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannelConfig.property.channelAddress">channel_address</a></code> | <code>str</code> | The details that SSM Incident Manager uses when trying to engage the contact channel. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannelConfig.property.channelName">channel_name</a></code> | <code>str</code> | The device name. String of 6 to 50 alphabetical, numeric, dash, and underscore characters. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannelConfig.property.channelType">channel_type</a></code> | <code>str</code> | Device type, which specify notification channel. Currently supported values: ?SMS?, ?VOICE?, ?EMAIL?, ?CHATBOT. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannelConfig.property.contactId">contact_id</a></code> | <code>str</code> | ARN of the contact resource. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannelConfig.property.deferActivation">defer_activation</a></code> | <code>bool \| cdktn.IResolvable</code> | If you want to activate the channel at a later time, you can choose to defer activation. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannelConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannelConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannelConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannelConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannelConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannelConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannelConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `channel_address`<sup>Optional</sup> <a name="channel_address" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannelConfig.property.channelAddress"></a>

```python
channel_address: str
```

- *Type:* str

The details that SSM Incident Manager uses when trying to engage the contact channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmcontacts_contact_channel#channel_address SsmcontactsContactChannel#channel_address}

---

##### `channel_name`<sup>Optional</sup> <a name="channel_name" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannelConfig.property.channelName"></a>

```python
channel_name: str
```

- *Type:* str

The device name. String of 6 to 50 alphabetical, numeric, dash, and underscore characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmcontacts_contact_channel#channel_name SsmcontactsContactChannel#channel_name}

---

##### `channel_type`<sup>Optional</sup> <a name="channel_type" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannelConfig.property.channelType"></a>

```python
channel_type: str
```

- *Type:* str

Device type, which specify notification channel. Currently supported values: ?SMS?, ?VOICE?, ?EMAIL?, ?CHATBOT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmcontacts_contact_channel#channel_type SsmcontactsContactChannel#channel_type}

---

##### `contact_id`<sup>Optional</sup> <a name="contact_id" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannelConfig.property.contactId"></a>

```python
contact_id: str
```

- *Type:* str

ARN of the contact resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmcontacts_contact_channel#contact_id SsmcontactsContactChannel#contact_id}

---

##### `defer_activation`<sup>Optional</sup> <a name="defer_activation" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannelConfig.property.deferActivation"></a>

```python
defer_activation: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If you want to activate the channel at a later time, you can choose to defer activation.

SSM Incident Manager can't engage your contact channel until it has been activated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmcontacts_contact_channel#defer_activation SsmcontactsContactChannel#defer_activation}

---



