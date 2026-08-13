# `ssmcontactsContactChannel` Submodule <a name="`ssmcontactsContactChannel` Submodule" id="@cdktn/provider-awscc.ssmcontactsContactChannel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SsmcontactsContactChannel <a name="SsmcontactsContactChannel" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmcontacts_contact_channel awscc_ssmcontacts_contact_channel}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.Initializer"></a>

```java
import io.cdktn.providers.awscc.ssmcontacts_contact_channel.SsmcontactsContactChannel;

SsmcontactsContactChannel.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .channelAddress(java.lang.String)
//  .channelName(java.lang.String)
//  .channelType(java.lang.String)
//  .contactId(java.lang.String)
//  .deferActivation(java.lang.Boolean|IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.Initializer.parameter.channelAddress">channelAddress</a></code> | <code>java.lang.String</code> | The details that SSM Incident Manager uses when trying to engage the contact channel. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.Initializer.parameter.channelName">channelName</a></code> | <code>java.lang.String</code> | The device name. String of 6 to 50 alphabetical, numeric, dash, and underscore characters. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.Initializer.parameter.channelType">channelType</a></code> | <code>java.lang.String</code> | Device type, which specify notification channel. Currently supported values: ?SMS?, ?VOICE?, ?EMAIL?, ?CHATBOT. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.Initializer.parameter.contactId">contactId</a></code> | <code>java.lang.String</code> | ARN of the contact resource. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.Initializer.parameter.deferActivation">deferActivation</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If you want to activate the channel at a later time, you can choose to defer activation. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `channelAddress`<sup>Optional</sup> <a name="channelAddress" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.Initializer.parameter.channelAddress"></a>

- *Type:* java.lang.String

The details that SSM Incident Manager uses when trying to engage the contact channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmcontacts_contact_channel#channel_address SsmcontactsContactChannel#channel_address}

---

##### `channelName`<sup>Optional</sup> <a name="channelName" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.Initializer.parameter.channelName"></a>

- *Type:* java.lang.String

The device name. String of 6 to 50 alphabetical, numeric, dash, and underscore characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmcontacts_contact_channel#channel_name SsmcontactsContactChannel#channel_name}

---

##### `channelType`<sup>Optional</sup> <a name="channelType" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.Initializer.parameter.channelType"></a>

- *Type:* java.lang.String

Device type, which specify notification channel. Currently supported values: ?SMS?, ?VOICE?, ?EMAIL?, ?CHATBOT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmcontacts_contact_channel#channel_type SsmcontactsContactChannel#channel_type}

---

##### `contactId`<sup>Optional</sup> <a name="contactId" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.Initializer.parameter.contactId"></a>

- *Type:* java.lang.String

ARN of the contact resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmcontacts_contact_channel#contact_id SsmcontactsContactChannel#contact_id}

---

##### `deferActivation`<sup>Optional</sup> <a name="deferActivation" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.Initializer.parameter.deferActivation"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If you want to activate the channel at a later time, you can choose to defer activation.

SSM Incident Manager can't engage your contact channel until it has been activated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmcontacts_contact_channel#defer_activation SsmcontactsContactChannel#defer_activation}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.resetChannelAddress">resetChannelAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.resetChannelName">resetChannelName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.resetChannelType">resetChannelType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.resetContactId">resetContactId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.resetDeferActivation">resetDeferActivation</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetChannelAddress` <a name="resetChannelAddress" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.resetChannelAddress"></a>

```java
public void resetChannelAddress()
```

##### `resetChannelName` <a name="resetChannelName" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.resetChannelName"></a>

```java
public void resetChannelName()
```

##### `resetChannelType` <a name="resetChannelType" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.resetChannelType"></a>

```java
public void resetChannelType()
```

##### `resetContactId` <a name="resetContactId" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.resetContactId"></a>

```java
public void resetContactId()
```

##### `resetDeferActivation` <a name="resetDeferActivation" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.resetDeferActivation"></a>

```java
public void resetDeferActivation()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SsmcontactsContactChannel resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.isConstruct"></a>

```java
import io.cdktn.providers.awscc.ssmcontacts_contact_channel.SsmcontactsContactChannel;

SsmcontactsContactChannel.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.ssmcontacts_contact_channel.SsmcontactsContactChannel;

SsmcontactsContactChannel.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.ssmcontacts_contact_channel.SsmcontactsContactChannel;

SsmcontactsContactChannel.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.ssmcontacts_contact_channel.SsmcontactsContactChannel;

SsmcontactsContactChannel.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SsmcontactsContactChannel.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a SsmcontactsContactChannel resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SsmcontactsContactChannel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SsmcontactsContactChannel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmcontacts_contact_channel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the SsmcontactsContactChannel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.channelAddressInput">channelAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.channelNameInput">channelNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.channelTypeInput">channelTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.contactIdInput">contactIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.deferActivationInput">deferActivationInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.channelAddress">channelAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.channelName">channelName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.channelType">channelType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.contactId">contactId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.deferActivation">deferActivation</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `channelAddressInput`<sup>Optional</sup> <a name="channelAddressInput" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.channelAddressInput"></a>

```java
public java.lang.String getChannelAddressInput();
```

- *Type:* java.lang.String

---

##### `channelNameInput`<sup>Optional</sup> <a name="channelNameInput" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.channelNameInput"></a>

```java
public java.lang.String getChannelNameInput();
```

- *Type:* java.lang.String

---

##### `channelTypeInput`<sup>Optional</sup> <a name="channelTypeInput" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.channelTypeInput"></a>

```java
public java.lang.String getChannelTypeInput();
```

- *Type:* java.lang.String

---

##### `contactIdInput`<sup>Optional</sup> <a name="contactIdInput" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.contactIdInput"></a>

```java
public java.lang.String getContactIdInput();
```

- *Type:* java.lang.String

---

##### `deferActivationInput`<sup>Optional</sup> <a name="deferActivationInput" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.deferActivationInput"></a>

```java
public java.lang.Boolean|IResolvable getDeferActivationInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `channelAddress`<sup>Required</sup> <a name="channelAddress" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.channelAddress"></a>

```java
public java.lang.String getChannelAddress();
```

- *Type:* java.lang.String

---

##### `channelName`<sup>Required</sup> <a name="channelName" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.channelName"></a>

```java
public java.lang.String getChannelName();
```

- *Type:* java.lang.String

---

##### `channelType`<sup>Required</sup> <a name="channelType" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.channelType"></a>

```java
public java.lang.String getChannelType();
```

- *Type:* java.lang.String

---

##### `contactId`<sup>Required</sup> <a name="contactId" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.contactId"></a>

```java
public java.lang.String getContactId();
```

- *Type:* java.lang.String

---

##### `deferActivation`<sup>Required</sup> <a name="deferActivation" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.deferActivation"></a>

```java
public java.lang.Boolean|IResolvable getDeferActivation();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannel.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SsmcontactsContactChannelConfig <a name="SsmcontactsContactChannelConfig" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannelConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.ssmcontacts_contact_channel.SsmcontactsContactChannelConfig;

SsmcontactsContactChannelConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .channelAddress(java.lang.String)
//  .channelName(java.lang.String)
//  .channelType(java.lang.String)
//  .contactId(java.lang.String)
//  .deferActivation(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannelConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannelConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannelConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannelConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannelConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannelConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannelConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannelConfig.property.channelAddress">channelAddress</a></code> | <code>java.lang.String</code> | The details that SSM Incident Manager uses when trying to engage the contact channel. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannelConfig.property.channelName">channelName</a></code> | <code>java.lang.String</code> | The device name. String of 6 to 50 alphabetical, numeric, dash, and underscore characters. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannelConfig.property.channelType">channelType</a></code> | <code>java.lang.String</code> | Device type, which specify notification channel. Currently supported values: ?SMS?, ?VOICE?, ?EMAIL?, ?CHATBOT. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannelConfig.property.contactId">contactId</a></code> | <code>java.lang.String</code> | ARN of the contact resource. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannelConfig.property.deferActivation">deferActivation</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If you want to activate the channel at a later time, you can choose to defer activation. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannelConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannelConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannelConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannelConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannelConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannelConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannelConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `channelAddress`<sup>Optional</sup> <a name="channelAddress" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannelConfig.property.channelAddress"></a>

```java
public java.lang.String getChannelAddress();
```

- *Type:* java.lang.String

The details that SSM Incident Manager uses when trying to engage the contact channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmcontacts_contact_channel#channel_address SsmcontactsContactChannel#channel_address}

---

##### `channelName`<sup>Optional</sup> <a name="channelName" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannelConfig.property.channelName"></a>

```java
public java.lang.String getChannelName();
```

- *Type:* java.lang.String

The device name. String of 6 to 50 alphabetical, numeric, dash, and underscore characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmcontacts_contact_channel#channel_name SsmcontactsContactChannel#channel_name}

---

##### `channelType`<sup>Optional</sup> <a name="channelType" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannelConfig.property.channelType"></a>

```java
public java.lang.String getChannelType();
```

- *Type:* java.lang.String

Device type, which specify notification channel. Currently supported values: ?SMS?, ?VOICE?, ?EMAIL?, ?CHATBOT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmcontacts_contact_channel#channel_type SsmcontactsContactChannel#channel_type}

---

##### `contactId`<sup>Optional</sup> <a name="contactId" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannelConfig.property.contactId"></a>

```java
public java.lang.String getContactId();
```

- *Type:* java.lang.String

ARN of the contact resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmcontacts_contact_channel#contact_id SsmcontactsContactChannel#contact_id}

---

##### `deferActivation`<sup>Optional</sup> <a name="deferActivation" id="@cdktn/provider-awscc.ssmcontactsContactChannel.SsmcontactsContactChannelConfig.property.deferActivation"></a>

```java
public java.lang.Boolean|IResolvable getDeferActivation();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If you want to activate the channel at a later time, you can choose to defer activation.

SSM Incident Manager can't engage your contact channel until it has been activated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmcontacts_contact_channel#defer_activation SsmcontactsContactChannel#defer_activation}

---



