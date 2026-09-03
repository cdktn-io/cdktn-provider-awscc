# `mediaconnectFlowSource` Submodule <a name="`mediaconnectFlowSource` Submodule" id="@cdktn/provider-awscc.mediaconnectFlowSource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MediaconnectFlowSourceA <a name="MediaconnectFlowSourceA" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow_source awscc_mediaconnect_flow_source}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_flow_source

mediaconnectFlowSource.MediaconnectFlowSourceA(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  description: str,
  flow_arn: str,
  name: str,
  decryption: MediaconnectFlowSourceDecryptionA = None,
  entitlement_arn: str = None,
  gateway_bridge_source: MediaconnectFlowSourceGatewayBridgeSourceA = None,
  ingest_port: typing.Union[int, float] = None,
  max_bitrate: typing.Union[int, float] = None,
  max_latency: typing.Union[int, float] = None,
  min_latency: typing.Union[int, float] = None,
  protocol: str = None,
  sender_control_port: typing.Union[int, float] = None,
  sender_ip_address: str = None,
  source_listener_address: str = None,
  source_listener_port: typing.Union[int, float] = None,
  stream_id: str = None,
  tags: IResolvable | typing.List[MediaconnectFlowSourceTagsA] = None,
  vpc_interface_name: str = None,
  whitelist_cidr: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer.parameter.description">description</a></code> | <code>str</code> | A description for the source. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer.parameter.flowArn">flow_arn</a></code> | <code>str</code> | The ARN of the flow. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the source. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer.parameter.decryption">decryption</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionA">MediaconnectFlowSourceDecryptionA</a></code> | The type of encryption that is used on the content ingested from this source. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer.parameter.entitlementArn">entitlement_arn</a></code> | <code>str</code> | The ARN of the entitlement that allows you to subscribe to content that comes from another AWS account. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer.parameter.gatewayBridgeSource">gateway_bridge_source</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceA">MediaconnectFlowSourceGatewayBridgeSourceA</a></code> | The source configuration for cloud flows receiving a stream from a bridge. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer.parameter.ingestPort">ingest_port</a></code> | <code>typing.Union[int, float]</code> | The port that the flow will be listening on for incoming content. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer.parameter.maxBitrate">max_bitrate</a></code> | <code>typing.Union[int, float]</code> | The smoothing max bitrate for RIST, RTP, and RTP-FEC streams. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer.parameter.maxLatency">max_latency</a></code> | <code>typing.Union[int, float]</code> | The maximum latency in milliseconds. This parameter applies only to RIST-based and Zixi-based streams. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer.parameter.minLatency">min_latency</a></code> | <code>typing.Union[int, float]</code> | The minimum latency in milliseconds. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer.parameter.protocol">protocol</a></code> | <code>str</code> | The protocol that is used by the source. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer.parameter.senderControlPort">sender_control_port</a></code> | <code>typing.Union[int, float]</code> | The port that the flow uses to send outbound requests to initiate connection with the sender for fujitsu-qos protocol. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer.parameter.senderIpAddress">sender_ip_address</a></code> | <code>str</code> | The IP address that the flow communicates with to initiate connection with the sender for fujitsu-qos protocol. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer.parameter.sourceListenerAddress">source_listener_address</a></code> | <code>str</code> | Source IP or domain name for SRT-caller protocol. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer.parameter.sourceListenerPort">source_listener_port</a></code> | <code>typing.Union[int, float]</code> | Source port for SRT-caller protocol. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer.parameter.streamId">stream_id</a></code> | <code>str</code> | The stream ID that you want to use for this transport. This parameter applies only to Zixi-based streams. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsA">MediaconnectFlowSourceTagsA</a>]</code> | Key-value pairs that can be used to tag and organize this flow source. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer.parameter.vpcInterfaceName">vpc_interface_name</a></code> | <code>str</code> | The name of the VPC Interface this Source is configured with. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer.parameter.whitelistCidr">whitelist_cidr</a></code> | <code>str</code> | The range of IP addresses that should be allowed to contribute content to your source. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer.parameter.description"></a>

- *Type:* str

A description for the source.

This value is not used or seen outside of the current AWS Elemental MediaConnect account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow_source#description MediaconnectFlowSourceA#description}

---

##### `flow_arn`<sup>Required</sup> <a name="flow_arn" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer.parameter.flowArn"></a>

- *Type:* str

The ARN of the flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow_source#flow_arn MediaconnectFlowSourceA#flow_arn}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer.parameter.name"></a>

- *Type:* str

The name of the source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow_source#name MediaconnectFlowSourceA#name}

---

##### `decryption`<sup>Optional</sup> <a name="decryption" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer.parameter.decryption"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionA">MediaconnectFlowSourceDecryptionA</a>

The type of encryption that is used on the content ingested from this source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow_source#decryption MediaconnectFlowSourceA#decryption}

---

##### `entitlement_arn`<sup>Optional</sup> <a name="entitlement_arn" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer.parameter.entitlementArn"></a>

- *Type:* str

The ARN of the entitlement that allows you to subscribe to content that comes from another AWS account.

The entitlement is set by the content originator and the ARN is generated as part of the originator's flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow_source#entitlement_arn MediaconnectFlowSourceA#entitlement_arn}

---

##### `gateway_bridge_source`<sup>Optional</sup> <a name="gateway_bridge_source" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer.parameter.gatewayBridgeSource"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceA">MediaconnectFlowSourceGatewayBridgeSourceA</a>

The source configuration for cloud flows receiving a stream from a bridge.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow_source#gateway_bridge_source MediaconnectFlowSourceA#gateway_bridge_source}

---

##### `ingest_port`<sup>Optional</sup> <a name="ingest_port" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer.parameter.ingestPort"></a>

- *Type:* typing.Union[int, float]

The port that the flow will be listening on for incoming content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow_source#ingest_port MediaconnectFlowSourceA#ingest_port}

---

##### `max_bitrate`<sup>Optional</sup> <a name="max_bitrate" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer.parameter.maxBitrate"></a>

- *Type:* typing.Union[int, float]

The smoothing max bitrate for RIST, RTP, and RTP-FEC streams.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow_source#max_bitrate MediaconnectFlowSourceA#max_bitrate}

---

##### `max_latency`<sup>Optional</sup> <a name="max_latency" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer.parameter.maxLatency"></a>

- *Type:* typing.Union[int, float]

The maximum latency in milliseconds. This parameter applies only to RIST-based and Zixi-based streams.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow_source#max_latency MediaconnectFlowSourceA#max_latency}

---

##### `min_latency`<sup>Optional</sup> <a name="min_latency" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer.parameter.minLatency"></a>

- *Type:* typing.Union[int, float]

The minimum latency in milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow_source#min_latency MediaconnectFlowSourceA#min_latency}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer.parameter.protocol"></a>

- *Type:* str

The protocol that is used by the source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow_source#protocol MediaconnectFlowSourceA#protocol}

---

##### `sender_control_port`<sup>Optional</sup> <a name="sender_control_port" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer.parameter.senderControlPort"></a>

- *Type:* typing.Union[int, float]

The port that the flow uses to send outbound requests to initiate connection with the sender for fujitsu-qos protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow_source#sender_control_port MediaconnectFlowSourceA#sender_control_port}

---

##### `sender_ip_address`<sup>Optional</sup> <a name="sender_ip_address" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer.parameter.senderIpAddress"></a>

- *Type:* str

The IP address that the flow communicates with to initiate connection with the sender for fujitsu-qos protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow_source#sender_ip_address MediaconnectFlowSourceA#sender_ip_address}

---

##### `source_listener_address`<sup>Optional</sup> <a name="source_listener_address" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer.parameter.sourceListenerAddress"></a>

- *Type:* str

Source IP or domain name for SRT-caller protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow_source#source_listener_address MediaconnectFlowSourceA#source_listener_address}

---

##### `source_listener_port`<sup>Optional</sup> <a name="source_listener_port" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer.parameter.sourceListenerPort"></a>

- *Type:* typing.Union[int, float]

Source port for SRT-caller protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow_source#source_listener_port MediaconnectFlowSourceA#source_listener_port}

---

##### `stream_id`<sup>Optional</sup> <a name="stream_id" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer.parameter.streamId"></a>

- *Type:* str

The stream ID that you want to use for this transport. This parameter applies only to Zixi-based streams.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow_source#stream_id MediaconnectFlowSourceA#stream_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsA">MediaconnectFlowSourceTagsA</a>]

Key-value pairs that can be used to tag and organize this flow source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow_source#tags MediaconnectFlowSourceA#tags}

---

##### `vpc_interface_name`<sup>Optional</sup> <a name="vpc_interface_name" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer.parameter.vpcInterfaceName"></a>

- *Type:* str

The name of the VPC Interface this Source is configured with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow_source#vpc_interface_name MediaconnectFlowSourceA#vpc_interface_name}

---

##### `whitelist_cidr`<sup>Optional</sup> <a name="whitelist_cidr" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer.parameter.whitelistCidr"></a>

- *Type:* str

The range of IP addresses that should be allowed to contribute content to your source.

These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow_source#whitelist_cidr MediaconnectFlowSourceA#whitelist_cidr}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.putDecryption">put_decryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.putGatewayBridgeSource">put_gateway_bridge_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetDecryption">reset_decryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetEntitlementArn">reset_entitlement_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetGatewayBridgeSource">reset_gateway_bridge_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetIngestPort">reset_ingest_port</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetMaxBitrate">reset_max_bitrate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetMaxLatency">reset_max_latency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetMinLatency">reset_min_latency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetProtocol">reset_protocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetSenderControlPort">reset_sender_control_port</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetSenderIpAddress">reset_sender_ip_address</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetSourceListenerAddress">reset_source_listener_address</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetSourceListenerPort">reset_source_listener_port</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetStreamId">reset_stream_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetVpcInterfaceName">reset_vpc_interface_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetWhitelistCidr">reset_whitelist_cidr</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_decryption` <a name="put_decryption" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.putDecryption"></a>

```python
def put_decryption(
  algorithm: str = None,
  constant_initialization_vector: str = None,
  device_id: str = None,
  key_type: str = None,
  region: str = None,
  resource_id: str = None,
  role_arn: str = None,
  secret_arn: str = None,
  url: str = None
) -> None
```

###### `algorithm`<sup>Optional</sup> <a name="algorithm" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.putDecryption.parameter.algorithm"></a>

- *Type:* str

The type of algorithm that is used for the encryption (such as aes128, aes192, or aes256).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow_source#algorithm MediaconnectFlowSourceA#algorithm}

---

###### `constant_initialization_vector`<sup>Optional</sup> <a name="constant_initialization_vector" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.putDecryption.parameter.constantInitializationVector"></a>

- *Type:* str

A 128-bit, 16-byte hex value represented by a 32-character string, to be used with the key for encrypting content.

This parameter is not valid for static key encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow_source#constant_initialization_vector MediaconnectFlowSourceA#constant_initialization_vector}

---

###### `device_id`<sup>Optional</sup> <a name="device_id" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.putDecryption.parameter.deviceId"></a>

- *Type:* str

The value of one of the devices that you configured with your digital rights management (DRM) platform key provider.

This parameter is required for SPEKE encryption and is not valid for static key encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow_source#device_id MediaconnectFlowSourceA#device_id}

---

###### `key_type`<sup>Optional</sup> <a name="key_type" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.putDecryption.parameter.keyType"></a>

- *Type:* str

The type of key that is used for the encryption.

If no keyType is provided, the service will use the default setting (static-key).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow_source#key_type MediaconnectFlowSourceA#key_type}

---

###### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.putDecryption.parameter.region"></a>

- *Type:* str

The AWS Region that the API Gateway proxy endpoint was created in.

This parameter is required for SPEKE encryption and is not valid for static key encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow_source#region MediaconnectFlowSourceA#region}

---

###### `resource_id`<sup>Optional</sup> <a name="resource_id" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.putDecryption.parameter.resourceId"></a>

- *Type:* str

An identifier for the content.

The service sends this value to the key server to identify the current endpoint. The resource ID is also known as the content ID. This parameter is required for SPEKE encryption and is not valid for static key encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow_source#resource_id MediaconnectFlowSourceA#resource_id}

---

###### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.putDecryption.parameter.roleArn"></a>

- *Type:* str

The ARN of the role that you created during setup (when you set up AWS Elemental MediaConnect as a trusted entity).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow_source#role_arn MediaconnectFlowSourceA#role_arn}

---

###### `secret_arn`<sup>Optional</sup> <a name="secret_arn" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.putDecryption.parameter.secretArn"></a>

- *Type:* str

The ARN of the secret that you created in AWS Secrets Manager to store the encryption key.

This parameter is required for static key encryption and is not valid for SPEKE encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow_source#secret_arn MediaconnectFlowSourceA#secret_arn}

---

###### `url`<sup>Optional</sup> <a name="url" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.putDecryption.parameter.url"></a>

- *Type:* str

The URL from the API Gateway proxy that you set up to talk to your key server.

This parameter is required for SPEKE encryption and is not valid for static key encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow_source#url MediaconnectFlowSourceA#url}

---

##### `put_gateway_bridge_source` <a name="put_gateway_bridge_source" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.putGatewayBridgeSource"></a>

```python
def put_gateway_bridge_source(
  bridge_arn: str = None,
  vpc_interface_attachment: MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentA = None
) -> None
```

###### `bridge_arn`<sup>Optional</sup> <a name="bridge_arn" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.putGatewayBridgeSource.parameter.bridgeArn"></a>

- *Type:* str

The ARN of the bridge feeding this flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow_source#bridge_arn MediaconnectFlowSourceA#bridge_arn}

---

###### `vpc_interface_attachment`<sup>Optional</sup> <a name="vpc_interface_attachment" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.putGatewayBridgeSource.parameter.vpcInterfaceAttachment"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentA">MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentA</a>

The name of the VPC interface attachment to use for this bridge source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow_source#vpc_interface_attachment MediaconnectFlowSourceA#vpc_interface_attachment}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[MediaconnectFlowSourceTagsA]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsA">MediaconnectFlowSourceTagsA</a>]

---

##### `reset_decryption` <a name="reset_decryption" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetDecryption"></a>

```python
def reset_decryption() -> None
```

##### `reset_entitlement_arn` <a name="reset_entitlement_arn" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetEntitlementArn"></a>

```python
def reset_entitlement_arn() -> None
```

##### `reset_gateway_bridge_source` <a name="reset_gateway_bridge_source" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetGatewayBridgeSource"></a>

```python
def reset_gateway_bridge_source() -> None
```

##### `reset_ingest_port` <a name="reset_ingest_port" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetIngestPort"></a>

```python
def reset_ingest_port() -> None
```

##### `reset_max_bitrate` <a name="reset_max_bitrate" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetMaxBitrate"></a>

```python
def reset_max_bitrate() -> None
```

##### `reset_max_latency` <a name="reset_max_latency" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetMaxLatency"></a>

```python
def reset_max_latency() -> None
```

##### `reset_min_latency` <a name="reset_min_latency" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetMinLatency"></a>

```python
def reset_min_latency() -> None
```

##### `reset_protocol` <a name="reset_protocol" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetProtocol"></a>

```python
def reset_protocol() -> None
```

##### `reset_sender_control_port` <a name="reset_sender_control_port" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetSenderControlPort"></a>

```python
def reset_sender_control_port() -> None
```

##### `reset_sender_ip_address` <a name="reset_sender_ip_address" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetSenderIpAddress"></a>

```python
def reset_sender_ip_address() -> None
```

##### `reset_source_listener_address` <a name="reset_source_listener_address" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetSourceListenerAddress"></a>

```python
def reset_source_listener_address() -> None
```

##### `reset_source_listener_port` <a name="reset_source_listener_port" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetSourceListenerPort"></a>

```python
def reset_source_listener_port() -> None
```

##### `reset_stream_id` <a name="reset_stream_id" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetStreamId"></a>

```python
def reset_stream_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_vpc_interface_name` <a name="reset_vpc_interface_name" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetVpcInterfaceName"></a>

```python
def reset_vpc_interface_name() -> None
```

##### `reset_whitelist_cidr` <a name="reset_whitelist_cidr" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetWhitelistCidr"></a>

```python
def reset_whitelist_cidr() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a MediaconnectFlowSourceA resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.isConstruct"></a>

```python
from cdktn_provider_awscc import mediaconnect_flow_source

mediaconnectFlowSource.MediaconnectFlowSourceA.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.isTerraformElement"></a>

```python
from cdktn_provider_awscc import mediaconnect_flow_source

mediaconnectFlowSource.MediaconnectFlowSourceA.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.isTerraformResource"></a>

```python
from cdktn_provider_awscc import mediaconnect_flow_source

mediaconnectFlowSource.MediaconnectFlowSourceA.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import mediaconnect_flow_source

mediaconnectFlowSource.MediaconnectFlowSourceA.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a MediaconnectFlowSourceA resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the MediaconnectFlowSourceA to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing MediaconnectFlowSourceA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow_source#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the MediaconnectFlowSourceA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.decryption">decryption</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference">MediaconnectFlowSourceDecryptionAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.gatewayBridgeSource">gateway_bridge_source</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference">MediaconnectFlowSourceGatewayBridgeSourceAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.ingestIp">ingest_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.sourceArn">source_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.sourceIngestPort">source_ingest_port</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsAList">MediaconnectFlowSourceTagsAList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.decryptionInput">decryption_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionA">MediaconnectFlowSourceDecryptionA</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.entitlementArnInput">entitlement_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.flowArnInput">flow_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.gatewayBridgeSourceInput">gateway_bridge_source_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceA">MediaconnectFlowSourceGatewayBridgeSourceA</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.ingestPortInput">ingest_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.maxBitrateInput">max_bitrate_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.maxLatencyInput">max_latency_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.minLatencyInput">min_latency_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.senderControlPortInput">sender_control_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.senderIpAddressInput">sender_ip_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.sourceListenerAddressInput">source_listener_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.sourceListenerPortInput">source_listener_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.streamIdInput">stream_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsA">MediaconnectFlowSourceTagsA</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.vpcInterfaceNameInput">vpc_interface_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.whitelistCidrInput">whitelist_cidr_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.entitlementArn">entitlement_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.flowArn">flow_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.ingestPort">ingest_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.maxBitrate">max_bitrate</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.maxLatency">max_latency</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.minLatency">min_latency</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.senderControlPort">sender_control_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.senderIpAddress">sender_ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.sourceListenerAddress">source_listener_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.sourceListenerPort">source_listener_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.streamId">stream_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.vpcInterfaceName">vpc_interface_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.whitelistCidr">whitelist_cidr</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `decryption`<sup>Required</sup> <a name="decryption" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.decryption"></a>

```python
decryption: MediaconnectFlowSourceDecryptionAOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference">MediaconnectFlowSourceDecryptionAOutputReference</a>

---

##### `gateway_bridge_source`<sup>Required</sup> <a name="gateway_bridge_source" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.gatewayBridgeSource"></a>

```python
gateway_bridge_source: MediaconnectFlowSourceGatewayBridgeSourceAOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference">MediaconnectFlowSourceGatewayBridgeSourceAOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ingest_ip`<sup>Required</sup> <a name="ingest_ip" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.ingestIp"></a>

```python
ingest_ip: str
```

- *Type:* str

---

##### `source_arn`<sup>Required</sup> <a name="source_arn" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.sourceArn"></a>

```python
source_arn: str
```

- *Type:* str

---

##### `source_ingest_port`<sup>Required</sup> <a name="source_ingest_port" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.sourceIngestPort"></a>

```python
source_ingest_port: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.tags"></a>

```python
tags: MediaconnectFlowSourceTagsAList
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsAList">MediaconnectFlowSourceTagsAList</a>

---

##### `decryption_input`<sup>Optional</sup> <a name="decryption_input" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.decryptionInput"></a>

```python
decryption_input: IResolvable | MediaconnectFlowSourceDecryptionA
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionA">MediaconnectFlowSourceDecryptionA</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `entitlement_arn_input`<sup>Optional</sup> <a name="entitlement_arn_input" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.entitlementArnInput"></a>

```python
entitlement_arn_input: str
```

- *Type:* str

---

##### `flow_arn_input`<sup>Optional</sup> <a name="flow_arn_input" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.flowArnInput"></a>

```python
flow_arn_input: str
```

- *Type:* str

---

##### `gateway_bridge_source_input`<sup>Optional</sup> <a name="gateway_bridge_source_input" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.gatewayBridgeSourceInput"></a>

```python
gateway_bridge_source_input: IResolvable | MediaconnectFlowSourceGatewayBridgeSourceA
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceA">MediaconnectFlowSourceGatewayBridgeSourceA</a>

---

##### `ingest_port_input`<sup>Optional</sup> <a name="ingest_port_input" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.ingestPortInput"></a>

```python
ingest_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_bitrate_input`<sup>Optional</sup> <a name="max_bitrate_input" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.maxBitrateInput"></a>

```python
max_bitrate_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_latency_input`<sup>Optional</sup> <a name="max_latency_input" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.maxLatencyInput"></a>

```python
max_latency_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_latency_input`<sup>Optional</sup> <a name="min_latency_input" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.minLatencyInput"></a>

```python
min_latency_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `sender_control_port_input`<sup>Optional</sup> <a name="sender_control_port_input" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.senderControlPortInput"></a>

```python
sender_control_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sender_ip_address_input`<sup>Optional</sup> <a name="sender_ip_address_input" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.senderIpAddressInput"></a>

```python
sender_ip_address_input: str
```

- *Type:* str

---

##### `source_listener_address_input`<sup>Optional</sup> <a name="source_listener_address_input" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.sourceListenerAddressInput"></a>

```python
source_listener_address_input: str
```

- *Type:* str

---

##### `source_listener_port_input`<sup>Optional</sup> <a name="source_listener_port_input" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.sourceListenerPortInput"></a>

```python
source_listener_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `stream_id_input`<sup>Optional</sup> <a name="stream_id_input" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.streamIdInput"></a>

```python
stream_id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[MediaconnectFlowSourceTagsA]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsA">MediaconnectFlowSourceTagsA</a>]

---

##### `vpc_interface_name_input`<sup>Optional</sup> <a name="vpc_interface_name_input" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.vpcInterfaceNameInput"></a>

```python
vpc_interface_name_input: str
```

- *Type:* str

---

##### `whitelist_cidr_input`<sup>Optional</sup> <a name="whitelist_cidr_input" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.whitelistCidrInput"></a>

```python
whitelist_cidr_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `entitlement_arn`<sup>Required</sup> <a name="entitlement_arn" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.entitlementArn"></a>

```python
entitlement_arn: str
```

- *Type:* str

---

##### `flow_arn`<sup>Required</sup> <a name="flow_arn" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.flowArn"></a>

```python
flow_arn: str
```

- *Type:* str

---

##### `ingest_port`<sup>Required</sup> <a name="ingest_port" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.ingestPort"></a>

```python
ingest_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_bitrate`<sup>Required</sup> <a name="max_bitrate" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.maxBitrate"></a>

```python
max_bitrate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_latency`<sup>Required</sup> <a name="max_latency" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.maxLatency"></a>

```python
max_latency: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_latency`<sup>Required</sup> <a name="min_latency" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.minLatency"></a>

```python
min_latency: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `sender_control_port`<sup>Required</sup> <a name="sender_control_port" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.senderControlPort"></a>

```python
sender_control_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sender_ip_address`<sup>Required</sup> <a name="sender_ip_address" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.senderIpAddress"></a>

```python
sender_ip_address: str
```

- *Type:* str

---

##### `source_listener_address`<sup>Required</sup> <a name="source_listener_address" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.sourceListenerAddress"></a>

```python
source_listener_address: str
```

- *Type:* str

---

##### `source_listener_port`<sup>Required</sup> <a name="source_listener_port" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.sourceListenerPort"></a>

```python
source_listener_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `stream_id`<sup>Required</sup> <a name="stream_id" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.streamId"></a>

```python
stream_id: str
```

- *Type:* str

---

##### `vpc_interface_name`<sup>Required</sup> <a name="vpc_interface_name" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.vpcInterfaceName"></a>

```python
vpc_interface_name: str
```

- *Type:* str

---

##### `whitelist_cidr`<sup>Required</sup> <a name="whitelist_cidr" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.whitelistCidr"></a>

```python
whitelist_cidr: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MediaconnectFlowSourceAConfig <a name="MediaconnectFlowSourceAConfig" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_flow_source

mediaconnectFlowSource.MediaconnectFlowSourceAConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  description: str,
  flow_arn: str,
  name: str,
  decryption: MediaconnectFlowSourceDecryptionA = None,
  entitlement_arn: str = None,
  gateway_bridge_source: MediaconnectFlowSourceGatewayBridgeSourceA = None,
  ingest_port: typing.Union[int, float] = None,
  max_bitrate: typing.Union[int, float] = None,
  max_latency: typing.Union[int, float] = None,
  min_latency: typing.Union[int, float] = None,
  protocol: str = None,
  sender_control_port: typing.Union[int, float] = None,
  sender_ip_address: str = None,
  source_listener_address: str = None,
  source_listener_port: typing.Union[int, float] = None,
  stream_id: str = None,
  tags: IResolvable | typing.List[MediaconnectFlowSourceTagsA] = None,
  vpc_interface_name: str = None,
  whitelist_cidr: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.description">description</a></code> | <code>str</code> | A description for the source. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.flowArn">flow_arn</a></code> | <code>str</code> | The ARN of the flow. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.name">name</a></code> | <code>str</code> | The name of the source. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.decryption">decryption</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionA">MediaconnectFlowSourceDecryptionA</a></code> | The type of encryption that is used on the content ingested from this source. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.entitlementArn">entitlement_arn</a></code> | <code>str</code> | The ARN of the entitlement that allows you to subscribe to content that comes from another AWS account. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.gatewayBridgeSource">gateway_bridge_source</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceA">MediaconnectFlowSourceGatewayBridgeSourceA</a></code> | The source configuration for cloud flows receiving a stream from a bridge. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.ingestPort">ingest_port</a></code> | <code>typing.Union[int, float]</code> | The port that the flow will be listening on for incoming content. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.maxBitrate">max_bitrate</a></code> | <code>typing.Union[int, float]</code> | The smoothing max bitrate for RIST, RTP, and RTP-FEC streams. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.maxLatency">max_latency</a></code> | <code>typing.Union[int, float]</code> | The maximum latency in milliseconds. This parameter applies only to RIST-based and Zixi-based streams. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.minLatency">min_latency</a></code> | <code>typing.Union[int, float]</code> | The minimum latency in milliseconds. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.protocol">protocol</a></code> | <code>str</code> | The protocol that is used by the source. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.senderControlPort">sender_control_port</a></code> | <code>typing.Union[int, float]</code> | The port that the flow uses to send outbound requests to initiate connection with the sender for fujitsu-qos protocol. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.senderIpAddress">sender_ip_address</a></code> | <code>str</code> | The IP address that the flow communicates with to initiate connection with the sender for fujitsu-qos protocol. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.sourceListenerAddress">source_listener_address</a></code> | <code>str</code> | Source IP or domain name for SRT-caller protocol. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.sourceListenerPort">source_listener_port</a></code> | <code>typing.Union[int, float]</code> | Source port for SRT-caller protocol. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.streamId">stream_id</a></code> | <code>str</code> | The stream ID that you want to use for this transport. This parameter applies only to Zixi-based streams. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsA">MediaconnectFlowSourceTagsA</a>]</code> | Key-value pairs that can be used to tag and organize this flow source. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.vpcInterfaceName">vpc_interface_name</a></code> | <code>str</code> | The name of the VPC Interface this Source is configured with. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.whitelistCidr">whitelist_cidr</a></code> | <code>str</code> | The range of IP addresses that should be allowed to contribute content to your source. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A description for the source.

This value is not used or seen outside of the current AWS Elemental MediaConnect account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow_source#description MediaconnectFlowSourceA#description}

---

##### `flow_arn`<sup>Required</sup> <a name="flow_arn" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.flowArn"></a>

```python
flow_arn: str
```

- *Type:* str

The ARN of the flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow_source#flow_arn MediaconnectFlowSourceA#flow_arn}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow_source#name MediaconnectFlowSourceA#name}

---

##### `decryption`<sup>Optional</sup> <a name="decryption" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.decryption"></a>

```python
decryption: MediaconnectFlowSourceDecryptionA
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionA">MediaconnectFlowSourceDecryptionA</a>

The type of encryption that is used on the content ingested from this source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow_source#decryption MediaconnectFlowSourceA#decryption}

---

##### `entitlement_arn`<sup>Optional</sup> <a name="entitlement_arn" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.entitlementArn"></a>

```python
entitlement_arn: str
```

- *Type:* str

The ARN of the entitlement that allows you to subscribe to content that comes from another AWS account.

The entitlement is set by the content originator and the ARN is generated as part of the originator's flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow_source#entitlement_arn MediaconnectFlowSourceA#entitlement_arn}

---

##### `gateway_bridge_source`<sup>Optional</sup> <a name="gateway_bridge_source" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.gatewayBridgeSource"></a>

```python
gateway_bridge_source: MediaconnectFlowSourceGatewayBridgeSourceA
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceA">MediaconnectFlowSourceGatewayBridgeSourceA</a>

The source configuration for cloud flows receiving a stream from a bridge.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow_source#gateway_bridge_source MediaconnectFlowSourceA#gateway_bridge_source}

---

##### `ingest_port`<sup>Optional</sup> <a name="ingest_port" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.ingestPort"></a>

```python
ingest_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The port that the flow will be listening on for incoming content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow_source#ingest_port MediaconnectFlowSourceA#ingest_port}

---

##### `max_bitrate`<sup>Optional</sup> <a name="max_bitrate" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.maxBitrate"></a>

```python
max_bitrate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The smoothing max bitrate for RIST, RTP, and RTP-FEC streams.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow_source#max_bitrate MediaconnectFlowSourceA#max_bitrate}

---

##### `max_latency`<sup>Optional</sup> <a name="max_latency" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.maxLatency"></a>

```python
max_latency: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum latency in milliseconds. This parameter applies only to RIST-based and Zixi-based streams.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow_source#max_latency MediaconnectFlowSourceA#max_latency}

---

##### `min_latency`<sup>Optional</sup> <a name="min_latency" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.minLatency"></a>

```python
min_latency: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The minimum latency in milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow_source#min_latency MediaconnectFlowSourceA#min_latency}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

The protocol that is used by the source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow_source#protocol MediaconnectFlowSourceA#protocol}

---

##### `sender_control_port`<sup>Optional</sup> <a name="sender_control_port" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.senderControlPort"></a>

```python
sender_control_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The port that the flow uses to send outbound requests to initiate connection with the sender for fujitsu-qos protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow_source#sender_control_port MediaconnectFlowSourceA#sender_control_port}

---

##### `sender_ip_address`<sup>Optional</sup> <a name="sender_ip_address" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.senderIpAddress"></a>

```python
sender_ip_address: str
```

- *Type:* str

The IP address that the flow communicates with to initiate connection with the sender for fujitsu-qos protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow_source#sender_ip_address MediaconnectFlowSourceA#sender_ip_address}

---

##### `source_listener_address`<sup>Optional</sup> <a name="source_listener_address" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.sourceListenerAddress"></a>

```python
source_listener_address: str
```

- *Type:* str

Source IP or domain name for SRT-caller protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow_source#source_listener_address MediaconnectFlowSourceA#source_listener_address}

---

##### `source_listener_port`<sup>Optional</sup> <a name="source_listener_port" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.sourceListenerPort"></a>

```python
source_listener_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Source port for SRT-caller protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow_source#source_listener_port MediaconnectFlowSourceA#source_listener_port}

---

##### `stream_id`<sup>Optional</sup> <a name="stream_id" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.streamId"></a>

```python
stream_id: str
```

- *Type:* str

The stream ID that you want to use for this transport. This parameter applies only to Zixi-based streams.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow_source#stream_id MediaconnectFlowSourceA#stream_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[MediaconnectFlowSourceTagsA]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsA">MediaconnectFlowSourceTagsA</a>]

Key-value pairs that can be used to tag and organize this flow source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow_source#tags MediaconnectFlowSourceA#tags}

---

##### `vpc_interface_name`<sup>Optional</sup> <a name="vpc_interface_name" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.vpcInterfaceName"></a>

```python
vpc_interface_name: str
```

- *Type:* str

The name of the VPC Interface this Source is configured with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow_source#vpc_interface_name MediaconnectFlowSourceA#vpc_interface_name}

---

##### `whitelist_cidr`<sup>Optional</sup> <a name="whitelist_cidr" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.whitelistCidr"></a>

```python
whitelist_cidr: str
```

- *Type:* str

The range of IP addresses that should be allowed to contribute content to your source.

These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow_source#whitelist_cidr MediaconnectFlowSourceA#whitelist_cidr}

---

### MediaconnectFlowSourceDecryptionA <a name="MediaconnectFlowSourceDecryptionA" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionA"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionA.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_flow_source

mediaconnectFlowSource.MediaconnectFlowSourceDecryptionA(
  algorithm: str = None,
  constant_initialization_vector: str = None,
  device_id: str = None,
  key_type: str = None,
  region: str = None,
  resource_id: str = None,
  role_arn: str = None,
  secret_arn: str = None,
  url: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionA.property.algorithm">algorithm</a></code> | <code>str</code> | The type of algorithm that is used for the encryption (such as aes128, aes192, or aes256). |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionA.property.constantInitializationVector">constant_initialization_vector</a></code> | <code>str</code> | A 128-bit, 16-byte hex value represented by a 32-character string, to be used with the key for encrypting content. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionA.property.deviceId">device_id</a></code> | <code>str</code> | The value of one of the devices that you configured with your digital rights management (DRM) platform key provider. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionA.property.keyType">key_type</a></code> | <code>str</code> | The type of key that is used for the encryption. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionA.property.region">region</a></code> | <code>str</code> | The AWS Region that the API Gateway proxy endpoint was created in. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionA.property.resourceId">resource_id</a></code> | <code>str</code> | An identifier for the content. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionA.property.roleArn">role_arn</a></code> | <code>str</code> | The ARN of the role that you created during setup (when you set up AWS Elemental MediaConnect as a trusted entity). |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionA.property.secretArn">secret_arn</a></code> | <code>str</code> | The ARN of the secret that you created in AWS Secrets Manager to store the encryption key. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionA.property.url">url</a></code> | <code>str</code> | The URL from the API Gateway proxy that you set up to talk to your key server. |

---

##### `algorithm`<sup>Optional</sup> <a name="algorithm" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionA.property.algorithm"></a>

```python
algorithm: str
```

- *Type:* str

The type of algorithm that is used for the encryption (such as aes128, aes192, or aes256).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow_source#algorithm MediaconnectFlowSourceA#algorithm}

---

##### `constant_initialization_vector`<sup>Optional</sup> <a name="constant_initialization_vector" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionA.property.constantInitializationVector"></a>

```python
constant_initialization_vector: str
```

- *Type:* str

A 128-bit, 16-byte hex value represented by a 32-character string, to be used with the key for encrypting content.

This parameter is not valid for static key encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow_source#constant_initialization_vector MediaconnectFlowSourceA#constant_initialization_vector}

---

##### `device_id`<sup>Optional</sup> <a name="device_id" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionA.property.deviceId"></a>

```python
device_id: str
```

- *Type:* str

The value of one of the devices that you configured with your digital rights management (DRM) platform key provider.

This parameter is required for SPEKE encryption and is not valid for static key encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow_source#device_id MediaconnectFlowSourceA#device_id}

---

##### `key_type`<sup>Optional</sup> <a name="key_type" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionA.property.keyType"></a>

```python
key_type: str
```

- *Type:* str

The type of key that is used for the encryption.

If no keyType is provided, the service will use the default setting (static-key).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow_source#key_type MediaconnectFlowSourceA#key_type}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionA.property.region"></a>

```python
region: str
```

- *Type:* str

The AWS Region that the API Gateway proxy endpoint was created in.

This parameter is required for SPEKE encryption and is not valid for static key encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow_source#region MediaconnectFlowSourceA#region}

---

##### `resource_id`<sup>Optional</sup> <a name="resource_id" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionA.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

An identifier for the content.

The service sends this value to the key server to identify the current endpoint. The resource ID is also known as the content ID. This parameter is required for SPEKE encryption and is not valid for static key encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow_source#resource_id MediaconnectFlowSourceA#resource_id}

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionA.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

The ARN of the role that you created during setup (when you set up AWS Elemental MediaConnect as a trusted entity).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow_source#role_arn MediaconnectFlowSourceA#role_arn}

---

##### `secret_arn`<sup>Optional</sup> <a name="secret_arn" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionA.property.secretArn"></a>

```python
secret_arn: str
```

- *Type:* str

The ARN of the secret that you created in AWS Secrets Manager to store the encryption key.

This parameter is required for static key encryption and is not valid for SPEKE encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow_source#secret_arn MediaconnectFlowSourceA#secret_arn}

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionA.property.url"></a>

```python
url: str
```

- *Type:* str

The URL from the API Gateway proxy that you set up to talk to your key server.

This parameter is required for SPEKE encryption and is not valid for static key encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow_source#url MediaconnectFlowSourceA#url}

---

### MediaconnectFlowSourceGatewayBridgeSourceA <a name="MediaconnectFlowSourceGatewayBridgeSourceA" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceA"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceA.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_flow_source

mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceA(
  bridge_arn: str = None,
  vpc_interface_attachment: MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentA = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceA.property.bridgeArn">bridge_arn</a></code> | <code>str</code> | The ARN of the bridge feeding this flow. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceA.property.vpcInterfaceAttachment">vpc_interface_attachment</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentA">MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentA</a></code> | The name of the VPC interface attachment to use for this bridge source. |

---

##### `bridge_arn`<sup>Optional</sup> <a name="bridge_arn" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceA.property.bridgeArn"></a>

```python
bridge_arn: str
```

- *Type:* str

The ARN of the bridge feeding this flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow_source#bridge_arn MediaconnectFlowSourceA#bridge_arn}

---

##### `vpc_interface_attachment`<sup>Optional</sup> <a name="vpc_interface_attachment" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceA.property.vpcInterfaceAttachment"></a>

```python
vpc_interface_attachment: MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentA
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentA">MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentA</a>

The name of the VPC interface attachment to use for this bridge source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow_source#vpc_interface_attachment MediaconnectFlowSourceA#vpc_interface_attachment}

---

### MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentA <a name="MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentA" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentA"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentA.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_flow_source

mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentA(
  vpc_interface_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentA.property.vpcInterfaceName">vpc_interface_name</a></code> | <code>str</code> | The name of the VPC interface to use for this resource. |

---

##### `vpc_interface_name`<sup>Optional</sup> <a name="vpc_interface_name" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentA.property.vpcInterfaceName"></a>

```python
vpc_interface_name: str
```

- *Type:* str

The name of the VPC interface to use for this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow_source#vpc_interface_name MediaconnectFlowSourceA#vpc_interface_name}

---

### MediaconnectFlowSourceTagsA <a name="MediaconnectFlowSourceTagsA" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsA"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsA.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_flow_source

mediaconnectFlowSource.MediaconnectFlowSourceTagsA(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsA.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow_source#key MediaconnectFlowSourceA#key}. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsA.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow_source#value MediaconnectFlowSourceA#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsA.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow_source#key MediaconnectFlowSourceA#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsA.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow_source#value MediaconnectFlowSourceA#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### MediaconnectFlowSourceDecryptionAOutputReference <a name="MediaconnectFlowSourceDecryptionAOutputReference" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_flow_source

mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.resetAlgorithm">reset_algorithm</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.resetConstantInitializationVector">reset_constant_initialization_vector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.resetDeviceId">reset_device_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.resetKeyType">reset_key_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.resetResourceId">reset_resource_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.resetRoleArn">reset_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.resetSecretArn">reset_secret_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.resetUrl">reset_url</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_algorithm` <a name="reset_algorithm" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.resetAlgorithm"></a>

```python
def reset_algorithm() -> None
```

##### `reset_constant_initialization_vector` <a name="reset_constant_initialization_vector" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.resetConstantInitializationVector"></a>

```python
def reset_constant_initialization_vector() -> None
```

##### `reset_device_id` <a name="reset_device_id" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.resetDeviceId"></a>

```python
def reset_device_id() -> None
```

##### `reset_key_type` <a name="reset_key_type" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.resetKeyType"></a>

```python
def reset_key_type() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_resource_id` <a name="reset_resource_id" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.resetResourceId"></a>

```python
def reset_resource_id() -> None
```

##### `reset_role_arn` <a name="reset_role_arn" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.resetRoleArn"></a>

```python
def reset_role_arn() -> None
```

##### `reset_secret_arn` <a name="reset_secret_arn" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.resetSecretArn"></a>

```python
def reset_secret_arn() -> None
```

##### `reset_url` <a name="reset_url" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.resetUrl"></a>

```python
def reset_url() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.algorithmInput">algorithm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.constantInitializationVectorInput">constant_initialization_vector_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.deviceIdInput">device_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.keyTypeInput">key_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.resourceIdInput">resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.secretArnInput">secret_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.urlInput">url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.algorithm">algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.constantInitializationVector">constant_initialization_vector</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.deviceId">device_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.keyType">key_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.resourceId">resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.secretArn">secret_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionA">MediaconnectFlowSourceDecryptionA</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `algorithm_input`<sup>Optional</sup> <a name="algorithm_input" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.algorithmInput"></a>

```python
algorithm_input: str
```

- *Type:* str

---

##### `constant_initialization_vector_input`<sup>Optional</sup> <a name="constant_initialization_vector_input" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.constantInitializationVectorInput"></a>

```python
constant_initialization_vector_input: str
```

- *Type:* str

---

##### `device_id_input`<sup>Optional</sup> <a name="device_id_input" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.deviceIdInput"></a>

```python
device_id_input: str
```

- *Type:* str

---

##### `key_type_input`<sup>Optional</sup> <a name="key_type_input" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.keyTypeInput"></a>

```python
key_type_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `resource_id_input`<sup>Optional</sup> <a name="resource_id_input" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.resourceIdInput"></a>

```python
resource_id_input: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `secret_arn_input`<sup>Optional</sup> <a name="secret_arn_input" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.secretArnInput"></a>

```python
secret_arn_input: str
```

- *Type:* str

---

##### `url_input`<sup>Optional</sup> <a name="url_input" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.urlInput"></a>

```python
url_input: str
```

- *Type:* str

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.algorithm"></a>

```python
algorithm: str
```

- *Type:* str

---

##### `constant_initialization_vector`<sup>Required</sup> <a name="constant_initialization_vector" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.constantInitializationVector"></a>

```python
constant_initialization_vector: str
```

- *Type:* str

---

##### `device_id`<sup>Required</sup> <a name="device_id" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.deviceId"></a>

```python
device_id: str
```

- *Type:* str

---

##### `key_type`<sup>Required</sup> <a name="key_type" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.keyType"></a>

```python
key_type: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `secret_arn`<sup>Required</sup> <a name="secret_arn" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.secretArn"></a>

```python
secret_arn: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediaconnectFlowSourceDecryptionA
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionA">MediaconnectFlowSourceDecryptionA</a>

---


### MediaconnectFlowSourceGatewayBridgeSourceAOutputReference <a name="MediaconnectFlowSourceGatewayBridgeSourceAOutputReference" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_flow_source

mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.putVpcInterfaceAttachment">put_vpc_interface_attachment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.resetBridgeArn">reset_bridge_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.resetVpcInterfaceAttachment">reset_vpc_interface_attachment</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_vpc_interface_attachment` <a name="put_vpc_interface_attachment" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.putVpcInterfaceAttachment"></a>

```python
def put_vpc_interface_attachment(
  vpc_interface_name: str = None
) -> None
```

###### `vpc_interface_name`<sup>Optional</sup> <a name="vpc_interface_name" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.putVpcInterfaceAttachment.parameter.vpcInterfaceName"></a>

- *Type:* str

The name of the VPC interface to use for this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_flow_source#vpc_interface_name MediaconnectFlowSourceA#vpc_interface_name}

---

##### `reset_bridge_arn` <a name="reset_bridge_arn" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.resetBridgeArn"></a>

```python
def reset_bridge_arn() -> None
```

##### `reset_vpc_interface_attachment` <a name="reset_vpc_interface_attachment" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.resetVpcInterfaceAttachment"></a>

```python
def reset_vpc_interface_attachment() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.property.vpcInterfaceAttachment">vpc_interface_attachment</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference">MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.property.bridgeArnInput">bridge_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.property.vpcInterfaceAttachmentInput">vpc_interface_attachment_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentA">MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentA</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.property.bridgeArn">bridge_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceA">MediaconnectFlowSourceGatewayBridgeSourceA</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `vpc_interface_attachment`<sup>Required</sup> <a name="vpc_interface_attachment" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.property.vpcInterfaceAttachment"></a>

```python
vpc_interface_attachment: MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference">MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference</a>

---

##### `bridge_arn_input`<sup>Optional</sup> <a name="bridge_arn_input" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.property.bridgeArnInput"></a>

```python
bridge_arn_input: str
```

- *Type:* str

---

##### `vpc_interface_attachment_input`<sup>Optional</sup> <a name="vpc_interface_attachment_input" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.property.vpcInterfaceAttachmentInput"></a>

```python
vpc_interface_attachment_input: IResolvable | MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentA
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentA">MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentA</a>

---

##### `bridge_arn`<sup>Required</sup> <a name="bridge_arn" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.property.bridgeArn"></a>

```python
bridge_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediaconnectFlowSourceGatewayBridgeSourceA
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceA">MediaconnectFlowSourceGatewayBridgeSourceA</a>

---


### MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference <a name="MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_flow_source

mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.resetVpcInterfaceName">reset_vpc_interface_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_vpc_interface_name` <a name="reset_vpc_interface_name" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.resetVpcInterfaceName"></a>

```python
def reset_vpc_interface_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.property.vpcInterfaceNameInput">vpc_interface_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.property.vpcInterfaceName">vpc_interface_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentA">MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentA</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `vpc_interface_name_input`<sup>Optional</sup> <a name="vpc_interface_name_input" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.property.vpcInterfaceNameInput"></a>

```python
vpc_interface_name_input: str
```

- *Type:* str

---

##### `vpc_interface_name`<sup>Required</sup> <a name="vpc_interface_name" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.property.vpcInterfaceName"></a>

```python
vpc_interface_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentA
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentA">MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentA</a>

---


### MediaconnectFlowSourceTagsAList <a name="MediaconnectFlowSourceTagsAList" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsAList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsAList.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_flow_source

mediaconnectFlowSource.MediaconnectFlowSourceTagsAList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsAList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsAList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsAList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsAList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsAList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsAList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsAList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsAList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsAList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsAList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsAList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsAList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsAList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsAList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsAList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsAList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsAList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsAList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MediaconnectFlowSourceTagsAOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsAList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsAList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsAList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsAList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsA">MediaconnectFlowSourceTagsA</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsAList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsAList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsAList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[MediaconnectFlowSourceTagsA]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsA">MediaconnectFlowSourceTagsA</a>]

---


### MediaconnectFlowSourceTagsAOutputReference <a name="MediaconnectFlowSourceTagsAOutputReference" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsAOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_flow_source

mediaconnectFlowSource.MediaconnectFlowSourceTagsAOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsAOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsAOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsAOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsAOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsAOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsAOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsAOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsAOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsAOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsAOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsAOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsAOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsAOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsAOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsAOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsAOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsAOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsAOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsAOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsAOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsAOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsAOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsAOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsAOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsAOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsAOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsAOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsAOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsAOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsAOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsAOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsAOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsAOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsAOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsAOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsAOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsAOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsAOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsAOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsAOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsAOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsAOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsA">MediaconnectFlowSourceTagsA</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsAOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsAOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsAOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsAOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsAOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsAOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsAOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediaconnectFlowSourceTagsA
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsA">MediaconnectFlowSourceTagsA</a>

---



