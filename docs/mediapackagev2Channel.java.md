# `mediapackagev2Channel` Submodule <a name="`mediapackagev2Channel` Submodule" id="@cdktn/provider-awscc.mediapackagev2Channel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Mediapackagev2Channel <a name="Mediapackagev2Channel" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_channel awscc_mediapackagev2_channel}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediapackagev2_channel.Mediapackagev2Channel;

Mediapackagev2Channel.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .channelGroupName(java.lang.String)
    .channelName(java.lang.String)
//  .description(java.lang.String)
//  .inputSwitchConfiguration(Mediapackagev2ChannelInputSwitchConfiguration)
//  .inputType(java.lang.String)
//  .outputHeaderConfiguration(Mediapackagev2ChannelOutputHeaderConfiguration)
//  .outputLockingMode(java.lang.String)
//  .tags(IResolvable|java.util.List<Mediapackagev2ChannelTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.Initializer.parameter.channelGroupName">channelGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_channel#channel_group_name Mediapackagev2Channel#channel_group_name}. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.Initializer.parameter.channelName">channelName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_channel#channel_name Mediapackagev2Channel#channel_name}. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | <p>Enter any descriptive text that helps you to identify the channel.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.Initializer.parameter.inputSwitchConfiguration">inputSwitchConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfiguration">Mediapackagev2ChannelInputSwitchConfiguration</a></code> | <p>The configuration for input switching based on the media quality confidence score (MQCS) as provided from AWS Elemental MediaLive.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.Initializer.parameter.inputType">inputType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_channel#input_type Mediapackagev2Channel#input_type}. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.Initializer.parameter.outputHeaderConfiguration">outputHeaderConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfiguration">Mediapackagev2ChannelOutputHeaderConfiguration</a></code> | <p>The settings for what common media server data (CMSD) headers AWS Elemental MediaPackage includes in responses to the CDN.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.Initializer.parameter.outputLockingMode">outputLockingMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_channel#output_locking_mode Mediapackagev2Channel#output_locking_mode}. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTags">Mediapackagev2ChannelTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_channel#tags Mediapackagev2Channel#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `channelGroupName`<sup>Required</sup> <a name="channelGroupName" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.Initializer.parameter.channelGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_channel#channel_group_name Mediapackagev2Channel#channel_group_name}.

---

##### `channelName`<sup>Required</sup> <a name="channelName" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.Initializer.parameter.channelName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_channel#channel_name Mediapackagev2Channel#channel_name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.Initializer.parameter.description"></a>

- *Type:* java.lang.String

<p>Enter any descriptive text that helps you to identify the channel.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_channel#description Mediapackagev2Channel#description}

---

##### `inputSwitchConfiguration`<sup>Optional</sup> <a name="inputSwitchConfiguration" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.Initializer.parameter.inputSwitchConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfiguration">Mediapackagev2ChannelInputSwitchConfiguration</a>

<p>The configuration for input switching based on the media quality confidence score (MQCS) as provided from AWS Elemental MediaLive.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_channel#input_switch_configuration Mediapackagev2Channel#input_switch_configuration}

---

##### `inputType`<sup>Optional</sup> <a name="inputType" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.Initializer.parameter.inputType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_channel#input_type Mediapackagev2Channel#input_type}.

---

##### `outputHeaderConfiguration`<sup>Optional</sup> <a name="outputHeaderConfiguration" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.Initializer.parameter.outputHeaderConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfiguration">Mediapackagev2ChannelOutputHeaderConfiguration</a>

<p>The settings for what common media server data (CMSD) headers AWS Elemental MediaPackage includes in responses to the CDN.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_channel#output_header_configuration Mediapackagev2Channel#output_header_configuration}

---

##### `outputLockingMode`<sup>Optional</sup> <a name="outputLockingMode" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.Initializer.parameter.outputLockingMode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_channel#output_locking_mode Mediapackagev2Channel#output_locking_mode}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTags">Mediapackagev2ChannelTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_channel#tags Mediapackagev2Channel#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.putInputSwitchConfiguration">putInputSwitchConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.putOutputHeaderConfiguration">putOutputHeaderConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.resetInputSwitchConfiguration">resetInputSwitchConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.resetInputType">resetInputType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.resetOutputHeaderConfiguration">resetOutputHeaderConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.resetOutputLockingMode">resetOutputLockingMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putInputSwitchConfiguration` <a name="putInputSwitchConfiguration" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.putInputSwitchConfiguration"></a>

```java
public void putInputSwitchConfiguration(Mediapackagev2ChannelInputSwitchConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.putInputSwitchConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfiguration">Mediapackagev2ChannelInputSwitchConfiguration</a>

---

##### `putOutputHeaderConfiguration` <a name="putOutputHeaderConfiguration" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.putOutputHeaderConfiguration"></a>

```java
public void putOutputHeaderConfiguration(Mediapackagev2ChannelOutputHeaderConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.putOutputHeaderConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfiguration">Mediapackagev2ChannelOutputHeaderConfiguration</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<Mediapackagev2ChannelTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTags">Mediapackagev2ChannelTags</a>>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetInputSwitchConfiguration` <a name="resetInputSwitchConfiguration" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.resetInputSwitchConfiguration"></a>

```java
public void resetInputSwitchConfiguration()
```

##### `resetInputType` <a name="resetInputType" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.resetInputType"></a>

```java
public void resetInputType()
```

##### `resetOutputHeaderConfiguration` <a name="resetOutputHeaderConfiguration" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.resetOutputHeaderConfiguration"></a>

```java
public void resetOutputHeaderConfiguration()
```

##### `resetOutputLockingMode` <a name="resetOutputLockingMode" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.resetOutputLockingMode"></a>

```java
public void resetOutputLockingMode()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Mediapackagev2Channel resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.isConstruct"></a>

```java
import io.cdktn.providers.awscc.mediapackagev2_channel.Mediapackagev2Channel;

Mediapackagev2Channel.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.mediapackagev2_channel.Mediapackagev2Channel;

Mediapackagev2Channel.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.mediapackagev2_channel.Mediapackagev2Channel;

Mediapackagev2Channel.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.mediapackagev2_channel.Mediapackagev2Channel;

Mediapackagev2Channel.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Mediapackagev2Channel.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a Mediapackagev2Channel resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Mediapackagev2Channel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Mediapackagev2Channel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_channel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the Mediapackagev2Channel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.ingestEndpoints">ingestEndpoints</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsList">Mediapackagev2ChannelIngestEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.ingestEndpointUrls">ingestEndpointUrls</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.inputSwitchConfiguration">inputSwitchConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference">Mediapackagev2ChannelInputSwitchConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.modifiedAt">modifiedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.outputHeaderConfiguration">outputHeaderConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference">Mediapackagev2ChannelOutputHeaderConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsList">Mediapackagev2ChannelTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.channelGroupNameInput">channelGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.channelNameInput">channelNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.inputSwitchConfigurationInput">inputSwitchConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfiguration">Mediapackagev2ChannelInputSwitchConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.inputTypeInput">inputTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.outputHeaderConfigurationInput">outputHeaderConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfiguration">Mediapackagev2ChannelOutputHeaderConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.outputLockingModeInput">outputLockingModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTags">Mediapackagev2ChannelTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.channelGroupName">channelGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.channelName">channelName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.inputType">inputType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.outputLockingMode">outputLockingMode</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ingestEndpoints`<sup>Required</sup> <a name="ingestEndpoints" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.ingestEndpoints"></a>

```java
public Mediapackagev2ChannelIngestEndpointsList getIngestEndpoints();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsList">Mediapackagev2ChannelIngestEndpointsList</a>

---

##### `ingestEndpointUrls`<sup>Required</sup> <a name="ingestEndpointUrls" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.ingestEndpointUrls"></a>

```java
public java.util.List<java.lang.String> getIngestEndpointUrls();
```

- *Type:* java.util.List<java.lang.String>

---

##### `inputSwitchConfiguration`<sup>Required</sup> <a name="inputSwitchConfiguration" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.inputSwitchConfiguration"></a>

```java
public Mediapackagev2ChannelInputSwitchConfigurationOutputReference getInputSwitchConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference">Mediapackagev2ChannelInputSwitchConfigurationOutputReference</a>

---

##### `modifiedAt`<sup>Required</sup> <a name="modifiedAt" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.modifiedAt"></a>

```java
public java.lang.String getModifiedAt();
```

- *Type:* java.lang.String

---

##### `outputHeaderConfiguration`<sup>Required</sup> <a name="outputHeaderConfiguration" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.outputHeaderConfiguration"></a>

```java
public Mediapackagev2ChannelOutputHeaderConfigurationOutputReference getOutputHeaderConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference">Mediapackagev2ChannelOutputHeaderConfigurationOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.tags"></a>

```java
public Mediapackagev2ChannelTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsList">Mediapackagev2ChannelTagsList</a>

---

##### `channelGroupNameInput`<sup>Optional</sup> <a name="channelGroupNameInput" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.channelGroupNameInput"></a>

```java
public java.lang.String getChannelGroupNameInput();
```

- *Type:* java.lang.String

---

##### `channelNameInput`<sup>Optional</sup> <a name="channelNameInput" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.channelNameInput"></a>

```java
public java.lang.String getChannelNameInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `inputSwitchConfigurationInput`<sup>Optional</sup> <a name="inputSwitchConfigurationInput" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.inputSwitchConfigurationInput"></a>

```java
public IResolvable|Mediapackagev2ChannelInputSwitchConfiguration getInputSwitchConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfiguration">Mediapackagev2ChannelInputSwitchConfiguration</a>

---

##### `inputTypeInput`<sup>Optional</sup> <a name="inputTypeInput" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.inputTypeInput"></a>

```java
public java.lang.String getInputTypeInput();
```

- *Type:* java.lang.String

---

##### `outputHeaderConfigurationInput`<sup>Optional</sup> <a name="outputHeaderConfigurationInput" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.outputHeaderConfigurationInput"></a>

```java
public IResolvable|Mediapackagev2ChannelOutputHeaderConfiguration getOutputHeaderConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfiguration">Mediapackagev2ChannelOutputHeaderConfiguration</a>

---

##### `outputLockingModeInput`<sup>Optional</sup> <a name="outputLockingModeInput" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.outputLockingModeInput"></a>

```java
public java.lang.String getOutputLockingModeInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.tagsInput"></a>

```java
public IResolvable|java.util.List<Mediapackagev2ChannelTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTags">Mediapackagev2ChannelTags</a>>

---

##### `channelGroupName`<sup>Required</sup> <a name="channelGroupName" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.channelGroupName"></a>

```java
public java.lang.String getChannelGroupName();
```

- *Type:* java.lang.String

---

##### `channelName`<sup>Required</sup> <a name="channelName" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.channelName"></a>

```java
public java.lang.String getChannelName();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `inputType`<sup>Required</sup> <a name="inputType" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.inputType"></a>

```java
public java.lang.String getInputType();
```

- *Type:* java.lang.String

---

##### `outputLockingMode`<sup>Required</sup> <a name="outputLockingMode" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.outputLockingMode"></a>

```java
public java.lang.String getOutputLockingMode();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2Channel.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Mediapackagev2ChannelConfig <a name="Mediapackagev2ChannelConfig" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediapackagev2_channel.Mediapackagev2ChannelConfig;

Mediapackagev2ChannelConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .channelGroupName(java.lang.String)
    .channelName(java.lang.String)
//  .description(java.lang.String)
//  .inputSwitchConfiguration(Mediapackagev2ChannelInputSwitchConfiguration)
//  .inputType(java.lang.String)
//  .outputHeaderConfiguration(Mediapackagev2ChannelOutputHeaderConfiguration)
//  .outputLockingMode(java.lang.String)
//  .tags(IResolvable|java.util.List<Mediapackagev2ChannelTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig.property.channelGroupName">channelGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_channel#channel_group_name Mediapackagev2Channel#channel_group_name}. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig.property.channelName">channelName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_channel#channel_name Mediapackagev2Channel#channel_name}. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig.property.description">description</a></code> | <code>java.lang.String</code> | <p>Enter any descriptive text that helps you to identify the channel.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig.property.inputSwitchConfiguration">inputSwitchConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfiguration">Mediapackagev2ChannelInputSwitchConfiguration</a></code> | <p>The configuration for input switching based on the media quality confidence score (MQCS) as provided from AWS Elemental MediaLive.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig.property.inputType">inputType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_channel#input_type Mediapackagev2Channel#input_type}. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig.property.outputHeaderConfiguration">outputHeaderConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfiguration">Mediapackagev2ChannelOutputHeaderConfiguration</a></code> | <p>The settings for what common media server data (CMSD) headers AWS Elemental MediaPackage includes in responses to the CDN.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig.property.outputLockingMode">outputLockingMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_channel#output_locking_mode Mediapackagev2Channel#output_locking_mode}. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTags">Mediapackagev2ChannelTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_channel#tags Mediapackagev2Channel#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `channelGroupName`<sup>Required</sup> <a name="channelGroupName" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig.property.channelGroupName"></a>

```java
public java.lang.String getChannelGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_channel#channel_group_name Mediapackagev2Channel#channel_group_name}.

---

##### `channelName`<sup>Required</sup> <a name="channelName" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig.property.channelName"></a>

```java
public java.lang.String getChannelName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_channel#channel_name Mediapackagev2Channel#channel_name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

<p>Enter any descriptive text that helps you to identify the channel.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_channel#description Mediapackagev2Channel#description}

---

##### `inputSwitchConfiguration`<sup>Optional</sup> <a name="inputSwitchConfiguration" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig.property.inputSwitchConfiguration"></a>

```java
public Mediapackagev2ChannelInputSwitchConfiguration getInputSwitchConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfiguration">Mediapackagev2ChannelInputSwitchConfiguration</a>

<p>The configuration for input switching based on the media quality confidence score (MQCS) as provided from AWS Elemental MediaLive.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_channel#input_switch_configuration Mediapackagev2Channel#input_switch_configuration}

---

##### `inputType`<sup>Optional</sup> <a name="inputType" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig.property.inputType"></a>

```java
public java.lang.String getInputType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_channel#input_type Mediapackagev2Channel#input_type}.

---

##### `outputHeaderConfiguration`<sup>Optional</sup> <a name="outputHeaderConfiguration" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig.property.outputHeaderConfiguration"></a>

```java
public Mediapackagev2ChannelOutputHeaderConfiguration getOutputHeaderConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfiguration">Mediapackagev2ChannelOutputHeaderConfiguration</a>

<p>The settings for what common media server data (CMSD) headers AWS Elemental MediaPackage includes in responses to the CDN.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_channel#output_header_configuration Mediapackagev2Channel#output_header_configuration}

---

##### `outputLockingMode`<sup>Optional</sup> <a name="outputLockingMode" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig.property.outputLockingMode"></a>

```java
public java.lang.String getOutputLockingMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_channel#output_locking_mode Mediapackagev2Channel#output_locking_mode}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelConfig.property.tags"></a>

```java
public IResolvable|java.util.List<Mediapackagev2ChannelTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTags">Mediapackagev2ChannelTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_channel#tags Mediapackagev2Channel#tags}.

---

### Mediapackagev2ChannelIngestEndpoints <a name="Mediapackagev2ChannelIngestEndpoints" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpoints.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediapackagev2_channel.Mediapackagev2ChannelIngestEndpoints;

Mediapackagev2ChannelIngestEndpoints.builder()
    .build();
```


### Mediapackagev2ChannelInputSwitchConfiguration <a name="Mediapackagev2ChannelInputSwitchConfiguration" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediapackagev2_channel.Mediapackagev2ChannelInputSwitchConfiguration;

Mediapackagev2ChannelInputSwitchConfiguration.builder()
//  .mqcsInputSwitching(java.lang.Boolean|IResolvable)
//  .preferredInput(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfiguration.property.mqcsInputSwitching">mqcsInputSwitching</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | <p>When true, AWS Elemental MediaPackage performs input switching based on the MQCS. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfiguration.property.preferredInput">preferredInput</a></code> | <code>java.lang.Number</code> | <p>For CMAF inputs, indicates which input MediaPackage should prefer when both inputs have equal MQCS scores. |

---

##### `mqcsInputSwitching`<sup>Optional</sup> <a name="mqcsInputSwitching" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfiguration.property.mqcsInputSwitching"></a>

```java
public java.lang.Boolean|IResolvable getMqcsInputSwitching();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

<p>When true, AWS Elemental MediaPackage performs input switching based on the MQCS.

Default is false. This setting is valid only when <code>InputType</code> is <code>CMAF</code>.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_channel#mqcs_input_switching Mediapackagev2Channel#mqcs_input_switching}

---

##### `preferredInput`<sup>Optional</sup> <a name="preferredInput" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfiguration.property.preferredInput"></a>

```java
public java.lang.Number getPreferredInput();
```

- *Type:* java.lang.Number

<p>For CMAF inputs, indicates which input MediaPackage should prefer when both inputs have equal MQCS scores.

Select <code>1</code> to prefer the first ingest endpoint, or <code>2</code> to prefer the second ingest endpoint. If you don't specify a preferred input, MediaPackage uses its default switching behavior when MQCS scores are equal.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_channel#preferred_input Mediapackagev2Channel#preferred_input}

---

### Mediapackagev2ChannelOutputHeaderConfiguration <a name="Mediapackagev2ChannelOutputHeaderConfiguration" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediapackagev2_channel.Mediapackagev2ChannelOutputHeaderConfiguration;

Mediapackagev2ChannelOutputHeaderConfiguration.builder()
//  .publishMqcs(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfiguration.property.publishMqcs">publishMqcs</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | <p>When true, AWS Elemental MediaPackage includes the MQCS in responses to the CDN. |

---

##### `publishMqcs`<sup>Optional</sup> <a name="publishMqcs" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfiguration.property.publishMqcs"></a>

```java
public java.lang.Boolean|IResolvable getPublishMqcs();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

<p>When true, AWS Elemental MediaPackage includes the MQCS in responses to the CDN.

This setting is valid only when <code>InputType</code> is <code>CMAF</code>.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_channel#publish_mqcs Mediapackagev2Channel#publish_mqcs}

---

### Mediapackagev2ChannelTags <a name="Mediapackagev2ChannelTags" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediapackagev2_channel.Mediapackagev2ChannelTags;

Mediapackagev2ChannelTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_channel#key Mediapackagev2Channel#key}. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_channel#value Mediapackagev2Channel#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_channel#key Mediapackagev2Channel#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_channel#value Mediapackagev2Channel#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### Mediapackagev2ChannelIngestEndpointsList <a name="Mediapackagev2ChannelIngestEndpointsList" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediapackagev2_channel.Mediapackagev2ChannelIngestEndpointsList;

new Mediapackagev2ChannelIngestEndpointsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsList.get"></a>

```java
public Mediapackagev2ChannelIngestEndpointsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### Mediapackagev2ChannelIngestEndpointsOutputReference <a name="Mediapackagev2ChannelIngestEndpointsOutputReference" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediapackagev2_channel.Mediapackagev2ChannelIngestEndpointsOutputReference;

new Mediapackagev2ChannelIngestEndpointsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpoints">Mediapackagev2ChannelIngestEndpoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpointsOutputReference.property.internalValue"></a>

```java
public Mediapackagev2ChannelIngestEndpoints getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelIngestEndpoints">Mediapackagev2ChannelIngestEndpoints</a>

---


### Mediapackagev2ChannelInputSwitchConfigurationOutputReference <a name="Mediapackagev2ChannelInputSwitchConfigurationOutputReference" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediapackagev2_channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference;

new Mediapackagev2ChannelInputSwitchConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.resetMqcsInputSwitching">resetMqcsInputSwitching</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.resetPreferredInput">resetPreferredInput</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMqcsInputSwitching` <a name="resetMqcsInputSwitching" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.resetMqcsInputSwitching"></a>

```java
public void resetMqcsInputSwitching()
```

##### `resetPreferredInput` <a name="resetPreferredInput" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.resetPreferredInput"></a>

```java
public void resetPreferredInput()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.property.mqcsInputSwitchingInput">mqcsInputSwitchingInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.property.preferredInputInput">preferredInputInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.property.mqcsInputSwitching">mqcsInputSwitching</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.property.preferredInput">preferredInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfiguration">Mediapackagev2ChannelInputSwitchConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `mqcsInputSwitchingInput`<sup>Optional</sup> <a name="mqcsInputSwitchingInput" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.property.mqcsInputSwitchingInput"></a>

```java
public java.lang.Boolean|IResolvable getMqcsInputSwitchingInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `preferredInputInput`<sup>Optional</sup> <a name="preferredInputInput" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.property.preferredInputInput"></a>

```java
public java.lang.Number getPreferredInputInput();
```

- *Type:* java.lang.Number

---

##### `mqcsInputSwitching`<sup>Required</sup> <a name="mqcsInputSwitching" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.property.mqcsInputSwitching"></a>

```java
public java.lang.Boolean|IResolvable getMqcsInputSwitching();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `preferredInput`<sup>Required</sup> <a name="preferredInput" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.property.preferredInput"></a>

```java
public java.lang.Number getPreferredInput();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|Mediapackagev2ChannelInputSwitchConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelInputSwitchConfiguration">Mediapackagev2ChannelInputSwitchConfiguration</a>

---


### Mediapackagev2ChannelOutputHeaderConfigurationOutputReference <a name="Mediapackagev2ChannelOutputHeaderConfigurationOutputReference" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediapackagev2_channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference;

new Mediapackagev2ChannelOutputHeaderConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.resetPublishMqcs">resetPublishMqcs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPublishMqcs` <a name="resetPublishMqcs" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.resetPublishMqcs"></a>

```java
public void resetPublishMqcs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.property.publishMqcsInput">publishMqcsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.property.publishMqcs">publishMqcs</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfiguration">Mediapackagev2ChannelOutputHeaderConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `publishMqcsInput`<sup>Optional</sup> <a name="publishMqcsInput" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.property.publishMqcsInput"></a>

```java
public java.lang.Boolean|IResolvable getPublishMqcsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `publishMqcs`<sup>Required</sup> <a name="publishMqcs" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.property.publishMqcs"></a>

```java
public java.lang.Boolean|IResolvable getPublishMqcs();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|Mediapackagev2ChannelOutputHeaderConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelOutputHeaderConfiguration">Mediapackagev2ChannelOutputHeaderConfiguration</a>

---


### Mediapackagev2ChannelTagsList <a name="Mediapackagev2ChannelTagsList" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediapackagev2_channel.Mediapackagev2ChannelTagsList;

new Mediapackagev2ChannelTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsList.get"></a>

```java
public Mediapackagev2ChannelTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTags">Mediapackagev2ChannelTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Mediapackagev2ChannelTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTags">Mediapackagev2ChannelTags</a>>

---


### Mediapackagev2ChannelTagsOutputReference <a name="Mediapackagev2ChannelTagsOutputReference" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediapackagev2_channel.Mediapackagev2ChannelTagsOutputReference;

new Mediapackagev2ChannelTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTags">Mediapackagev2ChannelTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|Mediapackagev2ChannelTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediapackagev2Channel.Mediapackagev2ChannelTags">Mediapackagev2ChannelTags</a>

---



