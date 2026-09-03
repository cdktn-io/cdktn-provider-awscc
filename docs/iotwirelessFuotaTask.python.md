# `iotwirelessFuotaTask` Submodule <a name="`iotwirelessFuotaTask` Submodule" id="@cdktn/provider-awscc.iotwirelessFuotaTask"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotwirelessFuotaTask <a name="IotwirelessFuotaTask" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotwireless_fuota_task awscc_iotwireless_fuota_task}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.Initializer"></a>

```python
from cdktn_provider_awscc import iotwireless_fuota_task

iotwirelessFuotaTask.IotwirelessFuotaTask(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  firmware_update_image: str,
  firmware_update_role: str,
  lo_ra_wan: IotwirelessFuotaTaskLoRaWan,
  associate_multicast_group: str = None,
  associate_wireless_device: str = None,
  description: str = None,
  disassociate_multicast_group: str = None,
  disassociate_wireless_device: str = None,
  name: str = None,
  tags: IResolvable | typing.List[IotwirelessFuotaTaskTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.Initializer.parameter.firmwareUpdateImage">firmware_update_image</a></code> | <code>str</code> | FUOTA task firmware update image binary S3 link. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.Initializer.parameter.firmwareUpdateRole">firmware_update_role</a></code> | <code>str</code> | FUOTA task firmware IAM role for reading S3. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.Initializer.parameter.loRaWan">lo_ra_wan</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWan">IotwirelessFuotaTaskLoRaWan</a></code> | FUOTA task LoRaWAN. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.Initializer.parameter.associateMulticastGroup">associate_multicast_group</a></code> | <code>str</code> | Multicast group to associate. Only for update request. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.Initializer.parameter.associateWirelessDevice">associate_wireless_device</a></code> | <code>str</code> | Wireless device to associate. Only for update request. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.Initializer.parameter.description">description</a></code> | <code>str</code> | FUOTA task description. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.Initializer.parameter.disassociateMulticastGroup">disassociate_multicast_group</a></code> | <code>str</code> | Multicast group to disassociate. Only for update request. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.Initializer.parameter.disassociateWirelessDevice">disassociate_wireless_device</a></code> | <code>str</code> | Wireless device to disassociate. Only for update request. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of FUOTA task. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTags">IotwirelessFuotaTaskTags</a>]</code> | A list of key-value pairs that contain metadata for the FUOTA task. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `firmware_update_image`<sup>Required</sup> <a name="firmware_update_image" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.Initializer.parameter.firmwareUpdateImage"></a>

- *Type:* str

FUOTA task firmware update image binary S3 link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotwireless_fuota_task#firmware_update_image IotwirelessFuotaTask#firmware_update_image}

---

##### `firmware_update_role`<sup>Required</sup> <a name="firmware_update_role" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.Initializer.parameter.firmwareUpdateRole"></a>

- *Type:* str

FUOTA task firmware IAM role for reading S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotwireless_fuota_task#firmware_update_role IotwirelessFuotaTask#firmware_update_role}

---

##### `lo_ra_wan`<sup>Required</sup> <a name="lo_ra_wan" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.Initializer.parameter.loRaWan"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWan">IotwirelessFuotaTaskLoRaWan</a>

FUOTA task LoRaWAN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotwireless_fuota_task#lo_ra_wan IotwirelessFuotaTask#lo_ra_wan}

---

##### `associate_multicast_group`<sup>Optional</sup> <a name="associate_multicast_group" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.Initializer.parameter.associateMulticastGroup"></a>

- *Type:* str

Multicast group to associate. Only for update request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotwireless_fuota_task#associate_multicast_group IotwirelessFuotaTask#associate_multicast_group}

---

##### `associate_wireless_device`<sup>Optional</sup> <a name="associate_wireless_device" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.Initializer.parameter.associateWirelessDevice"></a>

- *Type:* str

Wireless device to associate. Only for update request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotwireless_fuota_task#associate_wireless_device IotwirelessFuotaTask#associate_wireless_device}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.Initializer.parameter.description"></a>

- *Type:* str

FUOTA task description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotwireless_fuota_task#description IotwirelessFuotaTask#description}

---

##### `disassociate_multicast_group`<sup>Optional</sup> <a name="disassociate_multicast_group" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.Initializer.parameter.disassociateMulticastGroup"></a>

- *Type:* str

Multicast group to disassociate. Only for update request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotwireless_fuota_task#disassociate_multicast_group IotwirelessFuotaTask#disassociate_multicast_group}

---

##### `disassociate_wireless_device`<sup>Optional</sup> <a name="disassociate_wireless_device" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.Initializer.parameter.disassociateWirelessDevice"></a>

- *Type:* str

Wireless device to disassociate. Only for update request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotwireless_fuota_task#disassociate_wireless_device IotwirelessFuotaTask#disassociate_wireless_device}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.Initializer.parameter.name"></a>

- *Type:* str

Name of FUOTA task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotwireless_fuota_task#name IotwirelessFuotaTask#name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTags">IotwirelessFuotaTaskTags</a>]

A list of key-value pairs that contain metadata for the FUOTA task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotwireless_fuota_task#tags IotwirelessFuotaTask#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.putLoRaWan">put_lo_ra_wan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.resetAssociateMulticastGroup">reset_associate_multicast_group</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.resetAssociateWirelessDevice">reset_associate_wireless_device</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.resetDisassociateMulticastGroup">reset_disassociate_multicast_group</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.resetDisassociateWirelessDevice">reset_disassociate_wireless_device</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_lo_ra_wan` <a name="put_lo_ra_wan" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.putLoRaWan"></a>

```python
def put_lo_ra_wan(
  rf_region: str
) -> None
```

###### `rf_region`<sup>Required</sup> <a name="rf_region" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.putLoRaWan.parameter.rfRegion"></a>

- *Type:* str

FUOTA task LoRaWAN RF region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotwireless_fuota_task#rf_region IotwirelessFuotaTask#rf_region}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[IotwirelessFuotaTaskTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTags">IotwirelessFuotaTaskTags</a>]

---

##### `reset_associate_multicast_group` <a name="reset_associate_multicast_group" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.resetAssociateMulticastGroup"></a>

```python
def reset_associate_multicast_group() -> None
```

##### `reset_associate_wireless_device` <a name="reset_associate_wireless_device" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.resetAssociateWirelessDevice"></a>

```python
def reset_associate_wireless_device() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_disassociate_multicast_group` <a name="reset_disassociate_multicast_group" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.resetDisassociateMulticastGroup"></a>

```python
def reset_disassociate_multicast_group() -> None
```

##### `reset_disassociate_wireless_device` <a name="reset_disassociate_wireless_device" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.resetDisassociateWirelessDevice"></a>

```python
def reset_disassociate_wireless_device() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a IotwirelessFuotaTask resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.isConstruct"></a>

```python
from cdktn_provider_awscc import iotwireless_fuota_task

iotwirelessFuotaTask.IotwirelessFuotaTask.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.isTerraformElement"></a>

```python
from cdktn_provider_awscc import iotwireless_fuota_task

iotwirelessFuotaTask.IotwirelessFuotaTask.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.isTerraformResource"></a>

```python
from cdktn_provider_awscc import iotwireless_fuota_task

iotwirelessFuotaTask.IotwirelessFuotaTask.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import iotwireless_fuota_task

iotwirelessFuotaTask.IotwirelessFuotaTask.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a IotwirelessFuotaTask resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IotwirelessFuotaTask to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IotwirelessFuotaTask that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotwireless_fuota_task#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IotwirelessFuotaTask to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.fuotaTaskId">fuota_task_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.fuotaTaskStatus">fuota_task_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.loRaWan">lo_ra_wan</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference">IotwirelessFuotaTaskLoRaWanOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsList">IotwirelessFuotaTaskTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.associateMulticastGroupInput">associate_multicast_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.associateWirelessDeviceInput">associate_wireless_device_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.disassociateMulticastGroupInput">disassociate_multicast_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.disassociateWirelessDeviceInput">disassociate_wireless_device_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.firmwareUpdateImageInput">firmware_update_image_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.firmwareUpdateRoleInput">firmware_update_role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.loRaWanInput">lo_ra_wan_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWan">IotwirelessFuotaTaskLoRaWan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTags">IotwirelessFuotaTaskTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.associateMulticastGroup">associate_multicast_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.associateWirelessDevice">associate_wireless_device</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.disassociateMulticastGroup">disassociate_multicast_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.disassociateWirelessDevice">disassociate_wireless_device</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.firmwareUpdateImage">firmware_update_image</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.firmwareUpdateRole">firmware_update_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `fuota_task_id`<sup>Required</sup> <a name="fuota_task_id" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.fuotaTaskId"></a>

```python
fuota_task_id: str
```

- *Type:* str

---

##### `fuota_task_status`<sup>Required</sup> <a name="fuota_task_status" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.fuotaTaskStatus"></a>

```python
fuota_task_status: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lo_ra_wan`<sup>Required</sup> <a name="lo_ra_wan" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.loRaWan"></a>

```python
lo_ra_wan: IotwirelessFuotaTaskLoRaWanOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference">IotwirelessFuotaTaskLoRaWanOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.tags"></a>

```python
tags: IotwirelessFuotaTaskTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsList">IotwirelessFuotaTaskTagsList</a>

---

##### `associate_multicast_group_input`<sup>Optional</sup> <a name="associate_multicast_group_input" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.associateMulticastGroupInput"></a>

```python
associate_multicast_group_input: str
```

- *Type:* str

---

##### `associate_wireless_device_input`<sup>Optional</sup> <a name="associate_wireless_device_input" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.associateWirelessDeviceInput"></a>

```python
associate_wireless_device_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `disassociate_multicast_group_input`<sup>Optional</sup> <a name="disassociate_multicast_group_input" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.disassociateMulticastGroupInput"></a>

```python
disassociate_multicast_group_input: str
```

- *Type:* str

---

##### `disassociate_wireless_device_input`<sup>Optional</sup> <a name="disassociate_wireless_device_input" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.disassociateWirelessDeviceInput"></a>

```python
disassociate_wireless_device_input: str
```

- *Type:* str

---

##### `firmware_update_image_input`<sup>Optional</sup> <a name="firmware_update_image_input" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.firmwareUpdateImageInput"></a>

```python
firmware_update_image_input: str
```

- *Type:* str

---

##### `firmware_update_role_input`<sup>Optional</sup> <a name="firmware_update_role_input" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.firmwareUpdateRoleInput"></a>

```python
firmware_update_role_input: str
```

- *Type:* str

---

##### `lo_ra_wan_input`<sup>Optional</sup> <a name="lo_ra_wan_input" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.loRaWanInput"></a>

```python
lo_ra_wan_input: IResolvable | IotwirelessFuotaTaskLoRaWan
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWan">IotwirelessFuotaTaskLoRaWan</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[IotwirelessFuotaTaskTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTags">IotwirelessFuotaTaskTags</a>]

---

##### `associate_multicast_group`<sup>Required</sup> <a name="associate_multicast_group" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.associateMulticastGroup"></a>

```python
associate_multicast_group: str
```

- *Type:* str

---

##### `associate_wireless_device`<sup>Required</sup> <a name="associate_wireless_device" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.associateWirelessDevice"></a>

```python
associate_wireless_device: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `disassociate_multicast_group`<sup>Required</sup> <a name="disassociate_multicast_group" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.disassociateMulticastGroup"></a>

```python
disassociate_multicast_group: str
```

- *Type:* str

---

##### `disassociate_wireless_device`<sup>Required</sup> <a name="disassociate_wireless_device" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.disassociateWirelessDevice"></a>

```python
disassociate_wireless_device: str
```

- *Type:* str

---

##### `firmware_update_image`<sup>Required</sup> <a name="firmware_update_image" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.firmwareUpdateImage"></a>

```python
firmware_update_image: str
```

- *Type:* str

---

##### `firmware_update_role`<sup>Required</sup> <a name="firmware_update_role" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.firmwareUpdateRole"></a>

```python
firmware_update_role: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IotwirelessFuotaTaskConfig <a name="IotwirelessFuotaTaskConfig" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.Initializer"></a>

```python
from cdktn_provider_awscc import iotwireless_fuota_task

iotwirelessFuotaTask.IotwirelessFuotaTaskConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  firmware_update_image: str,
  firmware_update_role: str,
  lo_ra_wan: IotwirelessFuotaTaskLoRaWan,
  associate_multicast_group: str = None,
  associate_wireless_device: str = None,
  description: str = None,
  disassociate_multicast_group: str = None,
  disassociate_wireless_device: str = None,
  name: str = None,
  tags: IResolvable | typing.List[IotwirelessFuotaTaskTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.firmwareUpdateImage">firmware_update_image</a></code> | <code>str</code> | FUOTA task firmware update image binary S3 link. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.firmwareUpdateRole">firmware_update_role</a></code> | <code>str</code> | FUOTA task firmware IAM role for reading S3. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.loRaWan">lo_ra_wan</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWan">IotwirelessFuotaTaskLoRaWan</a></code> | FUOTA task LoRaWAN. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.associateMulticastGroup">associate_multicast_group</a></code> | <code>str</code> | Multicast group to associate. Only for update request. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.associateWirelessDevice">associate_wireless_device</a></code> | <code>str</code> | Wireless device to associate. Only for update request. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.description">description</a></code> | <code>str</code> | FUOTA task description. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.disassociateMulticastGroup">disassociate_multicast_group</a></code> | <code>str</code> | Multicast group to disassociate. Only for update request. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.disassociateWirelessDevice">disassociate_wireless_device</a></code> | <code>str</code> | Wireless device to disassociate. Only for update request. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.name">name</a></code> | <code>str</code> | Name of FUOTA task. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTags">IotwirelessFuotaTaskTags</a>]</code> | A list of key-value pairs that contain metadata for the FUOTA task. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `firmware_update_image`<sup>Required</sup> <a name="firmware_update_image" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.firmwareUpdateImage"></a>

```python
firmware_update_image: str
```

- *Type:* str

FUOTA task firmware update image binary S3 link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotwireless_fuota_task#firmware_update_image IotwirelessFuotaTask#firmware_update_image}

---

##### `firmware_update_role`<sup>Required</sup> <a name="firmware_update_role" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.firmwareUpdateRole"></a>

```python
firmware_update_role: str
```

- *Type:* str

FUOTA task firmware IAM role for reading S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotwireless_fuota_task#firmware_update_role IotwirelessFuotaTask#firmware_update_role}

---

##### `lo_ra_wan`<sup>Required</sup> <a name="lo_ra_wan" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.loRaWan"></a>

```python
lo_ra_wan: IotwirelessFuotaTaskLoRaWan
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWan">IotwirelessFuotaTaskLoRaWan</a>

FUOTA task LoRaWAN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotwireless_fuota_task#lo_ra_wan IotwirelessFuotaTask#lo_ra_wan}

---

##### `associate_multicast_group`<sup>Optional</sup> <a name="associate_multicast_group" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.associateMulticastGroup"></a>

```python
associate_multicast_group: str
```

- *Type:* str

Multicast group to associate. Only for update request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotwireless_fuota_task#associate_multicast_group IotwirelessFuotaTask#associate_multicast_group}

---

##### `associate_wireless_device`<sup>Optional</sup> <a name="associate_wireless_device" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.associateWirelessDevice"></a>

```python
associate_wireless_device: str
```

- *Type:* str

Wireless device to associate. Only for update request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotwireless_fuota_task#associate_wireless_device IotwirelessFuotaTask#associate_wireless_device}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.description"></a>

```python
description: str
```

- *Type:* str

FUOTA task description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotwireless_fuota_task#description IotwirelessFuotaTask#description}

---

##### `disassociate_multicast_group`<sup>Optional</sup> <a name="disassociate_multicast_group" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.disassociateMulticastGroup"></a>

```python
disassociate_multicast_group: str
```

- *Type:* str

Multicast group to disassociate. Only for update request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotwireless_fuota_task#disassociate_multicast_group IotwirelessFuotaTask#disassociate_multicast_group}

---

##### `disassociate_wireless_device`<sup>Optional</sup> <a name="disassociate_wireless_device" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.disassociateWirelessDevice"></a>

```python
disassociate_wireless_device: str
```

- *Type:* str

Wireless device to disassociate. Only for update request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotwireless_fuota_task#disassociate_wireless_device IotwirelessFuotaTask#disassociate_wireless_device}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of FUOTA task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotwireless_fuota_task#name IotwirelessFuotaTask#name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[IotwirelessFuotaTaskTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTags">IotwirelessFuotaTaskTags</a>]

A list of key-value pairs that contain metadata for the FUOTA task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotwireless_fuota_task#tags IotwirelessFuotaTask#tags}

---

### IotwirelessFuotaTaskLoRaWan <a name="IotwirelessFuotaTaskLoRaWan" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWan"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWan.Initializer"></a>

```python
from cdktn_provider_awscc import iotwireless_fuota_task

iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWan(
  rf_region: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWan.property.rfRegion">rf_region</a></code> | <code>str</code> | FUOTA task LoRaWAN RF region. |

---

##### `rf_region`<sup>Required</sup> <a name="rf_region" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWan.property.rfRegion"></a>

```python
rf_region: str
```

- *Type:* str

FUOTA task LoRaWAN RF region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotwireless_fuota_task#rf_region IotwirelessFuotaTask#rf_region}

---

### IotwirelessFuotaTaskTags <a name="IotwirelessFuotaTaskTags" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTags.Initializer"></a>

```python
from cdktn_provider_awscc import iotwireless_fuota_task

iotwirelessFuotaTask.IotwirelessFuotaTaskTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotwireless_fuota_task#key IotwirelessFuotaTask#key}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotwireless_fuota_task#value IotwirelessFuotaTask#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotwireless_fuota_task#key IotwirelessFuotaTask#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotwireless_fuota_task#value IotwirelessFuotaTask#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotwirelessFuotaTaskLoRaWanOutputReference <a name="IotwirelessFuotaTaskLoRaWanOutputReference" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotwireless_fuota_task

iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.property.startTime">start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.property.rfRegionInput">rf_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.property.rfRegion">rf_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWan">IotwirelessFuotaTaskLoRaWan</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

---

##### `rf_region_input`<sup>Optional</sup> <a name="rf_region_input" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.property.rfRegionInput"></a>

```python
rf_region_input: str
```

- *Type:* str

---

##### `rf_region`<sup>Required</sup> <a name="rf_region" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.property.rfRegion"></a>

```python
rf_region: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotwirelessFuotaTaskLoRaWan
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWan">IotwirelessFuotaTaskLoRaWan</a>

---


### IotwirelessFuotaTaskTagsList <a name="IotwirelessFuotaTaskTagsList" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import iotwireless_fuota_task

iotwirelessFuotaTask.IotwirelessFuotaTaskTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IotwirelessFuotaTaskTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTags">IotwirelessFuotaTaskTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[IotwirelessFuotaTaskTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTags">IotwirelessFuotaTaskTags</a>]

---


### IotwirelessFuotaTaskTagsOutputReference <a name="IotwirelessFuotaTaskTagsOutputReference" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotwireless_fuota_task

iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTags">IotwirelessFuotaTaskTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotwirelessFuotaTaskTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTags">IotwirelessFuotaTaskTags</a>

---



