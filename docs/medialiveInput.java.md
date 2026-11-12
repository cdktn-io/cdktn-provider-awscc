# `medialiveInput` Submodule <a name="`medialiveInput` Submodule" id="@cdktn/provider-awscc.medialiveInput"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MedialiveInput <a name="MedialiveInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input awscc_medialive_input}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.Initializer"></a>

```java
import io.cdktn.providers.awscc.medialive_input.MedialiveInput;

MedialiveInput.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .destinations(IResolvable|java.util.List<MedialiveInputDestinations>)
//  .inputDevices(IResolvable|java.util.List<MedialiveInputInputDevices>)
//  .inputNetworkLocation(java.lang.String)
//  .inputSecurityGroups(java.util.List<java.lang.String>)
//  .mediaConnectFlows(IResolvable|java.util.List<MedialiveInputMediaConnectFlows>)
//  .multicastSettings(MedialiveInputMulticastSettings)
//  .name(java.lang.String)
//  .roleArn(java.lang.String)
//  .routerSettings(MedialiveInputRouterSettings)
//  .sdiSources(java.util.List<java.lang.String>)
//  .smpte2110ReceiverGroupSettings(MedialiveInputSmpte2110ReceiverGroupSettings)
//  .sources(IResolvable|java.util.List<MedialiveInputSources>)
//  .srtSettings(MedialiveInputSrtSettings)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .type(java.lang.String)
//  .vpc(MedialiveInputVpc)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.Initializer.parameter.destinations">destinations</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinations">MedialiveInputDestinations</a>></code> | A list of the destinations of the input (PUSH-type). |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.Initializer.parameter.inputDevices">inputDevices</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevices">MedialiveInputInputDevices</a>></code> | Settings for the input devices. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.Initializer.parameter.inputNetworkLocation">inputNetworkLocation</a></code> | <code>java.lang.String</code> | The location of this input. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.Initializer.parameter.inputSecurityGroups">inputSecurityGroups</a></code> | <code>java.util.List<java.lang.String></code> | A list of security groups referenced by IDs to attach to the input. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.Initializer.parameter.mediaConnectFlows">mediaConnectFlows</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlows">MedialiveInputMediaConnectFlows</a>></code> | A list of MediaConnect Flows for this input. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.Initializer.parameter.multicastSettings">multicastSettings</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettings">MedialiveInputMulticastSettings</a></code> | Multicast Input settings. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The user-assigned name (This is a mutable value). |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.Initializer.parameter.roleArn">roleArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the role this input assumes during and after creation. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.Initializer.parameter.routerSettings">routerSettings</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettings">MedialiveInputRouterSettings</a></code> | Information about the MediaConnect Router association for this input. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.Initializer.parameter.sdiSources">sdiSources</a></code> | <code>java.util.List<java.lang.String></code> | SDI Sources for this Input. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.Initializer.parameter.smpte2110ReceiverGroupSettings">smpte2110ReceiverGroupSettings</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettings">MedialiveInputSmpte2110ReceiverGroupSettings</a></code> | Include this parameter if the input is a SMPTE 2110 input, to identify the stream sources for this input. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.Initializer.parameter.sources">sources</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSources">MedialiveInputSources</a>></code> | A list of the sources of the input (PULL-type). |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.Initializer.parameter.srtSettings">srtSettings</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettings">MedialiveInputSrtSettings</a></code> | The settings associated with an SRT input. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A collection of key-value pairs. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | The different types of inputs that AWS Elemental MediaLive supports. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.Initializer.parameter.vpc">vpc</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputVpc">MedialiveInputVpc</a></code> | Settings for a private VPC Input. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `destinations`<sup>Optional</sup> <a name="destinations" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.Initializer.parameter.destinations"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinations">MedialiveInputDestinations</a>>

A list of the destinations of the input (PUSH-type).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#destinations MedialiveInput#destinations}

---

##### `inputDevices`<sup>Optional</sup> <a name="inputDevices" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.Initializer.parameter.inputDevices"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevices">MedialiveInputInputDevices</a>>

Settings for the input devices.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#input_devices MedialiveInput#input_devices}

---

##### `inputNetworkLocation`<sup>Optional</sup> <a name="inputNetworkLocation" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.Initializer.parameter.inputNetworkLocation"></a>

- *Type:* java.lang.String

The location of this input.

AWS, for an input existing in the AWS Cloud, On-Prem for
an input in a customer network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#input_network_location MedialiveInput#input_network_location}

---

##### `inputSecurityGroups`<sup>Optional</sup> <a name="inputSecurityGroups" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.Initializer.parameter.inputSecurityGroups"></a>

- *Type:* java.util.List<java.lang.String>

A list of security groups referenced by IDs to attach to the input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#input_security_groups MedialiveInput#input_security_groups}

---

##### `mediaConnectFlows`<sup>Optional</sup> <a name="mediaConnectFlows" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.Initializer.parameter.mediaConnectFlows"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlows">MedialiveInputMediaConnectFlows</a>>

A list of MediaConnect Flows for this input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#media_connect_flows MedialiveInput#media_connect_flows}

---

##### `multicastSettings`<sup>Optional</sup> <a name="multicastSettings" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.Initializer.parameter.multicastSettings"></a>

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettings">MedialiveInputMulticastSettings</a>

Multicast Input settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#multicast_settings MedialiveInput#multicast_settings}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The user-assigned name (This is a mutable value).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#name MedialiveInput#name}

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.Initializer.parameter.roleArn"></a>

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the role this input assumes during and after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#role_arn MedialiveInput#role_arn}

---

##### `routerSettings`<sup>Optional</sup> <a name="routerSettings" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.Initializer.parameter.routerSettings"></a>

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettings">MedialiveInputRouterSettings</a>

Information about the MediaConnect Router association for this input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#router_settings MedialiveInput#router_settings}

---

##### `sdiSources`<sup>Optional</sup> <a name="sdiSources" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.Initializer.parameter.sdiSources"></a>

- *Type:* java.util.List<java.lang.String>

SDI Sources for this Input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#sdi_sources MedialiveInput#sdi_sources}

---

##### `smpte2110ReceiverGroupSettings`<sup>Optional</sup> <a name="smpte2110ReceiverGroupSettings" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.Initializer.parameter.smpte2110ReceiverGroupSettings"></a>

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettings">MedialiveInputSmpte2110ReceiverGroupSettings</a>

Include this parameter if the input is a SMPTE 2110 input, to identify the stream sources for this input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#smpte_2110_receiver_group_settings MedialiveInput#smpte_2110_receiver_group_settings}

---

##### `sources`<sup>Optional</sup> <a name="sources" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.Initializer.parameter.sources"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSources">MedialiveInputSources</a>>

A list of the sources of the input (PULL-type).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#sources MedialiveInput#sources}

---

##### `srtSettings`<sup>Optional</sup> <a name="srtSettings" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.Initializer.parameter.srtSettings"></a>

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettings">MedialiveInputSrtSettings</a>

The settings associated with an SRT input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#srt_settings MedialiveInput#srt_settings}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A collection of key-value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#tags MedialiveInput#tags}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.Initializer.parameter.type"></a>

- *Type:* java.lang.String

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
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.putDestinations">putDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.putInputDevices">putInputDevices</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.putMediaConnectFlows">putMediaConnectFlows</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.putMulticastSettings">putMulticastSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.putRouterSettings">putRouterSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.putSmpte2110ReceiverGroupSettings">putSmpte2110ReceiverGroupSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.putSources">putSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.putSrtSettings">putSrtSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.putVpc">putVpc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.resetDestinations">resetDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.resetInputDevices">resetInputDevices</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.resetInputNetworkLocation">resetInputNetworkLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.resetInputSecurityGroups">resetInputSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.resetMediaConnectFlows">resetMediaConnectFlows</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.resetMulticastSettings">resetMulticastSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.resetRoleArn">resetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.resetRouterSettings">resetRouterSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.resetSdiSources">resetSdiSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.resetSmpte2110ReceiverGroupSettings">resetSmpte2110ReceiverGroupSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.resetSources">resetSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.resetSrtSettings">resetSrtSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.resetVpc">resetVpc</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDestinations` <a name="putDestinations" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.putDestinations"></a>

```java
public void putDestinations(IResolvable|java.util.List<MedialiveInputDestinations> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.putDestinations.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinations">MedialiveInputDestinations</a>>

---

##### `putInputDevices` <a name="putInputDevices" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.putInputDevices"></a>

```java
public void putInputDevices(IResolvable|java.util.List<MedialiveInputInputDevices> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.putInputDevices.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevices">MedialiveInputInputDevices</a>>

---

##### `putMediaConnectFlows` <a name="putMediaConnectFlows" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.putMediaConnectFlows"></a>

```java
public void putMediaConnectFlows(IResolvable|java.util.List<MedialiveInputMediaConnectFlows> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.putMediaConnectFlows.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlows">MedialiveInputMediaConnectFlows</a>>

---

##### `putMulticastSettings` <a name="putMulticastSettings" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.putMulticastSettings"></a>

```java
public void putMulticastSettings(MedialiveInputMulticastSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.putMulticastSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettings">MedialiveInputMulticastSettings</a>

---

##### `putRouterSettings` <a name="putRouterSettings" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.putRouterSettings"></a>

```java
public void putRouterSettings(MedialiveInputRouterSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.putRouterSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettings">MedialiveInputRouterSettings</a>

---

##### `putSmpte2110ReceiverGroupSettings` <a name="putSmpte2110ReceiverGroupSettings" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.putSmpte2110ReceiverGroupSettings"></a>

```java
public void putSmpte2110ReceiverGroupSettings(MedialiveInputSmpte2110ReceiverGroupSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.putSmpte2110ReceiverGroupSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettings">MedialiveInputSmpte2110ReceiverGroupSettings</a>

---

##### `putSources` <a name="putSources" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.putSources"></a>

```java
public void putSources(IResolvable|java.util.List<MedialiveInputSources> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.putSources.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSources">MedialiveInputSources</a>>

---

##### `putSrtSettings` <a name="putSrtSettings" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.putSrtSettings"></a>

```java
public void putSrtSettings(MedialiveInputSrtSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.putSrtSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettings">MedialiveInputSrtSettings</a>

---

##### `putVpc` <a name="putVpc" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.putVpc"></a>

```java
public void putVpc(MedialiveInputVpc value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.putVpc.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputVpc">MedialiveInputVpc</a>

---

##### `resetDestinations` <a name="resetDestinations" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.resetDestinations"></a>

```java
public void resetDestinations()
```

##### `resetInputDevices` <a name="resetInputDevices" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.resetInputDevices"></a>

```java
public void resetInputDevices()
```

##### `resetInputNetworkLocation` <a name="resetInputNetworkLocation" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.resetInputNetworkLocation"></a>

```java
public void resetInputNetworkLocation()
```

##### `resetInputSecurityGroups` <a name="resetInputSecurityGroups" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.resetInputSecurityGroups"></a>

```java
public void resetInputSecurityGroups()
```

##### `resetMediaConnectFlows` <a name="resetMediaConnectFlows" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.resetMediaConnectFlows"></a>

```java
public void resetMediaConnectFlows()
```

##### `resetMulticastSettings` <a name="resetMulticastSettings" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.resetMulticastSettings"></a>

```java
public void resetMulticastSettings()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.resetName"></a>

```java
public void resetName()
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.resetRoleArn"></a>

```java
public void resetRoleArn()
```

##### `resetRouterSettings` <a name="resetRouterSettings" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.resetRouterSettings"></a>

```java
public void resetRouterSettings()
```

##### `resetSdiSources` <a name="resetSdiSources" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.resetSdiSources"></a>

```java
public void resetSdiSources()
```

##### `resetSmpte2110ReceiverGroupSettings` <a name="resetSmpte2110ReceiverGroupSettings" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.resetSmpte2110ReceiverGroupSettings"></a>

```java
public void resetSmpte2110ReceiverGroupSettings()
```

##### `resetSources` <a name="resetSources" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.resetSources"></a>

```java
public void resetSources()
```

##### `resetSrtSettings` <a name="resetSrtSettings" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.resetSrtSettings"></a>

```java
public void resetSrtSettings()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.resetTags"></a>

```java
public void resetTags()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.resetType"></a>

```java
public void resetType()
```

##### `resetVpc` <a name="resetVpc" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.resetVpc"></a>

```java
public void resetVpc()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a MedialiveInput resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.isConstruct"></a>

```java
import io.cdktn.providers.awscc.medialive_input.MedialiveInput;

MedialiveInput.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.medialive_input.MedialiveInput;

MedialiveInput.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.medialive_input.MedialiveInput;

MedialiveInput.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.medialive_input.MedialiveInput;

MedialiveInput.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),MedialiveInput.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a MedialiveInput resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the MedialiveInput to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing MedialiveInput that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the MedialiveInput to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.attachedChannels">attachedChannels</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.destinations">destinations</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsList">MedialiveInputDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.destinationUrls">destinationUrls</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.inputClass">inputClass</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.inputDevices">inputDevices</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesList">MedialiveInputInputDevicesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.inputId">inputId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.inputPartnerIds">inputPartnerIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.inputSourceType">inputSourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.mediaConnectFlows">mediaConnectFlows</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsList">MedialiveInputMediaConnectFlowsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.multicastSettings">multicastSettings</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference">MedialiveInputMulticastSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.routerSettings">routerSettings</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference">MedialiveInputRouterSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.securityGroups">securityGroups</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.smpte2110ReceiverGroupSettings">smpte2110ReceiverGroupSettings</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference">MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.sources">sources</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesList">MedialiveInputSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.sourceUrls">sourceUrls</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.srtSettings">srtSettings</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference">MedialiveInputSrtSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.vpc">vpc</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference">MedialiveInputVpcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.destinationsInput">destinationsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinations">MedialiveInputDestinations</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.inputDevicesInput">inputDevicesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevices">MedialiveInputInputDevices</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.inputNetworkLocationInput">inputNetworkLocationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.inputSecurityGroupsInput">inputSecurityGroupsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.mediaConnectFlowsInput">mediaConnectFlowsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlows">MedialiveInputMediaConnectFlows</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.multicastSettingsInput">multicastSettingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettings">MedialiveInputMulticastSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.routerSettingsInput">routerSettingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettings">MedialiveInputRouterSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.sdiSourcesInput">sdiSourcesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.smpte2110ReceiverGroupSettingsInput">smpte2110ReceiverGroupSettingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettings">MedialiveInputSmpte2110ReceiverGroupSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.sourcesInput">sourcesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSources">MedialiveInputSources</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.srtSettingsInput">srtSettingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettings">MedialiveInputSrtSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.vpcInput">vpcInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputVpc">MedialiveInputVpc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.inputNetworkLocation">inputNetworkLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.inputSecurityGroups">inputSecurityGroups</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.sdiSources">sdiSources</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `attachedChannels`<sup>Required</sup> <a name="attachedChannels" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.attachedChannels"></a>

```java
public java.util.List<java.lang.String> getAttachedChannels();
```

- *Type:* java.util.List<java.lang.String>

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.destinations"></a>

```java
public MedialiveInputDestinationsList getDestinations();
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsList">MedialiveInputDestinationsList</a>

---

##### `destinationUrls`<sup>Required</sup> <a name="destinationUrls" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.destinationUrls"></a>

```java
public java.util.List<java.lang.String> getDestinationUrls();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `inputClass`<sup>Required</sup> <a name="inputClass" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.inputClass"></a>

```java
public java.lang.String getInputClass();
```

- *Type:* java.lang.String

---

##### `inputDevices`<sup>Required</sup> <a name="inputDevices" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.inputDevices"></a>

```java
public MedialiveInputInputDevicesList getInputDevices();
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesList">MedialiveInputInputDevicesList</a>

---

##### `inputId`<sup>Required</sup> <a name="inputId" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.inputId"></a>

```java
public java.lang.String getInputId();
```

- *Type:* java.lang.String

---

##### `inputPartnerIds`<sup>Required</sup> <a name="inputPartnerIds" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.inputPartnerIds"></a>

```java
public java.util.List<java.lang.String> getInputPartnerIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `inputSourceType`<sup>Required</sup> <a name="inputSourceType" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.inputSourceType"></a>

```java
public java.lang.String getInputSourceType();
```

- *Type:* java.lang.String

---

##### `mediaConnectFlows`<sup>Required</sup> <a name="mediaConnectFlows" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.mediaConnectFlows"></a>

```java
public MedialiveInputMediaConnectFlowsList getMediaConnectFlows();
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsList">MedialiveInputMediaConnectFlowsList</a>

---

##### `multicastSettings`<sup>Required</sup> <a name="multicastSettings" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.multicastSettings"></a>

```java
public MedialiveInputMulticastSettingsOutputReference getMulticastSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference">MedialiveInputMulticastSettingsOutputReference</a>

---

##### `routerSettings`<sup>Required</sup> <a name="routerSettings" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.routerSettings"></a>

```java
public MedialiveInputRouterSettingsOutputReference getRouterSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference">MedialiveInputRouterSettingsOutputReference</a>

---

##### `securityGroups`<sup>Required</sup> <a name="securityGroups" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.securityGroups"></a>

```java
public java.util.List<java.lang.String> getSecurityGroups();
```

- *Type:* java.util.List<java.lang.String>

---

##### `smpte2110ReceiverGroupSettings`<sup>Required</sup> <a name="smpte2110ReceiverGroupSettings" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.smpte2110ReceiverGroupSettings"></a>

```java
public MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference getSmpte2110ReceiverGroupSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference">MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference</a>

---

##### `sources`<sup>Required</sup> <a name="sources" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.sources"></a>

```java
public MedialiveInputSourcesList getSources();
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesList">MedialiveInputSourcesList</a>

---

##### `sourceUrls`<sup>Required</sup> <a name="sourceUrls" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.sourceUrls"></a>

```java
public java.util.List<java.lang.String> getSourceUrls();
```

- *Type:* java.util.List<java.lang.String>

---

##### `srtSettings`<sup>Required</sup> <a name="srtSettings" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.srtSettings"></a>

```java
public MedialiveInputSrtSettingsOutputReference getSrtSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference">MedialiveInputSrtSettingsOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.vpc"></a>

```java
public MedialiveInputVpcOutputReference getVpc();
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference">MedialiveInputVpcOutputReference</a>

---

##### `destinationsInput`<sup>Optional</sup> <a name="destinationsInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.destinationsInput"></a>

```java
public IResolvable|java.util.List<MedialiveInputDestinations> getDestinationsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinations">MedialiveInputDestinations</a>>

---

##### `inputDevicesInput`<sup>Optional</sup> <a name="inputDevicesInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.inputDevicesInput"></a>

```java
public IResolvable|java.util.List<MedialiveInputInputDevices> getInputDevicesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevices">MedialiveInputInputDevices</a>>

---

##### `inputNetworkLocationInput`<sup>Optional</sup> <a name="inputNetworkLocationInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.inputNetworkLocationInput"></a>

```java
public java.lang.String getInputNetworkLocationInput();
```

- *Type:* java.lang.String

---

##### `inputSecurityGroupsInput`<sup>Optional</sup> <a name="inputSecurityGroupsInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.inputSecurityGroupsInput"></a>

```java
public java.util.List<java.lang.String> getInputSecurityGroupsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `mediaConnectFlowsInput`<sup>Optional</sup> <a name="mediaConnectFlowsInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.mediaConnectFlowsInput"></a>

```java
public IResolvable|java.util.List<MedialiveInputMediaConnectFlows> getMediaConnectFlowsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlows">MedialiveInputMediaConnectFlows</a>>

---

##### `multicastSettingsInput`<sup>Optional</sup> <a name="multicastSettingsInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.multicastSettingsInput"></a>

```java
public IResolvable|MedialiveInputMulticastSettings getMulticastSettingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettings">MedialiveInputMulticastSettings</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `routerSettingsInput`<sup>Optional</sup> <a name="routerSettingsInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.routerSettingsInput"></a>

```java
public IResolvable|MedialiveInputRouterSettings getRouterSettingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettings">MedialiveInputRouterSettings</a>

---

##### `sdiSourcesInput`<sup>Optional</sup> <a name="sdiSourcesInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.sdiSourcesInput"></a>

```java
public java.util.List<java.lang.String> getSdiSourcesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `smpte2110ReceiverGroupSettingsInput`<sup>Optional</sup> <a name="smpte2110ReceiverGroupSettingsInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.smpte2110ReceiverGroupSettingsInput"></a>

```java
public IResolvable|MedialiveInputSmpte2110ReceiverGroupSettings getSmpte2110ReceiverGroupSettingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettings">MedialiveInputSmpte2110ReceiverGroupSettings</a>

---

##### `sourcesInput`<sup>Optional</sup> <a name="sourcesInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.sourcesInput"></a>

```java
public IResolvable|java.util.List<MedialiveInputSources> getSourcesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSources">MedialiveInputSources</a>>

---

##### `srtSettingsInput`<sup>Optional</sup> <a name="srtSettingsInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.srtSettingsInput"></a>

```java
public IResolvable|MedialiveInputSrtSettings getSrtSettingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettings">MedialiveInputSrtSettings</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `vpcInput`<sup>Optional</sup> <a name="vpcInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.vpcInput"></a>

```java
public IResolvable|MedialiveInputVpc getVpcInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputVpc">MedialiveInputVpc</a>

---

##### `inputNetworkLocation`<sup>Required</sup> <a name="inputNetworkLocation" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.inputNetworkLocation"></a>

```java
public java.lang.String getInputNetworkLocation();
```

- *Type:* java.lang.String

---

##### `inputSecurityGroups`<sup>Required</sup> <a name="inputSecurityGroups" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.inputSecurityGroups"></a>

```java
public java.util.List<java.lang.String> getInputSecurityGroups();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `sdiSources`<sup>Required</sup> <a name="sdiSources" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.sdiSources"></a>

```java
public java.util.List<java.lang.String> getSdiSources();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MedialiveInputConfig <a name="MedialiveInputConfig" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.medialive_input.MedialiveInputConfig;

MedialiveInputConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .destinations(IResolvable|java.util.List<MedialiveInputDestinations>)
//  .inputDevices(IResolvable|java.util.List<MedialiveInputInputDevices>)
//  .inputNetworkLocation(java.lang.String)
//  .inputSecurityGroups(java.util.List<java.lang.String>)
//  .mediaConnectFlows(IResolvable|java.util.List<MedialiveInputMediaConnectFlows>)
//  .multicastSettings(MedialiveInputMulticastSettings)
//  .name(java.lang.String)
//  .roleArn(java.lang.String)
//  .routerSettings(MedialiveInputRouterSettings)
//  .sdiSources(java.util.List<java.lang.String>)
//  .smpte2110ReceiverGroupSettings(MedialiveInputSmpte2110ReceiverGroupSettings)
//  .sources(IResolvable|java.util.List<MedialiveInputSources>)
//  .srtSettings(MedialiveInputSrtSettings)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .type(java.lang.String)
//  .vpc(MedialiveInputVpc)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.destinations">destinations</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinations">MedialiveInputDestinations</a>></code> | A list of the destinations of the input (PUSH-type). |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.inputDevices">inputDevices</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevices">MedialiveInputInputDevices</a>></code> | Settings for the input devices. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.inputNetworkLocation">inputNetworkLocation</a></code> | <code>java.lang.String</code> | The location of this input. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.inputSecurityGroups">inputSecurityGroups</a></code> | <code>java.util.List<java.lang.String></code> | A list of security groups referenced by IDs to attach to the input. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.mediaConnectFlows">mediaConnectFlows</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlows">MedialiveInputMediaConnectFlows</a>></code> | A list of MediaConnect Flows for this input. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.multicastSettings">multicastSettings</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettings">MedialiveInputMulticastSettings</a></code> | Multicast Input settings. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.name">name</a></code> | <code>java.lang.String</code> | The user-assigned name (This is a mutable value). |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the role this input assumes during and after creation. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.routerSettings">routerSettings</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettings">MedialiveInputRouterSettings</a></code> | Information about the MediaConnect Router association for this input. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.sdiSources">sdiSources</a></code> | <code>java.util.List<java.lang.String></code> | SDI Sources for this Input. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.smpte2110ReceiverGroupSettings">smpte2110ReceiverGroupSettings</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettings">MedialiveInputSmpte2110ReceiverGroupSettings</a></code> | Include this parameter if the input is a SMPTE 2110 input, to identify the stream sources for this input. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.sources">sources</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSources">MedialiveInputSources</a>></code> | A list of the sources of the input (PULL-type). |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.srtSettings">srtSettings</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettings">MedialiveInputSrtSettings</a></code> | The settings associated with an SRT input. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A collection of key-value pairs. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.type">type</a></code> | <code>java.lang.String</code> | The different types of inputs that AWS Elemental MediaLive supports. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.vpc">vpc</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputVpc">MedialiveInputVpc</a></code> | Settings for a private VPC Input. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `destinations`<sup>Optional</sup> <a name="destinations" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.destinations"></a>

```java
public IResolvable|java.util.List<MedialiveInputDestinations> getDestinations();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinations">MedialiveInputDestinations</a>>

A list of the destinations of the input (PUSH-type).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#destinations MedialiveInput#destinations}

---

##### `inputDevices`<sup>Optional</sup> <a name="inputDevices" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.inputDevices"></a>

```java
public IResolvable|java.util.List<MedialiveInputInputDevices> getInputDevices();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevices">MedialiveInputInputDevices</a>>

Settings for the input devices.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#input_devices MedialiveInput#input_devices}

---

##### `inputNetworkLocation`<sup>Optional</sup> <a name="inputNetworkLocation" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.inputNetworkLocation"></a>

```java
public java.lang.String getInputNetworkLocation();
```

- *Type:* java.lang.String

The location of this input.

AWS, for an input existing in the AWS Cloud, On-Prem for
an input in a customer network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#input_network_location MedialiveInput#input_network_location}

---

##### `inputSecurityGroups`<sup>Optional</sup> <a name="inputSecurityGroups" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.inputSecurityGroups"></a>

```java
public java.util.List<java.lang.String> getInputSecurityGroups();
```

- *Type:* java.util.List<java.lang.String>

A list of security groups referenced by IDs to attach to the input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#input_security_groups MedialiveInput#input_security_groups}

---

##### `mediaConnectFlows`<sup>Optional</sup> <a name="mediaConnectFlows" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.mediaConnectFlows"></a>

```java
public IResolvable|java.util.List<MedialiveInputMediaConnectFlows> getMediaConnectFlows();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlows">MedialiveInputMediaConnectFlows</a>>

A list of MediaConnect Flows for this input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#media_connect_flows MedialiveInput#media_connect_flows}

---

##### `multicastSettings`<sup>Optional</sup> <a name="multicastSettings" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.multicastSettings"></a>

```java
public MedialiveInputMulticastSettings getMulticastSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettings">MedialiveInputMulticastSettings</a>

Multicast Input settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#multicast_settings MedialiveInput#multicast_settings}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The user-assigned name (This is a mutable value).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#name MedialiveInput#name}

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the role this input assumes during and after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#role_arn MedialiveInput#role_arn}

---

##### `routerSettings`<sup>Optional</sup> <a name="routerSettings" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.routerSettings"></a>

```java
public MedialiveInputRouterSettings getRouterSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettings">MedialiveInputRouterSettings</a>

Information about the MediaConnect Router association for this input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#router_settings MedialiveInput#router_settings}

---

##### `sdiSources`<sup>Optional</sup> <a name="sdiSources" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.sdiSources"></a>

```java
public java.util.List<java.lang.String> getSdiSources();
```

- *Type:* java.util.List<java.lang.String>

SDI Sources for this Input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#sdi_sources MedialiveInput#sdi_sources}

---

##### `smpte2110ReceiverGroupSettings`<sup>Optional</sup> <a name="smpte2110ReceiverGroupSettings" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.smpte2110ReceiverGroupSettings"></a>

```java
public MedialiveInputSmpte2110ReceiverGroupSettings getSmpte2110ReceiverGroupSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettings">MedialiveInputSmpte2110ReceiverGroupSettings</a>

Include this parameter if the input is a SMPTE 2110 input, to identify the stream sources for this input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#smpte_2110_receiver_group_settings MedialiveInput#smpte_2110_receiver_group_settings}

---

##### `sources`<sup>Optional</sup> <a name="sources" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.sources"></a>

```java
public IResolvable|java.util.List<MedialiveInputSources> getSources();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSources">MedialiveInputSources</a>>

A list of the sources of the input (PULL-type).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#sources MedialiveInput#sources}

---

##### `srtSettings`<sup>Optional</sup> <a name="srtSettings" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.srtSettings"></a>

```java
public MedialiveInputSrtSettings getSrtSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettings">MedialiveInputSrtSettings</a>

The settings associated with an SRT input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#srt_settings MedialiveInput#srt_settings}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A collection of key-value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#tags MedialiveInput#tags}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The different types of inputs that AWS Elemental MediaLive supports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#type MedialiveInput#type}

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.vpc"></a>

```java
public MedialiveInputVpc getVpc();
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

```java
import io.cdktn.providers.awscc.medialive_input.MedialiveInputDestinations;

MedialiveInputDestinations.builder()
//  .ip(java.lang.String)
//  .network(java.lang.String)
//  .networkRoutes(IResolvable|java.util.List<MedialiveInputDestinationsNetworkRoutes>)
//  .port(java.lang.String)
//  .staticIpAddress(java.lang.String)
//  .streamName(java.lang.String)
//  .url(java.lang.String)
//  .vpc(MedialiveInputDestinationsVpc)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinations.property.ip">ip</a></code> | <code>java.lang.String</code> | The system-generated static IP address of endpoint. It remains fixed for the lifetime of the input. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinations.property.network">network</a></code> | <code>java.lang.String</code> | The ID of the attached network. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinations.property.networkRoutes">networkRoutes</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutes">MedialiveInputDestinationsNetworkRoutes</a>></code> | If the push input has an input location of ON-PREM it's a requirement to specify what the route of the input is going to be on the customer local network. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinations.property.port">port</a></code> | <code>java.lang.String</code> | The port number for the input. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinations.property.staticIpAddress">staticIpAddress</a></code> | <code>java.lang.String</code> | The static IP address for the input destination. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinations.property.streamName">streamName</a></code> | <code>java.lang.String</code> | The stream name for the input destination. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinations.property.url">url</a></code> | <code>java.lang.String</code> | This represents the endpoint that the customer stream will be pushed to. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinations.property.vpc">vpc</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpc">MedialiveInputDestinationsVpc</a></code> | The properties for a VPC type input destination. |

---

##### `ip`<sup>Optional</sup> <a name="ip" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinations.property.ip"></a>

```java
public java.lang.String getIp();
```

- *Type:* java.lang.String

The system-generated static IP address of endpoint. It remains fixed for the lifetime of the input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#ip MedialiveInput#ip}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinations.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

The ID of the attached network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#network MedialiveInput#network}

---

##### `networkRoutes`<sup>Optional</sup> <a name="networkRoutes" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinations.property.networkRoutes"></a>

```java
public IResolvable|java.util.List<MedialiveInputDestinationsNetworkRoutes> getNetworkRoutes();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutes">MedialiveInputDestinationsNetworkRoutes</a>>

If the push input has an input location of ON-PREM it's a requirement to specify what the route of the input is going to be on the customer local network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#network_routes MedialiveInput#network_routes}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinations.property.port"></a>

```java
public java.lang.String getPort();
```

- *Type:* java.lang.String

The port number for the input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#port MedialiveInput#port}

---

##### `staticIpAddress`<sup>Optional</sup> <a name="staticIpAddress" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinations.property.staticIpAddress"></a>

```java
public java.lang.String getStaticIpAddress();
```

- *Type:* java.lang.String

The static IP address for the input destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#static_ip_address MedialiveInput#static_ip_address}

---

##### `streamName`<sup>Optional</sup> <a name="streamName" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinations.property.streamName"></a>

```java
public java.lang.String getStreamName();
```

- *Type:* java.lang.String

The stream name for the input destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#stream_name MedialiveInput#stream_name}

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinations.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

This represents the endpoint that the customer stream will be pushed to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#url MedialiveInput#url}

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinations.property.vpc"></a>

```java
public MedialiveInputDestinationsVpc getVpc();
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpc">MedialiveInputDestinationsVpc</a>

The properties for a VPC type input destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#vpc MedialiveInput#vpc}

---

### MedialiveInputDestinationsNetworkRoutes <a name="MedialiveInputDestinationsNetworkRoutes" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutes.Initializer"></a>

```java
import io.cdktn.providers.awscc.medialive_input.MedialiveInputDestinationsNetworkRoutes;

MedialiveInputDestinationsNetworkRoutes.builder()
//  .cidr(java.lang.String)
//  .gateway(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutes.property.cidr">cidr</a></code> | <code>java.lang.String</code> | The CIDR of the route. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutes.property.gateway">gateway</a></code> | <code>java.lang.String</code> | An optional gateway for the route. |

---

##### `cidr`<sup>Optional</sup> <a name="cidr" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutes.property.cidr"></a>

```java
public java.lang.String getCidr();
```

- *Type:* java.lang.String

The CIDR of the route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#cidr MedialiveInput#cidr}

---

##### `gateway`<sup>Optional</sup> <a name="gateway" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutes.property.gateway"></a>

```java
public java.lang.String getGateway();
```

- *Type:* java.lang.String

An optional gateway for the route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#gateway MedialiveInput#gateway}

---

### MedialiveInputDestinationsVpc <a name="MedialiveInputDestinationsVpc" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpc"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpc.Initializer"></a>

```java
import io.cdktn.providers.awscc.medialive_input.MedialiveInputDestinationsVpc;

MedialiveInputDestinationsVpc.builder()
//  .availabilityZone(java.lang.String)
//  .networkInterfaceId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpc.property.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | The availability zone of the Input destination. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpc.property.networkInterfaceId">networkInterfaceId</a></code> | <code>java.lang.String</code> | The network interface ID of the Input destination in the VPC. |

---

##### `availabilityZone`<sup>Optional</sup> <a name="availabilityZone" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpc.property.availabilityZone"></a>

```java
public java.lang.String getAvailabilityZone();
```

- *Type:* java.lang.String

The availability zone of the Input destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#availability_zone MedialiveInput#availability_zone}

---

##### `networkInterfaceId`<sup>Optional</sup> <a name="networkInterfaceId" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpc.property.networkInterfaceId"></a>

```java
public java.lang.String getNetworkInterfaceId();
```

- *Type:* java.lang.String

The network interface ID of the Input destination in the VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#network_interface_id MedialiveInput#network_interface_id}

---

### MedialiveInputInputDevices <a name="MedialiveInputInputDevices" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevices"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevices.Initializer"></a>

```java
import io.cdktn.providers.awscc.medialive_input.MedialiveInputInputDevices;

MedialiveInputInputDevices.builder()
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevices.property.id">id</a></code> | <code>java.lang.String</code> | The unique ID for the device. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevices.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

The unique ID for the device.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#id MedialiveInput#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### MedialiveInputMediaConnectFlows <a name="MedialiveInputMediaConnectFlows" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlows"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlows.Initializer"></a>

```java
import io.cdktn.providers.awscc.medialive_input.MedialiveInputMediaConnectFlows;

MedialiveInputMediaConnectFlows.builder()
//  .flowArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlows.property.flowArn">flowArn</a></code> | <code>java.lang.String</code> | The unique ARN of the MediaConnect Flow being used as a source. |

---

##### `flowArn`<sup>Optional</sup> <a name="flowArn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlows.property.flowArn"></a>

```java
public java.lang.String getFlowArn();
```

- *Type:* java.lang.String

The unique ARN of the MediaConnect Flow being used as a source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#flow_arn MedialiveInput#flow_arn}

---

### MedialiveInputMulticastSettings <a name="MedialiveInputMulticastSettings" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.medialive_input.MedialiveInputMulticastSettings;

MedialiveInputMulticastSettings.builder()
//  .sources(IResolvable|java.util.List<MedialiveInputMulticastSettingsSources>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettings.property.sources">sources</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSources">MedialiveInputMulticastSettingsSources</a>></code> | Placeholder documentation for __listOfMulticastSource. |

---

##### `sources`<sup>Optional</sup> <a name="sources" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettings.property.sources"></a>

```java
public IResolvable|java.util.List<MedialiveInputMulticastSettingsSources> getSources();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSources">MedialiveInputMulticastSettingsSources</a>>

Placeholder documentation for __listOfMulticastSource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#sources MedialiveInput#sources}

---

### MedialiveInputMulticastSettingsSources <a name="MedialiveInputMulticastSettingsSources" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSources.Initializer"></a>

```java
import io.cdktn.providers.awscc.medialive_input.MedialiveInputMulticastSettingsSources;

MedialiveInputMulticastSettingsSources.builder()
//  .sourceIp(java.lang.String)
//  .url(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSources.property.sourceIp">sourceIp</a></code> | <code>java.lang.String</code> | This represents the ip address of the device sending the multicast stream. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSources.property.url">url</a></code> | <code>java.lang.String</code> | This represents the customer's source URL where multicast stream is pulled from. |

---

##### `sourceIp`<sup>Optional</sup> <a name="sourceIp" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSources.property.sourceIp"></a>

```java
public java.lang.String getSourceIp();
```

- *Type:* java.lang.String

This represents the ip address of the device sending the multicast stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#source_ip MedialiveInput#source_ip}

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSources.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

This represents the customer's source URL where multicast stream is pulled from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#url MedialiveInput#url}

---

### MedialiveInputRouterSettings <a name="MedialiveInputRouterSettings" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.medialive_input.MedialiveInputRouterSettings;

MedialiveInputRouterSettings.builder()
//  .destinations(IResolvable|java.util.List<MedialiveInputRouterSettingsDestinations>)
//  .encryptionType(java.lang.String)
//  .secretArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettings.property.destinations">destinations</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinations">MedialiveInputRouterSettingsDestinations</a>></code> | MediaConnect Router destinations associated with this input. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettings.property.encryptionType">encryptionType</a></code> | <code>java.lang.String</code> | Encryption configuration for the MediaConnect Router association. AUTOMATIC uses a service-managed secret; SECRETS_MANAGER requires SecretArn. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettings.property.secretArn">secretArn</a></code> | <code>java.lang.String</code> | The ARN of the Secrets Manager secret used to encrypt this input. Required when EncryptionType is SECRETS_MANAGER. |

---

##### `destinations`<sup>Optional</sup> <a name="destinations" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettings.property.destinations"></a>

```java
public IResolvable|java.util.List<MedialiveInputRouterSettingsDestinations> getDestinations();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinations">MedialiveInputRouterSettingsDestinations</a>>

MediaConnect Router destinations associated with this input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#destinations MedialiveInput#destinations}

---

##### `encryptionType`<sup>Optional</sup> <a name="encryptionType" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettings.property.encryptionType"></a>

```java
public java.lang.String getEncryptionType();
```

- *Type:* java.lang.String

Encryption configuration for the MediaConnect Router association. AUTOMATIC uses a service-managed secret; SECRETS_MANAGER requires SecretArn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#encryption_type MedialiveInput#encryption_type}

---

##### `secretArn`<sup>Optional</sup> <a name="secretArn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettings.property.secretArn"></a>

```java
public java.lang.String getSecretArn();
```

- *Type:* java.lang.String

The ARN of the Secrets Manager secret used to encrypt this input. Required when EncryptionType is SECRETS_MANAGER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#secret_arn MedialiveInput#secret_arn}

---

### MedialiveInputRouterSettingsDestinations <a name="MedialiveInputRouterSettingsDestinations" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinations.Initializer"></a>

```java
import io.cdktn.providers.awscc.medialive_input.MedialiveInputRouterSettingsDestinations;

MedialiveInputRouterSettingsDestinations.builder()
//  .availabilityZoneName(java.lang.String)
//  .routerOutputArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinations.property.availabilityZoneName">availabilityZoneName</a></code> | <code>java.lang.String</code> | The Availability Zone (AZ) name this destination is created in. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinations.property.routerOutputArn">routerOutputArn</a></code> | <code>java.lang.String</code> | The ARN of the MediaConnect Router output currently connected to this input. |

---

##### `availabilityZoneName`<sup>Optional</sup> <a name="availabilityZoneName" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinations.property.availabilityZoneName"></a>

```java
public java.lang.String getAvailabilityZoneName();
```

- *Type:* java.lang.String

The Availability Zone (AZ) name this destination is created in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#availability_zone_name MedialiveInput#availability_zone_name}

---

##### `routerOutputArn`<sup>Optional</sup> <a name="routerOutputArn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinations.property.routerOutputArn"></a>

```java
public java.lang.String getRouterOutputArn();
```

- *Type:* java.lang.String

The ARN of the MediaConnect Router output currently connected to this input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#router_output_arn MedialiveInput#router_output_arn}

---

### MedialiveInputSmpte2110ReceiverGroupSettings <a name="MedialiveInputSmpte2110ReceiverGroupSettings" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.medialive_input.MedialiveInputSmpte2110ReceiverGroupSettings;

MedialiveInputSmpte2110ReceiverGroupSettings.builder()
//  .smpte2110ReceiverGroups(IResolvable|java.util.List<MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroups>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettings.property.smpte2110ReceiverGroups">smpte2110ReceiverGroups</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroups">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroups</a>></code> | Placeholder documentation for __listOfSmpte2110ReceiverGroup. |

---

##### `smpte2110ReceiverGroups`<sup>Optional</sup> <a name="smpte2110ReceiverGroups" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettings.property.smpte2110ReceiverGroups"></a>

```java
public IResolvable|java.util.List<MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroups> getSmpte2110ReceiverGroups();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroups">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroups</a>>

Placeholder documentation for __listOfSmpte2110ReceiverGroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#smpte_2110_receiver_groups MedialiveInput#smpte_2110_receiver_groups}

---

### MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroups <a name="MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroups" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroups"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroups.Initializer"></a>

```java
import io.cdktn.providers.awscc.medialive_input.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroups;

MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroups.builder()
//  .sdpSettings(MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettings)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroups.property.sdpSettings">sdpSettings</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettings">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettings</a></code> | The single Smpte2110ReceiverGroupSdpSettings that identify the video, audio, and ancillary streams for this receiver group. |

---

##### `sdpSettings`<sup>Optional</sup> <a name="sdpSettings" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroups.property.sdpSettings"></a>

```java
public MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettings getSdpSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettings">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettings</a>

The single Smpte2110ReceiverGroupSdpSettings that identify the video, audio, and ancillary streams for this receiver group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#sdp_settings MedialiveInput#sdp_settings}

---

### MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettings <a name="MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettings" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.medialive_input.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettings;

MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettings.builder()
//  .ancillarySdps(IResolvable|java.util.List<MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps>)
//  .audioSdps(IResolvable|java.util.List<MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps>)
//  .videoSdp(MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdp)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettings.property.ancillarySdps">ancillarySdps</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps</a>></code> | A list of InputSdpLocations. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettings.property.audioSdps">audioSdps</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps</a>></code> | A list of InputSdpLocations. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettings.property.videoSdp">videoSdp</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdp">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdp</a></code> | The InputSdpLocation that specifies the SDP file and index for the single video SMPTE 2110 stream for this 2110 input. |

---

##### `ancillarySdps`<sup>Optional</sup> <a name="ancillarySdps" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettings.property.ancillarySdps"></a>

```java
public IResolvable|java.util.List<MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps> getAncillarySdps();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps</a>>

A list of InputSdpLocations.

Each item in the list specifies the SDP file and index for one ancillary SMPTE 2110 stream.
Each stream encapsulates one captions stream (out of any number you can include) or the single SCTE 35 stream that you can include.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#ancillary_sdps MedialiveInput#ancillary_sdps}

---

##### `audioSdps`<sup>Optional</sup> <a name="audioSdps" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettings.property.audioSdps"></a>

```java
public IResolvable|java.util.List<MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps> getAudioSdps();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps</a>>

A list of InputSdpLocations.

Each item in the list specifies the SDP file and index for one audio SMPTE 2110 stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#audio_sdps MedialiveInput#audio_sdps}

---

##### `videoSdp`<sup>Optional</sup> <a name="videoSdp" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettings.property.videoSdp"></a>

```java
public MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdp getVideoSdp();
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdp">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdp</a>

The InputSdpLocation that specifies the SDP file and index for the single video SMPTE 2110 stream for this 2110 input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#video_sdp MedialiveInput#video_sdp}

---

### MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps <a name="MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps.Initializer"></a>

```java
import io.cdktn.providers.awscc.medialive_input.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps;

MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps.builder()
//  .mediaIndex(java.lang.Number)
//  .sdpUrl(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps.property.mediaIndex">mediaIndex</a></code> | <code>java.lang.Number</code> | The index of the media stream in the SDP file for one SMPTE 2110 stream. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps.property.sdpUrl">sdpUrl</a></code> | <code>java.lang.String</code> | The URL of the SDP file for one SMPTE 2110 stream. |

---

##### `mediaIndex`<sup>Optional</sup> <a name="mediaIndex" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps.property.mediaIndex"></a>

```java
public java.lang.Number getMediaIndex();
```

- *Type:* java.lang.Number

The index of the media stream in the SDP file for one SMPTE 2110 stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#media_index MedialiveInput#media_index}

---

##### `sdpUrl`<sup>Optional</sup> <a name="sdpUrl" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps.property.sdpUrl"></a>

```java
public java.lang.String getSdpUrl();
```

- *Type:* java.lang.String

The URL of the SDP file for one SMPTE 2110 stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#sdp_url MedialiveInput#sdp_url}

---

### MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps <a name="MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps.Initializer"></a>

```java
import io.cdktn.providers.awscc.medialive_input.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps;

MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps.builder()
//  .mediaIndex(java.lang.Number)
//  .sdpUrl(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps.property.mediaIndex">mediaIndex</a></code> | <code>java.lang.Number</code> | The index of the media stream in the SDP file for one SMPTE 2110 stream. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps.property.sdpUrl">sdpUrl</a></code> | <code>java.lang.String</code> | The URL of the SDP file for one SMPTE 2110 stream. |

---

##### `mediaIndex`<sup>Optional</sup> <a name="mediaIndex" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps.property.mediaIndex"></a>

```java
public java.lang.Number getMediaIndex();
```

- *Type:* java.lang.Number

The index of the media stream in the SDP file for one SMPTE 2110 stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#media_index MedialiveInput#media_index}

---

##### `sdpUrl`<sup>Optional</sup> <a name="sdpUrl" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps.property.sdpUrl"></a>

```java
public java.lang.String getSdpUrl();
```

- *Type:* java.lang.String

The URL of the SDP file for one SMPTE 2110 stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#sdp_url MedialiveInput#sdp_url}

---

### MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdp <a name="MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdp" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdp.Initializer"></a>

```java
import io.cdktn.providers.awscc.medialive_input.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdp;

MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdp.builder()
//  .mediaIndex(java.lang.Number)
//  .sdpUrl(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdp.property.mediaIndex">mediaIndex</a></code> | <code>java.lang.Number</code> | The index of the media stream in the SDP file for one SMPTE 2110 stream. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdp.property.sdpUrl">sdpUrl</a></code> | <code>java.lang.String</code> | The URL of the SDP file for one SMPTE 2110 stream. |

---

##### `mediaIndex`<sup>Optional</sup> <a name="mediaIndex" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdp.property.mediaIndex"></a>

```java
public java.lang.Number getMediaIndex();
```

- *Type:* java.lang.Number

The index of the media stream in the SDP file for one SMPTE 2110 stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#media_index MedialiveInput#media_index}

---

##### `sdpUrl`<sup>Optional</sup> <a name="sdpUrl" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdp.property.sdpUrl"></a>

```java
public java.lang.String getSdpUrl();
```

- *Type:* java.lang.String

The URL of the SDP file for one SMPTE 2110 stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#sdp_url MedialiveInput#sdp_url}

---

### MedialiveInputSources <a name="MedialiveInputSources" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSources.Initializer"></a>

```java
import io.cdktn.providers.awscc.medialive_input.MedialiveInputSources;

MedialiveInputSources.builder()
//  .passwordParam(java.lang.String)
//  .url(java.lang.String)
//  .username(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSources.property.passwordParam">passwordParam</a></code> | <code>java.lang.String</code> | The key used to extract the password from EC2 Parameter store. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSources.property.url">url</a></code> | <code>java.lang.String</code> | This represents the customer's source URL where stream is pulled from. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSources.property.username">username</a></code> | <code>java.lang.String</code> | The username for the input source. |

---

##### `passwordParam`<sup>Optional</sup> <a name="passwordParam" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSources.property.passwordParam"></a>

```java
public java.lang.String getPasswordParam();
```

- *Type:* java.lang.String

The key used to extract the password from EC2 Parameter store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#password_param MedialiveInput#password_param}

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSources.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

This represents the customer's source URL where stream is pulled from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#url MedialiveInput#url}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSources.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

The username for the input source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#username MedialiveInput#username}

---

### MedialiveInputSrtSettings <a name="MedialiveInputSrtSettings" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.medialive_input.MedialiveInputSrtSettings;

MedialiveInputSrtSettings.builder()
//  .srtCallerSources(IResolvable|java.util.List<MedialiveInputSrtSettingsSrtCallerSources>)
//  .srtListenerSettings(MedialiveInputSrtSettingsSrtListenerSettings)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettings.property.srtCallerSources">srtCallerSources</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSources">MedialiveInputSrtSettingsSrtCallerSources</a>></code> | Placeholder documentation for __listOfSrtCallerSource. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettings.property.srtListenerSettings">srtListenerSettings</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettings">MedialiveInputSrtSettingsSrtListenerSettings</a></code> | Settings for an SRT listener input. Configured only when the input uses the SRT_LISTENER input type. |

---

##### `srtCallerSources`<sup>Optional</sup> <a name="srtCallerSources" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettings.property.srtCallerSources"></a>

```java
public IResolvable|java.util.List<MedialiveInputSrtSettingsSrtCallerSources> getSrtCallerSources();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSources">MedialiveInputSrtSettingsSrtCallerSources</a>>

Placeholder documentation for __listOfSrtCallerSource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#srt_caller_sources MedialiveInput#srt_caller_sources}

---

##### `srtListenerSettings`<sup>Optional</sup> <a name="srtListenerSettings" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettings.property.srtListenerSettings"></a>

```java
public MedialiveInputSrtSettingsSrtListenerSettings getSrtListenerSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettings">MedialiveInputSrtSettingsSrtListenerSettings</a>

Settings for an SRT listener input. Configured only when the input uses the SRT_LISTENER input type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#srt_listener_settings MedialiveInput#srt_listener_settings}

---

### MedialiveInputSrtSettingsSrtCallerSources <a name="MedialiveInputSrtSettingsSrtCallerSources" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSources.Initializer"></a>

```java
import io.cdktn.providers.awscc.medialive_input.MedialiveInputSrtSettingsSrtCallerSources;

MedialiveInputSrtSettingsSrtCallerSources.builder()
//  .decryption(MedialiveInputSrtSettingsSrtCallerSourcesDecryption)
//  .minimumLatency(java.lang.Number)
//  .srtListenerAddress(java.lang.String)
//  .srtListenerPort(java.lang.String)
//  .streamId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSources.property.decryption">decryption</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryption">MedialiveInputSrtSettingsSrtCallerSourcesDecryption</a></code> | The decryption settings for the SRT caller source. Present only if the source has decryption enabled. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSources.property.minimumLatency">minimumLatency</a></code> | <code>java.lang.Number</code> | The preferred latency (in milliseconds) for implementing packet loss and recovery. Packet recovery is a key feature of SRT. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSources.property.srtListenerAddress">srtListenerAddress</a></code> | <code>java.lang.String</code> | The IP address at the upstream system (the listener) that MediaLive (the caller) connects to. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSources.property.srtListenerPort">srtListenerPort</a></code> | <code>java.lang.String</code> | The port at the upstream system (the listener) that MediaLive (the caller) connects to. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSources.property.streamId">streamId</a></code> | <code>java.lang.String</code> | The stream ID, if the upstream system uses this identifier. |

---

##### `decryption`<sup>Optional</sup> <a name="decryption" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSources.property.decryption"></a>

```java
public MedialiveInputSrtSettingsSrtCallerSourcesDecryption getDecryption();
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryption">MedialiveInputSrtSettingsSrtCallerSourcesDecryption</a>

The decryption settings for the SRT caller source. Present only if the source has decryption enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#decryption MedialiveInput#decryption}

---

##### `minimumLatency`<sup>Optional</sup> <a name="minimumLatency" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSources.property.minimumLatency"></a>

```java
public java.lang.Number getMinimumLatency();
```

- *Type:* java.lang.Number

The preferred latency (in milliseconds) for implementing packet loss and recovery. Packet recovery is a key feature of SRT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#minimum_latency MedialiveInput#minimum_latency}

---

##### `srtListenerAddress`<sup>Optional</sup> <a name="srtListenerAddress" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSources.property.srtListenerAddress"></a>

```java
public java.lang.String getSrtListenerAddress();
```

- *Type:* java.lang.String

The IP address at the upstream system (the listener) that MediaLive (the caller) connects to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#srt_listener_address MedialiveInput#srt_listener_address}

---

##### `srtListenerPort`<sup>Optional</sup> <a name="srtListenerPort" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSources.property.srtListenerPort"></a>

```java
public java.lang.String getSrtListenerPort();
```

- *Type:* java.lang.String

The port at the upstream system (the listener) that MediaLive (the caller) connects to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#srt_listener_port MedialiveInput#srt_listener_port}

---

##### `streamId`<sup>Optional</sup> <a name="streamId" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSources.property.streamId"></a>

```java
public java.lang.String getStreamId();
```

- *Type:* java.lang.String

The stream ID, if the upstream system uses this identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#stream_id MedialiveInput#stream_id}

---

### MedialiveInputSrtSettingsSrtCallerSourcesDecryption <a name="MedialiveInputSrtSettingsSrtCallerSourcesDecryption" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryption.Initializer"></a>

```java
import io.cdktn.providers.awscc.medialive_input.MedialiveInputSrtSettingsSrtCallerSourcesDecryption;

MedialiveInputSrtSettingsSrtCallerSourcesDecryption.builder()
//  .algorithm(java.lang.String)
//  .passphraseSecretArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryption.property.algorithm">algorithm</a></code> | <code>java.lang.String</code> | The algorithm used to encrypt content. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryption.property.passphraseSecretArn">passphraseSecretArn</a></code> | <code>java.lang.String</code> | The ARN for the secret in Secrets Manager. |

---

##### `algorithm`<sup>Optional</sup> <a name="algorithm" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryption.property.algorithm"></a>

```java
public java.lang.String getAlgorithm();
```

- *Type:* java.lang.String

The algorithm used to encrypt content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#algorithm MedialiveInput#algorithm}

---

##### `passphraseSecretArn`<sup>Optional</sup> <a name="passphraseSecretArn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryption.property.passphraseSecretArn"></a>

```java
public java.lang.String getPassphraseSecretArn();
```

- *Type:* java.lang.String

The ARN for the secret in Secrets Manager.

Someone in your organization must create a secret and provide you with its ARN. The secret holds the passphrase that MediaLive uses to decrypt the source content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#passphrase_secret_arn MedialiveInput#passphrase_secret_arn}

---

### MedialiveInputSrtSettingsSrtListenerSettings <a name="MedialiveInputSrtSettingsSrtListenerSettings" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.medialive_input.MedialiveInputSrtSettingsSrtListenerSettings;

MedialiveInputSrtSettingsSrtListenerSettings.builder()
//  .decryption(MedialiveInputSrtSettingsSrtListenerSettingsDecryption)
//  .minimumLatency(java.lang.Number)
//  .streamId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettings.property.decryption">decryption</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryption">MedialiveInputSrtSettingsSrtListenerSettingsDecryption</a></code> | The decryption settings for the SRT listener source. Present only if the source has decryption enabled. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettings.property.minimumLatency">minimumLatency</a></code> | <code>java.lang.Number</code> | The preferred latency (in milliseconds) for implementing packet loss and recovery. Packet recovery is a key feature of SRT. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettings.property.streamId">streamId</a></code> | <code>java.lang.String</code> | The stream ID, if the upstream system uses this identifier. |

---

##### `decryption`<sup>Optional</sup> <a name="decryption" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettings.property.decryption"></a>

```java
public MedialiveInputSrtSettingsSrtListenerSettingsDecryption getDecryption();
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryption">MedialiveInputSrtSettingsSrtListenerSettingsDecryption</a>

The decryption settings for the SRT listener source. Present only if the source has decryption enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#decryption MedialiveInput#decryption}

---

##### `minimumLatency`<sup>Optional</sup> <a name="minimumLatency" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettings.property.minimumLatency"></a>

```java
public java.lang.Number getMinimumLatency();
```

- *Type:* java.lang.Number

The preferred latency (in milliseconds) for implementing packet loss and recovery. Packet recovery is a key feature of SRT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#minimum_latency MedialiveInput#minimum_latency}

---

##### `streamId`<sup>Optional</sup> <a name="streamId" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettings.property.streamId"></a>

```java
public java.lang.String getStreamId();
```

- *Type:* java.lang.String

The stream ID, if the upstream system uses this identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#stream_id MedialiveInput#stream_id}

---

### MedialiveInputSrtSettingsSrtListenerSettingsDecryption <a name="MedialiveInputSrtSettingsSrtListenerSettingsDecryption" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryption.Initializer"></a>

```java
import io.cdktn.providers.awscc.medialive_input.MedialiveInputSrtSettingsSrtListenerSettingsDecryption;

MedialiveInputSrtSettingsSrtListenerSettingsDecryption.builder()
//  .algorithm(java.lang.String)
//  .passphraseSecretArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryption.property.algorithm">algorithm</a></code> | <code>java.lang.String</code> | The algorithm used to encrypt content. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryption.property.passphraseSecretArn">passphraseSecretArn</a></code> | <code>java.lang.String</code> | The ARN for the secret in Secrets Manager. |

---

##### `algorithm`<sup>Optional</sup> <a name="algorithm" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryption.property.algorithm"></a>

```java
public java.lang.String getAlgorithm();
```

- *Type:* java.lang.String

The algorithm used to encrypt content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#algorithm MedialiveInput#algorithm}

---

##### `passphraseSecretArn`<sup>Optional</sup> <a name="passphraseSecretArn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryption.property.passphraseSecretArn"></a>

```java
public java.lang.String getPassphraseSecretArn();
```

- *Type:* java.lang.String

The ARN for the secret in Secrets Manager.

Someone in your organization must create a secret and provide you with its ARN. The secret holds the passphrase that MediaLive uses to decrypt the source content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#passphrase_secret_arn MedialiveInput#passphrase_secret_arn}

---

### MedialiveInputVpc <a name="MedialiveInputVpc" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputVpc"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputVpc.Initializer"></a>

```java
import io.cdktn.providers.awscc.medialive_input.MedialiveInputVpc;

MedialiveInputVpc.builder()
//  .securityGroupIds(java.util.List<java.lang.String>)
//  .subnetIds(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputVpc.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | A list of up to 5 EC2 VPC security group IDs to attach to the Input VPC network interfaces. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputVpc.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | A list of 2 VPC subnet IDs from the same VPC. |

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputVpc.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

A list of up to 5 EC2 VPC security group IDs to attach to the Input VPC network interfaces.

Requires subnetIds. If none are specified then the VPC default security group will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#security_group_ids MedialiveInput#security_group_ids}

---

##### `subnetIds`<sup>Optional</sup> <a name="subnetIds" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputVpc.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

A list of 2 VPC subnet IDs from the same VPC.

Subnet IDs must be mapped to two unique availability zones (AZ).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#subnet_ids MedialiveInput#subnet_ids}

---

## Classes <a name="Classes" id="Classes"></a>

### MedialiveInputDestinationsList <a name="MedialiveInputDestinationsList" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.medialive_input.MedialiveInputDestinationsList;

new MedialiveInputDestinationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsList.get"></a>

```java
public MedialiveInputDestinationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinations">MedialiveInputDestinations</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<MedialiveInputDestinations> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinations">MedialiveInputDestinations</a>>

---


### MedialiveInputDestinationsNetworkRoutesList <a name="MedialiveInputDestinationsNetworkRoutesList" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.medialive_input.MedialiveInputDestinationsNetworkRoutesList;

new MedialiveInputDestinationsNetworkRoutesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesList.get"></a>

```java
public MedialiveInputDestinationsNetworkRoutesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutes">MedialiveInputDestinationsNetworkRoutes</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<MedialiveInputDestinationsNetworkRoutes> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutes">MedialiveInputDestinationsNetworkRoutes</a>>

---


### MedialiveInputDestinationsNetworkRoutesOutputReference <a name="MedialiveInputDestinationsNetworkRoutesOutputReference" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.medialive_input.MedialiveInputDestinationsNetworkRoutesOutputReference;

new MedialiveInputDestinationsNetworkRoutesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.resetCidr">resetCidr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.resetGateway">resetGateway</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCidr` <a name="resetCidr" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.resetCidr"></a>

```java
public void resetCidr()
```

##### `resetGateway` <a name="resetGateway" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.resetGateway"></a>

```java
public void resetGateway()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.property.cidrInput">cidrInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.property.gatewayInput">gatewayInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.property.cidr">cidr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.property.gateway">gateway</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutes">MedialiveInputDestinationsNetworkRoutes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cidrInput`<sup>Optional</sup> <a name="cidrInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.property.cidrInput"></a>

```java
public java.lang.String getCidrInput();
```

- *Type:* java.lang.String

---

##### `gatewayInput`<sup>Optional</sup> <a name="gatewayInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.property.gatewayInput"></a>

```java
public java.lang.String getGatewayInput();
```

- *Type:* java.lang.String

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.property.cidr"></a>

```java
public java.lang.String getCidr();
```

- *Type:* java.lang.String

---

##### `gateway`<sup>Required</sup> <a name="gateway" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.property.gateway"></a>

```java
public java.lang.String getGateway();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.property.internalValue"></a>

```java
public IResolvable|MedialiveInputDestinationsNetworkRoutes getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutes">MedialiveInputDestinationsNetworkRoutes</a>

---


### MedialiveInputDestinationsOutputReference <a name="MedialiveInputDestinationsOutputReference" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.medialive_input.MedialiveInputDestinationsOutputReference;

new MedialiveInputDestinationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.putNetworkRoutes">putNetworkRoutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.putVpc">putVpc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.resetIp">resetIp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.resetNetwork">resetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.resetNetworkRoutes">resetNetworkRoutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.resetStaticIpAddress">resetStaticIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.resetStreamName">resetStreamName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.resetUrl">resetUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.resetVpc">resetVpc</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNetworkRoutes` <a name="putNetworkRoutes" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.putNetworkRoutes"></a>

```java
public void putNetworkRoutes(IResolvable|java.util.List<MedialiveInputDestinationsNetworkRoutes> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.putNetworkRoutes.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutes">MedialiveInputDestinationsNetworkRoutes</a>>

---

##### `putVpc` <a name="putVpc" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.putVpc"></a>

```java
public void putVpc(MedialiveInputDestinationsVpc value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.putVpc.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpc">MedialiveInputDestinationsVpc</a>

---

##### `resetIp` <a name="resetIp" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.resetIp"></a>

```java
public void resetIp()
```

##### `resetNetwork` <a name="resetNetwork" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.resetNetwork"></a>

```java
public void resetNetwork()
```

##### `resetNetworkRoutes` <a name="resetNetworkRoutes" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.resetNetworkRoutes"></a>

```java
public void resetNetworkRoutes()
```

##### `resetPort` <a name="resetPort" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.resetPort"></a>

```java
public void resetPort()
```

##### `resetStaticIpAddress` <a name="resetStaticIpAddress" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.resetStaticIpAddress"></a>

```java
public void resetStaticIpAddress()
```

##### `resetStreamName` <a name="resetStreamName" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.resetStreamName"></a>

```java
public void resetStreamName()
```

##### `resetUrl` <a name="resetUrl" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.resetUrl"></a>

```java
public void resetUrl()
```

##### `resetVpc` <a name="resetVpc" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.resetVpc"></a>

```java
public void resetVpc()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.property.networkRoutes">networkRoutes</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesList">MedialiveInputDestinationsNetworkRoutesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.property.vpc">vpc</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference">MedialiveInputDestinationsVpcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.property.ipInput">ipInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.property.networkInput">networkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.property.networkRoutesInput">networkRoutesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutes">MedialiveInputDestinationsNetworkRoutes</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.property.portInput">portInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.property.staticIpAddressInput">staticIpAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.property.streamNameInput">streamNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.property.urlInput">urlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.property.vpcInput">vpcInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpc">MedialiveInputDestinationsVpc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.property.ip">ip</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.property.network">network</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.property.port">port</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.property.staticIpAddress">staticIpAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.property.streamName">streamName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinations">MedialiveInputDestinations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `networkRoutes`<sup>Required</sup> <a name="networkRoutes" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.property.networkRoutes"></a>

```java
public MedialiveInputDestinationsNetworkRoutesList getNetworkRoutes();
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesList">MedialiveInputDestinationsNetworkRoutesList</a>

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.property.vpc"></a>

```java
public MedialiveInputDestinationsVpcOutputReference getVpc();
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference">MedialiveInputDestinationsVpcOutputReference</a>

---

##### `ipInput`<sup>Optional</sup> <a name="ipInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.property.ipInput"></a>

```java
public java.lang.String getIpInput();
```

- *Type:* java.lang.String

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.property.networkInput"></a>

```java
public java.lang.String getNetworkInput();
```

- *Type:* java.lang.String

---

##### `networkRoutesInput`<sup>Optional</sup> <a name="networkRoutesInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.property.networkRoutesInput"></a>

```java
public IResolvable|java.util.List<MedialiveInputDestinationsNetworkRoutes> getNetworkRoutesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutes">MedialiveInputDestinationsNetworkRoutes</a>>

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.property.portInput"></a>

```java
public java.lang.String getPortInput();
```

- *Type:* java.lang.String

---

##### `staticIpAddressInput`<sup>Optional</sup> <a name="staticIpAddressInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.property.staticIpAddressInput"></a>

```java
public java.lang.String getStaticIpAddressInput();
```

- *Type:* java.lang.String

---

##### `streamNameInput`<sup>Optional</sup> <a name="streamNameInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.property.streamNameInput"></a>

```java
public java.lang.String getStreamNameInput();
```

- *Type:* java.lang.String

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.property.urlInput"></a>

```java
public java.lang.String getUrlInput();
```

- *Type:* java.lang.String

---

##### `vpcInput`<sup>Optional</sup> <a name="vpcInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.property.vpcInput"></a>

```java
public IResolvable|MedialiveInputDestinationsVpc getVpcInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpc">MedialiveInputDestinationsVpc</a>

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.property.ip"></a>

```java
public java.lang.String getIp();
```

- *Type:* java.lang.String

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.property.port"></a>

```java
public java.lang.String getPort();
```

- *Type:* java.lang.String

---

##### `staticIpAddress`<sup>Required</sup> <a name="staticIpAddress" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.property.staticIpAddress"></a>

```java
public java.lang.String getStaticIpAddress();
```

- *Type:* java.lang.String

---

##### `streamName`<sup>Required</sup> <a name="streamName" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.property.streamName"></a>

```java
public java.lang.String getStreamName();
```

- *Type:* java.lang.String

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.property.internalValue"></a>

```java
public IResolvable|MedialiveInputDestinations getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinations">MedialiveInputDestinations</a>

---


### MedialiveInputDestinationsVpcOutputReference <a name="MedialiveInputDestinationsVpcOutputReference" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.medialive_input.MedialiveInputDestinationsVpcOutputReference;

new MedialiveInputDestinationsVpcOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.resetAvailabilityZone">resetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.resetNetworkInterfaceId">resetNetworkInterfaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAvailabilityZone` <a name="resetAvailabilityZone" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.resetAvailabilityZone"></a>

```java
public void resetAvailabilityZone()
```

##### `resetNetworkInterfaceId` <a name="resetNetworkInterfaceId" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.resetNetworkInterfaceId"></a>

```java
public void resetNetworkInterfaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.property.availabilityZoneInput">availabilityZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.property.networkInterfaceIdInput">networkInterfaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.property.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.property.networkInterfaceId">networkInterfaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpc">MedialiveInputDestinationsVpc</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `availabilityZoneInput`<sup>Optional</sup> <a name="availabilityZoneInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.property.availabilityZoneInput"></a>

```java
public java.lang.String getAvailabilityZoneInput();
```

- *Type:* java.lang.String

---

##### `networkInterfaceIdInput`<sup>Optional</sup> <a name="networkInterfaceIdInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.property.networkInterfaceIdInput"></a>

```java
public java.lang.String getNetworkInterfaceIdInput();
```

- *Type:* java.lang.String

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.property.availabilityZone"></a>

```java
public java.lang.String getAvailabilityZone();
```

- *Type:* java.lang.String

---

##### `networkInterfaceId`<sup>Required</sup> <a name="networkInterfaceId" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.property.networkInterfaceId"></a>

```java
public java.lang.String getNetworkInterfaceId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.property.internalValue"></a>

```java
public IResolvable|MedialiveInputDestinationsVpc getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpc">MedialiveInputDestinationsVpc</a>

---


### MedialiveInputInputDevicesList <a name="MedialiveInputInputDevicesList" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.medialive_input.MedialiveInputInputDevicesList;

new MedialiveInputInputDevicesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesList.get"></a>

```java
public MedialiveInputInputDevicesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevices">MedialiveInputInputDevices</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<MedialiveInputInputDevices> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevices">MedialiveInputInputDevices</a>>

---


### MedialiveInputInputDevicesOutputReference <a name="MedialiveInputInputDevicesOutputReference" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.medialive_input.MedialiveInputInputDevicesOutputReference;

new MedialiveInputInputDevicesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.resetId">resetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.resetId"></a>

```java
public void resetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevices">MedialiveInputInputDevices</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.property.internalValue"></a>

```java
public IResolvable|MedialiveInputInputDevices getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevices">MedialiveInputInputDevices</a>

---


### MedialiveInputMediaConnectFlowsList <a name="MedialiveInputMediaConnectFlowsList" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.medialive_input.MedialiveInputMediaConnectFlowsList;

new MedialiveInputMediaConnectFlowsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsList.get"></a>

```java
public MedialiveInputMediaConnectFlowsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlows">MedialiveInputMediaConnectFlows</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<MedialiveInputMediaConnectFlows> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlows">MedialiveInputMediaConnectFlows</a>>

---


### MedialiveInputMediaConnectFlowsOutputReference <a name="MedialiveInputMediaConnectFlowsOutputReference" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.medialive_input.MedialiveInputMediaConnectFlowsOutputReference;

new MedialiveInputMediaConnectFlowsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.resetFlowArn">resetFlowArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFlowArn` <a name="resetFlowArn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.resetFlowArn"></a>

```java
public void resetFlowArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.property.flowArnInput">flowArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.property.flowArn">flowArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlows">MedialiveInputMediaConnectFlows</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `flowArnInput`<sup>Optional</sup> <a name="flowArnInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.property.flowArnInput"></a>

```java
public java.lang.String getFlowArnInput();
```

- *Type:* java.lang.String

---

##### `flowArn`<sup>Required</sup> <a name="flowArn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.property.flowArn"></a>

```java
public java.lang.String getFlowArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.property.internalValue"></a>

```java
public IResolvable|MedialiveInputMediaConnectFlows getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlows">MedialiveInputMediaConnectFlows</a>

---


### MedialiveInputMulticastSettingsOutputReference <a name="MedialiveInputMulticastSettingsOutputReference" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.medialive_input.MedialiveInputMulticastSettingsOutputReference;

new MedialiveInputMulticastSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.putSources">putSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.resetSources">resetSources</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSources` <a name="putSources" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.putSources"></a>

```java
public void putSources(IResolvable|java.util.List<MedialiveInputMulticastSettingsSources> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.putSources.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSources">MedialiveInputMulticastSettingsSources</a>>

---

##### `resetSources` <a name="resetSources" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.resetSources"></a>

```java
public void resetSources()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.property.sources">sources</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesList">MedialiveInputMulticastSettingsSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.property.sourcesInput">sourcesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSources">MedialiveInputMulticastSettingsSources</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettings">MedialiveInputMulticastSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sources`<sup>Required</sup> <a name="sources" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.property.sources"></a>

```java
public MedialiveInputMulticastSettingsSourcesList getSources();
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesList">MedialiveInputMulticastSettingsSourcesList</a>

---

##### `sourcesInput`<sup>Optional</sup> <a name="sourcesInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.property.sourcesInput"></a>

```java
public IResolvable|java.util.List<MedialiveInputMulticastSettingsSources> getSourcesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSources">MedialiveInputMulticastSettingsSources</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.property.internalValue"></a>

```java
public IResolvable|MedialiveInputMulticastSettings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettings">MedialiveInputMulticastSettings</a>

---


### MedialiveInputMulticastSettingsSourcesList <a name="MedialiveInputMulticastSettingsSourcesList" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.medialive_input.MedialiveInputMulticastSettingsSourcesList;

new MedialiveInputMulticastSettingsSourcesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesList.get"></a>

```java
public MedialiveInputMulticastSettingsSourcesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSources">MedialiveInputMulticastSettingsSources</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<MedialiveInputMulticastSettingsSources> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSources">MedialiveInputMulticastSettingsSources</a>>

---


### MedialiveInputMulticastSettingsSourcesOutputReference <a name="MedialiveInputMulticastSettingsSourcesOutputReference" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.medialive_input.MedialiveInputMulticastSettingsSourcesOutputReference;

new MedialiveInputMulticastSettingsSourcesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.resetSourceIp">resetSourceIp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.resetUrl">resetUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSourceIp` <a name="resetSourceIp" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.resetSourceIp"></a>

```java
public void resetSourceIp()
```

##### `resetUrl` <a name="resetUrl" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.resetUrl"></a>

```java
public void resetUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.property.sourceIpInput">sourceIpInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.property.urlInput">urlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.property.sourceIp">sourceIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSources">MedialiveInputMulticastSettingsSources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sourceIpInput`<sup>Optional</sup> <a name="sourceIpInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.property.sourceIpInput"></a>

```java
public java.lang.String getSourceIpInput();
```

- *Type:* java.lang.String

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.property.urlInput"></a>

```java
public java.lang.String getUrlInput();
```

- *Type:* java.lang.String

---

##### `sourceIp`<sup>Required</sup> <a name="sourceIp" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.property.sourceIp"></a>

```java
public java.lang.String getSourceIp();
```

- *Type:* java.lang.String

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.property.internalValue"></a>

```java
public IResolvable|MedialiveInputMulticastSettingsSources getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSources">MedialiveInputMulticastSettingsSources</a>

---


### MedialiveInputRouterSettingsDestinationsList <a name="MedialiveInputRouterSettingsDestinationsList" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.medialive_input.MedialiveInputRouterSettingsDestinationsList;

new MedialiveInputRouterSettingsDestinationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsList.get"></a>

```java
public MedialiveInputRouterSettingsDestinationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinations">MedialiveInputRouterSettingsDestinations</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<MedialiveInputRouterSettingsDestinations> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinations">MedialiveInputRouterSettingsDestinations</a>>

---


### MedialiveInputRouterSettingsDestinationsOutputReference <a name="MedialiveInputRouterSettingsDestinationsOutputReference" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.medialive_input.MedialiveInputRouterSettingsDestinationsOutputReference;

new MedialiveInputRouterSettingsDestinationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.resetAvailabilityZoneName">resetAvailabilityZoneName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.resetRouterOutputArn">resetRouterOutputArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAvailabilityZoneName` <a name="resetAvailabilityZoneName" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.resetAvailabilityZoneName"></a>

```java
public void resetAvailabilityZoneName()
```

##### `resetRouterOutputArn` <a name="resetRouterOutputArn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.resetRouterOutputArn"></a>

```java
public void resetRouterOutputArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.property.availabilityZoneNameInput">availabilityZoneNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.property.routerOutputArnInput">routerOutputArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.property.availabilityZoneName">availabilityZoneName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.property.routerOutputArn">routerOutputArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinations">MedialiveInputRouterSettingsDestinations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `availabilityZoneNameInput`<sup>Optional</sup> <a name="availabilityZoneNameInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.property.availabilityZoneNameInput"></a>

```java
public java.lang.String getAvailabilityZoneNameInput();
```

- *Type:* java.lang.String

---

##### `routerOutputArnInput`<sup>Optional</sup> <a name="routerOutputArnInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.property.routerOutputArnInput"></a>

```java
public java.lang.String getRouterOutputArnInput();
```

- *Type:* java.lang.String

---

##### `availabilityZoneName`<sup>Required</sup> <a name="availabilityZoneName" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.property.availabilityZoneName"></a>

```java
public java.lang.String getAvailabilityZoneName();
```

- *Type:* java.lang.String

---

##### `routerOutputArn`<sup>Required</sup> <a name="routerOutputArn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.property.routerOutputArn"></a>

```java
public java.lang.String getRouterOutputArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.property.internalValue"></a>

```java
public IResolvable|MedialiveInputRouterSettingsDestinations getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinations">MedialiveInputRouterSettingsDestinations</a>

---


### MedialiveInputRouterSettingsOutputReference <a name="MedialiveInputRouterSettingsOutputReference" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.medialive_input.MedialiveInputRouterSettingsOutputReference;

new MedialiveInputRouterSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.putDestinations">putDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.resetDestinations">resetDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.resetEncryptionType">resetEncryptionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.resetSecretArn">resetSecretArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDestinations` <a name="putDestinations" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.putDestinations"></a>

```java
public void putDestinations(IResolvable|java.util.List<MedialiveInputRouterSettingsDestinations> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.putDestinations.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinations">MedialiveInputRouterSettingsDestinations</a>>

---

##### `resetDestinations` <a name="resetDestinations" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.resetDestinations"></a>

```java
public void resetDestinations()
```

##### `resetEncryptionType` <a name="resetEncryptionType" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.resetEncryptionType"></a>

```java
public void resetEncryptionType()
```

##### `resetSecretArn` <a name="resetSecretArn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.resetSecretArn"></a>

```java
public void resetSecretArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.property.destinations">destinations</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsList">MedialiveInputRouterSettingsDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.property.destinationsInput">destinationsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinations">MedialiveInputRouterSettingsDestinations</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.property.encryptionTypeInput">encryptionTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.property.secretArnInput">secretArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.property.encryptionType">encryptionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.property.secretArn">secretArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettings">MedialiveInputRouterSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.property.destinations"></a>

```java
public MedialiveInputRouterSettingsDestinationsList getDestinations();
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsList">MedialiveInputRouterSettingsDestinationsList</a>

---

##### `destinationsInput`<sup>Optional</sup> <a name="destinationsInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.property.destinationsInput"></a>

```java
public IResolvable|java.util.List<MedialiveInputRouterSettingsDestinations> getDestinationsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinations">MedialiveInputRouterSettingsDestinations</a>>

---

##### `encryptionTypeInput`<sup>Optional</sup> <a name="encryptionTypeInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.property.encryptionTypeInput"></a>

```java
public java.lang.String getEncryptionTypeInput();
```

- *Type:* java.lang.String

---

##### `secretArnInput`<sup>Optional</sup> <a name="secretArnInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.property.secretArnInput"></a>

```java
public java.lang.String getSecretArnInput();
```

- *Type:* java.lang.String

---

##### `encryptionType`<sup>Required</sup> <a name="encryptionType" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.property.encryptionType"></a>

```java
public java.lang.String getEncryptionType();
```

- *Type:* java.lang.String

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.property.secretArn"></a>

```java
public java.lang.String getSecretArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.property.internalValue"></a>

```java
public IResolvable|MedialiveInputRouterSettings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettings">MedialiveInputRouterSettings</a>

---


### MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference <a name="MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.medialive_input.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference;

new MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.putSmpte2110ReceiverGroups">putSmpte2110ReceiverGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.resetSmpte2110ReceiverGroups">resetSmpte2110ReceiverGroups</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSmpte2110ReceiverGroups` <a name="putSmpte2110ReceiverGroups" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.putSmpte2110ReceiverGroups"></a>

```java
public void putSmpte2110ReceiverGroups(IResolvable|java.util.List<MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroups> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.putSmpte2110ReceiverGroups.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroups">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroups</a>>

---

##### `resetSmpte2110ReceiverGroups` <a name="resetSmpte2110ReceiverGroups" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.resetSmpte2110ReceiverGroups"></a>

```java
public void resetSmpte2110ReceiverGroups()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.property.smpte2110ReceiverGroups">smpte2110ReceiverGroups</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.property.smpte2110ReceiverGroupsInput">smpte2110ReceiverGroupsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroups">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroups</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettings">MedialiveInputSmpte2110ReceiverGroupSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `smpte2110ReceiverGroups`<sup>Required</sup> <a name="smpte2110ReceiverGroups" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.property.smpte2110ReceiverGroups"></a>

```java
public MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList getSmpte2110ReceiverGroups();
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList</a>

---

##### `smpte2110ReceiverGroupsInput`<sup>Optional</sup> <a name="smpte2110ReceiverGroupsInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.property.smpte2110ReceiverGroupsInput"></a>

```java
public IResolvable|java.util.List<MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroups> getSmpte2110ReceiverGroupsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroups">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroups</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.property.internalValue"></a>

```java
public IResolvable|MedialiveInputSmpte2110ReceiverGroupSettings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettings">MedialiveInputSmpte2110ReceiverGroupSettings</a>

---


### MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList <a name="MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.medialive_input.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList;

new MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList.get"></a>

```java
public MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroups">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroups</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroups> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroups">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroups</a>>

---


### MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference <a name="MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.medialive_input.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference;

new MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.putSdpSettings">putSdpSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.resetSdpSettings">resetSdpSettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSdpSettings` <a name="putSdpSettings" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.putSdpSettings"></a>

```java
public void putSdpSettings(MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.putSdpSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettings">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettings</a>

---

##### `resetSdpSettings` <a name="resetSdpSettings" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.resetSdpSettings"></a>

```java
public void resetSdpSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.property.sdpSettings">sdpSettings</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.property.sdpSettingsInput">sdpSettingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettings">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroups">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sdpSettings`<sup>Required</sup> <a name="sdpSettings" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.property.sdpSettings"></a>

```java
public MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference getSdpSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference</a>

---

##### `sdpSettingsInput`<sup>Optional</sup> <a name="sdpSettingsInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.property.sdpSettingsInput"></a>

```java
public IResolvable|MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettings getSdpSettingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettings">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettings</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.property.internalValue"></a>

```java
public IResolvable|MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroups getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroups">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroups</a>

---


### MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList <a name="MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.medialive_input.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList;

new MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList.get"></a>

```java
public MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps</a>>

---


### MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference <a name="MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.medialive_input.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference;

new MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.resetMediaIndex">resetMediaIndex</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.resetSdpUrl">resetSdpUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMediaIndex` <a name="resetMediaIndex" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.resetMediaIndex"></a>

```java
public void resetMediaIndex()
```

##### `resetSdpUrl` <a name="resetSdpUrl" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.resetSdpUrl"></a>

```java
public void resetSdpUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.property.mediaIndexInput">mediaIndexInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.property.sdpUrlInput">sdpUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.property.mediaIndex">mediaIndex</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.property.sdpUrl">sdpUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `mediaIndexInput`<sup>Optional</sup> <a name="mediaIndexInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.property.mediaIndexInput"></a>

```java
public java.lang.Number getMediaIndexInput();
```

- *Type:* java.lang.Number

---

##### `sdpUrlInput`<sup>Optional</sup> <a name="sdpUrlInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.property.sdpUrlInput"></a>

```java
public java.lang.String getSdpUrlInput();
```

- *Type:* java.lang.String

---

##### `mediaIndex`<sup>Required</sup> <a name="mediaIndex" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.property.mediaIndex"></a>

```java
public java.lang.Number getMediaIndex();
```

- *Type:* java.lang.Number

---

##### `sdpUrl`<sup>Required</sup> <a name="sdpUrl" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.property.sdpUrl"></a>

```java
public java.lang.String getSdpUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.property.internalValue"></a>

```java
public IResolvable|MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps</a>

---


### MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList <a name="MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.medialive_input.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList;

new MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList.get"></a>

```java
public MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps</a>>

---


### MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference <a name="MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.medialive_input.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference;

new MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.resetMediaIndex">resetMediaIndex</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.resetSdpUrl">resetSdpUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMediaIndex` <a name="resetMediaIndex" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.resetMediaIndex"></a>

```java
public void resetMediaIndex()
```

##### `resetSdpUrl` <a name="resetSdpUrl" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.resetSdpUrl"></a>

```java
public void resetSdpUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.property.mediaIndexInput">mediaIndexInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.property.sdpUrlInput">sdpUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.property.mediaIndex">mediaIndex</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.property.sdpUrl">sdpUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `mediaIndexInput`<sup>Optional</sup> <a name="mediaIndexInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.property.mediaIndexInput"></a>

```java
public java.lang.Number getMediaIndexInput();
```

- *Type:* java.lang.Number

---

##### `sdpUrlInput`<sup>Optional</sup> <a name="sdpUrlInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.property.sdpUrlInput"></a>

```java
public java.lang.String getSdpUrlInput();
```

- *Type:* java.lang.String

---

##### `mediaIndex`<sup>Required</sup> <a name="mediaIndex" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.property.mediaIndex"></a>

```java
public java.lang.Number getMediaIndex();
```

- *Type:* java.lang.Number

---

##### `sdpUrl`<sup>Required</sup> <a name="sdpUrl" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.property.sdpUrl"></a>

```java
public java.lang.String getSdpUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.property.internalValue"></a>

```java
public IResolvable|MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps</a>

---


### MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference <a name="MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.medialive_input.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference;

new MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.putAncillarySdps">putAncillarySdps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.putAudioSdps">putAudioSdps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.putVideoSdp">putVideoSdp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.resetAncillarySdps">resetAncillarySdps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.resetAudioSdps">resetAudioSdps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.resetVideoSdp">resetVideoSdp</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAncillarySdps` <a name="putAncillarySdps" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.putAncillarySdps"></a>

```java
public void putAncillarySdps(IResolvable|java.util.List<MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.putAncillarySdps.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps</a>>

---

##### `putAudioSdps` <a name="putAudioSdps" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.putAudioSdps"></a>

```java
public void putAudioSdps(IResolvable|java.util.List<MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.putAudioSdps.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps</a>>

---

##### `putVideoSdp` <a name="putVideoSdp" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.putVideoSdp"></a>

```java
public void putVideoSdp(MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdp value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.putVideoSdp.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdp">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdp</a>

---

##### `resetAncillarySdps` <a name="resetAncillarySdps" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.resetAncillarySdps"></a>

```java
public void resetAncillarySdps()
```

##### `resetAudioSdps` <a name="resetAudioSdps" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.resetAudioSdps"></a>

```java
public void resetAudioSdps()
```

##### `resetVideoSdp` <a name="resetVideoSdp" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.resetVideoSdp"></a>

```java
public void resetVideoSdp()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.property.ancillarySdps">ancillarySdps</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.property.audioSdps">audioSdps</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.property.videoSdp">videoSdp</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.property.ancillarySdpsInput">ancillarySdpsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.property.audioSdpsInput">audioSdpsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.property.videoSdpInput">videoSdpInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdp">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettings">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ancillarySdps`<sup>Required</sup> <a name="ancillarySdps" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.property.ancillarySdps"></a>

```java
public MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList getAncillarySdps();
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList</a>

---

##### `audioSdps`<sup>Required</sup> <a name="audioSdps" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.property.audioSdps"></a>

```java
public MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList getAudioSdps();
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList</a>

---

##### `videoSdp`<sup>Required</sup> <a name="videoSdp" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.property.videoSdp"></a>

```java
public MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference getVideoSdp();
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference</a>

---

##### `ancillarySdpsInput`<sup>Optional</sup> <a name="ancillarySdpsInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.property.ancillarySdpsInput"></a>

```java
public IResolvable|java.util.List<MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps> getAncillarySdpsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps</a>>

---

##### `audioSdpsInput`<sup>Optional</sup> <a name="audioSdpsInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.property.audioSdpsInput"></a>

```java
public IResolvable|java.util.List<MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps> getAudioSdpsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps</a>>

---

##### `videoSdpInput`<sup>Optional</sup> <a name="videoSdpInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.property.videoSdpInput"></a>

```java
public IResolvable|MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdp getVideoSdpInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdp">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdp</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.property.internalValue"></a>

```java
public IResolvable|MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettings">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettings</a>

---


### MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference <a name="MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.medialive_input.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference;

new MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.resetMediaIndex">resetMediaIndex</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.resetSdpUrl">resetSdpUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMediaIndex` <a name="resetMediaIndex" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.resetMediaIndex"></a>

```java
public void resetMediaIndex()
```

##### `resetSdpUrl` <a name="resetSdpUrl" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.resetSdpUrl"></a>

```java
public void resetSdpUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.property.mediaIndexInput">mediaIndexInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.property.sdpUrlInput">sdpUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.property.mediaIndex">mediaIndex</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.property.sdpUrl">sdpUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdp">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `mediaIndexInput`<sup>Optional</sup> <a name="mediaIndexInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.property.mediaIndexInput"></a>

```java
public java.lang.Number getMediaIndexInput();
```

- *Type:* java.lang.Number

---

##### `sdpUrlInput`<sup>Optional</sup> <a name="sdpUrlInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.property.sdpUrlInput"></a>

```java
public java.lang.String getSdpUrlInput();
```

- *Type:* java.lang.String

---

##### `mediaIndex`<sup>Required</sup> <a name="mediaIndex" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.property.mediaIndex"></a>

```java
public java.lang.Number getMediaIndex();
```

- *Type:* java.lang.Number

---

##### `sdpUrl`<sup>Required</sup> <a name="sdpUrl" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.property.sdpUrl"></a>

```java
public java.lang.String getSdpUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.property.internalValue"></a>

```java
public IResolvable|MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdp getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdp">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdp</a>

---


### MedialiveInputSourcesList <a name="MedialiveInputSourcesList" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.medialive_input.MedialiveInputSourcesList;

new MedialiveInputSourcesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesList.get"></a>

```java
public MedialiveInputSourcesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSources">MedialiveInputSources</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<MedialiveInputSources> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSources">MedialiveInputSources</a>>

---


### MedialiveInputSourcesOutputReference <a name="MedialiveInputSourcesOutputReference" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.medialive_input.MedialiveInputSourcesOutputReference;

new MedialiveInputSourcesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.resetPasswordParam">resetPasswordParam</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.resetUrl">resetUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.resetUsername">resetUsername</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPasswordParam` <a name="resetPasswordParam" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.resetPasswordParam"></a>

```java
public void resetPasswordParam()
```

##### `resetUrl` <a name="resetUrl" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.resetUrl"></a>

```java
public void resetUrl()
```

##### `resetUsername` <a name="resetUsername" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.resetUsername"></a>

```java
public void resetUsername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.property.passwordParamInput">passwordParamInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.property.urlInput">urlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.property.passwordParam">passwordParam</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSources">MedialiveInputSources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `passwordParamInput`<sup>Optional</sup> <a name="passwordParamInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.property.passwordParamInput"></a>

```java
public java.lang.String getPasswordParamInput();
```

- *Type:* java.lang.String

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.property.urlInput"></a>

```java
public java.lang.String getUrlInput();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `passwordParam`<sup>Required</sup> <a name="passwordParam" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.property.passwordParam"></a>

```java
public java.lang.String getPasswordParam();
```

- *Type:* java.lang.String

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.property.internalValue"></a>

```java
public IResolvable|MedialiveInputSources getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSources">MedialiveInputSources</a>

---


### MedialiveInputSrtSettingsOutputReference <a name="MedialiveInputSrtSettingsOutputReference" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.medialive_input.MedialiveInputSrtSettingsOutputReference;

new MedialiveInputSrtSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.putSrtCallerSources">putSrtCallerSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.putSrtListenerSettings">putSrtListenerSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.resetSrtCallerSources">resetSrtCallerSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.resetSrtListenerSettings">resetSrtListenerSettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSrtCallerSources` <a name="putSrtCallerSources" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.putSrtCallerSources"></a>

```java
public void putSrtCallerSources(IResolvable|java.util.List<MedialiveInputSrtSettingsSrtCallerSources> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.putSrtCallerSources.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSources">MedialiveInputSrtSettingsSrtCallerSources</a>>

---

##### `putSrtListenerSettings` <a name="putSrtListenerSettings" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.putSrtListenerSettings"></a>

```java
public void putSrtListenerSettings(MedialiveInputSrtSettingsSrtListenerSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.putSrtListenerSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettings">MedialiveInputSrtSettingsSrtListenerSettings</a>

---

##### `resetSrtCallerSources` <a name="resetSrtCallerSources" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.resetSrtCallerSources"></a>

```java
public void resetSrtCallerSources()
```

##### `resetSrtListenerSettings` <a name="resetSrtListenerSettings" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.resetSrtListenerSettings"></a>

```java
public void resetSrtListenerSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.property.srtCallerSources">srtCallerSources</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesList">MedialiveInputSrtSettingsSrtCallerSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.property.srtListenerSettings">srtListenerSettings</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference">MedialiveInputSrtSettingsSrtListenerSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.property.srtCallerSourcesInput">srtCallerSourcesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSources">MedialiveInputSrtSettingsSrtCallerSources</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.property.srtListenerSettingsInput">srtListenerSettingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettings">MedialiveInputSrtSettingsSrtListenerSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettings">MedialiveInputSrtSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `srtCallerSources`<sup>Required</sup> <a name="srtCallerSources" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.property.srtCallerSources"></a>

```java
public MedialiveInputSrtSettingsSrtCallerSourcesList getSrtCallerSources();
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesList">MedialiveInputSrtSettingsSrtCallerSourcesList</a>

---

##### `srtListenerSettings`<sup>Required</sup> <a name="srtListenerSettings" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.property.srtListenerSettings"></a>

```java
public MedialiveInputSrtSettingsSrtListenerSettingsOutputReference getSrtListenerSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference">MedialiveInputSrtSettingsSrtListenerSettingsOutputReference</a>

---

##### `srtCallerSourcesInput`<sup>Optional</sup> <a name="srtCallerSourcesInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.property.srtCallerSourcesInput"></a>

```java
public IResolvable|java.util.List<MedialiveInputSrtSettingsSrtCallerSources> getSrtCallerSourcesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSources">MedialiveInputSrtSettingsSrtCallerSources</a>>

---

##### `srtListenerSettingsInput`<sup>Optional</sup> <a name="srtListenerSettingsInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.property.srtListenerSettingsInput"></a>

```java
public IResolvable|MedialiveInputSrtSettingsSrtListenerSettings getSrtListenerSettingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettings">MedialiveInputSrtSettingsSrtListenerSettings</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.property.internalValue"></a>

```java
public IResolvable|MedialiveInputSrtSettings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettings">MedialiveInputSrtSettings</a>

---


### MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference <a name="MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.medialive_input.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference;

new MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.resetAlgorithm">resetAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.resetPassphraseSecretArn">resetPassphraseSecretArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAlgorithm` <a name="resetAlgorithm" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.resetAlgorithm"></a>

```java
public void resetAlgorithm()
```

##### `resetPassphraseSecretArn` <a name="resetPassphraseSecretArn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.resetPassphraseSecretArn"></a>

```java
public void resetPassphraseSecretArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.property.algorithmInput">algorithmInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.property.passphraseSecretArnInput">passphraseSecretArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.property.algorithm">algorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.property.passphraseSecretArn">passphraseSecretArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryption">MedialiveInputSrtSettingsSrtCallerSourcesDecryption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `algorithmInput`<sup>Optional</sup> <a name="algorithmInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.property.algorithmInput"></a>

```java
public java.lang.String getAlgorithmInput();
```

- *Type:* java.lang.String

---

##### `passphraseSecretArnInput`<sup>Optional</sup> <a name="passphraseSecretArnInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.property.passphraseSecretArnInput"></a>

```java
public java.lang.String getPassphraseSecretArnInput();
```

- *Type:* java.lang.String

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.property.algorithm"></a>

```java
public java.lang.String getAlgorithm();
```

- *Type:* java.lang.String

---

##### `passphraseSecretArn`<sup>Required</sup> <a name="passphraseSecretArn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.property.passphraseSecretArn"></a>

```java
public java.lang.String getPassphraseSecretArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.property.internalValue"></a>

```java
public IResolvable|MedialiveInputSrtSettingsSrtCallerSourcesDecryption getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryption">MedialiveInputSrtSettingsSrtCallerSourcesDecryption</a>

---


### MedialiveInputSrtSettingsSrtCallerSourcesList <a name="MedialiveInputSrtSettingsSrtCallerSourcesList" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.medialive_input.MedialiveInputSrtSettingsSrtCallerSourcesList;

new MedialiveInputSrtSettingsSrtCallerSourcesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesList.get"></a>

```java
public MedialiveInputSrtSettingsSrtCallerSourcesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSources">MedialiveInputSrtSettingsSrtCallerSources</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<MedialiveInputSrtSettingsSrtCallerSources> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSources">MedialiveInputSrtSettingsSrtCallerSources</a>>

---


### MedialiveInputSrtSettingsSrtCallerSourcesOutputReference <a name="MedialiveInputSrtSettingsSrtCallerSourcesOutputReference" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.medialive_input.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference;

new MedialiveInputSrtSettingsSrtCallerSourcesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.putDecryption">putDecryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.resetDecryption">resetDecryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.resetMinimumLatency">resetMinimumLatency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.resetSrtListenerAddress">resetSrtListenerAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.resetSrtListenerPort">resetSrtListenerPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.resetStreamId">resetStreamId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDecryption` <a name="putDecryption" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.putDecryption"></a>

```java
public void putDecryption(MedialiveInputSrtSettingsSrtCallerSourcesDecryption value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.putDecryption.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryption">MedialiveInputSrtSettingsSrtCallerSourcesDecryption</a>

---

##### `resetDecryption` <a name="resetDecryption" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.resetDecryption"></a>

```java
public void resetDecryption()
```

##### `resetMinimumLatency` <a name="resetMinimumLatency" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.resetMinimumLatency"></a>

```java
public void resetMinimumLatency()
```

##### `resetSrtListenerAddress` <a name="resetSrtListenerAddress" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.resetSrtListenerAddress"></a>

```java
public void resetSrtListenerAddress()
```

##### `resetSrtListenerPort` <a name="resetSrtListenerPort" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.resetSrtListenerPort"></a>

```java
public void resetSrtListenerPort()
```

##### `resetStreamId` <a name="resetStreamId" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.resetStreamId"></a>

```java
public void resetStreamId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.property.decryption">decryption</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference">MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.property.decryptionInput">decryptionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryption">MedialiveInputSrtSettingsSrtCallerSourcesDecryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.property.minimumLatencyInput">minimumLatencyInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.property.srtListenerAddressInput">srtListenerAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.property.srtListenerPortInput">srtListenerPortInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.property.streamIdInput">streamIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.property.minimumLatency">minimumLatency</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.property.srtListenerAddress">srtListenerAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.property.srtListenerPort">srtListenerPort</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.property.streamId">streamId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSources">MedialiveInputSrtSettingsSrtCallerSources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `decryption`<sup>Required</sup> <a name="decryption" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.property.decryption"></a>

```java
public MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference getDecryption();
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference">MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference</a>

---

##### `decryptionInput`<sup>Optional</sup> <a name="decryptionInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.property.decryptionInput"></a>

```java
public IResolvable|MedialiveInputSrtSettingsSrtCallerSourcesDecryption getDecryptionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryption">MedialiveInputSrtSettingsSrtCallerSourcesDecryption</a>

---

##### `minimumLatencyInput`<sup>Optional</sup> <a name="minimumLatencyInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.property.minimumLatencyInput"></a>

```java
public java.lang.Number getMinimumLatencyInput();
```

- *Type:* java.lang.Number

---

##### `srtListenerAddressInput`<sup>Optional</sup> <a name="srtListenerAddressInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.property.srtListenerAddressInput"></a>

```java
public java.lang.String getSrtListenerAddressInput();
```

- *Type:* java.lang.String

---

##### `srtListenerPortInput`<sup>Optional</sup> <a name="srtListenerPortInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.property.srtListenerPortInput"></a>

```java
public java.lang.String getSrtListenerPortInput();
```

- *Type:* java.lang.String

---

##### `streamIdInput`<sup>Optional</sup> <a name="streamIdInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.property.streamIdInput"></a>

```java
public java.lang.String getStreamIdInput();
```

- *Type:* java.lang.String

---

##### `minimumLatency`<sup>Required</sup> <a name="minimumLatency" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.property.minimumLatency"></a>

```java
public java.lang.Number getMinimumLatency();
```

- *Type:* java.lang.Number

---

##### `srtListenerAddress`<sup>Required</sup> <a name="srtListenerAddress" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.property.srtListenerAddress"></a>

```java
public java.lang.String getSrtListenerAddress();
```

- *Type:* java.lang.String

---

##### `srtListenerPort`<sup>Required</sup> <a name="srtListenerPort" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.property.srtListenerPort"></a>

```java
public java.lang.String getSrtListenerPort();
```

- *Type:* java.lang.String

---

##### `streamId`<sup>Required</sup> <a name="streamId" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.property.streamId"></a>

```java
public java.lang.String getStreamId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.property.internalValue"></a>

```java
public IResolvable|MedialiveInputSrtSettingsSrtCallerSources getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSources">MedialiveInputSrtSettingsSrtCallerSources</a>

---


### MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference <a name="MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.medialive_input.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference;

new MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.resetAlgorithm">resetAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.resetPassphraseSecretArn">resetPassphraseSecretArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAlgorithm` <a name="resetAlgorithm" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.resetAlgorithm"></a>

```java
public void resetAlgorithm()
```

##### `resetPassphraseSecretArn` <a name="resetPassphraseSecretArn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.resetPassphraseSecretArn"></a>

```java
public void resetPassphraseSecretArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.property.algorithmInput">algorithmInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.property.passphraseSecretArnInput">passphraseSecretArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.property.algorithm">algorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.property.passphraseSecretArn">passphraseSecretArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryption">MedialiveInputSrtSettingsSrtListenerSettingsDecryption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `algorithmInput`<sup>Optional</sup> <a name="algorithmInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.property.algorithmInput"></a>

```java
public java.lang.String getAlgorithmInput();
```

- *Type:* java.lang.String

---

##### `passphraseSecretArnInput`<sup>Optional</sup> <a name="passphraseSecretArnInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.property.passphraseSecretArnInput"></a>

```java
public java.lang.String getPassphraseSecretArnInput();
```

- *Type:* java.lang.String

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.property.algorithm"></a>

```java
public java.lang.String getAlgorithm();
```

- *Type:* java.lang.String

---

##### `passphraseSecretArn`<sup>Required</sup> <a name="passphraseSecretArn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.property.passphraseSecretArn"></a>

```java
public java.lang.String getPassphraseSecretArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.property.internalValue"></a>

```java
public IResolvable|MedialiveInputSrtSettingsSrtListenerSettingsDecryption getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryption">MedialiveInputSrtSettingsSrtListenerSettingsDecryption</a>

---


### MedialiveInputSrtSettingsSrtListenerSettingsOutputReference <a name="MedialiveInputSrtSettingsSrtListenerSettingsOutputReference" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.medialive_input.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference;

new MedialiveInputSrtSettingsSrtListenerSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.putDecryption">putDecryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.resetDecryption">resetDecryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.resetMinimumLatency">resetMinimumLatency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.resetStreamId">resetStreamId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDecryption` <a name="putDecryption" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.putDecryption"></a>

```java
public void putDecryption(MedialiveInputSrtSettingsSrtListenerSettingsDecryption value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.putDecryption.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryption">MedialiveInputSrtSettingsSrtListenerSettingsDecryption</a>

---

##### `resetDecryption` <a name="resetDecryption" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.resetDecryption"></a>

```java
public void resetDecryption()
```

##### `resetMinimumLatency` <a name="resetMinimumLatency" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.resetMinimumLatency"></a>

```java
public void resetMinimumLatency()
```

##### `resetStreamId` <a name="resetStreamId" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.resetStreamId"></a>

```java
public void resetStreamId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.property.decryption">decryption</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference">MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.property.decryptionInput">decryptionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryption">MedialiveInputSrtSettingsSrtListenerSettingsDecryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.property.minimumLatencyInput">minimumLatencyInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.property.streamIdInput">streamIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.property.minimumLatency">minimumLatency</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.property.streamId">streamId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettings">MedialiveInputSrtSettingsSrtListenerSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `decryption`<sup>Required</sup> <a name="decryption" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.property.decryption"></a>

```java
public MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference getDecryption();
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference">MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference</a>

---

##### `decryptionInput`<sup>Optional</sup> <a name="decryptionInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.property.decryptionInput"></a>

```java
public IResolvable|MedialiveInputSrtSettingsSrtListenerSettingsDecryption getDecryptionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryption">MedialiveInputSrtSettingsSrtListenerSettingsDecryption</a>

---

##### `minimumLatencyInput`<sup>Optional</sup> <a name="minimumLatencyInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.property.minimumLatencyInput"></a>

```java
public java.lang.Number getMinimumLatencyInput();
```

- *Type:* java.lang.Number

---

##### `streamIdInput`<sup>Optional</sup> <a name="streamIdInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.property.streamIdInput"></a>

```java
public java.lang.String getStreamIdInput();
```

- *Type:* java.lang.String

---

##### `minimumLatency`<sup>Required</sup> <a name="minimumLatency" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.property.minimumLatency"></a>

```java
public java.lang.Number getMinimumLatency();
```

- *Type:* java.lang.Number

---

##### `streamId`<sup>Required</sup> <a name="streamId" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.property.streamId"></a>

```java
public java.lang.String getStreamId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.property.internalValue"></a>

```java
public IResolvable|MedialiveInputSrtSettingsSrtListenerSettings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettings">MedialiveInputSrtSettingsSrtListenerSettings</a>

---


### MedialiveInputVpcOutputReference <a name="MedialiveInputVpcOutputReference" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.medialive_input.MedialiveInputVpcOutputReference;

new MedialiveInputVpcOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.resetSecurityGroupIds">resetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.resetSubnetIds">resetSubnetIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSecurityGroupIds` <a name="resetSecurityGroupIds" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.resetSecurityGroupIds"></a>

```java
public void resetSecurityGroupIds()
```

##### `resetSubnetIds` <a name="resetSubnetIds" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.resetSubnetIds"></a>

```java
public void resetSubnetIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.property.subnetIdsInput">subnetIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputVpc">MedialiveInputVpc</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.property.securityGroupIdsInput"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.property.subnetIdsInput"></a>

```java
public java.util.List<java.lang.String> getSubnetIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.property.internalValue"></a>

```java
public IResolvable|MedialiveInputVpc getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputVpc">MedialiveInputVpc</a>

---



