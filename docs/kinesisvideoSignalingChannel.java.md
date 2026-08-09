# `kinesisvideoSignalingChannel` Submodule <a name="`kinesisvideoSignalingChannel` Submodule" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KinesisvideoSignalingChannel <a name="KinesisvideoSignalingChannel" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kinesisvideo_signaling_channel awscc_kinesisvideo_signaling_channel}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.Initializer"></a>

```java
import io.cdktn.providers.awscc.kinesisvideo_signaling_channel.KinesisvideoSignalingChannel;

KinesisvideoSignalingChannel.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .messageTtlSeconds(java.lang.Number)
//  .name(java.lang.String)
//  .tags(IResolvable|java.util.List<KinesisvideoSignalingChannelTags>)
//  .type(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.Initializer.parameter.messageTtlSeconds">messageTtlSeconds</a></code> | <code>java.lang.Number</code> | The period of time a signaling channel retains undelivered messages before they are discarded. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the Kinesis Video Signaling Channel. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTags">KinesisvideoSignalingChannelTags</a>></code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | The type of the Kinesis Video Signaling Channel to create. Currently, SINGLE_MASTER is the only supported channel type. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `messageTtlSeconds`<sup>Optional</sup> <a name="messageTtlSeconds" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.Initializer.parameter.messageTtlSeconds"></a>

- *Type:* java.lang.Number

The period of time a signaling channel retains undelivered messages before they are discarded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kinesisvideo_signaling_channel#message_ttl_seconds KinesisvideoSignalingChannel#message_ttl_seconds}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the Kinesis Video Signaling Channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kinesisvideo_signaling_channel#name KinesisvideoSignalingChannel#name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTags">KinesisvideoSignalingChannelTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kinesisvideo_signaling_channel#tags KinesisvideoSignalingChannel#tags}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.Initializer.parameter.type"></a>

- *Type:* java.lang.String

The type of the Kinesis Video Signaling Channel to create. Currently, SINGLE_MASTER is the only supported channel type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kinesisvideo_signaling_channel#type KinesisvideoSignalingChannel#type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.resetMessageTtlSeconds">resetMessageTtlSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<KinesisvideoSignalingChannelTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTags">KinesisvideoSignalingChannelTags</a>>

---

##### `resetMessageTtlSeconds` <a name="resetMessageTtlSeconds" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.resetMessageTtlSeconds"></a>

```java
public void resetMessageTtlSeconds()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.resetName"></a>

```java
public void resetName()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.resetTags"></a>

```java
public void resetTags()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.resetType"></a>

```java
public void resetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a KinesisvideoSignalingChannel resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.isConstruct"></a>

```java
import io.cdktn.providers.awscc.kinesisvideo_signaling_channel.KinesisvideoSignalingChannel;

KinesisvideoSignalingChannel.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.kinesisvideo_signaling_channel.KinesisvideoSignalingChannel;

KinesisvideoSignalingChannel.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.kinesisvideo_signaling_channel.KinesisvideoSignalingChannel;

KinesisvideoSignalingChannel.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.kinesisvideo_signaling_channel.KinesisvideoSignalingChannel;

KinesisvideoSignalingChannel.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),KinesisvideoSignalingChannel.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a KinesisvideoSignalingChannel resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the KinesisvideoSignalingChannel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing KinesisvideoSignalingChannel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kinesisvideo_signaling_channel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the KinesisvideoSignalingChannel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsList">KinesisvideoSignalingChannelTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.messageTtlSecondsInput">messageTtlSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTags">KinesisvideoSignalingChannelTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.messageTtlSeconds">messageTtlSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.tags"></a>

```java
public KinesisvideoSignalingChannelTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsList">KinesisvideoSignalingChannelTagsList</a>

---

##### `messageTtlSecondsInput`<sup>Optional</sup> <a name="messageTtlSecondsInput" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.messageTtlSecondsInput"></a>

```java
public java.lang.Number getMessageTtlSecondsInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.tagsInput"></a>

```java
public IResolvable|java.util.List<KinesisvideoSignalingChannelTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTags">KinesisvideoSignalingChannelTags</a>>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `messageTtlSeconds`<sup>Required</sup> <a name="messageTtlSeconds" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.messageTtlSeconds"></a>

```java
public java.lang.Number getMessageTtlSeconds();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannel.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### KinesisvideoSignalingChannelConfig <a name="KinesisvideoSignalingChannelConfig" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.kinesisvideo_signaling_channel.KinesisvideoSignalingChannelConfig;

KinesisvideoSignalingChannelConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .messageTtlSeconds(java.lang.Number)
//  .name(java.lang.String)
//  .tags(IResolvable|java.util.List<KinesisvideoSignalingChannelTags>)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelConfig.property.messageTtlSeconds">messageTtlSeconds</a></code> | <code>java.lang.Number</code> | The period of time a signaling channel retains undelivered messages before they are discarded. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the Kinesis Video Signaling Channel. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTags">KinesisvideoSignalingChannelTags</a>></code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelConfig.property.type">type</a></code> | <code>java.lang.String</code> | The type of the Kinesis Video Signaling Channel to create. Currently, SINGLE_MASTER is the only supported channel type. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `messageTtlSeconds`<sup>Optional</sup> <a name="messageTtlSeconds" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelConfig.property.messageTtlSeconds"></a>

```java
public java.lang.Number getMessageTtlSeconds();
```

- *Type:* java.lang.Number

The period of time a signaling channel retains undelivered messages before they are discarded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kinesisvideo_signaling_channel#message_ttl_seconds KinesisvideoSignalingChannel#message_ttl_seconds}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the Kinesis Video Signaling Channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kinesisvideo_signaling_channel#name KinesisvideoSignalingChannel#name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelConfig.property.tags"></a>

```java
public IResolvable|java.util.List<KinesisvideoSignalingChannelTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTags">KinesisvideoSignalingChannelTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kinesisvideo_signaling_channel#tags KinesisvideoSignalingChannel#tags}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of the Kinesis Video Signaling Channel to create. Currently, SINGLE_MASTER is the only supported channel type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kinesisvideo_signaling_channel#type KinesisvideoSignalingChannel#type}

---

### KinesisvideoSignalingChannelTags <a name="KinesisvideoSignalingChannelTags" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.kinesisvideo_signaling_channel.KinesisvideoSignalingChannelTags;

KinesisvideoSignalingChannelTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

Specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. The following characters can be used: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kinesisvideo_signaling_channel#key KinesisvideoSignalingChannel#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

Specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:.  The following characters can be used: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/kinesisvideo_signaling_channel#value KinesisvideoSignalingChannel#value}

---

## Classes <a name="Classes" id="Classes"></a>

### KinesisvideoSignalingChannelTagsList <a name="KinesisvideoSignalingChannelTagsList" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.kinesisvideo_signaling_channel.KinesisvideoSignalingChannelTagsList;

new KinesisvideoSignalingChannelTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsList.get"></a>

```java
public KinesisvideoSignalingChannelTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTags">KinesisvideoSignalingChannelTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<KinesisvideoSignalingChannelTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTags">KinesisvideoSignalingChannelTags</a>>

---


### KinesisvideoSignalingChannelTagsOutputReference <a name="KinesisvideoSignalingChannelTagsOutputReference" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.kinesisvideo_signaling_channel.KinesisvideoSignalingChannelTagsOutputReference;

new KinesisvideoSignalingChannelTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTags">KinesisvideoSignalingChannelTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|KinesisvideoSignalingChannelTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kinesisvideoSignalingChannel.KinesisvideoSignalingChannelTags">KinesisvideoSignalingChannelTags</a>

---



