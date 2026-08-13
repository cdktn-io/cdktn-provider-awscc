# `ivsChannel` Submodule <a name="`ivsChannel` Submodule" id="@cdktn/provider-awscc.ivsChannel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IvsChannel <a name="IvsChannel" id="@cdktn/provider-awscc.ivsChannel.IvsChannel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_channel awscc_ivs_channel}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.Initializer"></a>

```java
import io.cdktn.providers.awscc.ivs_channel.IvsChannel;

IvsChannel.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .authorized(java.lang.Boolean|IResolvable)
//  .containerFormat(java.lang.String)
//  .insecureIngest(java.lang.Boolean|IResolvable)
//  .latencyMode(java.lang.String)
//  .multitrackInputConfiguration(IvsChannelMultitrackInputConfiguration)
//  .name(java.lang.String)
//  .preset(java.lang.String)
//  .recordingConfigurationArn(java.lang.String)
//  .tags(IResolvable|java.util.List<IvsChannelTags>)
//  .type(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.Initializer.parameter.authorized">authorized</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the channel is authorized. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.Initializer.parameter.containerFormat">containerFormat</a></code> | <code>java.lang.String</code> | Indicates which content-packaging format is used (MPEG-TS or fMP4). |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.Initializer.parameter.insecureIngest">insecureIngest</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the channel allows insecure ingest. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.Initializer.parameter.latencyMode">latencyMode</a></code> | <code>java.lang.String</code> | Channel latency mode. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.Initializer.parameter.multitrackInputConfiguration">multitrackInputConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfiguration">IvsChannelMultitrackInputConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_channel#multitrack_input_configuration IvsChannel#multitrack_input_configuration}. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Channel. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.Initializer.parameter.preset">preset</a></code> | <code>java.lang.String</code> | Optional transcode preset for the channel. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.Initializer.parameter.recordingConfigurationArn">recordingConfigurationArn</a></code> | <code>java.lang.String</code> | Recording Configuration ARN. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTags">IvsChannelTags</a>></code> | A list of key-value pairs that contain metadata for the asset model. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Channel type, which determines the allowable resolution and bitrate. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `authorized`<sup>Optional</sup> <a name="authorized" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.Initializer.parameter.authorized"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the channel is authorized.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_channel#authorized IvsChannel#authorized}

---

##### `containerFormat`<sup>Optional</sup> <a name="containerFormat" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.Initializer.parameter.containerFormat"></a>

- *Type:* java.lang.String

Indicates which content-packaging format is used (MPEG-TS or fMP4).

If multitrackInputConfiguration is specified and enabled is true, then containerFormat is required and must be set to FRAGMENTED_MP4. Otherwise, containerFormat may be set to TS or FRAGMENTED_MP4. Default: TS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_channel#container_format IvsChannel#container_format}

---

##### `insecureIngest`<sup>Optional</sup> <a name="insecureIngest" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.Initializer.parameter.insecureIngest"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the channel allows insecure ingest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_channel#insecure_ingest IvsChannel#insecure_ingest}

---

##### `latencyMode`<sup>Optional</sup> <a name="latencyMode" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.Initializer.parameter.latencyMode"></a>

- *Type:* java.lang.String

Channel latency mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_channel#latency_mode IvsChannel#latency_mode}

---

##### `multitrackInputConfiguration`<sup>Optional</sup> <a name="multitrackInputConfiguration" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.Initializer.parameter.multitrackInputConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfiguration">IvsChannelMultitrackInputConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_channel#multitrack_input_configuration IvsChannel#multitrack_input_configuration}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_channel#name IvsChannel#name}

---

##### `preset`<sup>Optional</sup> <a name="preset" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.Initializer.parameter.preset"></a>

- *Type:* java.lang.String

Optional transcode preset for the channel.

This is selectable only for ADVANCED_HD and ADVANCED_SD channel types. For those channel types, the default preset is HIGHER_BANDWIDTH_DELIVERY. For other channel types (BASIC and STANDARD), preset is the empty string ("").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_channel#preset IvsChannel#preset}

---

##### `recordingConfigurationArn`<sup>Optional</sup> <a name="recordingConfigurationArn" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.Initializer.parameter.recordingConfigurationArn"></a>

- *Type:* java.lang.String

Recording Configuration ARN.

A value other than an empty string indicates that recording is enabled. Default: "" (recording is disabled).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_channel#recording_configuration_arn IvsChannel#recording_configuration_arn}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTags">IvsChannelTags</a>>

A list of key-value pairs that contain metadata for the asset model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_channel#tags IvsChannel#tags}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Channel type, which determines the allowable resolution and bitrate.

If you exceed the allowable resolution or bitrate, the stream probably will disconnect immediately.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_channel#type IvsChannel#type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.putMultitrackInputConfiguration">putMultitrackInputConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.resetAuthorized">resetAuthorized</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.resetContainerFormat">resetContainerFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.resetInsecureIngest">resetInsecureIngest</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.resetLatencyMode">resetLatencyMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.resetMultitrackInputConfiguration">resetMultitrackInputConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.resetPreset">resetPreset</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.resetRecordingConfigurationArn">resetRecordingConfigurationArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMultitrackInputConfiguration` <a name="putMultitrackInputConfiguration" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.putMultitrackInputConfiguration"></a>

```java
public void putMultitrackInputConfiguration(IvsChannelMultitrackInputConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.putMultitrackInputConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfiguration">IvsChannelMultitrackInputConfiguration</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<IvsChannelTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTags">IvsChannelTags</a>>

---

##### `resetAuthorized` <a name="resetAuthorized" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.resetAuthorized"></a>

```java
public void resetAuthorized()
```

##### `resetContainerFormat` <a name="resetContainerFormat" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.resetContainerFormat"></a>

```java
public void resetContainerFormat()
```

##### `resetInsecureIngest` <a name="resetInsecureIngest" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.resetInsecureIngest"></a>

```java
public void resetInsecureIngest()
```

##### `resetLatencyMode` <a name="resetLatencyMode" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.resetLatencyMode"></a>

```java
public void resetLatencyMode()
```

##### `resetMultitrackInputConfiguration` <a name="resetMultitrackInputConfiguration" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.resetMultitrackInputConfiguration"></a>

```java
public void resetMultitrackInputConfiguration()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.resetName"></a>

```java
public void resetName()
```

##### `resetPreset` <a name="resetPreset" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.resetPreset"></a>

```java
public void resetPreset()
```

##### `resetRecordingConfigurationArn` <a name="resetRecordingConfigurationArn" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.resetRecordingConfigurationArn"></a>

```java
public void resetRecordingConfigurationArn()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.resetTags"></a>

```java
public void resetTags()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.resetType"></a>

```java
public void resetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IvsChannel resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.isConstruct"></a>

```java
import io.cdktn.providers.awscc.ivs_channel.IvsChannel;

IvsChannel.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.ivs_channel.IvsChannel;

IvsChannel.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.ivs_channel.IvsChannel;

IvsChannel.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.ivs_channel.IvsChannel;

IvsChannel.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IvsChannel.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a IvsChannel resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IvsChannel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IvsChannel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_channel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the IvsChannel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.ingestEndpoint">ingestEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.multitrackInputConfiguration">multitrackInputConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference">IvsChannelMultitrackInputConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.playbackUrl">playbackUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsList">IvsChannelTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.authorizedInput">authorizedInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.containerFormatInput">containerFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.insecureIngestInput">insecureIngestInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.latencyModeInput">latencyModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.multitrackInputConfigurationInput">multitrackInputConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfiguration">IvsChannelMultitrackInputConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.presetInput">presetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.recordingConfigurationArnInput">recordingConfigurationArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTags">IvsChannelTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.authorized">authorized</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.containerFormat">containerFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.insecureIngest">insecureIngest</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.latencyMode">latencyMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.preset">preset</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.recordingConfigurationArn">recordingConfigurationArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ingestEndpoint`<sup>Required</sup> <a name="ingestEndpoint" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.ingestEndpoint"></a>

```java
public java.lang.String getIngestEndpoint();
```

- *Type:* java.lang.String

---

##### `multitrackInputConfiguration`<sup>Required</sup> <a name="multitrackInputConfiguration" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.multitrackInputConfiguration"></a>

```java
public IvsChannelMultitrackInputConfigurationOutputReference getMultitrackInputConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference">IvsChannelMultitrackInputConfigurationOutputReference</a>

---

##### `playbackUrl`<sup>Required</sup> <a name="playbackUrl" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.playbackUrl"></a>

```java
public java.lang.String getPlaybackUrl();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.tags"></a>

```java
public IvsChannelTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsList">IvsChannelTagsList</a>

---

##### `authorizedInput`<sup>Optional</sup> <a name="authorizedInput" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.authorizedInput"></a>

```java
public java.lang.Boolean|IResolvable getAuthorizedInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `containerFormatInput`<sup>Optional</sup> <a name="containerFormatInput" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.containerFormatInput"></a>

```java
public java.lang.String getContainerFormatInput();
```

- *Type:* java.lang.String

---

##### `insecureIngestInput`<sup>Optional</sup> <a name="insecureIngestInput" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.insecureIngestInput"></a>

```java
public java.lang.Boolean|IResolvable getInsecureIngestInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `latencyModeInput`<sup>Optional</sup> <a name="latencyModeInput" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.latencyModeInput"></a>

```java
public java.lang.String getLatencyModeInput();
```

- *Type:* java.lang.String

---

##### `multitrackInputConfigurationInput`<sup>Optional</sup> <a name="multitrackInputConfigurationInput" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.multitrackInputConfigurationInput"></a>

```java
public IResolvable|IvsChannelMultitrackInputConfiguration getMultitrackInputConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfiguration">IvsChannelMultitrackInputConfiguration</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `presetInput`<sup>Optional</sup> <a name="presetInput" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.presetInput"></a>

```java
public java.lang.String getPresetInput();
```

- *Type:* java.lang.String

---

##### `recordingConfigurationArnInput`<sup>Optional</sup> <a name="recordingConfigurationArnInput" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.recordingConfigurationArnInput"></a>

```java
public java.lang.String getRecordingConfigurationArnInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.tagsInput"></a>

```java
public IResolvable|java.util.List<IvsChannelTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTags">IvsChannelTags</a>>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `authorized`<sup>Required</sup> <a name="authorized" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.authorized"></a>

```java
public java.lang.Boolean|IResolvable getAuthorized();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `containerFormat`<sup>Required</sup> <a name="containerFormat" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.containerFormat"></a>

```java
public java.lang.String getContainerFormat();
```

- *Type:* java.lang.String

---

##### `insecureIngest`<sup>Required</sup> <a name="insecureIngest" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.insecureIngest"></a>

```java
public java.lang.Boolean|IResolvable getInsecureIngest();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `latencyMode`<sup>Required</sup> <a name="latencyMode" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.latencyMode"></a>

```java
public java.lang.String getLatencyMode();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `preset`<sup>Required</sup> <a name="preset" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.preset"></a>

```java
public java.lang.String getPreset();
```

- *Type:* java.lang.String

---

##### `recordingConfigurationArn`<sup>Required</sup> <a name="recordingConfigurationArn" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.recordingConfigurationArn"></a>

```java
public java.lang.String getRecordingConfigurationArn();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannel.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ivsChannel.IvsChannel.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IvsChannelConfig <a name="IvsChannelConfig" id="@cdktn/provider-awscc.ivsChannel.IvsChannelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.ivs_channel.IvsChannelConfig;

IvsChannelConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .authorized(java.lang.Boolean|IResolvable)
//  .containerFormat(java.lang.String)
//  .insecureIngest(java.lang.Boolean|IResolvable)
//  .latencyMode(java.lang.String)
//  .multitrackInputConfiguration(IvsChannelMultitrackInputConfiguration)
//  .name(java.lang.String)
//  .preset(java.lang.String)
//  .recordingConfigurationArn(java.lang.String)
//  .tags(IResolvable|java.util.List<IvsChannelTags>)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.authorized">authorized</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the channel is authorized. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.containerFormat">containerFormat</a></code> | <code>java.lang.String</code> | Indicates which content-packaging format is used (MPEG-TS or fMP4). |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.insecureIngest">insecureIngest</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the channel allows insecure ingest. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.latencyMode">latencyMode</a></code> | <code>java.lang.String</code> | Channel latency mode. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.multitrackInputConfiguration">multitrackInputConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfiguration">IvsChannelMultitrackInputConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_channel#multitrack_input_configuration IvsChannel#multitrack_input_configuration}. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.name">name</a></code> | <code>java.lang.String</code> | Channel. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.preset">preset</a></code> | <code>java.lang.String</code> | Optional transcode preset for the channel. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.recordingConfigurationArn">recordingConfigurationArn</a></code> | <code>java.lang.String</code> | Recording Configuration ARN. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTags">IvsChannelTags</a>></code> | A list of key-value pairs that contain metadata for the asset model. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.type">type</a></code> | <code>java.lang.String</code> | Channel type, which determines the allowable resolution and bitrate. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `authorized`<sup>Optional</sup> <a name="authorized" id="@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.authorized"></a>

```java
public java.lang.Boolean|IResolvable getAuthorized();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the channel is authorized.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_channel#authorized IvsChannel#authorized}

---

##### `containerFormat`<sup>Optional</sup> <a name="containerFormat" id="@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.containerFormat"></a>

```java
public java.lang.String getContainerFormat();
```

- *Type:* java.lang.String

Indicates which content-packaging format is used (MPEG-TS or fMP4).

If multitrackInputConfiguration is specified and enabled is true, then containerFormat is required and must be set to FRAGMENTED_MP4. Otherwise, containerFormat may be set to TS or FRAGMENTED_MP4. Default: TS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_channel#container_format IvsChannel#container_format}

---

##### `insecureIngest`<sup>Optional</sup> <a name="insecureIngest" id="@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.insecureIngest"></a>

```java
public java.lang.Boolean|IResolvable getInsecureIngest();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the channel allows insecure ingest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_channel#insecure_ingest IvsChannel#insecure_ingest}

---

##### `latencyMode`<sup>Optional</sup> <a name="latencyMode" id="@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.latencyMode"></a>

```java
public java.lang.String getLatencyMode();
```

- *Type:* java.lang.String

Channel latency mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_channel#latency_mode IvsChannel#latency_mode}

---

##### `multitrackInputConfiguration`<sup>Optional</sup> <a name="multitrackInputConfiguration" id="@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.multitrackInputConfiguration"></a>

```java
public IvsChannelMultitrackInputConfiguration getMultitrackInputConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfiguration">IvsChannelMultitrackInputConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_channel#multitrack_input_configuration IvsChannel#multitrack_input_configuration}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_channel#name IvsChannel#name}

---

##### `preset`<sup>Optional</sup> <a name="preset" id="@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.preset"></a>

```java
public java.lang.String getPreset();
```

- *Type:* java.lang.String

Optional transcode preset for the channel.

This is selectable only for ADVANCED_HD and ADVANCED_SD channel types. For those channel types, the default preset is HIGHER_BANDWIDTH_DELIVERY. For other channel types (BASIC and STANDARD), preset is the empty string ("").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_channel#preset IvsChannel#preset}

---

##### `recordingConfigurationArn`<sup>Optional</sup> <a name="recordingConfigurationArn" id="@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.recordingConfigurationArn"></a>

```java
public java.lang.String getRecordingConfigurationArn();
```

- *Type:* java.lang.String

Recording Configuration ARN.

A value other than an empty string indicates that recording is enabled. Default: "" (recording is disabled).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_channel#recording_configuration_arn IvsChannel#recording_configuration_arn}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.tags"></a>

```java
public IResolvable|java.util.List<IvsChannelTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTags">IvsChannelTags</a>>

A list of key-value pairs that contain metadata for the asset model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_channel#tags IvsChannel#tags}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.ivsChannel.IvsChannelConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Channel type, which determines the allowable resolution and bitrate.

If you exceed the allowable resolution or bitrate, the stream probably will disconnect immediately.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_channel#type IvsChannel#type}

---

### IvsChannelMultitrackInputConfiguration <a name="IvsChannelMultitrackInputConfiguration" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.ivs_channel.IvsChannelMultitrackInputConfiguration;

IvsChannelMultitrackInputConfiguration.builder()
//  .enabled(java.lang.Boolean|IResolvable)
//  .maximumResolution(java.lang.String)
//  .policy(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfiguration.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether multitrack input is enabled. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfiguration.property.maximumResolution">maximumResolution</a></code> | <code>java.lang.String</code> | Maximum resolution for multitrack input. Required if enabled is true. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfiguration.property.policy">policy</a></code> | <code>java.lang.String</code> | Indicates whether multitrack input is allowed or required. Required if enabled is true. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfiguration.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether multitrack input is enabled.

Can be set to true only if channel type is STANDARD. Setting enabled to true with any other channel type will cause an exception. If true, then policy, maximumResolution, and containerFormat are required, and containerFormat must be set to FRAGMENTED_MP4. Default: false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_channel#enabled IvsChannel#enabled}

---

##### `maximumResolution`<sup>Optional</sup> <a name="maximumResolution" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfiguration.property.maximumResolution"></a>

```java
public java.lang.String getMaximumResolution();
```

- *Type:* java.lang.String

Maximum resolution for multitrack input. Required if enabled is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_channel#maximum_resolution IvsChannel#maximum_resolution}

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfiguration.property.policy"></a>

```java
public java.lang.String getPolicy();
```

- *Type:* java.lang.String

Indicates whether multitrack input is allowed or required. Required if enabled is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_channel#policy IvsChannel#policy}

---

### IvsChannelTags <a name="IvsChannelTags" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.ivs_channel.IvsChannelTags;

IvsChannelTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_channel#key IvsChannel#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivs_channel#value IvsChannel#value}

---

## Classes <a name="Classes" id="Classes"></a>

### IvsChannelMultitrackInputConfigurationOutputReference <a name="IvsChannelMultitrackInputConfigurationOutputReference" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ivs_channel.IvsChannelMultitrackInputConfigurationOutputReference;

new IvsChannelMultitrackInputConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.resetMaximumResolution">resetMaximumResolution</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.resetPolicy">resetPolicy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetMaximumResolution` <a name="resetMaximumResolution" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.resetMaximumResolution"></a>

```java
public void resetMaximumResolution()
```

##### `resetPolicy` <a name="resetPolicy" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.resetPolicy"></a>

```java
public void resetPolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.property.maximumResolutionInput">maximumResolutionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.property.policyInput">policyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.property.maximumResolution">maximumResolution</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.property.policy">policy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfiguration">IvsChannelMultitrackInputConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `maximumResolutionInput`<sup>Optional</sup> <a name="maximumResolutionInput" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.property.maximumResolutionInput"></a>

```java
public java.lang.String getMaximumResolutionInput();
```

- *Type:* java.lang.String

---

##### `policyInput`<sup>Optional</sup> <a name="policyInput" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.property.policyInput"></a>

```java
public java.lang.String getPolicyInput();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `maximumResolution`<sup>Required</sup> <a name="maximumResolution" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.property.maximumResolution"></a>

```java
public java.lang.String getMaximumResolution();
```

- *Type:* java.lang.String

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.property.policy"></a>

```java
public java.lang.String getPolicy();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|IvsChannelMultitrackInputConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelMultitrackInputConfiguration">IvsChannelMultitrackInputConfiguration</a>

---


### IvsChannelTagsList <a name="IvsChannelTagsList" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.ivs_channel.IvsChannelTagsList;

new IvsChannelTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsList.get"></a>

```java
public IvsChannelTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTags">IvsChannelTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<IvsChannelTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTags">IvsChannelTags</a>>

---


### IvsChannelTagsOutputReference <a name="IvsChannelTagsOutputReference" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ivs_channel.IvsChannelTagsOutputReference;

new IvsChannelTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTags">IvsChannelTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ivsChannel.IvsChannelTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|IvsChannelTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ivsChannel.IvsChannelTags">IvsChannelTags</a>

---



