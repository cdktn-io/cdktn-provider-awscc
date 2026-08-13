# `ivschatRoom` Submodule <a name="`ivschatRoom` Submodule" id="@cdktn/provider-awscc.ivschatRoom"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IvschatRoom <a name="IvschatRoom" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoom"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivschat_room awscc_ivschat_room}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoom.Initializer"></a>

```java
import io.cdktn.providers.awscc.ivschat_room.IvschatRoom;

IvschatRoom.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .loggingConfigurationIdentifiers(java.util.List<java.lang.String>)
//  .maximumMessageLength(java.lang.Number)
//  .maximumMessageRatePerSecond(java.lang.Number)
//  .messageReviewHandler(IvschatRoomMessageReviewHandler)
//  .name(java.lang.String)
//  .tags(IResolvable|java.util.List<IvschatRoomTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoom.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoom.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoom.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoom.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoom.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoom.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoom.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoom.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoom.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoom.Initializer.parameter.loggingConfigurationIdentifiers">loggingConfigurationIdentifiers</a></code> | <code>java.util.List<java.lang.String></code> | Array of logging configuration identifiers attached to the room. |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoom.Initializer.parameter.maximumMessageLength">maximumMessageLength</a></code> | <code>java.lang.Number</code> | The maximum number of characters in a single message. |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoom.Initializer.parameter.maximumMessageRatePerSecond">maximumMessageRatePerSecond</a></code> | <code>java.lang.Number</code> | The maximum number of messages per second that can be sent to the room. |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoom.Initializer.parameter.messageReviewHandler">messageReviewHandler</a></code> | <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoomMessageReviewHandler">IvschatRoomMessageReviewHandler</a></code> | Configuration information for optional review of messages. |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoom.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the room. The value does not need to be unique. |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoom.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoomTags">IvschatRoomTags</a>></code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoom.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoom.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoom.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoom.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoom.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoom.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoom.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoom.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoom.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `loggingConfigurationIdentifiers`<sup>Optional</sup> <a name="loggingConfigurationIdentifiers" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoom.Initializer.parameter.loggingConfigurationIdentifiers"></a>

- *Type:* java.util.List<java.lang.String>

Array of logging configuration identifiers attached to the room.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivschat_room#logging_configuration_identifiers IvschatRoom#logging_configuration_identifiers}

---

##### `maximumMessageLength`<sup>Optional</sup> <a name="maximumMessageLength" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoom.Initializer.parameter.maximumMessageLength"></a>

- *Type:* java.lang.Number

The maximum number of characters in a single message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivschat_room#maximum_message_length IvschatRoom#maximum_message_length}

---

##### `maximumMessageRatePerSecond`<sup>Optional</sup> <a name="maximumMessageRatePerSecond" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoom.Initializer.parameter.maximumMessageRatePerSecond"></a>

- *Type:* java.lang.Number

The maximum number of messages per second that can be sent to the room.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivschat_room#maximum_message_rate_per_second IvschatRoom#maximum_message_rate_per_second}

---

##### `messageReviewHandler`<sup>Optional</sup> <a name="messageReviewHandler" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoom.Initializer.parameter.messageReviewHandler"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoomMessageReviewHandler">IvschatRoomMessageReviewHandler</a>

Configuration information for optional review of messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivschat_room#message_review_handler IvschatRoom#message_review_handler}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoom.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the room. The value does not need to be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivschat_room#name IvschatRoom#name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoom.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoomTags">IvschatRoomTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivschat_room#tags IvschatRoom#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoom.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoom.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoom.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoom.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoom.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoom.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoom.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoom.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoom.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoom.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoom.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoom.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoom.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoom.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoom.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoom.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoom.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoom.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoom.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoom.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoom.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoom.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoom.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoom.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoom.putMessageReviewHandler">putMessageReviewHandler</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoom.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoom.resetLoggingConfigurationIdentifiers">resetLoggingConfigurationIdentifiers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoom.resetMaximumMessageLength">resetMaximumMessageLength</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoom.resetMaximumMessageRatePerSecond">resetMaximumMessageRatePerSecond</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoom.resetMessageReviewHandler">resetMessageReviewHandler</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoom.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoom.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoom.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoom.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoom.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoom.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoom.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoom.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoom.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoom.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoom.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoom.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoom.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoom.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoom.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoom.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoom.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoom.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoom.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoom.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoom.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoom.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoom.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoom.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoom.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoom.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoom.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoom.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoom.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoom.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoom.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoom.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoom.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoom.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoom.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoom.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoom.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoom.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoom.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoom.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoom.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoom.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoom.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoom.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoom.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoom.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoom.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMessageReviewHandler` <a name="putMessageReviewHandler" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoom.putMessageReviewHandler"></a>

```java
public void putMessageReviewHandler(IvschatRoomMessageReviewHandler value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoom.putMessageReviewHandler.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoomMessageReviewHandler">IvschatRoomMessageReviewHandler</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoom.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<IvschatRoomTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoom.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoomTags">IvschatRoomTags</a>>

---

##### `resetLoggingConfigurationIdentifiers` <a name="resetLoggingConfigurationIdentifiers" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoom.resetLoggingConfigurationIdentifiers"></a>

```java
public void resetLoggingConfigurationIdentifiers()
```

##### `resetMaximumMessageLength` <a name="resetMaximumMessageLength" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoom.resetMaximumMessageLength"></a>

```java
public void resetMaximumMessageLength()
```

##### `resetMaximumMessageRatePerSecond` <a name="resetMaximumMessageRatePerSecond" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoom.resetMaximumMessageRatePerSecond"></a>

```java
public void resetMaximumMessageRatePerSecond()
```

##### `resetMessageReviewHandler` <a name="resetMessageReviewHandler" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoom.resetMessageReviewHandler"></a>

```java
public void resetMessageReviewHandler()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoom.resetName"></a>

```java
public void resetName()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoom.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoom.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoom.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoom.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoom.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IvschatRoom resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoom.isConstruct"></a>

```java
import io.cdktn.providers.awscc.ivschat_room.IvschatRoom;

IvschatRoom.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoom.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoom.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.ivschat_room.IvschatRoom;

IvschatRoom.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoom.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoom.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.ivschat_room.IvschatRoom;

IvschatRoom.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoom.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoom.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.ivschat_room.IvschatRoom;

IvschatRoom.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IvschatRoom.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a IvschatRoom resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoom.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoom.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IvschatRoom to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoom.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IvschatRoom that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivschat_room#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoom.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the IvschatRoom to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoom.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoom.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoom.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoom.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoom.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoom.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoom.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoom.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoom.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoom.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoom.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoom.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoom.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoom.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoom.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoom.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoom.property.messageReviewHandler">messageReviewHandler</a></code> | <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference">IvschatRoomMessageReviewHandlerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoom.property.roomId">roomId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoom.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoomTagsList">IvschatRoomTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoom.property.loggingConfigurationIdentifiersInput">loggingConfigurationIdentifiersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoom.property.maximumMessageLengthInput">maximumMessageLengthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoom.property.maximumMessageRatePerSecondInput">maximumMessageRatePerSecondInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoom.property.messageReviewHandlerInput">messageReviewHandlerInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoomMessageReviewHandler">IvschatRoomMessageReviewHandler</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoom.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoom.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoomTags">IvschatRoomTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoom.property.loggingConfigurationIdentifiers">loggingConfigurationIdentifiers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoom.property.maximumMessageLength">maximumMessageLength</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoom.property.maximumMessageRatePerSecond">maximumMessageRatePerSecond</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoom.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoom.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoom.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoom.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoom.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoom.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoom.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoom.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoom.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoom.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoom.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoom.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoom.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoom.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoom.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoom.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoom.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `messageReviewHandler`<sup>Required</sup> <a name="messageReviewHandler" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoom.property.messageReviewHandler"></a>

```java
public IvschatRoomMessageReviewHandlerOutputReference getMessageReviewHandler();
```

- *Type:* <a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference">IvschatRoomMessageReviewHandlerOutputReference</a>

---

##### `roomId`<sup>Required</sup> <a name="roomId" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoom.property.roomId"></a>

```java
public java.lang.String getRoomId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoom.property.tags"></a>

```java
public IvschatRoomTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoomTagsList">IvschatRoomTagsList</a>

---

##### `loggingConfigurationIdentifiersInput`<sup>Optional</sup> <a name="loggingConfigurationIdentifiersInput" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoom.property.loggingConfigurationIdentifiersInput"></a>

```java
public java.util.List<java.lang.String> getLoggingConfigurationIdentifiersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `maximumMessageLengthInput`<sup>Optional</sup> <a name="maximumMessageLengthInput" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoom.property.maximumMessageLengthInput"></a>

```java
public java.lang.Number getMaximumMessageLengthInput();
```

- *Type:* java.lang.Number

---

##### `maximumMessageRatePerSecondInput`<sup>Optional</sup> <a name="maximumMessageRatePerSecondInput" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoom.property.maximumMessageRatePerSecondInput"></a>

```java
public java.lang.Number getMaximumMessageRatePerSecondInput();
```

- *Type:* java.lang.Number

---

##### `messageReviewHandlerInput`<sup>Optional</sup> <a name="messageReviewHandlerInput" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoom.property.messageReviewHandlerInput"></a>

```java
public IResolvable|IvschatRoomMessageReviewHandler getMessageReviewHandlerInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoomMessageReviewHandler">IvschatRoomMessageReviewHandler</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoom.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoom.property.tagsInput"></a>

```java
public IResolvable|java.util.List<IvschatRoomTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoomTags">IvschatRoomTags</a>>

---

##### `loggingConfigurationIdentifiers`<sup>Required</sup> <a name="loggingConfigurationIdentifiers" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoom.property.loggingConfigurationIdentifiers"></a>

```java
public java.util.List<java.lang.String> getLoggingConfigurationIdentifiers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `maximumMessageLength`<sup>Required</sup> <a name="maximumMessageLength" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoom.property.maximumMessageLength"></a>

```java
public java.lang.Number getMaximumMessageLength();
```

- *Type:* java.lang.Number

---

##### `maximumMessageRatePerSecond`<sup>Required</sup> <a name="maximumMessageRatePerSecond" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoom.property.maximumMessageRatePerSecond"></a>

```java
public java.lang.Number getMaximumMessageRatePerSecond();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoom.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoom.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoom.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IvschatRoomConfig <a name="IvschatRoomConfig" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoomConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoomConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.ivschat_room.IvschatRoomConfig;

IvschatRoomConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .loggingConfigurationIdentifiers(java.util.List<java.lang.String>)
//  .maximumMessageLength(java.lang.Number)
//  .maximumMessageRatePerSecond(java.lang.Number)
//  .messageReviewHandler(IvschatRoomMessageReviewHandler)
//  .name(java.lang.String)
//  .tags(IResolvable|java.util.List<IvschatRoomTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoomConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoomConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoomConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoomConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoomConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoomConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoomConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoomConfig.property.loggingConfigurationIdentifiers">loggingConfigurationIdentifiers</a></code> | <code>java.util.List<java.lang.String></code> | Array of logging configuration identifiers attached to the room. |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoomConfig.property.maximumMessageLength">maximumMessageLength</a></code> | <code>java.lang.Number</code> | The maximum number of characters in a single message. |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoomConfig.property.maximumMessageRatePerSecond">maximumMessageRatePerSecond</a></code> | <code>java.lang.Number</code> | The maximum number of messages per second that can be sent to the room. |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoomConfig.property.messageReviewHandler">messageReviewHandler</a></code> | <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoomMessageReviewHandler">IvschatRoomMessageReviewHandler</a></code> | Configuration information for optional review of messages. |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoomConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the room. The value does not need to be unique. |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoomConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoomTags">IvschatRoomTags</a>></code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoomConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoomConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoomConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoomConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoomConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoomConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoomConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `loggingConfigurationIdentifiers`<sup>Optional</sup> <a name="loggingConfigurationIdentifiers" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoomConfig.property.loggingConfigurationIdentifiers"></a>

```java
public java.util.List<java.lang.String> getLoggingConfigurationIdentifiers();
```

- *Type:* java.util.List<java.lang.String>

Array of logging configuration identifiers attached to the room.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivschat_room#logging_configuration_identifiers IvschatRoom#logging_configuration_identifiers}

---

##### `maximumMessageLength`<sup>Optional</sup> <a name="maximumMessageLength" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoomConfig.property.maximumMessageLength"></a>

```java
public java.lang.Number getMaximumMessageLength();
```

- *Type:* java.lang.Number

The maximum number of characters in a single message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivschat_room#maximum_message_length IvschatRoom#maximum_message_length}

---

##### `maximumMessageRatePerSecond`<sup>Optional</sup> <a name="maximumMessageRatePerSecond" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoomConfig.property.maximumMessageRatePerSecond"></a>

```java
public java.lang.Number getMaximumMessageRatePerSecond();
```

- *Type:* java.lang.Number

The maximum number of messages per second that can be sent to the room.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivschat_room#maximum_message_rate_per_second IvschatRoom#maximum_message_rate_per_second}

---

##### `messageReviewHandler`<sup>Optional</sup> <a name="messageReviewHandler" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoomConfig.property.messageReviewHandler"></a>

```java
public IvschatRoomMessageReviewHandler getMessageReviewHandler();
```

- *Type:* <a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoomMessageReviewHandler">IvschatRoomMessageReviewHandler</a>

Configuration information for optional review of messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivschat_room#message_review_handler IvschatRoom#message_review_handler}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoomConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the room. The value does not need to be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivschat_room#name IvschatRoom#name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoomConfig.property.tags"></a>

```java
public IResolvable|java.util.List<IvschatRoomTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoomTags">IvschatRoomTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivschat_room#tags IvschatRoom#tags}

---

### IvschatRoomMessageReviewHandler <a name="IvschatRoomMessageReviewHandler" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoomMessageReviewHandler"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoomMessageReviewHandler.Initializer"></a>

```java
import io.cdktn.providers.awscc.ivschat_room.IvschatRoomMessageReviewHandler;

IvschatRoomMessageReviewHandler.builder()
//  .fallbackResult(java.lang.String)
//  .uri(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoomMessageReviewHandler.property.fallbackResult">fallbackResult</a></code> | <code>java.lang.String</code> | Specifies the fallback behavior if the handler does not return a valid response, encounters an error, or times out. |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoomMessageReviewHandler.property.uri">uri</a></code> | <code>java.lang.String</code> | Identifier of the message review handler. |

---

##### `fallbackResult`<sup>Optional</sup> <a name="fallbackResult" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoomMessageReviewHandler.property.fallbackResult"></a>

```java
public java.lang.String getFallbackResult();
```

- *Type:* java.lang.String

Specifies the fallback behavior if the handler does not return a valid response, encounters an error, or times out.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivschat_room#fallback_result IvschatRoom#fallback_result}

---

##### `uri`<sup>Optional</sup> <a name="uri" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoomMessageReviewHandler.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

Identifier of the message review handler.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivschat_room#uri IvschatRoom#uri}

---

### IvschatRoomTags <a name="IvschatRoomTags" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoomTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoomTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.ivschat_room.IvschatRoomTags;

IvschatRoomTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoomTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoomTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoomTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivschat_room#key IvschatRoom#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoomTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ivschat_room#value IvschatRoom#value}

---

## Classes <a name="Classes" id="Classes"></a>

### IvschatRoomMessageReviewHandlerOutputReference <a name="IvschatRoomMessageReviewHandlerOutputReference" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ivschat_room.IvschatRoomMessageReviewHandlerOutputReference;

new IvschatRoomMessageReviewHandlerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.resetFallbackResult">resetFallbackResult</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.resetUri">resetUri</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFallbackResult` <a name="resetFallbackResult" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.resetFallbackResult"></a>

```java
public void resetFallbackResult()
```

##### `resetUri` <a name="resetUri" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.resetUri"></a>

```java
public void resetUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.property.fallbackResultInput">fallbackResultInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.property.uriInput">uriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.property.fallbackResult">fallbackResult</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.property.uri">uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoomMessageReviewHandler">IvschatRoomMessageReviewHandler</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fallbackResultInput`<sup>Optional</sup> <a name="fallbackResultInput" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.property.fallbackResultInput"></a>

```java
public java.lang.String getFallbackResultInput();
```

- *Type:* java.lang.String

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.property.uriInput"></a>

```java
public java.lang.String getUriInput();
```

- *Type:* java.lang.String

---

##### `fallbackResult`<sup>Required</sup> <a name="fallbackResult" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.property.fallbackResult"></a>

```java
public java.lang.String getFallbackResult();
```

- *Type:* java.lang.String

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.property.internalValue"></a>

```java
public IResolvable|IvschatRoomMessageReviewHandler getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoomMessageReviewHandler">IvschatRoomMessageReviewHandler</a>

---


### IvschatRoomTagsList <a name="IvschatRoomTagsList" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoomTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoomTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.ivschat_room.IvschatRoomTagsList;

new IvschatRoomTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoomTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoomTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoomTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoomTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoomTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoomTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoomTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoomTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoomTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoomTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoomTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoomTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoomTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoomTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoomTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoomTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoomTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoomTagsList.get"></a>

```java
public IvschatRoomTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoomTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoomTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoomTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoomTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoomTags">IvschatRoomTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoomTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoomTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoomTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<IvschatRoomTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoomTags">IvschatRoomTags</a>>

---


### IvschatRoomTagsOutputReference <a name="IvschatRoomTagsOutputReference" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoomTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoomTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ivschat_room.IvschatRoomTagsOutputReference;

new IvschatRoomTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoomTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoomTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoomTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoomTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoomTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoomTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoomTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoomTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoomTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoomTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoomTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoomTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoomTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoomTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoomTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoomTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoomTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoomTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoomTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoomTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoomTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoomTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoomTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoomTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoomTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoomTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoomTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoomTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoomTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoomTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoomTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoomTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoomTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoomTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoomTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoomTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoomTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoomTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoomTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoomTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoomTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoomTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoomTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoomTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoomTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoomTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoomTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoomTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoomTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoomTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoomTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoomTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoomTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoomTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoomTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoomTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoomTags">IvschatRoomTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoomTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoomTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoomTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoomTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoomTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoomTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ivschatRoom.IvschatRoomTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|IvschatRoomTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ivschatRoom.IvschatRoomTags">IvschatRoomTags</a>

---



