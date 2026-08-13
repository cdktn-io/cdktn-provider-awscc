# `mediaconnectFlowOutput` Submodule <a name="`mediaconnectFlowOutput` Submodule" id="@cdktn/provider-awscc.mediaconnectFlowOutput"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MediaconnectFlowOutput <a name="MediaconnectFlowOutput" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output awscc_mediaconnect_flow_output}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_flow_output

mediaconnectFlowOutput.MediaconnectFlowOutput(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  flow_arn: str,
  cidr_allow_list: typing.List[str] = None,
  description: str = None,
  destination: str = None,
  encryption: MediaconnectFlowOutputEncryption = None,
  max_latency: typing.Union[int, float] = None,
  media_stream_output_configurations: IResolvable | typing.List[MediaconnectFlowOutputMediaStreamOutputConfigurations] = None,
  min_latency: typing.Union[int, float] = None,
  name: str = None,
  ndi_output_timecode_source: str = None,
  ndi_program_name: str = None,
  ndi_speed_hq_quality: typing.Union[int, float] = None,
  output_status: str = None,
  port: typing.Union[int, float] = None,
  protocol: str = None,
  remote_id: str = None,
  router_integration_state: str = None,
  router_integration_transit_encryption: MediaconnectFlowOutputRouterIntegrationTransitEncryption = None,
  smoothing_latency: typing.Union[int, float] = None,
  stream_id: str = None,
  tags: IResolvable | typing.List[MediaconnectFlowOutputTags] = None,
  vpc_interface_attachment: MediaconnectFlowOutputVpcInterfaceAttachment = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.Initializer.parameter.flowArn">flow_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN), a unique identifier for any AWS resource, of the flow. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.Initializer.parameter.cidrAllowList">cidr_allow_list</a></code> | <code>typing.List[str]</code> | The range of IP addresses that should be allowed to initiate output requests to this flow. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.Initializer.parameter.description">description</a></code> | <code>str</code> | A description of the output. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.Initializer.parameter.destination">destination</a></code> | <code>str</code> | The address where you want to send the output. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.Initializer.parameter.encryption">encryption</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryption">MediaconnectFlowOutputEncryption</a></code> | The type of key used for the encryption. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.Initializer.parameter.maxLatency">max_latency</a></code> | <code>typing.Union[int, float]</code> | The maximum latency in milliseconds. This parameter applies only to RIST-based and Zixi-based streams. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.Initializer.parameter.mediaStreamOutputConfigurations">media_stream_output_configurations</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurations">MediaconnectFlowOutputMediaStreamOutputConfigurations</a>]</code> | The definition for each media stream that is associated with the output. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.Initializer.parameter.minLatency">min_latency</a></code> | <code>typing.Union[int, float]</code> | The minimum latency in milliseconds. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the output. This value must be unique within the current flow. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.Initializer.parameter.ndiOutputTimecodeSource">ndi_output_timecode_source</a></code> | <code>str</code> | The timecode source for the NDI output. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.Initializer.parameter.ndiProgramName">ndi_program_name</a></code> | <code>str</code> | A suffix for the names of the NDI sources that the flow creates. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.Initializer.parameter.ndiSpeedHqQuality">ndi_speed_hq_quality</a></code> | <code>typing.Union[int, float]</code> | A quality setting for the NDI Speed HQ encoder. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.Initializer.parameter.outputStatus">output_status</a></code> | <code>str</code> | An indication of whether the output should transmit data or not. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.Initializer.parameter.port">port</a></code> | <code>typing.Union[int, float]</code> | The port to use when content is distributed to this output. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.Initializer.parameter.protocol">protocol</a></code> | <code>str</code> | The protocol that is used by the source or output. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.Initializer.parameter.remoteId">remote_id</a></code> | <code>str</code> | The remote ID for the Zixi-pull stream. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.Initializer.parameter.routerIntegrationState">router_integration_state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#router_integration_state MediaconnectFlowOutput#router_integration_state}. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.Initializer.parameter.routerIntegrationTransitEncryption">router_integration_transit_encryption</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryption">MediaconnectFlowOutputRouterIntegrationTransitEncryption</a></code> | The configuration that defines how content is encrypted during transit between the MediaConnect router and a MediaConnect flow. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.Initializer.parameter.smoothingLatency">smoothing_latency</a></code> | <code>typing.Union[int, float]</code> | The smoothing latency in milliseconds for RIST, RTP, and RTP-FEC streams. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.Initializer.parameter.streamId">stream_id</a></code> | <code>str</code> | The stream ID that you want to use for this transport. This parameter applies only to Zixi-based streams. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTags">MediaconnectFlowOutputTags</a>]</code> | Key-value pairs that can be used to tag and organize this flow output. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.Initializer.parameter.vpcInterfaceAttachment">vpc_interface_attachment</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachment">MediaconnectFlowOutputVpcInterfaceAttachment</a></code> | The name of the VPC interface attachment to use for this output. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `flow_arn`<sup>Required</sup> <a name="flow_arn" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.Initializer.parameter.flowArn"></a>

- *Type:* str

The Amazon Resource Name (ARN), a unique identifier for any AWS resource, of the flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#flow_arn MediaconnectFlowOutput#flow_arn}

---

##### `cidr_allow_list`<sup>Optional</sup> <a name="cidr_allow_list" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.Initializer.parameter.cidrAllowList"></a>

- *Type:* typing.List[str]

The range of IP addresses that should be allowed to initiate output requests to this flow.

These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#cidr_allow_list MediaconnectFlowOutput#cidr_allow_list}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.Initializer.parameter.description"></a>

- *Type:* str

A description of the output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#description MediaconnectFlowOutput#description}

---

##### `destination`<sup>Optional</sup> <a name="destination" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.Initializer.parameter.destination"></a>

- *Type:* str

The address where you want to send the output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#destination MediaconnectFlowOutput#destination}

---

##### `encryption`<sup>Optional</sup> <a name="encryption" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.Initializer.parameter.encryption"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryption">MediaconnectFlowOutputEncryption</a>

The type of key used for the encryption.

If no keyType is provided, the service will use the default setting (static-key).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#encryption MediaconnectFlowOutput#encryption}

---

##### `max_latency`<sup>Optional</sup> <a name="max_latency" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.Initializer.parameter.maxLatency"></a>

- *Type:* typing.Union[int, float]

The maximum latency in milliseconds. This parameter applies only to RIST-based and Zixi-based streams.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#max_latency MediaconnectFlowOutput#max_latency}

---

##### `media_stream_output_configurations`<sup>Optional</sup> <a name="media_stream_output_configurations" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.Initializer.parameter.mediaStreamOutputConfigurations"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurations">MediaconnectFlowOutputMediaStreamOutputConfigurations</a>]

The definition for each media stream that is associated with the output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#media_stream_output_configurations MediaconnectFlowOutput#media_stream_output_configurations}

---

##### `min_latency`<sup>Optional</sup> <a name="min_latency" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.Initializer.parameter.minLatency"></a>

- *Type:* typing.Union[int, float]

The minimum latency in milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#min_latency MediaconnectFlowOutput#min_latency}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.Initializer.parameter.name"></a>

- *Type:* str

The name of the output. This value must be unique within the current flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#name MediaconnectFlowOutput#name}

---

##### `ndi_output_timecode_source`<sup>Optional</sup> <a name="ndi_output_timecode_source" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.Initializer.parameter.ndiOutputTimecodeSource"></a>

- *Type:* str

The timecode source for the NDI output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#ndi_output_timecode_source MediaconnectFlowOutput#ndi_output_timecode_source}

---

##### `ndi_program_name`<sup>Optional</sup> <a name="ndi_program_name" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.Initializer.parameter.ndiProgramName"></a>

- *Type:* str

A suffix for the names of the NDI sources that the flow creates.

If a custom name isn't specified, MediaConnect uses the output name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#ndi_program_name MediaconnectFlowOutput#ndi_program_name}

---

##### `ndi_speed_hq_quality`<sup>Optional</sup> <a name="ndi_speed_hq_quality" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.Initializer.parameter.ndiSpeedHqQuality"></a>

- *Type:* typing.Union[int, float]

A quality setting for the NDI Speed HQ encoder.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#ndi_speed_hq_quality MediaconnectFlowOutput#ndi_speed_hq_quality}

---

##### `output_status`<sup>Optional</sup> <a name="output_status" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.Initializer.parameter.outputStatus"></a>

- *Type:* str

An indication of whether the output should transmit data or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#output_status MediaconnectFlowOutput#output_status}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.Initializer.parameter.port"></a>

- *Type:* typing.Union[int, float]

The port to use when content is distributed to this output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#port MediaconnectFlowOutput#port}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.Initializer.parameter.protocol"></a>

- *Type:* str

The protocol that is used by the source or output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#protocol MediaconnectFlowOutput#protocol}

---

##### `remote_id`<sup>Optional</sup> <a name="remote_id" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.Initializer.parameter.remoteId"></a>

- *Type:* str

The remote ID for the Zixi-pull stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#remote_id MediaconnectFlowOutput#remote_id}

---

##### `router_integration_state`<sup>Optional</sup> <a name="router_integration_state" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.Initializer.parameter.routerIntegrationState"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#router_integration_state MediaconnectFlowOutput#router_integration_state}.

---

##### `router_integration_transit_encryption`<sup>Optional</sup> <a name="router_integration_transit_encryption" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.Initializer.parameter.routerIntegrationTransitEncryption"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryption">MediaconnectFlowOutputRouterIntegrationTransitEncryption</a>

The configuration that defines how content is encrypted during transit between the MediaConnect router and a MediaConnect flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#router_integration_transit_encryption MediaconnectFlowOutput#router_integration_transit_encryption}

---

##### `smoothing_latency`<sup>Optional</sup> <a name="smoothing_latency" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.Initializer.parameter.smoothingLatency"></a>

- *Type:* typing.Union[int, float]

The smoothing latency in milliseconds for RIST, RTP, and RTP-FEC streams.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#smoothing_latency MediaconnectFlowOutput#smoothing_latency}

---

##### `stream_id`<sup>Optional</sup> <a name="stream_id" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.Initializer.parameter.streamId"></a>

- *Type:* str

The stream ID that you want to use for this transport. This parameter applies only to Zixi-based streams.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#stream_id MediaconnectFlowOutput#stream_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTags">MediaconnectFlowOutputTags</a>]

Key-value pairs that can be used to tag and organize this flow output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#tags MediaconnectFlowOutput#tags}

---

##### `vpc_interface_attachment`<sup>Optional</sup> <a name="vpc_interface_attachment" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.Initializer.parameter.vpcInterfaceAttachment"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachment">MediaconnectFlowOutputVpcInterfaceAttachment</a>

The name of the VPC interface attachment to use for this output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#vpc_interface_attachment MediaconnectFlowOutput#vpc_interface_attachment}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.putEncryption">put_encryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.putMediaStreamOutputConfigurations">put_media_stream_output_configurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.putRouterIntegrationTransitEncryption">put_router_integration_transit_encryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.putVpcInterfaceAttachment">put_vpc_interface_attachment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.resetCidrAllowList">reset_cidr_allow_list</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.resetDestination">reset_destination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.resetEncryption">reset_encryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.resetMaxLatency">reset_max_latency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.resetMediaStreamOutputConfigurations">reset_media_stream_output_configurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.resetMinLatency">reset_min_latency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.resetNdiOutputTimecodeSource">reset_ndi_output_timecode_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.resetNdiProgramName">reset_ndi_program_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.resetNdiSpeedHqQuality">reset_ndi_speed_hq_quality</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.resetOutputStatus">reset_output_status</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.resetProtocol">reset_protocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.resetRemoteId">reset_remote_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.resetRouterIntegrationState">reset_router_integration_state</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.resetRouterIntegrationTransitEncryption">reset_router_integration_transit_encryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.resetSmoothingLatency">reset_smoothing_latency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.resetStreamId">reset_stream_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.resetVpcInterfaceAttachment">reset_vpc_interface_attachment</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_encryption` <a name="put_encryption" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.putEncryption"></a>

```python
def put_encryption(
  algorithm: str = None,
  key_type: str = None,
  role_arn: str = None,
  secret_arn: str = None
) -> None
```

###### `algorithm`<sup>Optional</sup> <a name="algorithm" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.putEncryption.parameter.algorithm"></a>

- *Type:* str

The type of algorithm that is used for the encryption (such as aes128, aes192, or aes256).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#algorithm MediaconnectFlowOutput#algorithm}

---

###### `key_type`<sup>Optional</sup> <a name="key_type" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.putEncryption.parameter.keyType"></a>

- *Type:* str

The type of key that is used for the encryption.

If no keyType is provided, the service will use the default setting (static-key).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#key_type MediaconnectFlowOutput#key_type}

---

###### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.putEncryption.parameter.roleArn"></a>

- *Type:* str

The ARN of the role that you created during setup (when you set up AWS Elemental MediaConnect as a trusted entity).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#role_arn MediaconnectFlowOutput#role_arn}

---

###### `secret_arn`<sup>Optional</sup> <a name="secret_arn" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.putEncryption.parameter.secretArn"></a>

- *Type:* str

The ARN of the secret that you created in AWS Secrets Manager to store the encryption key.

This parameter is required for static key encryption and is not valid for SPEKE encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#secret_arn MediaconnectFlowOutput#secret_arn}

---

##### `put_media_stream_output_configurations` <a name="put_media_stream_output_configurations" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.putMediaStreamOutputConfigurations"></a>

```python
def put_media_stream_output_configurations(
  value: IResolvable | typing.List[MediaconnectFlowOutputMediaStreamOutputConfigurations]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.putMediaStreamOutputConfigurations.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurations">MediaconnectFlowOutputMediaStreamOutputConfigurations</a>]

---

##### `put_router_integration_transit_encryption` <a name="put_router_integration_transit_encryption" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.putRouterIntegrationTransitEncryption"></a>

```python
def put_router_integration_transit_encryption(
  encryption_key_configuration: MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfiguration = None,
  encryption_key_type: str = None
) -> None
```

###### `encryption_key_configuration`<sup>Optional</sup> <a name="encryption_key_configuration" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.putRouterIntegrationTransitEncryption.parameter.encryptionKeyConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfiguration">MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfiguration</a>

Configuration settings for flow transit encryption keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#encryption_key_configuration MediaconnectFlowOutput#encryption_key_configuration}

---

###### `encryption_key_type`<sup>Optional</sup> <a name="encryption_key_type" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.putRouterIntegrationTransitEncryption.parameter.encryptionKeyType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#encryption_key_type MediaconnectFlowOutput#encryption_key_type}.

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[MediaconnectFlowOutputTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTags">MediaconnectFlowOutputTags</a>]

---

##### `put_vpc_interface_attachment` <a name="put_vpc_interface_attachment" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.putVpcInterfaceAttachment"></a>

```python
def put_vpc_interface_attachment(
  vpc_interface_name: str = None
) -> None
```

###### `vpc_interface_name`<sup>Optional</sup> <a name="vpc_interface_name" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.putVpcInterfaceAttachment.parameter.vpcInterfaceName"></a>

- *Type:* str

The name of the VPC interface to use for this output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#vpc_interface_name MediaconnectFlowOutput#vpc_interface_name}

---

##### `reset_cidr_allow_list` <a name="reset_cidr_allow_list" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.resetCidrAllowList"></a>

```python
def reset_cidr_allow_list() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_destination` <a name="reset_destination" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.resetDestination"></a>

```python
def reset_destination() -> None
```

##### `reset_encryption` <a name="reset_encryption" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.resetEncryption"></a>

```python
def reset_encryption() -> None
```

##### `reset_max_latency` <a name="reset_max_latency" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.resetMaxLatency"></a>

```python
def reset_max_latency() -> None
```

##### `reset_media_stream_output_configurations` <a name="reset_media_stream_output_configurations" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.resetMediaStreamOutputConfigurations"></a>

```python
def reset_media_stream_output_configurations() -> None
```

##### `reset_min_latency` <a name="reset_min_latency" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.resetMinLatency"></a>

```python
def reset_min_latency() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_ndi_output_timecode_source` <a name="reset_ndi_output_timecode_source" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.resetNdiOutputTimecodeSource"></a>

```python
def reset_ndi_output_timecode_source() -> None
```

##### `reset_ndi_program_name` <a name="reset_ndi_program_name" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.resetNdiProgramName"></a>

```python
def reset_ndi_program_name() -> None
```

##### `reset_ndi_speed_hq_quality` <a name="reset_ndi_speed_hq_quality" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.resetNdiSpeedHqQuality"></a>

```python
def reset_ndi_speed_hq_quality() -> None
```

##### `reset_output_status` <a name="reset_output_status" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.resetOutputStatus"></a>

```python
def reset_output_status() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_protocol` <a name="reset_protocol" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.resetProtocol"></a>

```python
def reset_protocol() -> None
```

##### `reset_remote_id` <a name="reset_remote_id" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.resetRemoteId"></a>

```python
def reset_remote_id() -> None
```

##### `reset_router_integration_state` <a name="reset_router_integration_state" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.resetRouterIntegrationState"></a>

```python
def reset_router_integration_state() -> None
```

##### `reset_router_integration_transit_encryption` <a name="reset_router_integration_transit_encryption" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.resetRouterIntegrationTransitEncryption"></a>

```python
def reset_router_integration_transit_encryption() -> None
```

##### `reset_smoothing_latency` <a name="reset_smoothing_latency" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.resetSmoothingLatency"></a>

```python
def reset_smoothing_latency() -> None
```

##### `reset_stream_id` <a name="reset_stream_id" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.resetStreamId"></a>

```python
def reset_stream_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_vpc_interface_attachment` <a name="reset_vpc_interface_attachment" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.resetVpcInterfaceAttachment"></a>

```python
def reset_vpc_interface_attachment() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a MediaconnectFlowOutput resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.isConstruct"></a>

```python
from cdktn_provider_awscc import mediaconnect_flow_output

mediaconnectFlowOutput.MediaconnectFlowOutput.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.isTerraformElement"></a>

```python
from cdktn_provider_awscc import mediaconnect_flow_output

mediaconnectFlowOutput.MediaconnectFlowOutput.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.isTerraformResource"></a>

```python
from cdktn_provider_awscc import mediaconnect_flow_output

mediaconnectFlowOutput.MediaconnectFlowOutput.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import mediaconnect_flow_output

mediaconnectFlowOutput.MediaconnectFlowOutput.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a MediaconnectFlowOutput resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the MediaconnectFlowOutput to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing MediaconnectFlowOutput that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the MediaconnectFlowOutput to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.encryption">encryption</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference">MediaconnectFlowOutputEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.mediaStreamOutputConfigurations">media_stream_output_configurations</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsList">MediaconnectFlowOutputMediaStreamOutputConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.outputArn">output_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.routerIntegrationTransitEncryption">router_integration_transit_encryption</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference">MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsList">MediaconnectFlowOutputTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.vpcInterfaceAttachment">vpc_interface_attachment</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachmentOutputReference">MediaconnectFlowOutputVpcInterfaceAttachmentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.cidrAllowListInput">cidr_allow_list_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.destinationInput">destination_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.encryptionInput">encryption_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryption">MediaconnectFlowOutputEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.flowArnInput">flow_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.maxLatencyInput">max_latency_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.mediaStreamOutputConfigurationsInput">media_stream_output_configurations_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurations">MediaconnectFlowOutputMediaStreamOutputConfigurations</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.minLatencyInput">min_latency_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.ndiOutputTimecodeSourceInput">ndi_output_timecode_source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.ndiProgramNameInput">ndi_program_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.ndiSpeedHqQualityInput">ndi_speed_hq_quality_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.outputStatusInput">output_status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.remoteIdInput">remote_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.routerIntegrationStateInput">router_integration_state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.routerIntegrationTransitEncryptionInput">router_integration_transit_encryption_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryption">MediaconnectFlowOutputRouterIntegrationTransitEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.smoothingLatencyInput">smoothing_latency_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.streamIdInput">stream_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTags">MediaconnectFlowOutputTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.vpcInterfaceAttachmentInput">vpc_interface_attachment_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachment">MediaconnectFlowOutputVpcInterfaceAttachment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.cidrAllowList">cidr_allow_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.destination">destination</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.flowArn">flow_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.maxLatency">max_latency</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.minLatency">min_latency</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.ndiOutputTimecodeSource">ndi_output_timecode_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.ndiProgramName">ndi_program_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.ndiSpeedHqQuality">ndi_speed_hq_quality</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.outputStatus">output_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.remoteId">remote_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.routerIntegrationState">router_integration_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.smoothingLatency">smoothing_latency</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.streamId">stream_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `encryption`<sup>Required</sup> <a name="encryption" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.encryption"></a>

```python
encryption: MediaconnectFlowOutputEncryptionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference">MediaconnectFlowOutputEncryptionOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `media_stream_output_configurations`<sup>Required</sup> <a name="media_stream_output_configurations" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.mediaStreamOutputConfigurations"></a>

```python
media_stream_output_configurations: MediaconnectFlowOutputMediaStreamOutputConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsList">MediaconnectFlowOutputMediaStreamOutputConfigurationsList</a>

---

##### `output_arn`<sup>Required</sup> <a name="output_arn" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.outputArn"></a>

```python
output_arn: str
```

- *Type:* str

---

##### `router_integration_transit_encryption`<sup>Required</sup> <a name="router_integration_transit_encryption" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.routerIntegrationTransitEncryption"></a>

```python
router_integration_transit_encryption: MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference">MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.tags"></a>

```python
tags: MediaconnectFlowOutputTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsList">MediaconnectFlowOutputTagsList</a>

---

##### `vpc_interface_attachment`<sup>Required</sup> <a name="vpc_interface_attachment" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.vpcInterfaceAttachment"></a>

```python
vpc_interface_attachment: MediaconnectFlowOutputVpcInterfaceAttachmentOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachmentOutputReference">MediaconnectFlowOutputVpcInterfaceAttachmentOutputReference</a>

---

##### `cidr_allow_list_input`<sup>Optional</sup> <a name="cidr_allow_list_input" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.cidrAllowListInput"></a>

```python
cidr_allow_list_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `destination_input`<sup>Optional</sup> <a name="destination_input" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.destinationInput"></a>

```python
destination_input: str
```

- *Type:* str

---

##### `encryption_input`<sup>Optional</sup> <a name="encryption_input" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.encryptionInput"></a>

```python
encryption_input: IResolvable | MediaconnectFlowOutputEncryption
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryption">MediaconnectFlowOutputEncryption</a>

---

##### `flow_arn_input`<sup>Optional</sup> <a name="flow_arn_input" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.flowArnInput"></a>

```python
flow_arn_input: str
```

- *Type:* str

---

##### `max_latency_input`<sup>Optional</sup> <a name="max_latency_input" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.maxLatencyInput"></a>

```python
max_latency_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `media_stream_output_configurations_input`<sup>Optional</sup> <a name="media_stream_output_configurations_input" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.mediaStreamOutputConfigurationsInput"></a>

```python
media_stream_output_configurations_input: IResolvable | typing.List[MediaconnectFlowOutputMediaStreamOutputConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurations">MediaconnectFlowOutputMediaStreamOutputConfigurations</a>]

---

##### `min_latency_input`<sup>Optional</sup> <a name="min_latency_input" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.minLatencyInput"></a>

```python
min_latency_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `ndi_output_timecode_source_input`<sup>Optional</sup> <a name="ndi_output_timecode_source_input" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.ndiOutputTimecodeSourceInput"></a>

```python
ndi_output_timecode_source_input: str
```

- *Type:* str

---

##### `ndi_program_name_input`<sup>Optional</sup> <a name="ndi_program_name_input" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.ndiProgramNameInput"></a>

```python
ndi_program_name_input: str
```

- *Type:* str

---

##### `ndi_speed_hq_quality_input`<sup>Optional</sup> <a name="ndi_speed_hq_quality_input" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.ndiSpeedHqQualityInput"></a>

```python
ndi_speed_hq_quality_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `output_status_input`<sup>Optional</sup> <a name="output_status_input" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.outputStatusInput"></a>

```python
output_status_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `remote_id_input`<sup>Optional</sup> <a name="remote_id_input" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.remoteIdInput"></a>

```python
remote_id_input: str
```

- *Type:* str

---

##### `router_integration_state_input`<sup>Optional</sup> <a name="router_integration_state_input" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.routerIntegrationStateInput"></a>

```python
router_integration_state_input: str
```

- *Type:* str

---

##### `router_integration_transit_encryption_input`<sup>Optional</sup> <a name="router_integration_transit_encryption_input" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.routerIntegrationTransitEncryptionInput"></a>

```python
router_integration_transit_encryption_input: IResolvable | MediaconnectFlowOutputRouterIntegrationTransitEncryption
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryption">MediaconnectFlowOutputRouterIntegrationTransitEncryption</a>

---

##### `smoothing_latency_input`<sup>Optional</sup> <a name="smoothing_latency_input" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.smoothingLatencyInput"></a>

```python
smoothing_latency_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `stream_id_input`<sup>Optional</sup> <a name="stream_id_input" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.streamIdInput"></a>

```python
stream_id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[MediaconnectFlowOutputTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTags">MediaconnectFlowOutputTags</a>]

---

##### `vpc_interface_attachment_input`<sup>Optional</sup> <a name="vpc_interface_attachment_input" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.vpcInterfaceAttachmentInput"></a>

```python
vpc_interface_attachment_input: IResolvable | MediaconnectFlowOutputVpcInterfaceAttachment
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachment">MediaconnectFlowOutputVpcInterfaceAttachment</a>

---

##### `cidr_allow_list`<sup>Required</sup> <a name="cidr_allow_list" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.cidrAllowList"></a>

```python
cidr_allow_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.destination"></a>

```python
destination: str
```

- *Type:* str

---

##### `flow_arn`<sup>Required</sup> <a name="flow_arn" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.flowArn"></a>

```python
flow_arn: str
```

- *Type:* str

---

##### `max_latency`<sup>Required</sup> <a name="max_latency" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.maxLatency"></a>

```python
max_latency: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_latency`<sup>Required</sup> <a name="min_latency" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.minLatency"></a>

```python
min_latency: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `ndi_output_timecode_source`<sup>Required</sup> <a name="ndi_output_timecode_source" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.ndiOutputTimecodeSource"></a>

```python
ndi_output_timecode_source: str
```

- *Type:* str

---

##### `ndi_program_name`<sup>Required</sup> <a name="ndi_program_name" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.ndiProgramName"></a>

```python
ndi_program_name: str
```

- *Type:* str

---

##### `ndi_speed_hq_quality`<sup>Required</sup> <a name="ndi_speed_hq_quality" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.ndiSpeedHqQuality"></a>

```python
ndi_speed_hq_quality: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `output_status`<sup>Required</sup> <a name="output_status" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.outputStatus"></a>

```python
output_status: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `remote_id`<sup>Required</sup> <a name="remote_id" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.remoteId"></a>

```python
remote_id: str
```

- *Type:* str

---

##### `router_integration_state`<sup>Required</sup> <a name="router_integration_state" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.routerIntegrationState"></a>

```python
router_integration_state: str
```

- *Type:* str

---

##### `smoothing_latency`<sup>Required</sup> <a name="smoothing_latency" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.smoothingLatency"></a>

```python
smoothing_latency: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `stream_id`<sup>Required</sup> <a name="stream_id" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.streamId"></a>

```python
stream_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MediaconnectFlowOutputConfig <a name="MediaconnectFlowOutputConfig" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputConfig.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_flow_output

mediaconnectFlowOutput.MediaconnectFlowOutputConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  flow_arn: str,
  cidr_allow_list: typing.List[str] = None,
  description: str = None,
  destination: str = None,
  encryption: MediaconnectFlowOutputEncryption = None,
  max_latency: typing.Union[int, float] = None,
  media_stream_output_configurations: IResolvable | typing.List[MediaconnectFlowOutputMediaStreamOutputConfigurations] = None,
  min_latency: typing.Union[int, float] = None,
  name: str = None,
  ndi_output_timecode_source: str = None,
  ndi_program_name: str = None,
  ndi_speed_hq_quality: typing.Union[int, float] = None,
  output_status: str = None,
  port: typing.Union[int, float] = None,
  protocol: str = None,
  remote_id: str = None,
  router_integration_state: str = None,
  router_integration_transit_encryption: MediaconnectFlowOutputRouterIntegrationTransitEncryption = None,
  smoothing_latency: typing.Union[int, float] = None,
  stream_id: str = None,
  tags: IResolvable | typing.List[MediaconnectFlowOutputTags] = None,
  vpc_interface_attachment: MediaconnectFlowOutputVpcInterfaceAttachment = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputConfig.property.flowArn">flow_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN), a unique identifier for any AWS resource, of the flow. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputConfig.property.cidrAllowList">cidr_allow_list</a></code> | <code>typing.List[str]</code> | The range of IP addresses that should be allowed to initiate output requests to this flow. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputConfig.property.description">description</a></code> | <code>str</code> | A description of the output. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputConfig.property.destination">destination</a></code> | <code>str</code> | The address where you want to send the output. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputConfig.property.encryption">encryption</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryption">MediaconnectFlowOutputEncryption</a></code> | The type of key used for the encryption. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputConfig.property.maxLatency">max_latency</a></code> | <code>typing.Union[int, float]</code> | The maximum latency in milliseconds. This parameter applies only to RIST-based and Zixi-based streams. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputConfig.property.mediaStreamOutputConfigurations">media_stream_output_configurations</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurations">MediaconnectFlowOutputMediaStreamOutputConfigurations</a>]</code> | The definition for each media stream that is associated with the output. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputConfig.property.minLatency">min_latency</a></code> | <code>typing.Union[int, float]</code> | The minimum latency in milliseconds. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputConfig.property.name">name</a></code> | <code>str</code> | The name of the output. This value must be unique within the current flow. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputConfig.property.ndiOutputTimecodeSource">ndi_output_timecode_source</a></code> | <code>str</code> | The timecode source for the NDI output. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputConfig.property.ndiProgramName">ndi_program_name</a></code> | <code>str</code> | A suffix for the names of the NDI sources that the flow creates. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputConfig.property.ndiSpeedHqQuality">ndi_speed_hq_quality</a></code> | <code>typing.Union[int, float]</code> | A quality setting for the NDI Speed HQ encoder. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputConfig.property.outputStatus">output_status</a></code> | <code>str</code> | An indication of whether the output should transmit data or not. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputConfig.property.port">port</a></code> | <code>typing.Union[int, float]</code> | The port to use when content is distributed to this output. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputConfig.property.protocol">protocol</a></code> | <code>str</code> | The protocol that is used by the source or output. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputConfig.property.remoteId">remote_id</a></code> | <code>str</code> | The remote ID for the Zixi-pull stream. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputConfig.property.routerIntegrationState">router_integration_state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#router_integration_state MediaconnectFlowOutput#router_integration_state}. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputConfig.property.routerIntegrationTransitEncryption">router_integration_transit_encryption</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryption">MediaconnectFlowOutputRouterIntegrationTransitEncryption</a></code> | The configuration that defines how content is encrypted during transit between the MediaConnect router and a MediaConnect flow. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputConfig.property.smoothingLatency">smoothing_latency</a></code> | <code>typing.Union[int, float]</code> | The smoothing latency in milliseconds for RIST, RTP, and RTP-FEC streams. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputConfig.property.streamId">stream_id</a></code> | <code>str</code> | The stream ID that you want to use for this transport. This parameter applies only to Zixi-based streams. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTags">MediaconnectFlowOutputTags</a>]</code> | Key-value pairs that can be used to tag and organize this flow output. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputConfig.property.vpcInterfaceAttachment">vpc_interface_attachment</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachment">MediaconnectFlowOutputVpcInterfaceAttachment</a></code> | The name of the VPC interface attachment to use for this output. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `flow_arn`<sup>Required</sup> <a name="flow_arn" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputConfig.property.flowArn"></a>

```python
flow_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN), a unique identifier for any AWS resource, of the flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#flow_arn MediaconnectFlowOutput#flow_arn}

---

##### `cidr_allow_list`<sup>Optional</sup> <a name="cidr_allow_list" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputConfig.property.cidrAllowList"></a>

```python
cidr_allow_list: typing.List[str]
```

- *Type:* typing.List[str]

The range of IP addresses that should be allowed to initiate output requests to this flow.

These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#cidr_allow_list MediaconnectFlowOutput#cidr_allow_list}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A description of the output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#description MediaconnectFlowOutput#description}

---

##### `destination`<sup>Optional</sup> <a name="destination" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputConfig.property.destination"></a>

```python
destination: str
```

- *Type:* str

The address where you want to send the output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#destination MediaconnectFlowOutput#destination}

---

##### `encryption`<sup>Optional</sup> <a name="encryption" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputConfig.property.encryption"></a>

```python
encryption: MediaconnectFlowOutputEncryption
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryption">MediaconnectFlowOutputEncryption</a>

The type of key used for the encryption.

If no keyType is provided, the service will use the default setting (static-key).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#encryption MediaconnectFlowOutput#encryption}

---

##### `max_latency`<sup>Optional</sup> <a name="max_latency" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputConfig.property.maxLatency"></a>

```python
max_latency: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum latency in milliseconds. This parameter applies only to RIST-based and Zixi-based streams.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#max_latency MediaconnectFlowOutput#max_latency}

---

##### `media_stream_output_configurations`<sup>Optional</sup> <a name="media_stream_output_configurations" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputConfig.property.mediaStreamOutputConfigurations"></a>

```python
media_stream_output_configurations: IResolvable | typing.List[MediaconnectFlowOutputMediaStreamOutputConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurations">MediaconnectFlowOutputMediaStreamOutputConfigurations</a>]

The definition for each media stream that is associated with the output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#media_stream_output_configurations MediaconnectFlowOutput#media_stream_output_configurations}

---

##### `min_latency`<sup>Optional</sup> <a name="min_latency" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputConfig.property.minLatency"></a>

```python
min_latency: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The minimum latency in milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#min_latency MediaconnectFlowOutput#min_latency}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the output. This value must be unique within the current flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#name MediaconnectFlowOutput#name}

---

##### `ndi_output_timecode_source`<sup>Optional</sup> <a name="ndi_output_timecode_source" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputConfig.property.ndiOutputTimecodeSource"></a>

```python
ndi_output_timecode_source: str
```

- *Type:* str

The timecode source for the NDI output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#ndi_output_timecode_source MediaconnectFlowOutput#ndi_output_timecode_source}

---

##### `ndi_program_name`<sup>Optional</sup> <a name="ndi_program_name" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputConfig.property.ndiProgramName"></a>

```python
ndi_program_name: str
```

- *Type:* str

A suffix for the names of the NDI sources that the flow creates.

If a custom name isn't specified, MediaConnect uses the output name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#ndi_program_name MediaconnectFlowOutput#ndi_program_name}

---

##### `ndi_speed_hq_quality`<sup>Optional</sup> <a name="ndi_speed_hq_quality" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputConfig.property.ndiSpeedHqQuality"></a>

```python
ndi_speed_hq_quality: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

A quality setting for the NDI Speed HQ encoder.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#ndi_speed_hq_quality MediaconnectFlowOutput#ndi_speed_hq_quality}

---

##### `output_status`<sup>Optional</sup> <a name="output_status" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputConfig.property.outputStatus"></a>

```python
output_status: str
```

- *Type:* str

An indication of whether the output should transmit data or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#output_status MediaconnectFlowOutput#output_status}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputConfig.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The port to use when content is distributed to this output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#port MediaconnectFlowOutput#port}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputConfig.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

The protocol that is used by the source or output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#protocol MediaconnectFlowOutput#protocol}

---

##### `remote_id`<sup>Optional</sup> <a name="remote_id" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputConfig.property.remoteId"></a>

```python
remote_id: str
```

- *Type:* str

The remote ID for the Zixi-pull stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#remote_id MediaconnectFlowOutput#remote_id}

---

##### `router_integration_state`<sup>Optional</sup> <a name="router_integration_state" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputConfig.property.routerIntegrationState"></a>

```python
router_integration_state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#router_integration_state MediaconnectFlowOutput#router_integration_state}.

---

##### `router_integration_transit_encryption`<sup>Optional</sup> <a name="router_integration_transit_encryption" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputConfig.property.routerIntegrationTransitEncryption"></a>

```python
router_integration_transit_encryption: MediaconnectFlowOutputRouterIntegrationTransitEncryption
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryption">MediaconnectFlowOutputRouterIntegrationTransitEncryption</a>

The configuration that defines how content is encrypted during transit between the MediaConnect router and a MediaConnect flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#router_integration_transit_encryption MediaconnectFlowOutput#router_integration_transit_encryption}

---

##### `smoothing_latency`<sup>Optional</sup> <a name="smoothing_latency" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputConfig.property.smoothingLatency"></a>

```python
smoothing_latency: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The smoothing latency in milliseconds for RIST, RTP, and RTP-FEC streams.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#smoothing_latency MediaconnectFlowOutput#smoothing_latency}

---

##### `stream_id`<sup>Optional</sup> <a name="stream_id" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputConfig.property.streamId"></a>

```python
stream_id: str
```

- *Type:* str

The stream ID that you want to use for this transport. This parameter applies only to Zixi-based streams.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#stream_id MediaconnectFlowOutput#stream_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[MediaconnectFlowOutputTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTags">MediaconnectFlowOutputTags</a>]

Key-value pairs that can be used to tag and organize this flow output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#tags MediaconnectFlowOutput#tags}

---

##### `vpc_interface_attachment`<sup>Optional</sup> <a name="vpc_interface_attachment" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputConfig.property.vpcInterfaceAttachment"></a>

```python
vpc_interface_attachment: MediaconnectFlowOutputVpcInterfaceAttachment
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachment">MediaconnectFlowOutputVpcInterfaceAttachment</a>

The name of the VPC interface attachment to use for this output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#vpc_interface_attachment MediaconnectFlowOutput#vpc_interface_attachment}

---

### MediaconnectFlowOutputEncryption <a name="MediaconnectFlowOutputEncryption" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryption.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_flow_output

mediaconnectFlowOutput.MediaconnectFlowOutputEncryption(
  algorithm: str = None,
  key_type: str = None,
  role_arn: str = None,
  secret_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryption.property.algorithm">algorithm</a></code> | <code>str</code> | The type of algorithm that is used for the encryption (such as aes128, aes192, or aes256). |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryption.property.keyType">key_type</a></code> | <code>str</code> | The type of key that is used for the encryption. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryption.property.roleArn">role_arn</a></code> | <code>str</code> | The ARN of the role that you created during setup (when you set up AWS Elemental MediaConnect as a trusted entity). |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryption.property.secretArn">secret_arn</a></code> | <code>str</code> | The ARN of the secret that you created in AWS Secrets Manager to store the encryption key. |

---

##### `algorithm`<sup>Optional</sup> <a name="algorithm" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryption.property.algorithm"></a>

```python
algorithm: str
```

- *Type:* str

The type of algorithm that is used for the encryption (such as aes128, aes192, or aes256).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#algorithm MediaconnectFlowOutput#algorithm}

---

##### `key_type`<sup>Optional</sup> <a name="key_type" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryption.property.keyType"></a>

```python
key_type: str
```

- *Type:* str

The type of key that is used for the encryption.

If no keyType is provided, the service will use the default setting (static-key).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#key_type MediaconnectFlowOutput#key_type}

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryption.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

The ARN of the role that you created during setup (when you set up AWS Elemental MediaConnect as a trusted entity).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#role_arn MediaconnectFlowOutput#role_arn}

---

##### `secret_arn`<sup>Optional</sup> <a name="secret_arn" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryption.property.secretArn"></a>

```python
secret_arn: str
```

- *Type:* str

The ARN of the secret that you created in AWS Secrets Manager to store the encryption key.

This parameter is required for static key encryption and is not valid for SPEKE encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#secret_arn MediaconnectFlowOutput#secret_arn}

---

### MediaconnectFlowOutputMediaStreamOutputConfigurations <a name="MediaconnectFlowOutputMediaStreamOutputConfigurations" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurations.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_flow_output

mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurations(
  destination_configurations: IResolvable | typing.List[MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurations] = None,
  encoding_name: str = None,
  encoding_parameters: MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParameters = None,
  media_stream_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurations.property.destinationConfigurations">destination_configurations</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurations">MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurations</a>]</code> | The media streams that you want to associate with the output. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurations.property.encodingName">encoding_name</a></code> | <code>str</code> | The format that will be used to encode the data. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurations.property.encodingParameters">encoding_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParameters">MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParameters</a></code> | A collection of parameters that determine how MediaConnect will convert the content. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurations.property.mediaStreamName">media_stream_name</a></code> | <code>str</code> | A name that helps you distinguish one media stream from another. |

---

##### `destination_configurations`<sup>Optional</sup> <a name="destination_configurations" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurations.property.destinationConfigurations"></a>

```python
destination_configurations: IResolvable | typing.List[MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurations">MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurations</a>]

The media streams that you want to associate with the output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#destination_configurations MediaconnectFlowOutput#destination_configurations}

---

##### `encoding_name`<sup>Optional</sup> <a name="encoding_name" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurations.property.encodingName"></a>

```python
encoding_name: str
```

- *Type:* str

The format that will be used to encode the data.

For ancillary data streams, set the encoding name to smpte291. For audio streams, set the encoding name to pcm. For video streams on sources or outputs that use the CDI protocol, set the encoding name to raw. For video streams on sources or outputs that use the ST 2110 JPEG XS protocol, set the encoding name to jxsv.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#encoding_name MediaconnectFlowOutput#encoding_name}

---

##### `encoding_parameters`<sup>Optional</sup> <a name="encoding_parameters" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurations.property.encodingParameters"></a>

```python
encoding_parameters: MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParameters">MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParameters</a>

A collection of parameters that determine how MediaConnect will convert the content.

These fields only apply to outputs on flows that have a CDI source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#encoding_parameters MediaconnectFlowOutput#encoding_parameters}

---

##### `media_stream_name`<sup>Optional</sup> <a name="media_stream_name" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurations.property.mediaStreamName"></a>

```python
media_stream_name: str
```

- *Type:* str

A name that helps you distinguish one media stream from another.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#media_stream_name MediaconnectFlowOutput#media_stream_name}

---

### MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurations <a name="MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurations" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurations.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_flow_output

mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurations(
  destination_ip: str = None,
  destination_port: typing.Union[int, float] = None,
  interface: MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterface = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurations.property.destinationIp">destination_ip</a></code> | <code>str</code> | The IP address where contents of the media stream will be sent. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurations.property.destinationPort">destination_port</a></code> | <code>typing.Union[int, float]</code> | The port to use when the content of the media stream is distributed to the output. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurations.property.interface">interface</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterface">MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterface</a></code> | The VPC interface that is used for the media stream associated with the output. |

---

##### `destination_ip`<sup>Optional</sup> <a name="destination_ip" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurations.property.destinationIp"></a>

```python
destination_ip: str
```

- *Type:* str

The IP address where contents of the media stream will be sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#destination_ip MediaconnectFlowOutput#destination_ip}

---

##### `destination_port`<sup>Optional</sup> <a name="destination_port" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurations.property.destinationPort"></a>

```python
destination_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The port to use when the content of the media stream is distributed to the output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#destination_port MediaconnectFlowOutput#destination_port}

---

##### `interface`<sup>Optional</sup> <a name="interface" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurations.property.interface"></a>

```python
interface: MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterface
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterface">MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterface</a>

The VPC interface that is used for the media stream associated with the output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#interface MediaconnectFlowOutput#interface}

---

### MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterface <a name="MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterface" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterface"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterface.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_flow_output

mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterface(
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterface.property.name">name</a></code> | <code>str</code> | The name of the VPC interface that you want to use for the media stream associated with the output. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterface.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the VPC interface that you want to use for the media stream associated with the output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#name MediaconnectFlowOutput#name}

---

### MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParameters <a name="MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParameters" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParameters.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_flow_output

mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParameters(
  compression_factor: typing.Union[int, float] = None,
  encoder_profile: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParameters.property.compressionFactor">compression_factor</a></code> | <code>typing.Union[int, float]</code> | A value that is used to calculate compression for an output. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParameters.property.encoderProfile">encoder_profile</a></code> | <code>str</code> | A setting on the encoder that drives compression settings. |

---

##### `compression_factor`<sup>Optional</sup> <a name="compression_factor" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParameters.property.compressionFactor"></a>

```python
compression_factor: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

A value that is used to calculate compression for an output.

The bitrate of the output is calculated as follows: Output bitrate = (1 / compressionFactor) * (source bitrate) This property only applies to outputs that use the ST 2110 JPEG XS protocol, with a flow source that uses the CDI protocol. Valid values are in the range of 3.0 to 10.0, inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#compression_factor MediaconnectFlowOutput#compression_factor}

---

##### `encoder_profile`<sup>Optional</sup> <a name="encoder_profile" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParameters.property.encoderProfile"></a>

```python
encoder_profile: str
```

- *Type:* str

A setting on the encoder that drives compression settings.

This property only applies to video media streams associated with outputs that use the ST 2110 JPEG XS protocol, with a flow source that uses the CDI protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#encoder_profile MediaconnectFlowOutput#encoder_profile}

---

### MediaconnectFlowOutputRouterIntegrationTransitEncryption <a name="MediaconnectFlowOutputRouterIntegrationTransitEncryption" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryption.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_flow_output

mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryption(
  encryption_key_configuration: MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfiguration = None,
  encryption_key_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryption.property.encryptionKeyConfiguration">encryption_key_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfiguration">MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfiguration</a></code> | Configuration settings for flow transit encryption keys. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryption.property.encryptionKeyType">encryption_key_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#encryption_key_type MediaconnectFlowOutput#encryption_key_type}. |

---

##### `encryption_key_configuration`<sup>Optional</sup> <a name="encryption_key_configuration" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryption.property.encryptionKeyConfiguration"></a>

```python
encryption_key_configuration: MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfiguration">MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfiguration</a>

Configuration settings for flow transit encryption keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#encryption_key_configuration MediaconnectFlowOutput#encryption_key_configuration}

---

##### `encryption_key_type`<sup>Optional</sup> <a name="encryption_key_type" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryption.property.encryptionKeyType"></a>

```python
encryption_key_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#encryption_key_type MediaconnectFlowOutput#encryption_key_type}.

---

### MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfiguration <a name="MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfiguration" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_flow_output

mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfiguration(
  automatic: str = None,
  secrets_manager: MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManager = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfiguration.property.automatic">automatic</a></code> | <code>str</code> | Configuration settings for automatic encryption key management, where MediaConnect handles key creation and rotation. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfiguration.property.secretsManager">secrets_manager</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManager">MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManager</a></code> | The configuration settings for transit encryption of a flow output using AWS Secrets Manager, including the secret ARN and role ARN. |

---

##### `automatic`<sup>Optional</sup> <a name="automatic" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfiguration.property.automatic"></a>

```python
automatic: str
```

- *Type:* str

Configuration settings for automatic encryption key management, where MediaConnect handles key creation and rotation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#automatic MediaconnectFlowOutput#automatic}

---

##### `secrets_manager`<sup>Optional</sup> <a name="secrets_manager" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfiguration.property.secretsManager"></a>

```python
secrets_manager: MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManager
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManager">MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManager</a>

The configuration settings for transit encryption of a flow output using AWS Secrets Manager, including the secret ARN and role ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#secrets_manager MediaconnectFlowOutput#secrets_manager}

---

### MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManager <a name="MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManager" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManager"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManager.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_flow_output

mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManager(
  role_arn: str = None,
  secret_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManager.property.roleArn">role_arn</a></code> | <code>str</code> | The ARN of the IAM role used for transit encryption to the router input using AWS Secrets Manager. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManager.property.secretArn">secret_arn</a></code> | <code>str</code> | The ARN of the AWS Secrets Manager secret used for transit encryption to the router input. |

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManager.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

The ARN of the IAM role used for transit encryption to the router input using AWS Secrets Manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#role_arn MediaconnectFlowOutput#role_arn}

---

##### `secret_arn`<sup>Optional</sup> <a name="secret_arn" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManager.property.secretArn"></a>

```python
secret_arn: str
```

- *Type:* str

The ARN of the AWS Secrets Manager secret used for transit encryption to the router input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#secret_arn MediaconnectFlowOutput#secret_arn}

---

### MediaconnectFlowOutputTags <a name="MediaconnectFlowOutputTags" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTags.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_flow_output

mediaconnectFlowOutput.MediaconnectFlowOutputTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#key MediaconnectFlowOutput#key}. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#value MediaconnectFlowOutput#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#key MediaconnectFlowOutput#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#value MediaconnectFlowOutput#value}.

---

### MediaconnectFlowOutputVpcInterfaceAttachment <a name="MediaconnectFlowOutputVpcInterfaceAttachment" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachment.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_flow_output

mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachment(
  vpc_interface_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachment.property.vpcInterfaceName">vpc_interface_name</a></code> | <code>str</code> | The name of the VPC interface to use for this output. |

---

##### `vpc_interface_name`<sup>Optional</sup> <a name="vpc_interface_name" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachment.property.vpcInterfaceName"></a>

```python
vpc_interface_name: str
```

- *Type:* str

The name of the VPC interface to use for this output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#vpc_interface_name MediaconnectFlowOutput#vpc_interface_name}

---

## Classes <a name="Classes" id="Classes"></a>

### MediaconnectFlowOutputEncryptionOutputReference <a name="MediaconnectFlowOutputEncryptionOutputReference" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_flow_output

mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.resetAlgorithm">reset_algorithm</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.resetKeyType">reset_key_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.resetRoleArn">reset_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.resetSecretArn">reset_secret_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_algorithm` <a name="reset_algorithm" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.resetAlgorithm"></a>

```python
def reset_algorithm() -> None
```

##### `reset_key_type` <a name="reset_key_type" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.resetKeyType"></a>

```python
def reset_key_type() -> None
```

##### `reset_role_arn` <a name="reset_role_arn" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.resetRoleArn"></a>

```python
def reset_role_arn() -> None
```

##### `reset_secret_arn` <a name="reset_secret_arn" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.resetSecretArn"></a>

```python
def reset_secret_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.property.algorithmInput">algorithm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.property.keyTypeInput">key_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.property.secretArnInput">secret_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.property.algorithm">algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.property.keyType">key_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.property.secretArn">secret_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryption">MediaconnectFlowOutputEncryption</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `algorithm_input`<sup>Optional</sup> <a name="algorithm_input" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.property.algorithmInput"></a>

```python
algorithm_input: str
```

- *Type:* str

---

##### `key_type_input`<sup>Optional</sup> <a name="key_type_input" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.property.keyTypeInput"></a>

```python
key_type_input: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `secret_arn_input`<sup>Optional</sup> <a name="secret_arn_input" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.property.secretArnInput"></a>

```python
secret_arn_input: str
```

- *Type:* str

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.property.algorithm"></a>

```python
algorithm: str
```

- *Type:* str

---

##### `key_type`<sup>Required</sup> <a name="key_type" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.property.keyType"></a>

```python
key_type: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `secret_arn`<sup>Required</sup> <a name="secret_arn" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.property.secretArn"></a>

```python
secret_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediaconnectFlowOutputEncryption
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryption">MediaconnectFlowOutputEncryption</a>

---


### MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference <a name="MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_flow_output

mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterface">MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterface</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterface
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterface">MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterface</a>

---


### MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList <a name="MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_flow_output

mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurations">MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurations">MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurations</a>]

---


### MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference <a name="MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_flow_output

mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.putInterface">put_interface</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.resetDestinationIp">reset_destination_ip</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.resetDestinationPort">reset_destination_port</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.resetInterface">reset_interface</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_interface` <a name="put_interface" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.putInterface"></a>

```python
def put_interface(
  name: str = None
) -> None
```

###### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.putInterface.parameter.name"></a>

- *Type:* str

The name of the VPC interface that you want to use for the media stream associated with the output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#name MediaconnectFlowOutput#name}

---

##### `reset_destination_ip` <a name="reset_destination_ip" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.resetDestinationIp"></a>

```python
def reset_destination_ip() -> None
```

##### `reset_destination_port` <a name="reset_destination_port" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.resetDestinationPort"></a>

```python
def reset_destination_port() -> None
```

##### `reset_interface` <a name="reset_interface" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.resetInterface"></a>

```python
def reset_interface() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.property.interface">interface</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference">MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.property.destinationIpInput">destination_ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.property.destinationPortInput">destination_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.property.interfaceInput">interface_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterface">MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterface</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.property.destinationIp">destination_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.property.destinationPort">destination_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurations">MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `interface`<sup>Required</sup> <a name="interface" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.property.interface"></a>

```python
interface: MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference">MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference</a>

---

##### `destination_ip_input`<sup>Optional</sup> <a name="destination_ip_input" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.property.destinationIpInput"></a>

```python
destination_ip_input: str
```

- *Type:* str

---

##### `destination_port_input`<sup>Optional</sup> <a name="destination_port_input" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.property.destinationPortInput"></a>

```python
destination_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `interface_input`<sup>Optional</sup> <a name="interface_input" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.property.interfaceInput"></a>

```python
interface_input: IResolvable | MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterface
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterface">MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterface</a>

---

##### `destination_ip`<sup>Required</sup> <a name="destination_ip" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.property.destinationIp"></a>

```python
destination_ip: str
```

- *Type:* str

---

##### `destination_port`<sup>Required</sup> <a name="destination_port" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.property.destinationPort"></a>

```python
destination_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurations
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurations">MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurations</a>

---


### MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference <a name="MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_flow_output

mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.resetCompressionFactor">reset_compression_factor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.resetEncoderProfile">reset_encoder_profile</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_compression_factor` <a name="reset_compression_factor" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.resetCompressionFactor"></a>

```python
def reset_compression_factor() -> None
```

##### `reset_encoder_profile` <a name="reset_encoder_profile" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.resetEncoderProfile"></a>

```python
def reset_encoder_profile() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.property.compressionFactorInput">compression_factor_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.property.encoderProfileInput">encoder_profile_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.property.compressionFactor">compression_factor</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.property.encoderProfile">encoder_profile</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParameters">MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compression_factor_input`<sup>Optional</sup> <a name="compression_factor_input" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.property.compressionFactorInput"></a>

```python
compression_factor_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `encoder_profile_input`<sup>Optional</sup> <a name="encoder_profile_input" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.property.encoderProfileInput"></a>

```python
encoder_profile_input: str
```

- *Type:* str

---

##### `compression_factor`<sup>Required</sup> <a name="compression_factor" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.property.compressionFactor"></a>

```python
compression_factor: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `encoder_profile`<sup>Required</sup> <a name="encoder_profile" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.property.encoderProfile"></a>

```python
encoder_profile: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParameters">MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParameters</a>

---


### MediaconnectFlowOutputMediaStreamOutputConfigurationsList <a name="MediaconnectFlowOutputMediaStreamOutputConfigurationsList" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsList.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_flow_output

mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurations">MediaconnectFlowOutputMediaStreamOutputConfigurations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[MediaconnectFlowOutputMediaStreamOutputConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurations">MediaconnectFlowOutputMediaStreamOutputConfigurations</a>]

---


### MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference <a name="MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_flow_output

mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.putDestinationConfigurations">put_destination_configurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.putEncodingParameters">put_encoding_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.resetDestinationConfigurations">reset_destination_configurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.resetEncodingName">reset_encoding_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.resetEncodingParameters">reset_encoding_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.resetMediaStreamName">reset_media_stream_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_destination_configurations` <a name="put_destination_configurations" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.putDestinationConfigurations"></a>

```python
def put_destination_configurations(
  value: IResolvable | typing.List[MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurations]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.putDestinationConfigurations.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurations">MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurations</a>]

---

##### `put_encoding_parameters` <a name="put_encoding_parameters" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.putEncodingParameters"></a>

```python
def put_encoding_parameters(
  compression_factor: typing.Union[int, float] = None,
  encoder_profile: str = None
) -> None
```

###### `compression_factor`<sup>Optional</sup> <a name="compression_factor" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.putEncodingParameters.parameter.compressionFactor"></a>

- *Type:* typing.Union[int, float]

A value that is used to calculate compression for an output.

The bitrate of the output is calculated as follows: Output bitrate = (1 / compressionFactor) * (source bitrate) This property only applies to outputs that use the ST 2110 JPEG XS protocol, with a flow source that uses the CDI protocol. Valid values are in the range of 3.0 to 10.0, inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#compression_factor MediaconnectFlowOutput#compression_factor}

---

###### `encoder_profile`<sup>Optional</sup> <a name="encoder_profile" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.putEncodingParameters.parameter.encoderProfile"></a>

- *Type:* str

A setting on the encoder that drives compression settings.

This property only applies to video media streams associated with outputs that use the ST 2110 JPEG XS protocol, with a flow source that uses the CDI protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#encoder_profile MediaconnectFlowOutput#encoder_profile}

---

##### `reset_destination_configurations` <a name="reset_destination_configurations" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.resetDestinationConfigurations"></a>

```python
def reset_destination_configurations() -> None
```

##### `reset_encoding_name` <a name="reset_encoding_name" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.resetEncodingName"></a>

```python
def reset_encoding_name() -> None
```

##### `reset_encoding_parameters` <a name="reset_encoding_parameters" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.resetEncodingParameters"></a>

```python
def reset_encoding_parameters() -> None
```

##### `reset_media_stream_name` <a name="reset_media_stream_name" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.resetMediaStreamName"></a>

```python
def reset_media_stream_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.property.destinationConfigurations">destination_configurations</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList">MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.property.encodingParameters">encoding_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference">MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.property.destinationConfigurationsInput">destination_configurations_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurations">MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurations</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.property.encodingNameInput">encoding_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.property.encodingParametersInput">encoding_parameters_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParameters">MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.property.mediaStreamNameInput">media_stream_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.property.encodingName">encoding_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.property.mediaStreamName">media_stream_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurations">MediaconnectFlowOutputMediaStreamOutputConfigurations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination_configurations`<sup>Required</sup> <a name="destination_configurations" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.property.destinationConfigurations"></a>

```python
destination_configurations: MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList">MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList</a>

---

##### `encoding_parameters`<sup>Required</sup> <a name="encoding_parameters" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.property.encodingParameters"></a>

```python
encoding_parameters: MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference">MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference</a>

---

##### `destination_configurations_input`<sup>Optional</sup> <a name="destination_configurations_input" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.property.destinationConfigurationsInput"></a>

```python
destination_configurations_input: IResolvable | typing.List[MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurations">MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurations</a>]

---

##### `encoding_name_input`<sup>Optional</sup> <a name="encoding_name_input" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.property.encodingNameInput"></a>

```python
encoding_name_input: str
```

- *Type:* str

---

##### `encoding_parameters_input`<sup>Optional</sup> <a name="encoding_parameters_input" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.property.encodingParametersInput"></a>

```python
encoding_parameters_input: IResolvable | MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParameters">MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParameters</a>

---

##### `media_stream_name_input`<sup>Optional</sup> <a name="media_stream_name_input" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.property.mediaStreamNameInput"></a>

```python
media_stream_name_input: str
```

- *Type:* str

---

##### `encoding_name`<sup>Required</sup> <a name="encoding_name" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.property.encodingName"></a>

```python
encoding_name: str
```

- *Type:* str

---

##### `media_stream_name`<sup>Required</sup> <a name="media_stream_name" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.property.mediaStreamName"></a>

```python
media_stream_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediaconnectFlowOutputMediaStreamOutputConfigurations
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurations">MediaconnectFlowOutputMediaStreamOutputConfigurations</a>

---


### MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference <a name="MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_flow_output

mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.putSecretsManager">put_secrets_manager</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.resetAutomatic">reset_automatic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.resetSecretsManager">reset_secrets_manager</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_secrets_manager` <a name="put_secrets_manager" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.putSecretsManager"></a>

```python
def put_secrets_manager(
  role_arn: str = None,
  secret_arn: str = None
) -> None
```

###### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.putSecretsManager.parameter.roleArn"></a>

- *Type:* str

The ARN of the IAM role used for transit encryption to the router input using AWS Secrets Manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#role_arn MediaconnectFlowOutput#role_arn}

---

###### `secret_arn`<sup>Optional</sup> <a name="secret_arn" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.putSecretsManager.parameter.secretArn"></a>

- *Type:* str

The ARN of the AWS Secrets Manager secret used for transit encryption to the router input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#secret_arn MediaconnectFlowOutput#secret_arn}

---

##### `reset_automatic` <a name="reset_automatic" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.resetAutomatic"></a>

```python
def reset_automatic() -> None
```

##### `reset_secrets_manager` <a name="reset_secrets_manager" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.resetSecretsManager"></a>

```python
def reset_secrets_manager() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.secretsManager">secrets_manager</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference">MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.automaticInput">automatic_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.secretsManagerInput">secrets_manager_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManager">MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManager</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.automatic">automatic</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfiguration">MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `secrets_manager`<sup>Required</sup> <a name="secrets_manager" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.secretsManager"></a>

```python
secrets_manager: MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference">MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference</a>

---

##### `automatic_input`<sup>Optional</sup> <a name="automatic_input" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.automaticInput"></a>

```python
automatic_input: str
```

- *Type:* str

---

##### `secrets_manager_input`<sup>Optional</sup> <a name="secrets_manager_input" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.secretsManagerInput"></a>

```python
secrets_manager_input: IResolvable | MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManager
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManager">MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManager</a>

---

##### `automatic`<sup>Required</sup> <a name="automatic" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.automatic"></a>

```python
automatic: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfiguration">MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfiguration</a>

---


### MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference <a name="MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_flow_output

mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.resetRoleArn">reset_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.resetSecretArn">reset_secret_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_role_arn` <a name="reset_role_arn" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.resetRoleArn"></a>

```python
def reset_role_arn() -> None
```

##### `reset_secret_arn` <a name="reset_secret_arn" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.resetSecretArn"></a>

```python
def reset_secret_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.secretArnInput">secret_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.secretArn">secret_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManager">MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManager</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `secret_arn_input`<sup>Optional</sup> <a name="secret_arn_input" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.secretArnInput"></a>

```python
secret_arn_input: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `secret_arn`<sup>Required</sup> <a name="secret_arn" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.secretArn"></a>

```python
secret_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManager
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManager">MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManager</a>

---


### MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference <a name="MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_flow_output

mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.putEncryptionKeyConfiguration">put_encryption_key_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.resetEncryptionKeyConfiguration">reset_encryption_key_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.resetEncryptionKeyType">reset_encryption_key_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_encryption_key_configuration` <a name="put_encryption_key_configuration" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.putEncryptionKeyConfiguration"></a>

```python
def put_encryption_key_configuration(
  automatic: str = None,
  secrets_manager: MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManager = None
) -> None
```

###### `automatic`<sup>Optional</sup> <a name="automatic" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.putEncryptionKeyConfiguration.parameter.automatic"></a>

- *Type:* str

Configuration settings for automatic encryption key management, where MediaConnect handles key creation and rotation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#automatic MediaconnectFlowOutput#automatic}

---

###### `secrets_manager`<sup>Optional</sup> <a name="secrets_manager" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.putEncryptionKeyConfiguration.parameter.secretsManager"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManager">MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManager</a>

The configuration settings for transit encryption of a flow output using AWS Secrets Manager, including the secret ARN and role ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#secrets_manager MediaconnectFlowOutput#secrets_manager}

---

##### `reset_encryption_key_configuration` <a name="reset_encryption_key_configuration" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.resetEncryptionKeyConfiguration"></a>

```python
def reset_encryption_key_configuration() -> None
```

##### `reset_encryption_key_type` <a name="reset_encryption_key_type" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.resetEncryptionKeyType"></a>

```python
def reset_encryption_key_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.property.encryptionKeyConfiguration">encryption_key_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference">MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.property.encryptionKeyConfigurationInput">encryption_key_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfiguration">MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.property.encryptionKeyTypeInput">encryption_key_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.property.encryptionKeyType">encryption_key_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryption">MediaconnectFlowOutputRouterIntegrationTransitEncryption</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `encryption_key_configuration`<sup>Required</sup> <a name="encryption_key_configuration" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.property.encryptionKeyConfiguration"></a>

```python
encryption_key_configuration: MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference">MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference</a>

---

##### `encryption_key_configuration_input`<sup>Optional</sup> <a name="encryption_key_configuration_input" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.property.encryptionKeyConfigurationInput"></a>

```python
encryption_key_configuration_input: IResolvable | MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfiguration">MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfiguration</a>

---

##### `encryption_key_type_input`<sup>Optional</sup> <a name="encryption_key_type_input" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.property.encryptionKeyTypeInput"></a>

```python
encryption_key_type_input: str
```

- *Type:* str

---

##### `encryption_key_type`<sup>Required</sup> <a name="encryption_key_type" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.property.encryptionKeyType"></a>

```python
encryption_key_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediaconnectFlowOutputRouterIntegrationTransitEncryption
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryption">MediaconnectFlowOutputRouterIntegrationTransitEncryption</a>

---


### MediaconnectFlowOutputTagsList <a name="MediaconnectFlowOutputTagsList" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_flow_output

mediaconnectFlowOutput.MediaconnectFlowOutputTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MediaconnectFlowOutputTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTags">MediaconnectFlowOutputTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[MediaconnectFlowOutputTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTags">MediaconnectFlowOutputTags</a>]

---


### MediaconnectFlowOutputTagsOutputReference <a name="MediaconnectFlowOutputTagsOutputReference" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_flow_output

mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTags">MediaconnectFlowOutputTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediaconnectFlowOutputTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTags">MediaconnectFlowOutputTags</a>

---


### MediaconnectFlowOutputVpcInterfaceAttachmentOutputReference <a name="MediaconnectFlowOutputVpcInterfaceAttachmentOutputReference" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_flow_output

mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachmentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.resetVpcInterfaceName">reset_vpc_interface_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_vpc_interface_name` <a name="reset_vpc_interface_name" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.resetVpcInterfaceName"></a>

```python
def reset_vpc_interface_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.property.vpcInterfaceNameInput">vpc_interface_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.property.vpcInterfaceName">vpc_interface_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachment">MediaconnectFlowOutputVpcInterfaceAttachment</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `vpc_interface_name_input`<sup>Optional</sup> <a name="vpc_interface_name_input" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.property.vpcInterfaceNameInput"></a>

```python
vpc_interface_name_input: str
```

- *Type:* str

---

##### `vpc_interface_name`<sup>Required</sup> <a name="vpc_interface_name" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.property.vpcInterfaceName"></a>

```python
vpc_interface_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediaconnectFlowOutputVpcInterfaceAttachment
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachment">MediaconnectFlowOutputVpcInterfaceAttachment</a>

---



