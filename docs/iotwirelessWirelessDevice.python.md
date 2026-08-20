# `iotwirelessWirelessDevice` Submodule <a name="`iotwirelessWirelessDevice` Submodule" id="@cdktn/provider-awscc.iotwirelessWirelessDevice"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotwirelessWirelessDevice <a name="IotwirelessWirelessDevice" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device awscc_iotwireless_wireless_device}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.Initializer"></a>

```python
from cdktn_provider_awscc import iotwireless_wireless_device

iotwirelessWirelessDevice.IotwirelessWirelessDevice(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  destination_name: str,
  type: str,
  description: str = None,
  last_uplink_received_at: str = None,
  lo_ra_wan: IotwirelessWirelessDeviceLoRaWan = None,
  name: str = None,
  positioning: str = None,
  tags: IResolvable | typing.List[IotwirelessWirelessDeviceTags] = None,
  thing_arn: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.Initializer.parameter.destinationName">destination_name</a></code> | <code>str</code> | Wireless device destination name. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.Initializer.parameter.type">type</a></code> | <code>str</code> | Wireless device type, currently only Sidewalk and LoRa. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.Initializer.parameter.description">description</a></code> | <code>str</code> | Wireless device description. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.Initializer.parameter.lastUplinkReceivedAt">last_uplink_received_at</a></code> | <code>str</code> | The date and time when the most recent uplink was received. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.Initializer.parameter.loRaWan">lo_ra_wan</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWan">IotwirelessWirelessDeviceLoRaWan</a></code> | The combination of Package, Station and Model which represents the version of the LoRaWAN Wireless Device. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.Initializer.parameter.name">name</a></code> | <code>str</code> | Wireless device name. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.Initializer.parameter.positioning">positioning</a></code> | <code>str</code> | FPort values for the GNSS, stream, and ClockSync functions of the positioning information. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTags">IotwirelessWirelessDeviceTags</a>]</code> | A list of key-value pairs that contain metadata for the device. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.Initializer.parameter.thingArn">thing_arn</a></code> | <code>str</code> | Thing arn. Passed into update to associate Thing with Wireless device. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `destination_name`<sup>Required</sup> <a name="destination_name" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.Initializer.parameter.destinationName"></a>

- *Type:* str

Wireless device destination name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#destination_name IotwirelessWirelessDevice#destination_name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.Initializer.parameter.type"></a>

- *Type:* str

Wireless device type, currently only Sidewalk and LoRa.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#type IotwirelessWirelessDevice#type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.Initializer.parameter.description"></a>

- *Type:* str

Wireless device description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#description IotwirelessWirelessDevice#description}

---

##### `last_uplink_received_at`<sup>Optional</sup> <a name="last_uplink_received_at" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.Initializer.parameter.lastUplinkReceivedAt"></a>

- *Type:* str

The date and time when the most recent uplink was received.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#last_uplink_received_at IotwirelessWirelessDevice#last_uplink_received_at}

---

##### `lo_ra_wan`<sup>Optional</sup> <a name="lo_ra_wan" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.Initializer.parameter.loRaWan"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWan">IotwirelessWirelessDeviceLoRaWan</a>

The combination of Package, Station and Model which represents the version of the LoRaWAN Wireless Device.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#lo_ra_wan IotwirelessWirelessDevice#lo_ra_wan}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.Initializer.parameter.name"></a>

- *Type:* str

Wireless device name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#name IotwirelessWirelessDevice#name}

---

##### `positioning`<sup>Optional</sup> <a name="positioning" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.Initializer.parameter.positioning"></a>

- *Type:* str

FPort values for the GNSS, stream, and ClockSync functions of the positioning information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#positioning IotwirelessWirelessDevice#positioning}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTags">IotwirelessWirelessDeviceTags</a>]

A list of key-value pairs that contain metadata for the device.

Currently not supported, will not create if tags are passed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#tags IotwirelessWirelessDevice#tags}

---

##### `thing_arn`<sup>Optional</sup> <a name="thing_arn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.Initializer.parameter.thingArn"></a>

- *Type:* str

Thing arn. Passed into update to associate Thing with Wireless device.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#thing_arn IotwirelessWirelessDevice#thing_arn}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.putLoRaWan">put_lo_ra_wan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.resetLastUplinkReceivedAt">reset_last_uplink_received_at</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.resetLoRaWan">reset_lo_ra_wan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.resetPositioning">reset_positioning</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.resetThingArn">reset_thing_arn</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_lo_ra_wan` <a name="put_lo_ra_wan" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.putLoRaWan"></a>

```python
def put_lo_ra_wan(
  abp_v10_x: IotwirelessWirelessDeviceLoRaWanAbpV10X = None,
  abp_v11: IotwirelessWirelessDeviceLoRaWanAbpV11 = None,
  dev_eui: str = None,
  device_profile_id: str = None,
  f_ports: IotwirelessWirelessDeviceLoRaWanFPorts = None,
  otaa_v10_x: IotwirelessWirelessDeviceLoRaWanOtaaV10X = None,
  otaa_v11: IotwirelessWirelessDeviceLoRaWanOtaaV11 = None,
  service_profile_id: str = None
) -> None
```

###### `abp_v10_x`<sup>Optional</sup> <a name="abp_v10_x" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.putLoRaWan.parameter.abpV10X"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10X">IotwirelessWirelessDeviceLoRaWanAbpV10X</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#abp_v10_x IotwirelessWirelessDevice#abp_v10_x}.

---

###### `abp_v11`<sup>Optional</sup> <a name="abp_v11" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.putLoRaWan.parameter.abpV11"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11">IotwirelessWirelessDeviceLoRaWanAbpV11</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#abp_v11 IotwirelessWirelessDevice#abp_v11}.

---

###### `dev_eui`<sup>Optional</sup> <a name="dev_eui" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.putLoRaWan.parameter.devEui"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#dev_eui IotwirelessWirelessDevice#dev_eui}.

---

###### `device_profile_id`<sup>Optional</sup> <a name="device_profile_id" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.putLoRaWan.parameter.deviceProfileId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#device_profile_id IotwirelessWirelessDevice#device_profile_id}.

---

###### `f_ports`<sup>Optional</sup> <a name="f_ports" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.putLoRaWan.parameter.fPorts"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPorts">IotwirelessWirelessDeviceLoRaWanFPorts</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#f_ports IotwirelessWirelessDevice#f_ports}.

---

###### `otaa_v10_x`<sup>Optional</sup> <a name="otaa_v10_x" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.putLoRaWan.parameter.otaaV10X"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10X">IotwirelessWirelessDeviceLoRaWanOtaaV10X</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#otaa_v10_x IotwirelessWirelessDevice#otaa_v10_x}.

---

###### `otaa_v11`<sup>Optional</sup> <a name="otaa_v11" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.putLoRaWan.parameter.otaaV11"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11">IotwirelessWirelessDeviceLoRaWanOtaaV11</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#otaa_v11 IotwirelessWirelessDevice#otaa_v11}.

---

###### `service_profile_id`<sup>Optional</sup> <a name="service_profile_id" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.putLoRaWan.parameter.serviceProfileId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#service_profile_id IotwirelessWirelessDevice#service_profile_id}.

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[IotwirelessWirelessDeviceTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTags">IotwirelessWirelessDeviceTags</a>]

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_last_uplink_received_at` <a name="reset_last_uplink_received_at" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.resetLastUplinkReceivedAt"></a>

```python
def reset_last_uplink_received_at() -> None
```

##### `reset_lo_ra_wan` <a name="reset_lo_ra_wan" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.resetLoRaWan"></a>

```python
def reset_lo_ra_wan() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_positioning` <a name="reset_positioning" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.resetPositioning"></a>

```python
def reset_positioning() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_thing_arn` <a name="reset_thing_arn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.resetThingArn"></a>

```python
def reset_thing_arn() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a IotwirelessWirelessDevice resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.isConstruct"></a>

```python
from cdktn_provider_awscc import iotwireless_wireless_device

iotwirelessWirelessDevice.IotwirelessWirelessDevice.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.isTerraformElement"></a>

```python
from cdktn_provider_awscc import iotwireless_wireless_device

iotwirelessWirelessDevice.IotwirelessWirelessDevice.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.isTerraformResource"></a>

```python
from cdktn_provider_awscc import iotwireless_wireless_device

iotwirelessWirelessDevice.IotwirelessWirelessDevice.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import iotwireless_wireless_device

iotwirelessWirelessDevice.IotwirelessWirelessDevice.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a IotwirelessWirelessDevice resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IotwirelessWirelessDevice to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IotwirelessWirelessDevice that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IotwirelessWirelessDevice to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.loRaWan">lo_ra_wan</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference">IotwirelessWirelessDeviceLoRaWanOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList">IotwirelessWirelessDeviceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.thingName">thing_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.wirelessDeviceId">wireless_device_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.destinationNameInput">destination_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.lastUplinkReceivedAtInput">last_uplink_received_at_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.loRaWanInput">lo_ra_wan_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWan">IotwirelessWirelessDeviceLoRaWan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.positioningInput">positioning_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTags">IotwirelessWirelessDeviceTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.thingArnInput">thing_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.destinationName">destination_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.lastUplinkReceivedAt">last_uplink_received_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.positioning">positioning</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.thingArn">thing_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lo_ra_wan`<sup>Required</sup> <a name="lo_ra_wan" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.loRaWan"></a>

```python
lo_ra_wan: IotwirelessWirelessDeviceLoRaWanOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference">IotwirelessWirelessDeviceLoRaWanOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.tags"></a>

```python
tags: IotwirelessWirelessDeviceTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList">IotwirelessWirelessDeviceTagsList</a>

---

##### `thing_name`<sup>Required</sup> <a name="thing_name" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.thingName"></a>

```python
thing_name: str
```

- *Type:* str

---

##### `wireless_device_id`<sup>Required</sup> <a name="wireless_device_id" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.wirelessDeviceId"></a>

```python
wireless_device_id: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `destination_name_input`<sup>Optional</sup> <a name="destination_name_input" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.destinationNameInput"></a>

```python
destination_name_input: str
```

- *Type:* str

---

##### `last_uplink_received_at_input`<sup>Optional</sup> <a name="last_uplink_received_at_input" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.lastUplinkReceivedAtInput"></a>

```python
last_uplink_received_at_input: str
```

- *Type:* str

---

##### `lo_ra_wan_input`<sup>Optional</sup> <a name="lo_ra_wan_input" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.loRaWanInput"></a>

```python
lo_ra_wan_input: IResolvable | IotwirelessWirelessDeviceLoRaWan
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWan">IotwirelessWirelessDeviceLoRaWan</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `positioning_input`<sup>Optional</sup> <a name="positioning_input" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.positioningInput"></a>

```python
positioning_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[IotwirelessWirelessDeviceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTags">IotwirelessWirelessDeviceTags</a>]

---

##### `thing_arn_input`<sup>Optional</sup> <a name="thing_arn_input" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.thingArnInput"></a>

```python
thing_arn_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `destination_name`<sup>Required</sup> <a name="destination_name" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.destinationName"></a>

```python
destination_name: str
```

- *Type:* str

---

##### `last_uplink_received_at`<sup>Required</sup> <a name="last_uplink_received_at" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.lastUplinkReceivedAt"></a>

```python
last_uplink_received_at: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `positioning`<sup>Required</sup> <a name="positioning" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.positioning"></a>

```python
positioning: str
```

- *Type:* str

---

##### `thing_arn`<sup>Required</sup> <a name="thing_arn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.thingArn"></a>

```python
thing_arn: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IotwirelessWirelessDeviceConfig <a name="IotwirelessWirelessDeviceConfig" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.Initializer"></a>

```python
from cdktn_provider_awscc import iotwireless_wireless_device

iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  destination_name: str,
  type: str,
  description: str = None,
  last_uplink_received_at: str = None,
  lo_ra_wan: IotwirelessWirelessDeviceLoRaWan = None,
  name: str = None,
  positioning: str = None,
  tags: IResolvable | typing.List[IotwirelessWirelessDeviceTags] = None,
  thing_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.destinationName">destination_name</a></code> | <code>str</code> | Wireless device destination name. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.type">type</a></code> | <code>str</code> | Wireless device type, currently only Sidewalk and LoRa. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.description">description</a></code> | <code>str</code> | Wireless device description. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.lastUplinkReceivedAt">last_uplink_received_at</a></code> | <code>str</code> | The date and time when the most recent uplink was received. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.loRaWan">lo_ra_wan</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWan">IotwirelessWirelessDeviceLoRaWan</a></code> | The combination of Package, Station and Model which represents the version of the LoRaWAN Wireless Device. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.name">name</a></code> | <code>str</code> | Wireless device name. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.positioning">positioning</a></code> | <code>str</code> | FPort values for the GNSS, stream, and ClockSync functions of the positioning information. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTags">IotwirelessWirelessDeviceTags</a>]</code> | A list of key-value pairs that contain metadata for the device. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.thingArn">thing_arn</a></code> | <code>str</code> | Thing arn. Passed into update to associate Thing with Wireless device. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `destination_name`<sup>Required</sup> <a name="destination_name" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.destinationName"></a>

```python
destination_name: str
```

- *Type:* str

Wireless device destination name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#destination_name IotwirelessWirelessDevice#destination_name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Wireless device type, currently only Sidewalk and LoRa.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#type IotwirelessWirelessDevice#type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Wireless device description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#description IotwirelessWirelessDevice#description}

---

##### `last_uplink_received_at`<sup>Optional</sup> <a name="last_uplink_received_at" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.lastUplinkReceivedAt"></a>

```python
last_uplink_received_at: str
```

- *Type:* str

The date and time when the most recent uplink was received.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#last_uplink_received_at IotwirelessWirelessDevice#last_uplink_received_at}

---

##### `lo_ra_wan`<sup>Optional</sup> <a name="lo_ra_wan" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.loRaWan"></a>

```python
lo_ra_wan: IotwirelessWirelessDeviceLoRaWan
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWan">IotwirelessWirelessDeviceLoRaWan</a>

The combination of Package, Station and Model which represents the version of the LoRaWAN Wireless Device.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#lo_ra_wan IotwirelessWirelessDevice#lo_ra_wan}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Wireless device name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#name IotwirelessWirelessDevice#name}

---

##### `positioning`<sup>Optional</sup> <a name="positioning" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.positioning"></a>

```python
positioning: str
```

- *Type:* str

FPort values for the GNSS, stream, and ClockSync functions of the positioning information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#positioning IotwirelessWirelessDevice#positioning}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[IotwirelessWirelessDeviceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTags">IotwirelessWirelessDeviceTags</a>]

A list of key-value pairs that contain metadata for the device.

Currently not supported, will not create if tags are passed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#tags IotwirelessWirelessDevice#tags}

---

##### `thing_arn`<sup>Optional</sup> <a name="thing_arn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.thingArn"></a>

```python
thing_arn: str
```

- *Type:* str

Thing arn. Passed into update to associate Thing with Wireless device.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#thing_arn IotwirelessWirelessDevice#thing_arn}

---

### IotwirelessWirelessDeviceLoRaWan <a name="IotwirelessWirelessDeviceLoRaWan" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWan"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWan.Initializer"></a>

```python
from cdktn_provider_awscc import iotwireless_wireless_device

iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWan(
  abp_v10_x: IotwirelessWirelessDeviceLoRaWanAbpV10X = None,
  abp_v11: IotwirelessWirelessDeviceLoRaWanAbpV11 = None,
  dev_eui: str = None,
  device_profile_id: str = None,
  f_ports: IotwirelessWirelessDeviceLoRaWanFPorts = None,
  otaa_v10_x: IotwirelessWirelessDeviceLoRaWanOtaaV10X = None,
  otaa_v11: IotwirelessWirelessDeviceLoRaWanOtaaV11 = None,
  service_profile_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWan.property.abpV10X">abp_v10_x</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10X">IotwirelessWirelessDeviceLoRaWanAbpV10X</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#abp_v10_x IotwirelessWirelessDevice#abp_v10_x}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWan.property.abpV11">abp_v11</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11">IotwirelessWirelessDeviceLoRaWanAbpV11</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#abp_v11 IotwirelessWirelessDevice#abp_v11}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWan.property.devEui">dev_eui</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#dev_eui IotwirelessWirelessDevice#dev_eui}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWan.property.deviceProfileId">device_profile_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#device_profile_id IotwirelessWirelessDevice#device_profile_id}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWan.property.fPorts">f_ports</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPorts">IotwirelessWirelessDeviceLoRaWanFPorts</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#f_ports IotwirelessWirelessDevice#f_ports}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWan.property.otaaV10X">otaa_v10_x</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10X">IotwirelessWirelessDeviceLoRaWanOtaaV10X</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#otaa_v10_x IotwirelessWirelessDevice#otaa_v10_x}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWan.property.otaaV11">otaa_v11</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11">IotwirelessWirelessDeviceLoRaWanOtaaV11</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#otaa_v11 IotwirelessWirelessDevice#otaa_v11}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWan.property.serviceProfileId">service_profile_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#service_profile_id IotwirelessWirelessDevice#service_profile_id}. |

---

##### `abp_v10_x`<sup>Optional</sup> <a name="abp_v10_x" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWan.property.abpV10X"></a>

```python
abp_v10_x: IotwirelessWirelessDeviceLoRaWanAbpV10X
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10X">IotwirelessWirelessDeviceLoRaWanAbpV10X</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#abp_v10_x IotwirelessWirelessDevice#abp_v10_x}.

---

##### `abp_v11`<sup>Optional</sup> <a name="abp_v11" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWan.property.abpV11"></a>

```python
abp_v11: IotwirelessWirelessDeviceLoRaWanAbpV11
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11">IotwirelessWirelessDeviceLoRaWanAbpV11</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#abp_v11 IotwirelessWirelessDevice#abp_v11}.

---

##### `dev_eui`<sup>Optional</sup> <a name="dev_eui" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWan.property.devEui"></a>

```python
dev_eui: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#dev_eui IotwirelessWirelessDevice#dev_eui}.

---

##### `device_profile_id`<sup>Optional</sup> <a name="device_profile_id" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWan.property.deviceProfileId"></a>

```python
device_profile_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#device_profile_id IotwirelessWirelessDevice#device_profile_id}.

---

##### `f_ports`<sup>Optional</sup> <a name="f_ports" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWan.property.fPorts"></a>

```python
f_ports: IotwirelessWirelessDeviceLoRaWanFPorts
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPorts">IotwirelessWirelessDeviceLoRaWanFPorts</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#f_ports IotwirelessWirelessDevice#f_ports}.

---

##### `otaa_v10_x`<sup>Optional</sup> <a name="otaa_v10_x" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWan.property.otaaV10X"></a>

```python
otaa_v10_x: IotwirelessWirelessDeviceLoRaWanOtaaV10X
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10X">IotwirelessWirelessDeviceLoRaWanOtaaV10X</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#otaa_v10_x IotwirelessWirelessDevice#otaa_v10_x}.

---

##### `otaa_v11`<sup>Optional</sup> <a name="otaa_v11" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWan.property.otaaV11"></a>

```python
otaa_v11: IotwirelessWirelessDeviceLoRaWanOtaaV11
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11">IotwirelessWirelessDeviceLoRaWanOtaaV11</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#otaa_v11 IotwirelessWirelessDevice#otaa_v11}.

---

##### `service_profile_id`<sup>Optional</sup> <a name="service_profile_id" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWan.property.serviceProfileId"></a>

```python
service_profile_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#service_profile_id IotwirelessWirelessDevice#service_profile_id}.

---

### IotwirelessWirelessDeviceLoRaWanAbpV10X <a name="IotwirelessWirelessDeviceLoRaWanAbpV10X" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10X"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10X.Initializer"></a>

```python
from cdktn_provider_awscc import iotwireless_wireless_device

iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10X(
  dev_addr: str = None,
  session_keys: IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10X.property.devAddr">dev_addr</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#dev_addr IotwirelessWirelessDevice#dev_addr}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10X.property.sessionKeys">session_keys</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys">IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#session_keys IotwirelessWirelessDevice#session_keys}. |

---

##### `dev_addr`<sup>Optional</sup> <a name="dev_addr" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10X.property.devAddr"></a>

```python
dev_addr: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#dev_addr IotwirelessWirelessDevice#dev_addr}.

---

##### `session_keys`<sup>Optional</sup> <a name="session_keys" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10X.property.sessionKeys"></a>

```python
session_keys: IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys">IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#session_keys IotwirelessWirelessDevice#session_keys}.

---

### IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys <a name="IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys.Initializer"></a>

```python
from cdktn_provider_awscc import iotwireless_wireless_device

iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys(
  app_s_key: str = None,
  nwk_s_key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys.property.appSKey">app_s_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#app_s_key IotwirelessWirelessDevice#app_s_key}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys.property.nwkSKey">nwk_s_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#nwk_s_key IotwirelessWirelessDevice#nwk_s_key}. |

---

##### `app_s_key`<sup>Optional</sup> <a name="app_s_key" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys.property.appSKey"></a>

```python
app_s_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#app_s_key IotwirelessWirelessDevice#app_s_key}.

---

##### `nwk_s_key`<sup>Optional</sup> <a name="nwk_s_key" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys.property.nwkSKey"></a>

```python
nwk_s_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#nwk_s_key IotwirelessWirelessDevice#nwk_s_key}.

---

### IotwirelessWirelessDeviceLoRaWanAbpV11 <a name="IotwirelessWirelessDeviceLoRaWanAbpV11" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11.Initializer"></a>

```python
from cdktn_provider_awscc import iotwireless_wireless_device

iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11(
  dev_addr: str = None,
  session_keys: IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11.property.devAddr">dev_addr</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#dev_addr IotwirelessWirelessDevice#dev_addr}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11.property.sessionKeys">session_keys</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys">IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#session_keys IotwirelessWirelessDevice#session_keys}. |

---

##### `dev_addr`<sup>Optional</sup> <a name="dev_addr" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11.property.devAddr"></a>

```python
dev_addr: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#dev_addr IotwirelessWirelessDevice#dev_addr}.

---

##### `session_keys`<sup>Optional</sup> <a name="session_keys" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11.property.sessionKeys"></a>

```python
session_keys: IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys">IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#session_keys IotwirelessWirelessDevice#session_keys}.

---

### IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys <a name="IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys.Initializer"></a>

```python
from cdktn_provider_awscc import iotwireless_wireless_device

iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys(
  app_s_key: str = None,
  f_nwk_s_int_key: str = None,
  nwk_s_enc_key: str = None,
  s_nwk_s_int_key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys.property.appSKey">app_s_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#app_s_key IotwirelessWirelessDevice#app_s_key}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys.property.fNwkSIntKey">f_nwk_s_int_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#f_nwk_s_int_key IotwirelessWirelessDevice#f_nwk_s_int_key}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys.property.nwkSEncKey">nwk_s_enc_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#nwk_s_enc_key IotwirelessWirelessDevice#nwk_s_enc_key}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys.property.sNwkSIntKey">s_nwk_s_int_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#s_nwk_s_int_key IotwirelessWirelessDevice#s_nwk_s_int_key}. |

---

##### `app_s_key`<sup>Optional</sup> <a name="app_s_key" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys.property.appSKey"></a>

```python
app_s_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#app_s_key IotwirelessWirelessDevice#app_s_key}.

---

##### `f_nwk_s_int_key`<sup>Optional</sup> <a name="f_nwk_s_int_key" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys.property.fNwkSIntKey"></a>

```python
f_nwk_s_int_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#f_nwk_s_int_key IotwirelessWirelessDevice#f_nwk_s_int_key}.

---

##### `nwk_s_enc_key`<sup>Optional</sup> <a name="nwk_s_enc_key" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys.property.nwkSEncKey"></a>

```python
nwk_s_enc_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#nwk_s_enc_key IotwirelessWirelessDevice#nwk_s_enc_key}.

---

##### `s_nwk_s_int_key`<sup>Optional</sup> <a name="s_nwk_s_int_key" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys.property.sNwkSIntKey"></a>

```python
s_nwk_s_int_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#s_nwk_s_int_key IotwirelessWirelessDevice#s_nwk_s_int_key}.

---

### IotwirelessWirelessDeviceLoRaWanFPorts <a name="IotwirelessWirelessDeviceLoRaWanFPorts" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPorts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPorts.Initializer"></a>

```python
from cdktn_provider_awscc import iotwireless_wireless_device

iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPorts(
  applications: IResolvable | typing.List[IotwirelessWirelessDeviceLoRaWanFPortsApplications] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPorts.property.applications">applications</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplications">IotwirelessWirelessDeviceLoRaWanFPortsApplications</a>]</code> | A list of optional LoRaWAN application information, which can be used for geolocation. |

---

##### `applications`<sup>Optional</sup> <a name="applications" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPorts.property.applications"></a>

```python
applications: IResolvable | typing.List[IotwirelessWirelessDeviceLoRaWanFPortsApplications]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplications">IotwirelessWirelessDeviceLoRaWanFPortsApplications</a>]

A list of optional LoRaWAN application information, which can be used for geolocation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#applications IotwirelessWirelessDevice#applications}

---

### IotwirelessWirelessDeviceLoRaWanFPortsApplications <a name="IotwirelessWirelessDeviceLoRaWanFPortsApplications" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplications.Initializer"></a>

```python
from cdktn_provider_awscc import iotwireless_wireless_device

iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplications(
  destination_name: str = None,
  f_port: typing.Union[int, float] = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplications.property.destinationName">destination_name</a></code> | <code>str</code> | The name of the position data destination that describes the AWS IoT rule that processes the device's position data for use by AWS IoT Core for LoRaWAN. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplications.property.fPort">f_port</a></code> | <code>typing.Union[int, float]</code> | The Fport value. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplications.property.type">type</a></code> | <code>str</code> | Application type, which can be specified to obtain real-time position information of your LoRaWAN device. |

---

##### `destination_name`<sup>Optional</sup> <a name="destination_name" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplications.property.destinationName"></a>

```python
destination_name: str
```

- *Type:* str

The name of the position data destination that describes the AWS IoT rule that processes the device's position data for use by AWS IoT Core for LoRaWAN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#destination_name IotwirelessWirelessDevice#destination_name}

---

##### `f_port`<sup>Optional</sup> <a name="f_port" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplications.property.fPort"></a>

```python
f_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The Fport value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#f_port IotwirelessWirelessDevice#f_port}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplications.property.type"></a>

```python
type: str
```

- *Type:* str

Application type, which can be specified to obtain real-time position information of your LoRaWAN device.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#type IotwirelessWirelessDevice#type}

---

### IotwirelessWirelessDeviceLoRaWanOtaaV10X <a name="IotwirelessWirelessDeviceLoRaWanOtaaV10X" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10X"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10X.Initializer"></a>

```python
from cdktn_provider_awscc import iotwireless_wireless_device

iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10X(
  app_eui: str = None,
  app_key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10X.property.appEui">app_eui</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#app_eui IotwirelessWirelessDevice#app_eui}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10X.property.appKey">app_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#app_key IotwirelessWirelessDevice#app_key}. |

---

##### `app_eui`<sup>Optional</sup> <a name="app_eui" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10X.property.appEui"></a>

```python
app_eui: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#app_eui IotwirelessWirelessDevice#app_eui}.

---

##### `app_key`<sup>Optional</sup> <a name="app_key" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10X.property.appKey"></a>

```python
app_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#app_key IotwirelessWirelessDevice#app_key}.

---

### IotwirelessWirelessDeviceLoRaWanOtaaV11 <a name="IotwirelessWirelessDeviceLoRaWanOtaaV11" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11.Initializer"></a>

```python
from cdktn_provider_awscc import iotwireless_wireless_device

iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11(
  app_key: str = None,
  join_eui: str = None,
  nwk_key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11.property.appKey">app_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#app_key IotwirelessWirelessDevice#app_key}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11.property.joinEui">join_eui</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#join_eui IotwirelessWirelessDevice#join_eui}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11.property.nwkKey">nwk_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#nwk_key IotwirelessWirelessDevice#nwk_key}. |

---

##### `app_key`<sup>Optional</sup> <a name="app_key" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11.property.appKey"></a>

```python
app_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#app_key IotwirelessWirelessDevice#app_key}.

---

##### `join_eui`<sup>Optional</sup> <a name="join_eui" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11.property.joinEui"></a>

```python
join_eui: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#join_eui IotwirelessWirelessDevice#join_eui}.

---

##### `nwk_key`<sup>Optional</sup> <a name="nwk_key" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11.property.nwkKey"></a>

```python
nwk_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#nwk_key IotwirelessWirelessDevice#nwk_key}.

---

### IotwirelessWirelessDeviceTags <a name="IotwirelessWirelessDeviceTags" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTags.Initializer"></a>

```python
from cdktn_provider_awscc import iotwireless_wireless_device

iotwirelessWirelessDevice.IotwirelessWirelessDeviceTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#key IotwirelessWirelessDevice#key}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#value IotwirelessWirelessDevice#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#key IotwirelessWirelessDevice#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#value IotwirelessWirelessDevice#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference <a name="IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotwireless_wireless_device

iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.putSessionKeys">put_session_keys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.resetDevAddr">reset_dev_addr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.resetSessionKeys">reset_session_keys</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_session_keys` <a name="put_session_keys" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.putSessionKeys"></a>

```python
def put_session_keys(
  app_s_key: str = None,
  nwk_s_key: str = None
) -> None
```

###### `app_s_key`<sup>Optional</sup> <a name="app_s_key" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.putSessionKeys.parameter.appSKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#app_s_key IotwirelessWirelessDevice#app_s_key}.

---

###### `nwk_s_key`<sup>Optional</sup> <a name="nwk_s_key" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.putSessionKeys.parameter.nwkSKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#nwk_s_key IotwirelessWirelessDevice#nwk_s_key}.

---

##### `reset_dev_addr` <a name="reset_dev_addr" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.resetDevAddr"></a>

```python
def reset_dev_addr() -> None
```

##### `reset_session_keys` <a name="reset_session_keys" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.resetSessionKeys"></a>

```python
def reset_session_keys() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.property.sessionKeys">session_keys</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference">IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.property.devAddrInput">dev_addr_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.property.sessionKeysInput">session_keys_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys">IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.property.devAddr">dev_addr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10X">IotwirelessWirelessDeviceLoRaWanAbpV10X</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `session_keys`<sup>Required</sup> <a name="session_keys" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.property.sessionKeys"></a>

```python
session_keys: IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference">IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference</a>

---

##### `dev_addr_input`<sup>Optional</sup> <a name="dev_addr_input" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.property.devAddrInput"></a>

```python
dev_addr_input: str
```

- *Type:* str

---

##### `session_keys_input`<sup>Optional</sup> <a name="session_keys_input" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.property.sessionKeysInput"></a>

```python
session_keys_input: IResolvable | IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys">IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys</a>

---

##### `dev_addr`<sup>Required</sup> <a name="dev_addr" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.property.devAddr"></a>

```python
dev_addr: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotwirelessWirelessDeviceLoRaWanAbpV10X
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10X">IotwirelessWirelessDeviceLoRaWanAbpV10X</a>

---


### IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference <a name="IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotwireless_wireless_device

iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.resetAppSKey">reset_app_s_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.resetNwkSKey">reset_nwk_s_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_app_s_key` <a name="reset_app_s_key" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.resetAppSKey"></a>

```python
def reset_app_s_key() -> None
```

##### `reset_nwk_s_key` <a name="reset_nwk_s_key" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.resetNwkSKey"></a>

```python
def reset_nwk_s_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.property.appSKeyInput">app_s_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.property.nwkSKeyInput">nwk_s_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.property.appSKey">app_s_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.property.nwkSKey">nwk_s_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys">IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `app_s_key_input`<sup>Optional</sup> <a name="app_s_key_input" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.property.appSKeyInput"></a>

```python
app_s_key_input: str
```

- *Type:* str

---

##### `nwk_s_key_input`<sup>Optional</sup> <a name="nwk_s_key_input" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.property.nwkSKeyInput"></a>

```python
nwk_s_key_input: str
```

- *Type:* str

---

##### `app_s_key`<sup>Required</sup> <a name="app_s_key" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.property.appSKey"></a>

```python
app_s_key: str
```

- *Type:* str

---

##### `nwk_s_key`<sup>Required</sup> <a name="nwk_s_key" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.property.nwkSKey"></a>

```python
nwk_s_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys">IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys</a>

---


### IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference <a name="IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotwireless_wireless_device

iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.putSessionKeys">put_session_keys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.resetDevAddr">reset_dev_addr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.resetSessionKeys">reset_session_keys</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_session_keys` <a name="put_session_keys" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.putSessionKeys"></a>

```python
def put_session_keys(
  app_s_key: str = None,
  f_nwk_s_int_key: str = None,
  nwk_s_enc_key: str = None,
  s_nwk_s_int_key: str = None
) -> None
```

###### `app_s_key`<sup>Optional</sup> <a name="app_s_key" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.putSessionKeys.parameter.appSKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#app_s_key IotwirelessWirelessDevice#app_s_key}.

---

###### `f_nwk_s_int_key`<sup>Optional</sup> <a name="f_nwk_s_int_key" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.putSessionKeys.parameter.fNwkSIntKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#f_nwk_s_int_key IotwirelessWirelessDevice#f_nwk_s_int_key}.

---

###### `nwk_s_enc_key`<sup>Optional</sup> <a name="nwk_s_enc_key" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.putSessionKeys.parameter.nwkSEncKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#nwk_s_enc_key IotwirelessWirelessDevice#nwk_s_enc_key}.

---

###### `s_nwk_s_int_key`<sup>Optional</sup> <a name="s_nwk_s_int_key" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.putSessionKeys.parameter.sNwkSIntKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#s_nwk_s_int_key IotwirelessWirelessDevice#s_nwk_s_int_key}.

---

##### `reset_dev_addr` <a name="reset_dev_addr" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.resetDevAddr"></a>

```python
def reset_dev_addr() -> None
```

##### `reset_session_keys` <a name="reset_session_keys" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.resetSessionKeys"></a>

```python
def reset_session_keys() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.property.sessionKeys">session_keys</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference">IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.property.devAddrInput">dev_addr_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.property.sessionKeysInput">session_keys_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys">IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.property.devAddr">dev_addr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11">IotwirelessWirelessDeviceLoRaWanAbpV11</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `session_keys`<sup>Required</sup> <a name="session_keys" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.property.sessionKeys"></a>

```python
session_keys: IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference">IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference</a>

---

##### `dev_addr_input`<sup>Optional</sup> <a name="dev_addr_input" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.property.devAddrInput"></a>

```python
dev_addr_input: str
```

- *Type:* str

---

##### `session_keys_input`<sup>Optional</sup> <a name="session_keys_input" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.property.sessionKeysInput"></a>

```python
session_keys_input: IResolvable | IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys">IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys</a>

---

##### `dev_addr`<sup>Required</sup> <a name="dev_addr" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.property.devAddr"></a>

```python
dev_addr: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotwirelessWirelessDeviceLoRaWanAbpV11
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11">IotwirelessWirelessDeviceLoRaWanAbpV11</a>

---


### IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference <a name="IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotwireless_wireless_device

iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.resetAppSKey">reset_app_s_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.resetFNwkSIntKey">reset_f_nwk_s_int_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.resetNwkSEncKey">reset_nwk_s_enc_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.resetSNwkSIntKey">reset_s_nwk_s_int_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_app_s_key` <a name="reset_app_s_key" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.resetAppSKey"></a>

```python
def reset_app_s_key() -> None
```

##### `reset_f_nwk_s_int_key` <a name="reset_f_nwk_s_int_key" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.resetFNwkSIntKey"></a>

```python
def reset_f_nwk_s_int_key() -> None
```

##### `reset_nwk_s_enc_key` <a name="reset_nwk_s_enc_key" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.resetNwkSEncKey"></a>

```python
def reset_nwk_s_enc_key() -> None
```

##### `reset_s_nwk_s_int_key` <a name="reset_s_nwk_s_int_key" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.resetSNwkSIntKey"></a>

```python
def reset_s_nwk_s_int_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.appSKeyInput">app_s_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.fNwkSIntKeyInput">f_nwk_s_int_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.nwkSEncKeyInput">nwk_s_enc_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.sNwkSIntKeyInput">s_nwk_s_int_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.appSKey">app_s_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.fNwkSIntKey">f_nwk_s_int_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.nwkSEncKey">nwk_s_enc_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.sNwkSIntKey">s_nwk_s_int_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys">IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `app_s_key_input`<sup>Optional</sup> <a name="app_s_key_input" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.appSKeyInput"></a>

```python
app_s_key_input: str
```

- *Type:* str

---

##### `f_nwk_s_int_key_input`<sup>Optional</sup> <a name="f_nwk_s_int_key_input" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.fNwkSIntKeyInput"></a>

```python
f_nwk_s_int_key_input: str
```

- *Type:* str

---

##### `nwk_s_enc_key_input`<sup>Optional</sup> <a name="nwk_s_enc_key_input" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.nwkSEncKeyInput"></a>

```python
nwk_s_enc_key_input: str
```

- *Type:* str

---

##### `s_nwk_s_int_key_input`<sup>Optional</sup> <a name="s_nwk_s_int_key_input" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.sNwkSIntKeyInput"></a>

```python
s_nwk_s_int_key_input: str
```

- *Type:* str

---

##### `app_s_key`<sup>Required</sup> <a name="app_s_key" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.appSKey"></a>

```python
app_s_key: str
```

- *Type:* str

---

##### `f_nwk_s_int_key`<sup>Required</sup> <a name="f_nwk_s_int_key" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.fNwkSIntKey"></a>

```python
f_nwk_s_int_key: str
```

- *Type:* str

---

##### `nwk_s_enc_key`<sup>Required</sup> <a name="nwk_s_enc_key" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.nwkSEncKey"></a>

```python
nwk_s_enc_key: str
```

- *Type:* str

---

##### `s_nwk_s_int_key`<sup>Required</sup> <a name="s_nwk_s_int_key" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.sNwkSIntKey"></a>

```python
s_nwk_s_int_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys">IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys</a>

---


### IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList <a name="IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.Initializer"></a>

```python
from cdktn_provider_awscc import iotwireless_wireless_device

iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplications">IotwirelessWirelessDeviceLoRaWanFPortsApplications</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[IotwirelessWirelessDeviceLoRaWanFPortsApplications]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplications">IotwirelessWirelessDeviceLoRaWanFPortsApplications</a>]

---


### IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference <a name="IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotwireless_wireless_device

iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.resetDestinationName">reset_destination_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.resetFPort">reset_f_port</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_destination_name` <a name="reset_destination_name" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.resetDestinationName"></a>

```python
def reset_destination_name() -> None
```

##### `reset_f_port` <a name="reset_f_port" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.resetFPort"></a>

```python
def reset_f_port() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.property.destinationNameInput">destination_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.property.fPortInput">f_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.property.destinationName">destination_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.property.fPort">f_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplications">IotwirelessWirelessDeviceLoRaWanFPortsApplications</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination_name_input`<sup>Optional</sup> <a name="destination_name_input" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.property.destinationNameInput"></a>

```python
destination_name_input: str
```

- *Type:* str

---

##### `f_port_input`<sup>Optional</sup> <a name="f_port_input" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.property.fPortInput"></a>

```python
f_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `destination_name`<sup>Required</sup> <a name="destination_name" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.property.destinationName"></a>

```python
destination_name: str
```

- *Type:* str

---

##### `f_port`<sup>Required</sup> <a name="f_port" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.property.fPort"></a>

```python
f_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotwirelessWirelessDeviceLoRaWanFPortsApplications
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplications">IotwirelessWirelessDeviceLoRaWanFPortsApplications</a>

---


### IotwirelessWirelessDeviceLoRaWanFPortsOutputReference <a name="IotwirelessWirelessDeviceLoRaWanFPortsOutputReference" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotwireless_wireless_device

iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.putApplications">put_applications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.resetApplications">reset_applications</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_applications` <a name="put_applications" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.putApplications"></a>

```python
def put_applications(
  value: IResolvable | typing.List[IotwirelessWirelessDeviceLoRaWanFPortsApplications]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.putApplications.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplications">IotwirelessWirelessDeviceLoRaWanFPortsApplications</a>]

---

##### `reset_applications` <a name="reset_applications" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.resetApplications"></a>

```python
def reset_applications() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.property.applications">applications</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList">IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.property.applicationsInput">applications_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplications">IotwirelessWirelessDeviceLoRaWanFPortsApplications</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPorts">IotwirelessWirelessDeviceLoRaWanFPorts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `applications`<sup>Required</sup> <a name="applications" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.property.applications"></a>

```python
applications: IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList">IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList</a>

---

##### `applications_input`<sup>Optional</sup> <a name="applications_input" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.property.applicationsInput"></a>

```python
applications_input: IResolvable | typing.List[IotwirelessWirelessDeviceLoRaWanFPortsApplications]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplications">IotwirelessWirelessDeviceLoRaWanFPortsApplications</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotwirelessWirelessDeviceLoRaWanFPorts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPorts">IotwirelessWirelessDeviceLoRaWanFPorts</a>

---


### IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference <a name="IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotwireless_wireless_device

iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.resetAppEui">reset_app_eui</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.resetAppKey">reset_app_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_app_eui` <a name="reset_app_eui" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.resetAppEui"></a>

```python
def reset_app_eui() -> None
```

##### `reset_app_key` <a name="reset_app_key" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.resetAppKey"></a>

```python
def reset_app_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.property.appEuiInput">app_eui_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.property.appKeyInput">app_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.property.appEui">app_eui</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.property.appKey">app_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10X">IotwirelessWirelessDeviceLoRaWanOtaaV10X</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `app_eui_input`<sup>Optional</sup> <a name="app_eui_input" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.property.appEuiInput"></a>

```python
app_eui_input: str
```

- *Type:* str

---

##### `app_key_input`<sup>Optional</sup> <a name="app_key_input" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.property.appKeyInput"></a>

```python
app_key_input: str
```

- *Type:* str

---

##### `app_eui`<sup>Required</sup> <a name="app_eui" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.property.appEui"></a>

```python
app_eui: str
```

- *Type:* str

---

##### `app_key`<sup>Required</sup> <a name="app_key" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.property.appKey"></a>

```python
app_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotwirelessWirelessDeviceLoRaWanOtaaV10X
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10X">IotwirelessWirelessDeviceLoRaWanOtaaV10X</a>

---


### IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference <a name="IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotwireless_wireless_device

iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.resetAppKey">reset_app_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.resetJoinEui">reset_join_eui</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.resetNwkKey">reset_nwk_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_app_key` <a name="reset_app_key" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.resetAppKey"></a>

```python
def reset_app_key() -> None
```

##### `reset_join_eui` <a name="reset_join_eui" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.resetJoinEui"></a>

```python
def reset_join_eui() -> None
```

##### `reset_nwk_key` <a name="reset_nwk_key" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.resetNwkKey"></a>

```python
def reset_nwk_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.property.appKeyInput">app_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.property.joinEuiInput">join_eui_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.property.nwkKeyInput">nwk_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.property.appKey">app_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.property.joinEui">join_eui</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.property.nwkKey">nwk_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11">IotwirelessWirelessDeviceLoRaWanOtaaV11</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `app_key_input`<sup>Optional</sup> <a name="app_key_input" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.property.appKeyInput"></a>

```python
app_key_input: str
```

- *Type:* str

---

##### `join_eui_input`<sup>Optional</sup> <a name="join_eui_input" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.property.joinEuiInput"></a>

```python
join_eui_input: str
```

- *Type:* str

---

##### `nwk_key_input`<sup>Optional</sup> <a name="nwk_key_input" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.property.nwkKeyInput"></a>

```python
nwk_key_input: str
```

- *Type:* str

---

##### `app_key`<sup>Required</sup> <a name="app_key" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.property.appKey"></a>

```python
app_key: str
```

- *Type:* str

---

##### `join_eui`<sup>Required</sup> <a name="join_eui" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.property.joinEui"></a>

```python
join_eui: str
```

- *Type:* str

---

##### `nwk_key`<sup>Required</sup> <a name="nwk_key" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.property.nwkKey"></a>

```python
nwk_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotwirelessWirelessDeviceLoRaWanOtaaV11
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11">IotwirelessWirelessDeviceLoRaWanOtaaV11</a>

---


### IotwirelessWirelessDeviceLoRaWanOutputReference <a name="IotwirelessWirelessDeviceLoRaWanOutputReference" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotwireless_wireless_device

iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.putAbpV10X">put_abp_v10_x</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.putAbpV11">put_abp_v11</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.putFPorts">put_f_ports</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.putOtaaV10X">put_otaa_v10_x</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.putOtaaV11">put_otaa_v11</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.resetAbpV10X">reset_abp_v10_x</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.resetAbpV11">reset_abp_v11</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.resetDevEui">reset_dev_eui</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.resetDeviceProfileId">reset_device_profile_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.resetFPorts">reset_f_ports</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.resetOtaaV10X">reset_otaa_v10_x</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.resetOtaaV11">reset_otaa_v11</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.resetServiceProfileId">reset_service_profile_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_abp_v10_x` <a name="put_abp_v10_x" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.putAbpV10X"></a>

```python
def put_abp_v10_x(
  dev_addr: str = None,
  session_keys: IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys = None
) -> None
```

###### `dev_addr`<sup>Optional</sup> <a name="dev_addr" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.putAbpV10X.parameter.devAddr"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#dev_addr IotwirelessWirelessDevice#dev_addr}.

---

###### `session_keys`<sup>Optional</sup> <a name="session_keys" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.putAbpV10X.parameter.sessionKeys"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys">IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#session_keys IotwirelessWirelessDevice#session_keys}.

---

##### `put_abp_v11` <a name="put_abp_v11" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.putAbpV11"></a>

```python
def put_abp_v11(
  dev_addr: str = None,
  session_keys: IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys = None
) -> None
```

###### `dev_addr`<sup>Optional</sup> <a name="dev_addr" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.putAbpV11.parameter.devAddr"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#dev_addr IotwirelessWirelessDevice#dev_addr}.

---

###### `session_keys`<sup>Optional</sup> <a name="session_keys" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.putAbpV11.parameter.sessionKeys"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys">IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#session_keys IotwirelessWirelessDevice#session_keys}.

---

##### `put_f_ports` <a name="put_f_ports" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.putFPorts"></a>

```python
def put_f_ports(
  applications: IResolvable | typing.List[IotwirelessWirelessDeviceLoRaWanFPortsApplications] = None
) -> None
```

###### `applications`<sup>Optional</sup> <a name="applications" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.putFPorts.parameter.applications"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplications">IotwirelessWirelessDeviceLoRaWanFPortsApplications</a>]

A list of optional LoRaWAN application information, which can be used for geolocation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#applications IotwirelessWirelessDevice#applications}

---

##### `put_otaa_v10_x` <a name="put_otaa_v10_x" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.putOtaaV10X"></a>

```python
def put_otaa_v10_x(
  app_eui: str = None,
  app_key: str = None
) -> None
```

###### `app_eui`<sup>Optional</sup> <a name="app_eui" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.putOtaaV10X.parameter.appEui"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#app_eui IotwirelessWirelessDevice#app_eui}.

---

###### `app_key`<sup>Optional</sup> <a name="app_key" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.putOtaaV10X.parameter.appKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#app_key IotwirelessWirelessDevice#app_key}.

---

##### `put_otaa_v11` <a name="put_otaa_v11" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.putOtaaV11"></a>

```python
def put_otaa_v11(
  app_key: str = None,
  join_eui: str = None,
  nwk_key: str = None
) -> None
```

###### `app_key`<sup>Optional</sup> <a name="app_key" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.putOtaaV11.parameter.appKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#app_key IotwirelessWirelessDevice#app_key}.

---

###### `join_eui`<sup>Optional</sup> <a name="join_eui" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.putOtaaV11.parameter.joinEui"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#join_eui IotwirelessWirelessDevice#join_eui}.

---

###### `nwk_key`<sup>Optional</sup> <a name="nwk_key" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.putOtaaV11.parameter.nwkKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_wireless_device#nwk_key IotwirelessWirelessDevice#nwk_key}.

---

##### `reset_abp_v10_x` <a name="reset_abp_v10_x" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.resetAbpV10X"></a>

```python
def reset_abp_v10_x() -> None
```

##### `reset_abp_v11` <a name="reset_abp_v11" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.resetAbpV11"></a>

```python
def reset_abp_v11() -> None
```

##### `reset_dev_eui` <a name="reset_dev_eui" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.resetDevEui"></a>

```python
def reset_dev_eui() -> None
```

##### `reset_device_profile_id` <a name="reset_device_profile_id" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.resetDeviceProfileId"></a>

```python
def reset_device_profile_id() -> None
```

##### `reset_f_ports` <a name="reset_f_ports" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.resetFPorts"></a>

```python
def reset_f_ports() -> None
```

##### `reset_otaa_v10_x` <a name="reset_otaa_v10_x" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.resetOtaaV10X"></a>

```python
def reset_otaa_v10_x() -> None
```

##### `reset_otaa_v11` <a name="reset_otaa_v11" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.resetOtaaV11"></a>

```python
def reset_otaa_v11() -> None
```

##### `reset_service_profile_id` <a name="reset_service_profile_id" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.resetServiceProfileId"></a>

```python
def reset_service_profile_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.abpV10X">abp_v10_x</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference">IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.abpV11">abp_v11</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference">IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.fPorts">f_ports</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference">IotwirelessWirelessDeviceLoRaWanFPortsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.otaaV10X">otaa_v10_x</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference">IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.otaaV11">otaa_v11</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference">IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.abpV10XInput">abp_v10_x_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10X">IotwirelessWirelessDeviceLoRaWanAbpV10X</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.abpV11Input">abp_v11_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11">IotwirelessWirelessDeviceLoRaWanAbpV11</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.devEuiInput">dev_eui_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.deviceProfileIdInput">device_profile_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.fPortsInput">f_ports_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPorts">IotwirelessWirelessDeviceLoRaWanFPorts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.otaaV10XInput">otaa_v10_x_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10X">IotwirelessWirelessDeviceLoRaWanOtaaV10X</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.otaaV11Input">otaa_v11_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11">IotwirelessWirelessDeviceLoRaWanOtaaV11</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.serviceProfileIdInput">service_profile_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.devEui">dev_eui</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.deviceProfileId">device_profile_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.serviceProfileId">service_profile_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWan">IotwirelessWirelessDeviceLoRaWan</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `abp_v10_x`<sup>Required</sup> <a name="abp_v10_x" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.abpV10X"></a>

```python
abp_v10_x: IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference">IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference</a>

---

##### `abp_v11`<sup>Required</sup> <a name="abp_v11" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.abpV11"></a>

```python
abp_v11: IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference">IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference</a>

---

##### `f_ports`<sup>Required</sup> <a name="f_ports" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.fPorts"></a>

```python
f_ports: IotwirelessWirelessDeviceLoRaWanFPortsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference">IotwirelessWirelessDeviceLoRaWanFPortsOutputReference</a>

---

##### `otaa_v10_x`<sup>Required</sup> <a name="otaa_v10_x" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.otaaV10X"></a>

```python
otaa_v10_x: IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference">IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference</a>

---

##### `otaa_v11`<sup>Required</sup> <a name="otaa_v11" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.otaaV11"></a>

```python
otaa_v11: IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference">IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference</a>

---

##### `abp_v10_x_input`<sup>Optional</sup> <a name="abp_v10_x_input" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.abpV10XInput"></a>

```python
abp_v10_x_input: IResolvable | IotwirelessWirelessDeviceLoRaWanAbpV10X
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10X">IotwirelessWirelessDeviceLoRaWanAbpV10X</a>

---

##### `abp_v11_input`<sup>Optional</sup> <a name="abp_v11_input" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.abpV11Input"></a>

```python
abp_v11_input: IResolvable | IotwirelessWirelessDeviceLoRaWanAbpV11
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11">IotwirelessWirelessDeviceLoRaWanAbpV11</a>

---

##### `dev_eui_input`<sup>Optional</sup> <a name="dev_eui_input" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.devEuiInput"></a>

```python
dev_eui_input: str
```

- *Type:* str

---

##### `device_profile_id_input`<sup>Optional</sup> <a name="device_profile_id_input" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.deviceProfileIdInput"></a>

```python
device_profile_id_input: str
```

- *Type:* str

---

##### `f_ports_input`<sup>Optional</sup> <a name="f_ports_input" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.fPortsInput"></a>

```python
f_ports_input: IResolvable | IotwirelessWirelessDeviceLoRaWanFPorts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPorts">IotwirelessWirelessDeviceLoRaWanFPorts</a>

---

##### `otaa_v10_x_input`<sup>Optional</sup> <a name="otaa_v10_x_input" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.otaaV10XInput"></a>

```python
otaa_v10_x_input: IResolvable | IotwirelessWirelessDeviceLoRaWanOtaaV10X
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10X">IotwirelessWirelessDeviceLoRaWanOtaaV10X</a>

---

##### `otaa_v11_input`<sup>Optional</sup> <a name="otaa_v11_input" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.otaaV11Input"></a>

```python
otaa_v11_input: IResolvable | IotwirelessWirelessDeviceLoRaWanOtaaV11
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11">IotwirelessWirelessDeviceLoRaWanOtaaV11</a>

---

##### `service_profile_id_input`<sup>Optional</sup> <a name="service_profile_id_input" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.serviceProfileIdInput"></a>

```python
service_profile_id_input: str
```

- *Type:* str

---

##### `dev_eui`<sup>Required</sup> <a name="dev_eui" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.devEui"></a>

```python
dev_eui: str
```

- *Type:* str

---

##### `device_profile_id`<sup>Required</sup> <a name="device_profile_id" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.deviceProfileId"></a>

```python
device_profile_id: str
```

- *Type:* str

---

##### `service_profile_id`<sup>Required</sup> <a name="service_profile_id" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.serviceProfileId"></a>

```python
service_profile_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotwirelessWirelessDeviceLoRaWan
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWan">IotwirelessWirelessDeviceLoRaWan</a>

---


### IotwirelessWirelessDeviceTagsList <a name="IotwirelessWirelessDeviceTagsList" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import iotwireless_wireless_device

iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IotwirelessWirelessDeviceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTags">IotwirelessWirelessDeviceTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[IotwirelessWirelessDeviceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTags">IotwirelessWirelessDeviceTags</a>]

---


### IotwirelessWirelessDeviceTagsOutputReference <a name="IotwirelessWirelessDeviceTagsOutputReference" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotwireless_wireless_device

iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTags">IotwirelessWirelessDeviceTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotwirelessWirelessDeviceTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTags">IotwirelessWirelessDeviceTags</a>

---



