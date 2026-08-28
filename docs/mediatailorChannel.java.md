# `mediatailorChannel` Submodule <a name="`mediatailorChannel` Submodule" id="@cdktn/provider-awscc.mediatailorChannel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MediatailorChannel <a name="MediatailorChannel" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel awscc_mediatailor_channel}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_channel.MediatailorChannel;

MediatailorChannel.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .channelName(java.lang.String)
    .outputs(IResolvable|java.util.List<MediatailorChannelOutputs>)
    .playbackMode(java.lang.String)
//  .audiences(java.util.List<java.lang.String>)
//  .fillerSlate(MediatailorChannelFillerSlate)
//  .logConfiguration(MediatailorChannelLogConfiguration)
//  .tags(IResolvable|java.util.List<MediatailorChannelTags>)
//  .tier(java.lang.String)
//  .timeShiftConfiguration(MediatailorChannelTimeShiftConfiguration)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.Initializer.parameter.channelName">channelName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel#channel_name MediatailorChannel#channel_name}. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.Initializer.parameter.outputs">outputs</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputs">MediatailorChannelOutputs</a>></code> | <p>The channel's output properties.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.Initializer.parameter.playbackMode">playbackMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel#playback_mode MediatailorChannel#playback_mode}. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.Initializer.parameter.audiences">audiences</a></code> | <code>java.util.List<java.lang.String></code> | <p>The list of audiences defined in channel.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.Initializer.parameter.fillerSlate">fillerSlate</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlate">MediatailorChannelFillerSlate</a></code> | <p>Slate VOD source configuration.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.Initializer.parameter.logConfiguration">logConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfiguration">MediatailorChannelLogConfiguration</a></code> | <p>The log configuration for the channel.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTags">MediatailorChannelTags</a>></code> | The tags to assign to the channel. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.Initializer.parameter.tier">tier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel#tier MediatailorChannel#tier}. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.Initializer.parameter.timeShiftConfiguration">timeShiftConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfiguration">MediatailorChannelTimeShiftConfiguration</a></code> | <p>The configuration for time-shifted viewing.</p>. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `channelName`<sup>Required</sup> <a name="channelName" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.Initializer.parameter.channelName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel#channel_name MediatailorChannel#channel_name}.

---

##### `outputs`<sup>Required</sup> <a name="outputs" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.Initializer.parameter.outputs"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputs">MediatailorChannelOutputs</a>>

<p>The channel's output properties.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel#outputs MediatailorChannel#outputs}

---

##### `playbackMode`<sup>Required</sup> <a name="playbackMode" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.Initializer.parameter.playbackMode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel#playback_mode MediatailorChannel#playback_mode}.

---

##### `audiences`<sup>Optional</sup> <a name="audiences" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.Initializer.parameter.audiences"></a>

- *Type:* java.util.List<java.lang.String>

<p>The list of audiences defined in channel.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel#audiences MediatailorChannel#audiences}

---

##### `fillerSlate`<sup>Optional</sup> <a name="fillerSlate" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.Initializer.parameter.fillerSlate"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlate">MediatailorChannelFillerSlate</a>

<p>Slate VOD source configuration.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel#filler_slate MediatailorChannel#filler_slate}

---

##### `logConfiguration`<sup>Optional</sup> <a name="logConfiguration" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.Initializer.parameter.logConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfiguration">MediatailorChannelLogConfiguration</a>

<p>The log configuration for the channel.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel#log_configuration MediatailorChannel#log_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTags">MediatailorChannelTags</a>>

The tags to assign to the channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel#tags MediatailorChannel#tags}

---

##### `tier`<sup>Optional</sup> <a name="tier" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.Initializer.parameter.tier"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel#tier MediatailorChannel#tier}.

---

##### `timeShiftConfiguration`<sup>Optional</sup> <a name="timeShiftConfiguration" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.Initializer.parameter.timeShiftConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfiguration">MediatailorChannelTimeShiftConfiguration</a>

<p>The configuration for time-shifted viewing.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel#time_shift_configuration MediatailorChannel#time_shift_configuration}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.putFillerSlate">putFillerSlate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.putLogConfiguration">putLogConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.putOutputs">putOutputs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.putTimeShiftConfiguration">putTimeShiftConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.resetAudiences">resetAudiences</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.resetFillerSlate">resetFillerSlate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.resetLogConfiguration">resetLogConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.resetTier">resetTier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.resetTimeShiftConfiguration">resetTimeShiftConfiguration</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putFillerSlate` <a name="putFillerSlate" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.putFillerSlate"></a>

```java
public void putFillerSlate(MediatailorChannelFillerSlate value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.putFillerSlate.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlate">MediatailorChannelFillerSlate</a>

---

##### `putLogConfiguration` <a name="putLogConfiguration" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.putLogConfiguration"></a>

```java
public void putLogConfiguration(MediatailorChannelLogConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.putLogConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfiguration">MediatailorChannelLogConfiguration</a>

---

##### `putOutputs` <a name="putOutputs" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.putOutputs"></a>

```java
public void putOutputs(IResolvable|java.util.List<MediatailorChannelOutputs> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.putOutputs.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputs">MediatailorChannelOutputs</a>>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<MediatailorChannelTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTags">MediatailorChannelTags</a>>

---

##### `putTimeShiftConfiguration` <a name="putTimeShiftConfiguration" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.putTimeShiftConfiguration"></a>

```java
public void putTimeShiftConfiguration(MediatailorChannelTimeShiftConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.putTimeShiftConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfiguration">MediatailorChannelTimeShiftConfiguration</a>

---

##### `resetAudiences` <a name="resetAudiences" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.resetAudiences"></a>

```java
public void resetAudiences()
```

##### `resetFillerSlate` <a name="resetFillerSlate" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.resetFillerSlate"></a>

```java
public void resetFillerSlate()
```

##### `resetLogConfiguration` <a name="resetLogConfiguration" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.resetLogConfiguration"></a>

```java
public void resetLogConfiguration()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.resetTags"></a>

```java
public void resetTags()
```

##### `resetTier` <a name="resetTier" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.resetTier"></a>

```java
public void resetTier()
```

##### `resetTimeShiftConfiguration` <a name="resetTimeShiftConfiguration" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.resetTimeShiftConfiguration"></a>

```java
public void resetTimeShiftConfiguration()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a MediatailorChannel resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.isConstruct"></a>

```java
import io.cdktn.providers.awscc.mediatailor_channel.MediatailorChannel;

MediatailorChannel.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.mediatailor_channel.MediatailorChannel;

MediatailorChannel.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.mediatailor_channel.MediatailorChannel;

MediatailorChannel.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.mediatailor_channel.MediatailorChannel;

MediatailorChannel.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),MediatailorChannel.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a MediatailorChannel resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the MediatailorChannel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing MediatailorChannel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the MediatailorChannel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.fillerSlate">fillerSlate</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference">MediatailorChannelFillerSlateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.logConfiguration">logConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference">MediatailorChannelLogConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.outputs">outputs</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsList">MediatailorChannelOutputsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsList">MediatailorChannelTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.timeShiftConfiguration">timeShiftConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference">MediatailorChannelTimeShiftConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.audiencesInput">audiencesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.channelNameInput">channelNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.fillerSlateInput">fillerSlateInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlate">MediatailorChannelFillerSlate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.logConfigurationInput">logConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfiguration">MediatailorChannelLogConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.outputsInput">outputsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputs">MediatailorChannelOutputs</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.playbackModeInput">playbackModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTags">MediatailorChannelTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.tierInput">tierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.timeShiftConfigurationInput">timeShiftConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfiguration">MediatailorChannelTimeShiftConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.audiences">audiences</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.channelName">channelName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.playbackMode">playbackMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.tier">tier</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `fillerSlate`<sup>Required</sup> <a name="fillerSlate" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.fillerSlate"></a>

```java
public MediatailorChannelFillerSlateOutputReference getFillerSlate();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference">MediatailorChannelFillerSlateOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `logConfiguration`<sup>Required</sup> <a name="logConfiguration" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.logConfiguration"></a>

```java
public MediatailorChannelLogConfigurationOutputReference getLogConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference">MediatailorChannelLogConfigurationOutputReference</a>

---

##### `outputs`<sup>Required</sup> <a name="outputs" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.outputs"></a>

```java
public MediatailorChannelOutputsList getOutputs();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsList">MediatailorChannelOutputsList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.tags"></a>

```java
public MediatailorChannelTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsList">MediatailorChannelTagsList</a>

---

##### `timeShiftConfiguration`<sup>Required</sup> <a name="timeShiftConfiguration" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.timeShiftConfiguration"></a>

```java
public MediatailorChannelTimeShiftConfigurationOutputReference getTimeShiftConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference">MediatailorChannelTimeShiftConfigurationOutputReference</a>

---

##### `audiencesInput`<sup>Optional</sup> <a name="audiencesInput" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.audiencesInput"></a>

```java
public java.util.List<java.lang.String> getAudiencesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `channelNameInput`<sup>Optional</sup> <a name="channelNameInput" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.channelNameInput"></a>

```java
public java.lang.String getChannelNameInput();
```

- *Type:* java.lang.String

---

##### `fillerSlateInput`<sup>Optional</sup> <a name="fillerSlateInput" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.fillerSlateInput"></a>

```java
public IResolvable|MediatailorChannelFillerSlate getFillerSlateInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlate">MediatailorChannelFillerSlate</a>

---

##### `logConfigurationInput`<sup>Optional</sup> <a name="logConfigurationInput" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.logConfigurationInput"></a>

```java
public IResolvable|MediatailorChannelLogConfiguration getLogConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfiguration">MediatailorChannelLogConfiguration</a>

---

##### `outputsInput`<sup>Optional</sup> <a name="outputsInput" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.outputsInput"></a>

```java
public IResolvable|java.util.List<MediatailorChannelOutputs> getOutputsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputs">MediatailorChannelOutputs</a>>

---

##### `playbackModeInput`<sup>Optional</sup> <a name="playbackModeInput" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.playbackModeInput"></a>

```java
public java.lang.String getPlaybackModeInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.tagsInput"></a>

```java
public IResolvable|java.util.List<MediatailorChannelTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTags">MediatailorChannelTags</a>>

---

##### `tierInput`<sup>Optional</sup> <a name="tierInput" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.tierInput"></a>

```java
public java.lang.String getTierInput();
```

- *Type:* java.lang.String

---

##### `timeShiftConfigurationInput`<sup>Optional</sup> <a name="timeShiftConfigurationInput" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.timeShiftConfigurationInput"></a>

```java
public IResolvable|MediatailorChannelTimeShiftConfiguration getTimeShiftConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfiguration">MediatailorChannelTimeShiftConfiguration</a>

---

##### `audiences`<sup>Required</sup> <a name="audiences" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.audiences"></a>

```java
public java.util.List<java.lang.String> getAudiences();
```

- *Type:* java.util.List<java.lang.String>

---

##### `channelName`<sup>Required</sup> <a name="channelName" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.channelName"></a>

```java
public java.lang.String getChannelName();
```

- *Type:* java.lang.String

---

##### `playbackMode`<sup>Required</sup> <a name="playbackMode" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.playbackMode"></a>

```java
public java.lang.String getPlaybackMode();
```

- *Type:* java.lang.String

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.tier"></a>

```java
public java.lang.String getTier();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannel.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MediatailorChannelConfig <a name="MediatailorChannelConfig" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_channel.MediatailorChannelConfig;

MediatailorChannelConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .channelName(java.lang.String)
    .outputs(IResolvable|java.util.List<MediatailorChannelOutputs>)
    .playbackMode(java.lang.String)
//  .audiences(java.util.List<java.lang.String>)
//  .fillerSlate(MediatailorChannelFillerSlate)
//  .logConfiguration(MediatailorChannelLogConfiguration)
//  .tags(IResolvable|java.util.List<MediatailorChannelTags>)
//  .tier(java.lang.String)
//  .timeShiftConfiguration(MediatailorChannelTimeShiftConfiguration)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.channelName">channelName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel#channel_name MediatailorChannel#channel_name}. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.outputs">outputs</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputs">MediatailorChannelOutputs</a>></code> | <p>The channel's output properties.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.playbackMode">playbackMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel#playback_mode MediatailorChannel#playback_mode}. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.audiences">audiences</a></code> | <code>java.util.List<java.lang.String></code> | <p>The list of audiences defined in channel.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.fillerSlate">fillerSlate</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlate">MediatailorChannelFillerSlate</a></code> | <p>Slate VOD source configuration.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.logConfiguration">logConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfiguration">MediatailorChannelLogConfiguration</a></code> | <p>The log configuration for the channel.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTags">MediatailorChannelTags</a>></code> | The tags to assign to the channel. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.tier">tier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel#tier MediatailorChannel#tier}. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.timeShiftConfiguration">timeShiftConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfiguration">MediatailorChannelTimeShiftConfiguration</a></code> | <p>The configuration for time-shifted viewing.</p>. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `channelName`<sup>Required</sup> <a name="channelName" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.channelName"></a>

```java
public java.lang.String getChannelName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel#channel_name MediatailorChannel#channel_name}.

---

##### `outputs`<sup>Required</sup> <a name="outputs" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.outputs"></a>

```java
public IResolvable|java.util.List<MediatailorChannelOutputs> getOutputs();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputs">MediatailorChannelOutputs</a>>

<p>The channel's output properties.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel#outputs MediatailorChannel#outputs}

---

##### `playbackMode`<sup>Required</sup> <a name="playbackMode" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.playbackMode"></a>

```java
public java.lang.String getPlaybackMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel#playback_mode MediatailorChannel#playback_mode}.

---

##### `audiences`<sup>Optional</sup> <a name="audiences" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.audiences"></a>

```java
public java.util.List<java.lang.String> getAudiences();
```

- *Type:* java.util.List<java.lang.String>

<p>The list of audiences defined in channel.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel#audiences MediatailorChannel#audiences}

---

##### `fillerSlate`<sup>Optional</sup> <a name="fillerSlate" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.fillerSlate"></a>

```java
public MediatailorChannelFillerSlate getFillerSlate();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlate">MediatailorChannelFillerSlate</a>

<p>Slate VOD source configuration.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel#filler_slate MediatailorChannel#filler_slate}

---

##### `logConfiguration`<sup>Optional</sup> <a name="logConfiguration" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.logConfiguration"></a>

```java
public MediatailorChannelLogConfiguration getLogConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfiguration">MediatailorChannelLogConfiguration</a>

<p>The log configuration for the channel.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel#log_configuration MediatailorChannel#log_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.tags"></a>

```java
public IResolvable|java.util.List<MediatailorChannelTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTags">MediatailorChannelTags</a>>

The tags to assign to the channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel#tags MediatailorChannel#tags}

---

##### `tier`<sup>Optional</sup> <a name="tier" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.tier"></a>

```java
public java.lang.String getTier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel#tier MediatailorChannel#tier}.

---

##### `timeShiftConfiguration`<sup>Optional</sup> <a name="timeShiftConfiguration" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelConfig.property.timeShiftConfiguration"></a>

```java
public MediatailorChannelTimeShiftConfiguration getTimeShiftConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfiguration">MediatailorChannelTimeShiftConfiguration</a>

<p>The configuration for time-shifted viewing.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel#time_shift_configuration MediatailorChannel#time_shift_configuration}

---

### MediatailorChannelFillerSlate <a name="MediatailorChannelFillerSlate" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlate.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_channel.MediatailorChannelFillerSlate;

MediatailorChannelFillerSlate.builder()
//  .sourceLocationName(java.lang.String)
//  .vodSourceName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlate.property.sourceLocationName">sourceLocationName</a></code> | <code>java.lang.String</code> | <p>The name of the source location where the slate VOD source is stored.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlate.property.vodSourceName">vodSourceName</a></code> | <code>java.lang.String</code> | <p>The slate VOD source name. |

---

##### `sourceLocationName`<sup>Optional</sup> <a name="sourceLocationName" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlate.property.sourceLocationName"></a>

```java
public java.lang.String getSourceLocationName();
```

- *Type:* java.lang.String

<p>The name of the source location where the slate VOD source is stored.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel#source_location_name MediatailorChannel#source_location_name}

---

##### `vodSourceName`<sup>Optional</sup> <a name="vodSourceName" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlate.property.vodSourceName"></a>

```java
public java.lang.String getVodSourceName();
```

- *Type:* java.lang.String

<p>The slate VOD source name.

The VOD source must already exist in a source location before it can be used for slate.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel#vod_source_name MediatailorChannel#vod_source_name}

---

### MediatailorChannelLogConfiguration <a name="MediatailorChannelLogConfiguration" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_channel.MediatailorChannelLogConfiguration;

MediatailorChannelLogConfiguration.builder()
//  .logTypes(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfiguration.property.logTypes">logTypes</a></code> | <code>java.util.List<java.lang.String></code> | <p>The log types.</p>. |

---

##### `logTypes`<sup>Optional</sup> <a name="logTypes" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfiguration.property.logTypes"></a>

```java
public java.util.List<java.lang.String> getLogTypes();
```

- *Type:* java.util.List<java.lang.String>

<p>The log types.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel#log_types MediatailorChannel#log_types}

---

### MediatailorChannelOutputs <a name="MediatailorChannelOutputs" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputs.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_channel.MediatailorChannelOutputs;

MediatailorChannelOutputs.builder()
    .manifestName(java.lang.String)
    .sourceGroup(java.lang.String)
//  .dashPlaylistSettings(MediatailorChannelOutputsDashPlaylistSettings)
//  .hlsPlaylistSettings(MediatailorChannelOutputsHlsPlaylistSettings)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputs.property.manifestName">manifestName</a></code> | <code>java.lang.String</code> | <p>The name of the manifest for the channel. The name appears in the <code>PlaybackUrl</code>.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputs.property.sourceGroup">sourceGroup</a></code> | <code>java.lang.String</code> | <p>A string used to match which <code>HttpPackageConfiguration</code> is used for each <code>VodSource</code>.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputs.property.dashPlaylistSettings">dashPlaylistSettings</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettings">MediatailorChannelOutputsDashPlaylistSettings</a></code> | <p>Dash manifest configuration parameters.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputs.property.hlsPlaylistSettings">hlsPlaylistSettings</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettings">MediatailorChannelOutputsHlsPlaylistSettings</a></code> | <p>HLS playlist configuration parameters.</p>. |

---

##### `manifestName`<sup>Required</sup> <a name="manifestName" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputs.property.manifestName"></a>

```java
public java.lang.String getManifestName();
```

- *Type:* java.lang.String

<p>The name of the manifest for the channel. The name appears in the <code>PlaybackUrl</code>.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel#manifest_name MediatailorChannel#manifest_name}

---

##### `sourceGroup`<sup>Required</sup> <a name="sourceGroup" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputs.property.sourceGroup"></a>

```java
public java.lang.String getSourceGroup();
```

- *Type:* java.lang.String

<p>A string used to match which <code>HttpPackageConfiguration</code> is used for each <code>VodSource</code>.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel#source_group MediatailorChannel#source_group}

---

##### `dashPlaylistSettings`<sup>Optional</sup> <a name="dashPlaylistSettings" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputs.property.dashPlaylistSettings"></a>

```java
public MediatailorChannelOutputsDashPlaylistSettings getDashPlaylistSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettings">MediatailorChannelOutputsDashPlaylistSettings</a>

<p>Dash manifest configuration parameters.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel#dash_playlist_settings MediatailorChannel#dash_playlist_settings}

---

##### `hlsPlaylistSettings`<sup>Optional</sup> <a name="hlsPlaylistSettings" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputs.property.hlsPlaylistSettings"></a>

```java
public MediatailorChannelOutputsHlsPlaylistSettings getHlsPlaylistSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettings">MediatailorChannelOutputsHlsPlaylistSettings</a>

<p>HLS playlist configuration parameters.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel#hls_playlist_settings MediatailorChannel#hls_playlist_settings}

---

### MediatailorChannelOutputsDashPlaylistSettings <a name="MediatailorChannelOutputsDashPlaylistSettings" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_channel.MediatailorChannelOutputsDashPlaylistSettings;

MediatailorChannelOutputsDashPlaylistSettings.builder()
//  .manifestWindowSeconds(java.lang.Number)
//  .minBufferTimeSeconds(java.lang.Number)
//  .minUpdatePeriodSeconds(java.lang.Number)
//  .suggestedPresentationDelaySeconds(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettings.property.manifestWindowSeconds">manifestWindowSeconds</a></code> | <code>java.lang.Number</code> | <p>The total duration (in seconds) of each manifest. Minimum value: <code>30</code> seconds. Maximum value: <code>3600</code> seconds.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettings.property.minBufferTimeSeconds">minBufferTimeSeconds</a></code> | <code>java.lang.Number</code> | <p>Minimum amount of content (measured in seconds) that a player must keep available in the buffer. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettings.property.minUpdatePeriodSeconds">minUpdatePeriodSeconds</a></code> | <code>java.lang.Number</code> | <p>Minimum amount of time (in seconds) that the player should wait before requesting updates to the manifest. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettings.property.suggestedPresentationDelaySeconds">suggestedPresentationDelaySeconds</a></code> | <code>java.lang.Number</code> | <p>Amount of time (in seconds) that the player should be from the live point at the end of the manifest. |

---

##### `manifestWindowSeconds`<sup>Optional</sup> <a name="manifestWindowSeconds" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettings.property.manifestWindowSeconds"></a>

```java
public java.lang.Number getManifestWindowSeconds();
```

- *Type:* java.lang.Number

<p>The total duration (in seconds) of each manifest. Minimum value: <code>30</code> seconds. Maximum value: <code>3600</code> seconds.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel#manifest_window_seconds MediatailorChannel#manifest_window_seconds}

---

##### `minBufferTimeSeconds`<sup>Optional</sup> <a name="minBufferTimeSeconds" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettings.property.minBufferTimeSeconds"></a>

```java
public java.lang.Number getMinBufferTimeSeconds();
```

- *Type:* java.lang.Number

<p>Minimum amount of content (measured in seconds) that a player must keep available in the buffer.

Minimum value: <code>2</code> seconds. Maximum value: <code>60</code> seconds.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel#min_buffer_time_seconds MediatailorChannel#min_buffer_time_seconds}

---

##### `minUpdatePeriodSeconds`<sup>Optional</sup> <a name="minUpdatePeriodSeconds" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettings.property.minUpdatePeriodSeconds"></a>

```java
public java.lang.Number getMinUpdatePeriodSeconds();
```

- *Type:* java.lang.Number

<p>Minimum amount of time (in seconds) that the player should wait before requesting updates to the manifest.

Minimum value: <code>2</code> seconds. Maximum value: <code>60</code> seconds.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel#min_update_period_seconds MediatailorChannel#min_update_period_seconds}

---

##### `suggestedPresentationDelaySeconds`<sup>Optional</sup> <a name="suggestedPresentationDelaySeconds" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettings.property.suggestedPresentationDelaySeconds"></a>

```java
public java.lang.Number getSuggestedPresentationDelaySeconds();
```

- *Type:* java.lang.Number

<p>Amount of time (in seconds) that the player should be from the live point at the end of the manifest.

Minimum value: <code>2</code> seconds. Maximum value: <code>60</code> seconds.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel#suggested_presentation_delay_seconds MediatailorChannel#suggested_presentation_delay_seconds}

---

### MediatailorChannelOutputsHlsPlaylistSettings <a name="MediatailorChannelOutputsHlsPlaylistSettings" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_channel.MediatailorChannelOutputsHlsPlaylistSettings;

MediatailorChannelOutputsHlsPlaylistSettings.builder()
//  .adMarkupType(java.util.List<java.lang.String>)
//  .manifestWindowSeconds(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettings.property.adMarkupType">adMarkupType</a></code> | <code>java.util.List<java.lang.String></code> | <p>Determines the type of SCTE 35 tags to use in ad markup. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettings.property.manifestWindowSeconds">manifestWindowSeconds</a></code> | <code>java.lang.Number</code> | <p>The total duration (in seconds) of each manifest. Minimum value: <code>30</code> seconds. Maximum value: <code>3600</code> seconds.</p>. |

---

##### `adMarkupType`<sup>Optional</sup> <a name="adMarkupType" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettings.property.adMarkupType"></a>

```java
public java.util.List<java.lang.String> getAdMarkupType();
```

- *Type:* java.util.List<java.lang.String>

<p>Determines the type of SCTE 35 tags to use in ad markup.

Specify <code>DATERANGE</code> to use <code>DATERANGE</code> tags (for live or VOD content). Specify <code>SCTE35_ENHANCED</code> to use <code>EXT-X-CUE-OUT</code> and <code>EXT-X-CUE-IN</code> tags (for VOD content only).</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel#ad_markup_type MediatailorChannel#ad_markup_type}

---

##### `manifestWindowSeconds`<sup>Optional</sup> <a name="manifestWindowSeconds" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettings.property.manifestWindowSeconds"></a>

```java
public java.lang.Number getManifestWindowSeconds();
```

- *Type:* java.lang.Number

<p>The total duration (in seconds) of each manifest. Minimum value: <code>30</code> seconds. Maximum value: <code>3600</code> seconds.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel#manifest_window_seconds MediatailorChannel#manifest_window_seconds}

---

### MediatailorChannelTags <a name="MediatailorChannelTags" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_channel.MediatailorChannelTags;

MediatailorChannelTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel#key MediatailorChannel#key}. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel#value MediatailorChannel#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel#key MediatailorChannel#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel#value MediatailorChannel#value}.

---

### MediatailorChannelTimeShiftConfiguration <a name="MediatailorChannelTimeShiftConfiguration" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_channel.MediatailorChannelTimeShiftConfiguration;

MediatailorChannelTimeShiftConfiguration.builder()
//  .maxTimeDelaySeconds(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfiguration.property.maxTimeDelaySeconds">maxTimeDelaySeconds</a></code> | <code>java.lang.Number</code> | <p>The maximum time delay for time-shifted viewing. |

---

##### `maxTimeDelaySeconds`<sup>Optional</sup> <a name="maxTimeDelaySeconds" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfiguration.property.maxTimeDelaySeconds"></a>

```java
public java.lang.Number getMaxTimeDelaySeconds();
```

- *Type:* java.lang.Number

<p>The maximum time delay for time-shifted viewing.

The minimum allowed maximum time delay is 0 seconds, and the maximum allowed maximum time delay is 21600 seconds (6 hours).</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediatailor_channel#max_time_delay_seconds MediatailorChannel#max_time_delay_seconds}

---

## Classes <a name="Classes" id="Classes"></a>

### MediatailorChannelFillerSlateOutputReference <a name="MediatailorChannelFillerSlateOutputReference" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_channel.MediatailorChannelFillerSlateOutputReference;

new MediatailorChannelFillerSlateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.resetSourceLocationName">resetSourceLocationName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.resetVodSourceName">resetVodSourceName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSourceLocationName` <a name="resetSourceLocationName" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.resetSourceLocationName"></a>

```java
public void resetSourceLocationName()
```

##### `resetVodSourceName` <a name="resetVodSourceName" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.resetVodSourceName"></a>

```java
public void resetVodSourceName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.property.sourceLocationNameInput">sourceLocationNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.property.vodSourceNameInput">vodSourceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.property.sourceLocationName">sourceLocationName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.property.vodSourceName">vodSourceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlate">MediatailorChannelFillerSlate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sourceLocationNameInput`<sup>Optional</sup> <a name="sourceLocationNameInput" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.property.sourceLocationNameInput"></a>

```java
public java.lang.String getSourceLocationNameInput();
```

- *Type:* java.lang.String

---

##### `vodSourceNameInput`<sup>Optional</sup> <a name="vodSourceNameInput" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.property.vodSourceNameInput"></a>

```java
public java.lang.String getVodSourceNameInput();
```

- *Type:* java.lang.String

---

##### `sourceLocationName`<sup>Required</sup> <a name="sourceLocationName" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.property.sourceLocationName"></a>

```java
public java.lang.String getSourceLocationName();
```

- *Type:* java.lang.String

---

##### `vodSourceName`<sup>Required</sup> <a name="vodSourceName" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.property.vodSourceName"></a>

```java
public java.lang.String getVodSourceName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlateOutputReference.property.internalValue"></a>

```java
public IResolvable|MediatailorChannelFillerSlate getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelFillerSlate">MediatailorChannelFillerSlate</a>

---


### MediatailorChannelLogConfigurationOutputReference <a name="MediatailorChannelLogConfigurationOutputReference" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_channel.MediatailorChannelLogConfigurationOutputReference;

new MediatailorChannelLogConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.resetLogTypes">resetLogTypes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLogTypes` <a name="resetLogTypes" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.resetLogTypes"></a>

```java
public void resetLogTypes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.property.logTypesInput">logTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.property.logTypes">logTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfiguration">MediatailorChannelLogConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `logTypesInput`<sup>Optional</sup> <a name="logTypesInput" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.property.logTypesInput"></a>

```java
public java.util.List<java.lang.String> getLogTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `logTypes`<sup>Required</sup> <a name="logTypes" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.property.logTypes"></a>

```java
public java.util.List<java.lang.String> getLogTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|MediatailorChannelLogConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelLogConfiguration">MediatailorChannelLogConfiguration</a>

---


### MediatailorChannelOutputsDashPlaylistSettingsOutputReference <a name="MediatailorChannelOutputsDashPlaylistSettingsOutputReference" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_channel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference;

new MediatailorChannelOutputsDashPlaylistSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.resetManifestWindowSeconds">resetManifestWindowSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.resetMinBufferTimeSeconds">resetMinBufferTimeSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.resetMinUpdatePeriodSeconds">resetMinUpdatePeriodSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.resetSuggestedPresentationDelaySeconds">resetSuggestedPresentationDelaySeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetManifestWindowSeconds` <a name="resetManifestWindowSeconds" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.resetManifestWindowSeconds"></a>

```java
public void resetManifestWindowSeconds()
```

##### `resetMinBufferTimeSeconds` <a name="resetMinBufferTimeSeconds" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.resetMinBufferTimeSeconds"></a>

```java
public void resetMinBufferTimeSeconds()
```

##### `resetMinUpdatePeriodSeconds` <a name="resetMinUpdatePeriodSeconds" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.resetMinUpdatePeriodSeconds"></a>

```java
public void resetMinUpdatePeriodSeconds()
```

##### `resetSuggestedPresentationDelaySeconds` <a name="resetSuggestedPresentationDelaySeconds" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.resetSuggestedPresentationDelaySeconds"></a>

```java
public void resetSuggestedPresentationDelaySeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.property.manifestWindowSecondsInput">manifestWindowSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.property.minBufferTimeSecondsInput">minBufferTimeSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.property.minUpdatePeriodSecondsInput">minUpdatePeriodSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.property.suggestedPresentationDelaySecondsInput">suggestedPresentationDelaySecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.property.manifestWindowSeconds">manifestWindowSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.property.minBufferTimeSeconds">minBufferTimeSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.property.minUpdatePeriodSeconds">minUpdatePeriodSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.property.suggestedPresentationDelaySeconds">suggestedPresentationDelaySeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettings">MediatailorChannelOutputsDashPlaylistSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `manifestWindowSecondsInput`<sup>Optional</sup> <a name="manifestWindowSecondsInput" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.property.manifestWindowSecondsInput"></a>

```java
public java.lang.Number getManifestWindowSecondsInput();
```

- *Type:* java.lang.Number

---

##### `minBufferTimeSecondsInput`<sup>Optional</sup> <a name="minBufferTimeSecondsInput" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.property.minBufferTimeSecondsInput"></a>

```java
public java.lang.Number getMinBufferTimeSecondsInput();
```

- *Type:* java.lang.Number

---

##### `minUpdatePeriodSecondsInput`<sup>Optional</sup> <a name="minUpdatePeriodSecondsInput" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.property.minUpdatePeriodSecondsInput"></a>

```java
public java.lang.Number getMinUpdatePeriodSecondsInput();
```

- *Type:* java.lang.Number

---

##### `suggestedPresentationDelaySecondsInput`<sup>Optional</sup> <a name="suggestedPresentationDelaySecondsInput" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.property.suggestedPresentationDelaySecondsInput"></a>

```java
public java.lang.Number getSuggestedPresentationDelaySecondsInput();
```

- *Type:* java.lang.Number

---

##### `manifestWindowSeconds`<sup>Required</sup> <a name="manifestWindowSeconds" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.property.manifestWindowSeconds"></a>

```java
public java.lang.Number getManifestWindowSeconds();
```

- *Type:* java.lang.Number

---

##### `minBufferTimeSeconds`<sup>Required</sup> <a name="minBufferTimeSeconds" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.property.minBufferTimeSeconds"></a>

```java
public java.lang.Number getMinBufferTimeSeconds();
```

- *Type:* java.lang.Number

---

##### `minUpdatePeriodSeconds`<sup>Required</sup> <a name="minUpdatePeriodSeconds" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.property.minUpdatePeriodSeconds"></a>

```java
public java.lang.Number getMinUpdatePeriodSeconds();
```

- *Type:* java.lang.Number

---

##### `suggestedPresentationDelaySeconds`<sup>Required</sup> <a name="suggestedPresentationDelaySeconds" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.property.suggestedPresentationDelaySeconds"></a>

```java
public java.lang.Number getSuggestedPresentationDelaySeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference.property.internalValue"></a>

```java
public IResolvable|MediatailorChannelOutputsDashPlaylistSettings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettings">MediatailorChannelOutputsDashPlaylistSettings</a>

---


### MediatailorChannelOutputsHlsPlaylistSettingsOutputReference <a name="MediatailorChannelOutputsHlsPlaylistSettingsOutputReference" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_channel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference;

new MediatailorChannelOutputsHlsPlaylistSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.resetAdMarkupType">resetAdMarkupType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.resetManifestWindowSeconds">resetManifestWindowSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAdMarkupType` <a name="resetAdMarkupType" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.resetAdMarkupType"></a>

```java
public void resetAdMarkupType()
```

##### `resetManifestWindowSeconds` <a name="resetManifestWindowSeconds" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.resetManifestWindowSeconds"></a>

```java
public void resetManifestWindowSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.property.adMarkupTypeInput">adMarkupTypeInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.property.manifestWindowSecondsInput">manifestWindowSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.property.adMarkupType">adMarkupType</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.property.manifestWindowSeconds">manifestWindowSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettings">MediatailorChannelOutputsHlsPlaylistSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `adMarkupTypeInput`<sup>Optional</sup> <a name="adMarkupTypeInput" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.property.adMarkupTypeInput"></a>

```java
public java.util.List<java.lang.String> getAdMarkupTypeInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `manifestWindowSecondsInput`<sup>Optional</sup> <a name="manifestWindowSecondsInput" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.property.manifestWindowSecondsInput"></a>

```java
public java.lang.Number getManifestWindowSecondsInput();
```

- *Type:* java.lang.Number

---

##### `adMarkupType`<sup>Required</sup> <a name="adMarkupType" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.property.adMarkupType"></a>

```java
public java.util.List<java.lang.String> getAdMarkupType();
```

- *Type:* java.util.List<java.lang.String>

---

##### `manifestWindowSeconds`<sup>Required</sup> <a name="manifestWindowSeconds" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.property.manifestWindowSeconds"></a>

```java
public java.lang.Number getManifestWindowSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference.property.internalValue"></a>

```java
public IResolvable|MediatailorChannelOutputsHlsPlaylistSettings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettings">MediatailorChannelOutputsHlsPlaylistSettings</a>

---


### MediatailorChannelOutputsList <a name="MediatailorChannelOutputsList" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_channel.MediatailorChannelOutputsList;

new MediatailorChannelOutputsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsList.get"></a>

```java
public MediatailorChannelOutputsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputs">MediatailorChannelOutputs</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<MediatailorChannelOutputs> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputs">MediatailorChannelOutputs</a>>

---


### MediatailorChannelOutputsOutputReference <a name="MediatailorChannelOutputsOutputReference" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_channel.MediatailorChannelOutputsOutputReference;

new MediatailorChannelOutputsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.putDashPlaylistSettings">putDashPlaylistSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.putHlsPlaylistSettings">putHlsPlaylistSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.resetDashPlaylistSettings">resetDashPlaylistSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.resetHlsPlaylistSettings">resetHlsPlaylistSettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDashPlaylistSettings` <a name="putDashPlaylistSettings" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.putDashPlaylistSettings"></a>

```java
public void putDashPlaylistSettings(MediatailorChannelOutputsDashPlaylistSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.putDashPlaylistSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettings">MediatailorChannelOutputsDashPlaylistSettings</a>

---

##### `putHlsPlaylistSettings` <a name="putHlsPlaylistSettings" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.putHlsPlaylistSettings"></a>

```java
public void putHlsPlaylistSettings(MediatailorChannelOutputsHlsPlaylistSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.putHlsPlaylistSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettings">MediatailorChannelOutputsHlsPlaylistSettings</a>

---

##### `resetDashPlaylistSettings` <a name="resetDashPlaylistSettings" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.resetDashPlaylistSettings"></a>

```java
public void resetDashPlaylistSettings()
```

##### `resetHlsPlaylistSettings` <a name="resetHlsPlaylistSettings" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.resetHlsPlaylistSettings"></a>

```java
public void resetHlsPlaylistSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.property.dashPlaylistSettings">dashPlaylistSettings</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference">MediatailorChannelOutputsDashPlaylistSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.property.hlsPlaylistSettings">hlsPlaylistSettings</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference">MediatailorChannelOutputsHlsPlaylistSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.property.dashPlaylistSettingsInput">dashPlaylistSettingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettings">MediatailorChannelOutputsDashPlaylistSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.property.hlsPlaylistSettingsInput">hlsPlaylistSettingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettings">MediatailorChannelOutputsHlsPlaylistSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.property.manifestNameInput">manifestNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.property.sourceGroupInput">sourceGroupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.property.manifestName">manifestName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.property.sourceGroup">sourceGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputs">MediatailorChannelOutputs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dashPlaylistSettings`<sup>Required</sup> <a name="dashPlaylistSettings" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.property.dashPlaylistSettings"></a>

```java
public MediatailorChannelOutputsDashPlaylistSettingsOutputReference getDashPlaylistSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettingsOutputReference">MediatailorChannelOutputsDashPlaylistSettingsOutputReference</a>

---

##### `hlsPlaylistSettings`<sup>Required</sup> <a name="hlsPlaylistSettings" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.property.hlsPlaylistSettings"></a>

```java
public MediatailorChannelOutputsHlsPlaylistSettingsOutputReference getHlsPlaylistSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettingsOutputReference">MediatailorChannelOutputsHlsPlaylistSettingsOutputReference</a>

---

##### `dashPlaylistSettingsInput`<sup>Optional</sup> <a name="dashPlaylistSettingsInput" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.property.dashPlaylistSettingsInput"></a>

```java
public IResolvable|MediatailorChannelOutputsDashPlaylistSettings getDashPlaylistSettingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsDashPlaylistSettings">MediatailorChannelOutputsDashPlaylistSettings</a>

---

##### `hlsPlaylistSettingsInput`<sup>Optional</sup> <a name="hlsPlaylistSettingsInput" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.property.hlsPlaylistSettingsInput"></a>

```java
public IResolvable|MediatailorChannelOutputsHlsPlaylistSettings getHlsPlaylistSettingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsHlsPlaylistSettings">MediatailorChannelOutputsHlsPlaylistSettings</a>

---

##### `manifestNameInput`<sup>Optional</sup> <a name="manifestNameInput" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.property.manifestNameInput"></a>

```java
public java.lang.String getManifestNameInput();
```

- *Type:* java.lang.String

---

##### `sourceGroupInput`<sup>Optional</sup> <a name="sourceGroupInput" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.property.sourceGroupInput"></a>

```java
public java.lang.String getSourceGroupInput();
```

- *Type:* java.lang.String

---

##### `manifestName`<sup>Required</sup> <a name="manifestName" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.property.manifestName"></a>

```java
public java.lang.String getManifestName();
```

- *Type:* java.lang.String

---

##### `sourceGroup`<sup>Required</sup> <a name="sourceGroup" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.property.sourceGroup"></a>

```java
public java.lang.String getSourceGroup();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputsOutputReference.property.internalValue"></a>

```java
public IResolvable|MediatailorChannelOutputs getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelOutputs">MediatailorChannelOutputs</a>

---


### MediatailorChannelTagsList <a name="MediatailorChannelTagsList" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_channel.MediatailorChannelTagsList;

new MediatailorChannelTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsList.get"></a>

```java
public MediatailorChannelTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTags">MediatailorChannelTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<MediatailorChannelTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTags">MediatailorChannelTags</a>>

---


### MediatailorChannelTagsOutputReference <a name="MediatailorChannelTagsOutputReference" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_channel.MediatailorChannelTagsOutputReference;

new MediatailorChannelTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTags">MediatailorChannelTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|MediatailorChannelTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTags">MediatailorChannelTags</a>

---


### MediatailorChannelTimeShiftConfigurationOutputReference <a name="MediatailorChannelTimeShiftConfigurationOutputReference" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_channel.MediatailorChannelTimeShiftConfigurationOutputReference;

new MediatailorChannelTimeShiftConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.resetMaxTimeDelaySeconds">resetMaxTimeDelaySeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxTimeDelaySeconds` <a name="resetMaxTimeDelaySeconds" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.resetMaxTimeDelaySeconds"></a>

```java
public void resetMaxTimeDelaySeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.property.maxTimeDelaySecondsInput">maxTimeDelaySecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.property.maxTimeDelaySeconds">maxTimeDelaySeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfiguration">MediatailorChannelTimeShiftConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxTimeDelaySecondsInput`<sup>Optional</sup> <a name="maxTimeDelaySecondsInput" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.property.maxTimeDelaySecondsInput"></a>

```java
public java.lang.Number getMaxTimeDelaySecondsInput();
```

- *Type:* java.lang.Number

---

##### `maxTimeDelaySeconds`<sup>Required</sup> <a name="maxTimeDelaySeconds" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.property.maxTimeDelaySeconds"></a>

```java
public java.lang.Number getMaxTimeDelaySeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|MediatailorChannelTimeShiftConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorChannel.MediatailorChannelTimeShiftConfiguration">MediatailorChannelTimeShiftConfiguration</a>

---



