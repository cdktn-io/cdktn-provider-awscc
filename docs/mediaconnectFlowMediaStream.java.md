# `mediaconnectFlowMediaStream` Submodule <a name="`mediaconnectFlowMediaStream` Submodule" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MediaconnectFlowMediaStream <a name="MediaconnectFlowMediaStream" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediaconnect_flow_media_stream awscc_mediaconnect_flow_media_stream}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_flow_media_stream.MediaconnectFlowMediaStream;

MediaconnectFlowMediaStream.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .flowArn(java.lang.String)
    .mediaStreamId(java.lang.Number)
    .mediaStreamName(java.lang.String)
    .mediaStreamType(java.lang.String)
//  .attributes(MediaconnectFlowMediaStreamAttributes)
//  .clockRate(java.lang.Number)
//  .description(java.lang.String)
//  .tags(IResolvable|java.util.List<MediaconnectFlowMediaStreamTags>)
//  .videoFormat(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.Initializer.parameter.flowArn">flowArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the flow that the media stream belongs to. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.Initializer.parameter.mediaStreamId">mediaStreamId</a></code> | <code>java.lang.Number</code> | A unique identifier for the media stream. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.Initializer.parameter.mediaStreamName">mediaStreamName</a></code> | <code>java.lang.String</code> | A name that helps you distinguish one media stream from another. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.Initializer.parameter.mediaStreamType">mediaStreamType</a></code> | <code>java.lang.String</code> | The type of media stream. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.Initializer.parameter.attributes">attributes</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributes">MediaconnectFlowMediaStreamAttributes</a></code> | Attributes that are related to the media stream. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.Initializer.parameter.clockRate">clockRate</a></code> | <code>java.lang.Number</code> | The sample rate (in Hz) for the stream. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A description that can help you quickly identify what your media stream is used for. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTags">MediaconnectFlowMediaStreamTags</a>></code> | The key-value pairs that can be used to tag and organize the media stream. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.Initializer.parameter.videoFormat">videoFormat</a></code> | <code>java.lang.String</code> | The resolution of the video. Required for a video media stream and rejected for other media stream types. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `flowArn`<sup>Required</sup> <a name="flowArn" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.Initializer.parameter.flowArn"></a>

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the flow that the media stream belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediaconnect_flow_media_stream#flow_arn MediaconnectFlowMediaStream#flow_arn}

---

##### `mediaStreamId`<sup>Required</sup> <a name="mediaStreamId" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.Initializer.parameter.mediaStreamId"></a>

- *Type:* java.lang.Number

A unique identifier for the media stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediaconnect_flow_media_stream#media_stream_id MediaconnectFlowMediaStream#media_stream_id}

---

##### `mediaStreamName`<sup>Required</sup> <a name="mediaStreamName" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.Initializer.parameter.mediaStreamName"></a>

- *Type:* java.lang.String

A name that helps you distinguish one media stream from another.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediaconnect_flow_media_stream#media_stream_name MediaconnectFlowMediaStream#media_stream_name}

---

##### `mediaStreamType`<sup>Required</sup> <a name="mediaStreamType" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.Initializer.parameter.mediaStreamType"></a>

- *Type:* java.lang.String

The type of media stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediaconnect_flow_media_stream#media_stream_type MediaconnectFlowMediaStream#media_stream_type}

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.Initializer.parameter.attributes"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributes">MediaconnectFlowMediaStreamAttributes</a>

Attributes that are related to the media stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediaconnect_flow_media_stream#attributes MediaconnectFlowMediaStream#attributes}

---

##### `clockRate`<sup>Optional</sup> <a name="clockRate" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.Initializer.parameter.clockRate"></a>

- *Type:* java.lang.Number

The sample rate (in Hz) for the stream.

If the media stream type is video or ancillary data, set this value to 90000. If the media stream type is audio, set this value to either 48000 or 96000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediaconnect_flow_media_stream#clock_rate MediaconnectFlowMediaStream#clock_rate}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A description that can help you quickly identify what your media stream is used for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediaconnect_flow_media_stream#description MediaconnectFlowMediaStream#description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTags">MediaconnectFlowMediaStreamTags</a>>

The key-value pairs that can be used to tag and organize the media stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediaconnect_flow_media_stream#tags MediaconnectFlowMediaStream#tags}

---

##### `videoFormat`<sup>Optional</sup> <a name="videoFormat" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.Initializer.parameter.videoFormat"></a>

- *Type:* java.lang.String

The resolution of the video. Required for a video media stream and rejected for other media stream types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediaconnect_flow_media_stream#video_format MediaconnectFlowMediaStream#video_format}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.putAttributes">putAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.resetAttributes">resetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.resetClockRate">resetClockRate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.resetVideoFormat">resetVideoFormat</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAttributes` <a name="putAttributes" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.putAttributes"></a>

```java
public void putAttributes(MediaconnectFlowMediaStreamAttributes value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.putAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributes">MediaconnectFlowMediaStreamAttributes</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<MediaconnectFlowMediaStreamTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTags">MediaconnectFlowMediaStreamTags</a>>

---

##### `resetAttributes` <a name="resetAttributes" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.resetAttributes"></a>

```java
public void resetAttributes()
```

##### `resetClockRate` <a name="resetClockRate" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.resetClockRate"></a>

```java
public void resetClockRate()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.resetTags"></a>

```java
public void resetTags()
```

##### `resetVideoFormat` <a name="resetVideoFormat" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.resetVideoFormat"></a>

```java
public void resetVideoFormat()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a MediaconnectFlowMediaStream resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.isConstruct"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_flow_media_stream.MediaconnectFlowMediaStream;

MediaconnectFlowMediaStream.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_flow_media_stream.MediaconnectFlowMediaStream;

MediaconnectFlowMediaStream.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_flow_media_stream.MediaconnectFlowMediaStream;

MediaconnectFlowMediaStream.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_flow_media_stream.MediaconnectFlowMediaStream;

MediaconnectFlowMediaStream.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),MediaconnectFlowMediaStream.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a MediaconnectFlowMediaStream resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the MediaconnectFlowMediaStream to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing MediaconnectFlowMediaStream that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediaconnect_flow_media_stream#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the MediaconnectFlowMediaStream to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.attributes">attributes</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference">MediaconnectFlowMediaStreamAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.fmt">fmt</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsList">MediaconnectFlowMediaStreamTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.attributesInput">attributesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributes">MediaconnectFlowMediaStreamAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.clockRateInput">clockRateInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.flowArnInput">flowArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.mediaStreamIdInput">mediaStreamIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.mediaStreamNameInput">mediaStreamNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.mediaStreamTypeInput">mediaStreamTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTags">MediaconnectFlowMediaStreamTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.videoFormatInput">videoFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.clockRate">clockRate</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.flowArn">flowArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.mediaStreamId">mediaStreamId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.mediaStreamName">mediaStreamName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.mediaStreamType">mediaStreamType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.videoFormat">videoFormat</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.attributes"></a>

```java
public MediaconnectFlowMediaStreamAttributesOutputReference getAttributes();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference">MediaconnectFlowMediaStreamAttributesOutputReference</a>

---

##### `fmt`<sup>Required</sup> <a name="fmt" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.fmt"></a>

```java
public java.lang.Number getFmt();
```

- *Type:* java.lang.Number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.tags"></a>

```java
public MediaconnectFlowMediaStreamTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsList">MediaconnectFlowMediaStreamTagsList</a>

---

##### `attributesInput`<sup>Optional</sup> <a name="attributesInput" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.attributesInput"></a>

```java
public IResolvable|MediaconnectFlowMediaStreamAttributes getAttributesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributes">MediaconnectFlowMediaStreamAttributes</a>

---

##### `clockRateInput`<sup>Optional</sup> <a name="clockRateInput" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.clockRateInput"></a>

```java
public java.lang.Number getClockRateInput();
```

- *Type:* java.lang.Number

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `flowArnInput`<sup>Optional</sup> <a name="flowArnInput" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.flowArnInput"></a>

```java
public java.lang.String getFlowArnInput();
```

- *Type:* java.lang.String

---

##### `mediaStreamIdInput`<sup>Optional</sup> <a name="mediaStreamIdInput" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.mediaStreamIdInput"></a>

```java
public java.lang.Number getMediaStreamIdInput();
```

- *Type:* java.lang.Number

---

##### `mediaStreamNameInput`<sup>Optional</sup> <a name="mediaStreamNameInput" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.mediaStreamNameInput"></a>

```java
public java.lang.String getMediaStreamNameInput();
```

- *Type:* java.lang.String

---

##### `mediaStreamTypeInput`<sup>Optional</sup> <a name="mediaStreamTypeInput" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.mediaStreamTypeInput"></a>

```java
public java.lang.String getMediaStreamTypeInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.tagsInput"></a>

```java
public IResolvable|java.util.List<MediaconnectFlowMediaStreamTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTags">MediaconnectFlowMediaStreamTags</a>>

---

##### `videoFormatInput`<sup>Optional</sup> <a name="videoFormatInput" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.videoFormatInput"></a>

```java
public java.lang.String getVideoFormatInput();
```

- *Type:* java.lang.String

---

##### `clockRate`<sup>Required</sup> <a name="clockRate" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.clockRate"></a>

```java
public java.lang.Number getClockRate();
```

- *Type:* java.lang.Number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `flowArn`<sup>Required</sup> <a name="flowArn" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.flowArn"></a>

```java
public java.lang.String getFlowArn();
```

- *Type:* java.lang.String

---

##### `mediaStreamId`<sup>Required</sup> <a name="mediaStreamId" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.mediaStreamId"></a>

```java
public java.lang.Number getMediaStreamId();
```

- *Type:* java.lang.Number

---

##### `mediaStreamName`<sup>Required</sup> <a name="mediaStreamName" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.mediaStreamName"></a>

```java
public java.lang.String getMediaStreamName();
```

- *Type:* java.lang.String

---

##### `mediaStreamType`<sup>Required</sup> <a name="mediaStreamType" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.mediaStreamType"></a>

```java
public java.lang.String getMediaStreamType();
```

- *Type:* java.lang.String

---

##### `videoFormat`<sup>Required</sup> <a name="videoFormat" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.videoFormat"></a>

```java
public java.lang.String getVideoFormat();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStream.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MediaconnectFlowMediaStreamAttributes <a name="MediaconnectFlowMediaStreamAttributes" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributes.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_flow_media_stream.MediaconnectFlowMediaStreamAttributes;

MediaconnectFlowMediaStreamAttributes.builder()
//  .fmtp(MediaconnectFlowMediaStreamAttributesFmtp)
//  .lang(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributes.property.fmtp">fmtp</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtp">MediaconnectFlowMediaStreamAttributesFmtp</a></code> | A set of parameters that define the media stream. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributes.property.lang">lang</a></code> | <code>java.lang.String</code> | The audio language, in a format that is recognized by the receiver. |

---

##### `fmtp`<sup>Optional</sup> <a name="fmtp" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributes.property.fmtp"></a>

```java
public MediaconnectFlowMediaStreamAttributesFmtp getFmtp();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtp">MediaconnectFlowMediaStreamAttributesFmtp</a>

A set of parameters that define the media stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediaconnect_flow_media_stream#fmtp MediaconnectFlowMediaStream#fmtp}

---

##### `lang`<sup>Optional</sup> <a name="lang" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributes.property.lang"></a>

```java
public java.lang.String getLang();
```

- *Type:* java.lang.String

The audio language, in a format that is recognized by the receiver.

Can only be specified for an audio media stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediaconnect_flow_media_stream#lang MediaconnectFlowMediaStream#lang}

---

### MediaconnectFlowMediaStreamAttributesFmtp <a name="MediaconnectFlowMediaStreamAttributesFmtp" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtp.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_flow_media_stream.MediaconnectFlowMediaStreamAttributesFmtp;

MediaconnectFlowMediaStreamAttributesFmtp.builder()
//  .channelOrder(java.lang.String)
//  .colorimetry(java.lang.String)
//  .exactFramerate(java.lang.String)
//  .par(java.lang.String)
//  .range(java.lang.String)
//  .scanMode(java.lang.String)
//  .tcs(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtp.property.channelOrder">channelOrder</a></code> | <code>java.lang.String</code> | The format of the audio channel. Can only be specified for an audio media stream. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtp.property.colorimetry">colorimetry</a></code> | <code>java.lang.String</code> | The format used for the representation of color. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtp.property.exactFramerate">exactFramerate</a></code> | <code>java.lang.String</code> | The frame rate for the video stream, in frames/second. For example: 60000/1001. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtp.property.par">par</a></code> | <code>java.lang.String</code> | The pixel aspect ratio (PAR) of the video. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtp.property.range">range</a></code> | <code>java.lang.String</code> | The encoding range of the video. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtp.property.scanMode">scanMode</a></code> | <code>java.lang.String</code> | The type of compression that was used to smooth the video's appearance. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtp.property.tcs">tcs</a></code> | <code>java.lang.String</code> | The transfer characteristic system (TCS) that is used in the video. |

---

##### `channelOrder`<sup>Optional</sup> <a name="channelOrder" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtp.property.channelOrder"></a>

```java
public java.lang.String getChannelOrder();
```

- *Type:* java.lang.String

The format of the audio channel. Can only be specified for an audio media stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediaconnect_flow_media_stream#channel_order MediaconnectFlowMediaStream#channel_order}

---

##### `colorimetry`<sup>Optional</sup> <a name="colorimetry" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtp.property.colorimetry"></a>

```java
public java.lang.String getColorimetry();
```

- *Type:* java.lang.String

The format used for the representation of color.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediaconnect_flow_media_stream#colorimetry MediaconnectFlowMediaStream#colorimetry}

---

##### `exactFramerate`<sup>Optional</sup> <a name="exactFramerate" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtp.property.exactFramerate"></a>

```java
public java.lang.String getExactFramerate();
```

- *Type:* java.lang.String

The frame rate for the video stream, in frames/second. For example: 60000/1001.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediaconnect_flow_media_stream#exact_framerate MediaconnectFlowMediaStream#exact_framerate}

---

##### `par`<sup>Optional</sup> <a name="par" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtp.property.par"></a>

```java
public java.lang.String getPar();
```

- *Type:* java.lang.String

The pixel aspect ratio (PAR) of the video.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediaconnect_flow_media_stream#par MediaconnectFlowMediaStream#par}

---

##### `range`<sup>Optional</sup> <a name="range" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtp.property.range"></a>

```java
public java.lang.String getRange();
```

- *Type:* java.lang.String

The encoding range of the video.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediaconnect_flow_media_stream#range MediaconnectFlowMediaStream#range}

---

##### `scanMode`<sup>Optional</sup> <a name="scanMode" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtp.property.scanMode"></a>

```java
public java.lang.String getScanMode();
```

- *Type:* java.lang.String

The type of compression that was used to smooth the video's appearance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediaconnect_flow_media_stream#scan_mode MediaconnectFlowMediaStream#scan_mode}

---

##### `tcs`<sup>Optional</sup> <a name="tcs" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtp.property.tcs"></a>

```java
public java.lang.String getTcs();
```

- *Type:* java.lang.String

The transfer characteristic system (TCS) that is used in the video.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediaconnect_flow_media_stream#tcs MediaconnectFlowMediaStream#tcs}

---

### MediaconnectFlowMediaStreamConfig <a name="MediaconnectFlowMediaStreamConfig" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_flow_media_stream.MediaconnectFlowMediaStreamConfig;

MediaconnectFlowMediaStreamConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .flowArn(java.lang.String)
    .mediaStreamId(java.lang.Number)
    .mediaStreamName(java.lang.String)
    .mediaStreamType(java.lang.String)
//  .attributes(MediaconnectFlowMediaStreamAttributes)
//  .clockRate(java.lang.Number)
//  .description(java.lang.String)
//  .tags(IResolvable|java.util.List<MediaconnectFlowMediaStreamTags>)
//  .videoFormat(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.flowArn">flowArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the flow that the media stream belongs to. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.mediaStreamId">mediaStreamId</a></code> | <code>java.lang.Number</code> | A unique identifier for the media stream. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.mediaStreamName">mediaStreamName</a></code> | <code>java.lang.String</code> | A name that helps you distinguish one media stream from another. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.mediaStreamType">mediaStreamType</a></code> | <code>java.lang.String</code> | The type of media stream. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.attributes">attributes</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributes">MediaconnectFlowMediaStreamAttributes</a></code> | Attributes that are related to the media stream. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.clockRate">clockRate</a></code> | <code>java.lang.Number</code> | The sample rate (in Hz) for the stream. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.description">description</a></code> | <code>java.lang.String</code> | A description that can help you quickly identify what your media stream is used for. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTags">MediaconnectFlowMediaStreamTags</a>></code> | The key-value pairs that can be used to tag and organize the media stream. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.videoFormat">videoFormat</a></code> | <code>java.lang.String</code> | The resolution of the video. Required for a video media stream and rejected for other media stream types. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `flowArn`<sup>Required</sup> <a name="flowArn" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.flowArn"></a>

```java
public java.lang.String getFlowArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the flow that the media stream belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediaconnect_flow_media_stream#flow_arn MediaconnectFlowMediaStream#flow_arn}

---

##### `mediaStreamId`<sup>Required</sup> <a name="mediaStreamId" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.mediaStreamId"></a>

```java
public java.lang.Number getMediaStreamId();
```

- *Type:* java.lang.Number

A unique identifier for the media stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediaconnect_flow_media_stream#media_stream_id MediaconnectFlowMediaStream#media_stream_id}

---

##### `mediaStreamName`<sup>Required</sup> <a name="mediaStreamName" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.mediaStreamName"></a>

```java
public java.lang.String getMediaStreamName();
```

- *Type:* java.lang.String

A name that helps you distinguish one media stream from another.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediaconnect_flow_media_stream#media_stream_name MediaconnectFlowMediaStream#media_stream_name}

---

##### `mediaStreamType`<sup>Required</sup> <a name="mediaStreamType" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.mediaStreamType"></a>

```java
public java.lang.String getMediaStreamType();
```

- *Type:* java.lang.String

The type of media stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediaconnect_flow_media_stream#media_stream_type MediaconnectFlowMediaStream#media_stream_type}

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.attributes"></a>

```java
public MediaconnectFlowMediaStreamAttributes getAttributes();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributes">MediaconnectFlowMediaStreamAttributes</a>

Attributes that are related to the media stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediaconnect_flow_media_stream#attributes MediaconnectFlowMediaStream#attributes}

---

##### `clockRate`<sup>Optional</sup> <a name="clockRate" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.clockRate"></a>

```java
public java.lang.Number getClockRate();
```

- *Type:* java.lang.Number

The sample rate (in Hz) for the stream.

If the media stream type is video or ancillary data, set this value to 90000. If the media stream type is audio, set this value to either 48000 or 96000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediaconnect_flow_media_stream#clock_rate MediaconnectFlowMediaStream#clock_rate}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A description that can help you quickly identify what your media stream is used for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediaconnect_flow_media_stream#description MediaconnectFlowMediaStream#description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.tags"></a>

```java
public IResolvable|java.util.List<MediaconnectFlowMediaStreamTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTags">MediaconnectFlowMediaStreamTags</a>>

The key-value pairs that can be used to tag and organize the media stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediaconnect_flow_media_stream#tags MediaconnectFlowMediaStream#tags}

---

##### `videoFormat`<sup>Optional</sup> <a name="videoFormat" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamConfig.property.videoFormat"></a>

```java
public java.lang.String getVideoFormat();
```

- *Type:* java.lang.String

The resolution of the video. Required for a video media stream and rejected for other media stream types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediaconnect_flow_media_stream#video_format MediaconnectFlowMediaStream#video_format}

---

### MediaconnectFlowMediaStreamTags <a name="MediaconnectFlowMediaStreamTags" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_flow_media_stream.MediaconnectFlowMediaStreamTags;

MediaconnectFlowMediaStreamTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediaconnect_flow_media_stream#key MediaconnectFlowMediaStream#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediaconnect_flow_media_stream#value MediaconnectFlowMediaStream#value}

---

## Classes <a name="Classes" id="Classes"></a>

### MediaconnectFlowMediaStreamAttributesFmtpOutputReference <a name="MediaconnectFlowMediaStreamAttributesFmtpOutputReference" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_flow_media_stream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference;

new MediaconnectFlowMediaStreamAttributesFmtpOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.resetChannelOrder">resetChannelOrder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.resetColorimetry">resetColorimetry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.resetExactFramerate">resetExactFramerate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.resetPar">resetPar</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.resetRange">resetRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.resetScanMode">resetScanMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.resetTcs">resetTcs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetChannelOrder` <a name="resetChannelOrder" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.resetChannelOrder"></a>

```java
public void resetChannelOrder()
```

##### `resetColorimetry` <a name="resetColorimetry" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.resetColorimetry"></a>

```java
public void resetColorimetry()
```

##### `resetExactFramerate` <a name="resetExactFramerate" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.resetExactFramerate"></a>

```java
public void resetExactFramerate()
```

##### `resetPar` <a name="resetPar" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.resetPar"></a>

```java
public void resetPar()
```

##### `resetRange` <a name="resetRange" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.resetRange"></a>

```java
public void resetRange()
```

##### `resetScanMode` <a name="resetScanMode" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.resetScanMode"></a>

```java
public void resetScanMode()
```

##### `resetTcs` <a name="resetTcs" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.resetTcs"></a>

```java
public void resetTcs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.channelOrderInput">channelOrderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.colorimetryInput">colorimetryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.exactFramerateInput">exactFramerateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.parInput">parInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.rangeInput">rangeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.scanModeInput">scanModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.tcsInput">tcsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.channelOrder">channelOrder</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.colorimetry">colorimetry</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.exactFramerate">exactFramerate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.par">par</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.range">range</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.scanMode">scanMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.tcs">tcs</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtp">MediaconnectFlowMediaStreamAttributesFmtp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `channelOrderInput`<sup>Optional</sup> <a name="channelOrderInput" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.channelOrderInput"></a>

```java
public java.lang.String getChannelOrderInput();
```

- *Type:* java.lang.String

---

##### `colorimetryInput`<sup>Optional</sup> <a name="colorimetryInput" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.colorimetryInput"></a>

```java
public java.lang.String getColorimetryInput();
```

- *Type:* java.lang.String

---

##### `exactFramerateInput`<sup>Optional</sup> <a name="exactFramerateInput" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.exactFramerateInput"></a>

```java
public java.lang.String getExactFramerateInput();
```

- *Type:* java.lang.String

---

##### `parInput`<sup>Optional</sup> <a name="parInput" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.parInput"></a>

```java
public java.lang.String getParInput();
```

- *Type:* java.lang.String

---

##### `rangeInput`<sup>Optional</sup> <a name="rangeInput" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.rangeInput"></a>

```java
public java.lang.String getRangeInput();
```

- *Type:* java.lang.String

---

##### `scanModeInput`<sup>Optional</sup> <a name="scanModeInput" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.scanModeInput"></a>

```java
public java.lang.String getScanModeInput();
```

- *Type:* java.lang.String

---

##### `tcsInput`<sup>Optional</sup> <a name="tcsInput" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.tcsInput"></a>

```java
public java.lang.String getTcsInput();
```

- *Type:* java.lang.String

---

##### `channelOrder`<sup>Required</sup> <a name="channelOrder" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.channelOrder"></a>

```java
public java.lang.String getChannelOrder();
```

- *Type:* java.lang.String

---

##### `colorimetry`<sup>Required</sup> <a name="colorimetry" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.colorimetry"></a>

```java
public java.lang.String getColorimetry();
```

- *Type:* java.lang.String

---

##### `exactFramerate`<sup>Required</sup> <a name="exactFramerate" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.exactFramerate"></a>

```java
public java.lang.String getExactFramerate();
```

- *Type:* java.lang.String

---

##### `par`<sup>Required</sup> <a name="par" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.par"></a>

```java
public java.lang.String getPar();
```

- *Type:* java.lang.String

---

##### `range`<sup>Required</sup> <a name="range" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.range"></a>

```java
public java.lang.String getRange();
```

- *Type:* java.lang.String

---

##### `scanMode`<sup>Required</sup> <a name="scanMode" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.scanMode"></a>

```java
public java.lang.String getScanMode();
```

- *Type:* java.lang.String

---

##### `tcs`<sup>Required</sup> <a name="tcs" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.tcs"></a>

```java
public java.lang.String getTcs();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference.property.internalValue"></a>

```java
public IResolvable|MediaconnectFlowMediaStreamAttributesFmtp getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtp">MediaconnectFlowMediaStreamAttributesFmtp</a>

---


### MediaconnectFlowMediaStreamAttributesOutputReference <a name="MediaconnectFlowMediaStreamAttributesOutputReference" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_flow_media_stream.MediaconnectFlowMediaStreamAttributesOutputReference;

new MediaconnectFlowMediaStreamAttributesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.putFmtp">putFmtp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.resetFmtp">resetFmtp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.resetLang">resetLang</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFmtp` <a name="putFmtp" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.putFmtp"></a>

```java
public void putFmtp(MediaconnectFlowMediaStreamAttributesFmtp value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.putFmtp.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtp">MediaconnectFlowMediaStreamAttributesFmtp</a>

---

##### `resetFmtp` <a name="resetFmtp" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.resetFmtp"></a>

```java
public void resetFmtp()
```

##### `resetLang` <a name="resetLang" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.resetLang"></a>

```java
public void resetLang()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.property.fmtp">fmtp</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference">MediaconnectFlowMediaStreamAttributesFmtpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.property.fmtpInput">fmtpInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtp">MediaconnectFlowMediaStreamAttributesFmtp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.property.langInput">langInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.property.lang">lang</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributes">MediaconnectFlowMediaStreamAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fmtp`<sup>Required</sup> <a name="fmtp" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.property.fmtp"></a>

```java
public MediaconnectFlowMediaStreamAttributesFmtpOutputReference getFmtp();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtpOutputReference">MediaconnectFlowMediaStreamAttributesFmtpOutputReference</a>

---

##### `fmtpInput`<sup>Optional</sup> <a name="fmtpInput" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.property.fmtpInput"></a>

```java
public IResolvable|MediaconnectFlowMediaStreamAttributesFmtp getFmtpInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesFmtp">MediaconnectFlowMediaStreamAttributesFmtp</a>

---

##### `langInput`<sup>Optional</sup> <a name="langInput" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.property.langInput"></a>

```java
public java.lang.String getLangInput();
```

- *Type:* java.lang.String

---

##### `lang`<sup>Required</sup> <a name="lang" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.property.lang"></a>

```java
public java.lang.String getLang();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributesOutputReference.property.internalValue"></a>

```java
public IResolvable|MediaconnectFlowMediaStreamAttributes getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamAttributes">MediaconnectFlowMediaStreamAttributes</a>

---


### MediaconnectFlowMediaStreamTagsList <a name="MediaconnectFlowMediaStreamTagsList" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_flow_media_stream.MediaconnectFlowMediaStreamTagsList;

new MediaconnectFlowMediaStreamTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsList.get"></a>

```java
public MediaconnectFlowMediaStreamTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTags">MediaconnectFlowMediaStreamTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<MediaconnectFlowMediaStreamTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTags">MediaconnectFlowMediaStreamTags</a>>

---


### MediaconnectFlowMediaStreamTagsOutputReference <a name="MediaconnectFlowMediaStreamTagsOutputReference" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediaconnect_flow_media_stream.MediaconnectFlowMediaStreamTagsOutputReference;

new MediaconnectFlowMediaStreamTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTags">MediaconnectFlowMediaStreamTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|MediaconnectFlowMediaStreamTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectFlowMediaStream.MediaconnectFlowMediaStreamTags">MediaconnectFlowMediaStreamTags</a>

---



