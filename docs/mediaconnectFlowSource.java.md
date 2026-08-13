# `mediaconnectFlowSource` Submodule <a name="`mediaconnectFlowSource` Submodule" id="@cdktn/provider-awscc.mediaconnectFlowSource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MediaconnectFlowSourceA <a name="MediaconnectFlowSourceA" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_source awscc_mediaconnect_flow_source}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_flow_source.MediaconnectFlowSourceA;

MediaconnectFlowSourceA.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .description(java.lang.String)
    .flowArn(java.lang.String)
    .name(java.lang.String)
//  .decryption(MediaconnectFlowSourceDecryptionA)
//  .entitlementArn(java.lang.String)
//  .gatewayBridgeSource(MediaconnectFlowSourceGatewayBridgeSourceA)
//  .ingestPort(java.lang.Number)
//  .maxBitrate(java.lang.Number)
//  .maxLatency(java.lang.Number)
//  .minLatency(java.lang.Number)
//  .protocol(java.lang.String)
//  .senderControlPort(java.lang.Number)
//  .senderIpAddress(java.lang.String)
//  .sourceListenerAddress(java.lang.String)
//  .sourceListenerPort(java.lang.Number)
//  .streamId(java.lang.String)
//  .tags(IResolvable|java.util.List<MediaconnectFlowSourceTags>)
//  .vpcInterfaceName(java.lang.String)
//  .whitelistCidr(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A description for the source. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer.parameter.flowArn">flowArn</a></code> | <code>java.lang.String</code> | The ARN of the flow. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the source. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer.parameter.decryption">decryption</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionA">MediaconnectFlowSourceDecryptionA</a></code> | The type of encryption that is used on the content ingested from this source. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer.parameter.entitlementArn">entitlementArn</a></code> | <code>java.lang.String</code> | The ARN of the entitlement that allows you to subscribe to content that comes from another AWS account. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer.parameter.gatewayBridgeSource">gatewayBridgeSource</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceA">MediaconnectFlowSourceGatewayBridgeSourceA</a></code> | The source configuration for cloud flows receiving a stream from a bridge. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer.parameter.ingestPort">ingestPort</a></code> | <code>java.lang.Number</code> | The port that the flow will be listening on for incoming content. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer.parameter.maxBitrate">maxBitrate</a></code> | <code>java.lang.Number</code> | The smoothing max bitrate for RIST, RTP, and RTP-FEC streams. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer.parameter.maxLatency">maxLatency</a></code> | <code>java.lang.Number</code> | The maximum latency in milliseconds. This parameter applies only to RIST-based and Zixi-based streams. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer.parameter.minLatency">minLatency</a></code> | <code>java.lang.Number</code> | The minimum latency in milliseconds. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer.parameter.protocol">protocol</a></code> | <code>java.lang.String</code> | The protocol that is used by the source. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer.parameter.senderControlPort">senderControlPort</a></code> | <code>java.lang.Number</code> | The port that the flow uses to send outbound requests to initiate connection with the sender for fujitsu-qos protocol. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer.parameter.senderIpAddress">senderIpAddress</a></code> | <code>java.lang.String</code> | The IP address that the flow communicates with to initiate connection with the sender for fujitsu-qos protocol. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer.parameter.sourceListenerAddress">sourceListenerAddress</a></code> | <code>java.lang.String</code> | Source IP or domain name for SRT-caller protocol. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer.parameter.sourceListenerPort">sourceListenerPort</a></code> | <code>java.lang.Number</code> | Source port for SRT-caller protocol. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer.parameter.streamId">streamId</a></code> | <code>java.lang.String</code> | The stream ID that you want to use for this transport. This parameter applies only to Zixi-based streams. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTags">MediaconnectFlowSourceTags</a>></code> | Key-value pairs that can be used to tag and organize this flow source. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer.parameter.vpcInterfaceName">vpcInterfaceName</a></code> | <code>java.lang.String</code> | The name of the VPC Interface this Source is configured with. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer.parameter.whitelistCidr">whitelistCidr</a></code> | <code>java.lang.String</code> | The range of IP addresses that should be allowed to contribute content to your source. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A description for the source.

This value is not used or seen outside of the current AWS Elemental MediaConnect account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_source#description MediaconnectFlowSourceA#description}

---

##### `flowArn`<sup>Required</sup> <a name="flowArn" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer.parameter.flowArn"></a>

- *Type:* java.lang.String

The ARN of the flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_source#flow_arn MediaconnectFlowSourceA#flow_arn}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_source#name MediaconnectFlowSourceA#name}

---

##### `decryption`<sup>Optional</sup> <a name="decryption" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer.parameter.decryption"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionA">MediaconnectFlowSourceDecryptionA</a>

The type of encryption that is used on the content ingested from this source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_source#decryption MediaconnectFlowSourceA#decryption}

---

##### `entitlementArn`<sup>Optional</sup> <a name="entitlementArn" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer.parameter.entitlementArn"></a>

- *Type:* java.lang.String

The ARN of the entitlement that allows you to subscribe to content that comes from another AWS account.

The entitlement is set by the content originator and the ARN is generated as part of the originator's flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_source#entitlement_arn MediaconnectFlowSourceA#entitlement_arn}

---

##### `gatewayBridgeSource`<sup>Optional</sup> <a name="gatewayBridgeSource" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer.parameter.gatewayBridgeSource"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceA">MediaconnectFlowSourceGatewayBridgeSourceA</a>

The source configuration for cloud flows receiving a stream from a bridge.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_source#gateway_bridge_source MediaconnectFlowSourceA#gateway_bridge_source}

---

##### `ingestPort`<sup>Optional</sup> <a name="ingestPort" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer.parameter.ingestPort"></a>

- *Type:* java.lang.Number

The port that the flow will be listening on for incoming content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_source#ingest_port MediaconnectFlowSourceA#ingest_port}

---

##### `maxBitrate`<sup>Optional</sup> <a name="maxBitrate" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer.parameter.maxBitrate"></a>

- *Type:* java.lang.Number

The smoothing max bitrate for RIST, RTP, and RTP-FEC streams.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_source#max_bitrate MediaconnectFlowSourceA#max_bitrate}

---

##### `maxLatency`<sup>Optional</sup> <a name="maxLatency" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer.parameter.maxLatency"></a>

- *Type:* java.lang.Number

The maximum latency in milliseconds. This parameter applies only to RIST-based and Zixi-based streams.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_source#max_latency MediaconnectFlowSourceA#max_latency}

---

##### `minLatency`<sup>Optional</sup> <a name="minLatency" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer.parameter.minLatency"></a>

- *Type:* java.lang.Number

The minimum latency in milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_source#min_latency MediaconnectFlowSourceA#min_latency}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer.parameter.protocol"></a>

- *Type:* java.lang.String

The protocol that is used by the source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_source#protocol MediaconnectFlowSourceA#protocol}

---

##### `senderControlPort`<sup>Optional</sup> <a name="senderControlPort" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer.parameter.senderControlPort"></a>

- *Type:* java.lang.Number

The port that the flow uses to send outbound requests to initiate connection with the sender for fujitsu-qos protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_source#sender_control_port MediaconnectFlowSourceA#sender_control_port}

---

##### `senderIpAddress`<sup>Optional</sup> <a name="senderIpAddress" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer.parameter.senderIpAddress"></a>

- *Type:* java.lang.String

The IP address that the flow communicates with to initiate connection with the sender for fujitsu-qos protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_source#sender_ip_address MediaconnectFlowSourceA#sender_ip_address}

---

##### `sourceListenerAddress`<sup>Optional</sup> <a name="sourceListenerAddress" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer.parameter.sourceListenerAddress"></a>

- *Type:* java.lang.String

Source IP or domain name for SRT-caller protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_source#source_listener_address MediaconnectFlowSourceA#source_listener_address}

---

##### `sourceListenerPort`<sup>Optional</sup> <a name="sourceListenerPort" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer.parameter.sourceListenerPort"></a>

- *Type:* java.lang.Number

Source port for SRT-caller protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_source#source_listener_port MediaconnectFlowSourceA#source_listener_port}

---

##### `streamId`<sup>Optional</sup> <a name="streamId" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer.parameter.streamId"></a>

- *Type:* java.lang.String

The stream ID that you want to use for this transport. This parameter applies only to Zixi-based streams.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_source#stream_id MediaconnectFlowSourceA#stream_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTags">MediaconnectFlowSourceTags</a>>

Key-value pairs that can be used to tag and organize this flow source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_source#tags MediaconnectFlowSourceA#tags}

---

##### `vpcInterfaceName`<sup>Optional</sup> <a name="vpcInterfaceName" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer.parameter.vpcInterfaceName"></a>

- *Type:* java.lang.String

The name of the VPC Interface this Source is configured with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_source#vpc_interface_name MediaconnectFlowSourceA#vpc_interface_name}

---

##### `whitelistCidr`<sup>Optional</sup> <a name="whitelistCidr" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer.parameter.whitelistCidr"></a>

- *Type:* java.lang.String

The range of IP addresses that should be allowed to contribute content to your source.

These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_source#whitelist_cidr MediaconnectFlowSourceA#whitelist_cidr}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.putDecryption">putDecryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.putGatewayBridgeSource">putGatewayBridgeSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetDecryption">resetDecryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetEntitlementArn">resetEntitlementArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetGatewayBridgeSource">resetGatewayBridgeSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetIngestPort">resetIngestPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetMaxBitrate">resetMaxBitrate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetMaxLatency">resetMaxLatency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetMinLatency">resetMinLatency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetSenderControlPort">resetSenderControlPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetSenderIpAddress">resetSenderIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetSourceListenerAddress">resetSourceListenerAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetSourceListenerPort">resetSourceListenerPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetStreamId">resetStreamId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetVpcInterfaceName">resetVpcInterfaceName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetWhitelistCidr">resetWhitelistCidr</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDecryption` <a name="putDecryption" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.putDecryption"></a>

```java
public void putDecryption(MediaconnectFlowSourceDecryptionA value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.putDecryption.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionA">MediaconnectFlowSourceDecryptionA</a>

---

##### `putGatewayBridgeSource` <a name="putGatewayBridgeSource" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.putGatewayBridgeSource"></a>

```java
public void putGatewayBridgeSource(MediaconnectFlowSourceGatewayBridgeSourceA value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.putGatewayBridgeSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceA">MediaconnectFlowSourceGatewayBridgeSourceA</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<MediaconnectFlowSourceTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTags">MediaconnectFlowSourceTags</a>>

---

##### `resetDecryption` <a name="resetDecryption" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetDecryption"></a>

```java
public void resetDecryption()
```

##### `resetEntitlementArn` <a name="resetEntitlementArn" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetEntitlementArn"></a>

```java
public void resetEntitlementArn()
```

##### `resetGatewayBridgeSource` <a name="resetGatewayBridgeSource" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetGatewayBridgeSource"></a>

```java
public void resetGatewayBridgeSource()
```

##### `resetIngestPort` <a name="resetIngestPort" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetIngestPort"></a>

```java
public void resetIngestPort()
```

##### `resetMaxBitrate` <a name="resetMaxBitrate" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetMaxBitrate"></a>

```java
public void resetMaxBitrate()
```

##### `resetMaxLatency` <a name="resetMaxLatency" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetMaxLatency"></a>

```java
public void resetMaxLatency()
```

##### `resetMinLatency` <a name="resetMinLatency" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetMinLatency"></a>

```java
public void resetMinLatency()
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetProtocol"></a>

```java
public void resetProtocol()
```

##### `resetSenderControlPort` <a name="resetSenderControlPort" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetSenderControlPort"></a>

```java
public void resetSenderControlPort()
```

##### `resetSenderIpAddress` <a name="resetSenderIpAddress" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetSenderIpAddress"></a>

```java
public void resetSenderIpAddress()
```

##### `resetSourceListenerAddress` <a name="resetSourceListenerAddress" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetSourceListenerAddress"></a>

```java
public void resetSourceListenerAddress()
```

##### `resetSourceListenerPort` <a name="resetSourceListenerPort" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetSourceListenerPort"></a>

```java
public void resetSourceListenerPort()
```

##### `resetStreamId` <a name="resetStreamId" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetStreamId"></a>

```java
public void resetStreamId()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetTags"></a>

```java
public void resetTags()
```

##### `resetVpcInterfaceName` <a name="resetVpcInterfaceName" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetVpcInterfaceName"></a>

```java
public void resetVpcInterfaceName()
```

##### `resetWhitelistCidr` <a name="resetWhitelistCidr" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetWhitelistCidr"></a>

```java
public void resetWhitelistCidr()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a MediaconnectFlowSourceA resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.isConstruct"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_flow_source.MediaconnectFlowSourceA;

MediaconnectFlowSourceA.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_flow_source.MediaconnectFlowSourceA;

MediaconnectFlowSourceA.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_flow_source.MediaconnectFlowSourceA;

MediaconnectFlowSourceA.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_flow_source.MediaconnectFlowSourceA;

MediaconnectFlowSourceA.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),MediaconnectFlowSourceA.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a MediaconnectFlowSourceA resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the MediaconnectFlowSourceA to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing MediaconnectFlowSourceA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_source#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the MediaconnectFlowSourceA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.decryption">decryption</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference">MediaconnectFlowSourceDecryptionAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.gatewayBridgeSource">gatewayBridgeSource</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference">MediaconnectFlowSourceGatewayBridgeSourceAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.ingestIp">ingestIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.sourceArn">sourceArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.sourceIngestPort">sourceIngestPort</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsList">MediaconnectFlowSourceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.decryptionInput">decryptionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionA">MediaconnectFlowSourceDecryptionA</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.entitlementArnInput">entitlementArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.flowArnInput">flowArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.gatewayBridgeSourceInput">gatewayBridgeSourceInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceA">MediaconnectFlowSourceGatewayBridgeSourceA</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.ingestPortInput">ingestPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.maxBitrateInput">maxBitrateInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.maxLatencyInput">maxLatencyInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.minLatencyInput">minLatencyInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.protocolInput">protocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.senderControlPortInput">senderControlPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.senderIpAddressInput">senderIpAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.sourceListenerAddressInput">sourceListenerAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.sourceListenerPortInput">sourceListenerPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.streamIdInput">streamIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTags">MediaconnectFlowSourceTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.vpcInterfaceNameInput">vpcInterfaceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.whitelistCidrInput">whitelistCidrInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.entitlementArn">entitlementArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.flowArn">flowArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.ingestPort">ingestPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.maxBitrate">maxBitrate</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.maxLatency">maxLatency</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.minLatency">minLatency</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.senderControlPort">senderControlPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.senderIpAddress">senderIpAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.sourceListenerAddress">sourceListenerAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.sourceListenerPort">sourceListenerPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.streamId">streamId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.vpcInterfaceName">vpcInterfaceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.whitelistCidr">whitelistCidr</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `decryption`<sup>Required</sup> <a name="decryption" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.decryption"></a>

```java
public MediaconnectFlowSourceDecryptionAOutputReference getDecryption();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference">MediaconnectFlowSourceDecryptionAOutputReference</a>

---

##### `gatewayBridgeSource`<sup>Required</sup> <a name="gatewayBridgeSource" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.gatewayBridgeSource"></a>

```java
public MediaconnectFlowSourceGatewayBridgeSourceAOutputReference getGatewayBridgeSource();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference">MediaconnectFlowSourceGatewayBridgeSourceAOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ingestIp`<sup>Required</sup> <a name="ingestIp" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.ingestIp"></a>

```java
public java.lang.String getIngestIp();
```

- *Type:* java.lang.String

---

##### `sourceArn`<sup>Required</sup> <a name="sourceArn" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.sourceArn"></a>

```java
public java.lang.String getSourceArn();
```

- *Type:* java.lang.String

---

##### `sourceIngestPort`<sup>Required</sup> <a name="sourceIngestPort" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.sourceIngestPort"></a>

```java
public java.lang.String getSourceIngestPort();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.tags"></a>

```java
public MediaconnectFlowSourceTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsList">MediaconnectFlowSourceTagsList</a>

---

##### `decryptionInput`<sup>Optional</sup> <a name="decryptionInput" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.decryptionInput"></a>

```java
public IResolvable|MediaconnectFlowSourceDecryptionA getDecryptionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionA">MediaconnectFlowSourceDecryptionA</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `entitlementArnInput`<sup>Optional</sup> <a name="entitlementArnInput" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.entitlementArnInput"></a>

```java
public java.lang.String getEntitlementArnInput();
```

- *Type:* java.lang.String

---

##### `flowArnInput`<sup>Optional</sup> <a name="flowArnInput" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.flowArnInput"></a>

```java
public java.lang.String getFlowArnInput();
```

- *Type:* java.lang.String

---

##### `gatewayBridgeSourceInput`<sup>Optional</sup> <a name="gatewayBridgeSourceInput" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.gatewayBridgeSourceInput"></a>

```java
public IResolvable|MediaconnectFlowSourceGatewayBridgeSourceA getGatewayBridgeSourceInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceA">MediaconnectFlowSourceGatewayBridgeSourceA</a>

---

##### `ingestPortInput`<sup>Optional</sup> <a name="ingestPortInput" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.ingestPortInput"></a>

```java
public java.lang.Number getIngestPortInput();
```

- *Type:* java.lang.Number

---

##### `maxBitrateInput`<sup>Optional</sup> <a name="maxBitrateInput" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.maxBitrateInput"></a>

```java
public java.lang.Number getMaxBitrateInput();
```

- *Type:* java.lang.Number

---

##### `maxLatencyInput`<sup>Optional</sup> <a name="maxLatencyInput" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.maxLatencyInput"></a>

```java
public java.lang.Number getMaxLatencyInput();
```

- *Type:* java.lang.Number

---

##### `minLatencyInput`<sup>Optional</sup> <a name="minLatencyInput" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.minLatencyInput"></a>

```java
public java.lang.Number getMinLatencyInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.protocolInput"></a>

```java
public java.lang.String getProtocolInput();
```

- *Type:* java.lang.String

---

##### `senderControlPortInput`<sup>Optional</sup> <a name="senderControlPortInput" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.senderControlPortInput"></a>

```java
public java.lang.Number getSenderControlPortInput();
```

- *Type:* java.lang.Number

---

##### `senderIpAddressInput`<sup>Optional</sup> <a name="senderIpAddressInput" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.senderIpAddressInput"></a>

```java
public java.lang.String getSenderIpAddressInput();
```

- *Type:* java.lang.String

---

##### `sourceListenerAddressInput`<sup>Optional</sup> <a name="sourceListenerAddressInput" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.sourceListenerAddressInput"></a>

```java
public java.lang.String getSourceListenerAddressInput();
```

- *Type:* java.lang.String

---

##### `sourceListenerPortInput`<sup>Optional</sup> <a name="sourceListenerPortInput" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.sourceListenerPortInput"></a>

```java
public java.lang.Number getSourceListenerPortInput();
```

- *Type:* java.lang.Number

---

##### `streamIdInput`<sup>Optional</sup> <a name="streamIdInput" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.streamIdInput"></a>

```java
public java.lang.String getStreamIdInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.tagsInput"></a>

```java
public IResolvable|java.util.List<MediaconnectFlowSourceTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTags">MediaconnectFlowSourceTags</a>>

---

##### `vpcInterfaceNameInput`<sup>Optional</sup> <a name="vpcInterfaceNameInput" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.vpcInterfaceNameInput"></a>

```java
public java.lang.String getVpcInterfaceNameInput();
```

- *Type:* java.lang.String

---

##### `whitelistCidrInput`<sup>Optional</sup> <a name="whitelistCidrInput" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.whitelistCidrInput"></a>

```java
public java.lang.String getWhitelistCidrInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `entitlementArn`<sup>Required</sup> <a name="entitlementArn" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.entitlementArn"></a>

```java
public java.lang.String getEntitlementArn();
```

- *Type:* java.lang.String

---

##### `flowArn`<sup>Required</sup> <a name="flowArn" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.flowArn"></a>

```java
public java.lang.String getFlowArn();
```

- *Type:* java.lang.String

---

##### `ingestPort`<sup>Required</sup> <a name="ingestPort" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.ingestPort"></a>

```java
public java.lang.Number getIngestPort();
```

- *Type:* java.lang.Number

---

##### `maxBitrate`<sup>Required</sup> <a name="maxBitrate" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.maxBitrate"></a>

```java
public java.lang.Number getMaxBitrate();
```

- *Type:* java.lang.Number

---

##### `maxLatency`<sup>Required</sup> <a name="maxLatency" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.maxLatency"></a>

```java
public java.lang.Number getMaxLatency();
```

- *Type:* java.lang.Number

---

##### `minLatency`<sup>Required</sup> <a name="minLatency" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.minLatency"></a>

```java
public java.lang.Number getMinLatency();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `senderControlPort`<sup>Required</sup> <a name="senderControlPort" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.senderControlPort"></a>

```java
public java.lang.Number getSenderControlPort();
```

- *Type:* java.lang.Number

---

##### `senderIpAddress`<sup>Required</sup> <a name="senderIpAddress" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.senderIpAddress"></a>

```java
public java.lang.String getSenderIpAddress();
```

- *Type:* java.lang.String

---

##### `sourceListenerAddress`<sup>Required</sup> <a name="sourceListenerAddress" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.sourceListenerAddress"></a>

```java
public java.lang.String getSourceListenerAddress();
```

- *Type:* java.lang.String

---

##### `sourceListenerPort`<sup>Required</sup> <a name="sourceListenerPort" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.sourceListenerPort"></a>

```java
public java.lang.Number getSourceListenerPort();
```

- *Type:* java.lang.Number

---

##### `streamId`<sup>Required</sup> <a name="streamId" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.streamId"></a>

```java
public java.lang.String getStreamId();
```

- *Type:* java.lang.String

---

##### `vpcInterfaceName`<sup>Required</sup> <a name="vpcInterfaceName" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.vpcInterfaceName"></a>

```java
public java.lang.String getVpcInterfaceName();
```

- *Type:* java.lang.String

---

##### `whitelistCidr`<sup>Required</sup> <a name="whitelistCidr" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.whitelistCidr"></a>

```java
public java.lang.String getWhitelistCidr();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MediaconnectFlowSourceAConfig <a name="MediaconnectFlowSourceAConfig" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_flow_source.MediaconnectFlowSourceAConfig;

MediaconnectFlowSourceAConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .description(java.lang.String)
    .flowArn(java.lang.String)
    .name(java.lang.String)
//  .decryption(MediaconnectFlowSourceDecryptionA)
//  .entitlementArn(java.lang.String)
//  .gatewayBridgeSource(MediaconnectFlowSourceGatewayBridgeSourceA)
//  .ingestPort(java.lang.Number)
//  .maxBitrate(java.lang.Number)
//  .maxLatency(java.lang.Number)
//  .minLatency(java.lang.Number)
//  .protocol(java.lang.String)
//  .senderControlPort(java.lang.Number)
//  .senderIpAddress(java.lang.String)
//  .sourceListenerAddress(java.lang.String)
//  .sourceListenerPort(java.lang.Number)
//  .streamId(java.lang.String)
//  .tags(IResolvable|java.util.List<MediaconnectFlowSourceTags>)
//  .vpcInterfaceName(java.lang.String)
//  .whitelistCidr(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.description">description</a></code> | <code>java.lang.String</code> | A description for the source. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.flowArn">flowArn</a></code> | <code>java.lang.String</code> | The ARN of the flow. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the source. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.decryption">decryption</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionA">MediaconnectFlowSourceDecryptionA</a></code> | The type of encryption that is used on the content ingested from this source. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.entitlementArn">entitlementArn</a></code> | <code>java.lang.String</code> | The ARN of the entitlement that allows you to subscribe to content that comes from another AWS account. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.gatewayBridgeSource">gatewayBridgeSource</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceA">MediaconnectFlowSourceGatewayBridgeSourceA</a></code> | The source configuration for cloud flows receiving a stream from a bridge. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.ingestPort">ingestPort</a></code> | <code>java.lang.Number</code> | The port that the flow will be listening on for incoming content. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.maxBitrate">maxBitrate</a></code> | <code>java.lang.Number</code> | The smoothing max bitrate for RIST, RTP, and RTP-FEC streams. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.maxLatency">maxLatency</a></code> | <code>java.lang.Number</code> | The maximum latency in milliseconds. This parameter applies only to RIST-based and Zixi-based streams. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.minLatency">minLatency</a></code> | <code>java.lang.Number</code> | The minimum latency in milliseconds. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.protocol">protocol</a></code> | <code>java.lang.String</code> | The protocol that is used by the source. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.senderControlPort">senderControlPort</a></code> | <code>java.lang.Number</code> | The port that the flow uses to send outbound requests to initiate connection with the sender for fujitsu-qos protocol. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.senderIpAddress">senderIpAddress</a></code> | <code>java.lang.String</code> | The IP address that the flow communicates with to initiate connection with the sender for fujitsu-qos protocol. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.sourceListenerAddress">sourceListenerAddress</a></code> | <code>java.lang.String</code> | Source IP or domain name for SRT-caller protocol. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.sourceListenerPort">sourceListenerPort</a></code> | <code>java.lang.Number</code> | Source port for SRT-caller protocol. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.streamId">streamId</a></code> | <code>java.lang.String</code> | The stream ID that you want to use for this transport. This parameter applies only to Zixi-based streams. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTags">MediaconnectFlowSourceTags</a>></code> | Key-value pairs that can be used to tag and organize this flow source. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.vpcInterfaceName">vpcInterfaceName</a></code> | <code>java.lang.String</code> | The name of the VPC Interface this Source is configured with. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.whitelistCidr">whitelistCidr</a></code> | <code>java.lang.String</code> | The range of IP addresses that should be allowed to contribute content to your source. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A description for the source.

This value is not used or seen outside of the current AWS Elemental MediaConnect account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_source#description MediaconnectFlowSourceA#description}

---

##### `flowArn`<sup>Required</sup> <a name="flowArn" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.flowArn"></a>

```java
public java.lang.String getFlowArn();
```

- *Type:* java.lang.String

The ARN of the flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_source#flow_arn MediaconnectFlowSourceA#flow_arn}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_source#name MediaconnectFlowSourceA#name}

---

##### `decryption`<sup>Optional</sup> <a name="decryption" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.decryption"></a>

```java
public MediaconnectFlowSourceDecryptionA getDecryption();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionA">MediaconnectFlowSourceDecryptionA</a>

The type of encryption that is used on the content ingested from this source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_source#decryption MediaconnectFlowSourceA#decryption}

---

##### `entitlementArn`<sup>Optional</sup> <a name="entitlementArn" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.entitlementArn"></a>

```java
public java.lang.String getEntitlementArn();
```

- *Type:* java.lang.String

The ARN of the entitlement that allows you to subscribe to content that comes from another AWS account.

The entitlement is set by the content originator and the ARN is generated as part of the originator's flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_source#entitlement_arn MediaconnectFlowSourceA#entitlement_arn}

---

##### `gatewayBridgeSource`<sup>Optional</sup> <a name="gatewayBridgeSource" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.gatewayBridgeSource"></a>

```java
public MediaconnectFlowSourceGatewayBridgeSourceA getGatewayBridgeSource();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceA">MediaconnectFlowSourceGatewayBridgeSourceA</a>

The source configuration for cloud flows receiving a stream from a bridge.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_source#gateway_bridge_source MediaconnectFlowSourceA#gateway_bridge_source}

---

##### `ingestPort`<sup>Optional</sup> <a name="ingestPort" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.ingestPort"></a>

```java
public java.lang.Number getIngestPort();
```

- *Type:* java.lang.Number

The port that the flow will be listening on for incoming content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_source#ingest_port MediaconnectFlowSourceA#ingest_port}

---

##### `maxBitrate`<sup>Optional</sup> <a name="maxBitrate" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.maxBitrate"></a>

```java
public java.lang.Number getMaxBitrate();
```

- *Type:* java.lang.Number

The smoothing max bitrate for RIST, RTP, and RTP-FEC streams.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_source#max_bitrate MediaconnectFlowSourceA#max_bitrate}

---

##### `maxLatency`<sup>Optional</sup> <a name="maxLatency" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.maxLatency"></a>

```java
public java.lang.Number getMaxLatency();
```

- *Type:* java.lang.Number

The maximum latency in milliseconds. This parameter applies only to RIST-based and Zixi-based streams.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_source#max_latency MediaconnectFlowSourceA#max_latency}

---

##### `minLatency`<sup>Optional</sup> <a name="minLatency" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.minLatency"></a>

```java
public java.lang.Number getMinLatency();
```

- *Type:* java.lang.Number

The minimum latency in milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_source#min_latency MediaconnectFlowSourceA#min_latency}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

The protocol that is used by the source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_source#protocol MediaconnectFlowSourceA#protocol}

---

##### `senderControlPort`<sup>Optional</sup> <a name="senderControlPort" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.senderControlPort"></a>

```java
public java.lang.Number getSenderControlPort();
```

- *Type:* java.lang.Number

The port that the flow uses to send outbound requests to initiate connection with the sender for fujitsu-qos protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_source#sender_control_port MediaconnectFlowSourceA#sender_control_port}

---

##### `senderIpAddress`<sup>Optional</sup> <a name="senderIpAddress" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.senderIpAddress"></a>

```java
public java.lang.String getSenderIpAddress();
```

- *Type:* java.lang.String

The IP address that the flow communicates with to initiate connection with the sender for fujitsu-qos protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_source#sender_ip_address MediaconnectFlowSourceA#sender_ip_address}

---

##### `sourceListenerAddress`<sup>Optional</sup> <a name="sourceListenerAddress" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.sourceListenerAddress"></a>

```java
public java.lang.String getSourceListenerAddress();
```

- *Type:* java.lang.String

Source IP or domain name for SRT-caller protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_source#source_listener_address MediaconnectFlowSourceA#source_listener_address}

---

##### `sourceListenerPort`<sup>Optional</sup> <a name="sourceListenerPort" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.sourceListenerPort"></a>

```java
public java.lang.Number getSourceListenerPort();
```

- *Type:* java.lang.Number

Source port for SRT-caller protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_source#source_listener_port MediaconnectFlowSourceA#source_listener_port}

---

##### `streamId`<sup>Optional</sup> <a name="streamId" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.streamId"></a>

```java
public java.lang.String getStreamId();
```

- *Type:* java.lang.String

The stream ID that you want to use for this transport. This parameter applies only to Zixi-based streams.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_source#stream_id MediaconnectFlowSourceA#stream_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.tags"></a>

```java
public IResolvable|java.util.List<MediaconnectFlowSourceTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTags">MediaconnectFlowSourceTags</a>>

Key-value pairs that can be used to tag and organize this flow source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_source#tags MediaconnectFlowSourceA#tags}

---

##### `vpcInterfaceName`<sup>Optional</sup> <a name="vpcInterfaceName" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.vpcInterfaceName"></a>

```java
public java.lang.String getVpcInterfaceName();
```

- *Type:* java.lang.String

The name of the VPC Interface this Source is configured with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_source#vpc_interface_name MediaconnectFlowSourceA#vpc_interface_name}

---

##### `whitelistCidr`<sup>Optional</sup> <a name="whitelistCidr" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.whitelistCidr"></a>

```java
public java.lang.String getWhitelistCidr();
```

- *Type:* java.lang.String

The range of IP addresses that should be allowed to contribute content to your source.

These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_source#whitelist_cidr MediaconnectFlowSourceA#whitelist_cidr}

---

### MediaconnectFlowSourceDecryptionA <a name="MediaconnectFlowSourceDecryptionA" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionA"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionA.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_flow_source.MediaconnectFlowSourceDecryptionA;

MediaconnectFlowSourceDecryptionA.builder()
//  .algorithm(java.lang.String)
//  .constantInitializationVector(java.lang.String)
//  .deviceId(java.lang.String)
//  .keyType(java.lang.String)
//  .region(java.lang.String)
//  .resourceId(java.lang.String)
//  .roleArn(java.lang.String)
//  .secretArn(java.lang.String)
//  .url(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionA.property.algorithm">algorithm</a></code> | <code>java.lang.String</code> | The type of algorithm that is used for the encryption (such as aes128, aes192, or aes256). |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionA.property.constantInitializationVector">constantInitializationVector</a></code> | <code>java.lang.String</code> | A 128-bit, 16-byte hex value represented by a 32-character string, to be used with the key for encrypting content. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionA.property.deviceId">deviceId</a></code> | <code>java.lang.String</code> | The value of one of the devices that you configured with your digital rights management (DRM) platform key provider. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionA.property.keyType">keyType</a></code> | <code>java.lang.String</code> | The type of key that is used for the encryption. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionA.property.region">region</a></code> | <code>java.lang.String</code> | The AWS Region that the API Gateway proxy endpoint was created in. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionA.property.resourceId">resourceId</a></code> | <code>java.lang.String</code> | An identifier for the content. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionA.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | The ARN of the role that you created during setup (when you set up AWS Elemental MediaConnect as a trusted entity). |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionA.property.secretArn">secretArn</a></code> | <code>java.lang.String</code> | The ARN of the secret that you created in AWS Secrets Manager to store the encryption key. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionA.property.url">url</a></code> | <code>java.lang.String</code> | The URL from the API Gateway proxy that you set up to talk to your key server. |

---

##### `algorithm`<sup>Optional</sup> <a name="algorithm" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionA.property.algorithm"></a>

```java
public java.lang.String getAlgorithm();
```

- *Type:* java.lang.String

The type of algorithm that is used for the encryption (such as aes128, aes192, or aes256).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_source#algorithm MediaconnectFlowSourceA#algorithm}

---

##### `constantInitializationVector`<sup>Optional</sup> <a name="constantInitializationVector" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionA.property.constantInitializationVector"></a>

```java
public java.lang.String getConstantInitializationVector();
```

- *Type:* java.lang.String

A 128-bit, 16-byte hex value represented by a 32-character string, to be used with the key for encrypting content.

This parameter is not valid for static key encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_source#constant_initialization_vector MediaconnectFlowSourceA#constant_initialization_vector}

---

##### `deviceId`<sup>Optional</sup> <a name="deviceId" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionA.property.deviceId"></a>

```java
public java.lang.String getDeviceId();
```

- *Type:* java.lang.String

The value of one of the devices that you configured with your digital rights management (DRM) platform key provider.

This parameter is required for SPEKE encryption and is not valid for static key encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_source#device_id MediaconnectFlowSourceA#device_id}

---

##### `keyType`<sup>Optional</sup> <a name="keyType" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionA.property.keyType"></a>

```java
public java.lang.String getKeyType();
```

- *Type:* java.lang.String

The type of key that is used for the encryption.

If no keyType is provided, the service will use the default setting (static-key).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_source#key_type MediaconnectFlowSourceA#key_type}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionA.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

The AWS Region that the API Gateway proxy endpoint was created in.

This parameter is required for SPEKE encryption and is not valid for static key encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_source#region MediaconnectFlowSourceA#region}

---

##### `resourceId`<sup>Optional</sup> <a name="resourceId" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionA.property.resourceId"></a>

```java
public java.lang.String getResourceId();
```

- *Type:* java.lang.String

An identifier for the content.

The service sends this value to the key server to identify the current endpoint. The resource ID is also known as the content ID. This parameter is required for SPEKE encryption and is not valid for static key encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_source#resource_id MediaconnectFlowSourceA#resource_id}

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionA.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

The ARN of the role that you created during setup (when you set up AWS Elemental MediaConnect as a trusted entity).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_source#role_arn MediaconnectFlowSourceA#role_arn}

---

##### `secretArn`<sup>Optional</sup> <a name="secretArn" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionA.property.secretArn"></a>

```java
public java.lang.String getSecretArn();
```

- *Type:* java.lang.String

The ARN of the secret that you created in AWS Secrets Manager to store the encryption key.

This parameter is required for static key encryption and is not valid for SPEKE encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_source#secret_arn MediaconnectFlowSourceA#secret_arn}

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionA.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

The URL from the API Gateway proxy that you set up to talk to your key server.

This parameter is required for SPEKE encryption and is not valid for static key encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_source#url MediaconnectFlowSourceA#url}

---

### MediaconnectFlowSourceGatewayBridgeSourceA <a name="MediaconnectFlowSourceGatewayBridgeSourceA" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceA"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceA.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_flow_source.MediaconnectFlowSourceGatewayBridgeSourceA;

MediaconnectFlowSourceGatewayBridgeSourceA.builder()
//  .bridgeArn(java.lang.String)
//  .vpcInterfaceAttachment(MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentA)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceA.property.bridgeArn">bridgeArn</a></code> | <code>java.lang.String</code> | The ARN of the bridge feeding this flow. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceA.property.vpcInterfaceAttachment">vpcInterfaceAttachment</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentA">MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentA</a></code> | The name of the VPC interface attachment to use for this bridge source. |

---

##### `bridgeArn`<sup>Optional</sup> <a name="bridgeArn" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceA.property.bridgeArn"></a>

```java
public java.lang.String getBridgeArn();
```

- *Type:* java.lang.String

The ARN of the bridge feeding this flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_source#bridge_arn MediaconnectFlowSourceA#bridge_arn}

---

##### `vpcInterfaceAttachment`<sup>Optional</sup> <a name="vpcInterfaceAttachment" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceA.property.vpcInterfaceAttachment"></a>

```java
public MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentA getVpcInterfaceAttachment();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentA">MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentA</a>

The name of the VPC interface attachment to use for this bridge source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_source#vpc_interface_attachment MediaconnectFlowSourceA#vpc_interface_attachment}

---

### MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentA <a name="MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentA" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentA"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentA.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_flow_source.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentA;

MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentA.builder()
//  .vpcInterfaceName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentA.property.vpcInterfaceName">vpcInterfaceName</a></code> | <code>java.lang.String</code> | The name of the VPC interface to use for this resource. |

---

##### `vpcInterfaceName`<sup>Optional</sup> <a name="vpcInterfaceName" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentA.property.vpcInterfaceName"></a>

```java
public java.lang.String getVpcInterfaceName();
```

- *Type:* java.lang.String

The name of the VPC interface to use for this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_source#vpc_interface_name MediaconnectFlowSourceA#vpc_interface_name}

---

### MediaconnectFlowSourceTags <a name="MediaconnectFlowSourceTags" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_flow_source.MediaconnectFlowSourceTags;

MediaconnectFlowSourceTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_source#key MediaconnectFlowSourceA#key}. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_source#value MediaconnectFlowSourceA#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_source#key MediaconnectFlowSourceA#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_source#value MediaconnectFlowSourceA#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### MediaconnectFlowSourceDecryptionAOutputReference <a name="MediaconnectFlowSourceDecryptionAOutputReference" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_flow_source.MediaconnectFlowSourceDecryptionAOutputReference;

new MediaconnectFlowSourceDecryptionAOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.resetAlgorithm">resetAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.resetConstantInitializationVector">resetConstantInitializationVector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.resetDeviceId">resetDeviceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.resetKeyType">resetKeyType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.resetResourceId">resetResourceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.resetRoleArn">resetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.resetSecretArn">resetSecretArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.resetUrl">resetUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAlgorithm` <a name="resetAlgorithm" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.resetAlgorithm"></a>

```java
public void resetAlgorithm()
```

##### `resetConstantInitializationVector` <a name="resetConstantInitializationVector" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.resetConstantInitializationVector"></a>

```java
public void resetConstantInitializationVector()
```

##### `resetDeviceId` <a name="resetDeviceId" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.resetDeviceId"></a>

```java
public void resetDeviceId()
```

##### `resetKeyType` <a name="resetKeyType" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.resetKeyType"></a>

```java
public void resetKeyType()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetResourceId` <a name="resetResourceId" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.resetResourceId"></a>

```java
public void resetResourceId()
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.resetRoleArn"></a>

```java
public void resetRoleArn()
```

##### `resetSecretArn` <a name="resetSecretArn" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.resetSecretArn"></a>

```java
public void resetSecretArn()
```

##### `resetUrl` <a name="resetUrl" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.resetUrl"></a>

```java
public void resetUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.algorithmInput">algorithmInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.constantInitializationVectorInput">constantInitializationVectorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.deviceIdInput">deviceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.keyTypeInput">keyTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.resourceIdInput">resourceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.secretArnInput">secretArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.urlInput">urlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.algorithm">algorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.constantInitializationVector">constantInitializationVector</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.deviceId">deviceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.keyType">keyType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.resourceId">resourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.secretArn">secretArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionA">MediaconnectFlowSourceDecryptionA</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `algorithmInput`<sup>Optional</sup> <a name="algorithmInput" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.algorithmInput"></a>

```java
public java.lang.String getAlgorithmInput();
```

- *Type:* java.lang.String

---

##### `constantInitializationVectorInput`<sup>Optional</sup> <a name="constantInitializationVectorInput" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.constantInitializationVectorInput"></a>

```java
public java.lang.String getConstantInitializationVectorInput();
```

- *Type:* java.lang.String

---

##### `deviceIdInput`<sup>Optional</sup> <a name="deviceIdInput" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.deviceIdInput"></a>

```java
public java.lang.String getDeviceIdInput();
```

- *Type:* java.lang.String

---

##### `keyTypeInput`<sup>Optional</sup> <a name="keyTypeInput" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.keyTypeInput"></a>

```java
public java.lang.String getKeyTypeInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `resourceIdInput`<sup>Optional</sup> <a name="resourceIdInput" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.resourceIdInput"></a>

```java
public java.lang.String getResourceIdInput();
```

- *Type:* java.lang.String

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `secretArnInput`<sup>Optional</sup> <a name="secretArnInput" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.secretArnInput"></a>

```java
public java.lang.String getSecretArnInput();
```

- *Type:* java.lang.String

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.urlInput"></a>

```java
public java.lang.String getUrlInput();
```

- *Type:* java.lang.String

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.algorithm"></a>

```java
public java.lang.String getAlgorithm();
```

- *Type:* java.lang.String

---

##### `constantInitializationVector`<sup>Required</sup> <a name="constantInitializationVector" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.constantInitializationVector"></a>

```java
public java.lang.String getConstantInitializationVector();
```

- *Type:* java.lang.String

---

##### `deviceId`<sup>Required</sup> <a name="deviceId" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.deviceId"></a>

```java
public java.lang.String getDeviceId();
```

- *Type:* java.lang.String

---

##### `keyType`<sup>Required</sup> <a name="keyType" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.keyType"></a>

```java
public java.lang.String getKeyType();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.resourceId"></a>

```java
public java.lang.String getResourceId();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.secretArn"></a>

```java
public java.lang.String getSecretArn();
```

- *Type:* java.lang.String

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.internalValue"></a>

```java
public IResolvable|MediaconnectFlowSourceDecryptionA getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionA">MediaconnectFlowSourceDecryptionA</a>

---


### MediaconnectFlowSourceGatewayBridgeSourceAOutputReference <a name="MediaconnectFlowSourceGatewayBridgeSourceAOutputReference" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_flow_source.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference;

new MediaconnectFlowSourceGatewayBridgeSourceAOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.putVpcInterfaceAttachment">putVpcInterfaceAttachment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.resetBridgeArn">resetBridgeArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.resetVpcInterfaceAttachment">resetVpcInterfaceAttachment</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putVpcInterfaceAttachment` <a name="putVpcInterfaceAttachment" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.putVpcInterfaceAttachment"></a>

```java
public void putVpcInterfaceAttachment(MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentA value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.putVpcInterfaceAttachment.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentA">MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentA</a>

---

##### `resetBridgeArn` <a name="resetBridgeArn" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.resetBridgeArn"></a>

```java
public void resetBridgeArn()
```

##### `resetVpcInterfaceAttachment` <a name="resetVpcInterfaceAttachment" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.resetVpcInterfaceAttachment"></a>

```java
public void resetVpcInterfaceAttachment()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.property.vpcInterfaceAttachment">vpcInterfaceAttachment</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference">MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.property.bridgeArnInput">bridgeArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.property.vpcInterfaceAttachmentInput">vpcInterfaceAttachmentInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentA">MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentA</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.property.bridgeArn">bridgeArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceA">MediaconnectFlowSourceGatewayBridgeSourceA</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `vpcInterfaceAttachment`<sup>Required</sup> <a name="vpcInterfaceAttachment" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.property.vpcInterfaceAttachment"></a>

```java
public MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference getVpcInterfaceAttachment();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference">MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference</a>

---

##### `bridgeArnInput`<sup>Optional</sup> <a name="bridgeArnInput" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.property.bridgeArnInput"></a>

```java
public java.lang.String getBridgeArnInput();
```

- *Type:* java.lang.String

---

##### `vpcInterfaceAttachmentInput`<sup>Optional</sup> <a name="vpcInterfaceAttachmentInput" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.property.vpcInterfaceAttachmentInput"></a>

```java
public IResolvable|MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentA getVpcInterfaceAttachmentInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentA">MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentA</a>

---

##### `bridgeArn`<sup>Required</sup> <a name="bridgeArn" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.property.bridgeArn"></a>

```java
public java.lang.String getBridgeArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.property.internalValue"></a>

```java
public IResolvable|MediaconnectFlowSourceGatewayBridgeSourceA getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceA">MediaconnectFlowSourceGatewayBridgeSourceA</a>

---


### MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference <a name="MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_flow_source.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference;

new MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.resetVpcInterfaceName">resetVpcInterfaceName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetVpcInterfaceName` <a name="resetVpcInterfaceName" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.resetVpcInterfaceName"></a>

```java
public void resetVpcInterfaceName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.property.vpcInterfaceNameInput">vpcInterfaceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.property.vpcInterfaceName">vpcInterfaceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentA">MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentA</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `vpcInterfaceNameInput`<sup>Optional</sup> <a name="vpcInterfaceNameInput" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.property.vpcInterfaceNameInput"></a>

```java
public java.lang.String getVpcInterfaceNameInput();
```

- *Type:* java.lang.String

---

##### `vpcInterfaceName`<sup>Required</sup> <a name="vpcInterfaceName" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.property.vpcInterfaceName"></a>

```java
public java.lang.String getVpcInterfaceName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.property.internalValue"></a>

```java
public IResolvable|MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentA getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentA">MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentA</a>

---


### MediaconnectFlowSourceTagsList <a name="MediaconnectFlowSourceTagsList" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_flow_source.MediaconnectFlowSourceTagsList;

new MediaconnectFlowSourceTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsList.get"></a>

```java
public MediaconnectFlowSourceTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTags">MediaconnectFlowSourceTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<MediaconnectFlowSourceTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTags">MediaconnectFlowSourceTags</a>>

---


### MediaconnectFlowSourceTagsOutputReference <a name="MediaconnectFlowSourceTagsOutputReference" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_flow_source.MediaconnectFlowSourceTagsOutputReference;

new MediaconnectFlowSourceTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTags">MediaconnectFlowSourceTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|MediaconnectFlowSourceTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTags">MediaconnectFlowSourceTags</a>

---



