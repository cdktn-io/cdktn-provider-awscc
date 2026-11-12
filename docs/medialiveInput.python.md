# `medialiveInput` Submodule <a name="`medialiveInput` Submodule" id="@cdktn/provider-awscc.medialiveInput"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MedialiveInput <a name="MedialiveInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input awscc_medialive_input}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.Initializer"></a>

```python
from cdktn_provider_awscc import medialive_input

medialiveInput.MedialiveInput(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  destinations: IResolvable | typing.List[MedialiveInputDestinations] = None,
  input_devices: IResolvable | typing.List[MedialiveInputInputDevices] = None,
  input_network_location: str = None,
  input_security_groups: typing.List[str] = None,
  media_connect_flows: IResolvable | typing.List[MedialiveInputMediaConnectFlows] = None,
  multicast_settings: MedialiveInputMulticastSettings = None,
  name: str = None,
  role_arn: str = None,
  router_settings: MedialiveInputRouterSettings = None,
  sdi_sources: typing.List[str] = None,
  smpte2110_receiver_group_settings: MedialiveInputSmpte2110ReceiverGroupSettings = None,
  sources: IResolvable | typing.List[MedialiveInputSources] = None,
  srt_settings: MedialiveInputSrtSettings = None,
  tags: typing.Mapping[str] = None,
  type: str = None,
  vpc: MedialiveInputVpc = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.Initializer.parameter.destinations">destinations</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinations">MedialiveInputDestinations</a>]</code> | A list of the destinations of the input (PUSH-type). |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.Initializer.parameter.inputDevices">input_devices</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevices">MedialiveInputInputDevices</a>]</code> | Settings for the input devices. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.Initializer.parameter.inputNetworkLocation">input_network_location</a></code> | <code>str</code> | The location of this input. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.Initializer.parameter.inputSecurityGroups">input_security_groups</a></code> | <code>typing.List[str]</code> | A list of security groups referenced by IDs to attach to the input. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.Initializer.parameter.mediaConnectFlows">media_connect_flows</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlows">MedialiveInputMediaConnectFlows</a>]</code> | A list of MediaConnect Flows for this input. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.Initializer.parameter.multicastSettings">multicast_settings</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettings">MedialiveInputMulticastSettings</a></code> | Multicast Input settings. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.Initializer.parameter.name">name</a></code> | <code>str</code> | The user-assigned name (This is a mutable value). |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.Initializer.parameter.roleArn">role_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the role this input assumes during and after creation. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.Initializer.parameter.routerSettings">router_settings</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettings">MedialiveInputRouterSettings</a></code> | Information about the MediaConnect Router association for this input. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.Initializer.parameter.sdiSources">sdi_sources</a></code> | <code>typing.List[str]</code> | SDI Sources for this Input. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.Initializer.parameter.smpte2110ReceiverGroupSettings">smpte2110_receiver_group_settings</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettings">MedialiveInputSmpte2110ReceiverGroupSettings</a></code> | Include this parameter if the input is a SMPTE 2110 input, to identify the stream sources for this input. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.Initializer.parameter.sources">sources</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSources">MedialiveInputSources</a>]</code> | A list of the sources of the input (PULL-type). |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.Initializer.parameter.srtSettings">srt_settings</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettings">MedialiveInputSrtSettings</a></code> | The settings associated with an SRT input. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | A collection of key-value pairs. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.Initializer.parameter.type">type</a></code> | <code>str</code> | The different types of inputs that AWS Elemental MediaLive supports. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.Initializer.parameter.vpc">vpc</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputVpc">MedialiveInputVpc</a></code> | Settings for a private VPC Input. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `destinations`<sup>Optional</sup> <a name="destinations" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.Initializer.parameter.destinations"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinations">MedialiveInputDestinations</a>]

A list of the destinations of the input (PUSH-type).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#destinations MedialiveInput#destinations}

---

##### `input_devices`<sup>Optional</sup> <a name="input_devices" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.Initializer.parameter.inputDevices"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevices">MedialiveInputInputDevices</a>]

Settings for the input devices.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#input_devices MedialiveInput#input_devices}

---

##### `input_network_location`<sup>Optional</sup> <a name="input_network_location" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.Initializer.parameter.inputNetworkLocation"></a>

- *Type:* str

The location of this input.

AWS, for an input existing in the AWS Cloud, On-Prem for
an input in a customer network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#input_network_location MedialiveInput#input_network_location}

---

##### `input_security_groups`<sup>Optional</sup> <a name="input_security_groups" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.Initializer.parameter.inputSecurityGroups"></a>

- *Type:* typing.List[str]

A list of security groups referenced by IDs to attach to the input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#input_security_groups MedialiveInput#input_security_groups}

---

##### `media_connect_flows`<sup>Optional</sup> <a name="media_connect_flows" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.Initializer.parameter.mediaConnectFlows"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlows">MedialiveInputMediaConnectFlows</a>]

A list of MediaConnect Flows for this input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#media_connect_flows MedialiveInput#media_connect_flows}

---

##### `multicast_settings`<sup>Optional</sup> <a name="multicast_settings" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.Initializer.parameter.multicastSettings"></a>

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettings">MedialiveInputMulticastSettings</a>

Multicast Input settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#multicast_settings MedialiveInput#multicast_settings}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.Initializer.parameter.name"></a>

- *Type:* str

The user-assigned name (This is a mutable value).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#name MedialiveInput#name}

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.Initializer.parameter.roleArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the role this input assumes during and after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#role_arn MedialiveInput#role_arn}

---

##### `router_settings`<sup>Optional</sup> <a name="router_settings" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.Initializer.parameter.routerSettings"></a>

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettings">MedialiveInputRouterSettings</a>

Information about the MediaConnect Router association for this input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#router_settings MedialiveInput#router_settings}

---

##### `sdi_sources`<sup>Optional</sup> <a name="sdi_sources" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.Initializer.parameter.sdiSources"></a>

- *Type:* typing.List[str]

SDI Sources for this Input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#sdi_sources MedialiveInput#sdi_sources}

---

##### `smpte2110_receiver_group_settings`<sup>Optional</sup> <a name="smpte2110_receiver_group_settings" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.Initializer.parameter.smpte2110ReceiverGroupSettings"></a>

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettings">MedialiveInputSmpte2110ReceiverGroupSettings</a>

Include this parameter if the input is a SMPTE 2110 input, to identify the stream sources for this input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#smpte_2110_receiver_group_settings MedialiveInput#smpte_2110_receiver_group_settings}

---

##### `sources`<sup>Optional</sup> <a name="sources" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.Initializer.parameter.sources"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSources">MedialiveInputSources</a>]

A list of the sources of the input (PULL-type).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#sources MedialiveInput#sources}

---

##### `srt_settings`<sup>Optional</sup> <a name="srt_settings" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.Initializer.parameter.srtSettings"></a>

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettings">MedialiveInputSrtSettings</a>

The settings associated with an SRT input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#srt_settings MedialiveInput#srt_settings}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

A collection of key-value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#tags MedialiveInput#tags}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.Initializer.parameter.type"></a>

- *Type:* str

The different types of inputs that AWS Elemental MediaLive supports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#type MedialiveInput#type}

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.Initializer.parameter.vpc"></a>

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputVpc">MedialiveInputVpc</a>

Settings for a private VPC Input.

When this property is specified, the input destination addresses will be created in a VPC rather than with public Internet addresses.
This property requires setting the roleArn property on Input creation.
Not compatible with the inputSecurityGroups property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#vpc MedialiveInput#vpc}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.putDestinations">put_destinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.putInputDevices">put_input_devices</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.putMediaConnectFlows">put_media_connect_flows</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.putMulticastSettings">put_multicast_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.putRouterSettings">put_router_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.putSmpte2110ReceiverGroupSettings">put_smpte2110_receiver_group_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.putSources">put_sources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.putSrtSettings">put_srt_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.putVpc">put_vpc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.resetDestinations">reset_destinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.resetInputDevices">reset_input_devices</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.resetInputNetworkLocation">reset_input_network_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.resetInputSecurityGroups">reset_input_security_groups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.resetMediaConnectFlows">reset_media_connect_flows</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.resetMulticastSettings">reset_multicast_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.resetRoleArn">reset_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.resetRouterSettings">reset_router_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.resetSdiSources">reset_sdi_sources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.resetSmpte2110ReceiverGroupSettings">reset_smpte2110_receiver_group_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.resetSources">reset_sources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.resetSrtSettings">reset_srt_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.resetType">reset_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.resetVpc">reset_vpc</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_destinations` <a name="put_destinations" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.putDestinations"></a>

```python
def put_destinations(
  value: IResolvable | typing.List[MedialiveInputDestinations]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.putDestinations.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinations">MedialiveInputDestinations</a>]

---

##### `put_input_devices` <a name="put_input_devices" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.putInputDevices"></a>

```python
def put_input_devices(
  value: IResolvable | typing.List[MedialiveInputInputDevices]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.putInputDevices.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevices">MedialiveInputInputDevices</a>]

---

##### `put_media_connect_flows` <a name="put_media_connect_flows" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.putMediaConnectFlows"></a>

```python
def put_media_connect_flows(
  value: IResolvable | typing.List[MedialiveInputMediaConnectFlows]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.putMediaConnectFlows.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlows">MedialiveInputMediaConnectFlows</a>]

---

##### `put_multicast_settings` <a name="put_multicast_settings" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.putMulticastSettings"></a>

```python
def put_multicast_settings(
  sources: IResolvable | typing.List[MedialiveInputMulticastSettingsSources] = None
) -> None
```

###### `sources`<sup>Optional</sup> <a name="sources" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.putMulticastSettings.parameter.sources"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSources">MedialiveInputMulticastSettingsSources</a>]

Placeholder documentation for __listOfMulticastSource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#sources MedialiveInput#sources}

---

##### `put_router_settings` <a name="put_router_settings" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.putRouterSettings"></a>

```python
def put_router_settings(
  destinations: IResolvable | typing.List[MedialiveInputRouterSettingsDestinations] = None,
  encryption_type: str = None,
  secret_arn: str = None
) -> None
```

###### `destinations`<sup>Optional</sup> <a name="destinations" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.putRouterSettings.parameter.destinations"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinations">MedialiveInputRouterSettingsDestinations</a>]

MediaConnect Router destinations associated with this input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#destinations MedialiveInput#destinations}

---

###### `encryption_type`<sup>Optional</sup> <a name="encryption_type" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.putRouterSettings.parameter.encryptionType"></a>

- *Type:* str

Encryption configuration for the MediaConnect Router association. AUTOMATIC uses a service-managed secret; SECRETS_MANAGER requires SecretArn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#encryption_type MedialiveInput#encryption_type}

---

###### `secret_arn`<sup>Optional</sup> <a name="secret_arn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.putRouterSettings.parameter.secretArn"></a>

- *Type:* str

The ARN of the Secrets Manager secret used to encrypt this input. Required when EncryptionType is SECRETS_MANAGER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#secret_arn MedialiveInput#secret_arn}

---

##### `put_smpte2110_receiver_group_settings` <a name="put_smpte2110_receiver_group_settings" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.putSmpte2110ReceiverGroupSettings"></a>

```python
def put_smpte2110_receiver_group_settings(
  smpte2110_receiver_groups: IResolvable | typing.List[MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroups] = None
) -> None
```

###### `smpte2110_receiver_groups`<sup>Optional</sup> <a name="smpte2110_receiver_groups" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.putSmpte2110ReceiverGroupSettings.parameter.smpte2110ReceiverGroups"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroups">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroups</a>]

Placeholder documentation for __listOfSmpte2110ReceiverGroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#smpte_2110_receiver_groups MedialiveInput#smpte_2110_receiver_groups}

---

##### `put_sources` <a name="put_sources" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.putSources"></a>

```python
def put_sources(
  value: IResolvable | typing.List[MedialiveInputSources]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.putSources.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSources">MedialiveInputSources</a>]

---

##### `put_srt_settings` <a name="put_srt_settings" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.putSrtSettings"></a>

```python
def put_srt_settings(
  srt_caller_sources: IResolvable | typing.List[MedialiveInputSrtSettingsSrtCallerSources] = None,
  srt_listener_settings: MedialiveInputSrtSettingsSrtListenerSettings = None
) -> None
```

###### `srt_caller_sources`<sup>Optional</sup> <a name="srt_caller_sources" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.putSrtSettings.parameter.srtCallerSources"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSources">MedialiveInputSrtSettingsSrtCallerSources</a>]

Placeholder documentation for __listOfSrtCallerSource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#srt_caller_sources MedialiveInput#srt_caller_sources}

---

###### `srt_listener_settings`<sup>Optional</sup> <a name="srt_listener_settings" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.putSrtSettings.parameter.srtListenerSettings"></a>

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettings">MedialiveInputSrtSettingsSrtListenerSettings</a>

Settings for an SRT listener input. Configured only when the input uses the SRT_LISTENER input type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#srt_listener_settings MedialiveInput#srt_listener_settings}

---

##### `put_vpc` <a name="put_vpc" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.putVpc"></a>

```python
def put_vpc(
  security_group_ids: typing.List[str] = None,
  subnet_ids: typing.List[str] = None
) -> None
```

###### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.putVpc.parameter.securityGroupIds"></a>

- *Type:* typing.List[str]

A list of up to 5 EC2 VPC security group IDs to attach to the Input VPC network interfaces.

Requires subnetIds. If none are specified then the VPC default security group will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#security_group_ids MedialiveInput#security_group_ids}

---

###### `subnet_ids`<sup>Optional</sup> <a name="subnet_ids" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.putVpc.parameter.subnetIds"></a>

- *Type:* typing.List[str]

A list of 2 VPC subnet IDs from the same VPC.

Subnet IDs must be mapped to two unique availability zones (AZ).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#subnet_ids MedialiveInput#subnet_ids}

---

##### `reset_destinations` <a name="reset_destinations" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.resetDestinations"></a>

```python
def reset_destinations() -> None
```

##### `reset_input_devices` <a name="reset_input_devices" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.resetInputDevices"></a>

```python
def reset_input_devices() -> None
```

##### `reset_input_network_location` <a name="reset_input_network_location" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.resetInputNetworkLocation"></a>

```python
def reset_input_network_location() -> None
```

##### `reset_input_security_groups` <a name="reset_input_security_groups" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.resetInputSecurityGroups"></a>

```python
def reset_input_security_groups() -> None
```

##### `reset_media_connect_flows` <a name="reset_media_connect_flows" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.resetMediaConnectFlows"></a>

```python
def reset_media_connect_flows() -> None
```

##### `reset_multicast_settings` <a name="reset_multicast_settings" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.resetMulticastSettings"></a>

```python
def reset_multicast_settings() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_role_arn` <a name="reset_role_arn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.resetRoleArn"></a>

```python
def reset_role_arn() -> None
```

##### `reset_router_settings` <a name="reset_router_settings" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.resetRouterSettings"></a>

```python
def reset_router_settings() -> None
```

##### `reset_sdi_sources` <a name="reset_sdi_sources" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.resetSdiSources"></a>

```python
def reset_sdi_sources() -> None
```

##### `reset_smpte2110_receiver_group_settings` <a name="reset_smpte2110_receiver_group_settings" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.resetSmpte2110ReceiverGroupSettings"></a>

```python
def reset_smpte2110_receiver_group_settings() -> None
```

##### `reset_sources` <a name="reset_sources" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.resetSources"></a>

```python
def reset_sources() -> None
```

##### `reset_srt_settings` <a name="reset_srt_settings" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.resetSrtSettings"></a>

```python
def reset_srt_settings() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.resetType"></a>

```python
def reset_type() -> None
```

##### `reset_vpc` <a name="reset_vpc" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.resetVpc"></a>

```python
def reset_vpc() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a MedialiveInput resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.isConstruct"></a>

```python
from cdktn_provider_awscc import medialive_input

medialiveInput.MedialiveInput.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.isTerraformElement"></a>

```python
from cdktn_provider_awscc import medialive_input

medialiveInput.MedialiveInput.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.isTerraformResource"></a>

```python
from cdktn_provider_awscc import medialive_input

medialiveInput.MedialiveInput.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import medialive_input

medialiveInput.MedialiveInput.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a MedialiveInput resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the MedialiveInput to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing MedialiveInput that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the MedialiveInput to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.attachedChannels">attached_channels</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.destinations">destinations</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsList">MedialiveInputDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.destinationUrls">destination_urls</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.inputClass">input_class</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.inputDevices">input_devices</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesList">MedialiveInputInputDevicesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.inputId">input_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.inputPartnerIds">input_partner_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.inputSourceType">input_source_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.mediaConnectFlows">media_connect_flows</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsList">MedialiveInputMediaConnectFlowsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.multicastSettings">multicast_settings</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference">MedialiveInputMulticastSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.routerSettings">router_settings</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference">MedialiveInputRouterSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.securityGroups">security_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.smpte2110ReceiverGroupSettings">smpte2110_receiver_group_settings</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference">MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.sources">sources</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesList">MedialiveInputSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.sourceUrls">source_urls</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.srtSettings">srt_settings</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference">MedialiveInputSrtSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.vpc">vpc</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference">MedialiveInputVpcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.destinationsInput">destinations_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinations">MedialiveInputDestinations</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.inputDevicesInput">input_devices_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevices">MedialiveInputInputDevices</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.inputNetworkLocationInput">input_network_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.inputSecurityGroupsInput">input_security_groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.mediaConnectFlowsInput">media_connect_flows_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlows">MedialiveInputMediaConnectFlows</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.multicastSettingsInput">multicast_settings_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettings">MedialiveInputMulticastSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.routerSettingsInput">router_settings_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettings">MedialiveInputRouterSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.sdiSourcesInput">sdi_sources_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.smpte2110ReceiverGroupSettingsInput">smpte2110_receiver_group_settings_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettings">MedialiveInputSmpte2110ReceiverGroupSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.sourcesInput">sources_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSources">MedialiveInputSources</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.srtSettingsInput">srt_settings_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettings">MedialiveInputSrtSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.vpcInput">vpc_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputVpc">MedialiveInputVpc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.inputNetworkLocation">input_network_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.inputSecurityGroups">input_security_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.sdiSources">sdi_sources</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `attached_channels`<sup>Required</sup> <a name="attached_channels" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.attachedChannels"></a>

```python
attached_channels: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.destinations"></a>

```python
destinations: MedialiveInputDestinationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsList">MedialiveInputDestinationsList</a>

---

##### `destination_urls`<sup>Required</sup> <a name="destination_urls" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.destinationUrls"></a>

```python
destination_urls: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `input_class`<sup>Required</sup> <a name="input_class" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.inputClass"></a>

```python
input_class: str
```

- *Type:* str

---

##### `input_devices`<sup>Required</sup> <a name="input_devices" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.inputDevices"></a>

```python
input_devices: MedialiveInputInputDevicesList
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesList">MedialiveInputInputDevicesList</a>

---

##### `input_id`<sup>Required</sup> <a name="input_id" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.inputId"></a>

```python
input_id: str
```

- *Type:* str

---

##### `input_partner_ids`<sup>Required</sup> <a name="input_partner_ids" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.inputPartnerIds"></a>

```python
input_partner_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `input_source_type`<sup>Required</sup> <a name="input_source_type" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.inputSourceType"></a>

```python
input_source_type: str
```

- *Type:* str

---

##### `media_connect_flows`<sup>Required</sup> <a name="media_connect_flows" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.mediaConnectFlows"></a>

```python
media_connect_flows: MedialiveInputMediaConnectFlowsList
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsList">MedialiveInputMediaConnectFlowsList</a>

---

##### `multicast_settings`<sup>Required</sup> <a name="multicast_settings" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.multicastSettings"></a>

```python
multicast_settings: MedialiveInputMulticastSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference">MedialiveInputMulticastSettingsOutputReference</a>

---

##### `router_settings`<sup>Required</sup> <a name="router_settings" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.routerSettings"></a>

```python
router_settings: MedialiveInputRouterSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference">MedialiveInputRouterSettingsOutputReference</a>

---

##### `security_groups`<sup>Required</sup> <a name="security_groups" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.securityGroups"></a>

```python
security_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `smpte2110_receiver_group_settings`<sup>Required</sup> <a name="smpte2110_receiver_group_settings" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.smpte2110ReceiverGroupSettings"></a>

```python
smpte2110_receiver_group_settings: MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference">MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference</a>

---

##### `sources`<sup>Required</sup> <a name="sources" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.sources"></a>

```python
sources: MedialiveInputSourcesList
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesList">MedialiveInputSourcesList</a>

---

##### `source_urls`<sup>Required</sup> <a name="source_urls" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.sourceUrls"></a>

```python
source_urls: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `srt_settings`<sup>Required</sup> <a name="srt_settings" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.srtSettings"></a>

```python
srt_settings: MedialiveInputSrtSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference">MedialiveInputSrtSettingsOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.vpc"></a>

```python
vpc: MedialiveInputVpcOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference">MedialiveInputVpcOutputReference</a>

---

##### `destinations_input`<sup>Optional</sup> <a name="destinations_input" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.destinationsInput"></a>

```python
destinations_input: IResolvable | typing.List[MedialiveInputDestinations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinations">MedialiveInputDestinations</a>]

---

##### `input_devices_input`<sup>Optional</sup> <a name="input_devices_input" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.inputDevicesInput"></a>

```python
input_devices_input: IResolvable | typing.List[MedialiveInputInputDevices]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevices">MedialiveInputInputDevices</a>]

---

##### `input_network_location_input`<sup>Optional</sup> <a name="input_network_location_input" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.inputNetworkLocationInput"></a>

```python
input_network_location_input: str
```

- *Type:* str

---

##### `input_security_groups_input`<sup>Optional</sup> <a name="input_security_groups_input" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.inputSecurityGroupsInput"></a>

```python
input_security_groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `media_connect_flows_input`<sup>Optional</sup> <a name="media_connect_flows_input" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.mediaConnectFlowsInput"></a>

```python
media_connect_flows_input: IResolvable | typing.List[MedialiveInputMediaConnectFlows]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlows">MedialiveInputMediaConnectFlows</a>]

---

##### `multicast_settings_input`<sup>Optional</sup> <a name="multicast_settings_input" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.multicastSettingsInput"></a>

```python
multicast_settings_input: IResolvable | MedialiveInputMulticastSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettings">MedialiveInputMulticastSettings</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `router_settings_input`<sup>Optional</sup> <a name="router_settings_input" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.routerSettingsInput"></a>

```python
router_settings_input: IResolvable | MedialiveInputRouterSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettings">MedialiveInputRouterSettings</a>

---

##### `sdi_sources_input`<sup>Optional</sup> <a name="sdi_sources_input" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.sdiSourcesInput"></a>

```python
sdi_sources_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `smpte2110_receiver_group_settings_input`<sup>Optional</sup> <a name="smpte2110_receiver_group_settings_input" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.smpte2110ReceiverGroupSettingsInput"></a>

```python
smpte2110_receiver_group_settings_input: IResolvable | MedialiveInputSmpte2110ReceiverGroupSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettings">MedialiveInputSmpte2110ReceiverGroupSettings</a>

---

##### `sources_input`<sup>Optional</sup> <a name="sources_input" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.sourcesInput"></a>

```python
sources_input: IResolvable | typing.List[MedialiveInputSources]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSources">MedialiveInputSources</a>]

---

##### `srt_settings_input`<sup>Optional</sup> <a name="srt_settings_input" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.srtSettingsInput"></a>

```python
srt_settings_input: IResolvable | MedialiveInputSrtSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettings">MedialiveInputSrtSettings</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `vpc_input`<sup>Optional</sup> <a name="vpc_input" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.vpcInput"></a>

```python
vpc_input: IResolvable | MedialiveInputVpc
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputVpc">MedialiveInputVpc</a>

---

##### `input_network_location`<sup>Required</sup> <a name="input_network_location" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.inputNetworkLocation"></a>

```python
input_network_location: str
```

- *Type:* str

---

##### `input_security_groups`<sup>Required</sup> <a name="input_security_groups" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.inputSecurityGroups"></a>

```python
input_security_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `sdi_sources`<sup>Required</sup> <a name="sdi_sources" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.sdiSources"></a>

```python
sdi_sources: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MedialiveInputConfig <a name="MedialiveInputConfig" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.Initializer"></a>

```python
from cdktn_provider_awscc import medialive_input

medialiveInput.MedialiveInputConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  destinations: IResolvable | typing.List[MedialiveInputDestinations] = None,
  input_devices: IResolvable | typing.List[MedialiveInputInputDevices] = None,
  input_network_location: str = None,
  input_security_groups: typing.List[str] = None,
  media_connect_flows: IResolvable | typing.List[MedialiveInputMediaConnectFlows] = None,
  multicast_settings: MedialiveInputMulticastSettings = None,
  name: str = None,
  role_arn: str = None,
  router_settings: MedialiveInputRouterSettings = None,
  sdi_sources: typing.List[str] = None,
  smpte2110_receiver_group_settings: MedialiveInputSmpte2110ReceiverGroupSettings = None,
  sources: IResolvable | typing.List[MedialiveInputSources] = None,
  srt_settings: MedialiveInputSrtSettings = None,
  tags: typing.Mapping[str] = None,
  type: str = None,
  vpc: MedialiveInputVpc = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.destinations">destinations</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinations">MedialiveInputDestinations</a>]</code> | A list of the destinations of the input (PUSH-type). |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.inputDevices">input_devices</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevices">MedialiveInputInputDevices</a>]</code> | Settings for the input devices. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.inputNetworkLocation">input_network_location</a></code> | <code>str</code> | The location of this input. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.inputSecurityGroups">input_security_groups</a></code> | <code>typing.List[str]</code> | A list of security groups referenced by IDs to attach to the input. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.mediaConnectFlows">media_connect_flows</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlows">MedialiveInputMediaConnectFlows</a>]</code> | A list of MediaConnect Flows for this input. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.multicastSettings">multicast_settings</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettings">MedialiveInputMulticastSettings</a></code> | Multicast Input settings. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.name">name</a></code> | <code>str</code> | The user-assigned name (This is a mutable value). |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.roleArn">role_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the role this input assumes during and after creation. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.routerSettings">router_settings</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettings">MedialiveInputRouterSettings</a></code> | Information about the MediaConnect Router association for this input. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.sdiSources">sdi_sources</a></code> | <code>typing.List[str]</code> | SDI Sources for this Input. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.smpte2110ReceiverGroupSettings">smpte2110_receiver_group_settings</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettings">MedialiveInputSmpte2110ReceiverGroupSettings</a></code> | Include this parameter if the input is a SMPTE 2110 input, to identify the stream sources for this input. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.sources">sources</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSources">MedialiveInputSources</a>]</code> | A list of the sources of the input (PULL-type). |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.srtSettings">srt_settings</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettings">MedialiveInputSrtSettings</a></code> | The settings associated with an SRT input. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | A collection of key-value pairs. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.type">type</a></code> | <code>str</code> | The different types of inputs that AWS Elemental MediaLive supports. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.vpc">vpc</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputVpc">MedialiveInputVpc</a></code> | Settings for a private VPC Input. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `destinations`<sup>Optional</sup> <a name="destinations" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.destinations"></a>

```python
destinations: IResolvable | typing.List[MedialiveInputDestinations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinations">MedialiveInputDestinations</a>]

A list of the destinations of the input (PUSH-type).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#destinations MedialiveInput#destinations}

---

##### `input_devices`<sup>Optional</sup> <a name="input_devices" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.inputDevices"></a>

```python
input_devices: IResolvable | typing.List[MedialiveInputInputDevices]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevices">MedialiveInputInputDevices</a>]

Settings for the input devices.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#input_devices MedialiveInput#input_devices}

---

##### `input_network_location`<sup>Optional</sup> <a name="input_network_location" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.inputNetworkLocation"></a>

```python
input_network_location: str
```

- *Type:* str

The location of this input.

AWS, for an input existing in the AWS Cloud, On-Prem for
an input in a customer network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#input_network_location MedialiveInput#input_network_location}

---

##### `input_security_groups`<sup>Optional</sup> <a name="input_security_groups" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.inputSecurityGroups"></a>

```python
input_security_groups: typing.List[str]
```

- *Type:* typing.List[str]

A list of security groups referenced by IDs to attach to the input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#input_security_groups MedialiveInput#input_security_groups}

---

##### `media_connect_flows`<sup>Optional</sup> <a name="media_connect_flows" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.mediaConnectFlows"></a>

```python
media_connect_flows: IResolvable | typing.List[MedialiveInputMediaConnectFlows]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlows">MedialiveInputMediaConnectFlows</a>]

A list of MediaConnect Flows for this input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#media_connect_flows MedialiveInput#media_connect_flows}

---

##### `multicast_settings`<sup>Optional</sup> <a name="multicast_settings" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.multicastSettings"></a>

```python
multicast_settings: MedialiveInputMulticastSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettings">MedialiveInputMulticastSettings</a>

Multicast Input settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#multicast_settings MedialiveInput#multicast_settings}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The user-assigned name (This is a mutable value).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#name MedialiveInput#name}

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the role this input assumes during and after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#role_arn MedialiveInput#role_arn}

---

##### `router_settings`<sup>Optional</sup> <a name="router_settings" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.routerSettings"></a>

```python
router_settings: MedialiveInputRouterSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettings">MedialiveInputRouterSettings</a>

Information about the MediaConnect Router association for this input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#router_settings MedialiveInput#router_settings}

---

##### `sdi_sources`<sup>Optional</sup> <a name="sdi_sources" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.sdiSources"></a>

```python
sdi_sources: typing.List[str]
```

- *Type:* typing.List[str]

SDI Sources for this Input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#sdi_sources MedialiveInput#sdi_sources}

---

##### `smpte2110_receiver_group_settings`<sup>Optional</sup> <a name="smpte2110_receiver_group_settings" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.smpte2110ReceiverGroupSettings"></a>

```python
smpte2110_receiver_group_settings: MedialiveInputSmpte2110ReceiverGroupSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettings">MedialiveInputSmpte2110ReceiverGroupSettings</a>

Include this parameter if the input is a SMPTE 2110 input, to identify the stream sources for this input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#smpte_2110_receiver_group_settings MedialiveInput#smpte_2110_receiver_group_settings}

---

##### `sources`<sup>Optional</sup> <a name="sources" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.sources"></a>

```python
sources: IResolvable | typing.List[MedialiveInputSources]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSources">MedialiveInputSources</a>]

A list of the sources of the input (PULL-type).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#sources MedialiveInput#sources}

---

##### `srt_settings`<sup>Optional</sup> <a name="srt_settings" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.srtSettings"></a>

```python
srt_settings: MedialiveInputSrtSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettings">MedialiveInputSrtSettings</a>

The settings associated with an SRT input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#srt_settings MedialiveInput#srt_settings}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A collection of key-value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#tags MedialiveInput#tags}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.type"></a>

```python
type: str
```

- *Type:* str

The different types of inputs that AWS Elemental MediaLive supports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#type MedialiveInput#type}

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.vpc"></a>

```python
vpc: MedialiveInputVpc
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputVpc">MedialiveInputVpc</a>

Settings for a private VPC Input.

When this property is specified, the input destination addresses will be created in a VPC rather than with public Internet addresses.
This property requires setting the roleArn property on Input creation.
Not compatible with the inputSecurityGroups property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#vpc MedialiveInput#vpc}

---

### MedialiveInputDestinations <a name="MedialiveInputDestinations" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinations.Initializer"></a>

```python
from cdktn_provider_awscc import medialive_input

medialiveInput.MedialiveInputDestinations(
  ip: str = None,
  network: str = None,
  network_routes: IResolvable | typing.List[MedialiveInputDestinationsNetworkRoutes] = None,
  port: str = None,
  static_ip_address: str = None,
  stream_name: str = None,
  url: str = None,
  vpc: MedialiveInputDestinationsVpc = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinations.property.ip">ip</a></code> | <code>str</code> | The system-generated static IP address of endpoint. It remains fixed for the lifetime of the input. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinations.property.network">network</a></code> | <code>str</code> | The ID of the attached network. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinations.property.networkRoutes">network_routes</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutes">MedialiveInputDestinationsNetworkRoutes</a>]</code> | If the push input has an input location of ON-PREM it's a requirement to specify what the route of the input is going to be on the customer local network. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinations.property.port">port</a></code> | <code>str</code> | The port number for the input. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinations.property.staticIpAddress">static_ip_address</a></code> | <code>str</code> | The static IP address for the input destination. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinations.property.streamName">stream_name</a></code> | <code>str</code> | The stream name for the input destination. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinations.property.url">url</a></code> | <code>str</code> | This represents the endpoint that the customer stream will be pushed to. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinations.property.vpc">vpc</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpc">MedialiveInputDestinationsVpc</a></code> | The properties for a VPC type input destination. |

---

##### `ip`<sup>Optional</sup> <a name="ip" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinations.property.ip"></a>

```python
ip: str
```

- *Type:* str

The system-generated static IP address of endpoint. It remains fixed for the lifetime of the input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#ip MedialiveInput#ip}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinations.property.network"></a>

```python
network: str
```

- *Type:* str

The ID of the attached network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#network MedialiveInput#network}

---

##### `network_routes`<sup>Optional</sup> <a name="network_routes" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinations.property.networkRoutes"></a>

```python
network_routes: IResolvable | typing.List[MedialiveInputDestinationsNetworkRoutes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutes">MedialiveInputDestinationsNetworkRoutes</a>]

If the push input has an input location of ON-PREM it's a requirement to specify what the route of the input is going to be on the customer local network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#network_routes MedialiveInput#network_routes}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinations.property.port"></a>

```python
port: str
```

- *Type:* str

The port number for the input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#port MedialiveInput#port}

---

##### `static_ip_address`<sup>Optional</sup> <a name="static_ip_address" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinations.property.staticIpAddress"></a>

```python
static_ip_address: str
```

- *Type:* str

The static IP address for the input destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#static_ip_address MedialiveInput#static_ip_address}

---

##### `stream_name`<sup>Optional</sup> <a name="stream_name" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinations.property.streamName"></a>

```python
stream_name: str
```

- *Type:* str

The stream name for the input destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#stream_name MedialiveInput#stream_name}

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinations.property.url"></a>

```python
url: str
```

- *Type:* str

This represents the endpoint that the customer stream will be pushed to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#url MedialiveInput#url}

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinations.property.vpc"></a>

```python
vpc: MedialiveInputDestinationsVpc
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpc">MedialiveInputDestinationsVpc</a>

The properties for a VPC type input destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#vpc MedialiveInput#vpc}

---

### MedialiveInputDestinationsNetworkRoutes <a name="MedialiveInputDestinationsNetworkRoutes" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutes.Initializer"></a>

```python
from cdktn_provider_awscc import medialive_input

medialiveInput.MedialiveInputDestinationsNetworkRoutes(
  cidr: str = None,
  gateway: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutes.property.cidr">cidr</a></code> | <code>str</code> | The CIDR of the route. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutes.property.gateway">gateway</a></code> | <code>str</code> | An optional gateway for the route. |

---

##### `cidr`<sup>Optional</sup> <a name="cidr" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutes.property.cidr"></a>

```python
cidr: str
```

- *Type:* str

The CIDR of the route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#cidr MedialiveInput#cidr}

---

##### `gateway`<sup>Optional</sup> <a name="gateway" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutes.property.gateway"></a>

```python
gateway: str
```

- *Type:* str

An optional gateway for the route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#gateway MedialiveInput#gateway}

---

### MedialiveInputDestinationsVpc <a name="MedialiveInputDestinationsVpc" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpc"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpc.Initializer"></a>

```python
from cdktn_provider_awscc import medialive_input

medialiveInput.MedialiveInputDestinationsVpc(
  availability_zone: str = None,
  network_interface_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpc.property.availabilityZone">availability_zone</a></code> | <code>str</code> | The availability zone of the Input destination. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpc.property.networkInterfaceId">network_interface_id</a></code> | <code>str</code> | The network interface ID of the Input destination in the VPC. |

---

##### `availability_zone`<sup>Optional</sup> <a name="availability_zone" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpc.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

The availability zone of the Input destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#availability_zone MedialiveInput#availability_zone}

---

##### `network_interface_id`<sup>Optional</sup> <a name="network_interface_id" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpc.property.networkInterfaceId"></a>

```python
network_interface_id: str
```

- *Type:* str

The network interface ID of the Input destination in the VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#network_interface_id MedialiveInput#network_interface_id}

---

### MedialiveInputInputDevices <a name="MedialiveInputInputDevices" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevices"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevices.Initializer"></a>

```python
from cdktn_provider_awscc import medialive_input

medialiveInput.MedialiveInputInputDevices(
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevices.property.id">id</a></code> | <code>str</code> | The unique ID for the device. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevices.property.id"></a>

```python
id: str
```

- *Type:* str

The unique ID for the device.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#id MedialiveInput#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### MedialiveInputMediaConnectFlows <a name="MedialiveInputMediaConnectFlows" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlows"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlows.Initializer"></a>

```python
from cdktn_provider_awscc import medialive_input

medialiveInput.MedialiveInputMediaConnectFlows(
  flow_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlows.property.flowArn">flow_arn</a></code> | <code>str</code> | The unique ARN of the MediaConnect Flow being used as a source. |

---

##### `flow_arn`<sup>Optional</sup> <a name="flow_arn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlows.property.flowArn"></a>

```python
flow_arn: str
```

- *Type:* str

The unique ARN of the MediaConnect Flow being used as a source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#flow_arn MedialiveInput#flow_arn}

---

### MedialiveInputMulticastSettings <a name="MedialiveInputMulticastSettings" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettings.Initializer"></a>

```python
from cdktn_provider_awscc import medialive_input

medialiveInput.MedialiveInputMulticastSettings(
  sources: IResolvable | typing.List[MedialiveInputMulticastSettingsSources] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettings.property.sources">sources</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSources">MedialiveInputMulticastSettingsSources</a>]</code> | Placeholder documentation for __listOfMulticastSource. |

---

##### `sources`<sup>Optional</sup> <a name="sources" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettings.property.sources"></a>

```python
sources: IResolvable | typing.List[MedialiveInputMulticastSettingsSources]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSources">MedialiveInputMulticastSettingsSources</a>]

Placeholder documentation for __listOfMulticastSource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#sources MedialiveInput#sources}

---

### MedialiveInputMulticastSettingsSources <a name="MedialiveInputMulticastSettingsSources" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSources.Initializer"></a>

```python
from cdktn_provider_awscc import medialive_input

medialiveInput.MedialiveInputMulticastSettingsSources(
  source_ip: str = None,
  url: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSources.property.sourceIp">source_ip</a></code> | <code>str</code> | This represents the ip address of the device sending the multicast stream. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSources.property.url">url</a></code> | <code>str</code> | This represents the customer's source URL where multicast stream is pulled from. |

---

##### `source_ip`<sup>Optional</sup> <a name="source_ip" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSources.property.sourceIp"></a>

```python
source_ip: str
```

- *Type:* str

This represents the ip address of the device sending the multicast stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#source_ip MedialiveInput#source_ip}

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSources.property.url"></a>

```python
url: str
```

- *Type:* str

This represents the customer's source URL where multicast stream is pulled from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#url MedialiveInput#url}

---

### MedialiveInputRouterSettings <a name="MedialiveInputRouterSettings" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettings.Initializer"></a>

```python
from cdktn_provider_awscc import medialive_input

medialiveInput.MedialiveInputRouterSettings(
  destinations: IResolvable | typing.List[MedialiveInputRouterSettingsDestinations] = None,
  encryption_type: str = None,
  secret_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettings.property.destinations">destinations</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinations">MedialiveInputRouterSettingsDestinations</a>]</code> | MediaConnect Router destinations associated with this input. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettings.property.encryptionType">encryption_type</a></code> | <code>str</code> | Encryption configuration for the MediaConnect Router association. AUTOMATIC uses a service-managed secret; SECRETS_MANAGER requires SecretArn. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettings.property.secretArn">secret_arn</a></code> | <code>str</code> | The ARN of the Secrets Manager secret used to encrypt this input. Required when EncryptionType is SECRETS_MANAGER. |

---

##### `destinations`<sup>Optional</sup> <a name="destinations" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettings.property.destinations"></a>

```python
destinations: IResolvable | typing.List[MedialiveInputRouterSettingsDestinations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinations">MedialiveInputRouterSettingsDestinations</a>]

MediaConnect Router destinations associated with this input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#destinations MedialiveInput#destinations}

---

##### `encryption_type`<sup>Optional</sup> <a name="encryption_type" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettings.property.encryptionType"></a>

```python
encryption_type: str
```

- *Type:* str

Encryption configuration for the MediaConnect Router association. AUTOMATIC uses a service-managed secret; SECRETS_MANAGER requires SecretArn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#encryption_type MedialiveInput#encryption_type}

---

##### `secret_arn`<sup>Optional</sup> <a name="secret_arn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettings.property.secretArn"></a>

```python
secret_arn: str
```

- *Type:* str

The ARN of the Secrets Manager secret used to encrypt this input. Required when EncryptionType is SECRETS_MANAGER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#secret_arn MedialiveInput#secret_arn}

---

### MedialiveInputRouterSettingsDestinations <a name="MedialiveInputRouterSettingsDestinations" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinations.Initializer"></a>

```python
from cdktn_provider_awscc import medialive_input

medialiveInput.MedialiveInputRouterSettingsDestinations(
  availability_zone_name: str = None,
  router_output_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinations.property.availabilityZoneName">availability_zone_name</a></code> | <code>str</code> | The Availability Zone (AZ) name this destination is created in. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinations.property.routerOutputArn">router_output_arn</a></code> | <code>str</code> | The ARN of the MediaConnect Router output currently connected to this input. |

---

##### `availability_zone_name`<sup>Optional</sup> <a name="availability_zone_name" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinations.property.availabilityZoneName"></a>

```python
availability_zone_name: str
```

- *Type:* str

The Availability Zone (AZ) name this destination is created in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#availability_zone_name MedialiveInput#availability_zone_name}

---

##### `router_output_arn`<sup>Optional</sup> <a name="router_output_arn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinations.property.routerOutputArn"></a>

```python
router_output_arn: str
```

- *Type:* str

The ARN of the MediaConnect Router output currently connected to this input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#router_output_arn MedialiveInput#router_output_arn}

---

### MedialiveInputSmpte2110ReceiverGroupSettings <a name="MedialiveInputSmpte2110ReceiverGroupSettings" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettings.Initializer"></a>

```python
from cdktn_provider_awscc import medialive_input

medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettings(
  smpte2110_receiver_groups: IResolvable | typing.List[MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroups] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettings.property.smpte2110ReceiverGroups">smpte2110_receiver_groups</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroups">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroups</a>]</code> | Placeholder documentation for __listOfSmpte2110ReceiverGroup. |

---

##### `smpte2110_receiver_groups`<sup>Optional</sup> <a name="smpte2110_receiver_groups" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettings.property.smpte2110ReceiverGroups"></a>

```python
smpte2110_receiver_groups: IResolvable | typing.List[MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroups]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroups">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroups</a>]

Placeholder documentation for __listOfSmpte2110ReceiverGroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#smpte_2110_receiver_groups MedialiveInput#smpte_2110_receiver_groups}

---

### MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroups <a name="MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroups" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroups"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroups.Initializer"></a>

```python
from cdktn_provider_awscc import medialive_input

medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroups(
  sdp_settings: MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettings = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroups.property.sdpSettings">sdp_settings</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettings">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettings</a></code> | The single Smpte2110ReceiverGroupSdpSettings that identify the video, audio, and ancillary streams for this receiver group. |

---

##### `sdp_settings`<sup>Optional</sup> <a name="sdp_settings" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroups.property.sdpSettings"></a>

```python
sdp_settings: MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettings">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettings</a>

The single Smpte2110ReceiverGroupSdpSettings that identify the video, audio, and ancillary streams for this receiver group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#sdp_settings MedialiveInput#sdp_settings}

---

### MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettings <a name="MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettings" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettings.Initializer"></a>

```python
from cdktn_provider_awscc import medialive_input

medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettings(
  ancillary_sdps: IResolvable | typing.List[MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps] = None,
  audio_sdps: IResolvable | typing.List[MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps] = None,
  video_sdp: MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdp = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettings.property.ancillarySdps">ancillary_sdps</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps</a>]</code> | A list of InputSdpLocations. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettings.property.audioSdps">audio_sdps</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps</a>]</code> | A list of InputSdpLocations. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettings.property.videoSdp">video_sdp</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdp">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdp</a></code> | The InputSdpLocation that specifies the SDP file and index for the single video SMPTE 2110 stream for this 2110 input. |

---

##### `ancillary_sdps`<sup>Optional</sup> <a name="ancillary_sdps" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettings.property.ancillarySdps"></a>

```python
ancillary_sdps: IResolvable | typing.List[MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps</a>]

A list of InputSdpLocations.

Each item in the list specifies the SDP file and index for one ancillary SMPTE 2110 stream.
Each stream encapsulates one captions stream (out of any number you can include) or the single SCTE 35 stream that you can include.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#ancillary_sdps MedialiveInput#ancillary_sdps}

---

##### `audio_sdps`<sup>Optional</sup> <a name="audio_sdps" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettings.property.audioSdps"></a>

```python
audio_sdps: IResolvable | typing.List[MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps</a>]

A list of InputSdpLocations.

Each item in the list specifies the SDP file and index for one audio SMPTE 2110 stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#audio_sdps MedialiveInput#audio_sdps}

---

##### `video_sdp`<sup>Optional</sup> <a name="video_sdp" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettings.property.videoSdp"></a>

```python
video_sdp: MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdp
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdp">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdp</a>

The InputSdpLocation that specifies the SDP file and index for the single video SMPTE 2110 stream for this 2110 input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#video_sdp MedialiveInput#video_sdp}

---

### MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps <a name="MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps.Initializer"></a>

```python
from cdktn_provider_awscc import medialive_input

medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps(
  media_index: typing.Union[int, float] = None,
  sdp_url: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps.property.mediaIndex">media_index</a></code> | <code>typing.Union[int, float]</code> | The index of the media stream in the SDP file for one SMPTE 2110 stream. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps.property.sdpUrl">sdp_url</a></code> | <code>str</code> | The URL of the SDP file for one SMPTE 2110 stream. |

---

##### `media_index`<sup>Optional</sup> <a name="media_index" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps.property.mediaIndex"></a>

```python
media_index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The index of the media stream in the SDP file for one SMPTE 2110 stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#media_index MedialiveInput#media_index}

---

##### `sdp_url`<sup>Optional</sup> <a name="sdp_url" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps.property.sdpUrl"></a>

```python
sdp_url: str
```

- *Type:* str

The URL of the SDP file for one SMPTE 2110 stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#sdp_url MedialiveInput#sdp_url}

---

### MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps <a name="MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps.Initializer"></a>

```python
from cdktn_provider_awscc import medialive_input

medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps(
  media_index: typing.Union[int, float] = None,
  sdp_url: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps.property.mediaIndex">media_index</a></code> | <code>typing.Union[int, float]</code> | The index of the media stream in the SDP file for one SMPTE 2110 stream. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps.property.sdpUrl">sdp_url</a></code> | <code>str</code> | The URL of the SDP file for one SMPTE 2110 stream. |

---

##### `media_index`<sup>Optional</sup> <a name="media_index" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps.property.mediaIndex"></a>

```python
media_index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The index of the media stream in the SDP file for one SMPTE 2110 stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#media_index MedialiveInput#media_index}

---

##### `sdp_url`<sup>Optional</sup> <a name="sdp_url" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps.property.sdpUrl"></a>

```python
sdp_url: str
```

- *Type:* str

The URL of the SDP file for one SMPTE 2110 stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#sdp_url MedialiveInput#sdp_url}

---

### MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdp <a name="MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdp" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdp.Initializer"></a>

```python
from cdktn_provider_awscc import medialive_input

medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdp(
  media_index: typing.Union[int, float] = None,
  sdp_url: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdp.property.mediaIndex">media_index</a></code> | <code>typing.Union[int, float]</code> | The index of the media stream in the SDP file for one SMPTE 2110 stream. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdp.property.sdpUrl">sdp_url</a></code> | <code>str</code> | The URL of the SDP file for one SMPTE 2110 stream. |

---

##### `media_index`<sup>Optional</sup> <a name="media_index" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdp.property.mediaIndex"></a>

```python
media_index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The index of the media stream in the SDP file for one SMPTE 2110 stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#media_index MedialiveInput#media_index}

---

##### `sdp_url`<sup>Optional</sup> <a name="sdp_url" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdp.property.sdpUrl"></a>

```python
sdp_url: str
```

- *Type:* str

The URL of the SDP file for one SMPTE 2110 stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#sdp_url MedialiveInput#sdp_url}

---

### MedialiveInputSources <a name="MedialiveInputSources" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSources.Initializer"></a>

```python
from cdktn_provider_awscc import medialive_input

medialiveInput.MedialiveInputSources(
  password_param: str = None,
  url: str = None,
  username: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSources.property.passwordParam">password_param</a></code> | <code>str</code> | The key used to extract the password from EC2 Parameter store. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSources.property.url">url</a></code> | <code>str</code> | This represents the customer's source URL where stream is pulled from. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSources.property.username">username</a></code> | <code>str</code> | The username for the input source. |

---

##### `password_param`<sup>Optional</sup> <a name="password_param" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSources.property.passwordParam"></a>

```python
password_param: str
```

- *Type:* str

The key used to extract the password from EC2 Parameter store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#password_param MedialiveInput#password_param}

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSources.property.url"></a>

```python
url: str
```

- *Type:* str

This represents the customer's source URL where stream is pulled from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#url MedialiveInput#url}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSources.property.username"></a>

```python
username: str
```

- *Type:* str

The username for the input source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#username MedialiveInput#username}

---

### MedialiveInputSrtSettings <a name="MedialiveInputSrtSettings" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettings.Initializer"></a>

```python
from cdktn_provider_awscc import medialive_input

medialiveInput.MedialiveInputSrtSettings(
  srt_caller_sources: IResolvable | typing.List[MedialiveInputSrtSettingsSrtCallerSources] = None,
  srt_listener_settings: MedialiveInputSrtSettingsSrtListenerSettings = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettings.property.srtCallerSources">srt_caller_sources</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSources">MedialiveInputSrtSettingsSrtCallerSources</a>]</code> | Placeholder documentation for __listOfSrtCallerSource. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettings.property.srtListenerSettings">srt_listener_settings</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettings">MedialiveInputSrtSettingsSrtListenerSettings</a></code> | Settings for an SRT listener input. Configured only when the input uses the SRT_LISTENER input type. |

---

##### `srt_caller_sources`<sup>Optional</sup> <a name="srt_caller_sources" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettings.property.srtCallerSources"></a>

```python
srt_caller_sources: IResolvable | typing.List[MedialiveInputSrtSettingsSrtCallerSources]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSources">MedialiveInputSrtSettingsSrtCallerSources</a>]

Placeholder documentation for __listOfSrtCallerSource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#srt_caller_sources MedialiveInput#srt_caller_sources}

---

##### `srt_listener_settings`<sup>Optional</sup> <a name="srt_listener_settings" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettings.property.srtListenerSettings"></a>

```python
srt_listener_settings: MedialiveInputSrtSettingsSrtListenerSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettings">MedialiveInputSrtSettingsSrtListenerSettings</a>

Settings for an SRT listener input. Configured only when the input uses the SRT_LISTENER input type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#srt_listener_settings MedialiveInput#srt_listener_settings}

---

### MedialiveInputSrtSettingsSrtCallerSources <a name="MedialiveInputSrtSettingsSrtCallerSources" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSources.Initializer"></a>

```python
from cdktn_provider_awscc import medialive_input

medialiveInput.MedialiveInputSrtSettingsSrtCallerSources(
  decryption: MedialiveInputSrtSettingsSrtCallerSourcesDecryption = None,
  minimum_latency: typing.Union[int, float] = None,
  srt_listener_address: str = None,
  srt_listener_port: str = None,
  stream_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSources.property.decryption">decryption</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryption">MedialiveInputSrtSettingsSrtCallerSourcesDecryption</a></code> | The decryption settings for the SRT caller source. Present only if the source has decryption enabled. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSources.property.minimumLatency">minimum_latency</a></code> | <code>typing.Union[int, float]</code> | The preferred latency (in milliseconds) for implementing packet loss and recovery. Packet recovery is a key feature of SRT. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSources.property.srtListenerAddress">srt_listener_address</a></code> | <code>str</code> | The IP address at the upstream system (the listener) that MediaLive (the caller) connects to. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSources.property.srtListenerPort">srt_listener_port</a></code> | <code>str</code> | The port at the upstream system (the listener) that MediaLive (the caller) connects to. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSources.property.streamId">stream_id</a></code> | <code>str</code> | The stream ID, if the upstream system uses this identifier. |

---

##### `decryption`<sup>Optional</sup> <a name="decryption" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSources.property.decryption"></a>

```python
decryption: MedialiveInputSrtSettingsSrtCallerSourcesDecryption
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryption">MedialiveInputSrtSettingsSrtCallerSourcesDecryption</a>

The decryption settings for the SRT caller source. Present only if the source has decryption enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#decryption MedialiveInput#decryption}

---

##### `minimum_latency`<sup>Optional</sup> <a name="minimum_latency" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSources.property.minimumLatency"></a>

```python
minimum_latency: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The preferred latency (in milliseconds) for implementing packet loss and recovery. Packet recovery is a key feature of SRT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#minimum_latency MedialiveInput#minimum_latency}

---

##### `srt_listener_address`<sup>Optional</sup> <a name="srt_listener_address" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSources.property.srtListenerAddress"></a>

```python
srt_listener_address: str
```

- *Type:* str

The IP address at the upstream system (the listener) that MediaLive (the caller) connects to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#srt_listener_address MedialiveInput#srt_listener_address}

---

##### `srt_listener_port`<sup>Optional</sup> <a name="srt_listener_port" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSources.property.srtListenerPort"></a>

```python
srt_listener_port: str
```

- *Type:* str

The port at the upstream system (the listener) that MediaLive (the caller) connects to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#srt_listener_port MedialiveInput#srt_listener_port}

---

##### `stream_id`<sup>Optional</sup> <a name="stream_id" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSources.property.streamId"></a>

```python
stream_id: str
```

- *Type:* str

The stream ID, if the upstream system uses this identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#stream_id MedialiveInput#stream_id}

---

### MedialiveInputSrtSettingsSrtCallerSourcesDecryption <a name="MedialiveInputSrtSettingsSrtCallerSourcesDecryption" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryption.Initializer"></a>

```python
from cdktn_provider_awscc import medialive_input

medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryption(
  algorithm: str = None,
  passphrase_secret_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryption.property.algorithm">algorithm</a></code> | <code>str</code> | The algorithm used to encrypt content. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryption.property.passphraseSecretArn">passphrase_secret_arn</a></code> | <code>str</code> | The ARN for the secret in Secrets Manager. |

---

##### `algorithm`<sup>Optional</sup> <a name="algorithm" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryption.property.algorithm"></a>

```python
algorithm: str
```

- *Type:* str

The algorithm used to encrypt content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#algorithm MedialiveInput#algorithm}

---

##### `passphrase_secret_arn`<sup>Optional</sup> <a name="passphrase_secret_arn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryption.property.passphraseSecretArn"></a>

```python
passphrase_secret_arn: str
```

- *Type:* str

The ARN for the secret in Secrets Manager.

Someone in your organization must create a secret and provide you with its ARN. The secret holds the passphrase that MediaLive uses to decrypt the source content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#passphrase_secret_arn MedialiveInput#passphrase_secret_arn}

---

### MedialiveInputSrtSettingsSrtListenerSettings <a name="MedialiveInputSrtSettingsSrtListenerSettings" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettings.Initializer"></a>

```python
from cdktn_provider_awscc import medialive_input

medialiveInput.MedialiveInputSrtSettingsSrtListenerSettings(
  decryption: MedialiveInputSrtSettingsSrtListenerSettingsDecryption = None,
  minimum_latency: typing.Union[int, float] = None,
  stream_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettings.property.decryption">decryption</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryption">MedialiveInputSrtSettingsSrtListenerSettingsDecryption</a></code> | The decryption settings for the SRT listener source. Present only if the source has decryption enabled. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettings.property.minimumLatency">minimum_latency</a></code> | <code>typing.Union[int, float]</code> | The preferred latency (in milliseconds) for implementing packet loss and recovery. Packet recovery is a key feature of SRT. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettings.property.streamId">stream_id</a></code> | <code>str</code> | The stream ID, if the upstream system uses this identifier. |

---

##### `decryption`<sup>Optional</sup> <a name="decryption" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettings.property.decryption"></a>

```python
decryption: MedialiveInputSrtSettingsSrtListenerSettingsDecryption
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryption">MedialiveInputSrtSettingsSrtListenerSettingsDecryption</a>

The decryption settings for the SRT listener source. Present only if the source has decryption enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#decryption MedialiveInput#decryption}

---

##### `minimum_latency`<sup>Optional</sup> <a name="minimum_latency" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettings.property.minimumLatency"></a>

```python
minimum_latency: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The preferred latency (in milliseconds) for implementing packet loss and recovery. Packet recovery is a key feature of SRT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#minimum_latency MedialiveInput#minimum_latency}

---

##### `stream_id`<sup>Optional</sup> <a name="stream_id" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettings.property.streamId"></a>

```python
stream_id: str
```

- *Type:* str

The stream ID, if the upstream system uses this identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#stream_id MedialiveInput#stream_id}

---

### MedialiveInputSrtSettingsSrtListenerSettingsDecryption <a name="MedialiveInputSrtSettingsSrtListenerSettingsDecryption" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryption.Initializer"></a>

```python
from cdktn_provider_awscc import medialive_input

medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryption(
  algorithm: str = None,
  passphrase_secret_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryption.property.algorithm">algorithm</a></code> | <code>str</code> | The algorithm used to encrypt content. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryption.property.passphraseSecretArn">passphrase_secret_arn</a></code> | <code>str</code> | The ARN for the secret in Secrets Manager. |

---

##### `algorithm`<sup>Optional</sup> <a name="algorithm" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryption.property.algorithm"></a>

```python
algorithm: str
```

- *Type:* str

The algorithm used to encrypt content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#algorithm MedialiveInput#algorithm}

---

##### `passphrase_secret_arn`<sup>Optional</sup> <a name="passphrase_secret_arn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryption.property.passphraseSecretArn"></a>

```python
passphrase_secret_arn: str
```

- *Type:* str

The ARN for the secret in Secrets Manager.

Someone in your organization must create a secret and provide you with its ARN. The secret holds the passphrase that MediaLive uses to decrypt the source content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#passphrase_secret_arn MedialiveInput#passphrase_secret_arn}

---

### MedialiveInputVpc <a name="MedialiveInputVpc" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputVpc"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputVpc.Initializer"></a>

```python
from cdktn_provider_awscc import medialive_input

medialiveInput.MedialiveInputVpc(
  security_group_ids: typing.List[str] = None,
  subnet_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputVpc.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | A list of up to 5 EC2 VPC security group IDs to attach to the Input VPC network interfaces. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputVpc.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | A list of 2 VPC subnet IDs from the same VPC. |

---

##### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputVpc.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

A list of up to 5 EC2 VPC security group IDs to attach to the Input VPC network interfaces.

Requires subnetIds. If none are specified then the VPC default security group will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#security_group_ids MedialiveInput#security_group_ids}

---

##### `subnet_ids`<sup>Optional</sup> <a name="subnet_ids" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputVpc.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

A list of 2 VPC subnet IDs from the same VPC.

Subnet IDs must be mapped to two unique availability zones (AZ).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#subnet_ids MedialiveInput#subnet_ids}

---

## Classes <a name="Classes" id="Classes"></a>

### MedialiveInputDestinationsList <a name="MedialiveInputDestinationsList" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsList.Initializer"></a>

```python
from cdktn_provider_awscc import medialive_input

medialiveInput.MedialiveInputDestinationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MedialiveInputDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinations">MedialiveInputDestinations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[MedialiveInputDestinations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinations">MedialiveInputDestinations</a>]

---


### MedialiveInputDestinationsNetworkRoutesList <a name="MedialiveInputDestinationsNetworkRoutesList" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesList.Initializer"></a>

```python
from cdktn_provider_awscc import medialive_input

medialiveInput.MedialiveInputDestinationsNetworkRoutesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MedialiveInputDestinationsNetworkRoutesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutes">MedialiveInputDestinationsNetworkRoutes</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[MedialiveInputDestinationsNetworkRoutes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutes">MedialiveInputDestinationsNetworkRoutes</a>]

---


### MedialiveInputDestinationsNetworkRoutesOutputReference <a name="MedialiveInputDestinationsNetworkRoutesOutputReference" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import medialive_input

medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.resetCidr">reset_cidr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.resetGateway">reset_gateway</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cidr` <a name="reset_cidr" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.resetCidr"></a>

```python
def reset_cidr() -> None
```

##### `reset_gateway` <a name="reset_gateway" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.resetGateway"></a>

```python
def reset_gateway() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.property.cidrInput">cidr_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.property.gatewayInput">gateway_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.property.cidr">cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.property.gateway">gateway</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutes">MedialiveInputDestinationsNetworkRoutes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cidr_input`<sup>Optional</sup> <a name="cidr_input" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.property.cidrInput"></a>

```python
cidr_input: str
```

- *Type:* str

---

##### `gateway_input`<sup>Optional</sup> <a name="gateway_input" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.property.gatewayInput"></a>

```python
gateway_input: str
```

- *Type:* str

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.property.cidr"></a>

```python
cidr: str
```

- *Type:* str

---

##### `gateway`<sup>Required</sup> <a name="gateway" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.property.gateway"></a>

```python
gateway: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MedialiveInputDestinationsNetworkRoutes
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutes">MedialiveInputDestinationsNetworkRoutes</a>

---


### MedialiveInputDestinationsOutputReference <a name="MedialiveInputDestinationsOutputReference" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import medialive_input

medialiveInput.MedialiveInputDestinationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.putNetworkRoutes">put_network_routes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.putVpc">put_vpc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.resetIp">reset_ip</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.resetNetwork">reset_network</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.resetNetworkRoutes">reset_network_routes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.resetStaticIpAddress">reset_static_ip_address</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.resetStreamName">reset_stream_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.resetUrl">reset_url</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.resetVpc">reset_vpc</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_network_routes` <a name="put_network_routes" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.putNetworkRoutes"></a>

```python
def put_network_routes(
  value: IResolvable | typing.List[MedialiveInputDestinationsNetworkRoutes]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.putNetworkRoutes.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutes">MedialiveInputDestinationsNetworkRoutes</a>]

---

##### `put_vpc` <a name="put_vpc" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.putVpc"></a>

```python
def put_vpc(
  availability_zone: str = None,
  network_interface_id: str = None
) -> None
```

###### `availability_zone`<sup>Optional</sup> <a name="availability_zone" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.putVpc.parameter.availabilityZone"></a>

- *Type:* str

The availability zone of the Input destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#availability_zone MedialiveInput#availability_zone}

---

###### `network_interface_id`<sup>Optional</sup> <a name="network_interface_id" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.putVpc.parameter.networkInterfaceId"></a>

- *Type:* str

The network interface ID of the Input destination in the VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#network_interface_id MedialiveInput#network_interface_id}

---

##### `reset_ip` <a name="reset_ip" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.resetIp"></a>

```python
def reset_ip() -> None
```

##### `reset_network` <a name="reset_network" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.resetNetwork"></a>

```python
def reset_network() -> None
```

##### `reset_network_routes` <a name="reset_network_routes" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.resetNetworkRoutes"></a>

```python
def reset_network_routes() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_static_ip_address` <a name="reset_static_ip_address" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.resetStaticIpAddress"></a>

```python
def reset_static_ip_address() -> None
```

##### `reset_stream_name` <a name="reset_stream_name" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.resetStreamName"></a>

```python
def reset_stream_name() -> None
```

##### `reset_url` <a name="reset_url" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.resetUrl"></a>

```python
def reset_url() -> None
```

##### `reset_vpc` <a name="reset_vpc" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.resetVpc"></a>

```python
def reset_vpc() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.property.networkRoutes">network_routes</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesList">MedialiveInputDestinationsNetworkRoutesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.property.vpc">vpc</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference">MedialiveInputDestinationsVpcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.property.ipInput">ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.property.networkInput">network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.property.networkRoutesInput">network_routes_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutes">MedialiveInputDestinationsNetworkRoutes</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.property.portInput">port_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.property.staticIpAddressInput">static_ip_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.property.streamNameInput">stream_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.property.urlInput">url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.property.vpcInput">vpc_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpc">MedialiveInputDestinationsVpc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.property.ip">ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.property.network">network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.property.port">port</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.property.staticIpAddress">static_ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.property.streamName">stream_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinations">MedialiveInputDestinations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `network_routes`<sup>Required</sup> <a name="network_routes" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.property.networkRoutes"></a>

```python
network_routes: MedialiveInputDestinationsNetworkRoutesList
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesList">MedialiveInputDestinationsNetworkRoutesList</a>

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.property.vpc"></a>

```python
vpc: MedialiveInputDestinationsVpcOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference">MedialiveInputDestinationsVpcOutputReference</a>

---

##### `ip_input`<sup>Optional</sup> <a name="ip_input" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.property.ipInput"></a>

```python
ip_input: str
```

- *Type:* str

---

##### `network_input`<sup>Optional</sup> <a name="network_input" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.property.networkInput"></a>

```python
network_input: str
```

- *Type:* str

---

##### `network_routes_input`<sup>Optional</sup> <a name="network_routes_input" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.property.networkRoutesInput"></a>

```python
network_routes_input: IResolvable | typing.List[MedialiveInputDestinationsNetworkRoutes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutes">MedialiveInputDestinationsNetworkRoutes</a>]

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.property.portInput"></a>

```python
port_input: str
```

- *Type:* str

---

##### `static_ip_address_input`<sup>Optional</sup> <a name="static_ip_address_input" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.property.staticIpAddressInput"></a>

```python
static_ip_address_input: str
```

- *Type:* str

---

##### `stream_name_input`<sup>Optional</sup> <a name="stream_name_input" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.property.streamNameInput"></a>

```python
stream_name_input: str
```

- *Type:* str

---

##### `url_input`<sup>Optional</sup> <a name="url_input" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.property.urlInput"></a>

```python
url_input: str
```

- *Type:* str

---

##### `vpc_input`<sup>Optional</sup> <a name="vpc_input" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.property.vpcInput"></a>

```python
vpc_input: IResolvable | MedialiveInputDestinationsVpc
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpc">MedialiveInputDestinationsVpc</a>

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.property.ip"></a>

```python
ip: str
```

- *Type:* str

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.property.network"></a>

```python
network: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.property.port"></a>

```python
port: str
```

- *Type:* str

---

##### `static_ip_address`<sup>Required</sup> <a name="static_ip_address" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.property.staticIpAddress"></a>

```python
static_ip_address: str
```

- *Type:* str

---

##### `stream_name`<sup>Required</sup> <a name="stream_name" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.property.streamName"></a>

```python
stream_name: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MedialiveInputDestinations
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinations">MedialiveInputDestinations</a>

---


### MedialiveInputDestinationsVpcOutputReference <a name="MedialiveInputDestinationsVpcOutputReference" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import medialive_input

medialiveInput.MedialiveInputDestinationsVpcOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.resetAvailabilityZone">reset_availability_zone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.resetNetworkInterfaceId">reset_network_interface_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_availability_zone` <a name="reset_availability_zone" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.resetAvailabilityZone"></a>

```python
def reset_availability_zone() -> None
```

##### `reset_network_interface_id` <a name="reset_network_interface_id" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.resetNetworkInterfaceId"></a>

```python
def reset_network_interface_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.property.availabilityZoneInput">availability_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.property.networkInterfaceIdInput">network_interface_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.property.availabilityZone">availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.property.networkInterfaceId">network_interface_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpc">MedialiveInputDestinationsVpc</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_zone_input`<sup>Optional</sup> <a name="availability_zone_input" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.property.availabilityZoneInput"></a>

```python
availability_zone_input: str
```

- *Type:* str

---

##### `network_interface_id_input`<sup>Optional</sup> <a name="network_interface_id_input" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.property.networkInterfaceIdInput"></a>

```python
network_interface_id_input: str
```

- *Type:* str

---

##### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

---

##### `network_interface_id`<sup>Required</sup> <a name="network_interface_id" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.property.networkInterfaceId"></a>

```python
network_interface_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MedialiveInputDestinationsVpc
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpc">MedialiveInputDestinationsVpc</a>

---


### MedialiveInputInputDevicesList <a name="MedialiveInputInputDevicesList" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesList.Initializer"></a>

```python
from cdktn_provider_awscc import medialive_input

medialiveInput.MedialiveInputInputDevicesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MedialiveInputInputDevicesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevices">MedialiveInputInputDevices</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[MedialiveInputInputDevices]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevices">MedialiveInputInputDevices</a>]

---


### MedialiveInputInputDevicesOutputReference <a name="MedialiveInputInputDevicesOutputReference" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import medialive_input

medialiveInput.MedialiveInputInputDevicesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.resetId">reset_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_id` <a name="reset_id" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.resetId"></a>

```python
def reset_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevices">MedialiveInputInputDevices</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MedialiveInputInputDevices
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevices">MedialiveInputInputDevices</a>

---


### MedialiveInputMediaConnectFlowsList <a name="MedialiveInputMediaConnectFlowsList" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsList.Initializer"></a>

```python
from cdktn_provider_awscc import medialive_input

medialiveInput.MedialiveInputMediaConnectFlowsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MedialiveInputMediaConnectFlowsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlows">MedialiveInputMediaConnectFlows</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[MedialiveInputMediaConnectFlows]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlows">MedialiveInputMediaConnectFlows</a>]

---


### MedialiveInputMediaConnectFlowsOutputReference <a name="MedialiveInputMediaConnectFlowsOutputReference" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import medialive_input

medialiveInput.MedialiveInputMediaConnectFlowsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.resetFlowArn">reset_flow_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_flow_arn` <a name="reset_flow_arn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.resetFlowArn"></a>

```python
def reset_flow_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.property.flowArnInput">flow_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.property.flowArn">flow_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlows">MedialiveInputMediaConnectFlows</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `flow_arn_input`<sup>Optional</sup> <a name="flow_arn_input" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.property.flowArnInput"></a>

```python
flow_arn_input: str
```

- *Type:* str

---

##### `flow_arn`<sup>Required</sup> <a name="flow_arn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.property.flowArn"></a>

```python
flow_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MedialiveInputMediaConnectFlows
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlows">MedialiveInputMediaConnectFlows</a>

---


### MedialiveInputMulticastSettingsOutputReference <a name="MedialiveInputMulticastSettingsOutputReference" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import medialive_input

medialiveInput.MedialiveInputMulticastSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.putSources">put_sources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.resetSources">reset_sources</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_sources` <a name="put_sources" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.putSources"></a>

```python
def put_sources(
  value: IResolvable | typing.List[MedialiveInputMulticastSettingsSources]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.putSources.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSources">MedialiveInputMulticastSettingsSources</a>]

---

##### `reset_sources` <a name="reset_sources" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.resetSources"></a>

```python
def reset_sources() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.property.sources">sources</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesList">MedialiveInputMulticastSettingsSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.property.sourcesInput">sources_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSources">MedialiveInputMulticastSettingsSources</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettings">MedialiveInputMulticastSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `sources`<sup>Required</sup> <a name="sources" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.property.sources"></a>

```python
sources: MedialiveInputMulticastSettingsSourcesList
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesList">MedialiveInputMulticastSettingsSourcesList</a>

---

##### `sources_input`<sup>Optional</sup> <a name="sources_input" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.property.sourcesInput"></a>

```python
sources_input: IResolvable | typing.List[MedialiveInputMulticastSettingsSources]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSources">MedialiveInputMulticastSettingsSources</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MedialiveInputMulticastSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettings">MedialiveInputMulticastSettings</a>

---


### MedialiveInputMulticastSettingsSourcesList <a name="MedialiveInputMulticastSettingsSourcesList" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesList.Initializer"></a>

```python
from cdktn_provider_awscc import medialive_input

medialiveInput.MedialiveInputMulticastSettingsSourcesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MedialiveInputMulticastSettingsSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSources">MedialiveInputMulticastSettingsSources</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[MedialiveInputMulticastSettingsSources]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSources">MedialiveInputMulticastSettingsSources</a>]

---


### MedialiveInputMulticastSettingsSourcesOutputReference <a name="MedialiveInputMulticastSettingsSourcesOutputReference" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import medialive_input

medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.resetSourceIp">reset_source_ip</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.resetUrl">reset_url</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_source_ip` <a name="reset_source_ip" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.resetSourceIp"></a>

```python
def reset_source_ip() -> None
```

##### `reset_url` <a name="reset_url" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.resetUrl"></a>

```python
def reset_url() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.property.sourceIpInput">source_ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.property.urlInput">url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.property.sourceIp">source_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSources">MedialiveInputMulticastSettingsSources</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `source_ip_input`<sup>Optional</sup> <a name="source_ip_input" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.property.sourceIpInput"></a>

```python
source_ip_input: str
```

- *Type:* str

---

##### `url_input`<sup>Optional</sup> <a name="url_input" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.property.urlInput"></a>

```python
url_input: str
```

- *Type:* str

---

##### `source_ip`<sup>Required</sup> <a name="source_ip" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.property.sourceIp"></a>

```python
source_ip: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MedialiveInputMulticastSettingsSources
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSources">MedialiveInputMulticastSettingsSources</a>

---


### MedialiveInputRouterSettingsDestinationsList <a name="MedialiveInputRouterSettingsDestinationsList" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsList.Initializer"></a>

```python
from cdktn_provider_awscc import medialive_input

medialiveInput.MedialiveInputRouterSettingsDestinationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MedialiveInputRouterSettingsDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinations">MedialiveInputRouterSettingsDestinations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[MedialiveInputRouterSettingsDestinations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinations">MedialiveInputRouterSettingsDestinations</a>]

---


### MedialiveInputRouterSettingsDestinationsOutputReference <a name="MedialiveInputRouterSettingsDestinationsOutputReference" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import medialive_input

medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.resetAvailabilityZoneName">reset_availability_zone_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.resetRouterOutputArn">reset_router_output_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_availability_zone_name` <a name="reset_availability_zone_name" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.resetAvailabilityZoneName"></a>

```python
def reset_availability_zone_name() -> None
```

##### `reset_router_output_arn` <a name="reset_router_output_arn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.resetRouterOutputArn"></a>

```python
def reset_router_output_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.property.availabilityZoneNameInput">availability_zone_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.property.routerOutputArnInput">router_output_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.property.availabilityZoneName">availability_zone_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.property.routerOutputArn">router_output_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinations">MedialiveInputRouterSettingsDestinations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_zone_name_input`<sup>Optional</sup> <a name="availability_zone_name_input" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.property.availabilityZoneNameInput"></a>

```python
availability_zone_name_input: str
```

- *Type:* str

---

##### `router_output_arn_input`<sup>Optional</sup> <a name="router_output_arn_input" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.property.routerOutputArnInput"></a>

```python
router_output_arn_input: str
```

- *Type:* str

---

##### `availability_zone_name`<sup>Required</sup> <a name="availability_zone_name" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.property.availabilityZoneName"></a>

```python
availability_zone_name: str
```

- *Type:* str

---

##### `router_output_arn`<sup>Required</sup> <a name="router_output_arn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.property.routerOutputArn"></a>

```python
router_output_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MedialiveInputRouterSettingsDestinations
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinations">MedialiveInputRouterSettingsDestinations</a>

---


### MedialiveInputRouterSettingsOutputReference <a name="MedialiveInputRouterSettingsOutputReference" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import medialive_input

medialiveInput.MedialiveInputRouterSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.putDestinations">put_destinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.resetDestinations">reset_destinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.resetEncryptionType">reset_encryption_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.resetSecretArn">reset_secret_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_destinations` <a name="put_destinations" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.putDestinations"></a>

```python
def put_destinations(
  value: IResolvable | typing.List[MedialiveInputRouterSettingsDestinations]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.putDestinations.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinations">MedialiveInputRouterSettingsDestinations</a>]

---

##### `reset_destinations` <a name="reset_destinations" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.resetDestinations"></a>

```python
def reset_destinations() -> None
```

##### `reset_encryption_type` <a name="reset_encryption_type" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.resetEncryptionType"></a>

```python
def reset_encryption_type() -> None
```

##### `reset_secret_arn` <a name="reset_secret_arn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.resetSecretArn"></a>

```python
def reset_secret_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.property.destinations">destinations</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsList">MedialiveInputRouterSettingsDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.property.destinationsInput">destinations_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinations">MedialiveInputRouterSettingsDestinations</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.property.encryptionTypeInput">encryption_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.property.secretArnInput">secret_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.property.encryptionType">encryption_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.property.secretArn">secret_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettings">MedialiveInputRouterSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.property.destinations"></a>

```python
destinations: MedialiveInputRouterSettingsDestinationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsList">MedialiveInputRouterSettingsDestinationsList</a>

---

##### `destinations_input`<sup>Optional</sup> <a name="destinations_input" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.property.destinationsInput"></a>

```python
destinations_input: IResolvable | typing.List[MedialiveInputRouterSettingsDestinations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinations">MedialiveInputRouterSettingsDestinations</a>]

---

##### `encryption_type_input`<sup>Optional</sup> <a name="encryption_type_input" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.property.encryptionTypeInput"></a>

```python
encryption_type_input: str
```

- *Type:* str

---

##### `secret_arn_input`<sup>Optional</sup> <a name="secret_arn_input" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.property.secretArnInput"></a>

```python
secret_arn_input: str
```

- *Type:* str

---

##### `encryption_type`<sup>Required</sup> <a name="encryption_type" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.property.encryptionType"></a>

```python
encryption_type: str
```

- *Type:* str

---

##### `secret_arn`<sup>Required</sup> <a name="secret_arn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.property.secretArn"></a>

```python
secret_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MedialiveInputRouterSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettings">MedialiveInputRouterSettings</a>

---


### MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference <a name="MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import medialive_input

medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.putSmpte2110ReceiverGroups">put_smpte2110_receiver_groups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.resetSmpte2110ReceiverGroups">reset_smpte2110_receiver_groups</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_smpte2110_receiver_groups` <a name="put_smpte2110_receiver_groups" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.putSmpte2110ReceiverGroups"></a>

```python
def put_smpte2110_receiver_groups(
  value: IResolvable | typing.List[MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroups]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.putSmpte2110ReceiverGroups.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroups">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroups</a>]

---

##### `reset_smpte2110_receiver_groups` <a name="reset_smpte2110_receiver_groups" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.resetSmpte2110ReceiverGroups"></a>

```python
def reset_smpte2110_receiver_groups() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.property.smpte2110ReceiverGroups">smpte2110_receiver_groups</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.property.smpte2110ReceiverGroupsInput">smpte2110_receiver_groups_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroups">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroups</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettings">MedialiveInputSmpte2110ReceiverGroupSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `smpte2110_receiver_groups`<sup>Required</sup> <a name="smpte2110_receiver_groups" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.property.smpte2110ReceiverGroups"></a>

```python
smpte2110_receiver_groups: MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList</a>

---

##### `smpte2110_receiver_groups_input`<sup>Optional</sup> <a name="smpte2110_receiver_groups_input" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.property.smpte2110ReceiverGroupsInput"></a>

```python
smpte2110_receiver_groups_input: IResolvable | typing.List[MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroups]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroups">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroups</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MedialiveInputSmpte2110ReceiverGroupSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettings">MedialiveInputSmpte2110ReceiverGroupSettings</a>

---


### MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList <a name="MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList.Initializer"></a>

```python
from cdktn_provider_awscc import medialive_input

medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroups">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroups</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroups]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroups">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroups</a>]

---


### MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference <a name="MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import medialive_input

medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.putSdpSettings">put_sdp_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.resetSdpSettings">reset_sdp_settings</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_sdp_settings` <a name="put_sdp_settings" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.putSdpSettings"></a>

```python
def put_sdp_settings(
  ancillary_sdps: IResolvable | typing.List[MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps] = None,
  audio_sdps: IResolvable | typing.List[MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps] = None,
  video_sdp: MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdp = None
) -> None
```

###### `ancillary_sdps`<sup>Optional</sup> <a name="ancillary_sdps" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.putSdpSettings.parameter.ancillarySdps"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps</a>]

A list of InputSdpLocations.

Each item in the list specifies the SDP file and index for one ancillary SMPTE 2110 stream.
Each stream encapsulates one captions stream (out of any number you can include) or the single SCTE 35 stream that you can include.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#ancillary_sdps MedialiveInput#ancillary_sdps}

---

###### `audio_sdps`<sup>Optional</sup> <a name="audio_sdps" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.putSdpSettings.parameter.audioSdps"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps</a>]

A list of InputSdpLocations.

Each item in the list specifies the SDP file and index for one audio SMPTE 2110 stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#audio_sdps MedialiveInput#audio_sdps}

---

###### `video_sdp`<sup>Optional</sup> <a name="video_sdp" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.putSdpSettings.parameter.videoSdp"></a>

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdp">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdp</a>

The InputSdpLocation that specifies the SDP file and index for the single video SMPTE 2110 stream for this 2110 input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#video_sdp MedialiveInput#video_sdp}

---

##### `reset_sdp_settings` <a name="reset_sdp_settings" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.resetSdpSettings"></a>

```python
def reset_sdp_settings() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.property.sdpSettings">sdp_settings</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.property.sdpSettingsInput">sdp_settings_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettings">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroups">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroups</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `sdp_settings`<sup>Required</sup> <a name="sdp_settings" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.property.sdpSettings"></a>

```python
sdp_settings: MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference</a>

---

##### `sdp_settings_input`<sup>Optional</sup> <a name="sdp_settings_input" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.property.sdpSettingsInput"></a>

```python
sdp_settings_input: IResolvable | MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettings">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettings</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroups
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroups">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroups</a>

---


### MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList <a name="MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList.Initializer"></a>

```python
from cdktn_provider_awscc import medialive_input

medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps</a>]

---


### MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference <a name="MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import medialive_input

medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.resetMediaIndex">reset_media_index</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.resetSdpUrl">reset_sdp_url</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_media_index` <a name="reset_media_index" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.resetMediaIndex"></a>

```python
def reset_media_index() -> None
```

##### `reset_sdp_url` <a name="reset_sdp_url" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.resetSdpUrl"></a>

```python
def reset_sdp_url() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.property.mediaIndexInput">media_index_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.property.sdpUrlInput">sdp_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.property.mediaIndex">media_index</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.property.sdpUrl">sdp_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `media_index_input`<sup>Optional</sup> <a name="media_index_input" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.property.mediaIndexInput"></a>

```python
media_index_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sdp_url_input`<sup>Optional</sup> <a name="sdp_url_input" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.property.sdpUrlInput"></a>

```python
sdp_url_input: str
```

- *Type:* str

---

##### `media_index`<sup>Required</sup> <a name="media_index" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.property.mediaIndex"></a>

```python
media_index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sdp_url`<sup>Required</sup> <a name="sdp_url" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.property.sdpUrl"></a>

```python
sdp_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps</a>

---


### MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList <a name="MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList.Initializer"></a>

```python
from cdktn_provider_awscc import medialive_input

medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps</a>]

---


### MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference <a name="MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import medialive_input

medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.resetMediaIndex">reset_media_index</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.resetSdpUrl">reset_sdp_url</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_media_index` <a name="reset_media_index" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.resetMediaIndex"></a>

```python
def reset_media_index() -> None
```

##### `reset_sdp_url` <a name="reset_sdp_url" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.resetSdpUrl"></a>

```python
def reset_sdp_url() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.property.mediaIndexInput">media_index_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.property.sdpUrlInput">sdp_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.property.mediaIndex">media_index</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.property.sdpUrl">sdp_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `media_index_input`<sup>Optional</sup> <a name="media_index_input" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.property.mediaIndexInput"></a>

```python
media_index_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sdp_url_input`<sup>Optional</sup> <a name="sdp_url_input" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.property.sdpUrlInput"></a>

```python
sdp_url_input: str
```

- *Type:* str

---

##### `media_index`<sup>Required</sup> <a name="media_index" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.property.mediaIndex"></a>

```python
media_index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sdp_url`<sup>Required</sup> <a name="sdp_url" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.property.sdpUrl"></a>

```python
sdp_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps</a>

---


### MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference <a name="MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import medialive_input

medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.putAncillarySdps">put_ancillary_sdps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.putAudioSdps">put_audio_sdps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.putVideoSdp">put_video_sdp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.resetAncillarySdps">reset_ancillary_sdps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.resetAudioSdps">reset_audio_sdps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.resetVideoSdp">reset_video_sdp</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_ancillary_sdps` <a name="put_ancillary_sdps" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.putAncillarySdps"></a>

```python
def put_ancillary_sdps(
  value: IResolvable | typing.List[MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.putAncillarySdps.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps</a>]

---

##### `put_audio_sdps` <a name="put_audio_sdps" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.putAudioSdps"></a>

```python
def put_audio_sdps(
  value: IResolvable | typing.List[MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.putAudioSdps.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps</a>]

---

##### `put_video_sdp` <a name="put_video_sdp" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.putVideoSdp"></a>

```python
def put_video_sdp(
  media_index: typing.Union[int, float] = None,
  sdp_url: str = None
) -> None
```

###### `media_index`<sup>Optional</sup> <a name="media_index" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.putVideoSdp.parameter.mediaIndex"></a>

- *Type:* typing.Union[int, float]

The index of the media stream in the SDP file for one SMPTE 2110 stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#media_index MedialiveInput#media_index}

---

###### `sdp_url`<sup>Optional</sup> <a name="sdp_url" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.putVideoSdp.parameter.sdpUrl"></a>

- *Type:* str

The URL of the SDP file for one SMPTE 2110 stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#sdp_url MedialiveInput#sdp_url}

---

##### `reset_ancillary_sdps` <a name="reset_ancillary_sdps" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.resetAncillarySdps"></a>

```python
def reset_ancillary_sdps() -> None
```

##### `reset_audio_sdps` <a name="reset_audio_sdps" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.resetAudioSdps"></a>

```python
def reset_audio_sdps() -> None
```

##### `reset_video_sdp` <a name="reset_video_sdp" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.resetVideoSdp"></a>

```python
def reset_video_sdp() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.property.ancillarySdps">ancillary_sdps</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.property.audioSdps">audio_sdps</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.property.videoSdp">video_sdp</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.property.ancillarySdpsInput">ancillary_sdps_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.property.audioSdpsInput">audio_sdps_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.property.videoSdpInput">video_sdp_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdp">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettings">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ancillary_sdps`<sup>Required</sup> <a name="ancillary_sdps" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.property.ancillarySdps"></a>

```python
ancillary_sdps: MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList</a>

---

##### `audio_sdps`<sup>Required</sup> <a name="audio_sdps" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.property.audioSdps"></a>

```python
audio_sdps: MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList</a>

---

##### `video_sdp`<sup>Required</sup> <a name="video_sdp" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.property.videoSdp"></a>

```python
video_sdp: MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference</a>

---

##### `ancillary_sdps_input`<sup>Optional</sup> <a name="ancillary_sdps_input" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.property.ancillarySdpsInput"></a>

```python
ancillary_sdps_input: IResolvable | typing.List[MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps</a>]

---

##### `audio_sdps_input`<sup>Optional</sup> <a name="audio_sdps_input" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.property.audioSdpsInput"></a>

```python
audio_sdps_input: IResolvable | typing.List[MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps</a>]

---

##### `video_sdp_input`<sup>Optional</sup> <a name="video_sdp_input" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.property.videoSdpInput"></a>

```python
video_sdp_input: IResolvable | MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdp
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdp">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdp</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettings">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettings</a>

---


### MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference <a name="MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import medialive_input

medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.resetMediaIndex">reset_media_index</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.resetSdpUrl">reset_sdp_url</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_media_index` <a name="reset_media_index" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.resetMediaIndex"></a>

```python
def reset_media_index() -> None
```

##### `reset_sdp_url` <a name="reset_sdp_url" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.resetSdpUrl"></a>

```python
def reset_sdp_url() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.property.mediaIndexInput">media_index_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.property.sdpUrlInput">sdp_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.property.mediaIndex">media_index</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.property.sdpUrl">sdp_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdp">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdp</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `media_index_input`<sup>Optional</sup> <a name="media_index_input" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.property.mediaIndexInput"></a>

```python
media_index_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sdp_url_input`<sup>Optional</sup> <a name="sdp_url_input" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.property.sdpUrlInput"></a>

```python
sdp_url_input: str
```

- *Type:* str

---

##### `media_index`<sup>Required</sup> <a name="media_index" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.property.mediaIndex"></a>

```python
media_index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sdp_url`<sup>Required</sup> <a name="sdp_url" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.property.sdpUrl"></a>

```python
sdp_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdp
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdp">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdp</a>

---


### MedialiveInputSourcesList <a name="MedialiveInputSourcesList" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesList.Initializer"></a>

```python
from cdktn_provider_awscc import medialive_input

medialiveInput.MedialiveInputSourcesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MedialiveInputSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSources">MedialiveInputSources</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[MedialiveInputSources]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSources">MedialiveInputSources</a>]

---


### MedialiveInputSourcesOutputReference <a name="MedialiveInputSourcesOutputReference" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import medialive_input

medialiveInput.MedialiveInputSourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.resetPasswordParam">reset_password_param</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.resetUrl">reset_url</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.resetUsername">reset_username</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_password_param` <a name="reset_password_param" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.resetPasswordParam"></a>

```python
def reset_password_param() -> None
```

##### `reset_url` <a name="reset_url" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.resetUrl"></a>

```python
def reset_url() -> None
```

##### `reset_username` <a name="reset_username" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.resetUsername"></a>

```python
def reset_username() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.property.passwordParamInput">password_param_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.property.urlInput">url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.property.passwordParam">password_param</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSources">MedialiveInputSources</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `password_param_input`<sup>Optional</sup> <a name="password_param_input" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.property.passwordParamInput"></a>

```python
password_param_input: str
```

- *Type:* str

---

##### `url_input`<sup>Optional</sup> <a name="url_input" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.property.urlInput"></a>

```python
url_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `password_param`<sup>Required</sup> <a name="password_param" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.property.passwordParam"></a>

```python
password_param: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MedialiveInputSources
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSources">MedialiveInputSources</a>

---


### MedialiveInputSrtSettingsOutputReference <a name="MedialiveInputSrtSettingsOutputReference" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import medialive_input

medialiveInput.MedialiveInputSrtSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.putSrtCallerSources">put_srt_caller_sources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.putSrtListenerSettings">put_srt_listener_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.resetSrtCallerSources">reset_srt_caller_sources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.resetSrtListenerSettings">reset_srt_listener_settings</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_srt_caller_sources` <a name="put_srt_caller_sources" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.putSrtCallerSources"></a>

```python
def put_srt_caller_sources(
  value: IResolvable | typing.List[MedialiveInputSrtSettingsSrtCallerSources]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.putSrtCallerSources.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSources">MedialiveInputSrtSettingsSrtCallerSources</a>]

---

##### `put_srt_listener_settings` <a name="put_srt_listener_settings" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.putSrtListenerSettings"></a>

```python
def put_srt_listener_settings(
  decryption: MedialiveInputSrtSettingsSrtListenerSettingsDecryption = None,
  minimum_latency: typing.Union[int, float] = None,
  stream_id: str = None
) -> None
```

###### `decryption`<sup>Optional</sup> <a name="decryption" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.putSrtListenerSettings.parameter.decryption"></a>

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryption">MedialiveInputSrtSettingsSrtListenerSettingsDecryption</a>

The decryption settings for the SRT listener source. Present only if the source has decryption enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#decryption MedialiveInput#decryption}

---

###### `minimum_latency`<sup>Optional</sup> <a name="minimum_latency" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.putSrtListenerSettings.parameter.minimumLatency"></a>

- *Type:* typing.Union[int, float]

The preferred latency (in milliseconds) for implementing packet loss and recovery. Packet recovery is a key feature of SRT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#minimum_latency MedialiveInput#minimum_latency}

---

###### `stream_id`<sup>Optional</sup> <a name="stream_id" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.putSrtListenerSettings.parameter.streamId"></a>

- *Type:* str

The stream ID, if the upstream system uses this identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#stream_id MedialiveInput#stream_id}

---

##### `reset_srt_caller_sources` <a name="reset_srt_caller_sources" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.resetSrtCallerSources"></a>

```python
def reset_srt_caller_sources() -> None
```

##### `reset_srt_listener_settings` <a name="reset_srt_listener_settings" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.resetSrtListenerSettings"></a>

```python
def reset_srt_listener_settings() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.property.srtCallerSources">srt_caller_sources</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesList">MedialiveInputSrtSettingsSrtCallerSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.property.srtListenerSettings">srt_listener_settings</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference">MedialiveInputSrtSettingsSrtListenerSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.property.srtCallerSourcesInput">srt_caller_sources_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSources">MedialiveInputSrtSettingsSrtCallerSources</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.property.srtListenerSettingsInput">srt_listener_settings_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettings">MedialiveInputSrtSettingsSrtListenerSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettings">MedialiveInputSrtSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `srt_caller_sources`<sup>Required</sup> <a name="srt_caller_sources" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.property.srtCallerSources"></a>

```python
srt_caller_sources: MedialiveInputSrtSettingsSrtCallerSourcesList
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesList">MedialiveInputSrtSettingsSrtCallerSourcesList</a>

---

##### `srt_listener_settings`<sup>Required</sup> <a name="srt_listener_settings" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.property.srtListenerSettings"></a>

```python
srt_listener_settings: MedialiveInputSrtSettingsSrtListenerSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference">MedialiveInputSrtSettingsSrtListenerSettingsOutputReference</a>

---

##### `srt_caller_sources_input`<sup>Optional</sup> <a name="srt_caller_sources_input" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.property.srtCallerSourcesInput"></a>

```python
srt_caller_sources_input: IResolvable | typing.List[MedialiveInputSrtSettingsSrtCallerSources]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSources">MedialiveInputSrtSettingsSrtCallerSources</a>]

---

##### `srt_listener_settings_input`<sup>Optional</sup> <a name="srt_listener_settings_input" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.property.srtListenerSettingsInput"></a>

```python
srt_listener_settings_input: IResolvable | MedialiveInputSrtSettingsSrtListenerSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettings">MedialiveInputSrtSettingsSrtListenerSettings</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MedialiveInputSrtSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettings">MedialiveInputSrtSettings</a>

---


### MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference <a name="MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import medialive_input

medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.resetAlgorithm">reset_algorithm</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.resetPassphraseSecretArn">reset_passphrase_secret_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_algorithm` <a name="reset_algorithm" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.resetAlgorithm"></a>

```python
def reset_algorithm() -> None
```

##### `reset_passphrase_secret_arn` <a name="reset_passphrase_secret_arn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.resetPassphraseSecretArn"></a>

```python
def reset_passphrase_secret_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.property.algorithmInput">algorithm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.property.passphraseSecretArnInput">passphrase_secret_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.property.algorithm">algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.property.passphraseSecretArn">passphrase_secret_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryption">MedialiveInputSrtSettingsSrtCallerSourcesDecryption</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `algorithm_input`<sup>Optional</sup> <a name="algorithm_input" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.property.algorithmInput"></a>

```python
algorithm_input: str
```

- *Type:* str

---

##### `passphrase_secret_arn_input`<sup>Optional</sup> <a name="passphrase_secret_arn_input" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.property.passphraseSecretArnInput"></a>

```python
passphrase_secret_arn_input: str
```

- *Type:* str

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.property.algorithm"></a>

```python
algorithm: str
```

- *Type:* str

---

##### `passphrase_secret_arn`<sup>Required</sup> <a name="passphrase_secret_arn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.property.passphraseSecretArn"></a>

```python
passphrase_secret_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MedialiveInputSrtSettingsSrtCallerSourcesDecryption
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryption">MedialiveInputSrtSettingsSrtCallerSourcesDecryption</a>

---


### MedialiveInputSrtSettingsSrtCallerSourcesList <a name="MedialiveInputSrtSettingsSrtCallerSourcesList" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesList.Initializer"></a>

```python
from cdktn_provider_awscc import medialive_input

medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MedialiveInputSrtSettingsSrtCallerSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSources">MedialiveInputSrtSettingsSrtCallerSources</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[MedialiveInputSrtSettingsSrtCallerSources]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSources">MedialiveInputSrtSettingsSrtCallerSources</a>]

---


### MedialiveInputSrtSettingsSrtCallerSourcesOutputReference <a name="MedialiveInputSrtSettingsSrtCallerSourcesOutputReference" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import medialive_input

medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.putDecryption">put_decryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.resetDecryption">reset_decryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.resetMinimumLatency">reset_minimum_latency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.resetSrtListenerAddress">reset_srt_listener_address</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.resetSrtListenerPort">reset_srt_listener_port</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.resetStreamId">reset_stream_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_decryption` <a name="put_decryption" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.putDecryption"></a>

```python
def put_decryption(
  algorithm: str = None,
  passphrase_secret_arn: str = None
) -> None
```

###### `algorithm`<sup>Optional</sup> <a name="algorithm" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.putDecryption.parameter.algorithm"></a>

- *Type:* str

The algorithm used to encrypt content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#algorithm MedialiveInput#algorithm}

---

###### `passphrase_secret_arn`<sup>Optional</sup> <a name="passphrase_secret_arn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.putDecryption.parameter.passphraseSecretArn"></a>

- *Type:* str

The ARN for the secret in Secrets Manager.

Someone in your organization must create a secret and provide you with its ARN. The secret holds the passphrase that MediaLive uses to decrypt the source content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#passphrase_secret_arn MedialiveInput#passphrase_secret_arn}

---

##### `reset_decryption` <a name="reset_decryption" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.resetDecryption"></a>

```python
def reset_decryption() -> None
```

##### `reset_minimum_latency` <a name="reset_minimum_latency" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.resetMinimumLatency"></a>

```python
def reset_minimum_latency() -> None
```

##### `reset_srt_listener_address` <a name="reset_srt_listener_address" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.resetSrtListenerAddress"></a>

```python
def reset_srt_listener_address() -> None
```

##### `reset_srt_listener_port` <a name="reset_srt_listener_port" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.resetSrtListenerPort"></a>

```python
def reset_srt_listener_port() -> None
```

##### `reset_stream_id` <a name="reset_stream_id" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.resetStreamId"></a>

```python
def reset_stream_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.property.decryption">decryption</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference">MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.property.decryptionInput">decryption_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryption">MedialiveInputSrtSettingsSrtCallerSourcesDecryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.property.minimumLatencyInput">minimum_latency_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.property.srtListenerAddressInput">srt_listener_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.property.srtListenerPortInput">srt_listener_port_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.property.streamIdInput">stream_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.property.minimumLatency">minimum_latency</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.property.srtListenerAddress">srt_listener_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.property.srtListenerPort">srt_listener_port</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.property.streamId">stream_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSources">MedialiveInputSrtSettingsSrtCallerSources</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `decryption`<sup>Required</sup> <a name="decryption" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.property.decryption"></a>

```python
decryption: MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference">MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference</a>

---

##### `decryption_input`<sup>Optional</sup> <a name="decryption_input" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.property.decryptionInput"></a>

```python
decryption_input: IResolvable | MedialiveInputSrtSettingsSrtCallerSourcesDecryption
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryption">MedialiveInputSrtSettingsSrtCallerSourcesDecryption</a>

---

##### `minimum_latency_input`<sup>Optional</sup> <a name="minimum_latency_input" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.property.minimumLatencyInput"></a>

```python
minimum_latency_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `srt_listener_address_input`<sup>Optional</sup> <a name="srt_listener_address_input" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.property.srtListenerAddressInput"></a>

```python
srt_listener_address_input: str
```

- *Type:* str

---

##### `srt_listener_port_input`<sup>Optional</sup> <a name="srt_listener_port_input" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.property.srtListenerPortInput"></a>

```python
srt_listener_port_input: str
```

- *Type:* str

---

##### `stream_id_input`<sup>Optional</sup> <a name="stream_id_input" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.property.streamIdInput"></a>

```python
stream_id_input: str
```

- *Type:* str

---

##### `minimum_latency`<sup>Required</sup> <a name="minimum_latency" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.property.minimumLatency"></a>

```python
minimum_latency: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `srt_listener_address`<sup>Required</sup> <a name="srt_listener_address" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.property.srtListenerAddress"></a>

```python
srt_listener_address: str
```

- *Type:* str

---

##### `srt_listener_port`<sup>Required</sup> <a name="srt_listener_port" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.property.srtListenerPort"></a>

```python
srt_listener_port: str
```

- *Type:* str

---

##### `stream_id`<sup>Required</sup> <a name="stream_id" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.property.streamId"></a>

```python
stream_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MedialiveInputSrtSettingsSrtCallerSources
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSources">MedialiveInputSrtSettingsSrtCallerSources</a>

---


### MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference <a name="MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import medialive_input

medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.resetAlgorithm">reset_algorithm</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.resetPassphraseSecretArn">reset_passphrase_secret_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_algorithm` <a name="reset_algorithm" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.resetAlgorithm"></a>

```python
def reset_algorithm() -> None
```

##### `reset_passphrase_secret_arn` <a name="reset_passphrase_secret_arn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.resetPassphraseSecretArn"></a>

```python
def reset_passphrase_secret_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.property.algorithmInput">algorithm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.property.passphraseSecretArnInput">passphrase_secret_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.property.algorithm">algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.property.passphraseSecretArn">passphrase_secret_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryption">MedialiveInputSrtSettingsSrtListenerSettingsDecryption</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `algorithm_input`<sup>Optional</sup> <a name="algorithm_input" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.property.algorithmInput"></a>

```python
algorithm_input: str
```

- *Type:* str

---

##### `passphrase_secret_arn_input`<sup>Optional</sup> <a name="passphrase_secret_arn_input" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.property.passphraseSecretArnInput"></a>

```python
passphrase_secret_arn_input: str
```

- *Type:* str

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.property.algorithm"></a>

```python
algorithm: str
```

- *Type:* str

---

##### `passphrase_secret_arn`<sup>Required</sup> <a name="passphrase_secret_arn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.property.passphraseSecretArn"></a>

```python
passphrase_secret_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MedialiveInputSrtSettingsSrtListenerSettingsDecryption
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryption">MedialiveInputSrtSettingsSrtListenerSettingsDecryption</a>

---


### MedialiveInputSrtSettingsSrtListenerSettingsOutputReference <a name="MedialiveInputSrtSettingsSrtListenerSettingsOutputReference" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import medialive_input

medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.putDecryption">put_decryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.resetDecryption">reset_decryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.resetMinimumLatency">reset_minimum_latency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.resetStreamId">reset_stream_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_decryption` <a name="put_decryption" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.putDecryption"></a>

```python
def put_decryption(
  algorithm: str = None,
  passphrase_secret_arn: str = None
) -> None
```

###### `algorithm`<sup>Optional</sup> <a name="algorithm" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.putDecryption.parameter.algorithm"></a>

- *Type:* str

The algorithm used to encrypt content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#algorithm MedialiveInput#algorithm}

---

###### `passphrase_secret_arn`<sup>Optional</sup> <a name="passphrase_secret_arn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.putDecryption.parameter.passphraseSecretArn"></a>

- *Type:* str

The ARN for the secret in Secrets Manager.

Someone in your organization must create a secret and provide you with its ARN. The secret holds the passphrase that MediaLive uses to decrypt the source content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#passphrase_secret_arn MedialiveInput#passphrase_secret_arn}

---

##### `reset_decryption` <a name="reset_decryption" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.resetDecryption"></a>

```python
def reset_decryption() -> None
```

##### `reset_minimum_latency` <a name="reset_minimum_latency" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.resetMinimumLatency"></a>

```python
def reset_minimum_latency() -> None
```

##### `reset_stream_id` <a name="reset_stream_id" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.resetStreamId"></a>

```python
def reset_stream_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.property.decryption">decryption</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference">MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.property.decryptionInput">decryption_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryption">MedialiveInputSrtSettingsSrtListenerSettingsDecryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.property.minimumLatencyInput">minimum_latency_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.property.streamIdInput">stream_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.property.minimumLatency">minimum_latency</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.property.streamId">stream_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettings">MedialiveInputSrtSettingsSrtListenerSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `decryption`<sup>Required</sup> <a name="decryption" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.property.decryption"></a>

```python
decryption: MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference">MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference</a>

---

##### `decryption_input`<sup>Optional</sup> <a name="decryption_input" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.property.decryptionInput"></a>

```python
decryption_input: IResolvable | MedialiveInputSrtSettingsSrtListenerSettingsDecryption
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryption">MedialiveInputSrtSettingsSrtListenerSettingsDecryption</a>

---

##### `minimum_latency_input`<sup>Optional</sup> <a name="minimum_latency_input" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.property.minimumLatencyInput"></a>

```python
minimum_latency_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `stream_id_input`<sup>Optional</sup> <a name="stream_id_input" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.property.streamIdInput"></a>

```python
stream_id_input: str
```

- *Type:* str

---

##### `minimum_latency`<sup>Required</sup> <a name="minimum_latency" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.property.minimumLatency"></a>

```python
minimum_latency: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `stream_id`<sup>Required</sup> <a name="stream_id" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.property.streamId"></a>

```python
stream_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MedialiveInputSrtSettingsSrtListenerSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettings">MedialiveInputSrtSettingsSrtListenerSettings</a>

---


### MedialiveInputVpcOutputReference <a name="MedialiveInputVpcOutputReference" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import medialive_input

medialiveInput.MedialiveInputVpcOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.resetSecurityGroupIds">reset_security_group_ids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.resetSubnetIds">reset_subnet_ids</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_security_group_ids` <a name="reset_security_group_ids" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.resetSecurityGroupIds"></a>

```python
def reset_security_group_ids() -> None
```

##### `reset_subnet_ids` <a name="reset_subnet_ids" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.resetSubnetIds"></a>

```python
def reset_subnet_ids() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.property.securityGroupIdsInput">security_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.property.subnetIdsInput">subnet_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputVpc">MedialiveInputVpc</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `security_group_ids_input`<sup>Optional</sup> <a name="security_group_ids_input" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.property.securityGroupIdsInput"></a>

```python
security_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_ids_input`<sup>Optional</sup> <a name="subnet_ids_input" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.property.subnetIdsInput"></a>

```python
subnet_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MedialiveInputVpc
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputVpc">MedialiveInputVpc</a>

---



